import type { CSteamID } from '../shared';
import type { CMInterface } from '../shared/cm';
import type { CUserLocalStorage } from '../shared/storage';
import type { EAppType } from '../steam-client/App';
import type {
  CCollection,
  CCollectionBase,
  CCollectionFilterBase,
  CDynamicCollectionFilter,
  FilterOptionByIndex_t,
  FilterSpec_t,
} from './collection';
import type { SteamUIWindowInstance } from './steamuistore/window';
import type { CStoreItem } from './storeitemcache';

enum EGameListView {
  /** Usually this */
  kNormal = 1,
  /** Single collection (probably can't see this on desktop mode) */
  kSingleCollection = 10,
  /** Searching */
  kSearchResults = 11,
}

interface GameListSelection_t {
  nAppId: number;
  strCollectionId: string;
}

/**
 * You can get this by getting the "UIStoreLocalState" key from
 * {@link CLibraryUIStore.m_localStorage}.
 */
interface LibraryState_t {
  bGroupedByCollection: boolean;
  bGroupBySharedLibraries: boolean;
  bSortedByRecent: boolean;
  collectionFilter: FilterSpec_t;
  collectionFilterGamepad: FilterSpec_t;
  currentSelection: GameListSelection_t;
  eGameListView: EGameListView;
  mapCollapsedState: Record<string, boolean>;
  nVersion: number;
}

interface NavigateLibraryArgsMap_t {
  /** appid */
  collection: number;
  /** `{appid}` or `{appid}|{collection id}` */
  details: string;
  downloads: undefined;
  // NavigateToCollectionSaveDialog
  'dynamic-collection': any;
  /** `{appid}` or `{appid}|{partner event id}` */
  event: string;
  games: undefined;
  library: undefined;
  media: undefined;
  recent: undefined;
  // NavigateToSharedAppsDesktopUI
  'shared-apps': any;
  view:
    | 'all'
    | 'all-collections'
    | 'games'
    | 'installed'
    | 'login'
    | 'recent'
    | 'software'
    | 'soundtracks'
    | 'tools'
    | 'videos';

  // #region BPM only
  /** TODO */
  appproperties: string;
  apprunning: undefined;
  /** `{appid}|{idk}|{browser history state json ?} */
  controllerconfigurator: string;
  /** TODO: what is this */
  gamepadapiosk: undefined;
  search: undefined;
  /** TODO: section */
  settings: string;
  /** TODO: section */
  settingszoo: string;
  // #endregion
}

export interface CLibraryUIStore {
  m_RecentGamesFirstApp: number;
  m_bGameListGroupedByCollection: boolean;
  m_bGameListGroupedBySharedLibraries: boolean;
  m_bGameListSortedByRecent: boolean;
  m_bIsCollectionEditorOpen: boolean;
  m_bIsCollectionRenameOpen: boolean;
  m_bIsSearchByTypePaneOpen: boolean;
  m_cm: CMInterface;
  m_collectionsAppFilter: CCollectionFilterBase;
  m_collectionsAppFilterGamepad: CCollectionFilterBase;
  m_currentAppFilter: CCollectionFilterBase;
  m_eSelectedGameListView: EGameListView;
  m_gameListSelection: GameListSelection_t;
  m_latchedMostRecentApp: number;
  m_localStorage: CUserLocalStorage;
  m_mapLibrarySectionCollapseState: Map<string, boolean>;
  m_setClientSuggestionIds: Set<number>;
  m_setStoreSuggestionIds: Set<number>;
  // not a mistake, actually valve
  m_setStoreSuggestions: CStoreItem[];

  /**
   * @returns `true` if searching by app type.
   */
  BIsSearchByTypeActive(): boolean;

  /**
   * @returns `true` if the advanced search pane is open.
   */
  BIsSearchByTypePaneOpen(): boolean;

  BIsSuggestionVisible(appid: number): boolean;

  /**
   * @returns `true` if searching by app name.
   */
  BIsTextSearchActive(): boolean;

  CleanupCollapseStateMap(): void;

  /**
   * Collapses all visible collections.
   */
  CollapseAll(): void;

  /**
   * Switches to large mode if not already.
   */
  EnsureLargeMode(): void;

  /**
   * Resets the search and closes the advanced search pane.
   */
  ExitSearch(): void;

  /**
   * Collapses all visible collections.
   */
  ExpandAll(): void;

  /**
   * Expands or collapses all collections from the provided argument.
   */
  ExpandOrCollapseAll(collapse: boolean): void;

  // SendMsgSearchAppDataCacheByStoreKeywords
  FetchSearchSuggestions(query: string): Promise<void>;

  /**
   * @returns the active window instance.
   */
  GetActiveWindowInstance(): SteamUIWindowInstance;

  /**
   * @returns all collections, including system ones.
   */
  GetCollectionList(): Array<CCollectionBase | CCollection>;

  /**
   * @returns the last game played from recent games.
   */
  GetRecentGamesFirstApp(): number;

