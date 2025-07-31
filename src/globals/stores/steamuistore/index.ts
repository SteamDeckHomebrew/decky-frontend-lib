import type { EUIMode } from '../../shared';
import type { ENavigationSourceType, NavigationSource } from '../../shared/navigation';
import type { SteamAppOverview } from '../../steam-client/App';
import type { EResult } from '../../steam-client/shared';
import type { EShutdownStep } from '../../steam-client/User';
import type { CGamepadUIAudioStore } from './gamepaduiaudio';
import type { CWindowStore, SteamUIWindow } from './window';

enum ENavigationMode {
  Digital,
  Cursor,
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
   * @param onCancel Function to call on pressing "Cancel".
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
