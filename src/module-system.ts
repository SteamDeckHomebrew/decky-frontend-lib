import Logger from './logger';

declare global {
  interface Window {
    webpackChunksteamui: any;
  }
}

const logger = new Logger('Modules');

// In most case an object with getters for each property. Look for the first call to r.d in the module, usually near or at the top.
export type ModuleID = string; // number string on webpack, filename on esmodule
export type Module = any;
export type Export = any;
export type Var = any;
type FilterFn = (module: any) => boolean;
type ExportFilterFn = (moduleExport: any, exportName?: any) => boolean;
type VarFilterFn = (variable: any, varName?: any) => boolean;
type FindFn = (module: any) => any;

type ResolveModuleScopeFn = (objectFromScope: any, moduleForDebug?: string) => Promise<Module>;
let resolveModuleScope: ResolveModuleScopeFn;

export let processedModules: string[] = [];
export let modules = new Map<ModuleID, Module>();
export let moduleScopes = new Map<ModuleID, Module>();

// const dec = new TextDecoder();
// async function processModuleDeps(path: string) {
//   const deps: Promise<void>[] = [];
//   const startTime = performance.now();
//   const req = await fetch(path);
//   for await (const chunk of req.body!) {
//     const hdr = chunk.subarray(0, 22);
//     const hdrText = dec.decode(hdr);
//     if (hdrText == "const __vite__mapDeps=") {
//       const startIdx = chunk.indexOf("[".charCodeAt(0));
//       const endIdx = chunk.indexOf("]".charCodeAt(0));

//       const arrBuf = chunk.subarray(startIdx + 1, endIdx - 1);
//       const arrText = dec.decode(arrBuf);
//       // TODO prefix globally instead
//       const arr = arrText.replace(/\"/g, "").split(",").filter(m => m.includes(".js")).map(m => m.replace(/^\.\//g, "https://steamloopback.host/"));
//       logger.debug(`Dependency array found in ${path} at ${startIdx}:${endIdx} in ${performance.now() - startTime}ms`);
//       arr.forEach(e => {
//         const modStr = e.replace("https://steamloopback.host/", "");
//         if (!processedModules.includes(modStr)) {
//           processedModules.push(modStr);
//           deps.push(processModule(e));
//         }
//       });
//     }
//     break;
//   }
//   await Promise.allSettled(deps);
// }

async function processModuleDeps(depsArr: string[]) {
  const deps: Promise<void>[] = [];
  logger.debug("Processing module deps", depsArr);
  for (let e of depsArr.filter(m => m.includes(".js"))) {
    const modStr = e.replace("./", "https://steamloopback.host/");
    if (!processedModules.includes(modStr)) {
      processedModules.push(modStr);
      deps.push(processModule(modStr));
    }
  };
  await Promise.allSettled(deps);
}

async function processScope(file: string, mod: Module) {
  const startTime = performance.now();
  try {
    let tries = 0;
    for (let expKey in mod) {
      if (tries > 4) {
        logger.debug(`No scope found for ${file} in ${performance.now() - startTime}ms out of tries`)
      }
      const exp = mod[expKey];
      // TODO make this constraint more resilient to reexports somehow? or maybe just loop and check over, idk
      if (typeof exp == "function" && exp.toString().length > 15) {
        const scope = await resolveModuleScope(exp, file);
        if (scope) {
          logger.debug(`Scope resolved for ${file} in ${performance.now() - startTime}ms`);
          moduleScopes.set(file, scope?.object);
          if (scope?.object?.__vite__mapDeps) await processModuleDeps(scope.object.__vite__mapDeps.f);
          break;
        } else {
          logger.debug(`No scope found for ${file} try ${tries} in ${performance.now() - startTime}ms export used:`, exp);
          tries++;
        }
      }
    }
  } catch (e) {
    logger.debug(`Failed to process scope of ${file}`, e);
  }
}

async function processModule(path: string) {
  const startTime = performance.now();
  try {
    const mod = await import(path);
    logger.debug(`Processed exports for ${path} in ${performance.now() - startTime}ms`, path);
    const file = path.replace("https://steamloopback.host/", "");
    modules.set(file, mod);

    const scope = processScope(file, mod);

    const cjsStartTime = performance.now();
    let cjsFound = false;
    for (let expKey in mod) {
      try {
        const exp = mod[expKey];
        // TODO make more robust?
        if (typeof exp == "function" && exp?.toString?.()?.includes("={exports:{}}).exports,")) {
          const cjsKey = `${file}#cjs_${expKey}`;
          cjsFound = true;
          modules.set(cjsKey, mod[expKey]());
          logger.debug(`Processed CommonJS module ${cjsKey}`);
        }
      } catch (e) {
        logger.debug(`Ignoring CommonJS module import error for ${path}.${expKey}`, e);
      }
    }
    if (cjsFound) logger.debug(`CommonJS module imports for ${file} finished in ${performance.now() - cjsStartTime}ms`);
    await scope;
  } catch (e) {
    logger.debug(`Ignoring module error for ${path}`, e);
  }
}

