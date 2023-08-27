declare global {
  var SteamClient: SteamClient;
}

export interface Apps {
  AddShortcut: any;
  AddUserTagToApps: any;
  BackupFilesForApp: any;
  BrowseScreenshotForApp: any;
  BrowseScreenshotsForApp: any;
  CancelBackup: any;
  CancelGameAction: any;
  CancelLaunch: any;
  ClearAndSetUserTagsOnApp: any;
  ClearCustomArtworkForApp: any;
  ClearCustomLogoPositionForApp: any;
  ClearProton: any;
  ClearUserTagsOnApps: any;
  ContinueGameAction: any;
  CreateDesktopShortcutForApp: any;
  DownloadWorkshopItem: any;
  GetAchievementsInTimeRange: any;
  GetActiveGameActions: any;
  GetAvailableCompatTools: any;
  GetBackupsInFolder: any;
  GetCachedAppDetails: any;
  GetCloudPendingRemoteOperations: any;
  GetConflictingFileTimestamps: any;
  GetDetailsForScreenshotUpload: any;
  GetDetailsForScreenshotUploads: any;
  GetDownloadedWorkshopItems: any;
  GetDurationControlInfo: any;
  GetFriendAchievementsForApp: any;
  GetFriendsWhoPlay: any;
  GetGameActionDetails: any;
  GetGameActionForApp: any;
  GetLaunchOptionsForApp: any;
  GetLibraryBootstrapData: any;
  GetMyAchievementsForApp: any;
  GetPlaytime: any;
  GetPrePurchasedApps: any;
  GetResolutionOverrideForApp: any;
  GetScreenshotInfo: any;
  GetScreenshotsInTimeRange: any;
  GetShortcutData: any;
  GetShortcutDataForPath: any;
  GetSoundtrackDetails: any;
  GetStoreTagLocalization: any;
  GetSubscribedWorkshopItems: any;
  InstallFlatpakAppAndCreateShortcut: any;
  JoinAppContentBeta: any;
  JoinAppContentBetaByPassword: any;
  ListFlatpakApps: any;
  LoadEula: any;
  MarkEulaAccepted: any;
  MarkEulaRejected: any;
  OpenAppSettingsDialog: any;
  RaiseWindowForGame: any;
  RegisterForAchievementChanges: any;
  RegisterForAppBackupStatus: any;
  RegisterForAppDetails: any;
  RegisterForAppOverviewChanges: any;
  RegisterForDRMFailureResponse: any;
  RegisterForGameActionEnd: any;
  RegisterForGameActionShowError: any;
  RegisterForGameActionShowUI: any;
  RegisterForGameActionStart: any;
  RegisterForGameActionTaskChange: any;
  RegisterForGameActionUserRequest: any;
  RegisterForLocalizationChanges: any;
  RegisterForPrePurchasedAppChanges: any;
  RegisterForShowMarketingMessageDialog: any;
  RegisterForWorkshopChanges: any;
  RegisterForWorkshopItemDownloads: any;
  RemoveShortcut: any;
  RemoveUserTagFromApps: any;
  ReportLibraryAssetCacheMiss: any;
  ReportMarketingMessageDialogShown: any;
  RequestIconDataForApp: any;
  RequestLegacyCDKeysForApp: any;
  ResetHiddenState: any;
  RunGame: any;
  SaveAchievementProgressCache: any;
  ScanForInstalledNonSteamApps: any;
  SetAppAutoUpdateBehavior: any;
  SetAppBackgroundDownloadsBehavior: any;
  SetAppCurrentLanguage: any;
  SetAppHidden: any;
  SetAppLaunchOptions: any;
  SetAppResolutionOverride: any;
  SetCachedAppDetails: any;
  SetControllerRumblePreference: any;
  SetCustomArtworkForApp: any;
  SetCustomLogoPositionForApp: any;
  SetDLCEnabled: any;
  SetLocalScreenshotCaption: any;
  SetLocalScreenshotPrivacy: any;
  SetLocalScreenshotSpoiler: any;
  SetShortcutExe: any;
  SetShortcutIcon: any;
  SetShortcutIsVR: any;
  SetShortcutLaunchOptions: any;
  SetShortcutName: any;
  SetShortcutStartDir: any;
  SetStreamingClientForApp: any;
  SetThirdPartyControllerConfiguration: any;
  ShowControllerConfigurator: any;
  ShowStore: any;
  SpecifyCompatTool: any;
  StreamGame: any;
  SubscribeWorkshopItem: any;
  TerminateApp: any;
  ToggleAllowDesktopConfiguration: any;
  ToggleAppFamilyBlockedState: any;
  ToggleAppSteamCloudEnabled: any;
  ToggleAppSteamCloudSyncOnSuspendEnabled: any;
  ToggleEnableDesktopTheatreForApp: any;
  ToggleEnableSteamOverlayForApp: any;
  ToggleOverrideResolutionForInternalDisplay: any;
  UninstallFlatpakApp: any;
  VerifyApp: any;
}

