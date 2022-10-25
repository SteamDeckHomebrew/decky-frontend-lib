declare global {
  interface Window {
    webpackJsonp: any;
    webpackChunksteamui: any;
  }
}

// TODO
export type Module = any;
type FilterFn = (module: any) => boolean;
type FindFn = (module: any) => any;

export let webpackCache: any = {};
let hasWebpack5 = false;

if (window.webpackJsonp && !window.webpackJsonp.deckyShimmed) {
  // Webpack 4, currently on stable
  const wpRequire = window.webpackJsonp.push([
    [],
    { get_require: (mod: any, _exports: any, wpRequire: any) => (mod.exports = wpRequire) },
    [['get_require']],
  ]);

  delete wpRequire.m.get_require;
  delete wpRequire.c.get_require;
  webpackCache = wpRequire.c;
} else {
  // Webpack 5, currently on beta
  hasWebpack5 = true;
  const id = Math.random();
  let initReq: any;
  window.webpackChunksteamui.push([
    [id],
    {},
    (r: any) => {
      initReq = r;
    },
  ]);
  for (let i of Object.keys(initReq.m)) {
    webpackCache[i] = initReq(i);
  }
}

export const allModules: Module[] = hasWebpack5
  ? Object.values(webpackCache).filter((x) => x)
  : Object.keys(webpackCache)
      .map((x) => webpackCache[x].exports)
      .filter((x) => x);

export const findModule = (filter: FilterFn) => {
  for (const m of allModules) {
    if (m.default && filter(m.default)) return m.default;
    if (filter(m)) return m;
  }
};

export const findModuleChild = (filter: FindFn) => {
  for (const m of allModules) {
    for (const mod of [m.default, m]) {
      const filterRes = filter(mod);
      if (filterRes) {
        return filterRes;
      } else {
        continue;
      }
    }
  }
};

export const findAllModules = (filter: FilterFn) => {
  const out = [];

  for (const m of allModules) {
    if (m.default && filter(m.default)) out.push(m.default);
    if (filter(m)) out.push(m);
  }

  return out;
};

export const CommonUIModule = allModules.find((m: Module) => {
  if (typeof m !== 'object') return false;
  for (let prop in m) {
    if (m[prop]?.contextType?._currentValue && Object.keys(m).length > 60) return true;
  }
  return false;
});

export const IconsModule = findModule((m: Module) => {
  if (typeof m !== 'object') return false;
  for (let prop in m) {
    if (m[prop]?.toString && /Spinner\)}\),.\.createElement\(\"path\",{d:\"M18 /.test(m[prop].toString())) return true;
  }
  return false;
});

export const ReactRouter = allModules.find((m: Module) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.computeRootMatch) return true;
  }
  return false;
});
