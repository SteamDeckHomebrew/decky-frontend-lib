import type { BrowserContext, CCallbackList, SubscribableValue } from '../shared/interfaces';
import type { SteamAppOverview } from '../steam-client/App';
import type { ENotificationPosition } from '../steam-client/Overlay';

export enum EWindowType {
  MainGamepadUI,
  OverlayGamepadUI,
  Keyboard,
  ControllerConfigurator,
  VR,
  MainDesktopUI,
  DesktopLogin,
  OverlayDesktopUI,
  SteamChinaReviewLauncher,
}

export type SteamWindowSettingsSection =
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

export interface SteamWindowMediaState {
  state: {
    strScreenshotHandle: string;
    nAppID: number;
  };
}

export interface SteamWindowNavigator {
  type: 'desktop' | 'desktopoverlay' | 'gamepad';
  setNavigatingToInitialRoute(value: boolean): void;

  AllCollections(): void;
  App(appId: number): void;
  AppProperties(appId: number): void;
  Chat(): void;
  Collection(name: string): void;
  Console(): void;
  Downloads(): void;
  ExternalWeb(url: string): void;
  GlobalAchievements(): void;
  Home(): void;
  Media(state: SteamWindowMediaState): void;
  MyAchievements(appId: number): void;
  Settings(section: SteamWindowSettingsSection): void;
  SteamWeb(param0: any, param1: any): void;
  SteamWebTab(url: string): void;
}

export interface SteamWindowNavigator_Gamepad extends SteamWindowNavigator {
  Account(): void;
  ControllerConfigurator: {
    Main(appId: number): void;
  };
  Invites(): void;
  LibraryTab(): void;
  Login(): void;
  MTXAuth(): void;
  Reauthentication(): void;
}

export interface SteamWindowNotificationPosition {
  horizontalInset: number;
  position: ENotificationPosition;
  verticalInset: number;
}

export interface ActiveElementProps {
  onEnterKeyPress?: (() => void) | null;
  onKeyboardFullyVisible?: (() => void) | null;
  onKeyboardNavOut?: (() => void) | null;
  onKeyboardShow?: (() => void) | null;
  /**
   * @todo "text" seems actually like a key
   */
  onTextEntered?: (text: string) => void;
  strEnterKeyLabel?: string;
}

export type VKMRef_t = any;

export interface VirtualKeyboardManager {
  k_nKeyboardWindowOffset: number;
  k_rgKeyboardLocations: string[];
  m_OnActiveElementChanged: CCallbackList<VKMRef_t | null>;
  m_OnActiveElementClicked: CCallbackList<VKMRef_t | null>;
  m_bDismissOnEnter: boolean;
  m_bIsInlineVirtualKeyboardOpen: SubscribableValue<boolean>;
  m_bIsVirtualKeyboardModal: SubscribableValue<boolean>;
  m_currentVirtualKeyboardRef: VKMRef_t;
  /**
   * Index of {@link k_rgKeyboardLocations}
   */
  m_iKeyboardLocation: number;
  m_lastActiveVirtualKeyboardRef: VKMRef_t;
  m_strDeadKeyCombined: string | null;
  m_strDeadKeyNext: string | null;
  m_strDeadKeyPending: string | null;
  /**
   * @todo enum?
   */
  m_textFieldLocation: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };

  ClearCurrentVirtualKeyboardRef(): void;
  CreateVirtualKeyboardRef(e: any, t: any): any;
  GetDeadKeyPending(): string | null;
  GetEnterKeyLabel(): string | undefined;
  HandleDeadKeyDown(key: string, deadKeyNext: string, deadKeyCombined: string): void;
  HandleNavOut(e: any): any;
  HandleVirtualKeyDown(key: string, t: any): any;
  Init(): void;
  InitKeyboardLocation(e: any, t: any, n: any): void;
  ResetDeadKeyState(): any;
  RestoreVirtualKeyboardForLastActiveElement(): void;
  /**
   * @param n -1 by default
   */
  RotateKeyboardLocation(move: boolean, ownerWindow: Window, location: number): void;
  SelectBestModalPosition(ownerWindow: any): void;
  SendClientPasteCommand(): void;
  SetActiveVirtualKeyboardTarget(ref: any, props: ActiveElementProps, ownerWindow: any): void;
  SetDismissOnEnterKey(value: boolean): void;
  SetTextFieldLocation(top: number, right: number, bottom: number, left: number): void;
  SetVirtualKeyboardActiveRef(ref: VKMRef_t): void;
  SetVirtualKeyboardDone(ownerWindow: any): void;
  SetVirtualKeyboardHidden(ownerWindow: any): void;
  SetVirtualKeyboardShownInternal(value: boolean, ownerWindow: any): void;
  SetVirtualKeyboardVisible(ownerWindow: any): void;
  /**
   * @todo ownerWindow is r?.()
   */
  ShowVirtualKeyboard(ref: VKMRef_t, props: ActiveElementProps, ownerWindow: any, bIsModal: boolean): void;
}

