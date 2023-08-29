declare global {
  var SteamClient: SteamClient;
}

/**
 * Represents various functions related to Steam applications.
 */
export interface Apps {
    /**
     * Adds a non-Steam game to the local Steam library.
     * @param appName The name of the game.
     * @param executablePath The path to the game executable.
     * @param directory The working directory for the game.
     * @param launchOptions Options to be passed when launching the game.
     */
    AddShortcut(appName: string, executablePath: string, directory: string, launchOptions: string): any;

    AddUserTagToApps: any;

    /**
     * Backups an app to the specified path.
     * @param appId The ID of the application to back up.
     * @param backupToPath The path to store the backup.
     * @return {number} - A Promise that resolves to the number. // Todo: Which appears to be "20" for backup busy and "0" success
     */
    BackupFilesForApp(appId: number, backupToPath: string): Promise<number>;

    /**
     * Opens the screenshot folder for a specific app.
     * @param appId The ID of the app to browse screenshots for.
     * @param param1 Additional parameter (exact usage may vary).
     */
    BrowseScreenshotForApp(appId: string, param1: number): any;

    /**
     * Opens the screenshot folder for a specific app.
     * @param appId The ID of the app to browse screenshots for.
     */
    BrowseScreenshotsForApp(appId: string): any;

    /**
     * Cancels the current backup process.
     */
    CancelBackup(): void;

    CancelGameAction: any;

    /**
     * Cancels the launch of an application with the specified ID.
     * @param appId The ID of the application whose launch is to be canceled.
     */
    CancelLaunch(appId: string): void;

    ClearAndSetUserTagsOnApp: any;

    /**
     * Clears the custom artwork for a given application.
     * @param appId The ID of the application to clear custom artwork for.
     * @param assetType 0 = Grid, 1 = Hero, 2 = Logo
     */
    ClearCustomArtworkForApp(appId: number, assetType: number): Promise<any>;

    ClearCustomLogoPositionForApp: any;
    ClearProton: any;
    ClearUserTagsOnApps: any;
    ContinueGameAction: any;
    CreateDesktopShortcutForApp: any;
    DownloadWorkshopItem: any;
    GetAchievementsInTimeRange: any;
    GetActiveGameActions: any;

    /**
     * Retrieves a list of available compatibility tools for a specific application.
     * @param appId The ID of the application to retrieve compatibility tools for.
     * @returns {Promise<CompatibilityToolInfo[]>} A Promise that resolves to an array of CompatibilityToolInfo objects.
     */
    GetAvailableCompatTools(appId: number): Promise<CompatibilityToolInfo[]>;

    GetBackupsInFolder: any;
    GetCachedAppDetails: any;
    GetCloudPendingRemoteOperations: any;
    GetConflictingFileTimestamps: any;
    GetDetailsForScreenshotUpload: any;
    GetDetailsForScreenshotUploads: any;

    GetDownloadedWorkshopItems(appId: number): Promise<WorkshopItem[]>;

    GetDurationControlInfo: any;

    GetFriendAchievementsForApp(appId: string, friendSteam64Id: string): Promise<AppAchievementResponse>;

    /**
     * Retrieves a list of friends who play the specified application.
     * @param {number} appId - The ID of the application.
     * @returns {Promise<string[]>} - A Promise that resolves to an array of Steam64 IDs representing friends who play the application.
     */
    GetFriendsWhoPlay(appId: number): Promise<string[]>;

    GetGameActionDetails: any;
    GetGameActionForApp: any;
    GetLaunchOptionsForApp: any;
    GetLibraryBootstrapData: any;

    GetMyAchievementsForApp(appId: string): Promise<AppAchievementResponse>;

    /**
     * Retrieves the playtime information for a specific application.
     * @param {number} appId - The ID of the application to get playtime information for.
     * @returns {Promise<Playtime | undefined>} - A Promise that resolves to playtime information or undefined if not available.
     */
    GetPlaytime(appId: number): Promise<Playtime | undefined>;

    GetPrePurchasedApps(appIds: number[]): Promise<PrePurchaseInfo>;

    /**
     * Retrieves the resolution override for a specific application.
     * @param appId The ID of the application to retrieve the resolution override for.
     * @returns {Promise<string>} A Promise that resolves to a string of the resolution override.
     */
    GetResolutionOverrideForApp(appId: number): Promise<string>;

    GetScreenshotInfo(param0: string, param1: number): any;

    GetScreenshotsInTimeRange: any;
    GetShortcutData: any;
    GetShortcutDataForPath: any;
    GetSoundtrackDetails: any;

    GetStoreTagLocalization(tags: number[]): Promise<any>;

    GetSubscribedWorkshopItems(appId: number): Promise<WorkshopItem[]>;

    InstallFlatpakAppAndCreateShortcut: any;
    JoinAppContentBeta: any;
    JoinAppContentBetaByPassword: any;
    ListFlatpakApps: any;
    LoadEula: any;
    MarkEulaAccepted: any;
    MarkEulaRejected: any;
    OpenAppSettingsDialog: any;
    RaiseWindowForGame: any;