export async function initModules(resolveModuleScopeFn: ResolveModuleScopeFn) {
  resolveModuleScope = resolveModuleScopeFn;
  const startTime = performance.now();
  logger.group('Module System Init');
  // Vite
  for (let node of document.querySelectorAll("script[type=module]") as NodeListOf<HTMLScriptElement>) {
    const path = node.src;
    if (!path.startsWith("https://steamloopback.host")) continue;
    await processModule(path);
  }

  logger.groupEnd(`Modules initialized in ${performance.now() - startTime}ms...`);
}

export const findModule = (filter: FilterFn) => {
  for (const m of modules.values()) {
    if (m.default && filter(m.default)) return m.default;
    if (filter(m)) return m;
  }
};

export const findModuleDetailsByExport = (
  filter: ExportFilterFn,
  minExports?: number,
): [module: Module | undefined, moduleExport: any, exportName: any, moduleID: string | undefined] => {
  for (const [id, m] of modules) {
    if (!m) continue;
    for (const mod of [m.default, m]) {
      // special cases
      if (typeof mod !== 'object') continue;
      if (mod == window) continue; // wtf
      if (minExports && Object.keys(mod).length < minExports) continue;

      for (let exportName in mod) {
        if (mod?.[exportName]) {
          try {
            const filterRes = filter(mod[exportName], exportName);
            if (filterRes) {
              return [mod, mod[exportName], exportName, id];
            } else {
              continue;
            }
          } catch (e) {
            logger.warn("Module filter threw exception: ", e, "Filter: ", filter);
          }
        }
      }
    }
  }
  return [undefined, undefined, undefined, undefined];
};

export const findModuleByExport = (filter: ExportFilterFn, minExports?: number) => {
  return findModuleDetailsByExport(filter, minExports)?.[0];
};

export const findModuleExport = (filter: ExportFilterFn, minExports?: number) => {
  return findModuleDetailsByExport(filter, minExports)?.[1];
};

export const findScope = (filter: FilterFn) => {
  for (const m of moduleScopes.values()) {
    if (m.default && filter(m.default)) return m.default;
    if (filter(m)) return m;
  }
};

export const findScopeDetailsByVar = (
  filter: VarFilterFn,
  minExports?: number,
): [moduleScope: Module | undefined, moduleExport: any, exportName: any, moduleID: string | undefined] => {
  for (const [id, m] of moduleScopes) {
    if (!m) continue;
    for (const mod of [m.default, m]) {
      // special cases
      if (typeof mod !== 'object') continue;
      if (mod == window) continue; // wtf
      if (minExports && Object.keys(mod).length < minExports) continue;

      for (let varName in mod) {
        if (mod?.[varName]) {
          try {
            const filterRes = filter(mod[varName], varName);
            if (filterRes) {
              return [mod, mod[varName], varName, id];
            } else {
              continue;
            }
          } catch (e) {
            // @ts-expect-error
            if (!e?.startsWith?.("TypeError: Function.prototype.toString requires that 'this' be a Function"))
             logger.warn("Scope filter threw exception:", e, "Filter: ", filter, mod?.[varName]);
          }
        }
      }
    }
  }
  return [undefined, undefined, undefined, undefined];
};

export const findModuleScopeByVar = (filter: VarFilterFn, minVars?: number) => {
  return findScopeDetailsByVar(filter, minVars)?.[0];
};

export const findVar = (filter: VarFilterFn, minVars?: number) => {
  return findScopeDetailsByVar(filter, minVars)?.[1];
};

/**
 * @deprecated use findModuleExport instead
 */
export const findModuleChild = (filter: FindFn) => {
  logger.warn("findModuleChild is deprecated and will be removed soon. Use findModuleExport instead. Used in:", new Error().stack?.substring(5))
  for (const m of modules.values()) {
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

/**
 * @deprecated use createModuleMapping instead
 */
export const findAllModules = (filter: FilterFn) => {
  logger.warn("findAllModules is deprecated and will be removed soon. Use createModuleMapping instead. Used in:", new Error().stack?.substring(5))
  const out = [];

  for (const m of modules.values()) {
    if (m.default && filter(m.default)) out.push(m.default);
    if (filter(m)) out.push(m);
  }

  return out;
};

export const createModuleMapping = (filter: FilterFn) => {
  const mapping = new Map<ModuleID, Module>();

  for (const [id, m] of modules) {
    if (m.default && filter(m.default)) mapping.set(id, m.default);
    if (filter(m)) mapping.set(id, m);
  }

  return mapping;
};

export const createScopeMapping = (filter: FilterFn) => {
  const mapping = new Map<ModuleID, Module>();

  for (const [id, m] of moduleScopes) {
    if (m.default && filter(m.default)) mapping.set(id, m.default);
    if (filter(m)) mapping.set(id, m);
  }

  return mapping;
};

export const createVarMapping = (filter: FilterFn) => {
  const mapping = new Map<string, any>();

  for (const [id, m] of moduleScopes) {
    for (const key in m) {
      try {
        const val = m[key];
        if (filter(val)) mapping.set(id + "#." + key, val);
      } catch (e) {
        logger.warn("Var mapping error", e);
      }
    }
  }

  return mapping;
};