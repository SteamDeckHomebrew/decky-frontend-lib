import type { ComponentType } from 'react';
import { RouteProps } from 'react-router';

export interface Plugin {
  title: JSX.Element;
  icon: JSX.Element;
  content?: JSX.Element;
  onDismount?(): void;
}

interface ServerResponseSuccess<TRes> {
  success: true;
  result: TRes;
}

interface ServerResponseError {
  success: false;
  result: string;
}

type ServerResponse<TRes> = ServerResponseSuccess<TRes> | ServerResponseError;

type RoutePatch = (route: RouteProps) => RouteProps;

interface RouterHook {
  addRoute(path: string, component: ComponentType, props?: Omit<RouteProps, 'path' | 'children'>): void;
  addPatch(path: string, patch: RoutePatch): RoutePatch;
  removePatch(path: string, patch: RoutePatch): void;
  removeRoute(path: string): void;
}

export interface ServerAPI {
  routerHook: RouterHook;
  callPluginMethod<TArgs = {}, TRes = {}>(methodName: string, args: TArgs): Promise<ServerResponse<TRes>>;
  callServerMethod<TArgs = {}, TRes = {}>(methodName: string, args: TArgs): Promise<ServerResponse<TRes>>;
  fetchNoCors<TRes = {}>(url: RequestInfo, request?: RequestInit): Promise<ServerResponse<TRes>>;
  executeInTab(tab: string, runAsync: boolean, code: string): Promise<unknown>;
  injectCssIntoTab<TRes = string>(tab: string, style: string): Promise<ServerResponse<TRes>>;
  removeCssFromTab(tab: string, cssId: string): Promise<unknown>;
}

type DefinePluginFn = (serverAPI: ServerAPI) => Plugin;

// TypeScript helper function
export const definePlugin = (fn: DefinePluginFn): DefinePluginFn => {
  return (...args) => {
    // TODO: Maybe wrap this
    return fn(...args);
  };
};