    /**
     * Registers a callback function to be called when achievement changes occur.
     * @param callback The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAchievementChanges(callback: () => void): Unregisterable | any;

    RegisterForAppBackupStatus(callback: (appBackupStatus: AppBackupStatus) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when app details change.
     * @param appId The ID of the application to monitor.
     * @param callback The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppDetails(appId: number, callback: (appDetails: AppDetails) => void): Unregisterable | any;

    RegisterForAppOverviewChanges: Unregisterable | any;
    RegisterForDRMFailureResponse: Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action ends.
     * @param callback The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionEnd(callback: (gameActionIdentifier: number) => void): Unregisterable | any;

    RegisterForGameActionShowError: Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action UI is shown.
     * @param callback The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionShowUI(callback: () => void): Unregisterable | any; // todo: no idea what this callback is from

    /**
     * Registers a callback function to be called when a game action starts.
     * @param callback The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionStart(callback: (gameActionIdentifier: number, appId: string, action: string, param3: number) => void): Unregisterable | any; // gameActionIdentifier is incremental per game action since steam client start

    RegisterForGameActionTaskChange(callback: (gameActionIdentifier: number, appId: string, action: string, requestedAction: string, param4: string) => void): Unregisterable | any;

    RegisterForGameActionUserRequest(callback: (gameActionIdentifier: number, appId: string, action: string, requestedAction: string, appId2: string) => void): Unregisterable | any;

    RegisterForLocalizationChanges: Unregisterable | any;
    RegisterForPrePurchasedAppChanges: Unregisterable | any;
    RegisterForShowMarketingMessageDialog: Unregisterable | any;

    RegisterForWorkshopChanges(callback: (appId: number) => void): Unregisterable | any;

    RegisterForWorkshopItemDownloads(param0: number, callback: () => void): Unregisterable | any;

    RemoveShortcut(appId: number): any;

    RemoveUserTagFromApps: any;
    ReportLibraryAssetCacheMiss: any;
    ReportMarketingMessageDialogShown: any;
    RequestIconDataForApp: any;
    RequestLegacyCDKeysForApp: any;
    ResetHiddenState: any;

    RunGame(appId: string, param1: string, param2: number, param3: number): any;

    SaveAchievementProgressCache: any;

    ScanForInstalledNonSteamApps(): Promise<NonSteamApp[]>;

    SetAppAutoUpdateBehavior: any;
    SetAppBackgroundDownloadsBehavior: any;
    SetAppCurrentLanguage: any;
    SetAppHidden: any;

    SetAppLaunchOptions(appId: number, launchOptions: string): any;

    SetAppResolutionOverride: any;
    SetCachedAppDetails: any;
    SetControllerRumblePreference: any;

    /**
     * Sets the custom artwork for a given application.
     * @param appId The ID of the application to set custom artwork for.
     * @param base64Image Base64 encoded image.
     * @param imageType "jpeg" or "png".
     * @param assetType 0 = Grid, 1 = Hero, 2 = Logo.
     * @returns A Promise that resolves after the custom artwork is set.
     */
    SetCustomArtworkForApp(appId: number, base64Image: string, imageType: string, assetType: number): Promise<any>;

    SetCustomLogoPositionForApp: any;
    SetDLCEnabled: any;
    SetLocalScreenshotCaption: any;
    SetLocalScreenshotPrivacy: any;
    SetLocalScreenshotSpoiler: any;

    SetShortcutExe(appId: number, path: string): any;

    SetShortcutIcon: any;
    SetShortcutIsVR: any;

    SetShortcutLaunchOptions(appId: number, launchOptions: string): any;

    SetShortcutName(appId: number, shortcutName: string): any;

    SetShortcutStartDir(appId: number, directory: string): any;

    SetStreamingClientForApp: any;
    SetThirdPartyControllerConfiguration: any;

    /**
     * Opens the controller configurator for a specific application.
     * @param {number} appId - The ID of the application for which to open the controller configurator.
     * @returns {void}
     */
    ShowControllerConfigurator(appId: number): void;

    ShowStore: any;

    /**
     * Specifies a compatibility tool by its name for a given application. If strToolName is an empty string, the specified application will no longer use a compatibility tool.
     * @param appId The ID of the application to specify compatibility tool for.
     * @param strToolName The name of the compatibility tool to specify.
     */
    SpecifyCompatTool(appId: number, strToolName: string): void;

    StreamGame: any;
    SubscribeWorkshopItem: any;

    TerminateApp(appId: string, param1: boolean): any;

    ToggleAllowDesktopConfiguration: any;
    ToggleAppFamilyBlockedState: any;
    ToggleAppSteamCloudEnabled: any;
    ToggleAppSteamCloudSyncOnSuspendEnabled: any;
    ToggleEnableDesktopTheatreForApp: any;
    ToggleEnableSteamOverlayForApp: any;
    ToggleOverrideResolutionForInternalDisplay: any;
    UninstallFlatpakApp: any;

    /**
     * Verifies the integrity of an app's files.
     * @param appId The ID of the app to verify.
     */
    VerifyApp(appId: number): any;
}

export interface Auth {
    GetLocalHostname(): Promise<string>;

    GetMachineID(): Promise<ArrayBuffer>;

    GetRefreshInfo(): Promise<AuthRefreshInfo>;

    GetSteamGuardData: any;

    IsSecureComputer(): Promise<boolean>;

    SetLoginToken: any;
    SetSteamGuardData: any;
    StartSignInFromCache: any;
}

export interface Broadcast {
    ApproveViewerRequest: any;
    InviteToWatch: any;
    RegisterForBroadcastStatus: Unregisterable | any;
    RegisterForViewerRequests: Unregisterable | any;
    RejectViewerRequest: any;
    StopBroadcasting: any;
}

export interface Browser {
    BIsDirectHWNDBrowser: any;
    BIsPopupWindow: any;
    BIsVROverlayBrowser: any;
    ClearAllBrowsingData: any;
    ClearHistory: any;
    CloseDevTools(): void;
    GetBrowserID(): Promise<number>;
    GetSteamBrowserID(): Promise<number>; // 16-bit unsigned integer?
    GoBack: any;
    GoForward: any;
    HideCursorUntilMouseEvent: any;

    InspectElement(param0: any, param1: any): any;

    NotifyUserActivation: any;
    OpenDevTools(): void;
    OpenURLForNavigation: any;
    RegisterForGestureEvents: Unregisterable | any;
    RegisterForOpenNewTab: Unregisterable | any;
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

/**
 * Represents the console functionality for executing commands and handling spew output.
 */
export interface Console {
    /**
     * Executes a console command.
     * @param command - The command to execute in the console.
     * @returns {void}
     */
    ExecCommand(command: string): void;

    /**
     * Retrieves autocomplete suggestions for a given console command.
     * @param command - The console command to provide autocomplete suggestions for.
     * @returns {Promise<string[]>} - A Promise that resolves to an array of autocomplete suggestions.
     */
    GetAutocompleteSuggestions(command: string): Promise<string[]>;

