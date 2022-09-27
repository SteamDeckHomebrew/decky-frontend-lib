import type {
  BrowserView,
  Controller,
  GameOSKSettings,
  GamepadUIAudio,
  NavigationManager,
  QuickAccessTab,
  RunningApp,
  SideMenu,
  VirtialKeyboardManager,
} from './core';

export interface NavigationStore {
  m_GameOSKSettings: GameOSKSettings;
  m_GamepadNavigationManager: NavigationManager;
  m_GamepadUIAudioStore: GamepadUIAudio;
  m_LastLibraryTab: {
    strActiveTab: string;
  };
  m_VirtualKeyboardManager: VirtialKeyboardManager;
  m_appDetailsDisplayMode: number;
  m_bConnectedToExternalDisplay: boolean;
  m_bHomeAndQuickAccessButtonsEnabled: boolean;
  m_bIsDeckFactoryImage: boolean;
  m_bPreviouslyIsRunningApp: boolean;
  m_bShowAdvancedOSBranches: boolean;
  m_bShowingGlobalModal: boolean;
  m_bShowingLockScreen: boolean;
  m_bStreamingRemotePlayTogether: boolean;
  m_bUserDevMode: boolean;
  m_currentBrowserAndBackstack: any;
  m_currentBrowserIsExternal: boolean;
  m_eErrorCondition: any;
  m_eErrorConditionResult: any;
  m_eOpenSideMenu: SideMenu;
  m_eQuickAccessTab: QuickAccessTab;
  m_flLastHomePressMS: number;
  m_flLastQuickAccessPressMS: number;
  m_flSystemAudioVolumeLevel: number;
  m_fnRootCancelHandler: any;
  m_iHideFooterCount: number;
  m_lastControllerConfigURL: undefined;
  m_lastSideMenuOnModalOpen: null;
  m_mainBrowser: BrowserView;
  m_mapAppWindows: {
    [key: string]: {
      appid: number;
      focusedWindowID: number;
      windowids: number[];
    };
  };
  m_nActiveModals: number;
  m_nResumeStreamingInputTimeoutHandle: number;
  m_nWindowHeight: number;
  m_nWindowWidth: number;
  m_navigationSource: {
    eActivationSourceType: number;
    nActiveGamepadIndex: number;
    nLastActiveGamepadIndex: number;
  };
  m_runningAppIDs: number[];
  m_shutdownState: { eShutdownState: number; appid: number };
  m_strWebURL: string | null;
  m_streamingAppID: number;
  ActiveControllerIndex: number;
  ActiveNavigationInfo: {
    eMode: number;
    eSourceType: number;
    nControllerIndex: number;
  };
  ActiveNavigationMode: number;
  ActiveNavigationSourceType: number;
  BIsInOOBE: boolean;
  BIsOverlayPath(): boolean;
  BIsShuttingDown(): boolean;
  BIsStreamingGame(appid?: number): boolean;
  BIsStreamingRemotePlayTogether(): boolean;
  BIsStreamingRemotePlayTogetherGame(appid?: any): boolean;
  BIsVrOnlyGame(appid?: number): boolean;
  BNumberArraysEqual(a1: number[], a2: number[]): boolean;
  BRemotePlaySessionLocalClient(e?: any): boolean;
  BShowFooter(): boolean;
  CloseSideMenus(): void;
  CreateBrowserView(name: string): BrowserView;
  DisableHomeAndQuickAccessButtons(): void;
  DoneHideFooter(): void;
  EnableHomeAndQuickAccessButtons(): void;
  ErrorCondition: any;
  ErrorConditionResult: any;
  GameOSKSettings: GameOSKSettings;
  GamepadUIAudio: GamepadUIAudio;
  GetAppFocusedWindowID(e?: any): number;
  GetAppWindowIDs(e?: any): number[];
  GetBackstackRootTest(): any;
  GetComputedDisplaySize(e?: any): number;
  GetCurrentBrowserAndBackstack(): {
    browser: BrowserView;
    bExternal: boolean;
  };
  GetCurrentBrowserAndBackstackI(): BrowserView;
  GetLastLibraryTab(): { strActiveTab: string };
  GetMainBrowser(): BrowserView;
  GetOpenSideMenu(): SideMenu;
  GetOpenedSteamURL(): string;
  GetQuickAccessTab(): QuickAccessTab;
  GetRootCancelHandler(): () => void;
  GetShowingGlobalModal(): boolean;
  GetShowingLockScreen(): boolean;
  GetShutdownState(): {
    eShutdownState: number;
    appid: number;
  };
  HandleAudioVolumeLevelUpdate(e?: any): any;
  HideFooter(): void;
  InitWithUser(): Promise<any>;
  IsBackstackRootTestEnabled(): boolean;
  IsDeckFactoryImage(): boolean;
  IsNewOverlapEnabled(): boolean;
  IsUsingExternalDisplay(): boolean;
  MainRunningApp: RunningApp | null;
  MainRunningAppWindowID: number;
  MainRunningAppWindowIDs: number[];
  MostRecentlyActiveController: Controller;
  MostRecentlyActiveControllerIndex: number;
  Navigate(path: string, replace?: boolean): void;
  NavigateBackOrOpenMenu(): void;
  NavigateToAccount(): void;
  NavigateToAppActions(e: boolean): void;
  NavigateToAppProperties(): void;
  NavigateToBugForum(): void;
  NavigateToChat(): void;
  NavigateToExternalWeb(url: string, replace?: boolean): void;
  NavigateToHelp(): void;
  NavigateToInvites(): void;
  NavigateToLayoutPreview(): void;
  NavigateToLibraryTab(tab?: number): void;
  NavigateToRunningApp(e?: boolean): void;
  NavigateToSettings(tab?: number): void;
  NavigateToSteamWeb(path: string, replace?: boolean): void;
  NavigateToStorage(): void;
  NavigateToStore(): void;
  NavigateToStoreApp(appid: number): void;
  NavigateToStoreFreeToPlay(): void;
  NavigateToStoreManual(): void;
  NavigateToStoreNewReleases(): void;
  NavigateToStoreOnSale(): void;
  NavigateToWebRoute(e: any, t: any, r?: any): void;
  NavigationManager: NavigationManager;
  OpenPowerMenu(): void;
  OpenQuickAccessMenu(tab?: QuickAccessTab): void;
  OpenSideMenu(menu?: SideMenu): void;
  RemotePlaySessionStarted(e: any, t: any, r: any): void;
  RemotePlaySessionStopped(e: any, t: any, r: any): void;
  RemotePlayTogetherClientStarted(e?: any): void;
  ReopenPreModalSideMenu(): void;
  ResetErrorCondition(): void;
  RestoreNavigation(): void;
  RunningApps: RunningApp[];
  SetFocusedAppWindowID(): void;
  SetGameOSKSettings(e: any): void;
  SetInitialRoute(route: string): void;
  SetLastLibraryTab(libraryTab: string, t?: any): void;
  SetMainBrowserGlass(e?: any): void;
  SetRootCancelOverride(e?: any): void;
  SetRunningApp(): void;
  SetRunningAppWindowIDs(): void;
  SetShowAdvancedOSBranches(e?: boolean): void;
  SetShowingGlobalModal(e?: boolean): void;
  SetShowingLockScreen(e?: boolean): void;
  SetSystemAudioVolumeLevel(): void;
  SetUserDevMode(e: boolean): void;
  SetWindowDimensions(): void;
  ShowAdvancedOSBranches: boolean;
  StreamingClientFinished(e?: any, t?: any): void;
  StreamingClientStarted(e?: any): void;
  StreamingLaunchComplete(e?: any, t?: any): void;
  SystemAudioVolumeLevel: number;
  ToggleSideMenu(menu: SideMenu): void;
  UserDevModeEnabled: boolean;
  VirtualKeyboardManager: VirtialKeyboardManager;
}