export enum ESideMenu {
  None,
  Main,
  QuickAccess,
}

export enum EQuickAccessTab {
  Notifications,
  RemotePlayTogetherControls,
  VoiceChat,
  Friends,
  Settings,
  Perf,
  Help,
  Music,
  Decky = 999,
}

export interface MenuStore {
  OpenSideMenu(sideMenu: ESideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: EQuickAccessTab): void;
  OpenMainMenu(): void;
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
  /** The window's {@link Window}. */
  m_BrowserWindow: Window;

  /** Whether the BPM UI is initialized. */
  m_bIsGamepadApplicationUIInitialized: boolean;

  /** Current React route. */
  m_locationPathname: string;

  /**
   * The interface used depends on the {@link SteamWindowNavigator} type:
   *
   * `desktop` or `desktopoverlay` - {@link SteamWindowNavigator}
   *
   * `gamepad` - {@link SteamWindowNavigator_Gamepad}
   */
  m_Navigator: SteamWindowNavigator;

  /** The notifications' position & offset. */
  m_notificationPosition: SteamWindowNotificationPosition;

  m_params: Partial<SteamUIWindowParams>;

  m_VirtualKeyboardManager: VirtualKeyboardManager;

  get BrowserWindow(): Window;
  get MenuStore(): MenuStore;

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
  GetMainVROverlayKey: any;
  GetShowingGlobalModal: any;
  GetStoreBrowser: any;
  Init: any;
  InitFocusNavContext: any;
  InitGamepadApplicationUI: any;
  InitNavigation: any;
  InitializeDefaultActions: any;
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
  Navigate(path: string, t: boolean, n: boolean, o?: any): void;
  NavigateBack: any;
  NavigateHistory: any;
  NavigateToRunningApp: any;
  NavigateToStandaloneAppRunningControls: any;
  NavigateToSteamWeb: any;
  NavigateWithoutChangingFocus: any;
  OnApplicationUIInitComplete: any;
  OnHomeButtonPressed: any;
  OnQuickAccessButtonPressed: any;
  OnVirtualKeyboardShown: any;
  SetBrowserWindow: any;
  SetNavigator: any;
  SetNotificationPosition: any;
  SetShowingGlobalModal: any;
  SetStoreBrowserGlass: any;
}

export interface SteamUIStore {
  /**
   * @note If calling this to perform navigation, call it after {@link Navigate}
   * to prevent a race condition in desktop Big Picture mode that hides the
   * overlay unintentionally.
   */
  CloseSideMenus(): void;
  GetFocusedWindowInstance(): SteamUIWindow;
  NavigateToLayoutPreview(e: unknown, t: unknown): void;
  NavigateToRunningApp(e: boolean): void;
  OpenPowerMenu(e: unknown, t: unknown): void;
  WindowStore: {
    GamepadUIMainWindowInstance?: SteamUIWindow;
    MainWindowInstance: SteamUIWindow;
    OverlayWindows: SteamUIWindow[];
    SteamUIWindows: SteamUIWindow[];
  };
  get RunningApps(): SteamAppOverview[];
  get MainRunningApp(): SteamAppOverview | undefined;
}
