import type { SteamBrowserHistoryState } from '../../managers';
import type { BrowserContext } from '../../shared';
import type { ENotificationPosition } from '../../steam-client/Overlay';
import type { Screenshot } from '../../steam-client/Screenshots';
import type { EWindowType, SteamWindow } from '../../steam-client/UI';
import type { BrowserViewCreateOptions } from '../../steam-client/browser-view';
import type { CCollectionStore } from '../collection';
import type { CGameRecordingStore, ClipSummary_t, PlaybackDefinition_t } from '../gamerecordingstore';
import type { CMenuStore } from './menu';
import type { History } from 'history';

export enum EOpenSideMenu {
  None,
  Main,
  QuickAccess,
}

type SettingsSection_t =
  | 'Accessibility'
  | 'Account'
  | 'Audio'
  | 'Bluetooth'
  | 'Broadcast'
  | 'Cloud'
  | 'Compatibility'
  | 'Controller'
  | 'Customization'
  | 'DesktopSecurity'
  | 'Developer'
  | 'Display'
  | 'Downloads'
  | 'Family'
  | 'Friends'
  | 'GameRecording'
  | 'General'
  | 'Home'
  | 'InGame'
  | 'InGameVoice'
  | 'Interface'
  | 'Internal'
  | 'Internet'
  | 'Keyboard'
  | 'Library'
  | 'Music'
  | 'Notifications'
  | 'Power'
  | 'RemotePlay'
  | 'Root'
  | 'Security'
  | 'Storage'
  | 'System'
  | 'Voice';

interface NavigatorRouterState<T> {
  state: T;
}

interface MediaManagerFilter {
  listSource:
    | { type: 'app'; gameid: string }
    // idk doesn't work...
    | { type: 'clip' | 'recording' | 'screenshot'; id?: string; summary?: ClipSummary_t }
    // TODO: is it this ? ("message Phase" if outdated)
    // https://github.com/SteamDatabase/SteamTracking/blob/38a822b9b185d92a644fdaefeb55dcf6f12bd329/Protobufs/webuimessages_gamerecording.proto#L109
    | { type: 'phase'; phase: any }
    | { type: 'recents' };
  mediaType?: 'all' | 'clip' | 'recording' | 'screenshot';
  uploadStatus?: 'all' | 'uploaded' | 'notuploaded';
}

/**
 * This interface allows you to navigate like {@link SteamUIStore.Navigate}, but
 * without hardcoding routes.
 */
interface SteamWindowNavigator {
  type: 'desktop' | 'desktopoverlay' | 'gamepad';

  setNavigatingToInitialRoute(value: boolean): void;

  /**
   * Navigate to Library -> Collections
   */
  AllCollections(): void;

  /**
   * Navigate to the app's entry in library.
   *
   * @param appId The game to navigate to.
   */
  App(appId: number): void;

  /**
   * Navigate to app properties.
   *
   * @param appId The game to open app properties for.
   */
  AppProperties(appId: number): void;

  /**
   * Navigate to friends and chat.
   */
  Chat(): void;

  /**
   * Navigate to a provided collection.
   *
   * @param id The collection ID to navigate to. You can get its ID with
   * {@link CCollectionStore.GetUserCollectionsByName}.
   */
  Collection(id: string): void;

  /**
   * Navigate to the console.
   */
  Console(): void;

  /**
   * Navigate to the downloads manager.
   */
  Downloads(): void;

  /**
   * Open a URL in the system web browser.
   *
   * @param url The URL to open. Must start with `https://`.
   */
  ExternalWeb(url: string): void;

  /**
   * Navigate to friend's achievements for a provided game.
   *
   * @param appid The app ID of the game.
   * @param steamid64 The SteamID 64 of the friend.
   */
  FriendAchievements(appid: number, steamid64: string): void;

  /**
   * Open the server browser dialog.
   */
  GameServers(): void;

  /**
   * Navigate to an app's global achievements. (seems broken and just uses "My
   * achievements" instead)
   *
   * @param appId The app to open global achievements for.
   */
  GlobalAchievements(appId: number): void;

  /**
   * Navigate to the start up location, as specified in the Settings ->
   * Interface section.
   */
  Home(): void;

  /**
   * Media manager.
   */
  Media: {
    /**
     * Opens a clip recording.
     *
     * The `id` key is a clip ID, see {@link CGameRecordingStore} methods on how
     * to get one.
     */
    Clip(
      state: NavigatorRouterState<{
        id: string;
      }>,
    ): void;

    /**
     * Opens the media manager in a grid view.
     */
    Grid(
      state: NavigatorRouterState<{
        filter: MediaManagerFilter;
      }>,
    ): void;

    /**
     * Opens the media manager in a list view.
     */
    List(
      state: NavigatorRouterState<{
        filter: MediaManagerFilter;
      }>,
    ): void;

    /**
     * Opens a screenshot.
     *
     * The `id` key is {@link Screenshot.ugcHandle} if uploaded or something
     * like `440_21`, i.e. `{gameid}_{@link Screenshot.hHandle} if not.
     */
    Screenshot(
      state: NavigatorRouterState<{
        id: string;
      }>,
    ): void;

    /**
     * Opens a game recording.
     */
    Recording(
      state: NavigatorRouterState<{
        gameid: string;
        playbackDefinition?: Partial<PlaybackDefinition_t>;
      }>,
    ): void;
  };

