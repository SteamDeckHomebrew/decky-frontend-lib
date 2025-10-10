export enum EUserConfigStoreNamespace {
  Invalid,
  Library,
}

export enum EConflictResolutionMethod {
  LastWriteWins = 'last-write',
  CustomMethod = 'custom',
  InitializationOnly = 'initial',
}

export declare class CUserLocalStorage {
  GetObject<T extends object>(key: string): Promise<T | null>;
  GetString(key: string): Promise<string | null>;

  /**
   * @param resolutionMethodId Must include if selecting
   * {@link EConflictResolutionMethod.CustomMethod}.
   */
  RemoveObject(key: string, resolutionMethod: EConflictResolutionMethod, resolutionMethodId?: string): Promise<void>;

  /**
   * @param resolutionMethodId Must include if selecting
   * {@link EConflictResolutionMethod.CustomMethod}.
   */
  StoreObject<T extends object>(
    key: string,
    value: T,
    resolutionMethod?: EConflictResolutionMethod,
    resolutionMethodId?: string,
  ): Promise<void>;
}

export declare class CCloudStorage extends CUserLocalStorage {
  m_eNamespace: EUserConfigStoreNamespace;

  Get(key: string): string | null;
  GetByPrefix(prefix: string): Map<string, string>;
  GetMapForPrefix(prefix: string): CCloudStorageMap;

  /**
   * @param resolutionMethodId Must include if selecting
   * {@link EConflictResolutionMethod.CustomMethod}.
   */
  StoreString(
    key: string,
    value: string,
    resolutionMethod?: EConflictResolutionMethod,
    resolutionMethodId?: string,
  ): Promise<void>;
}

export interface CCloudStorageMap
  extends Map<string, string>,
    Pick<CCloudStorage, 'GetObject' | 'StoreObject' | 'StoreString'> {
  m_cloudStorage: CCloudStorage;
  m_strKeyPrefix: string;

  /**
   * The backing Map for all the inherited methods.
   */
  get mapInternal(): Map<string, string>;
}