    /**
     * Registers a callback function to receive spew output.
     * @param callback - The callback function that will receive spew output.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForSpewOutput(callback: (spewOutput: SpewOutput) => void): Unregisterable | any;
}

export interface Customization {
    GenerateLocalStartupMoviesThumbnails: any;
    GetDownloadedStartupMovies: any;
    GetLocalStartupMovies: any;
}

export interface Downloads {
    EnableAllDownloads: any;
    MoveAppUpdateDown: any;
    MoveAppUpdateUp: any;
    PauseAppUpdate: any;
    QueueAppUpdate: any;

    RegisterForDownloadItems(callback: (isDownloading: boolean, downloadItems: DownloadItem[]) => void): Unregisterable | any;

    RegisterForDownloadOverview(callback: (downloadOverview: DownloadOverview) => void): Unregisterable | any;

    RemoveFromDownloadList: any;
    ResumeAppUpdate(appId: number): void;
    SetLaunchOnUpdateComplete: any;
    SetQueueIndex: any;
    SuspendDownloadThrottling: any;
    SuspendLanPeerContent: any;
}

export interface FamilySharing {
    AuthorizeLocalDevice(): Promise<number>;
    DeauthorizeLocalDevice(): Promise<number>;
    RequestFamilySharingAuthorization: any;
    UpdateAuthorizedBorrower: any;
}

export interface Features {
    SteamInitsPopups(): boolean;
}

/**
 * Represents friend settings and configuration.
 */
export interface FriendSettings {
    /**
     * Retrieves a list of enabled friend settings features.
     * @returns {Promise<FriendSettingsFeature[]>} - A Promise that resolves to an array of enabled friend settings features.
     */
    GetEnabledFeatures(): Promise<FriendSettingsFeature[]>;

    /**
     * Registers a callback function to be notified of friend settings changes.
     * @param callback - The callback function to be called when friend settings change.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @todo The callback receives an escaped JSON object string as "settingsChanges", which should be parsed into FriendSettingsChange object.
     */
    RegisterForSettingsChanges(callback: (settingsChanges: string) => void): Unregisterable | any;

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
    RegisterForAchievementNotification(callback: (achievementNotification: AchievementNotification) => void): Unregisterable | any;

    RegisterForAppLifetimeNotifications(callback: (appLifetimeNotification: AppLifetimeNotification) => void): Unregisterable | any;

    RegisterForScreenshotNotification(callback: (screenshotNotification: ScreenshotNotification) => void): Unregisterable | any;
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
    RegisterForActiveControllerChanges: Unregisterable | any;
    RegisterForConfigSelectionChanges: Unregisterable | any;
    RegisterForControllerAccountChanges: Unregisterable | any;

    RegisterForControllerAnalogInputMessages(callback: (controllerAnalogInputMessages: ControllerAnalogInputMessage[])): Unregisterable | any;

    RegisterForControllerCommandMessages(callback: (controllerCommandMessage: ControllerCommandMessage) => void): Unregisterable | any;

    RegisterForControllerConfigCloudStateChanges: Unregisterable | any;
    RegisterForControllerConfigInfoMessages: Unregisterable | any;

    /**
     * Registers a callback function to be invoked when controller input messages are received.
     * @param {(controllerInputMessages: ControllerInputMessage[]) => void} callback - The callback function to be invoked when controller input messages are received.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForControllerInputMessages(callback: (controllerInputMessages: ControllerInputMessage[]) => void): Unregisterable | any;


    RegisterForControllerListChanges(callback: (controllerListChanges: ControllerInfo[]) => void): Unregisterable | any;

    // For controller input state changes
    RegisterForControllerStateChanges(callback: (controllerStateChanges: ControllerStateChange[]) => void): Unregisterable | any;

    RegisterForGameKeyboardMessages: Unregisterable | any;
    RegisterForRemotePlayConfigChanges: Unregisterable | any;
    RegisterForShowControllerLayoutPreviewMessages: Unregisterable | any;
    RegisterForTouchMenuInputMessages: Unregisterable | any;

    RegisterForTouchMenuMessages(callback: (touchMenuMessage: TouchMenuMessage) => void): Unregisterable | any;

    RegisterForUIVisualization: Unregisterable | any;
    RegisterForUnboundControllerListChanges: Unregisterable | any;
    RegisterForUserDismissKeyboardMessages: Unregisterable | any;
    RegisterForUserKeyboardMessages: Unregisterable | any;
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

    /**
     * Opens the Steam Input controller settings.
     * This function displays the Steam Input controller settings for configuration.
     * @returns {void}
     */
    ShowControllerSettings(): void;

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

    /**
     * Retrieves a list of install folders.
     * @returns A Promise that resolves to an array of InstallFolder objects.
     */
    GetInstallFolders(): Promise<InstallFolder[]>;

    GetPotentialFolders: any;
    MoveInstallFolderForApp: any;
    RefreshFolders: any;
    RegisterForInstallFolderChanges: Unregisterable | any;
    RegisterForMoveContentProgress: Unregisterable | any;
    RegisterForRepairFolderFinished: Unregisterable | any;
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
    RegisterForShowConfirmUninstall: Unregisterable | any;
    RegisterForShowFailedUninstall: Unregisterable | any;

    RegisterForShowInstallWizard(callback: (data: InstallWizardInfo) => void): Unregisterable | any;

    RegisterForShowRegisterCDKey: any;
    SetAppList: any;
    SetCreateShortcuts: any;
    SetInstallFolder: any;
}

export interface Messaging {
    RegisterForMessages(accountName: string, callback: (param0: any) => void): Unregisterable | any;

    PostMessage(): void;
}

export interface Music {
    DecreaseVolume: any;
    IncreaseVolume: any;
    PlayEntry: any;
    PlayNext: any;
    PlayPrevious: any;
    RegisterForMusicPlaybackChanges: Unregisterable | any;
    RegisterForMusicPlaybackPosition: Unregisterable | any;
    SetPlaybackPosition: any;
    SetPlayingRepeatStatus: any;
    SetPlayingShuffled: any;
    SetVolume: any;
    ToggleMuteVolume: any;
    TogglePlayPause: any;
}

export interface Notifications {
    RegisterForNotifications(callback: (param0: number, param1: number, param2: ArrayBuffer) => void): Unregisterable | any;
}

export interface VRDevice {
    BIsConnected: any;
    RegisterForDeviceConnectivityChange: Unregisterable | any;
}

export interface DeviceProperties {
    GetBoolDeviceProperty: any;
    GetDoubleDeviceProperty: any;
    GetFloatDeviceProperty: any;
    GetInt32DeviceProperty: any;
    GetStringDeviceProperty: any;
    RegisterForDevicePropertyChange: Unregisterable | any;
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
    RegisterForInstallDialog: Unregisterable | any;
    RegisterStartupErrors: Unregisterable | any;
    RegisterForVRHardwareDetected: Unregisterable | any;
    RegisterForVRModeChange: Unregisterable | any;
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
    RegisterForActiveOverlayRequests: Unregisterable | any;
    RegisterForMicroTxnAuth: Unregisterable | any;
    RegisterForMicroTxnAuthDismiss: Unregisterable | any;
    RegisterForNotificationPositionChanged: Unregisterable | any;
    RegisterForOverlayActivated: Unregisterable | any;
    RegisterForOverlayBrowserProtocols: Unregisterable | any;
    RegisterOverlayBrowserInfoChanged: Unregisterable | any;
    SetOverlayState: any;
}

/**
 * Interface for managing parental control settings.
 */
export interface Parental {
    /**
     * Locks the parental control settings.
     * @returns {void}
     */
    LockParentalLock(): void;