export interface Auth {
  GetLocalHostname: any;
  GetMachineID: any;
  GetRefreshInfo: any;
  GetSteamGuardData: any;
  IsSecureComputer: any;
  SetLoginToken: any;
  SetSteamGuardData: any;
  StartSignInFromCache: any;
}

export interface Broadcast {
  ApproveViewerRequest: any;
  InviteToWatch: any;
  RegisterForBroadcastStatus: any;
  RegisterForViewerRequests: any;
  RejectViewerRequest: any;
  StopBroadcasting: any;
}

export interface Browser {
  BIsDirectHWNDBrowser: any;
  BIsPopupWindow: any;
  BIsVROverlayBrowser: any;
  ClearAllBrowsingData: any;
  ClearHistory: any;
  CloseDevTools: any;
  GetBrowserID: any;
  GetSteamBrowserID: any;
  GoBack: any;
  GoForward: any;
  HideCursorUntilMouseEvent: any;
  InspectElement: any;
  NotifyUserActivation: any;
  OpenDevTools: any;
  OpenURLForNavigation: any;
  RegisterForGestureEvents: any;
  RegisterForOpenNewTab: any;
  SetShouldExitSteamOnBrowserClosed: any;
  SetTouchGesturesToCancel: any;
  StartDownload: any;
}

export interface BrowserView {
  Create: any;
  CreatePopup: any;
  Destroy: any;
  PostMessageToParent: any;
}

export interface ClientNotifications {
  DisplayClientNotification: any;
  OnRespondToClientNotification: any;
}

export interface Cloud {
  ResolveAppSyncConflict: any;
  RetryAppSync: any;
}

export interface CommunityItems {
  DownloadItemAsset: any;
  GetItemAssetPath: any;
  RemoveDownloadedItemAsset: any;
}

export interface Console {
  ExecCommand: any;
  GetAutocompleteSuggestions: any;
  RegisterForSpewOutput: any;
}

export interface Customization {
  GenerateLocalStartupMoviesThumbnails: any;
  GetDownloadedStartupMovies: any;
  GetLocalStartupMovies: any;
}

export interface Downloads {
  EnableAllDownloads: any;
  MoveAppUpdateDown:  any;
  MoveAppUpdateUp: any;
  PauseAppUpdate: any;
  QueueAppUpdate: any;
  RegisterForDownloadItems: any;
  RegisterForDownloadOverview: any;
  RemoveFromDownloadList: any;
  ResumeAppUpdate: any;
  SetLaunchOnUpdateComplete: any;
  SetQueueIndex: any;
  SuspendDownloadThrottling: any;
  SuspendLanPeerContent: any;
}

export interface FamilySharing {
  AuthorizeLocalDevice: any;
  DeauthorizeLocalDevice: any;
  RequestFamilySharingAuthorization: any;
  UpdateAuthorizedBorrower: any;
}

export interface Features {
  SteamInitsPopups: any;
}

export interface FriendSettings {
  GetEnabledFeatures: any;
  RegisterForSettingsChanged: any;
  SetFriendSettings: any;
}

export interface Friends {
  AddFriend: any;
  GetCoplayData: any;
  InviteUserToCurrentGame: any;
  InviteUserToGame: any;
  InviteUserToLobby: any;
  InviteUserToRemotePlayTogetherCurrentGame: any;
  RegisterForVoiceChatStatus: any;
  RemoveFriend: any;
}

export interface GameNotes {
  DeleteImage: any;
  DeleteNotes: any;
  GetNotes: any;
  GetNotesMetadata: any;
  GetNumNotes: any;
  GetQuota: any;
  IterateNotes: any;
  ResolveSyncConflicts: any;
  SaveNotes: any;
  SyncToClient: any;
  SyncToServer: any;
  UploadImage: any;
}

export interface GameSessions {
  RegisterForAchievementNotification: any;
  RegisterForAppLifetimeNotifications: any;
  RegisterForScreenshotNotification: any;
}

