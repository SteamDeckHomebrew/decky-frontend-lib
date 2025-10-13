import type { CCloudStorage, CCloudStorageMap, CUserLocalStorage } from '../shared/storage';
import type { EAppType, SteamAppOverview } from '../steam-client/App';

// Not an enum, rather an array in Steam code
export enum EFilterAppFeature {
  FullControllerSupport = 1,
  PartialControllerSupport,
  VR,
  TradingCards,
  Workshop,
  Achievements,
  SinglePlayer,
  MultiPlayer,
  CoOp,
  SteamCloud,
  RemotePlayTogether,
  SteamDeckVerified,
  SteamDeckPlayable,
  SteamDeckUnknown,
  SteamDeckUnsupported,
  PS4ControllerSupport,
  PS4ControllerBTSupport,
  PS5ControllerSupport,
  PS5ControllerBTSupport,
  SteamInputAPI,
  GamepadPreferred,
  HDR,
  FamilySharing,
  SteamOSCompatible,
  SteamOSUnknown,
}

enum EFilterGroup {
  AppType,
  PlayState,
  AppFeature,
  Genre,
  StoreCategory,
  Partner,
  Friends,
}

// Not an enum, rather an array in Steam code
export enum EGamePlayState {
  Installed = 1,
  ReadyToPlay,
  PlayedPreviously,
  Unplayed,
  ValidPlatform,
}

// Another dogshit const enum I have to dig up !
// Stolen from https://github.com/SteamDatabase/SteamTracking/blob/master/store.steampowered.com/public/javascript/applications/store/storemenu.js
export enum EGenre {
  action = 19,
  adventure = 21,
  anime = 4085,
  casual = 597,
  open_world = 1695,
  fighting = 4328,
  fighting_2 = 4736,
  fighting_3 = 6506,
  horror = 1667,
  coop = 1685,
  puzzle = 1664,
  puzzle_2 = 5537,
  puzzle_3 = 1665,
  racing = 699,
  racing_2 = 4102,
  roguelike = 42804,
  rpg = 112,
  rpg_2 = 4434,
  rpg_3 = 4231,
  scifi = 3942,
  simulation = 599,
  simulation_2 = 12472,
  sports = 701,
  story_rich = 1742,
  strategy = 9,
  strategy_2 = 1670,
  strategy_3 = 1676,
  cities_settlements = 9,
  cities_settlements_2 = 4328,
  cities_settlements_3 = 220585,
  survival = 1662,
  visual_novel = 3799,
  f2p = 113,
  vr = 402,
  vr_2 = 401,
}

export enum EStoreCategory {
  MultiPlayer = 1,
  SinglePlayer = 2,
  CoOp = 9,
  PartialController = 18,
  MMO = 20,
  Achievements = 22,
  SteamCloud = 23,
  SplitScreen = 24,
  CrossPlatformMultiPlayer = 27,
  FullController = 28,
  TradingCards = 29,
  Workshop = 30,
  VRSupport = 31,
  OnlineMultiPlayer = 36,
  LocalMultiPlayer = 37,
  OnlineCoOp = 38,
  LocalCoOp = 39,
  RemotePlayTogether = 44,
  HighQualitySoundtrackAudio = 50,
  FamilySharing = 62,
}

export enum EPartnerCollection {
  EASubscription = 'EAAccess',
}

export enum ESystemCollection {
  Favorites = 'favorite',
  Uncategorized = 'uncategorized',
  Hidden = 'hidden',
  AllAppsAlpha = 'all-apps-alpha',
  AllAppsRecent = 'all-apps-recent',
  MyGames = 'my-games',
  SiteLicense = 'site-license',
  Recent = 'recent',
  Shared = 'shared-',
  FamilyGroup = 'shared-familygroup',
  DeckGames = 'deck-games',
  DTst1Games = 'dtst1-games',
  LocalGames = 'local-install',
  AllGames = 'all-games',
  LocalPlayed = 'local-played',
  RecentPurchased = 'recent-purchased',
  DeckDesktopApps = 'deck-desktop-apps',
  RemotePlay = 'remote-play',
  RemotePlayActive = 'remote-play-active',
  VR = 'vr',
  Xbox = 'xbox',
  PS4 = 'ps4',
  PS5 = 'ps5',
  AppType = 'type-',
  AppType_Games = 'type-games',
  AppType_Soundtracks = 'type-music',
  AppType_Software = 'type-software',
  AppType_Videos = 'type-videos',
  AppType_Tools = 'type-tools',
}

