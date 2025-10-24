import type { EParentalFeature } from '../steam-client/Parental';
import type { SteamWebURL_t } from '../steam-client/URL';

type SteamURLs_t = {
  [url in SteamWebURL_t]: { feature: EParentalFeature; regexMatchURL: RegExp; url: string };
};
type SteamURLsLowercase_t = {
  [url in Lowercase<SteamWebURL_t>]: { bDuplicate: boolean; feature: EParentalFeature; url: string };
};

export interface CURLStore {
  m_nGeneration: number;
  m_steamUrls: SteamURLs_t & SteamURLsLowercase_t;

  /**
   * @returns `true` if the URL's domain matches either store, community, or
   * help domains.
   * @example
   * ```js
   * urlStore.BIsSteamURL('https://google.com')
   * // false
   * urlStore.BIsSteamURL('https://store.steampowered.com')
   * // true
   * ```
   */
  BIsSteamURL(url: string): boolean;

  /**
   * @returns the game's points shop URL.
   */
  BuildAppPointsShopURL(appId: number): string;

  /**
   * Like {@link BuildLibraryAssetURL}, but relative to
   * `https://steamloopback.host`.
   *
   * @param appId Game's app ID.
   * @param assetName e.g. `header.png`, `icon.jpg`, `library_hero`.
   * @param timestamp UNIX timestamp.
   */
  BuildCachedLibraryAssetURL(appId: number, assetName: string, timestamp: number): string;

  /**
   * Like {@link BuildStoreAssetURL}, but relative to
   * `https://steamloopback.host`.
   *
   * @param appId Game's app ID.
   * @param assetName e.g. `header.png`, `icon.jpg`, `library_hero`.
   * @param timestamp UNIX timestamp.
   */
  BuildCachedStoreAssetURL(appId: number, assetName: string, timestamp: number): string;

  BuildCustomAssetURL(appId: number, assetName: string, extension: string, timestamp: number): string;

  /**
   * Like {@link BuildLibraryAssetURL}, but relative to
   * `https://steamloopback.host`.
   * TODO: check ~/appcache/librarycache to see when it stopped appearing
   *
   * @param appId Game's app ID.
   * @param icon e.g. `header.png`, `icon.jpg`, `library_hero`.
   * @param timestamp UNIX timestamp.
   */
  BuildLegacyCachedLibraryAssetURL(appId: number, icon: string, timestamp: number): string;

  /**
   * @param appId Game's app ID.
   * @param icon e.g. `header.png`, `icon.jpg`, `library_hero`.
   * @param timestamp UNIX timestamp.
   */
  BuildLibraryAssetURL(appId: number, icon: string, timestamp: number): string;

  /**
   * Returns a Steam URL, e.g. `steam://url/SteamIDPage/{steamid64}`.
   *
   * @param name The URL to return.
   * @param args Arguments to replace `%p1`, `%p2`, etc. with.
   */
  BuildSteamURL(name: SteamWebURL_t, ...args: string[]): string;

  /**
   * @param navParam Likely a tracking param to see where you clicked the link.
   */
  BuildStoreAppDlcURL(appId: number, navParam: string): string;

  /**
   * @param navParam Likely a tracking param to see where you clicked the link.
   */
  BuildStoreAppURL(appId: number, navParam: string): string;

  BuildStoreAssetURL(appId: number, assetName: string): string;

  GetAvatarBaseURL(): string;
  GetBaseURLSharedCDN(): string;
  GetClanCDNAssetURL(): string;
  GetCommunityCDNAssetURL(): string;
  GetCommunityCDNURL(): string;
  GetCommunityImageURL(): string;
  GetCommunityURL(): string;
  GetHelpURL(): string;

  /**
   * Despite the name, only takes one argument and returns the first URL as an
   * array.
   *
   * @example
   * ```js
   * urlStore.GetMatchingUrls('https://store.steampowered.com')[0].urlid
   * // StoreFrontPage
   * urlStore.m_steamUrls.StoreFrontPage.url
   * // "https://store.steampowered.com/"
   * ```
   */
  GetMatchingUrls(url: string): {
    length: number;
    urlid: SteamWebURL_t;
  }[];

  GetMediaCDNUrl(): string;
  GetParentalFeature(name: SteamWebURL_t): EParentalFeature;
  GetParentalFeatureForFullUrl(url: string): EParentalFeature;

  GetStoreAppImageURL(): string;
  GetStoreCDNURL(): string;
  GetStoreGreatOnDeckURL(): string;
  GetStoreIconBaseURL(): string;
  GetStoreURL(): string;
  GetStoreVRURL(): string;
  GetVideoCDNAssetURL(): string;
  GetWebApiURL(): string;

  /**
   * Navigates to given Steam URL from a provided event.
   *
   * @param ev Event to get the targetted window for.
   * @param name The Steam URL to navigate to.
   * @param args Arguments to replace `%p1`, `%p2`, etc. with.
   */
  NavigateToSteamURLInOwningWindow(ev: Event, name: SteamWebURL_t): void;

  /**
   * Resolves a Steam URL.
   *
   * @param name The URL to return.
   * @param args Arguments to replace `%p1`, `%p2`, etc. with.
   */
  ResolveURL(name: SteamWebURL_t, ...args: string[]): string;
}
