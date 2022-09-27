import { Module, findModuleChild } from '../webpack';

type IReactComponent<P = any> =
  | React.ClassicComponentClass<P>
  | React.ComponentClass<P>
  | React.FunctionComponent<P>
  | React.ForwardRefExoticComponent<P>;

export const observer: <T extends IReactComponent<any>>(component: T) => T = findModuleChild((m: Module) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.toString()?.includes('Mobx observer:')) return m[prop];
  }
});