export interface Input {
  BIsSteamController: any;
  BSupportsControllerLEDColor: any;
  CalibrateControllerIMU: any;
  CalibrateControllerJoystick: any;
  CalibrateControllerTrackpads: any;
  CancelGyroSWCalibration: any;
  ClearSelectedConfigForApp: any;
  CloseDesktopConfigurator: any;
  ControllerKeyboardSendText: any;
  ControllerKeyboardSetKeyState: any;
  DeauthorizeControllerAccount: any;
  DecrementCloudedControllerConfigsCounter: any;
  DeletePersonalControllerConfiguration: any;
  DuplicateControllerConfigurationSourceMode: any;
  EndControllerDeviceSupportFlow: any;
  ExportCurrentControllerConfiguration: any;
  ForceConfiguratorFocus: any;
  ForceSimpleHapticEvent: any;
  FreeControllerConfig: any;
  GetConfigForAppAndController: any;
  GetControllerMappingString: any;
  GetSteamControllerDongleState: any;
  GetTouchMenuIconsForApp: any;
  GetXboxDriverInstallState: any;
  IdentifyController: any;
  InitControllerSounds: any;
  InitializeControllerPersonalizationSettings: any;
  ModalKeyboardDismissed: any;
  OpenDesktopConfigurator: any;
  PreviewConfiguForAppAndController: any;
  PreviewControllerLEDColor: any;
  QueryControllerConfigsForApp: any;
  RegisterForActiveControllerChanges: any;
  RegisterForConfigSelectionChanges: any;
  RegisterForControllerAccountChanges: any;
  RegisterForControllerAnalogInputMessages: any;
  RegisterForControllerCommandMessages: any;
  RegisterForControllerConfigCloudStateChanges: any;
  RegisterForControllerConfigInfoMessages: any;
  RegisterForControllerInputMessages: any;
  RegisterForControllerListChanges: any;
  RegisterForControllerStateChanges: any;
  RegisterForGameKeyboardMessages: any;
  RegisterForRemotePlayConfigChanges: any;
  RegisterForShowControllerLayoutPreviewMessages: any;
  RegisterForTouchMenuInputMessages: any;
  RegisterForTouchMenuMessages: any;
  RegisterForUIVisualization: any;
  RegisterForUnboundControllerListChanges: any;
  RegisterForUserDismissKeyboardMessages: any;
  RegisterForUserKeyboardMessages: any;
  RequestGyroActive: any;
  RequestRemotePlayControllerConfigs: any;
  ResetControllerBindings: any;
  ResolveCloudedControllerConfigConflict: any;
  RestoreControllerPersonalizationSettings: any;
  SaveControllerCalibration: any;
  SaveControllerPersonalizationSettings: any;
  SaveControllerSounds: any;
  SaveEditingControllerConfiguration: any;
  SetActiveControllerAccount: any;
  SetControllerConfigurationModeShiftBinding: any;
  SetControllerHapticSetting: any;
  SetControllerMappingString: any;
  SetControllerNintendoLayoutSetting: any;
  SetControllerPersonalizationName: any;
  SetControllerPersonalizationSetting: any;
  SetControllerPersonalizationSettingFloat: any;
  SetControllerRumbleSetting: any;
  SetCursorActionset: any;
  SetEditingControllerConfigurationActionSet: any;
  SetEditingControllerConfigurationInputActivator: any;
  SetEditingControllerConfigurationInputActivatorEnabled: any;
  SetEditingControllerConfigurationInputBinding: any;
  SetEditingControllerConfigurationMiscSetting: any;
  SetEditingControllerConfigurationSourceMode: any;
  SetGamepadKeyboardText: any;
  SetKeyboardActionset: any;
  SetMousePosition: any;
  SetSelectedConfigForApp: any;
  SetSteamControllerDonglePairingMode: any;
  SetVirtualMenuKeySelected: any;
  SetWebBrowserActionset: any;
  SetXboxDriverInstallState: any;
  ShowControllerSettings: any;
  StandaloneKeyboardDismissed: any;
  StartControllerDeviceSupportFlow: any;
  StartEditingControllerConfigurationForAppIDAndControllerIndex: any;
  StartGyroSWCalibration: any;
  StopEditingControllerConfiguration: any;
  SwapControllerModeInputBindings: any;
  SwapControllerOrder: any;
  SyncCloudedControllerConfigs: any;
  TriggerHapticPulse: any;
  TriggerSimpleHapticEvent: any;
  UnregisterForControllerStateChanges: any;
  UnregisterForUIVisualization: any;
  UploadChangesForCloudedControllerConfigs: any;
}

export interface InstallFolder {
  AddInstallFolder: any;
  BrowseFilesInFolder: any;
  CancelMove: any;
  GetInstallFolders: any;
  GetPotentialFolders: any;
  MoveInstallFolderForApp: any;
  RefreshFolders: any;
  RegisterForInstallFolderChanges: any;
  RegisterForMoveContentProgress: any;
  RegisterForRepairFolderFinished: any;
  RemoveInstallFolder: any;
  RepairInstallFolder: any;
  SetDefaultInstallFolder: any;
  SetFolderLabel: any;
}

export interface Installs {
  CancelInstall: any;
  ContinueInstall: any;
  GetInstallManagerInfo: any;
  OpenInstallBackup: any;
  OpenInstallWizard: any;
  OpenUninstallWizard: any;
  RegisterForShowConfirmUninstall: any;
  RegisterForShowFailedUninstall: any;
  RegisterForShowInstallWizard: any;
  RegisterForShowRegisterCDKey: any;
  SetAppList: any;
  SetCreateShortcuts: any;
  SetInstallFolder: any;
}

