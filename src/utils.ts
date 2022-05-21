export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

declare global {
    interface Window {
        SP_REACT: any;
    }
}

export function fakeRenderComponent(fun: Function): any {
    const hooks = window.SP_REACT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current;

    // TODO: add more hooks

    let oldHooks = {
        useContext: hooks.useContext,
        useCallback: hooks.useCallback,
        useEffect: hooks.useEffect,
        useState: hooks.useState,
    }

    hooks.useCallback = (cb: Function) => cb;
    hooks.useContext = (cb: Function) => cb;
    hooks.useEffect = (cb: Function) => cb();
    hooks.useState = (v: any) => {
        let val = v;

        return [val, (n: any) => val = n];
    };

    const res = fun();

    Object.assign(hooks, oldHooks);

    return res;
}

export function beforePatch(obj: any, name: string, fnc: Function): void {
    const orig = obj[name];
    obj[name] = function (...args: any[]) {
        fnc.call(this, args);
        return orig.call(this, ...args);
    }
    Object.assign(obj[name], orig);
    obj[name].toString = () => orig.toString();
    obj[name].__deckyOrig = orig;
}

export function afterPatch(obj: any, name: string, fnc: Function): void {
    const orig = obj[name];
    obj[name] = function (...args: any[]) {
        let ret = orig.apply(...args);
        ret = fnc(ret);
        return ret;
    }
    Object.assign(obj[name], orig);
    obj[name].toString = () => orig.toString();
    obj[name].__deckyOrig = orig;
}

// TODO allow one method to be patched and unpatched multiple times independently using IDs in a Map or something
export function unpatch(obj: any, name: any): void {
    obj[name] = obj[name].__deckyOrig;
}