  /**
   * Navigate to an app's local achievements.
   *
   * @param appId The app to open local achievements for.
   */
  MyAchievements(appId: number): void;

  /**
   * Open the "Out of Playtime" (from Steam Families) dialog.
   */
  RequestPlaytimeDialog(connectString: string): void;

  /**
   * Navigate to Steam settings.
   *
   * @param section The section to navigate to.
   */
  Settings(section?: SettingsSection_t): void;

  /**
   * Open a URL in the Steam main window browser.
   *
   * @param url The URL to open.
   */
  SteamWeb(url: string): void;

  /**
   * Open a URL in the Steam web browser dialog.
   *
   * @param url The URL to open.
   */
  SteamWebTab(url: string): void;
}

/**
 * Like {@link SteamWindowNavigator}, but functions here are undefined on
 * desktop mode.
 */
interface SteamWindowNavigator_GamepadOnly {
  /**
   * Navigate to the Settings -> Account section.
   */
  Account(): void;

  AppOverlay: {
    AppRunningControls(): void;
  };

  /**
   * Navigate to the controller configuration.
   */
  ControllerConfigurator: {
    Main(appId: number): void;
  };

  /**
   * Navigate to friend invites.
   */
  Invites(): void;

  /**
   * Navigate to a library tab.
   *
   * @param tab The tab to open.
   */
  LibraryTab(tab: 'AllGames' | 'Collections' | 'DesktopApps' | 'Favorites' | 'Installed' | 'Soundtracks'): void;

  /**
   * @todo Actual login maybe ? I'm not logging out for ts
   */
  Login(): void;

  /**
   * @todo Microtransaction authentication ? also url
   */
  MTXAuth(url: string): void;

  /**
   * @todo Login, but bReauthentication is true
   */
  Reauthentication(): void;

  RemotePlayTogether(): void;
}

interface SteamWindowNotificationPosition {
  horizontalInset: number;
  position: ENotificationPosition;
  verticalInset: number;
}

interface SteamUIWindowParams {
  appid: number;
  bSimulateOnDesktop: boolean;
  bViaGamescope: boolean;
  browserInfo: BrowserContext;
  eWindowType: EWindowType;
  flDisplayScale: number;
  gameid: string;
  nScreenHeight: number;
  nScreenWidth: number;
  strUserAgentIdentifier: string;
}

export interface SteamUIWindowInstance {
  m_BrowserWindow: Window;
  m_bIsGamepadApplicationUIInitialized: boolean;

  /** Current React route. */
  m_locationPathname: string;

  m_Navigator: SteamWindowNavigator & SteamWindowNavigator_GamepadOnly;

  /** The notifications' position & offset. */
  m_notificationPosition: SteamWindowNotificationPosition;

  m_params: Partial<SteamUIWindowParams>;

  m_VirtualKeyboardManager: CVirtualKeyboardManager;

  BCanPopVRDashboardForCurrentPath(): boolean;

  BHasMenus(): boolean;

  /**
   * @returns `true` if the BPM UI is initialized.
   */
  BIsGamepadApplicationUIInitialized(): boolean;

  /**
   * @returns `true` if current React route matches the overlay one.
   */
  BIsOverlayPath(): boolean;

  /** @todo something in react-router */
  BRouteMatch(routes: string[]): boolean;

  /**
   * @todo returns `true` if this window isn't a BPM overlay AND not in
   * gamescope.
   */
  BUseSeparateOverlayWindows(): boolean;

  BViewingPreLoginRoute(): boolean;

  /**
   * @todo Creates a browser view object similiar to the one in MainWindowBrowserManager
   * @param name Browser name.
   */
  CreateBrowserView(name: string, options: BrowserViewCreateOptions): any;

  /**
   * Focuses the main window.
   */
  FocusApplicationRoot(): void;

  GetMainVROverlayKey(): string | undefined;

  GetShowingGlobalModal(): boolean;

  // returns the same thing as CreateBrowserView
  GetStoreBrowser(): any;

