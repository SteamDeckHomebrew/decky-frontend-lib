import type { ServiceTransport } from '../shared';
import type { EAppType, ESteamDeckCompatibilityCategory } from '../steam-client/App';
import type { ELanguage } from '../steam-client/Settings';
import type { EResult } from '../steam-client/shared';

// #region TODO(protobufs): generate
export enum ESteamOSCompatibilityCategory {
  k_ESteamOSCompatibilityCategory_Unknown,
  k_ESteamOSCompatibilityCategory_Unsupported,
  k_ESteamOSCompatibilityCategory_Compatible,
}

export enum EStoreItemType {
  k_EStoreItemType_Invalid = -1,
  k_EStoreItemType_App,
  k_EStoreItemType_Package,
  k_EStoreItemType_Bundle,
  k_EStoreItemType_Mtx,
  k_EStoreItemType_Tag,
  k_EStoreItemType_Creator,
  k_EStoreItemType_HubCategory,
}

declare class StoreBrowseItemDataRequest {}
// #endregion

interface StoreItemAssets {
  ConstructAssetURL(urlFormat: string, name: string): string | undefined;
  GetCommunityIconURL(): string | undefined;
  GetCommunityIconURL_Full(): string | undefined;
  GetHeaderURL(): string | undefined;
  GetHeroCapsuleURL(): string | undefined;
  GetHeroCapsuleURL_2x(): string | undefined;
  GetLibraryCapsuleURL(): string | undefined;
  GetLibraryCapsuleURL_2x(): string | undefined;
  GetLibraryHeroURL(): string | undefined;
  GetLibraryHeroURL_2x(): string | undefined;
  GetMainCapsuleURL(): string | undefined;
  GetPackageHeaderURL(): string | undefined;
  GetPageBackgroundURL(): string | undefined;
  GetRawPageBackgroundURL(): string | undefined;
  GetSmallCapsuleURL(): string | undefined;
}

export interface CStoreItem {
  k_regexSalePage: RegExp;
  m_Assets: StoreItemAssets | undefined;
  m_AssetsWithoutOverrides: StoreItemAssets | undefined;
  m_BasicInfo: {
    developers: {
      name: string;
    }[];
    franchises: {
      creator_clan_account_id: number;
      name: string;
    }[];
    publishers: {
      creator_clan_account_id: number;
      name: string;
    }[];
    short_description: string;
  };
  m_BestPurchaseOption: {
    active_discounts: {
      discount_amount: string;
      discount_description: string;
      discount_end_date: number;
    }[];
    discount_pct: number;
    final_price_in_cents: string;
    formatted_final_price: string;
    formatted_original_price: string;
    hide_discount_pct_for_compliance: boolean;
    included_game_count: number;
    original_price_in_cents: string;
    packageid: number;
    purchase_option_name: string;
    user_can_purchase_as_gift: boolean;
  };
  m_ContentDescriptorIDs: any[];
  m_DataRequested: {
    include_assets: boolean;
    include_basic_info: boolean;
    include_tag_count: number;
  };
  m_Platforms: {
    windows: boolean;
    mac: boolean;
    steamos_linux: boolean;
    vr_support: {
      vrhmd: boolean;
      vrhmd_only: boolean;
      htc_vive: boolean;
      oculus_rift: boolean;
      windows_mr: boolean;
      valve_index: boolean;
    };
    steam_deck_compat_category: ESteamDeckCompatibilityCategory;
    steam_os_compat_category: ESteamOSCompatibilityCategory;
  };
  m_RelatedItems: {
    demo_appid: any[];
    standalone_demo_appid: any[];
  };
  m_ReleaseInfo: any;
  m_ReviewInfo: any;
  m_Screenshots: any;
  m_SelfPurchaseOption: any;
  m_StoreCategories: {
    controller_categoryids: number[];
    feature_categoryids: number[];
    supported_player_categoryids: number[];
  };
  m_Trailers: any;
  m_bIsComingSoon: boolean;
  m_bIsEarlyAccess: boolean;
  m_bIsFree: boolean;
  m_bIsFreeTemporary: boolean;
  m_bVisible: boolean;
  m_eAppType: EAppType;
  m_eItemType: EStoreItemType;
  m_freeWeekend: {};
  m_rgIncludedAppIDs: any[];
  m_rgIncludedAppTypes: any[];
  m_rgLinks: any;
  m_rgPurchaseOptions: any;
  m_rgStoreTagIDs: any[];
  m_rgStoreTags: any[];
  m_rgSupportedLanguages: any;
  m_strInternalName: string;
  m_strName: string;
  m_strStoreURLPath: string;
  m_strStoreURLPathOverride: string;
  m_unAppID: number;
  m_unID: number;
  m_userFilterFailure: any;

