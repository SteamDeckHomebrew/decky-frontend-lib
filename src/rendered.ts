import { FC, createElement } from 'react';

type RenderedFilter = (source: string) => boolean;

/** Private components are captured from the React tree. */
function walkReactTree(visit: (type: any) => any): any {
  const container = document.getElementById('root');
  if (!container) return undefined;
  const rootKey = Object.keys(container).find((key) => key.startsWith('__reactContainer'));
  if (!rootKey) return undefined;

  const seen = new Set<any>();
  const stack = [(container as any)[rootKey]];
  let visited = 0;
  while (stack.length && visited < 200000) {
    const fiber = stack.pop();
    visited++;
    for (const candidate of [fiber?.type, fiber?.elementType?.type, fiber?.elementType]) {
      if (typeof candidate !== 'function' || seen.has(candidate)) continue;
      seen.add(candidate);
      const result = visit(candidate);
      if (result) return result;
    }
    if (fiber?.sibling) stack.push(fiber.sibling);
    if (fiber?.child) stack.push(fiber.child);
  }
  return undefined;
}

const KNOWN_COMPONENTS: [string, RenderedFilter][] = [
  ['panel-section', (source) => source.includes('children:n}=e') && source.includes('spinner')],
  ['tabs', (source) => source.includes('activeTab') && source.includes('onShowTab') && (source.includes('belowHeaderTabsContent') || source.includes('cancelSkipTabHeader') || source.includes('BIsFeatureBlocked'))],
  ['carousel', (source) => source.includes('nIndexLeftmost') && source.includes('fnItemRenderer')],
  ['marquee', (source) => source.includes('--fade-length') && source.includes('fadeLength')],
  ['progress-bar', (source) => source.includes('role:"progressbar"') && source.includes('nProgress')],
  ['progress-bar-info', (source) => source.includes('sOperationText') && source.includes('nProgress')],
  ['steam-spinner', (source) => source.includes('Steam Spinner') && source.includes('src')],
  ['simple-modal', (source) => source.includes('ShowPortalModal()') && source.includes('OnElementReadyCallbacks.Register(')],
];

// Searches are cached and rate limited globally.
const componentCache = new Map<string, any>();

function knownKeyFor(filter: RenderedFilter): string | undefined {
  for (const [key, known] of KNOWN_COMPONENTS) if (known === filter) return key;
  const text = filter.toString();
  for (const [key, known] of KNOWN_COMPONENTS) if (known.toString() === text) return key;
  return undefined;
}
let lastSearch = 0;

function findOnce(key: string, search: () => any): any {
  if (componentCache.has(key)) return componentCache.get(key);
  if (Date.now() - lastSearch < 1000) return undefined;
  lastSearch = Date.now();
  const found = search();
  if (found) componentCache.set(key, found);
  return found;
}

export function findRenderedComponent(filter: RenderedFilter): any {
  return findOnce(`source:${knownKeyFor(filter) ?? `${filter.toString().length}:${filter.toString().slice(0, 80)}`}`, () =>
    walkReactTree((candidate) => {
      try {
        return filter(Function.prototype.toString.call(candidate)) ? candidate : undefined;
      } catch {
        return undefined;
      }
    }),
  );
}

export function findRenderedComponentByDomClass(className: string): any {
  return findOnce(`class:${className}`, () => {
    const element = document.getElementsByClassName(className)[0] as HTMLElement | undefined;
    if (!element) return undefined;
    const key = Object.keys(element).find((prop) => prop.startsWith('__reactFiber'));
    let fiber = key ? (element as any)[key] : undefined;
    while (fiber && typeof fiber.type !== 'function') fiber = fiber.return;
    return fiber?.type;
  });
}

/** Render the real component once Steam mounts it. */
export function renderedComponent<T>(filter: RenderedFilter, fallback: FC<T>): FC<T> {
  return ((props: T) => {
    const Component = findRenderedComponent(filter) ?? fallback;
    return createElement(Component as any, props as any);
  }) as FC<T>;
}

export function renderedComponentByDomClass<T>(className: () => string | undefined, fallback: FC<T>): FC<T> {
  return ((props: T) => {
    const name = className();
    const Component = (name && findRenderedComponentByDomClass(name)) || fallback;
    return createElement(Component as any, props as any);
  }) as FC<T>;
}

/** Capture transient components while they are mounted. */
export function prewarmRenderedComponents(): void {
  if (Date.now() - lastSearch < 1000) return;
  lastSearch = Date.now();
  const missing = KNOWN_COMPONENTS.filter(([key]) => !componentCache.has(`source:${key}`));
  if (!missing.length) return;
  walkReactTree((candidate) => {
    let source = '';
    try {
      source = Function.prototype.toString.call(candidate);
    } catch {
      return undefined;
    }
    for (const [key, filter] of missing) {
      if (!componentCache.has(`source:${key}`) && filter(source)) componentCache.set(`source:${key}`, candidate);
    }
    return missing.every(([key]) => componentCache.has(`source:${key}`)) ? true : undefined;
  });
}