export interface Messaging {
  RegisterForMessages: any;
  PostMessage: any;
}

export interface Music {
  DecreaseVolume: any;
  IncreaseVolume: any;
  PlayEntry: any;
  PlayNext: any;
  PlayPrevious: any;
  RegisterForMusicPlaybackChanges: any;
  RegisterForMusicPlaybackPosition: any;
  SetPlaybackPosition: any;
  SetPlayingRepeatStatus: any;
  SetPlayingShuffled: any;
  SetVolume: any;
  ToggleMuteVolume: any;
  TogglePlayPause: any;
}

export interface Notifications {
  RegisterForNotifications: any;
}

export interface VRDevice {
  BIsConnected: any;
  RegisterForDeviceConnectivityChange: any;
}

export interface DeviceProperties {
  GetBoolDeviceProperty: any;
  GetDoubleDeviceProperty: any;
  GetFloatDeviceProperty: any;
  GetInt32DeviceProperty: any;
  GetStringDeviceProperty: any;
  RegisterForDevicePropertyChange: any;
}

export interface Keyboard {
  SendText: any;
}

export interface VROverlay {
  ShowDashboard: any;
}

export interface OpenVR {
  Device: VRDevice;
  DeviceProperties: DeviceProperties;
  GetWebSecret: any;
  HideKeyboard: any;
  InstallVR: any;
  Keyboard: Keyboard;
  QuitAllVR: any;
  RegisterForInstallDialog: any;
  RegisterStartupErrors: any;
  RegisterForVRHardwareDetected: any;
  RegisterForVRModeChange: any;
  SendKeyboardDone: any;
  SetOverlayInteractionAffordance: any;
  ShowKeyboard: any;
  StartVR: any;
  TriggerOverlayHapticEffect: any;
  VROverlay: VROverlay;
}

export interface Overlay {
  DestroyGamePadUIDesktopConfiguratorWindow: any;
  GetOverlayBrowserInfo: any;
  HandleGameWebCallback: any;
  HandleProtocolForOverlayBrowser: any;
  RegisterForActiveOverlayRequests: any;
  RegisterForMicroTxnAuth: any;
  RegisterForMicroTxnAuthDismiss: any;
  RegisterForNotificationPositionChanged: any;
  RegisterForOverlayActivated: any;
  RegisterForOverlayBrowserProtocols: any;
  RegisterOverlayBrowserInfoChanged: any;
  SetOverlayState: any;
}

export interface Parental {
  LockParentalLock: any;
  RegisterForParentalLockStatus: any;
  UnlockParentalLock: any;
}

export interface RemotePlay {
  BCanAcceptInviteForGame: any;
  BCanCreateInviteForGame: any;
  BCanHostIsolatedGameAudio: any;
  BEnabled: any;
  BRemotePlayTogetherGuestOnPhoneOrTablet: any;
  BRemotePlayTogetherGuestSupported: any;
  CancelInviteAndSession: any;
  CancelInviteAndSessionWithGuestID: any;
  CloseGroup: any;
  CreateGroup: any;
  CreateInviteAndSession: any;
  CreateInviteAndSessionWithGuestID: any;
  GetClientStreamingBitrate: any;
  GetClientStreamingQuality: any;
  GetControllerType: any;
  GetGameSystemVolume: any;
  GetPerUserInputSettings: any;
  GetPerUserInputSettingsWithGuestID: any;
  IdentifyController: any;
  InstallAudioDriver: any;
  InstallInputDriver: any;
  MoveControllerToSlot: any;
  RegisterForAudioDriverPrompt: any;
  RegisterForBitrateOverride: any;
  RegisterForControllerIndexSet: any;
  RegisterForDevicesChanges: any;
  RegisterForGroupCreated: any;
  RegisterForGroupDisbanded: any;
  RegisterForInputDriverPrompt: any;
  RegisterForInputDriverRestartNotice: any;
  RegisterForInputUsed: any;
  RegisterForInviteResult: any;
  RegisterForNetworkUtilizationUpdate: any;
  RegisterForPlaceholderStateChanged: any;
  RegisterForPlayerInputSettingsChanged: any;
  RegisterForQualityOverride: any;
  RegisterForRemoteClientLaunchFailed: any;
  RegisterForRemoteClientStarted: any;
  RegisterForRemoteClientStopped: any;
  RegisterForSettingsChanges: any;
  SetClientStreamingBitrate: any;
  SetClientStreamingQuality: any;
  SetGameSystemVolume: any;
  SetPerUserControllerInputEnabled: any;
  SetPerUserControllerInputEnabledWithGuestID: any;
  SetPerUserKeyboardInputEnabled: any;
  SetPerUserKeyboardInputEnabledWithGuestID: any;
  SetPerUserMouseInputEnabled: any;
  SetPerUserMouseInputEnabledWithGuestID: any;
  SetRemoteDeviceAuthorized: any;
  SetRemoteDevicePIN: any;
  SetRemotePlayEnabled: any;
  SetStreamingClientConfig: any;
  SetStreamingClientConfigEnabled: any;
  SetStreamingDesktopToRemotePlayTogetherEnabled: any;
  SetStreamingP2PScope: any;
  SetStreamingServerConfig: any;
  SetStreamingServerConfigEnabled: any;
  StopStreamingClient: any;
  StopStreamingSession: any;
  StopStreamingSessionAndSuspendDevice: any;
  UnlockH264: any;
  UnpairRemoteDevices: any;
}