interface CollectionInStorageData_t {
  id: string;
  name: string;
  added: number[];
  removed: number[];
}

interface CollectionInStorage_t {
  roamingData: CollectionInStorageData_t;
  localData: Omit<CollectionInStorageData_t, 'name'>;
}

type Values<K> = {
  [P in keyof K]: K[P];
};

interface FilterGroup {
  bAcceptUnion: boolean;
  // TODO: these types depend on its index... no idea what i should do with this one
  rgOptions: Values<FilterOptionByIndex_t>;
}

interface FilterSpec_t {
  filterGroups: FilterGroup[];
  nFormatVersion: number;
  setSuggestions: Set<number>;
  strSearchText: string;
}

type FilterOptionByIndex_t = {
  [EFilterGroup.AppType]: EAppType;
  [EFilterGroup.PlayState]: EGamePlayState;
  [EFilterGroup.AppFeature]: EFilterAppFeature;
  [EFilterGroup.Genre]: EGenre;
  [EFilterGroup.StoreCategory]: EStoreCategory;
  [EFilterGroup.Partner]: EPartnerCollection;
  [EFilterGroup.Friends]: number;
};

type FilterOption_t<T extends EFilterGroup> = {
  eGroup: T;
  option: FilterOptionByIndex_t[T];

  /**
   * Localized option name.
   */
  name: string;
};

declare class CDynamicCollectionFilter {
  m_filterSpec: FilterSpec_t;

  BAcceptsUnion(group: EFilterGroup): boolean;

  /**
   * @returns `true` if the current filter includes filters for the specified
   * app feature.
   */
  BHasAppFeature(feature: EFilterAppFeature): boolean;

  BHasNonGamepadOptions(): boolean;

  /**
   * @returns `true` if the current filter includes tools.
   */
  BIncludesTools(): boolean;

  /**
   * @returns `true` if the option from a provided group is selected
   */
  BIsSelected<K extends keyof FilterOptionByIndex_t>(group: K, option: FilterOptionByIndex_t[K]): boolean;

  // TODO: is this even right? how do i check HEEEEEEEEEEEEEEEEEEELP
  /**
   * @returns all selected filter options.
   */
  GetAllSelectedOptions<K extends keyof FilterOptionByIndex_t>(): FilterOption_t<K>[];

  GetCurrentControllerSpecificOption(): EFilterAppFeature[] | undefined;

  /**
   * @returns all selected filter options for a provided group.
   */
  GetSelectedOptions<K extends keyof FilterOptionByIndex_t>(group: K): FilterOptionByIndex_t[K][];

  /**
   * @returns search URL params for the current filter that could be used for
   * the store search page. For example: `?tags=9,7` for "Cooperative" and
   * "Single player" tags respectively.
   */
  GetTagsString(): string;

  /**
   * @returns an array of localized strings for the current filter.
   */
  GetToolTipText(): string[];

  Matches(overview: SteamAppOverview): boolean;
  MatchesImpl(overview: SteamAppOverview): boolean;
  MatchesScored(overview: SteamAppOverview): boolean;
  MatchesScoredImpl(overview: SteamAppOverview): boolean;

  /**
   * Resets everything to default.
   */
  Reset(): void;

  /**
   * Adds/removes an option from a provided group.
   *
   * Note that sometimes you may have to call {@link CCollection.Save} for the
   * UI changes to appear.
   *
   * @param value `true` to select, `false` otherwise.
   */
  SelectOption<K extends keyof FilterOptionByIndex_t>(group: K, option: FilterOptionByIndex_t[K], value: boolean): void;

  SetSearchSuggestions(list: number[]): void;
  SetSearchText(text: string): void;
  ToggleAcceptsUnion(group: EFilterGroup): void;
  ToStorageFormat(): FilterSpec_t;

  get bIsEmpty(): boolean;
  get hash(): number;
  get searchSuggestions(): Set<number>;
  get searchText(): string;
}

interface CCollectionBase {
  m_mapFilterToAppCounts: Map<number, number>;
  m_rgApps: number[];
  m_setApps: Set<number>;
  m_strId: string;
  m_strName: string;