    /**
     * Registers a callback function to be invoked when parental settings change.
     * @param {(parentalSettings: ParentalSettings) => void} callback - The callback function to be invoked when parental settings change.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForParentalSettingsChanges(callback: (parentalSettings: ParentalSettings) => void): Unregisterable | any;

    /**
     * Unlocks the parental lock with the provided PIN.
     * @param {string} pin - The 4-digit PIN to unlock the parental lock.
     * @param {boolean} param1 - Additional parameter. // Todo: Unknown usage.
     * @returns {Promise<number>} - A Promise that resolves to a number representing the result of the unlock operation.
     */
    UnlockParentalLock(pin: string, param1: boolean): Promise<number>;
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
    RegisterForAudioDriverPrompt: Unregisterable | any;
    RegisterForBitrateOverride: Unregisterable | any;
    RegisterForControllerIndexSet: Unregisterable | any;
    RegisterForDevicesChanges: Unregisterable | any;
    RegisterForGroupCreated: Unregisterable | any;
    RegisterForGroupDisbanded: Unregisterable | any;
    RegisterForInputDriverPrompt: Unregisterable | any;
    RegisterForInputDriverRestartNotice: Unregisterable | any;
    RegisterForInputUsed: Unregisterable | any;
    RegisterForInviteResult: Unregisterable | any;
    RegisterForNetworkUtilizationUpdate: Unregisterable | any;
    RegisterForPlaceholderStateChanged: Unregisterable | any;
    RegisterForPlayerInputSettingsChanged: Unregisterable | any;
    RegisterForQualityOverride: Unregisterable | any;
    RegisterForRemoteClientLaunchFailed: Unregisterable | any;
    RegisterForRemoteClientStarted: Unregisterable | any;
    RegisterForRemoteClientStopped: Unregisterable | any;

    RegisterForSettingsChanges: Unregisterable | any;

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

/**
 * Interface for managing screenshots.
 */
export interface Screenshots {
    /**
     * Deletes a local screenshot.
     * @param {string} appId - The ID of the application.
     * @param {number} screenshotIndex - The index of the local screenshot.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean value indicating whether the deletion was successful.
     */
    DeleteLocalScreenshot(appId: string, screenshotIndex: number): Promise<boolean>;

    /**
     * Retrieves all local screenshots for all applications.
     * @returns {Promise<Screenshot[]>} - A Promise that resolves to an array of Screenshot objects.
     */
    GetAllAppsLocalScreenshots(): Promise<Screenshot[]>;

    /**
     * Retrieves the count of all local screenshots for all applications.
     * @returns {Promise<number>} - A Promise that resolves to the count of local screenshots.
     */
    GetAllAppsLocalScreenshotsCount(): Promise<number>;

    /**
     * Retrieves a range of local screenshots for all applications.
     * @param {number} start - The starting index of the screenshot range.
     * @param {number} end - The ending index of the screenshot range.
     * @returns {Promise<Screenshot[]>} - A Promise that resolves to an array of Screenshot objects within the specified range.
     */
    GetAllAppsLocalScreenshotsRange(start: number, end: number): Promise<Screenshot[]>;

    /**
     * Retrieves all local screenshots.
     * @returns {Promise<Screenshot[]>} - A Promise that resolves to an array of Screenshot objects.
     */
    GetAllLocalScreenshots(): Promise<Screenshot[]>;

    /**
     * Retrieves the game associated with a specific local screenshot index.
     * @param {number} screenshotIndex - The index of the local screenshot.
     * @returns {Promise<number>} - A Promise that resolves to the ID of the game associated with the screenshot.
     */
    GetGameWithLocalScreenshots(screenshotIndex: number): Promise<number>;

    /**
     * Retrieves the last taken local screenshot.
     * @returns {Promise<Screenshot>} - A Promise that resolves to the last taken local screenshot.
     */
    GetLastScreenshotTaken(): Promise<Screenshot>;

    /**
     * Retrieves a specific local screenshot for an application.
     * @param {string} appId - The ID of the application.
     * @param {number} screenshotIndex - The index of the local screenshot.
     * @returns {Promise<Screenshot>} - A Promise that resolves to the requested local screenshot.
     */
    GetLocalScreenshot(appId: string, screenshotIndex: number): Promise<Screenshot>;

    /**
     * Retrieves the count of local screenshots for a specific application.
     * @param {number} appId - The ID of the application.
     * @returns {Promise<number>} - A Promise that resolves to the count of local screenshots for the application.
     */
    GetLocalScreenshotCount(appId: number): Promise<number>;

    /**
     * Retrieves the number of games with local screenshots.
     * @returns {Promise<number>} - A Promise that resolves to the number of games with local screenshots.
     */
    GetNumGamesWithLocalScreenshots(): Promise<number>;

    /**
     * Opens a local screenshot in the system image viewer.
     * If the screenshot index is invalid, this function opens the screenshots directory for the specified application ID.
     * @param {string} appId - The ID of the application.
     * @param {number} screenshotIndex - The index of the local screenshot.
     * @returns {void}
     */
    ShowScreenshotInSystemViewer(appId: string, screenshotIndex: number): void;

    /**
     * Opens the folder containing local screenshots for a specific application.
     * @param {string} appId - The ID of the application.
     * @returns {void}
     */
    ShowScreenshotsOnDisk(appId: string): void;