export interface Screenshots {
  DeleteLocalScreenshot: any;
  GetAllAppsLocalScreenshots: any;
  GetAllAppsLocalScreenshotsCount: any;
  GetAllAppsLocalScreenshotsRange: any;
  GetAllLocalScreenshots: any;
  GetGameWithLocalScreenshots: any;
  GetLastScreenshotTaken: any;
  GetLocalScreenshot: any;
  GetLocalScreenshotCount: any;
  GetNumGamesWithLocalScreenshots: any;
  ShowScreenshotInSystemViewer: any;
  ShowScreenshotOnDisk: any;
  UploadLocalScreenshot: any;
}

export interface ServerBrowser {
  AddFavoriteServer: any;
  AddFavoriteServersByIP: any;
  CancelServerQuery: any;
  ConnectToServer: any;
  CreateFriendGameInfoDialog: any;
  CreateServerGameInfoDialog: any;
  DestroyGameInfoDialog: any;
  DestroyServerListRequest: any;
  GetMultiplayerGames: any;
  GetServerListPreferences: any;
  PingServer: any;
  RegisterForFavorites: any;
  RegisterForFriendGamePlayed: any;
  RegisterForGameInfoDialogs: any;
  RegisterForPlayerDetails: any;
  RegisterForServerInfo: any;
  RemoveFavoriteServer: any;
  RemoveHistoryServer: any;
  RequestPlayerDetails: any;
  SetServerListPreferences: any;
}

export interface Settings {
  AddClientBeta: any;
  ClearAllHTTPCaches: any;
  ClearDownloadCache: any;
  GetAccountSettings: any;
  GetAppUsesP2PVoice: any;
  GetAvailableLanguages: any;
  GetAvailableTimeZones: any;
  GetCurrentLanguage: any;
  GetGlobalCompatTools: any;
  GetMonitorInfo: any;
  GetOOBETestMode: any;
  GetRegisteredSteamDeck: any;
  GetTimeZone: any;
  GetWindowed: any;
  IgnoreSteamDeckRewards: any;
  OpenWindowsMicSettings: any;
  RegisterForMicVolumeUpdates: any;
  RegisterForSettingsArrayChanges: any;
  RegisterForSettingsChanges: any;
  RegisterForTimeZoneChange: any;
  ReinitMicSettings: any;
  RequestDeviceAuthInfo: any;
  SelectClientBeta: any;
  SetCefRemoteDebuggingEnabled: any;
  SetCurrentLanguage: any;
  SetEnableSoftProcessKill: any;
  SetEnableTestUpdaters: any;
  SetForceOOBE: any;
  SetHostname: any;
  SetMicTestMode: any;
  SetOOBETestMode: any;
  SetOverrideBrowserComposerMode: any;
  SetPreferredMonitor: any;
  SetRegisteredSteamDeck: any;
  SetSaveAccountCredentials: any;
  SetSetting: any;
  SetShowMobxDevTools: any;
  SetSteamPlayEnabled: any;
  SetTimeZone: any;
  SetUseNintendoButtonLayout: any;
  SetWindowed: any;
  SpecifyGlobalCompatTool: any;
  ToggleSteamInstall: any;
}

export interface SharedConnection {
  AllocateSharedConnection: any;
  Close: any;
  RegisterOnBinaryMessageReceived: any;
  RegisterOnLogonInfoChanged: any;
  RegisterOnMessageReceived: any;
  SendMsg: any;
  SendMsgAndAwaitBinaryResponse: any;
  SubscribeToClientServiceMethod: any;
  SubscribeToEMsg: any;
}

export interface Stats {
  RecordActivationEvent: any;
  RecordDisplayEvent: any;
}

export interface SteamChina {
  GetCustomLauncherAppID: any;
}

export interface Storage {
  DeleteKey: any;
  GetJSON: any;
  GetString: any;
  SetObject: any;
  SetString: any;
}

