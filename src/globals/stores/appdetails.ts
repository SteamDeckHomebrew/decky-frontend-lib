import type {
  AppAchievements,
  AppAssociations,
  AppDescription,
  AppDetails,
  LogoPosition,
  SteamAppOverview,
} from '../steam-client/App';
import type { EResult } from '../steam-client/shared';

type AjaxLibraryDetails_t = AppDescription &
  Omit<AppAssociations, 'rgFranchises'> & {
    appid: string;
    name: string;
    // TODO: GetLinks() somewhere maybe idek
    rgSocialMedia: any[];
    status: EResult;
  };

/**
 * Hero, header image, etc.
 */
type AppAssets_t = [
  /**
   * Relative to `https://steamloopback.host`.
   */
  cachedAsset: string,

  /**
   * Relative to `https://steamloopback.host`.
   */
  legacyCachedAsset: string,

  /**
   * Relative to {@link CURLStore.GetStoreAppImageURL}.
   */
  storeAsset: string,
];

/**
 * Like {@link AppAssets_t}, but including custom assets.
 */
type AppAssetsWithCustomImage_t = [
  /**
   * Custom asset with the `.jpg` extension.
   *
   * Note that you will have to check if it exists, depending on what file type the user has uploaded.
   * Relative to `https://steamloopback.host`. Empty if not set.
   */
  customJpgAsset: string,

  /**
   * Custom asset with the `.png` extension.
   *
   * Note that you will have to check if it exists, depending on what file type the user has uploaded.
   * Relative to `https://steamloopback.host`. Empty if not set.
   */
  customPngAsset: string,

  /**
   * Relative to `https://steamloopback.host`.
   */
  cachedAsset: string,

  /**
   * Relative to `https://steamloopback.host`.
   */
  cachedLegacyAsset: string,

  /**
   * Relative to {@link CURLStore.GetStoreAppImageURL}.
   */
  storeAsset: string,
];

interface AppDetailsSpotlight {
  data: {
    events: any[];
  };
  dtLoaded: Date;
}

type LogoPositionInStorage = LogoPosition & {
  nVersion: number;
};

interface AppData_t {
  appDetailsSpotlight: AppDetailsSpotlight | null;
  associationData: AppAssociations | null;
  bLoadingAchievments: boolean;
  cRegistered: number;
  customImageInfo: LogoPositionInStorage | null;
  /** UNIX timestamp. */
  customImageInfoRtime: number;
  descriptionsData: AppDescription | null;
  details: AppDetails;
}

interface GetLogoImagesResult<T> {
  logoPosition: LogoPosition;
  rgLogoImages: T;
}

interface GetHeroImagesResult<T> {
  appid: number;
  bHasHeroImage: boolean;
  rgHeroImages: T;
}

export declare class CAppDetailsStore {
  m_mapAppData: Map<number, AppData_t>;

  /**
   * @param name Localized achievement name.
   * @returns `true` if the app's provided achievement is hidden and achieved.
   */
  BAchievementIsHiddenAndAchieved(appid: number, name: string): boolean;

  /**
   * @returns `true` if the provided app has community market support.
   */
  BHasMarketPresence(details: AppDetails): boolean;

  /**
   * @returns `true` if the provided app was recently () launched.
   * @todo broken ? doesn't work lol
   */
  BHasRecentlyLaunched(details: AppDetails): boolean;

  /**
   * @returns `true` if the provided app has workshop support.
   */
  BIsWorkshopVisible(details: AppDetails): boolean;

  /**
   * Resets the provided app's custom logo position to default.
   */
  ClearCustomLogoPosition(overview: SteamAppOverview): Promise<void>;

  /**
   * @returns the provided app's achievements.
   * @throws if data hasn't been loaded yet. Call {@link RequestAchievements} before calling this in
   * order to avoid it! (Most likely a bug in {@link RequestAchievements}, since GetAchievement
   * *does* call it if data hasn't been loaded yet.)
   */
  GetAchievements(appid: number): AppAchievements;

  GetAjaxLibraryAppDetails(appid: number): Promise<AjaxLibraryDetails_t | null>;

  GetAppData(appid: number): AppData_t;

  GetAppDetails(appid: number): AppDetails | null;

  GetAppDetailsSpotlight(appid: number): AppDetailsSpotlight;

  /**
   * @returns the provided app's associations (developers, publishers, franchises, etc.).
   */
  GetAssociations(appid: number): AppAssociations;

  /**
   * @returns the provided app's custom logo position or `null` if not loaded yet or `undefined` if
   * not set.
   */
  GetCustomLogoPosition(appid: number): LogoPosition | null | undefined;

  GetDescriptions(appid: number): AppDescription;

  GetHeaderImages(overview: SteamAppOverview): AppAssetsWithCustomImage_t;

  GetHeaderImagesForAppId(appid: number, localCacheVersion?: number, storeAssetMtime?: number): AppAssets_t;

  GetHeroBlurImages(overview: SteamAppOverview): AppAssetsWithCustomImage_t;

  GetHeroBlurImagesForAppId(appid: number, localCacheVersion?: number, storeAssetMtime?: number): AppAssets_t;

  GetHeroImages(overview: SteamAppOverview): GetHeroImagesResult<AppAssetsWithCustomImage_t>;

  GetHeroImagesForAppId(
    appid: number,
    localCacheVersion?: number,
    storeAssetMtime?: number,
  ): GetHeroImagesResult<AppAssets_t>;

  GetLogoImages(overview: SteamAppOverview): GetLogoImagesResult<AppAssetsWithCustomImage_t>;

  GetLogoImagesForAppId(
    appid: number,
    localCacheVersion?: number,
    storeAssetMtime?: number,
  ): GetLogoImagesResult<AppAssets_t>;

  RequestAppDetails(appid: number): Promise<AppDetails | undefined>;

  RequestAchievements(appid: number): Promise<void>;

  RequestAppDetailsSpotlight(appid: number): Promise<void>;

  RequestAssociationData(appid: number): Promise<void>;

  RequestCustomImageInfo(overview: SteamAppOverview): Promise<void>;

  RequestDescriptionsData(appid: number): Promise<void>;

  /**
   * Sets a provided logo position for a specified app.
   */
  SaveCustomLogoPosition(overview: SteamAppOverview, position: LogoPosition): Promise<void>;

  SetAjaxLibraryAppDetails(appid: number, data: AppData_t, details: AjaxLibraryDetails_t): void;

  /**
   * @returns `true` if the provided custom logo position is valid.
   */
  ValidateCustomImageInfo(info: LogoPositionInStorage): boolean;
}
