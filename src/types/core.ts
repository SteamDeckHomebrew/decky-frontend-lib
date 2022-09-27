export enum SideMenu {
  None,
  Main,
  QuickAccess,
}

export enum QuickAccessTab {
  Notifications,
  RemotePlayTogetherControls,
  VoiceChat,
  Friends,
  Settings,
  Perf,
  Help,
  Decky,
}

export enum DisplayStatus {
  Invalid = 0,
  Launching = 1,
  Uninstalling = 2,
  Installing = 3,
  Running = 4,
  Validating = 5,
  Updating = 6,
  Downloading = 7,
  Synchronizing = 8,
  ReadyToInstall = 9,
  ReadyToPreload = 10,
  ReadyToLaunch = 11,
  RegionRestricted = 12,
  PresaleOnly = 13,
  InvalidPlatform = 14,
  PreloadComplete = 16,
  BorrowerLocked = 17,
  UpdatePaused = 18,
  UpdateQueued = 19,
  UpdateRequired = 20,
  UpdateDisabled = 21,
  DownloadPaused = 22,
  DownloadQueued = 23,
  DownloadRequired = 24,
  DownloadDisabled = 25,
  LicensePending = 26,
  LicenseExpired = 27,
  AvailForFree = 28,
  AvailToBorrow = 29,
  AvailGuestPass = 30,
  Purchase = 31,
  Unavailable = 32,
  NotLaunchable = 33,
  CloudError = 34,
  CloudOutOfDate = 35,
  Terminating = 36,
}

export interface RunningApp {
  appid: number;
  display_name: string;
  app_type: number;
  mru_index: number;
  rt_recent_activity_time: number;
  minutes_playtime_forever: number;
  minutes_playtime_last_two_weeks: number;
  rt_last_time_played: number;
  rt_last_time_locally_played: number;
  per_client_data: ClientData[];
  most_available_clientid: string;
  selected_clientid: string;
  selected_per_client_data: ClientData;
  most_available_per_client_data: ClientData;
  local_per_client_data: ClientData;
  rt_last_time_played_or_installed: number;
  rt_purchased_time: number;
  rt_original_release_date: number;
  rt_steam_release_date: number;
  icon_hash: string;
  controller_support: number;
  size_on_disk: string;
  visible_in_game_list: boolean;
  rt_store_asset_mtime: number;
  sort_as: string;
  association: Association[];
  m_setStoreCategories: MSetStoreCategories;
  m_setStoreTags: MSetStoreTags;
  canonicalAppType: number;
  review_score_with_bombs: number;
  review_percentage_with_bombs: number;
  review_score_without_bombs: number;
  review_percentage_without_bombs: number;
  steam_deck_compat_category: number;
  m_strPerClientData: string;
  m_strStoreTags: string;
  m_strAssociations: string;
  m_strStoreCategories: string;
}

export interface ClientData {
  clientid: string;
  client_name: string;
  display_status: DisplayStatus;
  status_percentage: number;
  installed: boolean;
  bytes_downloaded: string;
  bytes_total: string;
  is_available_on_current_platform: boolean;
  cloud_status: number;
}

export interface Association {
  type: number;
  name: string;
}

export interface MSetStoreCategories {}

export interface MSetStoreTags {}

export interface Controller {
  strName: string;
  eControllerType: number;
  nXInputIndex: number;
  nControllerIndex: number;
  eRumblePreference: number;
  bWireless: boolean;
  unUniqueID: number;
  unVendorID: number;
  unProductID: number;
  unCapabilities: number;
  strFirmwareBuildTime: string;
  strSerialNumber: string;
  strChipID: string;
  flLEDBrightness: number;
  flLEDSaturation: number;
  nTurnOnSound: number;
  nTurnOffSound: number;
  nLEDColorR: number;
  nLEDColorG: number;
  nLEDColorB: number;
  nLStickDeadzone: number;
  nRStickDeadzone: number;
  nLHapticStrength: number;
  nRHapticStrength: number;
  flLPadPressureCurve: number;
  flRPadPressureCurve: number;
  bHaptics: boolean;
  bSWAntiDrift: boolean;
  ActiveAccount: ActiveAccount;
  vecAltAccounts: any[];
}

export interface ActiveAccount {
  strActiveAccountID: string;
  strName: string;
  strAvatarHash: string;
}

export interface VirtialKeyboardManager {
  m_currentVirtualKeyboardRef: any;
  m_lastActiveVirtualKeyboardRef: any;
  m_bIsVirtualKeyboardOpen: MBIsVirtualKeyboardOpen;
  m_OnActiveElementChanged: MOnActiveElementChanged;
  m_OnActiveElementClicked: MOnActiveElementClicked;
  m_bDismissOnEnter: boolean;
  m_strDeadKeyPending: any;
  m_strDeadKeyNext: any;
  m_strDeadKeyCombined: any;
}

export interface MBIsVirtualKeyboardOpen {
  m_callbacks: MCallbacks;
  m_currentValue: boolean;
}

export interface MCallbacks {
  m_vecCallbacks: any[];
}

export interface MOnActiveElementChanged {
  m_vecCallbacks: any[];
}

export interface MOnActiveElementClicked {
  m_vecCallbacks: any[];
}

export interface GameOSKSettings {
  m_pchExistingText: string;
  m_bOpen: boolean;
  m_dwPID: number;
  m_hPipe: number;
  m_pchDescription: '';
  m_unCharMax: number;
  m_bSubmitted: boolean;
  m_eInputMode: number;
  m_unSubmittedText: number;
  m_eLineInputMode: number;
}

export interface GamepadUIAudio {
  m_AudioPlaybackManager: MAudioPlaybackManager;
  m_currentlyFocusedAppid: MCurrentlyFocusedAppid;
  m_bCanPlaySound: boolean;
  k_nGameID_ClientUI: number;
}

export interface MAudioPlaybackManager {
  m_mapPlaybackObjs: MMapPlaybackObjs;
  m_bVoiceActive: boolean;
  m_nLastObservedSampleRate: number;
  m_bSupportsAudioWorkletProcessors: boolean;
}

export interface MMapPlaybackObjs {}

export interface MCurrentlyFocusedAppid {
  m_callbacks: MCallbacks;
  m_currentValue: number;
}

export interface MCallbacks {
  m_vecCallbacks: any[];
}

export interface BrowserView {
  // Still need to figure out how to type this
}

export interface NavigationManager {
  // Still need to figure out how to type this
}
