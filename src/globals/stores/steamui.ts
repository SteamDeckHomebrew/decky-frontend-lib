import type { CFocusNavigationContext } from '../managers';
import type { ESteamUISound, EUIMode } from '../shared';
import type { BrowserContext, CCallbackList, SubscribableValue, Unsubscribable } from '../shared/interfaces';
import type { ENavigationSourceType, NavigationSource } from '../shared/navigation';
import type { SteamAppOverview } from '../steam-client/App';
import type { ENotificationPosition } from '../steam-client/Overlay';
import type { EResult } from '../steam-client/shared';
import type { FocusChangeEvent } from '../steam-client/system/UI';
import type { EWindowType } from '../steam-client/UI';
import type { EShutdownStep } from '../steam-client/User';

declare class CGamepadUIAudioStore {
  m_AudioPlaybackManager: any;
  m_bCanPlaySound: boolean;
  m_currentlyFocusedAppid: SubscribableValue<number>;
  m_fnGetUIMode: () => EUIMode;
  /** setTimeout handle */
  m_pendingSoundHandle: number | null;
  m_pendingSoundType: ESteamUISound;

  OnFocusChangeEvent(ev: FocusChangeEvent): void;
  OnGamepadFocusChanged;
  OnUnhandledButtonDownEvent;
  PlayAudioURL(url: string): any;
  PlayNavSound(type: ESteamUISound, t: boolean): void;
  PlayNavSoundInternal(type: ESteamUISound): void;
  RegisterFocusNavContext(context: CFocusNavigationContext): Unsubscribable;

  get AudioPlaybackManager();
}

export type SteamWindowSettingsSection_t =
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
  Settings(section: SteamWindowSettingsSection_t): void;
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
  m_OnActiveElementChanged: CCallbackList<[VKMRef_t | null]>;
  m_OnActiveElementClicked: CCallbackList<[VKMRef_t | null]>;
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

enum ENavigationMode {
  Digital,
  Cursor,
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

interface CMenuStore {
  OpenSideMenu(sideMenu: ESideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: EQuickAccessTab): void;
  OpenMainMenu(): void;
}

interface CWindowStore {
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

// TODO: guessed from loc tokens, but this a lot looks like EResult's members
// except with different numbers
// TODO again: where is this used ?
enum ERefreshLoginReason {
  Success = 1,
  LoggedInElsewhere,
  SteamGuard,
  AccountDisabled,
  Offline,
  UnhandledMailTo,
  Success2,
}

export interface SteamUIStore {
  m_ConfiguratorWidth: any;
  m_GamepadNavigationManager: any;
  m_GamepadUIAudioStore: CGamepadUIAudioStore;
  m_LastLibraryTab: any;
  m_WindowStore: any;
  m_appDetailsDisplayMode: any;
  m_bConsoleEnabledByUser: boolean;
  m_bHomeAndQuickAccessButtonsEnabled: boolean;
  m_bIsDeckFactoryImage: boolean;
  m_bPreviouslyNavigatedToRunningApp: boolean;
  m_bShowingLockScreen: boolean;
  m_bStreamingRemotePlayTogether: boolean;
  m_eErrorCondition: number;
  m_eErrorConditionResult: EResult;
  m_mainInstanceUIMode: EUIMode;
  m_nResumeStreamingInputTimeoutHandle: number;
  m_navigationSource: NavigationSource;
  m_runningAppIDs: number[];
  m_shutdownState: {
    appid: number;
    bAllowForceQuit: boolean;
    bFailed: boolean;
    eShutdownState: EShutdownStep;
  };
  m_strStandaloneConfiguratorURL: string | null;
  m_streamingAppID: number;
  m_textFilterStore: CTextFilterStore;

  BCanNavigateToRunningApp(): boolean;
  BControllerIndexValid(index: number): boolean;
  BHomeAndQuickAccessButtonsEnabled(): boolean;

  /**
   * @returns `true` if any of the windows is focused.
   */
  BIsAnyWindowFocused(): boolean;

  BIsOverlayPath(path: string): boolean;

  /**
   * @returns `true` if Steam is shutting down.
   */
  BIsShuttingDown(): boolean;

  /**
   * @returns `true` if provided app ID is the game you're currently streaming.
   */
  BIsStreamingGame(appid: number): boolean;

  BIsStreamingRemotePlayTogether(): boolean;
  BIsStreamingRemotePlayTogetherGame(appid: number): boolean;
  BIsTransparentBackgroundPath(path: string): boolean;
  BIsVROverlayApp(overview: SteamAppOverview): boolean;

  /**
   * @returns `true` if provided app is available only for VR.
   */
  BIsVrOnlyGame(overview: SteamAppOverview): boolean;