  AsDeletableCollection(): CCollectionBase | null;

  AsDragDropCollection(): CCollectionBase | null;

  AsEditableCollection(): CCollectionBase | null;

  /**
   * @returns `true` if the provided SteamID is included with the dynamic
   * collection's filter.
   * @param steamid The SteamID 3 of a friend.
   */
  BIncludesFriend(steamid: number): boolean;

  ClearAppCounts(): void;

  /**
   * @returns the amount of games returned by the filter.
   */
  GetAppCountWithToolsFilter(filter: CDynamicCollectionFilter): number;

  /**
   * Sets the provided app IDs for this collection.
   */
  SetApps(rgApps: number[]): void;

  UpdateAllApps(): void;

  UpdateApps(rgAppsToAdd: SteamAppOverview[], rgAppsToRemove: number[]): void;

  UpdateFriendOwnedGames(steamid: number): void;

  get allApps(): SteamAppOverview[];
  get apps(): Set<number>;
  get bAllowsDragAndDrop(): boolean;
  get bFiltersOnGameListAppType(): boolean;
  get bIsDeletable(): boolean;
  get bIsDynamic(): boolean;
  get bIsEditable(): boolean;
  get displayName(): string;
  get id(): string;
  get visibleApps(): SteamAppOverview[];
}

interface CCollection extends CCollectionBase {
  m_filter: CDynamicCollectionFilter;
  m_setAddedManually: Set<number>;
  m_setRemovedManually: Set<number>;

  /**
   * Adds provided apps from this collection.
   */
  AddApps(rgApps: SteamAppOverview[]): void;

  /**
   * Deletes the collection.
   */
  Delete(): Promise<void>;

  FreezeToStatic(): void;

  MergeFromStorageFormat(data: CollectionInStorage_t): void;

  /**
   * Removes provided apps from this collection.
   */
  RemoveApps(rgApps: SteamAppOverview[]): void;

  Save(): Promise<void>;

  ToStorageFormat(): CollectionInStorage_t;

  get internalAddedList(): Set<number>;
  get internalAppFilter(): CDynamicCollectionFilter;
  get internalRemovedList(): Set<number>;
}

export declare class CCollectionStore {
  m_localStorage: CUserLocalStorage;
  m_cloudStorage: CCloudStorage;
  m_cloudStorageMap: CCloudStorageMap;
  m_shortcutCollectionInfo: Record<string, Omit<CollectionInStorageData_t, 'name'>>;
  m_mapSystemCollectionIdToName: Map<ESystemCollection, string>;
  m_mapPartnerCollectionIdToName: Map<string, string>;
  m_mapCollectionsFromStorage: Map<ESystemCollection, CCollection>;

  /**
   * Adds or removes provided apps to a collection.
   *
   * @param rgAppIDs Apps to add/remove.
   * @param bAdd `true` to add, `false` to remove.
   * @param strCollectionID The collection ID to add the apps to.
   */
  AddOrRemoveApp(rgAppIDs: number[], bAdd: boolean, strCollectionID: string): void;

  AddPartnerCollection(collectionID: string): Promise<void>;

  BHasNonGamepadOptions(): boolean;

  /**
   * @returns `true` if the provided app needs to be included in your family's
   * library.
   */
  BIncludeInFamilyGroupCollection(app: SteamAppOverview): boolean;

  /**
   * @returns `true` if the provided app is owned by another user in your
   * family.
   */
  BIncludeInSharedLibraryCollection(app: SteamAppOverview): boolean;

  /**
   * @returns `true` if the provided app is in the "favorite" collection.
   */
  BIsFavorite(app: SteamAppOverview | number): boolean;

  /**
   * @returns `true` if the provided SteamID 3 is in any dynamic collection.
   */
  BIsFriendInAnyCollection(steamid3: number): boolean;

  /**
   * @returns `true` if the provided app is hidden.
   */
  BIsHidden(app: SteamAppOverview | number): boolean;

  /**
   * @returns `true` if the provided ID is a partner collection. (only
   * `partner-ea-access` for now).
   */
  BIsPartnerCollectionId(id: string): boolean;

  /**
   * @returns `true` if the provided string is a partner collection's localized
   * name.
   */
  BIsPartnerCollectionName(name: string): boolean;

