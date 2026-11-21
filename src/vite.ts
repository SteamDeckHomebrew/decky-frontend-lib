import Logger from './logger';
import { computeSpecialModules, findModule, modules } from './webpack';
import { prewarmRenderedComponents } from './rendered';

const logger = new Logger('Vite');

const CHUNK_URL = /\/chunk~[^/?#]+\.js(\?|$)/;
const CJS_FACTORY = /\{\s*exports\s*:\s*\{\s*\}\s*\}/;

let initialized = false;

// Present template literals as double quotes for the source finders.
function normalizeFunctionSource() {
  const nativeToString = Function.prototype.toString;
  const cache = new WeakMap<Function, string>();
  Function.prototype.toString = function (this: Function) {
    const cached = cache.get(this);
    if (cached !== undefined) return cached;
    const source = nativeToString.call(this).replace(/`/g, '"');
    cache.set(this, source);
    return source;
  };
}

const isReact = (m: any) =>
  m && typeof m.createElement === 'function' && typeof m.useState === 'function' && typeof m.Component === 'function';

const isReactDOM = (m: any) =>
  m && typeof m.createPortal === 'function' && (typeof m.createRoot === 'function' || typeof m.version === 'string');

const loadedChunkUrls = () => [
  ...new Map(
    performance
      .getEntriesByType('resource')
      .map((entry) => entry.name)
      .filter((url) => CHUNK_URL.test(url))
      .map((url) => [new URL(url).pathname, url]),
  ).values(),
];

async function importNamespace(url: string) {
  try {
    return await import(url);
  } catch (e) {
    logger.debug('Failed to import Vite chunk', url, e);
    return undefined;
  }
}

export async function initViteModuleCache(): Promise<void> {
  if (window.webpackChunksteamui || initialized) return;
  initialized = true;
  normalizeFunctionSource();

  const startTime = performance.now();
  logger.group('Vite Module Init');

  const namespaces = (await Promise.all(loadedChunkUrls().map(importNamespace))).filter(
    (namespace): namespace is Record<string, any> => !!namespace,
  );

  for (const [chunkIndex, namespace] of namespaces.entries()) {
    modules.set(`vite:chunk:${chunkIndex}`, namespace);
    for (const key of Object.keys(namespace)) {
      if (namespace[key] !== undefined) modules.set(`vite:${chunkIndex}:${key}`, namespace[key]);
    }
  }

  // Only materialize the lazy React factories; the rest re-inits Steam modules.
  let reactFound = false;
  let reactDOMFound = false;
  for (const namespace of namespaces) {
    for (const value of Object.values(namespace)) {
      if (typeof value !== 'function' || !CJS_FACTORY.test(value.toString())) continue;
      let moduleExports;
      try {
        moduleExports = value();
      } catch (e) {
        logger.debug('Failed to materialize Vite CommonJS module', e);
        continue;
      }
      if (isReact(moduleExports)) {
        modules.set(`vite:react`, moduleExports);
        reactFound = true;
      }
      if (isReactDOM(moduleExports)) {
        modules.set(`vite:react-dom`, moduleExports);
        reactDOMFound = true;
      }
      if (reactFound && reactDOMFound) break;
    }
    if (reactFound && reactDOMFound) break;
  }

  if (!window.SP_REACT) window.SP_REACT = findModule(isReact);
  if (!window.SP_REACTDOM) {
    window.SP_REACTDOM = findModule(
      (m) => isReactDOM(m) || (m?.default && isReactDOM(m.default)),
    );
  }
  if (!window.SP_JSX && window.SP_REACT) {
    const createElement = window.SP_REACT.createElement;
    const jsx = (type: any, props: any, key?: any) => {
      const jsxProps = { ...props };
      if (key !== undefined) jsxProps.key = key;
      const children = jsxProps.children;
      delete jsxProps.children;
      return children === undefined ? createElement(type, jsxProps) : createElement(type, jsxProps, children);
    };
    window.SP_JSX = { jsx, jsxs: jsx, Fragment: window.SP_REACT.Fragment };
  }

  computeSpecialModules();

  for (const delay of [4000, 12000, 30000]) window.setTimeout(prewarmRenderedComponents, delay);

  logger.groupEnd(`Modules initialized in ${performance.now() - startTime}ms...`);
}
