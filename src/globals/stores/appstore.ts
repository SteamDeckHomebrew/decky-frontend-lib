import type { SteamAppOverview, SteamAppOverviewRemoteClientData } from '../steam-client/App';
import type { EGenre, EStoreCategory } from './collectionstore';

// protoMsg here is CAppOverview or something
export interface IAppOverview extends SteamAppOverview {
  m_setStoreCategories: Set<EStoreCategory>;
  m_setStoreTags: Set<EGenre>;

  BAreCategoriesEqual(protoMsg: any): boolean;
  BAreSetsEqual(lhs: Set<any>, rhs: Set<any>): boolean;
  BAreStoreTagsEqual(): boolean;
  BHasCustomImages(): boolean;
  BHasStoreCategory(category: EStoreCategory): boolean;
  BHasStoreTag(tag: EGenre): boolean;
  BIsAppBlocked(): boolean;
  BIsAppInBlockList(): boolean;
  BIsApplicationOrTool(): boolean;
  BIsBorrowed(): boolean;
  BIsDemo(): boolean;
  BIsGameIDEqual(protoMsg: any): boolean;
  BIsHardware(): boolean;
  BIsLastTimePlayedEqual(protoMsg: any): boolean;
  BIsModOrShortcut(): boolean;
  BIsMusicAlbum(): boolean;
  BIsNewToLibrary(): boolean;
  BIsOwned(): boolean;
  BIsOwnedByAnotherUser(): boolean;
  BIsPerClientDataEqual(protoMsg: any): boolean;
  BIsPerClientDataLocal(protoMsg: any): boolean;
  BIsSelectedClientLocal(): boolean;
  BIsShortcut(): boolean;
  BIsSortAsEqual(protoMsg: any): boolean;
  BIsSteamDeckVerified(): boolean;
  BIsSteamOSCompatible(): boolean;
  BIsSteamVR(): boolean;
  BIsUnreleased(): boolean;
  BIsVisibleInMRUList(): boolean;
  BSupportsVR(): boolean;
  GetCanonicalReleaseDate(): number;
  GetCanonicalReleaseYear(): string;
  GetGameID(): string;
  GetLastPlayedSectionName(): string;
  GetLastTimePlayed(): number;
  GetPerClientData(which: 'local' | 'mostavailable' | 'selected'): SteamAppOverviewRemoteClientData;
  GetPrimaryAppID(): number;
  GetStoreTags(): Set<EGenre>;
}

interface StoreTag {
  nTagId: EGenre;
  nCount: number;
}

export declare class CAppStore {
  m_bIsInitialized: boolean;
  m_mapApps: Map<IAppOverview, string>;
  m_mapStoreTagLocalization: Map<EGenre, string>;
  m_msTagMapLoaded: number;

  /**
   * @returns the soundtrack's album cover URL or `null` if not a soundtrack.
   */
  GetAlbumCoverURLForApp(app: SteamAppOverview): string | null;

  /**
   * @returns the overview for a provided app ID.
   */
  GetAppOverviewByAppID(appid: number): SteamAppOverview | null;

  /**
   * @returns the overview for a provided app ID.
   */
  GetAppOverviewByGameID(gameid: string): SteamAppOverview | null;

  /**
   * Like {@link GetAlbumCoverURLForApp}, but the URL is relative to
   * `https://steamloopback.host`.
   */
  GetCachedAlbumCoverURL(app: SteamAppOverview): string | null;

  /**
   * Like {@link GetVerticalCapsuleURLForApp}, but the URL is relative to
   * `https://steamloopback.host`.
   */
  GetCachedVerticalCapsuleURL(app: SteamAppOverview): string[];

  /**
   * @returns the app's custom hero image URLs.
   * @see {@link GetCustomImageURLs}
   */
  GetCustomHeroImageURLs(app: SteamAppOverview): string[];

  /**
   * You most likely want to use {@link GetCustomHeroImageURLs},
   * {@link GetCustomLandcapeImageURLs}, {@link GetCustomLogoImageURLs} or
   * {@link GetCustomVerticalCapsuleURLs} instead!
   *
   * Gets the URLs for the provided asset.
   *
   * Note that only one of them will be available, depending on which extension
   * ("jpg" or "png") was uploaded.
   *
   * @param assetName For example "", "_hero", "_logo", etc.
   * @returns the URLs relative to `https://steamloopback.host` for the provided
   * asset name.
   */
  GetCustomImageURLs(app: SteamAppOverview, assetName: string): string[];

  /**
   * @returns the custom hero image URLs.
   * @see {@link GetCustomImageURLs}
   */
  GetCustomLandcapeImageURLs(app: SteamAppOverview): string[];

  /**
   * @returns the app's custom logo image URLs.
   * @see {@link GetCustomImageURLs}
   */
  GetCustomLogoImageURLs(app: SteamAppOverview): string[];

  /**
   * @returns the app's custom vertical capsule image URLs.
   * @see {@link GetCustomImageURLs}
   */
  GetCustomVerticalCapsuleURLs(app: SteamAppOverview): string[];

  /**
   * @returns the app's 32x32 icon URL.
   */
  GetIconURLForApp(app: SteamAppOverview): string;

  /**
   * @returns the localized string for a provided store category.
   */
  GetLocalizationForStoreTag(category: EGenre): string;

  /**
   * Like {@link GetVerticalCapsuleURLForApp}, but "pregenerated" here means
   * that if the app doesn't have a vertical capsule (usually older apps), then
   * it will return its hero instead with blur on the side to match the size.
   *
   * @returns the app's vertical capsule URL.
   */
  GetPregeneratedVerticalCapsuleForApp(app: SteamAppOverview): string;

  /**
   * @returns the app's store page URL.
   */
  GetStorePageURLForApp(app: SteamAppOverview): string;

  /**
   * Gets the similiar store tags from a provided localized string.
   *
   * @param s The string to match.
   */
  GetTopStoreTags(s: string): StoreTag[];

  /**
   * @returns the app's vertical capsule URL.
   */
  GetVerticalCapsuleURLForApp(app: SteamAppOverview): string;

  get allApps(): IAppOverview[];
  get sharedLibraryAccountIds(): number[];
  get siteLicenseApps(): { strSiteName: string; rgApps: IAppOverview[] } | null;
}
