import * as React from "react";

// this shouldn't need to be redeclared but it does for some reason

declare global {
    interface Window {
      SP_REACT: typeof React;
    }
}

export function fakeRenderComponent(fun: Function): any {
    const hooks = (window.SP_REACT as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;

    // TODO: add more hooks

    let oldHooks = {
        useContext: hooks.useContext,
        useCallback: hooks.useCallback,
        useLayoutEffect: hooks.useLayoutEffect,
        useEffect: hooks.useEffect,
        useMemo: hooks.useMemo,
        useRef: hooks.useRef,
        useState: hooks.useState,
    }

    hooks.useCallback = (cb: Function) => cb;
    hooks.useContext = (cb: any) => cb._currentValue;
    hooks.useLayoutEffect = (_: Function) => {}//cb();
    hooks.useMemo = (cb: Function, _: any[]) => cb;
    hooks.useEffect = (_: Function) => {}//cb();
    hooks.useRef = (val: any) => ({current: val || {}});
    hooks.useState = (v: any) => {
        let val = v;

        return [val, (n: any) => val = n];
    };

    const res = fun(hooks);

    Object.assign(hooks, oldHooks);

    return res;
}

export function beforePatch(obj: any, name: string, fnc: (args: any[]) => any): void {
    const orig = obj[name];
    obj[name] = function (...args: any[]) {
        fnc.call(this, args);
        return orig.call(this, ...args);
    }
    Object.assign(obj[name], orig);
    obj[name].toString = () => orig.toString();
    obj[name].__deckyOrig = orig;
}

export function afterPatch(obj: any, name: string, fnc: (args: any[], ret: any) => any): void {
    const orig = obj[name];
    obj[name] = function (...args: any[]) {
        let ret = orig.call(this, ...args);
        ret = fnc.call(this, args, ret);
        return ret;
    }
    Object.assign(obj[name], orig);
    obj[name].toString = () => orig.toString();
    obj[name].__deckyOrig = orig;
}

export function replacePatch(obj: any, name: string, fnc: (args: any[]) => any): void {
    const orig = obj[name];
    obj[name] = function (...args: any[]) {
      const ret = fnc.call(this, args);
      if (ret == 'CALL_ORIGINAL') return orig.call(this, ...args);
      return ret;
    };
    Object.assign(obj[name], orig);
    obj[name].toString = () => orig.toString();
    obj[name].__deckyOrig = orig;
}

// TODO allow one method to be patched and unpatched multiple times independently using IDs in a Map or something
export function unpatch(obj: any, name: any): void {
    obj[name] = obj[name].__deckyOrig;
}

export function wrapReactType(node: any, prop?: any) {
    return node[prop || "type"] = {...node[prop || "type"]};
}

export function wrapReactClass(node: any, prop?: any) {
    const cls = node[prop || "type"];
    const wrappedCls = class extends cls {};
    Object.getOwnPropertyNames(cls.prototype).forEach((prop: any) => {
        wrappedCls.prototype[prop] = cls.prototype[prop]
    });
    Object.getOwnPropertyNames(cls).forEach((prop: any) => {
        if (prop != "prototype") wrappedCls[prop] = cls[prop]
    });
    wrappedCls.prototype.__proto__ = cls.prototype.__proto__;
    return node[prop || "type"] = wrappedCls;
}

export function getReactInstance(o: HTMLElement | Element | Node) {
    return o[Object.keys(o).find(k => k.startsWith('__reactInternalInstance')) as string]
}

export function joinClassNames(...classes: string[]): string {
    return classes.join(" ");
}

export function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms));
}

// Based on https://github.com/GooseMod/GooseMod/blob/9ef146515a9e59ed4e25665ed365fd72fc0dcf23/src/util/react.js#L20
export interface findInTreeOpts {
    walkable?: string[],
    ignore?: string[]
}

export declare type findInTreeFilter = (element: any) => boolean

export const findInTree = (parent: any, filter: findInTreeFilter, opts: findInTreeOpts): any => {
    const { walkable = null, ignore = [] } = opts ?? {};
  
    if (!parent || typeof parent !== 'object') { // Parent is invalid to search through
        return null;
    }
  
    if (filter(parent)) return parent; // Parent matches, just return
  
    if (Array.isArray(parent)) { // Parent is an array, go through values
        return parent.map((x) => findInTree(x, filter, opts)).find((x) => x);
    }
  
    // Parent is an object, go through values (or option to only use certain keys)
    return (walkable || Object.keys(parent)).map((x) => !ignore.includes(x) && findInTree(parent[x], filter, opts)).find((x: any) => x);
};
  
export const findInReactTree = (node: any, filter: findInTreeFilter) => findInTree(node, filter, { // Specialised findInTree for React nodes
    walkable: [ 'props', 'children', 'child', 'sibling' ]
});