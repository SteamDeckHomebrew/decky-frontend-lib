export interface Plugin {
  title: JSX.Element;
  icon: JSX.Element;
  content: JSX.Element;
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

export interface ServerAPI {
  callPluginMethod<TArgs = {}, TRes = {}>(methodName: string, args: TArgs): Promise<ServerResponse<TRes>>;
  callServerMethod<TArgs = {}, TRes = {}>(methodName: string, args: TArgs): Promise<ServerResponse<TRes>>;
  fetchNoCors<TRes = {}>(url: string, request: RequestInfo): Promise<ServerResponse<TRes>>;
  executeInTab(tab: string, runAsync: boolean, code: string): Promise<unknown>;
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