  BCheckDataRequestIncluded(msg: StoreBrowseItemDataRequest): boolean;
  BContainDataRequest(msg: StoreBrowseItemDataRequest): boolean;
  BHasAgeSafeScreenshots(): boolean;
  BHasDemo(): boolean;
  BHasHighlightTrailers(param0: any): boolean;
  BHasSomeLanguageSupport(lang: ELanguage): boolean;
  BHasStoreCategory(category: number): boolean;
  BHasTags(): boolean;
  BHasTrailers(param0: any): boolean;
  BIsAgeSafeScreenshot(param0: any): boolean;
  BIsApplicationOrTool(): boolean;
  BIsComingSoon(): boolean;
  BIsCustomComingSoonDisplay(): boolean;
  BIsEarlyAccess(): boolean;
  BIsFree(): boolean;
  BIsFreeTemporary(): boolean;
  BIsFreeWeekend(): boolean;
  BIsPrePurchase(): boolean;
  BIsReleased(): boolean;
  BIsSalePage(): boolean;
  BIsVisible(): boolean;
  BLimitedLaunchActive(): boolean;
  GetAllCreatorClanIDs(): number[];
  GetAllDeveloperCreatorClans(): number[];
  GetAllFranchiseCreatorClans(): number[];
  GetAllLanguagesWithSomeSupport(): any[];
  GetAllPublisherCreatorClans(): number[];
  GetAllPurchaseOptions(): this['m_rgPurchaseOptions'];
  GetAllTrailers(): this['m_Trailers'];
  GetAppID(): number;
  GetAppIDToRun(): number;
  GetAppType(): EAppType;
  GetAssets(): this['m_Assets'];
  GetAssetsWithoutOverrides(): this['m_AssetsWithoutOverrides'];
  GetBestPurchaseOption(): this['m_BestPurchaseOption'];
  GetBestPurchaseOriginalPriceFormatted(): string;
  GetBestPurchaseOriginalPriceInCents(): number;
  GetBestPurchasePriceFormatted(): string;
  GetBestPurchasePriceInCents(): number;
  GetCapsuleHeadline(): any;
  GetCommunityDiscussionForumsURL(): string;
  GetCommunityPageURL(): string;
  GetContentDescriptorIDs(): any[];
  GetDataRequest(): this['m_DataRequested'];
  GetDemoAppIDs(): number[];
  GetDemoStandaloneStorePageAppIDs(): number[];
  GetDeveloperNames(): string[];
  GetFilteredReviewSummary(): any;
  GetFilteredReviewSummaryLanguage(): any;
  GetFormattedSteamReleaseDate(): string;
  GetFranchiseNames(): string[];
  GetFreeWeekendEnd(): any;
  GetFreeWeekendPlayTextOverride(): any;
  GetID(): number;
  GetIncludedAppIDs(): number[];
  GetIncludedAppIDsOrSelf(): number[];
  GetIncludedAppTypes(): EAppType[];
  GetInternalName(): any;
  GetLinks(): any;
  GetMicroTrailer(e: any): any | null;
  GetName(): string;
  GetOriginalReleaseDateRTime(): any;
  GetParentAppID(): number;
  GetPlatforms(): this['m_Platforms'];
  GetPublisherNames(): string[];
  GetReleaseDateRTime(e?: boolean): number;
  GetSalePageVanityURL(): string;
  GetScreenshots(e: any): any[];
  GetSelfPurchaseOption(): any;
  GetShortDescription(): string;
  GetStoreCategories_Controller(): number[];
  GetStoreCategories_Features(): number[];
  GetStoreCategories_SupportedPlayers(): number[];
  GetStoreItemType(): EStoreItemType;
  GetStorePageURL(demoPage?: boolean): string;
  GetStorePageURLOverride(): string;
  GetStorePageURLWithOverride(): string;
  GetTagIDs(): any[];
  GetTags(): any[];
  GetUnfilteredReviewSummary(): any;
  GetUniqueID(): string;
  GetUserFilterFailure(): any;
  HasContentDescriptorID(param0: any): boolean;
  HasDemoStandaloneStorePage(): boolean;
  MergeData(e: any, t: any): void;
  ReplaceBestPurchaseOption(e: any): void;
}

