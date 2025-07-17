import type { VDFBoolean_t } from '../steam-client/shared';

interface BadgeCard_t {
  strName: string;
  strTitle: string;
  strImgURL: string;
  strArtworkURL: string;
  strMarketHash: string;
  nOwned: 0;
}

interface BadgeInfo_t {
  bMaxed: VDFBoolean_t;
  dtNextRetry: number;
  strIconURL: string;
  strName: string;
  strNextLevelName: string;
  nLevel: number;
  nMaxLevel: number;
  nXP: number;
  nNextLevelXP: number;
  rgCards: BadgeCard_t[];
}

// Seems like there are protobufs for this named
// "CQuest_GetCommunityItemDefinitions_Response_ItemDefinition"
// & "CommunityItemDefinition" but they are not in SteamDatabase/SteamTracking
// but present in some js files... don't wanna do shit with it right now
interface CommunityItemDefinition {
  active: boolean;
  appid: number;
  item_class: number;
  item_description: string;
  item_image_composed: string;
  item_image_composed_foil: string;
  item_image_large: string;
  item_image_small: string;
  item_internal_name: string;
  item_last_changed: number;
  item_movie_mp4: string;
  item_movie_mp4_small: string;
  item_movie_webm: string;
  item_movie_webm_small: string;
  item_name: string;
  item_series: number;
  item_title: string;
  item_type: number;
}

export declare class CBadgeStore {
  m_mapBadgeData: Map<number, BadgeInfo_t>;
  m_mapCommunityItemDefs: Map<number, CommunityItemDefinition[]>;

  /**
   * Fetches badge data for a provided app from the internet.
   *
   * @note It seems like there is a bug that won't let you run this if said
   * app's badge info has not been loaded yet, so you have to run the following
   * before calling this:
   * ```js
   * badgeStore.m_mapBadgeData.set(appid, { dtNextRetry: 0 });
   * ```
   */
  FetchBadgeData(appid: number): Promise<void>;

  FetchCommunityItemDefinitions(appid: number): Promise<void>;

  /**
   * Gets badge info for a provided app. Call {@link FetchBadgeData} before
   * calling this.
   */
  GetBadgeData(appid: number): BadgeInfo_t;

  GetCommunityItemDefinition(
    defs: CommunityItemDefinition[],
    itemClass: number,
    itemType: number,
  ): CommunityItemDefinition | null;

  GetCommunityItemDefinitions(appid: number): CommunityItemDefinition[];

  /**
   * Lets the provided app's badge data be fetched again, since it won't let you
   * fetch it after it's been loaded already.
   */
  InvalidateBadgeData(appid: number): void;
}