  /**
   * @returns all visible collections.
   */
  GetVisibleCollections(): Array<CCollectionBase | CCollection>;

  InitializeAppFilter(state: LibraryState_t, param1?: boolean): CCollectionFilterBase;

  /**
   * @returns `true` if provided collection is collapsed.
   */
  IsCollapsed(collectionId: string): boolean;

  /**
   * @returns `true` if there is a BPM window open.
   */
  IsGamepadUIWindowActive(wnd?: SteamUIWindowInstance): boolean;

  NavigateForward(): void;

  // TODO: "value" isn't optional for some keys, but idk how to do that
  NavigateLibrary<K extends keyof NavigateLibraryArgsMap_t>(
    wnd: SteamUIWindowInstance | null,
    key: K,
    value?: NavigateLibraryArgsMap_t[K],
  ): void;

  NavigateToCollectionSaveDialog(param0: string): void;

  NavigateToSharedAppsDesktopUI(json: string): void;

  PreserveNavigation(): void;

  /**
   * Resets the search.
   */
  ResetSearch(): void;

  RestoreNavigation(): void;

  /**
   * Saves current library settings to storage.
   */
  SaveLocalState(): Promise<void>;

  /**
   * @todo Is there a better way to extract args from SelectOption *but* retain
   * the template ? Parameters<T> will just get me "EFilterGroup.Partner" for
   * "group" and "EPartnerCollection | number" for "option". For now, see
   * {@link CCollectionFilterBase.SelectOption}
   */
  SelectCollectionsAppFilterOption<K extends keyof FilterOptionByIndex_t>(
    group: K,
    option: FilterOptionByIndex_t[K],
    value: boolean,
  ): Promise<void>;

  SelectGameListView(param0: EGameListView, collectionId: string): void;

  /**
   * @todo Is there a better way to extract args from SelectOption *but* retain
   * the template ? Parameters<T> will just get me "EFilterGroup.Partner" for
   * "group" and "EPartnerCollection | number" for "option". For now, see
   * {@link CCollectionFilterBase.SelectOption}
   */
  SelectGamepadCollectionsAppFilterOption<K extends keyof FilterOptionByIndex_t>(
    group: K,
    option: FilterOptionByIndex_t[K],
    value: boolean,
  ): Promise<void>;

  /**
   * Shows/hides the dynamic collection's advanced search pane.
   */
  SetCollectionEditorOpen(value: boolean): void;

  /**
   * Shows/hides the rename collection text field.
   */
  SetCollectionRenameOpen(value: boolean): void;

  /**
   * Sets the game list to (not) be grouped by collections.
   */
  SetGameListGroupedByCollection(value: boolean): void;

  SetGameListGroupedBySharedLibrary(value: boolean): void;

  // look at the function name... it should do *that* but it doesn't? i swear it
  // used to
  SetGameListSelection(strCollectionId: string, nAppId: number): Promise<void>;

  /**
   * Sets the game list to (not) be sorted by recently played.
   */
  SetGameListSortedByRecent(value: boolean): void;

  /**
   * Sets the provided collection's collapsed state.
   */
  SetIsCollapsed(collectionId: string, value: boolean): void;

  SetMultiSelectHooksForGameListSelection(): void;

  SetRecentGamesFirstApp(appid: number): void;

  /**
   * Shows/hides the advanced search pane.
   */
  SetSearchByTypePaneOpen(value: boolean): void;

  /**
   * Starts searching for `query`.
   */
  SetSearchText(query: string): Promise<void>;

  ShowCollectionViewWithAppTypes(...appTypes: EAppType[]): void;

  // lol wtf is this
  ShowDurationControlDialog(callbacks: { ConfirmContinue: () => void; Cancel: () => void } | null): void;

  /**
   *
   * @param filter
   * @param steamIds Steam3 IDs
   */
  ShowSharedAppsInLibrary(filter: CDynamicCollectionFilter, steamIds: number[]): void;

  StartSearchByType(filter: CCollectionFilterBase): void;

  /**
   * Toggles the provided collection's collapsed state.
   */
  toggleCollapsed(collectionId: string): void;

  UpdateGameListSelection(): void;

  get bIsGameListGroupedByCollection(): boolean;
  get bIsGameListGroupedBySharedLibraries(): boolean;
  get bIsGameListSortedByRecent(): boolean;
  get clientSearchSuggestionIds(): Set<number>;
  get collectionsAppFilter(): CCollectionFilterBase;
  get collectionsAppFilterGamepad(): CCollectionFilterBase;
  get currentAppFilter(): CCollectionFilterBase;
  get currentCollectionID(): string;
  get currentGameListSelection(): GameListSelection_t;
  get currentUserSteamID(): CSteamID;
  get isCollectionEditorOpen(): boolean;
  get isCollectionRenameOpen(): boolean;
  get searchSuggestionIds(): Set<number>;
  get searchSuggestions(): CStoreItem[];
  get selectedGameListView(): EGameListView;
}