export interface CStoreItemCache {
  k_AlreadyResolvedBusy: Promise<EResult>;
  k_AlreadyResolvedInvalid: Promise<EResult>;
  k_AlreadyResolvedOK: Promise<EResult>;
  k_QueueWaitUntilRequestMS: number;
  k_nMaxBatchSize: number;
  m_PendingInfoPromise: any;
  m_PendingInfoResolve: any;
  m_PendingTimer: any;
  m_bActivelyResettingCache: boolean;
  m_bInitialized: boolean;
  m_bReturnUnavailableItems: boolean;
  m_bUsePartnerAPI: boolean;
  m_mapApps: Map<number, CStoreItem>;
  m_mapAppsInFlight: Map<number, CStoreItem>;
  m_mapBundleInFlight: Map<number, CStoreItem>;
  m_mapBundles: Map<number, CStoreItem>;
  m_mapCreators: Map<number, CStoreItem>;
  m_mapCreatorsInFlight: Map<number, CStoreItem>;
  m_mapHubCategories: Map<number, CStoreItem>;
  m_mapHubCategoriesInFlight: Map<number, CStoreItem>;
  m_mapPackageInFlight: Map<number, CStoreItem>;
  m_mapPackages: Map<number, CStoreItem>;
  m_mapTags: Map<number, CStoreItem>;
  m_mapTagsInFlight: Map<number, CStoreItem>;
  m_serviceTransport: ServiceTransport;
  m_setPendingAppInfo: Set<number>;
  m_setPendingBundleInfo: Set<number>;
  m_setPendingCreatorInfo: Set<number>;
  m_setPendingDataRequest: Set<number>;
  m_setPendingHubCategoryInfo: Set<number>;
  m_setPendingPackageInfo: Set<number>;
  m_setPendingTagInfo: Set<number>;
  m_setUnavailableApps: Set<number>;
  m_setUnavailableBundles: Set<number>;
  m_setUnavailableCreators: Set<number>;
  m_setUnavailableDueToCountryRestrictionApps: Set<number>;
  m_setUnavailableDueToCountryRestrictionBundles: Set<number>;
  m_setUnavailableDueToCountryRestrictionPackages: Set<number>;
  m_setUnavailableHubCategories: Set<number>;
  m_setUnavailablePackages: Set<number>;
  m_setUnavailableTags: Set<number>;

