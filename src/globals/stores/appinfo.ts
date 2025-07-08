import type { EAppType } from '../steam-client/App';
import type { CCallbackList } from '../utils/callbackutils/callbacklist';

interface AppInfoCacheObject_t {
  eAppType: EAppType;
  strIconURL: string;
  strName: string;
  strUpdatedFromServer: string;
}

declare class CAppInfo {
  m_unAppID: number;
  m_bInitialized: boolean;
  m_strName: string;
  m_strIconURL: string;
  m_dtUpdatedFromServer: Date;
  m_eAppType: EAppType;

  get appid(): number;
  get is_initialized(): boolean;
  get is_valid(): boolean;
  get name(): string;
  get icon_url_no_default(): string;
  get time_updated_from_server(): Date;
  get apptype(): EAppType;

  /**
   * @returns `true` if this app is an application or tool.
   */
  BIsApplicationOrTool(): boolean;

  BuildAppURL(imageName: string): string;
  DeserializeFromMessage(e: any): void;
  DeserializeFromAppOverview(e: any): void;
  DeserializeFromCacheObject(e: any): void;
  SerializeToCacheObject(): AppInfoCacheObject_t | null;
}

export declare class CAppInfoStore {
  m_mapAppInfo: Map<number, CAppInfo>;
  m_mapRichPresenceLoc: any;
  m_cAppInfoRequestsInFlight: number;
  m_setPendingAppInfo: Set<unknown>;
  m_PendingAppInfoPromise: any;
  m_PendingAppInfoResolve: any;
  m_CacheStorage: any | null;
  m_fnCallbackOnAppInfoLoaded: CCallbackList;

  BHavePendingAppInfoRequests(): boolean;
  EnsureAppInfoForAppIDs(rgAppIDs: number[]): Promise<any>;
  FlushPendingAppInfo(): Promise<void>;
  GetAppInfo(appid: number): CAppInfo;
  GetCacheKeyForAppID(appid: number): string;
  GetRichPresenceLocAsync(e: any): any;
  GetRichPresenceLoc(e: any): any;
  IsLoadingAppID(appid: number): boolean;
  LoadAppInfoBatchFromLocalCache(rgAppInfoBatch: any[]): Promise<any[]>;
  LoadAppInfoBatch(rgAppInfoBatch: any[]): Promise<void>;
  Localize(appid: number, strToken: string, r: any): any;
  QueueAppInfoRequest(e: any): any;
  QueueRichPresenceLocRequest(e: any): any;
  RegisterCallbackOnLoad(callback: () => void): void;
  SaveAppInfoBatchToLocalCache(rgAppInfoBatch: any[]): Promise<void>;
  SetCacheStorage(storage: any): void;
}
