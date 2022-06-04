declare global {
  interface Window {
    webpackJsonp: any;
  }
}

// TODO
export type Module = any;
type FilterFn = (module: any) => boolean;
type FindFn = (module: any) => any;

const wpRequire = window.webpackJsonp.push([
  [],
  { get_require: (mod: any, _exports: any, wpRequire: any) => (mod.exports = wpRequire) },
  [['get_require']],
]);

export const allModules: Module[] = Object.keys(wpRequire.c)
  .map((x) => wpRequire.c[x].exports)
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
