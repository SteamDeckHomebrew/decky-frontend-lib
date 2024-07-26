import { Module, ModuleID, createModuleMapping } from './webpack';

export interface ClassModule {
  [name: string]: string;
}

export const classModuleMap: Map<ModuleID, ClassModule> = createModuleMapping((m: Module) => {
  if (typeof m == 'object' && !m.__esModule) {
    const keys = Object.keys(m);
    // special case some libraries
    if (keys.length == 1 && m.version) return false;
    // special case localization
    if (keys.length > 1000 && m.AboutSettings) return false;

    return keys.length > 0 && keys.every((k) => !Object.getOwnPropertyDescriptor(m, k)?.get && typeof m[k] == 'string');
  }
  return false;
});

export const classMap = [...classModuleMap.values()];

export function findClass(id: string, name: string): string | void {
  return classModuleMap.get(id)?.[name];
}

export function findClassByName(name: string): string | void {
  return classMap.find((m) => m[name])?.[name];
}

export function findClassModule(filter: (module: any) => boolean): ClassModule | void {
  return classMap.find((m) => filter(m));
}

export function unminifyClass(minifiedClass: string): string | void {
  for (let m of classModuleMap.values()) {
    for (let className of Object.keys(m)) {
      if (m[className] == minifiedClass) return className;
    }
  }
}