    /**
     * Uploads a local screenshot.
     * @param {string} appId - The ID of the application.
     * @param {number} localScreenshot_hHandle - The handle of the local screenshot.
     * @param {number} param2 - Additional parameter. // Todo: Unknown at this time. My assumption is the visibility of the screenshot.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean value indicating whether the upload was successful.
     */
    UploadLocalScreenshot(appId: string, localScreenshot_hHandle: number, param2: number): Promise<boolean>;
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

    GetAccountSettings(): Promise<AccountSettings>;

    GetAppUsesP2PVoice(appId: number): Promise<boolean>;

    GetAvailableLanguages(): Promise<Language[]>;

    GetAvailableTimeZones(): Promise<TimeZone[]>;

    // Returns the current language "english"
    GetCurrentLanguage(): Promise<string>;

    GetGlobalCompatTools(): Promise<CompatibilityToolInfo[]>;

    GetMonitorInfo: any;

    GetOOBETestMode(): Promise<boolean>;

    GetRegisteredSteamDeck(): Promise<RegisteredSteamDeck>;

    // Returns the current timezone "America/Los_Angeles"
    GetTimeZone(): Promise<string>;

    GetWindowed(): Promise<boolean>;

    IgnoreSteamDeckRewards: any;
    OpenWindowsMicSettings: any;
    RegisterForMicVolumeUpdates: Unregisterable | any;
    RegisterForSettingsArrayChanges: Unregisterable | any;

    RegisterForSettingsChanges(callback: (steamSettings: SteamSettings) => void): Unregisterable | any;

    RegisterForTimeZoneChange: Unregisterable | any;
    ReinitMicSettings: any;
    RequestDeviceAuthInfo: any;
    SelectClientBeta: any;

    SetCefRemoteDebuggingEnabled(value: boolean): any;

    // Get from available languages
    SetCurrentLanguage(strShortName: string): void;

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

    SpecifyGlobalCompatTool(strToolName: string): void;

    ToggleSteamInstall: any;
}

export interface SharedConnection {
    AllocateSharedConnection: any;
    Close: any;
    RegisterOnBinaryMessageReceived: Unregisterable | any;
    RegisterOnLogonInfoChanged: Unregisterable | any;
    RegisterOnMessageReceived: Unregisterable | any;
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
    RegisterForStreamingClientFinished: Unregisterable | any;
    RegisterForStreamingClientLaunchProgress: Unregisterable | any;
    RegisterForStreamingClientStarted: Unregisterable | any;
    RegisterForStreamingLaunchComplete: Unregisterable | any;
    RegisterForStreamingShowEula: Unregisterable | any;
    RegisterForStreamingShowIntro: Unregisterable | any;
    RegisterForStreamingShowLaunchOptions: Unregisterable | any;
    StreamingContinueStreamGame: any;
    StreamingSetLaunchOption: any;
}

export interface Audio {
    ClearDefaultDeviceOverride: any;
    GetApps: any;
    GetDevices: any;
    RegisterForAppAdded: Unregisterable | any;
    RegisterForAppRemoved: Unregisterable | any;
    RegisterForAppVolumeChanged: Unregisterable | any;
    RegisterForDeviceAdded: Unregisterable | any;
    RegisterForDeviceRemoved: Unregisterable | any;
    RegisterForDeviceVolumeChanged: Unregisterable | any;
    RegisterForServiceConnectionStateChanges: Unregisterable | any;
    RegisterForVolumeButtonPressed: Unregisterable | any;
    SetAppVolume: any;
    SetDefaultDeviceOverride: any;
    SetDeviceVolume: any;
}

export interface Devkit {
    DeveloperModeChanged: any;
    RegisterForPairingPrompt: Unregisterable | any;
    RespondToPairingPrompt: any;
    SetPairing: any;
}

export interface Display {
    EnableUnderscan: any;

    RegisterForBrightnessChanges(callback: (brightnessChanges: BrightnessChange) => void): Unregisterable | any;

    SetBrightness(brightness: number): any;

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
    RegisterForAppSummaryUpdate: Unregisterable | any;
    RegisterForConnectionStateUpdate: Unregisterable | any;

    RegisterForConnectivityTestChanges(callback: (connectivityTestChange: ConnectivityTestChange) => void): Unregisterable | any;

    RegisterForDeviceChanges(callback: (param0: any) => void): Unregisterable | any;

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
    RegisterForStateChanges: Unregisterable | any;
    TrimAll: any;
}

export interface SystemUI {
    CloseGameWindow: any;
    GetGameWindowsInfo: any;
    RegisterForFocusChangeEvents: Unregisterable | any;
    RegisterForOverlayGameWindowFocusChanged: Unregisterable | any;

    RegisterForSystemKeyEvents(callback: (event: any) => void): Unregisterable | any;
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

    GetSystemInfo(): Promise<SystemInfo>;

    IsDeckFactoryImage: Promise<boolean>;
    Network: Network;
    NotifyGameOverlayStateChanged: any;
    OpenFileDialog: any;
    OpenLocalDirectoryInSystemExplorer: any;
    RebootToAlternateSystemPartition: any;
    RebootToFactoryTestImage: any;

    RegisterForAirplaneModeChanges(callback: (airplaneModeChange: AirplaneModeChange) => void): Unregisterable | any;

    RegisterForBatteryStateChanges: Unregisterable | any;
    RegisterForFormatStorageProgress: Unregisterable | any;

    RegisterForOnResumeFromSuspend(callback: () => void): Unregisterable | any;

    RegisterForOnSuspendRequest(callback: () => void): Unregisterable | any;

    RegisterForSettingsChanges: Unregisterable | any;
    Report: Report;

    /**
     * Restarts the system.
     */
    RestartPC(): any;

    SetAirplaneMode(enabled: boolean): void;

    SetLegacyAmpControl: any;

    ShutdownPC(): any;

    SteamRuntimeSystemInfo: any;
    Storage: SystemStorage;

    /**
     * Suspends the system.
     */
    SuspendPC(): any;

    /**
     * Switches to desktop mode.
     */
    SwitchToDesktop(): any;

    UI: SystemUI;
    UpdateSettings: any;
}

export interface UI {
    EnsureMainWindowCreated: any;
    ExitBigPictureMode: any;
    GetDesiredSteamUIWindows: any;
    GetOSEndOfLifeInfo: any;