export interface Streaming {
  AcceptStreamingEULA: any;
  CancelStreamGame: any;
  RegisterForStreamingClientFinished: any;
  RegisterForStreamingClientLaunchProgress: any;
  RegisterForStreamingClientStarted: any;
  RegisterForStreamingLaunchComplete: any;
  RegisterForStreamingShowEula: any;
  RegisterForStreamingShowIntro: any;
  RegisterForStreamingShowLaunchOptions: any;
  StreamingContinueStreamGame: any;
  StreamingSetLaunchOption: any;
}

export interface Audio {
  ClearDefaultDeviceOverride: any;
  GetApps: any;
  GetDevices: any;
  RegisterForAppAdded: any;
  RegisterForAppRemoved: any;
  RegisterForAppVolumeChanged: any;
  RegisterForDeviceAdded: any;
  RegisterForDeviceRemoved: any;
  RegisterForDeviceVolumeChanged: any;
  RegisterForServiceConnectionStateChanges: any;
  RegisterForVolumeButtonPressed: any;
  SetAppVolume: any;
  SetDefaultDeviceOverride: any;
  SetDeviceVolume: any;
}

export interface Devkit {
  DeveloperModeChanged: any;
  RegisterForPairingPrompt: any;
  RespondToPairingPrompt: any;
  SetPairing: any;
}

export interface Display {
  EnableUnderscan: any;
  RegisterForBrightnessChanges: any;
  SetBrightness: any;
  SetUnderscanLevel: any;
}

export interface WirelessNetwork {
  Forget: any;
  SetAutoconnect: any;
}

export interface NetworkDevice {
  Connect: any;
  Disconnect: any;
  WirelessNetwork: WirelessNetwork;
}

export interface Network {
  Device: NetworkDevice;
  ForceRefresh: any;
  ForceTestConnectivity: any;
  GetProxyInfo: any;
  RegisterForAppSummaryUpdate: any;
  RegisterForConnectionStateUpdate: any;
  RegisterForConnectivityTestChanges: any;
  RegisterForDeviceChanges: any;
  SetFakeLocalSystemState: any;
  SetProxyInfo: any;
  SetWifiEnabled: any;
  StartScanningForNetworks: any;
  StopScanningForNetworks: any;
}

export interface Report {
  GenerateSystemReport: any;
  Submit: any;
}

export interface BlockDevice {
  Format: any;
  Unmount: any;
}

export interface Drive {
  Eject: any;
}

export interface SystemStorage {
  BlockDevice: BlockDevice;
  Drive: Drive;
  RegisterForStateChanges: any;
  TrimAll: any;
}

export interface SystemUI {
  CloseGameWindow: any;
  GetGameWindowsInfo: any;
  RegisterForFocusChangeEvents: any;
  RegisterForOverlayGameWindowFocusChanged: any;
  RegisterForSystemKeyEvents: any;
}

export interface System {
  Audio: Audio;
  Devkit: Devkit;
  Display: Display;
  ExitFakeCaptivePortal: any;
  FactoryReset: any;
  FormatStorage: any;
  GetLegacyAmpControlEnabled: any;
  GetOSType: any;
  GetSystemInfo: any;
  IsDeckFactoryImage: any;
  Network: Network;
  NotifyGameOverlayStateChanged: any;
  OpenFileDialog: any;
  OpenLocalDirectoryInSystemExplorer: any;
  RebootToAlternateSystemPartition: any;
  RebootToFactoryTestImage: any;
  RegisterForAirplaneModeChanges: any;
  RegisterForBatteryStateChanges: any;
  RegisterForFormatStorageProgress: any;
  RegisterForOnResumeFromSuspend: any;
  RegisterForOnSuspendRequest: any;
  RegisterForSettingsChanges: any;
  Report: Report;
  RestartPC: any;
  SetAirplaneMode: any;
  SetLegacyAmpControl: any;
  ShutdownPC: any;
  SteamRuntimeSystemInfo: any;
  Storage: SystemStorage;
  SuspendPC: any;
  SwitchToDesktop: any;
  UI: SystemUI;
  UpdateSettings: any;
}

export interface UI {
  EnsureMainWindowCreated: any;
  ExitBigPictureMode: any;
  GetDesiredSteamUIWindows: any;
  GetOSEndOfLifeInfo: any;
  GetUIMode: any;
  NotifyAppInitialized: any;
  RegisterDesiredSteamUIWindowsChanged: any;
  RegisterForKioskModeResetSignal: any;
  RegisterForUIModeChanged: any;
  ResetErrorCondition: any;
  SetUIMode: any;
}

export interface URL {
  ExecuteSteamURL: any;
  GetSteamURLList: any;
  GetWebSessionID: any;
  RegisterForRunSteamURL: any;
  RegisterForSteamURLChanges: any;
}

export interface Updates {
  ApplyUpdates: any;
  CheckForUpdates: any;
  GetCurrentOSBranch: any;
  RegisterForUpdateStateChanges: any;
  SelectOSBranch: any;
}