  // #region EWindowType matching
  IsControllerConfiguratorWindow(): boolean;
  IsDesktopLoginWindow(): boolean;
  IsDesktopOverlayWindow(): boolean;
  IsDesktopUIWindow(): boolean;
  IsGamepadUIOverlayWindow(): boolean;
  IsGamepadUIWindow(): boolean;
  IsMainDesktopWindow(): boolean;
  IsMainGamepadUIWindow(): boolean;
  IsStandaloneKeyboardWindow(): boolean;
  IsSteamChinaReviewLauncher(): boolean;
  IsVRSimulatedOnDesktopWindow(): boolean;
  IsVRWindow(): boolean;
  IsVRWindowInGamescope(): boolean;
  // #endregion

  Navigate(path: string, replaceHistoryEntry: boolean, matchRoute: boolean, state?: SteamBrowserHistoryState): void;
  NavigateBack: History['goBack'];
  NavigateHistory: History['go'];
  NavigateToRunningApp(replaceHistoryEntry: boolean): void;
  NavigateToStandaloneAppRunningControls(e?: boolean): void;
  NavigateToSteamWeb: SteamWindowNavigator['SteamWeb'];
  NavigateWithoutChangingFocus: this['Navigate'];
  SetBrowserWindow(value: Window): void;
  SetNavigator(value: SteamWindowNavigator & SteamWindowNavigator_GamepadOnly): void;
  SetNotificationPosition(pos: ENotificationPosition, horizontalInset: number, verticalInset: number): void;
  SetShowingGlobalModal(value: boolean): void;
  SetStoreBrowserGlass(openSideMenu: EOpenSideMenu): void;

  get BrowserWindow(): Window;
  get MenuStore(): CMenuStore;
}

interface AppWindow {
  appid: number;
  focusedWindowID: number;
  windowids: number[];
}

export declare class CWindowStore {
  // SteamUIStore lol
  m_Parent: any;
  m_mapAppOverlayPosition: Map<number, SteamWindowNotificationPosition>;
  m_mapAppWindows: Map<number, AppWindow>;
  m_mapDesiredWindowInstances: Map<number, SteamUIWindowInstance>;
  m_mapDesiredWindows: Map<number, SteamWindow>;
  m_mapOverlayPopupByPID: Map<number, SteamUIWindowInstance>;
  m_simulatedVRGamepadUIOnDesktopInstance: SteamUIWindowInstance | undefined;

  AddTestWindowsOverlayBrowser(appid: number): void;
  BHasAppWindow(appid: number): boolean;
  BHasGamepadUIMainWindow(): boolean;
  BHasOverlayWindowForApp(appid: number): boolean;
  BHasStandaloneConfiguratorWindow(): boolean;
  BHasStandaloneKeyboard(): boolean;
  BHasVRWindow(): boolean;

  // #region Window creation, idk how to use these yet ty react
  // all return SteamUIWindowInstance
  CreateDesktopLoginWindow: any;
  CreateMainDesktopWindow: any;
  CreateMainGamepadUIWindow: any;
  CreateSimulatedVRWindow: any;
  CreateStandaloneControllerConfiguratorWindow: any;
  CreateStandaloneKeyboardWindow: any;
  CreateSteamChinaReviewLauncherWindow: any;
  CreateVRWindow: any;
  // #endregion

  DEBUG_DumpDesiredSteamUIWindows(): Promise<any>;
  EnsureMainWindowCreated(forceOSWindowFocus: boolean): void;
  GetAppFocusedWindowID(appid: number): number;
  GetAppWindowIDs(appid: number): number[];
  GetControllerConfiguratorWindowFromAppID(appid: number): SteamUIWindowInstance;
  GetInstanceForPID(pid: number): SteamUIWindowInstance;
  GetOverlayInstance(appid: number, pid: number): SteamUIWindowInstance;
  GetOverlayInstanceWithFallback(appid?: number, pid?: number): SteamUIWindowInstance;
  GetOverlayInstances(appid: number): SteamUIWindowInstance[];
  GetSimultedVRWindowInstance(): this['m_simulatedVRGamepadUIOnDesktopInstance'];
  GetSteamUIWindowByType(type: EWindowType): SteamUIWindowInstance | undefined;
  GetVRWindowInstance(): SteamUIWindowInstance | undefined;
  GetWindowInstanceFromWindow(wnd: Window): SteamUIWindowInstance | null;
  RemoveRunningAppWindowIDs(appid: number): void;
  SetFocusedAppWindowID(appid: number, windowid: number): void;
  SetRunningAppWindowIDs(appid: number, windowids: number[]): void;
  UpdateDesiredWindows(windows: SteamWindow[]): void;

  get GamepadUIMainWindowInstance(): SteamUIWindowInstance;
  get GamepadUIVRWindowInstance(): SteamUIWindowInstance;
  get MainRunningAppWindowIDs(): number[] | undefined;
  get MainWindowInstance(): SteamUIWindowInstance;
  get OverlayWindows(): SteamUIWindowInstance[];
  get SteamUIWindows(): SteamUIWindowInstance[];
}