  /**
   * @returns `true` if the provided ID is a system collection.
   */
  BIsSystemCollectionId(id: string): boolean;

  /**
   * @returns `true` if the provided string is a system collection's localized
   * name.
   */
  BIsSystemCollectionName(name: string): boolean;

  /**
   * @returns `true` if the provided app is visible in the collection view.
   */
  BIsVisible(app: SteamAppOverview | number): boolean;

  CreateSystemCollections(): Promise<void>;

  /**
   * Deletes a provided collection ID.
   *
   * @throws if the provided ID is of a system collection.
   * @todo returns an enum ?
   */
  DeleteCollection(collectionID: string): Promise<1 | 9>;

  /**
   * @returns the collection associated with the provided ID.
   */
  GetCollection(collectionID: string): CCollection | null;

  /**
   * @returns the collection associated with the provided app type.
   */
  GetCollectionForAppType(type: EAppType): CCollectionBase | undefined;

  /**
   * @returns the collection ID associated with the provided collection name.
   */
  GetCollectionIDByUserTag(collectionName: string): string | null;

  /**
   * @returns an array of user collections that have a provided app.
   */
  GetCollectionListForAppID(appId: number): CCollection[];

  /** @todo returns enum? */
  GetCurrentGamepadFilter(): number;

  /**
   * @returns an array of user collections filtered by the provided name.
   */
  GetUserCollectionsByName(collectionName: string): CCollection[];

  NewUnsavedCollection(strName: string, filter: CDynamicCollectionFilter, rgApps: SteamAppOverview[]): CCollection;

  /**
   * @returns the localized partner collection name from its ID.
   */
  PartnerCollectionIdToName(collectionID: string): string | undefined;

  /**
   * Saves a provided collection to local & cloud storages. Rewrites the
   * previous one if both have the same name.
   */
  SaveCollection(collection: CCollection): Promise<void>;

  /**
   * Adds or removes provided apps to the "favorite" collection.
   *
   * @param rgAppIDs Apps to add/remove.
   * @param bAdd `true` to add, `false` to remove.
   */
  SetAppsAsFavorite(rgAppIDs: number[], bAdd: boolean): void;

  /**
   * Adds or removes provided apps to the "hidden" collection.
   *
   * @param rgAppIDs Apps to add/remove.
   * @param bAdd `true` to add, `false` to remove.
   */
  SetAppsAsHidden(rgAppIDs: number[], bAdd: boolean): void;

  SetGamepadCollectionFilter(type: EAppType): void;

  /**
   * @returns the localized system collection name from its ID.
   */
  SystemCollectionIdToName(collectionID: ESystemCollection): string | undefined;

  WriteLocalStorage(): Promise<void>;

  get allAppsCollection(): CCollectionBase;
  get allGamesCollection(): CCollectionBase;
  get allRecentAppsCollection(): CCollectionBase;
  get appTypeCollectionMap(): Map<ESystemCollection, CCollectionBase>;
  get appTypeCollections(): CCollectionBase[];
  get collectionsFromStorage(): Map<ESystemCollection, CCollection>;
  get deckDesktopApps(): CCollectionBase;
  get deckGamesCollection(): CCollectionBase;
  // what
  get dtestGamesCollection(): null;
  get localGamesCollection(): CCollectionBase;
  get localPlayedGamesCollection(): CCollectionBase;
  get myGamesCollection(): CCollectionBase;
  get ps4ControllerGamesCollection(): CCollectionBase;
  get ps5ControllerGamesCollection(): CCollectionBase;
  get recentAppCollectionMap(): Map<string, CCollectionBase>;
  get recentAppCollections(): CCollectionBase[];
  get recentAppsCollection(): CCollectionBase;
  get recentPurchasedGamesCollection(): CCollectionBase;
  get remotePlayActiveCollection(): CCollectionBase;
  get remotePlayCollection(): CCollectionBase;
  get sharedLibrariesCollectionMap(): Map<string, CCollectionBase>;
  get sharedLibrariesCollections(): CCollectionBase[];
  get siteLicenseCollection(): CCollectionBase;
  get uncategorizedCollection(): CCollectionBase;
  get userCollections(): CCollectionBase[];
  get vrAppsCollection(): CCollectionBase;
  get xboxControllerGamesCollection(): CCollectionBase;
}
