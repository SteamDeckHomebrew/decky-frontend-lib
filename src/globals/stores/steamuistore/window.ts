import type { BrowserContext } from '../../shared';
import type { ENotificationPosition } from '../../steam-client/Overlay';
import type { EWindowType } from '../../steam-client/UI';
import type { CCollectionStore } from '../collection';
import type { CMenuStore } from './menu';
import type { CVirtualKeyboardManager } from './virtualkeyboardmanager';

// TODO: revise
type SteamWindowSettingsSection_t =
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

interface NavigatorState<T> {
  state: T;
}

/**
 * This interface allows you to navigate like {@link SteamUIStore.Navigate}, but
 * without using routes.
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
   * @param id The collection ID to navigate to. You can get its ID by using
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
   * Opens a URL in the system web browser.
   *
   * @param url The URL to open. Must start witht `https://`.
   */
  ExternalWeb(url: string): void;

  /**
   * Navigate to an app's global achievements. (seems broken and just uses "My
   * achievements" instead)
   *
   * @param appId The app to open global achievements for.
   */
  GlobalAchievements(appId: number): void;

  // TODO:
  // Home: (e = {}, t = {}) => {
  /**
   * Navigate to the start up location, as specified in the Settings ->
   * Interface section.
   */
  Home(): void;

  Media: {
    Clip(
      state: NavigatorState<{
        id: string;
      }>,
    ): void;
    // TODO for both: state
    Grid(state: NavigatorState<object>): void;
    List(state: NavigatorState<object>): void;
    Screenshot(
      state: NavigatorState<{
        id: string;
      }>,
    ): void;
    Recording(
      state: NavigatorState<{
        gameid: string;
        playbackDefinition?: {
          m_strTimelineID: string;
          m_nTimelineStartMS: number;
        };
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
   * Navigate to Steam settings.
   *
   * @param section The section to navigate to.
   */
  Settings(section?: SteamWindowSettingsSection_t): void;

  /**
   * Opens a URL in the Steam main window browser.
   *
   * @param url The URL to open.
   * @param param1 TODO: seems unused (MAYBE)
   */
  SteamWeb(url: string, param1: any): void;

  /**
   * Opens a URL in the Steam web browser dialog.
   *
   * @param url The URL to open.
   */
  SteamWebTab(url: string): void;
}

/**
 * Like {@link SteamWindowNavigator}, but routes here aren't available on
 * desktop mode.
 */
interface SteamWindowNavigator_GamepadOnly {
  /**
   * Navigate to the Settings -> Account section.
   */
  Account(param0): void;

  // TODO
  AppOverlay: {
    AppRunningControls(): void;
  };

  /**
   * Navigate to the controller configuration.
   */
  ControllerConfigurator: {
    Main(appId: number): void;
  };

  // console.log("No server browser in big picture mode!");
  // wtf why
  GameServers(): void;

  /**
   * Navigate to friend invites.
   */
  Invites(param0): void;

  /**
   * Navigate to the library.
   */
  LibraryTab(e, t): void;

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

  RequestPlaytimeDialog(e): void;
}

export interface SteamWindowNotificationPosition {
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

export interface SteamUIWindow {
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
   * @todo returns `true` if this window isn't a BPM overlay and not in gamescope.
   */
  BUseSeparateOverlayWindows(): boolean;

  BViewingPreLoginRoute(): boolean;

  /**
   * @todo Creates a browser view object similiar to the one in MainWindowBrowserManager
   * @param name Browser name.
   * @param options BrowserViewInit
   */
  CreateBrowserView(name: string, options: any): any;

  /**
   * Focuses the main window.
   */
  FocusApplicationRoot(): void;

  GetMainVROverlayKey(): any;
  GetShowingGlobalModal(): boolean;
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

  Navigate(path: string, t: boolean, n: boolean, o?: any): void;
  NavigateBack: any;
  NavigateHistory: any;
  NavigateToRunningApp: any;
  NavigateToStandaloneAppRunningControls: any;
  NavigateToSteamWeb: any;
  NavigateWithoutChangingFocus: any;
  SetBrowserWindow: any;
  SetNavigator: any;
  SetNotificationPosition: any;
  SetShowingGlobalModal: any;
  SetStoreBrowserGlass: any;

  get BrowserWindow(): Window;
  get MenuStore(): CMenuStore;
}

export declare class CWindowStore {
  AddTestWindowsOverlayBrowser: any;
  BHasAppWindow: any;
  BHasGamepadUIMainWindow: any;
  BHasOverlayWindowForApp: any;
  BHasStandaloneConfiguratorWindow: any;
  BHasStandaloneKeyboard: any;
  BHasVRWindow: any;
  CreateDesktopLoginWindow: any;
  CreateMainDesktopWindow: any;
  CreateMainGamepadUIWindow: any;
  CreateSimulatedVRWindow: any;
  CreateStandaloneControllerConfiguratorWindow: any;
  CreateStandaloneKeyboardWindow: any;
  CreateSteamChinaReviewLauncherWindow: any;
  CreateVRWindow: any;
  DEBUG_DumpDesiredSteamUIWindows: any;
  EnsureMainWindowCreated: any;
  GetAppFocusedWindowID: any;
  GetAppWindowIDs: any;
  GetControllerConfiguratorWindowFromAppID: any;
  GetInstanceForPID: any;
  GetOverlayInstance: any;
  GetOverlayInstanceWithFallback: any;
  GetOverlayInstances: any;
  GetSimultedVRWindowInstance: any;
  GetSteamUIWindowByType: any;
  GetVRWindowInstance: any;
  GetWindowInstanceFromWindow: any;
  RemoveRunningAppWindowIDs: any;
  SetFocusedAppWindowID: any;
  SetRunningAppWindowIDs: any;
  UpdateDesiredWindows: any;

  get GamepadUIMainWindowInstance(): SteamUIWindow;
  get GamepadUIVRWindowInstance(): SteamUIWindow;
  get MainRunningAppWindowIDs();
  get MainWindowInstance(): SteamUIWindow;
  get OverlayWindows(): SteamUIWindow[];
  get SteamUIWindows(): SteamUIWindow[];
}