    /**
     * Retrieves the current UI mode.
     * @returns {Promise<number>} - A Promise that resolves to the current UI mode.
     *                             4 represents Deck Mode/Big Picture Mode.
     *                             7 represents Desktop Mode.
     */
    GetUIMode(): Promise<number>;

    NotifyAppInitialized: any;
    RegisterDesiredSteamUIWindowsChanged: Unregisterable | any;
    RegisterForKioskModeResetSignal: Unregisterable | any;
    RegisterForUIModeChanged: Unregisterable | any;
    ResetErrorCondition: any;

    /**
     * Sets the UI mode to the specified value.
     * @param {number} mode - The UI mode to set. Use values:
     *                       - 4 for Deck Mode/Big Picture Mode.
     *                       - 7 for Desktop Mode.
     * @returns {void}
     */
    SetUIMode(mode: number): void;
}

export interface URL {
    ExecuteSteamURL: any;
    GetSteamURLList: any;
    GetWebSessionID: any;
    RegisterForRunSteamURL: Unregisterable | any;
    RegisterForSteamURLChanges: Unregisterable | any;
}

export interface Updates {
    ApplyUpdates: any;
    CheckForUpdates: any;
    GetCurrentOSBranch: any;
    RegisterForUpdateStateChanges: Unregisterable | any;
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

    GoOffline(): void;

    GoOnline(): void;

    OptOutOfSurvey: any;
    PrepareForSystemSuspend: any;
    Reconnect: any;

    RegisterForConnectionAttemptsThrottled(callback: (param0: any) => void): Unregisterable | any;

    RegisterForCurrentUserChanges(callback: (data: any) => void): Unregisterable | any;

    RegisterForLoginStateChange(callback: (username: string) => void): Unregisterable | any;

    RegisterForPrepareForSystemSuspendProgress(callback: (data: any) => void): Unregisterable | any;

    RegisterForResumeSuspendedGamesProgress: Unregisterable | any;

    RegisterForShutdownDone(callback: () => void): Unregisterable | any;

    RegisterForShutdownFailed: Unregisterable | any;

    /**
     * Register a function to be executed when a shutdown start is detected.
     * @param callback The function to be executed on shutdown start.
     */
    RegisterForShutdownStart(callback: () => void): Unregisterable | any;

    RegisterForShutdownState: Unregisterable | any;
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

    /**
     * Restarts the Steam client.
     */
    StartRestart(): any;

    StartShutdown(flag: boolean): any;
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
    RegisterForComputerActiveStateChange: Unregisterable | any;
    RegisterForFriendPostMessage: Unregisterable | any;
    RegisterForMouseXButtonDown: Unregisterable | any;
    RegisterForPushToTalkStateChange: Unregisterable | any;
    RegisterForUIModeChange: Unregisterable | any;
    RegisterForVRModeChange: Unregisterable | any;
    RegisterOverlayChatBrowserInfoChanged: Unregisterable | any;
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
export interface AppLifetimeNotification {
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

/**
 * Represents information about a compatibility tool.
 */
export interface CompatibilityToolInfo {
    /** Name of the compatibility tool. */
    strToolName: string;
    /** Display name of the compatibility tool. */
    strDisplayName: string;
}


/**
 * Represents information about an installed application.
 */
export interface AppInfo {
    /** ID of the application. */
    nAppID: number;
    /** Name of the application. */
    strAppName: string;
    /** Sorting information for the application. */
    strSortAs: string;
    /** Last played time in Unix Epoch time format. */
    rtLastPlayed: number;
    /** Size of used storage by the application. */
    strUsedSize: string;
    /** Size of DLC storage used by the application. */
    strDLCSize: string;
    /** Size of workshop storage used by the application. */
    strWorkshopSize: string;
    /** Size of staged storage used by the application. */
    strStagedSize: string;
}

/**
 * Represents information about an installation folder.
 */
export interface InstallFolder {
    /** Index of the folder. */
    nFolderIndex: number;
    /** Path of the folder. */
    strFolderPath: string;
    /** User label for the folder. */
    strUserLabel: string;
    /** Name of the drive where the folder is located. */
    strDriveName: string;
    /** Total capacity of the folder. */
    strCapacity: string;
    /** Available free space in the folder. */
    strFreeSpace: string;
    /** Used space in the folder. */
    strUsedSize: string;
    /** Size of DLC storage used in the folder. */
    strDLCSize: string;
    /** Size of workshop storage used in the folder. */
    strWorkshopSize: string;
    /** Size of staged storage used in the folder. */
    strStagedSize: string;
    /** Indicates if the folder is set as the default installation folder. */
    bIsDefaultFolder: boolean;
    /** Indicates if the folder is currently mounted. */
    bIsMounted: boolean;
    /** Indicates if the folder is on a fixed drive. */
    bIsFixed: boolean;
    /** List of applications installed in the folder. */
    vecApps: AppInfo[];
}

export interface AchievementNotification {
    achievement: AppAchievements,
    nCurrentProgress: number,
    nMaxProgress: number,
    unAppID: number
}

export interface ScreenshotNotification {
    details: Screenshot,
    hScreenshot: number,
    strOperation: string,
    unAppID: number,
}

export interface Screenshot {
    nAppID: number,
    strGameID: string,
    hHandle: number,
    nWidth: number,
    nHeight: number,
    nCreated: number, // timestamp
    ePrivacy: number,
    strCaption: "",
    bSpoilers: boolean,
    strUrl: string,
    bUploaded: boolean,
    ugcHandle: string
}


export interface DownloadItem {
    active: boolean,
    appid: number,
    buildid: number,
    completed: boolean,
    completed_time: number,
    deferred_time: number,
    downloaded_bytes: number,
    launch_on_completion: boolean,
    paused: boolean,
    queue_index: number,
    target_buildid: number,
    total_bytes: number,
    update_error: string,
    update_result: number,
    update_type_info: UpdateTypeInfo[]
}

export interface UpdateTypeInfo {
    completed_update: boolean,
    downloaded_bytes: number,
    has_update: boolean,
    total_bytes: number
}

export interface DownloadOverview {
    lan_peer_hostname: string,
    paused: boolean,
    throttling_suspended: boolean,
    update_appid: number,
    update_bytes_downloaded: number,
    update_bytes_processed: number,
    update_bytes_staged: number,
    update_bytes_to_download: number,
    update_bytes_to_process: number,
    update_bytes_to_stage: number,
    update_disc_bytes_per_second: number,
    update_is_install: boolean,
    update_is_prefetch_estimate: boolean,
    update_is_shader: boolean,
    update_is_upload: boolean,
    update_is_workshop: boolean,
    update_network_bytes_per_second: number,
    update_peak_network_bytes_per_second: number,
    update_seconds_remaining: number,
    update_start_time: number,
    update_state: "None" | "Starting" | "Updating" | "Stopping"
}

export interface InstallWizardInfo {
    bCanChangeInstallFolder: boolean,
    bIsRetailInstall: boolean,
    currentAppID: number,
    eAppError: number,
    eInstallState: number,
    errorDetail: string,
    iInstallFolder: number,
    iUnmountedFolder: number,
    nDiskSpaceAvailable: number,
    nDiskSpaceRequired: number,
    rgAppIDs: number[],
}

/**
 * Represents spew output information.
 */
export interface SpewOutput {
    /**
     * The content of the spew output.
     */
    spew: string;

