import { Module, findAllModules } from './webpack';

export interface ClassModule {
  [name: string]: string;
}

export const classMap: ClassModule[] = findAllModules((m: Module) => {
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

export function findClass(name: string): string | void {
  return classMap.find((m) => m?.[name])?.[name];
}

export function findClassModule(filter: (module: any) => boolean): ClassModule | void {
  return classMap.find((m) => filter(m));
}

export function unminifyClass(minifiedClass: string): string | void {
  for (let m of classMap) {
    for (let className of Object.keys(m)) {
      if (m[className] == minifiedClass) return className;
    }
  }
}