  BRemotePlaySessionLocalClient(steam64Id: string): boolean;
  CancelRefreshLogin(): void;
  ClearSaleCache(): Promise<void>;
  ClearShutdownFailure(): void;

  /**
   * If calling this to perform navigation, call it after {@link Navigate} to
   * prevent a race condition in desktop BPM that hides the overlay
   * unintentionally.
   */
  CloseSideMenus(): void;

  DisableHomeAndQuickAccessButtons(): void;
  EnableHomeAndQuickAccessButtons(): void;
  ExcludedTitlesForPlatform(): number[];

  /**
   * @returns the currently focused window instance (for {@link Window} see {@link SteamUIWindow.BrowserWindow}).
   */
  GetFocusedWindowInstance(): SteamUIWindow;

  GetLastLibraryTab(): {
    collectionid: string;
    strActiveTab: string;
  };
  GetShowingLockScreen(): boolean;
  GetShutdownState(): {
    appid: number;
    bAllowForceQuit: boolean;
    bFailed: boolean;
    eShutdownState: EShutdownStep;
  };
  GetWindowForRunningAppNavigation(): SteamUIWindow;

  /**
   * Gets the overlay window instance for a provided PID.
   *
   * @param pid The "gameoverlayui" process PID.
   */
  GetWindowInstanceForPID(pid: number): SteamUIWindow | undefined;

  /**
   * @returns `true` if there is at least 1 Steam app running.
   */
  IsAnyAppRunning(): boolean;

  /**
   * @returns `true` if the Steam console is enabled.
   */
  IsConsoleEnabled(): boolean;

  IsDeckFactoryImage(): boolean;

  /**
   * @returns `true` if there is a desktop mode window open.
   */
  IsDesktopUIWindowActive(): boolean;

  /**
   * @returns `true` if there is a BPM window open.
   */
  IsGamepadUIWindowActive(): boolean;

  /**
   * Navigates to a provided React route.
   *
   * @param route React route to navigate to, e.g. `/library/app/440`.
   * @param matchRoute If `true`, router won't navigate to said route if it
   * doesn't look like one.
   * @param replaceHistoryEntry
   */
  Navigate(route: string, matchRoute?: boolean, replaceHistoryEntry?: boolean): void;

  /**
   * Shows the controller layout preview.
   */
  NavigateToLayoutPreview(appid: number, instance?: SteamUIWindow): void;

  NavigateToRunningApp(e: boolean): void;

  /**
   * Opens the "Power" menu.
   *
   * @param parent Menu parent element.
   * @param onCancel Function to call on pressing cancel.
   */
  OpenPowerMenu(parent: HTMLElement, onCancel: () => void): void;

  PreserveNavigation(): void;
  // empty lol
  ReopenPreModalSideMenu(): void;
  ResetErrorCondition(): void;
  RestoreNavigation(): void;
  ScopeRunningApps(): void;

  SetConfiguratorWidth(value: number): void;
  SetConsoleEnabled(): void;
  SetLastLibraryTab(activeTab: string, collectionId: string): Promise<void>;
  SetRefreshLogin(): void;
  SetRunningApp(appid: number): void;
  SetShowingLockScreen(value: boolean): void;
  SetStandaloneConfiguratorURL(value: string): void;

  get ActiveControllerIndex(): number;
  get ActiveNavigationInfo(): {
    eMode: ENavigationMode;
    eSourceType: ENavigationSourceType;
    nControllerIndex: number;
  };
  get ActiveNavigationMode(): ENavigationMode;
  get ActiveNavigationSourceType(): ENavigationSourceType;
  get ActiveWindowInstance(): SteamUIWindow;
  get BIsInOOBE(): boolean;
  get ConfiguratorWidth(): number;
  get ErrorCondition(): number;
  get ErrorConditionResult(): EResult;
  get ForceBetaSectionVisible(): boolean;
  get GamepadUIAudio(): CGamepadUIAudioStore;
  get MainInstanceUIMode(): EUIMode;
  get MainRunningApp(): SteamAppOverview | undefined;
  get MainRunningAppID(): number | undefined;
  get MostRecentlyActiveController(): any;
  get MostRecentlyActiveControllerIndex(): number;
  get NavigationManager(): CNavigationManager;
  get RemainInBigPictureModeOnClose(): boolean;
  get RunningApps(): SteamAppOverview[];
  get ShouldZoomStandaloneConfigurator(): boolean;
  get StandaloneConfiguratorURL(): string | null;
  get TextFilterStore(): CTextFilterStore;
  get WindowStore(): CWindowStore;
}
