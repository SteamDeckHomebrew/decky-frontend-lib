import * as React from 'react';

// this shouldn't need to be redeclared but it does for some reason

declare global {
  interface Window {
    SP_REACT: typeof React;
    LocalizationManager: {
      m_mapTokens: Map<string, string>;
      m_mapFallbackTokens: Map<string, string>;
      m_rgLocalesToUse: string[];
    };
  }
}

export function fakeRenderComponent(fun: Function, customHooks: any = {}): any {
  const hooks = (window.SP_REACT as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher
    .current;

  // TODO: add more hooks

  let oldHooks = {
    useContext: hooks.useContext,
    useCallback: hooks.useCallback,
    useLayoutEffect: hooks.useLayoutEffect,
    useEffect: hooks.useEffect,
    useMemo: hooks.useMemo,
    useRef: hooks.useRef,
    useState: hooks.useState,
  };

  hooks.useCallback = (cb: Function) => cb;
  hooks.useContext = (cb: any) => cb._currentValue;
  hooks.useLayoutEffect = (_: Function) => {}; //cb();
  hooks.useMemo = (cb: Function, _: any[]) => cb;
  hooks.useEffect = (_: Function) => {}; //cb();
  hooks.useRef = (val: any) => ({ current: val || {} });
  hooks.useState = (v: any) => {
    let val = v;

    return [val, (n: any) => (val = n)];
  };

  Object.assign(hooks, customHooks);

  const res = fun(hooks);

  Object.assign(hooks, oldHooks);

  return res;
}

export function wrapReactType(node: any, prop: any = 'type') {
  return (node[prop] = { ...node[prop] });
}

export function wrapReactClass(node: any, prop: any = 'type') {
  const cls = node[prop];
  const wrappedCls = class extends cls {};
  return (node[prop] = wrappedCls);
}

export function getReactInstance(o: HTMLElement | Element | Node) {
  return o[Object.keys(o).find((k) => k.startsWith('__reactInternalInstance')) as string];
}

// Based on https://github.com/GooseMod/GooseMod/blob/9ef146515a9e59ed4e25665ed365fd72fc0dcf23/src/util/react.js#L20
export interface findInTreeOpts {
  walkable?: string[];
  ignore?: string[];
}

export declare type findInTreeFilter = (element: any) => boolean;

export const findInTree = (parent: any, filter: findInTreeFilter, opts: findInTreeOpts): any => {
  const { walkable = null, ignore = [] } = opts ?? {};

  if (!parent || typeof parent !== 'object') {
    // Parent is invalid to search through
    return null;
  }

  if (filter(parent)) return parent; // Parent matches, just return

  if (Array.isArray(parent)) {
    // Parent is an array, go through values
    return parent.map((x) => findInTree(x, filter, opts)).find((x) => x);
  }

  // Parent is an object, go through values (or option to only use certain keys)
  return (walkable || Object.keys(parent))
    .map((x) => !ignore.includes(x) && findInTree(parent[x], filter, opts))
    .find((x: any) => x);
};

export const findInReactTree = (node: any, filter: findInTreeFilter) =>
  findInTree(node, filter, {
    // Specialised findInTree for React nodes
    walkable: ['props', 'children', 'child', 'sibling'],
  });
