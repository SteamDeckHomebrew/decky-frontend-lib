import type { ComponentType, ReactNode } from 'react';
import { RouteProps } from 'react-router';

export interface Plugin {
  title: JSX.Element;
  icon: JSX.Element;
  content?: JSX.Element;
  onDismount?(): void;
  alwaysRender?: boolean;
}

interface ServerResponseSuccess<TRes> {
  success: true;
  result: TRes;
}

interface ServerResponseError {
  success: false;
  result: string;
}

export type ServerResponse<TRes> = ServerResponseSuccess<TRes> | ServerResponseError;

export interface MainMenuItem {
  /** Called when clicking this menu item, useful if you do not want to navigate to a route.
   * For navigating to a route, use route instead. */
  action?: () => void;
  /** The route this menu item navigates to @example "/steamweb" */
  route?: string;
  /** Props for the route this item navigates to. Currently only used for /steamweb to determine what webpack to navigate to @example {url: 'https://store.steampowered.com/'} */
  routeState?: any;
  /** Label for this menu item, @example "Store" */
  label: ReactNode;
  /** Runs when this item is selected. Defaults to setting the focused app to null.
   * If you override this you must also call the original to retain proper behaivour */
  onFocus?: () => void;
  /** Icon of this menu item, you probably want a react SVG node */
  children: ReactNode;
}

export interface CustomMainMenuItem extends MainMenuItem {
  index: number;
}

export interface MainMenuItemReactNode {
  props: MainMenuItem;
  type: ComponentType;
  key: any;
}

export interface OverlayReactNode {
  props: MainMenuItem;
  type: ComponentType;
}

export type ItemPatch = (item: MainMenuItemReactNode) => MainMenuItemReactNode;
export type OverlayPatch = (overlay: OverlayReactNode) => OverlayReactNode;

export interface MenuHook {
  addItem(item: CustomMainMenuItem): CustomMainMenuItem;
  addPatch(path: string, patch: ItemPatch): ItemPatch;
  addOverlayPatch(patch: OverlayPatch): OverlayPatch;
  addOverlayComponent(component: ReactNode): ReactNode;
  removePatch(path: string, patch: ItemPatch): void;
  removeOverlayPatch(patch: OverlayPatch): void;
  removeOverlayComponent(component: ReactNode): void;
  removeItem(item: CustomMainMenuItem): void;
}

export type RoutePatch = (route: RouteProps) => RouteProps;

export interface RouterHook {
  addRoute(path: string, component: ComponentType, props?: Omit<RouteProps, 'path' | 'children'>): void;
  addPatch(path: string, patch: RoutePatch): RoutePatch;
  addGlobalComponent(name: string, component: ComponentType): void;
  removeRoute(path: string): void;
  removePatch(path: string, patch: RoutePatch): void;
  removeGlobalComponent(name: string): void;
}

export interface ToastData {
  title: ReactNode;
  body: ReactNode;
  onClick?: () => void;
  logo?: ReactNode;
  icon?: ReactNode;
  className?: string;
  contentClassName?: string;
  duration?: number;
  critical?: boolean;
  eType?: number;
  sound?: number;
  playSound?: boolean;
  showToast?: boolean;
}

export interface Toaster {
  toast(toast: ToastData): void;
}

export interface FilePickerRes {
  path: string;
  realpath: string;
}

export interface ServerAPI {
  routerHook: RouterHook;
  menuHook: MenuHook;
  toaster: Toaster;
  openFilePicker(startPath: string, includeFiles?: boolean, regex?: RegExp): Promise<FilePickerRes>;
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