    /**
     * The type or category of the spew output.
     */
    spew_type: string;
}

export interface AuthRefreshInfo {
    reason: number;
    account_name: string;
    login_id_token: string;
}

export interface WorkshopItem {
    unAppID: number;
    ulPublishedFileID: string;
}

/**
 * Represents playtime information for an application.
 */
export interface Playtime {
    /** Total playtime in minutes for the last 2 weeks. */
    nPlaytimeLastTwoWeeks: number;
    /** Total playtime in minutes. */
    nPlaytimeForever: number;
    /** Last played time in Unix Epoch time format. */
    rtLastTimePlayed: number;
}

export interface BrightnessChange {
    flBrightness: number;
}

export interface AirplaneModeChange {
    bEnabled: boolean;
}

export interface SystemInfo {
    sOSName: string;
    sKernelVersion: string;
    sBIOSVersion: string;
    sHostname: string;
    sOSCodename: string;
    sOSVariantId: string;
    sOSVersionId: string;
    sOSBuildId: string;
    nSteamVersion: number;
    sSteamBuildDate: string;
    sSteamAPI: string;
    sCPUVendor: string;
    sCPUName: string;
    nCPUHz: number;
    nCPUPhysicalCores: number;
    nCPULogicalCores: number;
    nSystemRAMSizeMB: number;
    sVideoCardName: string;
    sVideoDriverVersion: string;
    nVideoRAMSizeMB: number;
    bIsUnsupportedPrototypeHardware: boolean;
}

interface Region {
    nRegionID: number;
    strRegionName: string;
}

interface Hour {
    nHour: number;
    strDisplay: string;
}

interface AvailableClientBeta {
    nBetaID: number;
    strName: string;
}

interface DisplaySettings {
    bDisplayIsExternal: boolean;
    flAutoDisplayScaleFactor: number;
    flCurrentDisplayScaleFactor: number;
    bDisplayIsUsingAutoScale: boolean;
    flMinDisplayScaleFactor: number;
    flMaxDisplayScaleFactor: number;
    flCurrentUnderscanLevel: number;
    bUnderscanEnabled: boolean;
}

interface SteamSettings {
    bIsInClientBeta: boolean;
    bIsSteamSideload: boolean;
    eClientBetaState: number;
    strSelectedBetaName: string;
    nAvailableBetas: number;
    bChangeBetaEnabled: boolean;
    nSelectedBetaID: number;
    vecAvailableClientBetas: AvailableClientBeta[];
    bIsValveEmail: boolean;
    bIsInDesktopUIBeta: boolean;
    bEnableSoftProcessKill: boolean;
    vecValidDownloadRegions: Region[];
    vecValidAutoUpdateRestrictHours: Hour[];
    bCompatEnabled: boolean;
    bCompatEnabledForOtherTitles: boolean;
    strCompatTool: string;
    bShowMobxDevTools: boolean;
    bForceOOBE: boolean;
    bEnableTestUpdaters: boolean;
    bOOBETestModeEnabled: boolean;
    bEnableTabbedAppDetails: boolean;
    eOverrideBrowserComposerMode: number;
    bCefRemoteDebuggingEnabled: boolean;
    strDisplayName: string;
    displaySettings: DisplaySettings;
    vecNightModeScheduledHours: Hour[];
}

export interface PrePurchaseApp {
    nAppID: number;
    eState: number;
}

export interface PrePurchaseInfo {
    apps: PrePurchaseApp[];
    lastChangeNumber: number;
}

export interface AppAchievement {
    strID: string;
    strName: string;
    strDescription: string;
    bAchieved: boolean;
    rtUnlocked: number; // epoch time
    strImage: string;
    bHidden: boolean;
    flMinProgress: number;
    flCurrentProgress: number;
    flMaxProgress: number;
    flAchieved: number;
}

export interface AppAchievementData {
    rgAchievements: AppAchievement[];
}

export interface AppAchievementResponse {
    result: number;
    data: AppAchievementData
}

export interface NonSteamApp {
    bIsApplication: boolean;
    strAppName: string;
    strExePath: string;
    strArguments: string;
    strCmdline: string;
    strIconDataBase64: string;
}

export interface RegisteredSteamDeck {
    bRegistered: boolean;
    bIgnoreRegistrationPrompt: boolean;
    strSteamID: string;
    strSerialNumber: string;
}

export interface AccountSettings {
    strEmail: string;
    bEmailValidated: boolean;
    bHasAnyVACBans: boolean;
    bHasTwoFactor: boolean;
    eSteamGuardState: number;
    rtSteamGuardEnableTime: number;
    bSaveAccountCredentials: boolean;
}

export interface Language {
    language: number;
    strShortName: string;
}

export interface TimeZone {
    utcOffset: number;
    timezoneID: string;
    timezoneLocalizationToken: string;
    regionsLocalizationToken: string;
}

export interface AppBackupStatus {
    appid: number;
    eError: number; // Without confirmation  20 - In progress, 3 - Cancelled?
    strBytesToProcess: string;
    strBytesProcessed: string;
    strTotalBytesWritten: string;
}

/**
 * Represents a list of applications with their IDs.
 */
interface AppList {
    /**
     * Key-value pairs where the key is the `appId` (e.g., "App_123456") and the value indicates whether the appId is allowed during parental lock.
     */
    [appId: string]: number;
}

/**
 * Represents the parental settings and restrictions.
 */
export interface ParentalSettings {
    /**
     * Indicates whether parental settings are enabled.
     */
    enabled: boolean;
    /**
     * Indicates whether parental settings are locked.
     */
    locked: boolean;
    /**
     * Bitmask representing enabled features.
     * - Bit 0: Unknown (@todo Please provide more details if known)
     * - Bit 1: Online content & features - Steam Store
     * - Bit 2: Online content & features - Community-generated content
     * - Bit 3: Online content & features - Friends, chat, and groups
     * - Bit 4: Online content & features - My online profile, screenshots, and achievements
     * - Bit 5-11: Unknown (@todo Please provide more details if known)
     * - Bit 12: Library content - 0: Only games I choose, 1: All games
     */
    features: number;
    /**
     * Indicates whether all apps are allowed.
     */
    allowallapps: boolean;
    /**
     * Base list (type not specified but an object).
     * @todo Determine the type of this property.
     */
    baselist: any | undefined;
    /**
     * Custom list of allowed applications.
     */
    customlist: AppList;
    /**
     * Email for recovery (if applicable).
     */
    recoveryemail: string | undefined;
}

export interface ConnectivityTestChange {
    eConnectivityTestResult: number;
    eFakeState: number;
    bChecking: boolean;
}

export interface ControllerStateChange {
    unControllerIndex: number;
    unPacketNum: number;
    ulUpperButtons: number;
    ulButtons: number;
    sLeftPadX: number;
    sLeftPadY: number;
    sRightPadX: number;
    sRightPadY: number;
    sCenterPadX: number;
    sCenterPadY: number;
    sLeftStickX: number;
    sLeftStickY: number;
    sRightStickX: number;
    sRightStickY: number;
    sTriggerL: number;
    sTriggerR: number;
    flDriftCorrectedQuatW: number;
    flDriftCorrectedQuatX: number;
    flDriftCorrectedQuatY: number;
    flDriftCorrectedQuatZ: number;
    flSensorFusionGyroQuatW: number;
    flSensorFusionGyroQuatX: number;
    flSensorFusionGyroQuatY: number;
    flSensorFusionGyroQuatZ: number;
    flDeferredSensorFusionGyroQuatW: number;
    flDeferredSensorFusionGyroQuatX: number;
    flDeferredSensorFusionGyroQuatY: number;
    flDeferredSensorFusionGyroQuatZ: number;
    flGyroDegreesPerSecondX: number;
    flGyroDegreesPerSecondY: number;
    flGyroDegreesPerSecondZ: number;
    flGravityVectorX: number;
    flGravityVectorY: number;
    flGravityVectorZ: number;
    flAccelerometerNoiseLength: number;
    flGyroNoiseLength: number;
    flGyroCalibrationProgress: number;
    sBatteryLevel: number;
    sPressurePadLeft: number;
    sPressurePadRight: number;
    sPressureBumperLeft: number;
    sPressureBumperRight: number;
    unHardwareUpdateInMicrosec: number;
}

export interface ActiveAccount {
    strActiveAccountID: string;
    strName: string;
    strAvatarHash: string;
}

export interface ControllerInfo {
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
    nLEDColorR: number;
    nLEDColorG: number;
    nLEDColorB: number;
    flLEDBrightness: number;
    flLEDSaturation: number;
    nTurnOnSound: number;
    nTurnOffSound: number;
    nLStickDeadzone: number;
    nRStickDeadzone: number;
    nLHapticStrength: number;
    nRHapticStrength: number;
    flLPadPressureCurve: number;
    flRPadPressureCurve: number;
    bHaptics: boolean;
    bSWAntiDrift: boolean;
    flGyroStationaryTolerance: number;
    flAccelerometerStationaryTolerance: number;
    bRemoteDevice: boolean;
    bNintendoLayout: boolean;
    bUseReversedLayout: boolean;
    ActiveAccount: ActiveAccount | undefined;
    vecAltAccounts: any[]; // The type for this property might need to be more specific based on the actual data structure
}

export interface TouchMenuMessage {
    bHasVirtualMenus: boolean;
    unControllerIndex: number;
    appID: number;
}

export interface ControllerCommandMessage {
    eAction: number;
    nControllerIndex: number;
}

export interface ControllerInputMessage {
    nA: number;
    bS: boolean;
    nC: number;
}

export interface ControllerAnalogInputMessage {
    nA: number;
    x: number;
    y: number;
    nC: number;
}

export interface FriendSettingsFeature {
    feature: string;
    bEnabled: boolean;
}

export interface FriendSettingsEnabledFeature {
    DoNotDisturb: number;
    LoaderWindowSynchronization: number;
    NonFriendMessageHandling: number;
    NewVoiceHotKeyState: number;
    PersonaNotifications: number;
    ServerVirtualizedMemberLists: number;
    SteamworksChatAPI: number;
    FriendsFilter: number;
}

export interface FriendSettingsChange {
    bNotifications_ShowIngame: number;
    bNotifications_ShowOnline: number;
    bNotifications_ShowMessage: number;
    bNotifications_EventsAndAnnouncements: number;
    bSounds_PlayIngame: number;
    bSounds_PlayOnline: number;
    bSounds_PlayMessage: number;
    bSounds_EventsAndAnnouncements: number;
    bAlwaysNewChatWindow: number;
    bForceAlphabeticFriendSorting: number;
    nChatFlashMode: number;
    bRememberOpenChats: number;
    bCompactQuickAccess: number;
    bCompactFriendsList: number;
    bNotifications_ShowChatRoomNotification: number;
    bSounds_PlayChatRoomNotification: number;
    bHideOfflineFriendsInTagGroups: number;
    bHideCategorizedFriends: number;
    bCategorizeInGameFriendsByGame: number;
    nChatFontSize: number;
    b24HourClock: number;
    bDoNotDisturbMode: number;
    bDisableEmbedInlining: number;
    bSignIntoFriends: number;
    bDisableSpellcheck: number;
    bDisableRoomEffects: number;
    bAnimatedAvatars: number;
    featuresEnabled: FriendSettingsEnabledFeature;
}


export interface Unregisterable {
    /**
     * Unregister the callback.
     */
    unregister(): void;
}