  BHasApp(appid: number, msg: StoreBrowseItemDataRequest): boolean;
  BHasBundle(appid: number, msg: StoreBrowseItemDataRequest): boolean;
  BHasCreator(appid: number, msg: StoreBrowseItemDataRequest): boolean;
  BHasHubCategory(appid: number, msg: StoreBrowseItemDataRequest): boolean;
  BHasPackage(appid: number, msg: StoreBrowseItemDataRequest): boolean;
  BHasStoreItem(appid: number, type: EStoreItemType, msg: StoreBrowseItemDataRequest): boolean;
  BHasTag(appid: number, msg: StoreBrowseItemDataRequest): boolean;
  BIsAppMissing(appid: number): boolean;
  BIsAppUnavailableDueToCountryRestriction(appid: number): boolean;
  BIsBundleMissing(appid: number): boolean;
  BIsBundleUnavailableDueToCountryRestriction(appid: number): boolean;
  BIsCreatorMissing(appid: number): boolean;
  BIsHubCategoryMissing(appid: number): boolean;
  BIsPackageMissing(appid: number): boolean;
  BIsPackageUnavailableDueToCountryRestriction(appid: number): boolean;
  BIsStoreItemMissing(appid: number, type: EStoreItemType): boolean;
  BIsStoreItemUnavailableDueToCountryRestriction(appid: number, type: EStoreItemType): boolean;
  BIsTagMissing(appid: number): boolean;
  FlushPendingInfo(): Promise<void>;
  GetApp(appid: number): CStoreItem;
  GetBundle(appid: number): CStoreItem;
  GetCreator(appid: number): CStoreItem;
  GetHubCategory(appid: number): CStoreItem;
  GetMapForType(appid: number, type: EStoreItemType): Map<number, CStoreItem>;
  GetPackage(appid: number): CStoreItem;
  /** return type not a mistake, actually valve */
  GetPreviousSupersetLoadPromise(
    appid: number,
    type: EStoreItemType,
    msg: StoreBrowseItemDataRequest,
  ): Promise<EResult> | null;
  GetReturnUnavailableItems(): boolean;
  GetServiceTransport(): ServiceTransport;
  GetStoreItem(appid: number, type: EStoreItemType): CStoreItem;
  GetStoreItemDataRequest(appid: number, type: EStoreItemType): CStoreItem['m_DataRequested'] | null;
  GetStoreItemWithLegacyVisibilityCheck(appid: number, type: EStoreItemType): CStoreItem | undefined;
  GetTag(appid: number): CStoreItem;
  HintLoadStoreApps(apps: number[], msg: StoreBrowseItemDataRequest): Promise<EResult | undefined>;
  HintLoadStoreBundles(bundles: number[], msg: StoreBrowseItemDataRequest): Promise<EResult | undefined>;
  HintLoadStoreItems(
    apps: number[] | null,
    packages: number[] | null,
    bundles: number[] | null,
    tags: number[] | null,
    creators: number[] | null,
    hubCategories: number[] | null,
    msg: StoreBrowseItemDataRequest,
  ): Promise<EResult | undefined>;
  HintLoadStorePackages(packages: number[], msg: StoreBrowseItemDataRequest): Promise<EResult | undefined>;
  /** StoreItemID & StoreBrowseItemDataRequest proto messages respectively */
  InternalHandleLoadStoreItems(msg1: any, msg2: StoreBrowseItemDataRequest): Promise<any>;
  /** @param msg StoreItemID proto message */
  MarkStoreItemIDUnavailable(msgs: any[]): void;
  QueueAppRequest(appid: number, msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueBundleRequest(appid: number, msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueCreatorRequest(appid: number, msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueHubCategoryRequest(appid: number, msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueMultipleAppRequests(appids: number[], msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueMultipleBundleRequests(appids: number[], msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueMultipleCreatorRequests(appids: number[], msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueMultipleHubCategoryRequests(appids: number[], msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueMultiplePackageRequests(appids: number[], msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueMultipleStoreItemRequests(
    appids: number[],
    type: EStoreItemType,
    msg: StoreBrowseItemDataRequest,
  ): Promise<EResult>;
  QueueMultipleTagRequests(appids: number[], msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueuePackageRequest(appid: number, msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueStoreItemRequest(appid: number, type: EStoreItemType, msg: StoreBrowseItemDataRequest): Promise<EResult>;
  QueueTagRequest(appid: number, msg: StoreBrowseItemDataRequest): Promise<EResult>;
  ReadResults(e: any[], t: any): any[];
  ResetCache(): Promise<void>;
  SetReturnUnavailableItems(value: boolean): void;
  SetServiceTransport(value: ServiceTransport): void;
  SetSteamInterface(value: any): void;
  /** @param msg StoreItemID proto message */
  SortStoreItems(msg: StoreBrowseItemDataRequest): any;
}
