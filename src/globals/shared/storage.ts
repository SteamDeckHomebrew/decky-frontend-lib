export enum EUserConfigStoreNamespace {
  Invalid,
  Library,
}

export enum EConflictResolutionMethod {
  LastWriteWins = 'last-write',
  CustomMethod = 'custom',
  InitializationOnly = 'initial',
}

export interface SteamLocalStorage {
  GetObject(key: string): Promise<any | null>;
  GetString(key: string): Promise<string | null>;
  /**
   * @param resolutionMethodId Must include if selecting {@link EConflictResolutionMethod.CustomMethod}.
   */
  RemoveObject(key: string, resolutionMethod: EConflictResolutionMethod, resolutionMethodId?: any): Promise<void>;
}

/**
 * @todo This whole thing
 * Will break the client if a key isn't a string.
 * Probably better to not look at this thing at all.
 */
export interface SteamCloudStorage extends SteamLocalStorage {
  m_eNamespace: EUserConfigStoreNamespace;

  Get(key: string): string | null;
  GetByPrefix(prefix: string): Map<string, string>;
  GetMapForPrefix(prefix: string): any;
  StoreObject(key: string, value: any, param2: any, param3: any): Promise<void>;
  StoreString(key: string, value: string, param2: any, param3: any): Promise<void>;
}