export interface User {
  AuthorizeMicrotxn: any;
  CancelLogin: any;
  CancelMicrotxn: any;
  CancelShutdown: any;
  ChangeUser: any;
  Connect: any;
  FlipToLogin: any;
  ForceShutdown: any;
  ForgetPassword: any;
  GetIPCountry: any;
  GetLoginProgress: any;
  GetLoginUsers: any;
  GoOffline: any;
  GoOnline: any;
  OptOutOfSurvey: any;
  PrepareForSystemSuspend: any;
  Reconnect: any;
  RegisterForConnectionAttemptsThrottled: any;
  RegisterForCurrentUserChanges: any;
  RegisterForLoginStateChange: any;
  RegisterForPrepareForSystemSuspendProgress: any;
  RegisterForResumeSuspendedGamesProgress: any;
  RegisterForShutdownDone: any;
  RegisterForShutdownFailed: any;
  RegisterForShutdownStart: any;
  RegisterForShutdownState: any;
  RemoveUser: any;
  RequestSupportSystemReport: any;
  ResumeSuspendedGames: any;
  RunSurvey: any;
  SendSurvey: any;
  SetAsyncNotificationEnabled: any;
  SetLoginCredentials: any;
  SetOOBEComplete: any;
  ShouldShowUserChooser: any;
  SignOutAndRestart: any;
  StartLogin: any;
  StartOffline: any;
  StartRestart: any;
  StartShutdown: any;
}

export interface WebChat {
  BSuppressPopupsInRestore: any;
  GetCurrentUserAccountID: any;
  GetLocalAvatarBase64: any;
  GetLocalPersonaName: any;
  GetOverlayChatBrowserInfo: any;
  GetPrivateConnectString: any;
  GetPushToTalkEnabled: any;
  GetSignIntoFriendsOnStart: any;
  GetUIMode: any;
  GetWebChatLanguage: any;
  OnGroupChatUserStateChange: any;
  OpenURLInClient: any;
  RegisterForComputerActiveStateChange: any;
  RegisterForFriendPostMessage: any;
  RegisterForMouseXButtonDown: any;
  RegisterForPushToTalkStateChange: any;
  RegisterForUIModeChange: any;
  RegisterForVRModeChange: any;
  RegisterOverlayChatBrowserInfoChanged: any;
  SetActiveClanChatIDs: any;
  SetNumChatsWithUnreadPriorityMessages: any;
  SetPersonaName: any;
  SetPushToMuteEnabled: any;
  SetPushToTalkEnabled: any;
  SetPushToTalkHotKey: any;
  SetPushToTalkMouseButton: any;
  SetVoiceChatActive: any;
  SetVoiceChatStatus: any;
  ShowChatRoomGroupDialog: any;
  ShowFriendChatDialog: any;
  UnregisterForMouseXButtonDown: any;
}

export interface WebUITransport {
  GetTransportInfo: any;
}

export interface Window {
  BringToFront: any;
  Close: any;
  DefaultMonitorHasFullscreenWindow: any;
  FlashWindow: any;
  GamescopeBlur: any;
  GetDefaultMonitorDimensions: any;
  GetMousePositionDetails: any;
  GetWindowDimensions: any;
  GetWindowRestoreDetails: any;
  HideWindow: any;
  IsWindowMaximized: any;
  IsWindowMinimized: any;
  MarkLastFocused: any;
  Minimize: any;
  MoveTo: any;
  MoveToLocation: any;
  PositionWindowRelative: any;
  ProcessShuttingDown: any;
  ResizeTo: any;
  RestoreWindowSizeAndPosition: any;
  SetAutoDisplayScale: any;
  SetComposition: any;
  SetHideOnClose: any;
  SetKeyFocus: any;
  SetManualDisplayScaleFactor: any;
  SetMaxSize: any;
  SetMinSize: any;
  SetModal: any;
  SetResizeGrip: any;
  SetWindowIcon: any;
  ShowWindow: any;
  StopFlashWindow: any;
  ToggleFullscreen: any;
  ToggleMaximize: any;
}

export interface SteamClient {
  Apps: Apps;
  Auth: Auth;
  Broadcast: Broadcast;
  Browser: Browser;
  BrowserView: BrowserView;
  ClientNotifications: ClientNotifications;
  Cloud: Cloud;
  CommunityItems: CommunityItems;
  Console: Console;
  Customization: Customization;
  Downloads: Downloads;
  FamilySharing: FamilySharing;
  Features: Features;
  FriendSettings: FriendSettings;
  Friends: Friends;
  GameNotes: GameNotes;
  GameSessions: GameSessions;
  Input: Input;
  InstallFolder: InstallFolder;
  Installs: Installs;
  MachineStorage: Storage;
  Messaging: Messaging;
  Music: Music;
  Notifications: Notifications;
  OpenVR: OpenVR;
  Overlay: Overlay;
  Parental: Parental;
  RegisterIFrameNavigatedCallback: any;
  RemotePlay: RemotePlay;
  RoamingStorage: Storage;
  Screenshots: Screenshots;
  ServerBrowser: ServerBrowser;
  Settings: Settings;
  SharedConnection: SharedConnection;
  Stats: Stats;
  SteamChina: SteamChina;
  Storage: Storage;
  Streaming: Streaming;
  System: System;
  UI: UI;
  URL: URL;
  Updates: Updates;
  User: User;
  WebChat: WebChat;
  WebUITransport: WebUITransport;
  Window: Window;
}

