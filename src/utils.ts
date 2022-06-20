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

export function getReactInstance(o: HTMLElement | Element | Node) {
    return o[Object.keys(o).find(k => k.startsWith('__reactInternalInstance')) as string]
}

export function joinClassNames(...classes: string[]): string {
    return classes.join(" ");
}