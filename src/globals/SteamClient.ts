declare global {
  var SteamClient: SteamClient;
}

export interface Apps {
  RegisterForAppOverviewChanges: any;
  RegisterForAppDetails: any;
  RegisterForLocalizationChanges: any;
  RegisterForWorkshopChanges: any;
  RegisterForWorkshopItemDownloads: any;
  GetLibraryBootstrapData: any;
  RegisterForAchievementChanges: any;
  GetFriendAchievementsForApp: any;
  GetMyAchievementsForApp: any;
  AddUserTagToApps: any;
  RemoveUserTagFromApps: any;
  ClearUserTagsOnApps: any;
  ClearAndSetUserTagsOnApp: any;
  SetAppHidden: any;
  ResetHiddenState: any;
  SetAppLaunchOptions: any;
  SetAppResolutionOverride: any;
  SetAppCurrentLanguage: any;
  SetAppAutoUpdateBehavior: any;
  SetAppBackgroundDownloadsBehavior: any;
  ToggleAppFamilyBlockedState: any;
  ToggleAppSteamCloudEnabled: any;
  ToggleAppSteamCloudSyncOnSuspendEnabled: any;
  ToggleOverrideResolutionForInternalDisplay: any;
  ToggleEnableSteamOverlayForApp: any;
  ToggleEnableDesktopTheatreForApp: any;
  BrowseLocalFilesForApp: any;
  BrowseScreenshotsForApp: any;
  BrowseScreenshotForApp: any;
  BackupFilesForApp: any;
  VerifyFilesForApp: any;
  CreateDesktopShortcutForApp: any;
  JoinAppContentBeta: any;
  JoinAppContentBetaByPassword: any;
  GetAchievementsInTimeRange: any;
  GetSubscribedWorkshopItems: any;
  SubscribeWorkshopItem: any;
  GetDownloadedWorkshopItems: any;
  DownloadWorkshopItem: any;
  SetLocalScreenshotCaption: any;
  SetLocalScreenshotSpoiler: any;
  GetDetailsForScreenshotUpload: any;
  UploadLocalScreenshot: any;
  DeleteLocalScreenshot: any;
  GetScreenshotsInTimeRange: any;
  GetFriendsWhoPlay: any;
  RequestLegacyCDKeysForApp: any;
  GetSoundtrackDetails: any;
  GetStoreTagLocalization: any;
  GetLaunchOptionsForApp: any;
  GetResolutionOverrideForApp: any;
  ScanForShortcuts: any;
  GetAllShortcuts: any;
  GetShortcutData: any;
  AddShortcut: any;
  RemoveShortcut: any;
  InstallFlatpakAppAndCreateShortcut: any;
  ListFlatpakApps: any;
  UninstallFlatpakApp: any;
  ShowControllerConfigurator: any;
  SetThirdPartyControllerConfiguration: any;
  ToggleAllowDesktopConfiguration: any;
  SetControllerRumblePreference: any;
  GetCachedAppDetails: any;
  SetCachedAppDetails: any;
  ReportLibraryAssetCacheMiss: any;
  SaveAchievementProgressCache: any;
  SetStreamingClientForApp: any;
  SetCustomArtworkForApp: any;
  ClearCustomArtworkForApp: any;
  SetCustomLogoPositionForApp: any;
  ClearCustomLogoPositionForApp: any;
  RequestIconDataForApp: any;
  SpecifyCompatTool: any;
  GetAvailableCompatTools: any;
  SetShortcutName: any;
  SetShortcutExe: any;
  SetShortcutStartDir: any;
  SetShortcutLaunchOptions: any;
  SetShortcutIsVR: any;
  PromptToChangeShortcut: any;
  PromptToSelectShortcutIcon: any;
  InstallApp: any;
  RunGame: any;
  VerifyApp: any;
  StreamGame: any;
  CancelLaunch: any;
  TerminateApp: any;
  UninstallApps: any;
  ShowStore: any;
  SetDLCEnabled: any;
  ContinueGameAction: any;
  CancelGameAction: any;
  GetActiveGameActions: any;
  GetGameActionDetails: any;
  GetGameActionForApp: any;
  SkipShaderProcessing: any;
  MarkEulaAccepted: any;
  MarkEulaRejected: any;
  LoadEula: any;
  GetConflictingFileTimestamps: any;
  GetCloudPendingRemoteOperations: any;
  ClearProton: any;
  RegisterForMarketingMessages: any;
  FetchMarketingMessages: any;
  MarkMarketingMessageSeen: any;
  ReportMarketingMessageSeen: any;
  RegisterForGameActionStart: any;
  RegisterForGameActionEnd: any;
  RegisterForGameActionTaskChange: any;
  RegisterForGameActionUserRequest: any;
  RegisterForGameActionShowError: any;
  RegisterForGameActionShowUI: any;
  OpenAppSettingsDialog: any;
}

export interface Window {
  RegisterForExternalDisplayChanged: any;
  SetManualDisplayScaleFactor: any;
  SetAutoDisplayScale: any;
  Minimize: any;
  ProcessShuttingDown: any;
  ToggleMaximize: any;
  MoveTo: any;
  ResizeTo: any;
  SetMinSize: any;
  SetResizeGrip: any;
  SetComposition: any;
  GamescopeBlur: any;
  BringToFront: any;
  SetForegroundWindow: any;
  SetKeyFocus: any;
  FlashWindow: any;
  StopFlashWindow: any;
  ShowWindow: any;
  HideWindow: any;
  SetWindowIcon: any;
  GetWindowDimensions: any;
  GetWindowRestoreDetails: any;
  PositionWindowRelative: any;
  GetMousePositionDetails: any;
  IsWindowMinimized: any;
  GetBrowserID: any;
}

export interface SteamClient {
  Apps: Apps;
  Browser: any;
  BrowserView: any;
  ClientNotifications: any;
  Cloud: any;
  Console: any;
  Downloads: any;
  FamilySharing: any;
  FriendSettings: any;
  Friends: any;
  GameSessions: any;
  Input: any;
  InstallFolder: any;
  Installs: any;
  MachineStorage: any;
  Messaging: any;
  Notifications: any;
  OpenVR: any;
  Overlay: any;
  Parental: any;
  RegisterIFrameNavigatedCallback: any;
  RemotePlay: any;
  RoamingStorage: any;
  Screenshots: any;
  Settings: any;
  SharedConnection: any;
  Stats: any;
  Storage: any;
  Streaming: any;
  System: any;
  UI: any;
  URL: any;
  Updates: any;
  User: any;
  WebChat: any;
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