export interface SteamShortcut {
  appid: number;
  data: {
    bIsApplication: boolean;
    strAppName: string;
    strExePath: string;
    strArguments: string;
    strShortcutPath: string;
    strSortAs: string;
  };
}

/**
 * @prop unAppID is not properly set by Steam for non-steam game shortcuts, so it defaults to 0 for them
 */
export interface LifetimeNotification {
  unAppID: number;
  nInstanceID: number;
  bRunning: boolean;
}

export type AppAchievements = {
  nAchieved: number;
  nTotal: number;
  vecAchievedHidden: any[];
  vecHighlight: any[];
  vecUnachieved: any[];
};

export type AppLanguages = {
  strDisplayName: string;
  strShortName: string;
};

export type LogoPinPositions = 'BottomLeft' | 'UpperLeft' | 'CenterCenter' | 'UpperCenter' | 'BottomCenter';

export interface LogoPosition {
  pinnedPosition: LogoPinPositions;
  nWidthPct: number;
  nHeightPct: number;
}

export interface AppDetails {
  achievements: AppAchievements;
  bCanMoveInstallFolder: boolean;
  bCloudAvailable: boolean;
  bCloudEnabledForAccount: boolean;
  bCloudEnabledForApp: boolean;
  bCloudSyncOnSuspendAvailable: boolean;
  bCloudSyncOnSuspendEnabled: boolean;
  bCommunityMarketPresence: boolean;
  bEnableAllowDesktopConfiguration: boolean;
  bFreeRemovableLicense: boolean;
  bHasAllLegacyCDKeys: boolean;
  bHasAnyLocalContent: boolean;
  bHasLockedPrivateBetas: boolean;
  bIsExcludedFromSharing: boolean;
  bIsSubscribedTo: boolean;
  bOverlayEnabled: boolean;
  bOverrideInternalResolution: boolean;
  bRequiresLegacyCDKey: boolean;
  bShortcutIsVR: boolean;
  bShowCDKeyInMenus: boolean;
  bShowControllerConfig: boolean;
  bSupportsCDKeyCopyToClipboard: boolean;
  bVRGameTheatreEnabled: boolean;
  bWorkshopVisible: boolean;
  eAppOwnershipFlags: number;
  eAutoUpdateValue: number;
  eBackgroundDownloads: number;
  eCloudSync: number;
  eControllerRumblePreference: number;
  eDisplayStatus: number;
  eEnableThirdPartyControllerConfiguration: number;
  eSteamInputControllerMask: number;
  iInstallFolder: number;
  lDiskUsageBytes: number;
  lDlcUsageBytes: number;
  nBuildID: number;
  nCompatToolPriority: number;
  nPlaytimeForever: number;
  nScreenshots: number;
  rtLastTimePlayed: number;
  rtLastUpdated: number;
  rtPurchased: number;
  selectedLanguage: {
    strDisplayName: string;
    strShortName: string;
  };
  strCloudBytesAvailable: string;
  strCloudBytesUsed: string;
  strCompatToolDisplayName: string;
  strCompatToolName: string;
  strDeveloperName: string;
  strDeveloperURL: string;
  strDisplayName: string;
  strExternalSubscriptionURL: string;
  strFlatpakAppID: string;
  strHomepageURL: string;
  strLaunchOptions: string;
  strManualURL: string;
  strOwnerSteamID: string;
  strResolutionOverride: string;
  strSelectedBeta: string;
  strShortcutExe: string;
  strShortcutLaunchOptions: string;
  strShortcutStartDir: string;
  strSteamDeckBlogURL: string;
  unAppID: number;
  vecBetas: any[];
  vecDLC: any[];
  vecDeckCompatTestResults: any[];
  vecLanguages: AppLanguages[];
  vecLegacyCDKeys: any[];
  vecMusicAlbums: any[];
  vecPlatforms: string[];
  vecScreenShots: any[];
  libraryAssets?: {
    logoPosition?: LogoPosition;
  };
}

export interface SteamAppOverview {
  display_name: string;
  gameid: string;
  appid: number;
  icon_hash: string;
  third_party_mod?: boolean;
  selected_clientid?: string;
  BIsModOrShortcut: () => boolean;
  BIsShortcut: () => boolean;
}
