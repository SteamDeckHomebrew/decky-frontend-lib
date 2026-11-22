import { findModule, findModuleByExport, findModuleExport, Module } from "./module-system";

export const CommonUIModule = findModule((m: Module) => {
  if (typeof m !== 'object') return false;
  for (let prop in m) {
    if (m[prop]?.contextType?._currentValue && Object.keys(m).length > 60) return true;
  }
  return false;
});

export const IconsModule = findModuleExport(e => e?.ABXYButton && e?.VR) || findModuleByExport(
  (e) => e?.toString && /Spinner\),children:\[\(0,\w+\.jsx\)\("path",\{d:"M18 /.test(e.toString?.()) || /Spinner\)}\)?,.\.createElement\(\"path\",{d:\"M18 /.test(e.toString?.()),
);

export const ReactRouter = findModuleByExport((e) => e.computeRootMatch);
