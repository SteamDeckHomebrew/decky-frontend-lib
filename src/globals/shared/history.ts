// Minimal types from https://www.npmjs.com/package/history/v/5.0.0

export declare enum Action {
  Pop = 'POP',
  Push = 'PUSH',
  Replace = 'REPLACE',
}

export interface Location<S extends object> {
  key: string;
  pathname: string;
  search: string;
  state: S;
  hash: string;
}
