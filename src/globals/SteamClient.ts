declare global {
  var SteamClient: SteamClient;
}

/**
 * Represents various functions related to Steam applications.
 */
export interface Apps {
    /**
     * Adds a non-Steam application shortcut to the local Steam library.
     * @param {string} appName - The name of the non-Steam application.
     * @param {string} executablePath - The path to the executable file of the non-Steam application.
     * @param {string} directory - The working directory for the non-Steam application.
     * @param {string} launchOptions - Options to be passed when launching the non-Steam application.
     * @returns {Promise<number>} - A Promise that resolves to a unique AppID assigned to the added non-Steam application shortcut.
     */
    AddShortcut(appName: string, executablePath: string, directory: string, launchOptions: string): Promise<number>;

    /**
     * Adds user tags to specified apps in the Steam library.
     * @param {number[]} appIds - The IDs of the apps to which user tags will be added.
     * @param {string} userTag - The user tag to be added.
     * @returns {void}
     * @remarks This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file.
     */
    AddUserTagToApps(appIds: number[], userTag: string): void;

    /**
     * Backups an app to the specified path.
     * @param {number} appId - The ID of the application to back up.
     * @param {string} backupToPath - The path to store the backup.
     * @returns {number} A Promise that resolves to a number. This value may be "20" for backup busy and "0" for success.
     */
    BackupFilesForApp(appId: number, backupToPath: string): Promise<number>;

    /**
     * Opens the screenshot folder for a specific app.
     * @param {string} appId - The ID of the app to browse screenshots for.
     * @param {number} param1 - Additional parameter (exact usage may vary).
     * @returns {void}
     */
    BrowseScreenshotForApp(appId: string, param1: number): void;

    /**
     * Opens the screenshot folder for a specific app.
     * @param {string} appId - The ID of the app to browse screenshots for.
     * @returns {void}
     */
    BrowseScreenshotsForApp(appId: string): void;

    /**
     * Cancels the current backup process.
     * @returns {void}
     */
    CancelBackup(): void;

    CancelGameAction: any;

    /**
     * Cancels the launch of an application with the specified ID.
     * @param {string} appId - The ID of the application whose launch is to be canceled.
     * @returns {void}
     */
    CancelLaunch(appId: string): void;

    /**
     * Clears existing user tags on a specified application and sets new user tags.
     * @param {number} appId - The ID of the application to clear and set user tags for.
     * @param {string[]} userTags - An array of user tags to set for the application.
     * @returns {void}
     * @remarks This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file.
     */
    ClearAndSetUserTagsOnApp(appId: number, userTags: string[]): void;

    /**
     * Clears the custom artwork for a given application.
     * @param {number} appId - The ID of the application to clear custom artwork for.
     * @param {AppArtworkAssetType} assetType - The type of artwork to clear.
     */
    ClearCustomArtworkForApp(appId: number, assetType: AppArtworkAssetType): Promise<void>;

    /**
     * Clears the custom logo position for a specific application.
     * @param {number} appId - The ID of the application.
     * @returns {Promise<void>} - A Promise that resolves once the custom logo position is cleared.
     */
    ClearCustomLogoPositionForApp(appId: number): Promise<void>;

    ClearProton: any;

    /**
     * Clears user tags on a list of specified applications.
     * @param {number[]} appIds - An array of application IDs for which to clear user tags.
     * @returns {void}
     * @remarks This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file.
     */
    ClearUserTagsOnApps(appIds: number[]): void;

    ContinueGameAction: any;

    /**
     * Creates a Steam application shortcut on the desktop.
     * @param {number} appId - The ID of the application for which to create a desktop shortcut.
     * @returns {void}
     */
    CreateDesktopShortcutForApp(appId: number): void;

    DownloadWorkshopItem: any;

    /**
     * Retrieves achievements within a specified time range for a given app.
     * @param {number} appId - The ID of the application.
     * @param {number} start - The start of the time range as a Unix timestamp.
     * @param {number} end - The end of the time range as a Unix timestamp.
     * @returns {Promise<AppAchievement[]>} - A Promise that resolves to an array of AppAchievement objects.
     */
    GetAchievementsInTimeRange(appId: number, start: number, end: number): Promise<AppAchievement[]>;

    /**
     * Retrieves a list of active game actions, such as launching an application.
     * @returns {Promise<GameAction[]>} A Promise that resolves to an array of active game actions.
     */
    GetActiveGameActions(): Promise<GameAction[]>;

    /**
     * Retrieves a list of available compatibility tools for a specific application.
     * @param {number} appId - The ID of the application to retrieve compatibility tools for.
     * @returns {Promise<CompatibilityToolInfo[]>} A Promise that resolves to an array of CompatibilityToolInfo objects.
     */
    GetAvailableCompatTools(appId: number): Promise<CompatibilityToolInfo[]>;

    /**
     * Represents a function to retrieve the name of the application in a backup folder.
     * @param {string} appBackupPath - The path to the application's backup folder.
     * @returns {Promise<string | undefined>} - A Promise that resolves to the name of the application in the backup folder, or undefined if the path is invalid.
     */
    GetBackupsInFolder(appBackupPath: string): Promise<string | undefined>;

    GetCachedAppDetails(appId: number): Promise<string>; // todo: Parsing nightmare

    GetCloudPendingRemoteOperations: any;
    GetConflictingFileTimestamps: any;

    /**
     * Retrieves details for a specific screenshot upload.
     * @param {string} appId - The ID of the application.
     * @param {number} hHandle - The handle of the screenshot upload.
     * @returns {Promise<DetailsForScreenshotUpload>} - A Promise that resolves to details about the screenshot upload.
     */
    GetDetailsForScreenshotUpload(appId: string, hHandle: number): Promise<DetailsForScreenshotUpload>;

    /**
     * Retrieves details for multiple screenshot uploads.
     * @param {string} appId - The ID of the application.
     * @param {number[]} hHandles - An array of handles of the screenshot uploads.
     * @returns {Promise<DetailsForScreenshotUploads>} - A Promise that resolves to details about the screenshot uploads.
     */
    GetDetailsForScreenshotUploads(appId: string, hHandles: number[]): Promise<DetailsForScreenshotUploads>;

    /**
     * Retrieves a list of downloaded workshop items for a specific application.
     * @param {number} appId - The ID of the application to retrieve downloaded workshop items for.
     * @returns {Promise<WorkshopItem[]>} - A Promise that resolves to an array of downloaded workshop items for the specified application.
     */
    GetDownloadedWorkshopItems(appId: number): Promise<WorkshopItem[]>;

    GetDurationControlInfo(appId: number): Promise<any>; // {"bApplicable": true} - overlay usage?

    /**
     * Retrieves achievement information for a specific application for a given friend.
     * @param {string} appId - The ID of the application to retrieve achievement information for.
     * @param {string} friendSteam64Id - The Steam64 ID of the friend for whom to retrieve achievement information.
     * @returns {Promise<AppAchievementResponse>} - A Promise that resolves to an object containing achievement information for the specified friend and application.
     */
    GetFriendAchievementsForApp(appId: string, friendSteam64Id: string): Promise<AppAchievementResponse>;

    /**
     * Retrieves a list of friends who play the specified application.
     * @param {number} appId - The ID of the application.
     * @returns {Promise<string[]>} A Promise that resolves to an array of Steam64 IDs representing friends who play the application.
     */
    GetFriendsWhoPlay(appId: number): Promise<string[]>;

    GetGameActionDetails(appId: number, callback: (gameAction: GameAction) => void): void;

    GetGameActionForApp(appId: string, callback: (param0: number /*flag check? for validity*/, param1: number | string /* string appears to be just the appid*/, param2: string /* "LaunchApp", need to look for more to document*/) => void): void;

    /**
     * Retrieves launch options for a specified application.
     * These options may include different configurations or settings for launching the application, such as DirectX, Vulkan, OpenGL, 32-bit, 64-bit, etc.
     * This function does not retrieve launch/argument options inputted by the user.
     * @param {number} appId - The ID of the application.
     * @returns {Promise<LaunchOption[]>} - A Promise that resolves to an array of launch options for the specified application.
     */
    GetLaunchOptionsForApp(appId: number): Promise<LaunchOption[]>;

    GetLibraryBootstrapData: any; // CLibraryBootstrapData - binary deserializer???

    /**
     * Retrieves achievement information for the authenticated user in a specific Steam application.
     * @param {string} appId - The ID of the application to retrieve achievement information for.
     * @returns {Promise<AppAchievementResponse>} A Promise that resolves to an AppAchievementResponse object containing the achievement information for the authenticated user in the specified application.
     */
    GetMyAchievementsForApp(appId: string): Promise<AppAchievementResponse>;

    /**
     * Retrieves the playtime information for a specific application.
     * @param {number} appId - The ID of the application to get playtime information for.
     * @returns {Promise<Playtime | undefined>} A Promise that resolves to playtime information or undefined if not available.
     */
    GetPlaytime(appId: number): Promise<Playtime | undefined>;

    GetPrePurchasedApps(appIds: number[]): Promise<PrePurchaseInfo>;

    /**
     * Retrieves the resolution override for a specific application.
     * @param {number} appId - The ID of the application to retrieve the resolution override for.
     * @returns {Promise<string>} A Promise that resolves to a string of the resolution override.
     */
    GetResolutionOverrideForApp(appId: number): Promise<string>;

    /**
     * Represents a function to retrieve detailed information about a specific screenshot.
     * @param {string} appId - The ID of the application the screenshot belongs to.
     * @param {number} hHandle - The handle of the screenshot.
     * @returns {Promise<Screenshot>} - A Promise that resolves to detailed information about the specified screenshot.
     */
    GetScreenshotInfo(appId: string, hHandle: number): Promise<Screenshot>;

    /**
     * Represents a function to retrieve screenshots within a specified time range.
     * @param {number} appId - The ID of the application.
     * @param {number} start - The start of the time range as a Unix timestamp.
     * @param {number} end - The end of the time range as a Unix timestamp.
     * @returns {Promise<Screenshot[]>} - A Promise that resolves to an array of screenshots taken within the specified time range.
     */
    GetScreenshotsInTimeRange(appId: number, start: number, end: number): Promise<Screenshot[]>;

    /**
     * Represents a function to retrieve shortcut data for a list of non-Steam app IDs.
     * @param {number[]} appIds - An array of non-Steam application IDs.
     * @returns {Promise<Shortcut[]>} - A Promise that resolves to an array of Shortcut objects for the specified non-Steam app IDs.
     */
    GetShortcutData(appIds: number[]): Promise<Shortcut[]>;

    /**
     * Retrieves shortcut data for a given shortcut file path.
     * @param {string} pathToShortcut The path to the shortcut file.
     * @returns {Promise<Shortcut>} A Promise that resolves to the shortcut data.
     */
    GetShortcutDataForPath(pathToShortcut: string): Promise<Shortcut>;

    /**
     * Represents a function to retrieve details about a soundtrack associated with a soundtrack application.
     * @param {number} appId - The ID of the soundtrack application.
     * @returns {Promise<SoundtrackDetails>} - A Promise that resolves to the details of the soundtrack associated with the specified soundtrack application.
     */
    GetSoundtrackDetails(appId: number): Promise<SoundtrackDetails>;

    GetStoreTagLocalization(tags: number[]): Promise<any>;

    /**
     * Retrieves a list of subscribed workshop items for a specific application.
     * @param {number} appId - The ID of the application to retrieve subscribed workshop items for.
     * @returns {Promise<WorkshopItem[]>} - A Promise that resolves to an array of subscribed workshop items for the specified application.
     */
    GetSubscribedWorkshopItems(appId: number): Promise<WorkshopItem[]>;

    InstallFlatpakAppAndCreateShortcut(param0: string, param1: string): Promise<any>; // returns {"appid":0,"strInstallOutput":""}
    JoinAppContentBeta: any;
    JoinAppContentBetaByPassword: any;

    ListFlatpakApps(): Promise<any>;

    LoadEula(appId: number): Promise<EndUserLicenseAgreement[]>; // Doesn't bring up the EULA dialog, just returns the eula data
    MarkEulaAccepted: any;
    MarkEulaRejected: any;

    /**
     * Opens the settings dialog for a specific application.
     * @param {number} appId - The ID of the application for which to open the settings dialog.
     * @param {string} param1 - Additional parameter (exact usage may vary).
     * @returns {void}
     */
    OpenAppSettingsDialog(appId: number, param1: string): void;

    PromptToChangeShortcut(): Promise<any>; // todo: unknown, prompts file picker
    RaiseWindowForGame(appId: number): any; // ResumeGameInProgress

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

    RegisterForAppOverviewChanges: Unregisterable | any; // CAppOverview_Change - binary deserializer???

    RegisterForDRMFailureResponse(callback: (appid: number, eResult: number, errorCode: number) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action ends.
     * @param {function} callback - The callback function to be called.
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
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionStart(callback: (gameActionIdentifier: number, appId: string, action: string, param3: number) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action task changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionTaskChange(callback: (gameActionIdentifier: number, appId: string, action: string, requestedAction: string, param4: string) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when a user requests a game action.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionUserRequest(callback: (gameActionIdentifier: number, appId: string, action: string, requestedAction: string, appId2: string) => void): Unregisterable | any;

    RegisterForLocalizationChanges: Unregisterable | any;

    RegisterForPrePurchasedAppChanges(callback: () => void): Unregisterable | any; // Unknown, did have it show up a few times, but not callback parameters
    RegisterForShowMarketingMessageDialog: Unregisterable | any;

    /**
     * Registers a callback function to be notified when workshop items are added or removed from a Steam application.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForWorkshopChanges(callback: (appId: number) => void): Unregisterable | any;

    RegisterForWorkshopItemDownloads(param0: number, callback: () => void): Unregisterable | any;

    /**
     * Removes a non-Steam application shortcut from the Steam library.
     * @param {number} appId - The ID of the application for which to remove the shortcut.
     * @returns {void}
     */
    RemoveShortcut(appId: number): void;

    /**
     * Removes a user tag from multiple Steam applications.
     * @param {number[]} appIds - An array of application IDs from which the user tag should be removed.
     * @param {string} userTag - The user tag to be removed.
     * @returns {void}
     * @remarks This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file.
     */
    RemoveUserTagFromApps(appIds: number[], userTag: string): void;

    ReportLibraryAssetCacheMiss(appId: number, assetType: AppArtworkAssetType): void;
    ReportMarketingMessageDialogShown: any;
    RequestIconDataForApp: any;
    RequestLegacyCDKeysForApp: any;
    ResetHiddenState: any;

    /**
     * Runs a game with specified parameters.
     * @param {string} appId - The ID of the application to run.
     * @param {string} param1 - Additional parameter (exact usage may vary).
     * @param {number} param2 - Additional parameter (exact usage may vary).
     * @param {number} param3 - Additional parameter (exact usage may vary).
     * @returns {any}
     */
    RunGame(appId: string, param1: string, param2: number, param3: number): any;

    SaveAchievementProgressCache: any;

    /**
     * Scans the system for installed non-Steam applications.
     * @returns {Promise<NonSteamApp[]>} A Promise that resolves to an array of NonSteamApp objects representing installed non-Steam applications.
     * @remarks This function scans the user's system for installed applications that are not part of the Steam library. It does not scan for shortcuts added to the Steam library.
     */
    ScanForInstalledNonSteamApps(): Promise<NonSteamApp[]>;

    /**
     * Sets the automatic update behavior for a Steam application.
     * @param {number} appId - The ID of the application to set the update behavior for.
     * @param {AutoUpdateBehavior} mode - The update behavior mode to set.
     * @returns {void}
     * @remarks This function only works with installed Steam applications.
     */
    SetAppAutoUpdateBehavior(appId: number, mode: AutoUpdateBehavior): void;

    /**
     * Sets the background downloads behavior for a specific Steam application.
     * @param {number} appId - The ID of the application to set the background downloads behavior for.
     * @param {BackgroundDownloadsBehavior} mode - The background downloads mode to set.
     * @returns {void}
     * @remarks This function only works with installed Steam applications.
     */
    SetAppBackgroundDownloadsBehavior(appId: number, mode: BackgroundDownloadsBehavior): void;

    /**
     * Sets the current language for a specific Steam application.
     * @param {number} appId - The ID of the application to set the current language for.
     * @param {string} language - The language to set, represented as a language (e.g., "english", "spanish", "tchinese", "schinese").
     * @returns {void}
     */
    SetAppCurrentLanguage(appId: number, language: string): void;

    /**
     * Sets the hidden status of a specific Steam application.
     * @param {number} appId - The ID of the application to set the hidden status for.
     * @param {boolean} value - The value indicating whether the application should be hidden (true) or not (false).
     * @returns {void}
     * @remarks This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file to set the hidden status of the specified application.
     */
    SetAppHidden(appId: number, value: boolean): void;

    /**
     * Sets launch options for a Steam application.
     * @param {number} appId - The ID of the application to set launch options for.
     * @param {string} launchOptions - The launch options to be set for the application.
     * @returns {void}
     */
    SetAppLaunchOptions(appId: number, launchOptions: string): void;

    /**
     * Sets a resolution override for a Steam application.
     * @param {number} appId - The ID of the application to set the resolution override for.
     * @param {string} resolution - The resolution to be set for the application. It can be "Default", "Native", or other compatible resolutions for the user's monitor.
     * @returns {void}
     */
    SetAppResolutionOverride(appId: number, resolution: string): any;

    SetCachedAppDetails: any;
    SetControllerRumblePreference(appId: number, param1: number): any; // param1 - enum for preference

    /**
     * Sets the custom artwork for a given application.
     * @param {number} appId - The ID of the application to set custom artwork for.
     * @param {string} base64Image - Base64 encoded image.
     * @param {string} imageType - "jpeg" or "png".
     * @param {AppArtworkAssetType} assetType - The type of artwork to set.
     * @returns {Promise<any>} A Promise that resolves after the custom artwork is set.
     */
    SetCustomArtworkForApp(appId: number, base64Image: string, imageType: string, assetType: AppArtworkAssetType): Promise<any>;

    SetCustomLogoPositionForApp(appId: number, param1: string): Promise<void>; // I've tried sending escaped LogoPosition JSON, but it doesn't seem to work

    SetDLCEnabled(appId: number, appDLCId: number, value: boolean): void;

    SetLocalScreenshotCaption(appId: string, param1: any, param2: any): void;
    SetLocalScreenshotPrivacy(appId: string, param1: any, param2: any): void;
    SetLocalScreenshotSpoiler(appId: string, param1: any, param2: any): void;

    /**
     * Sets the icon for a non-Steam application shortcut.
     * @param {string} appId - The ID of the application to set the shortcut icon for.
     * @param {string} iconPath - The path to the icon image (can be png or tga format).
     * @returns {void}
     */
    SetShortcutIcon(appId: number, iconPath: string): void;

    /**
     * Sets whether a non-Steam application shortcut should be included in the VR library.
     * @param {number} appId The ID of the application to set the VR status for.
     * @param {boolean} value A boolean indicating whether the application should be included in the VR library.
     * @returns {void}
     */
    SetShortcutIsVR(appId: number, value: boolean): void;

    /**
     * Sets launch options for a non-Steam application shortcut.
     * @param {number} appId - The ID of the application to set the launch options for.
     * @param {string} launchOptions - The launch options to be used when starting the application.
     * @returns {void}
     */
    SetShortcutLaunchOptions(appId: number, launchOptions: string): void;

    /**
     * Sets the name for a non-Steam application shortcut.
     * @param {number} appId - The ID of the application to set the shortcut name for.
     * @param {string} shortcutName - The name to be displayed for the application shortcut.
     * @returns {void}
     */
    SetShortcutName(appId: number, shortcutName: string): void;

    /**
     * Sets the starting directory for a non-Steam application shortcut.
     * @param {number} appId - The ID of the application to set the starting directory for.
     * @param {string} directory - The directory from which the application should be launched.
     * @returns {void}
     */
    SetShortcutStartDir(appId: number, directory: string): void;

    /**
     * Sets the client ID for streaming for a specific application.
     * @param {number} appId - The ID of the application.
     * @param {string} clientId - The client ID for streaming.
     */
    SetStreamingClientForApp(appId: number, clientId: string): void;

    SetThirdPartyControllerConfiguration: any;

    /**
     * Opens the controller configurator for a specific application.
     * @param {number} appId - The ID of the application for which to open the controller configurator.
     * @returns {void}
     */
    ShowControllerConfigurator(appId: number): void;

    /**
     * Opens the Steam store page for a specific application.
     * @param {number} appId - The ID of the application.
     * @returns {void}
     */
    ShowStore(appId: number): void;

    /**
     * Specifies a compatibility tool by its name for a given application. If strToolName is an empty string, the specified application will no longer use a compatibility tool.
     * @param {number} appId - The ID of the application to specify compatibility tool for.
     * @param {string} strToolName - The name of the compatibility tool to specify.
     * @returns {void}
     */
    SpecifyCompatTool(appId: number, strToolName: string): void;

    StreamGame(appId: number, clientId: string, param2: number): void;

    /**
     * Subscribes or unsubscribes from a workshop item for a specific app.
     * @param {number} appId - The ID of the application.
     * @param {string} workshopId - The ID of the workshop item.
     * @param {boolean} subscribed - True to subscribe, false to unsubscribe.
     * @returns {void}
     */
    SubscribeWorkshopItem(appId: number, workshopId: string, subscribed: boolean): void;

    /**
     * Terminates a running application.
     * @param {string} appId - The ID of the application to terminate.
     * @param {boolean} param1 - Additional parameter. Exact usage may vary.
     * @returns {void}
     */
    TerminateApp(appId: string, param1: boolean): void;

    ToggleAllowDesktopConfiguration: any;
    ToggleAppFamilyBlockedState: any;

    /**
     * Toggles the Steam Cloud synchronization for game saves for a specific application.
     * @param {number} appId - The ID of the application.
     * @returns {void}
     * @remarks This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file.
     */
    ToggleAppSteamCloudEnabled(appId: number): void;

    ToggleAppSteamCloudSyncOnSuspendEnabled: any;

    /**
     * Toggles the Steam Overlay setting for a specific application.
     * @param {number} appId - The ID of the application.
     * @returns {void}
     */
    ToggleEnableSteamOverlayForApp(appId: number): void;

    ToggleOverrideResolutionForInternalDisplay: any;
    UninstallFlatpakApp: any;

    /**
     * Verifies the integrity of an app's files.
     * @param {number} appId - The ID of the app to verify.
     */
    VerifyApp(appId: number): Promise<any>; // todo: returns {"nGameActionID":9}
}

export interface Auth {
    GetLocalHostname(): Promise<string>;

    GetMachineID(): Promise<ArrayBuffer>;

    GetRefreshInfo(): Promise<AuthRefreshInfo>;

    GetSteamGuardData: any;

    IsSecureComputer(): Promise<boolean>;

    SetLoginToken: any;
    SetSteamGuardData: any;
    StartSignInFromCache(param0: any, login: string): Promise<any>;
}

// Broadcasting support hasn't been implemented on Linux yet
export interface Broadcast {
    /**
     * Approves a viewer request for the broadcast.
     * @param {string} steamId64 - The SteamID64 of the user whose request is to be approved.
     * @param {number} param1 - Unknown parameter.
     */
    ApproveViewerRequest(steamId64: string, param1: number): void;

    /**
     * Invites a user identified by their SteamID64 to watch the broadcast.
     * @param {string} steamId64 - The SteamID64 of the user to invite.
     * @returns {Promise<number>} - A Promise indicating the result of the invitation (1 for success, 2 for error).
     */
    InviteToWatch(steamId64: string): Promise<number>;

    /**
     * Registers a callback to be called when the broadcast status changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForBroadcastStatus(callback: (broadcastStatus: BroadcastStatus) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when viewer requests are received.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForViewerRequests(callback: (viewerFriendCode: number, param1: number, param2: number) => void): Unregisterable | any;

    /**
     * Rejects a viewer request for the broadcast.
     * @param {string} steamId64 - The SteamID64 of the user whose request is to be rejected.
     * @param {number} param1 - Unknown parameter.
     */
    RejectViewerRequest(steamId64: string, param1: number): void;

    /**
     * Stops the broadcast.
     * @returns {void}
     */
    StopBroadcasting(): void;
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
    HideCursorUntilMouseEvent(): any;

    InspectElement(clientY: any, clientX: any): any; // yup that's right, clientY and clientX are reversed

    NotifyUserActivation: any;

    OpenDevTools(): void;

    RegisterForGestureEvents: Unregisterable | any;
    RegisterForOpenNewTab: Unregisterable | any;
    SetShouldExitSteamOnBrowserClosed: any;
    SetTouchGesturesToCancel: any;
    StartDownload: any;
}

export interface BrowserView {
    /*
    param0 - {
            parentPopupBrowserID: e.SteamClient.Browser.GetBrowserID(),
            strUserAgentIdentifier: i,
            strVROverlayKey: a,
            strInitialURL: r,
            bOnlyAllowTrustedPopups: o
        }
     */
    Create(param0: any): any;
    CreatePopup: any;
    Destroy(param0: any): any;
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
     * @param {string} command - The command to execute in the console.
     * @returns {void}
     */
    ExecCommand(command: string): void;

    /**
     * Retrieves autocomplete suggestions for a given console command.
     * @param {string} command - The console command to provide autocomplete suggestions for.
     * @returns {Promise<string[]>} - A Promise that resolves to an array of autocomplete suggestions.
     */
    GetAutocompleteSuggestions(command: string): Promise<string[]>;

    /**
     * Registers a callback function to receive spew output.
     * @param {function} callback - The callback function that will receive spew output.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForSpewOutput(callback: (spewOutput: SpewOutput) => void): Unregisterable | any;
}

export interface Customization {
    GenerateLocalStartupMoviesThumbnails: any;
    GetDownloadedStartupMovies(param0: any): Promise<any>;
    GetLocalStartupMovies(): Promise<any>;
}

/**
 * Represents functions related to managing downloads in Steam.
 */
export interface Downloads {
    /**
     * Enables or disables all downloads in Steam.
     * @param {boolean} enable - True to enable downloads, false to disable.
     */
    EnableAllDownloads(enable: boolean): void;

    /**
     * Moves the update for a specific app down the download queue.
     * @param {number} appId - The ID of the application to move.
     * @returns {void}
     */
    MoveAppUpdateDown(appId: number): void;

    /**
     * Moves the update for a specific app up the download queue.
     * @param {number} appId - The ID of the application to move.
     * @returns {void}
     */
    MoveAppUpdateUp(appId: number): void;

    PauseAppUpdate(appId: number): void; // Broken? It seems to be removing it from download list like RemoveFromDownloadList

    /**
     * Adds the update for a specific app to the download queue.
     * @param {number} appId - The ID of the application to queue.
     * @returns {void}
     */
    QueueAppUpdate(appId: number): void;

    /**
     * Registers a callback function to be called when download items change.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDownloadItems(callback: (isDownloading: boolean, downloadItems: DownloadItem[]) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when download overview changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDownloadOverview(callback: (downloadOverview: DownloadOverview) => void): Unregisterable | any;

    /**
     * Removes the update for a specific app from the download list and places it in the unscheduled list.
     * @param {number} appId - The ID of the application to remove.
     * @returns {void}
     */
    RemoveFromDownloadList(appId: number): void;

    /**
     * Resumes the update for a specific app in the queue.
     * @param {number} appId - The ID of the application to resume.
     * @returns {void}
     */
    ResumeAppUpdate(appId: number): void;

    /**
     * Sets an app to launch when its download is complete.
     * @param {number} appId - The ID of the application to set.
     * @returns {void}
     * @todo: unsure if this toggles though
     */
    SetLaunchOnUpdateComplete(appId: number): void;

    /**
     * Sets the queue index for an app in the download queue.
     * @param {number} appId - The ID of the application to set the index for.
     * @param {number} index - The index to set.
     * @returns {void}
     * @remarks Index of 0 is the current download in progress.
     */
    SetQueueIndex(appId: number, index: number): void;

    /**
     * Suspends or resumes download throttling.
     * @param {boolean} suspend - Whether to suspend or resume download throttling.
     * @returns {void}
     */
    SuspendDownloadThrottling(suspend: boolean): void;

    /**
     * Suspends or resumes local transfers.
     * @param {boolean} suspend - Whether to suspend or resume local transfers.
     * @returns {void}
     */
    SuspendLanPeerContent(suspend: boolean): void;
}

/**
 * Represents functions related to Steam Family Sharing.
 */
export interface FamilySharing {
    /**
     * Authorizes library sharing on the local device.
     * @returns {Promise<number>} A Promise that resolves to a status code.
     */
    AuthorizeLocalDevice(): Promise<number>;

    /**
     * Deauthorizes library sharing on the local device.
     * @returns {Promise<number>} A Promise that resolves to a status code.
     */
    DeauthorizeLocalDevice(): Promise<number>;

    RegisterForKickedBorrower: any;

    RequestLocalDeviceAuthorization(param0: string): Promise<number>; // Unknown param0, my assumption is probably a steam64Id of the user sharing the library
    UpdateAuthorizedBorrower(param0: number, param1: boolean): Promise<number>; // Unknown
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

/**
 * Represents functions related to managing friends in Steam.
 */
export interface Friends {
    /**
     * Adds a user to the friend list.
     * @param {string} steamId - The Steam ID of the user to add as a friend.
     * @returns {Promise<boolean>} A Promise that resolves to true if the friend was added successfully, false otherwise.
     */
    AddFriend(steamId: string): Promise<boolean>;

    GetCoplayData(): Promise<any>; // {"recentUsers":[], "currentUsers":[]}
    InviteUserToCurrentGame: any;

    /**
     * Invites a user to a specific game.
     * @param {string} steamId - The Steam ID of the user to invite.
     * @param {number} appId - The ID of the game to invite the user to.
     * @param {string} param2 - Additional parameters for the invitation.
     * @returns {Promise<boolean>} A Promise that resolves to true if the user was invited successfully, false otherwise.
     */
    InviteUserToGame(steamId: string, appId: number, param2: string): Promise<boolean>;
    InviteUserToLobby: any;
    InviteUserToRemotePlayTogetherCurrentGame: any;
    RegisterForVoiceChatStatus: any;

    /**
     * Removes a user from the friend list.
     * @param {string} steamId - The Steam ID of the user to remove from the friend list.
     * @returns {Promise<boolean>} A Promise that resolves to true if the friend was removed successfully, false otherwise.
     */
    RemoveFriend(steamId: string): Promise<boolean>;
}

export interface GameNotes {
    DeleteImage(param0: any): any;
    DeleteNotes: any;
    /*
        FilenameForNotes(e) {
        return "appid" in e ? `notes_${Number(e.appid)}` : `notes_shortcut_${h(e.shortcut)}`
    }
    DirectoryForNoteImages(e) {
        return "appid" in e ? `notes_${Number(e.appid)}_images/` : `notes_shortcut_${h(e.shortcut)}_images/`
    }
     */
    // {"result":1,"notes":"<escaped json>"}
    // <escaped json> example: {"notes":[{"id":"lmuudzqn","appid":1716740,"ordinal":0,"time_created":1695401684,"time_modified":1695403395,"title":"Old Earth Cuisine 1:","content":"[h1]Old Earth Cuisine 1:[/h1][list][*][p]Red Meat[/p][/*][/list][h1]Beverage Development 2:[/h1][list][*][p]Tranquilitea Sunray[/p][/*][/list][p][/p]"}]}
    GetNotes(filenameForNotes: string, directoryForNoteImages: string): Promise<any>;
    GetNotesMetadata: any;
    GetNumNotes: any;
    GetQuota: any;

    IterateNotes(appId: number, length: number): any; // Results array of {"result":1,"filename":"","filesize":0,"timestamp":0}
    ResolveSyncConflicts: any;
    SaveNotes(filenameForNotes: string, param1: string): Promise<any>; // param1 - notes like escaped json in GetNotes
    SyncToClient(): Promise<any>;
    SyncToServer(): Promise<any>;
    UploadImage: any;
}

/**
 * Represents functions related to Steam Game Sessions.
 */
export interface GameSessions {
    /**
     * Registers a callback function to be called when an achievement notification is received.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAchievementNotification(callback: (achievementNotification: AchievementNotification) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when an app lifetime notification is received.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppLifetimeNotifications(callback: (appLifetimeNotification: AppLifetimeNotification) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when a screenshot notification is received.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForScreenshotNotification(callback: (screenshotNotification: ScreenshotNotification) => void): Unregisterable | any;
}

/**
 * Represents functions related to input and controllers in Steam.
 */
export interface Input {
    /**
     * Checks if the specified controller is a Steam Controller.
     * @param {function} callback - The callback function to receive the result.
     */
    BIsSteamController(callback: (steamController: boolean) => void): void;

    /**
     * Checks if the specified controller supports LED color.
     * @param {function} callback - The callback function to receive the result.
     */
    BSupportsControllerLEDColor(callback: (supportControllerLEDColor: boolean) => void): void;

    CalibrateControllerIMU(param0: any): any; // param0 - m_controllerStateDeviceIdx
    CalibrateControllerJoystick(param0: any): any; // param0 - m_controllerStateDeviceIdx
    CalibrateControllerTrackpads(param0: any): any; // param0 - m_controllerStateDeviceIdx
    CancelGyroSWCalibration: any;
    ClearSelectedConfigForApp(param0: any, param1: any): any; // param0 - appid, param1 - controllerIndex
    CloseDesktopConfigurator: any;
    ControllerKeyboardSendText(key: any): any; //???
    ControllerKeyboardSetKeyState(key: number, state: boolean): any;
    DeauthorizeControllerAccount: any;
    DecrementCloudedControllerConfigsCounter: any;
    DeletePersonalControllerConfiguration: any;
    DuplicateControllerConfigurationSourceMode: any;
    EndControllerDeviceSupportFlow(): any;
    ExportCurrentControllerConfiguration: any;
    ForceConfiguratorFocus: any;
    ForceSimpleHapticEvent: any;
    FreeControllerConfig: any;

    GetConfigForAppAndController(appId: number, unControllerIndex: number): any;

    /**
     * Retrieves the controller mapping string for the specified controller index.
     * @param {number} unControllerIndex - The controller index.
     * @returns {Promise<string>} - A Promise that resolves to the controller mapping string.
     */
    GetControllerMappingString(unControllerIndex: number): Promise<string>;

    GetControllerPreviouslySeen: any;

    GetSteamControllerDongleState(): Promise<boolean>;
    GetTouchMenuIconsForApp(param0: any): Promise<any>;// param0 - app?
    GetXboxDriverInstallState(): Promise<any>;
    IdentifyController: any;
    InitControllerSounds: any;
    InitializeControllerPersonalizationSettings: any;
    ModalKeyboardDismissed(): void;
    OpenDesktopConfigurator: any;
    PreviewConfiguForAppAndController: any;
    PreviewControllerLEDColor(flHue: number, flSaturation: number, flBrightness: number): any;
    QueryControllerConfigsForApp: any;
    RegisterForActiveControllerChanges: Unregisterable | any; // {"nActiveController":0}
    RegisterForConfigSelectionChanges(callback: (param0: number, param1: number) => void): Unregisterable | any;

    RegisterForControllerAccountChanges: Unregisterable | any;

    RegisterForControllerAnalogInputMessages(callback: (controllerAnalogInputMessages: ControllerAnalogInputMessage[]) => void): Unregisterable | any;

    RegisterForControllerCommandMessages(callback: (controllerCommandMessage: ControllerCommandMessage) => void): Unregisterable | any;

    /**
     * Registers a callback for changes in controller configuration cloud state.
     * @param {(controllerConfigCloudStateChange: ControllerConfigCloudStateChange) => void} callback - The callback function for config cloud state changes.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForControllerConfigCloudStateChanges(callback: (controllerConfigCloudStateChange: ControllerConfigCloudStateChange) => void): Unregisterable | any;

    /**
     * Registers a callback for receiving controller configuration info messages (controller layouts query, personal controller layout query).
     * @param {(controllerConfigInfoMessages: ControllerConfigInfoMessageList[] | ControllerConfigInfoMessageQuery[]) => void} callback - The callback function for controller config info messages.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @remarks Do Not Use, this will break the controller layout selection unless you know what you are doing.
     */
    RegisterForControllerConfigInfoMessages(callback: (controllerConfigInfoMessages: ControllerConfigInfoMessageList[] | ControllerConfigInfoMessageQuery[]) => void): Unregisterable | any;

    /**
     * Registers a callback function to be invoked when controller input messages are received.
     * @param {(controllerInputMessages: ControllerInputMessage[]) => void} callback - The callback function to be invoked when controller input messages are received.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForControllerInputMessages(callback: (controllerInputMessages: ControllerInputMessage[]) => void): Unregisterable | any;


    RegisterForControllerListChanges(callback: (controllerListChanges: ControllerInfo[]) => void): Unregisterable | any;

    /**
     * Registers a callback for changes in the controller state (buttons presses, triggers presses, joystick changes etc...).
     * @param {(controllerStateChanges: ControllerStateChange[]) => void} callback - The callback function for controller state changes.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForControllerStateChanges(callback: (controllerStateChanges: ControllerStateChange[]) => void): Unregisterable | any;

    RegisterForDualSenseUpdateNotification: Unregisterable | any;

    /**
     * Registers a callback for receiving game keyboard messages (text field popup for inputting text for games when in character creation or etc...).
     * @param {(gameKeyboardMessage: GameKeyboardMessage) => void} callback - The callback function for game keyboard messages.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameKeyboardMessages(callback: (gameKeyboardMessage: GameKeyboardMessage) => void): Unregisterable | any;

    RegisterForRemotePlayConfigChanges: Unregisterable | any;
    RegisterForShowControllerLayoutPreviewMessages: Unregisterable | any;
    RegisterForTouchMenuInputMessages: Unregisterable | any;

    RegisterForTouchMenuMessages(callback: (touchMenuMessage: TouchMenuMessage) => void): Unregisterable | any;

    RegisterForUIVisualization: Unregisterable | any;

    RegisterForUnboundControllerListChanges(callback: (param0: any) => void): Unregisterable | any; // param0 is an array
    RegisterForUserDismissKeyboardMessages: Unregisterable | any;
    RegisterForUserKeyboardMessages: Unregisterable | any;
    RequestGyroActive: any;
    RequestRemotePlayControllerConfigs: any;
    ResetControllerBindings(param0: any): any;
    ResolveCloudedControllerConfigConflict: any;
    RestoreControllerPersonalizationSettings: any;
    SaveControllerCalibration: any;
    SaveControllerPersonalizationSettings: any;
    SaveControllerSounds: any;
    SaveEditingControllerConfiguration: any;
    SetActiveControllerAccount: any;
    SetControllerConfigurationModeShiftBinding: any;
    SetControllerHapticSetting: any;
    SetControllerMappingString(mapping: string): void;
    SetControllerName: any;
    SetControllerNintendoLayoutSetting: any;
    SetControllerPersonalizationName: any;
    //param0 - nLStickDeadzone, bSWAntiDrift, nRHapticStrength, flRPadPressureCurve
    SetControllerPersonalizationSetting(param0: string, param1: number): any;
    //param0 - flGyroStationaryTolerance, flAccelerometerStationaryTolerance
    SetControllerPersonalizationSettingFloat(param0: string, param1: number): any;
    SetControllerRumbleSetting: any;
    SetCursorActionset: any;
    SetEditingControllerConfigurationActionSet: any;
    SetEditingControllerConfigurationInputActivator: any;
    SetEditingControllerConfigurationInputActivatorEnabled: any;
    SetEditingControllerConfigurationInputBinding: any;
    SetEditingControllerConfigurationMiscSetting: any;
    SetEditingControllerConfigurationSourceMode: any;
    SetGamepadKeyboardText(param0: boolean, param1: string): any;
    SetKeyboardActionset(param0: boolean): any;

    SetMousePosition: any;

    SetSelectedConfigForApp: any;
    SetSteamControllerDonglePairingMode: any;
    SetVirtualMenuKeySelected(unControllerIndex: number, unMenuIndex: number, param2: number): any; //
    SetWebBrowserActionset: any;
    SetXboxDriverInstallState(param0: any): any; // state

    /**
     * Opens the Steam Input controller settings.
     * This function displays the Steam Input controller settings for configuration.
     * @returns {void}
     */
    ShowControllerSettings(): void;

    StandaloneKeyboardDismissed: any;
    StartControllerDeviceSupportFlow(param0: any, param1: any, callback: (param2: any) => void): any;
    StartEditingControllerConfigurationForAppIDAndControllerIndex: any;
    StartGyroSWCalibration: any;
    StopEditingControllerConfiguration: any;
    SwapControllerModeInputBindings: any;
    SwapControllerOrder: any;
    SyncCloudedControllerConfigs: any;
    TriggerHapticPulse: any;
    TriggerSimpleHapticEvent: any;
    UnregisterForControllerStateChanges(): void;
    UnregisterForUIVisualization: any;
    UploadChangesForCloudedControllerConfigs: any;
}

/**
 * Represents functions related to Steam Install Folders.
 */
export interface InstallFolder {
    /**
     * Adds a Steam Library folder to the Steam client.
     * @param {string} steamLibraryPath - The path of the Steam Library folder to be added.
     * @returns {Promise<number>} - A Promise that resolves to the index of the added folder.
     */
    AddInstallFolder(steamLibraryPath: string): Promise<number>;

    /**
     * Opens the file explorer to browse files in a specific Steam Library folder.
     * @param {number} folderIndex - The index of the folder to be opened.
     * @returns {void}
     */
    BrowseFilesInFolder(folderIndex: number): void;

    /**
     * Cancels the current move operation for moving game content.
     * @returns {void}
     */
    CancelMove(): void;

    /**
     * Retrieves a list of installed Steam Library folders.
     * @returns {Promise<SteamInstallFolder[]>} - A Promise that resolves to an array of SteamInstallFolder objects.
     */
    GetInstallFolders(): Promise<SteamInstallFolder[]>;

    /**
     * Retrieves a list of potential Steam Library folders that can be added.
     * @returns {Promise<PotentialInstallFolder[]>} - A Promise that resolves to an array of PotentialInstallFolder objects.
     */
    GetPotentialFolders(): Promise<PotentialInstallFolder[]>;

    /**
     * Moves the installation folder for a specific app to another Steam Library folder.
     * @param {number} appId - The ID of the application to be moved.
     * @param {number} folderIndex - The index of the target Steam Library folder.
     * @returns {void}
     */
    MoveInstallFolderForApp(appId: number, folderIndex: number): void;

    /**
     * Refreshes the list of installed Steam Library folders.
     * @returns {any} - A Promise or response indicating the refresh operation.
     */
    RefreshFolders(): any;

    /**
     * Registers a callback function to be called when changes occur in Steam Install Folders.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForInstallFolderChanges(callback: (folderChange: FolderChange) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when moving game content progresses.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMoveContentProgress(callback: (moveContentProgress: MoveContentProgress) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when repairing an install folder is finished.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForRepairFolderFinished(callback: (folderChange: FolderChange) => void): Unregisterable | any;

    /**
     * Removes a Steam Library folder from the Steam client.
     * @param {number} folderIndex - The index of the folder to be removed.
     * @returns {void}
     */
    RemoveInstallFolder(folderIndex: number): void;

    /**
     * Repairs an installed Steam Library folder.
     * @param {number} folderIndex - The index of the folder to be repaired.
     * @returns {void}
     */
    RepairInstallFolder(folderIndex: number): void;

    /**
     * Sets a specific Steam Library folder as the default install folder.
     * @param {number} folderIndex - The index of the folder to be set as default.
     * @returns {void}
     */
    SetDefaultInstallFolder(folderIndex: number): void;

    /**
     * Sets a user-defined label for a specific Steam Library folder.
     * @param {number} folderIndex - The index of the folder to be labeled.
     * @param {string} userLabel - The label to be assigned to the folder.
     * @returns {void}
     */
    SetFolderLabel(folderIndex: number, userLabel: string): void;
}

/**
 * Represents functions related to managing installs and installation wizards in Steam.
 */
export interface Installs {
    /**
     * Cancels the installation wizard if it is open.
     * @returns {void}
     */
    CancelInstall(): void;

    /**
     * Continues and starts the installation if the wizard is still open.
     * @returns {void}
     */
    ContinueInstall(): void;

    /**
     * Retrieves information from the last opened or currently opened installation wizard.
     * @returns {Promise<InstallInfo>} A Promise that resolves to the InstallInfo.
     */
    GetInstallManagerInfo(): Promise<InstallInfo>;

    /**
     * Opens the restore from backup installer wizard for a specific app.
     * @param {string} appBackupPath - The backup path of the app.
     * @returns {void}
     */
    OpenInstallBackup(appBackupPath: string): void;

    /**
     * Opens the installation wizard for specified app IDs.
     * @param {number[]} appIds - An array of app IDs to install.
     * @returns {void}
     */
    OpenInstallWizard(appIds: number[]): void;

    /**
     * Opens the uninstall wizard for specified app IDs.
     * @param {number[]} appIds - An array of app IDs to uninstall.
     * @param {boolean} param1 - Additional parameter (exact usage may vary).
     * @returns {any} - Returns an unknown value.
     */
    OpenUninstallWizard(appIds: number[], param1: boolean): any;

    RegisterForShowConfirmUninstall: Unregisterable | any; // Broken? doesn't seem to work

    /**
     * Registers a callback function to be called when the "Failed Uninstall" dialog is shown.
     * @param {function} callback - The callback function to be called when the dialog is shown.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @remarks For example, a `reason` code of 16 indicates that the app is currently running, preventing the uninstallation.
     * @todo Document other reason codes.
     */
    RegisterForShowFailedUninstall(callback: (appId: number, reason: number) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the installation wizard is shown.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForShowInstallWizard(callback: (data: InstallInfo) => void): Unregisterable | any;

    RegisterForShowRegisterCDKey: any;

    /**
     * Sets a list of app identifiers for downloads in the installation wizard.
     * @param {number[]} appIds - An array of app IDs to set.
     * @returns {void}
     * @remarks The wizard will not reflect this change immediately, but changing another option will.
     */
    SetAppList(appIds: number[]): void;

    /**
     * Sets the options for creating shortcuts in the installation wizard.
     * @param {boolean} bDesktopShortcut - Whether to create a desktop shortcut.
     * @param {boolean} bSystemMenuShortcut - Whether to create a system menu shortcut.
     * @returns {void}
     * @remarks The wizard will not reflect this change immediately, but changing another option will.
     */
    SetCreateShortcuts(bDesktopShortcut: boolean, bSystemMenuShortcut: boolean): void;

    /**
     * Sets the install folder for the installation wizard using an install folder index.
     * @param {number} folderIndex - The index of the install folder.
     * @returns {void}
     * @remarks The wizard will not reflect this change immediately, but changing another option will.
     */
    SetInstallFolder(folderIndex: number): void;
}

export interface Messaging {
    // section - "ContentManagement", "JumpList", "PostToLibrary"
    // seems multipurpose
    RegisterForMessages(section: string, callback: (param0: any) => void): Unregisterable | any;

    /*
    function m(e) {
        SteamClient.Messaging.PostMessage("LibraryCommands", "ShowFriendChatDialog", JSON.stringify({
            steamid: e.persona.m_steamid.ConvertTo64BitString()
        }))
    }
     */
    PostMessage(section: string, param1: string, param2: string): void;
}

/**
 * Represents functions related to controlling music playback in the Steam client.
 */
export interface Music {
    /**
     * Decreases the music volume by 10%.
     */
    DecreaseVolume(): void;

    /**
     * Increases the music volume by 10%.
     */
    IncreaseVolume(): void;

    /**
     * @param {number} param0 - Unknown parameter usage.
     * @param {number} param1 - Unknown parameter usage.
     * @todo: unknown parameter usages, I have tried soundtrack identifier + track index and in reverse as well
     */
    PlayEntry(param0: number, param1: number): void;

    /**
     * Plays the next track in the music playlist.
     */
    PlayNext(): void;

    /**
     * Plays the previous track in the music playlist.
     */
    PlayPrevious(): void;

    /**
     * Registers a callback function to be called when music playback changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMusicPlaybackChanges(callback: (param0: boolean | MusicTrack) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the music playback position changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMusicPlaybackPosition(callback: (position: number) => void): Unregisterable | any;

    /**
     * Sets the playback position of the music track.
     * @param {number} position - The position to set in seconds.
     */
    SetPlaybackPosition(position: number): void;

    /**
     * Sets the repeat status for music playback.
     * @param {number} status - The repeat status. 0 = off, 1 = repeat all, 2 = repeat one.
     */
    SetPlayingRepeatStatus(status: number): void;

    /**
     * Sets the shuffle status for music playback.
     * @param {boolean} value - True to enable shuffle, false to disable shuffle.
     */
    SetPlayingShuffled(value: boolean): void;

    /**
     * Sets the volume for music playback.
     * @param {number} volume - The volume level to set.
     */
    SetVolume(volume: number): void;

    /**
     * Toggles the mute state of the music volume.
     */
    ToggleMuteVolume(): void;

    /**
     * Toggles between play and pause for music playback.
     */
    TogglePlayPause(): void;
}

export interface Notifications {
    RegisterForNotifications(callback: (param0: number, param1: number, param2: ArrayBuffer) => void): Unregisterable | any;
}

export interface VRDevice {
    BIsConnected: any;
    BVRDeviceSeenRecently: any;
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
    Hide(): any;
    RegisterForStatus: Unregisterable | any;
    SendDone(): any;
    SendText(key: string): any; //???
    Show(): any;
}

export interface PathProperties {
    GetBoolPathProperty: any;
    GetDoublePathProperty: any;
    GetFloatPathProperty: any;
    GetInt32PathProperty: any;
    GetStringPathProperty: any;
    RegisterForPathPropertyChange: any;
    SetBoolPathProperty: any;
    SetDoublePathProperty: any;
    SetFloatPathProperty: any;
    SetInt32PathProperty: any;
    SetStringPathProperty: any;
}

export interface VROverlay {
    HideDashboard: any;
    RegisterForButtonPress: Unregisterable | any;
    RegisterForCursorMovement: Unregisterable | any;
    RegisterForVisibilityChanged: Unregisterable | any;
    ShowDashboard: any;
}

export interface OpenVR {
    Device: VRDevice;
    DeviceProperties: DeviceProperties;
    GetWebSecret: any;
    InstallVR: any;
    Keyboard: Keyboard;
    PathProperties: PathProperties;
    QuitAllVR: any;
    RegisterForButtonPress: Unregisterable | any;
    RegisterForHMDActivityLevelChanged: Unregisterable | any;
    RegisterForInstallDialog: Unregisterable | any;
    RegisterStartupErrors: Unregisterable | any;
    RegisterForVRHardwareDetected: Unregisterable | any;
    SetOverlayInteractionAffordance: any;
    ShowNotification: any;
    StartVR: any;
    TriggerOverlayHapticEffect: any;
    VROverlay: VROverlay;
}

export interface Overlay {
    /**
     * Destroys the gamepad UI desktop configurator window if open.
     * @returns {void}
     */
    DestroyGamePadUIDesktopConfiguratorWindow(): void;

    GetOverlayBrowserInfo: any;
    HandleGameWebCallback: any;
    HandleProtocolForOverlayBrowser: any;
    RegisterForActivateOverlayRequests: Unregisterable | any;

    /**
     * Registers a callback function to be called when a microtransaction authorization is requested.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuth(callback: (appId: number, microTxnId: string, param2: number, microTxnUrl: string) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when a microtransaction authorization is dismissed by the user in Steam's authorization page.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuthDismiss(callback: (appId: number, microTxnId: string) => void): Unregisterable | any;

    RegisterForNotificationPositionChanged: Unregisterable | any;

    /**
     * Registers a callback function to be called when an overlay is activated or closed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForOverlayActivated(callback: (popUpContextId: number, appId: number, active: boolean, param3: boolean) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the overlay browser protocols change.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForOverlayBrowserProtocols(callback: (browseProtocols: OverlayBrowserProtocols) => void): Unregisterable | any;

    /**
     * Registers **the** callback function to be called when the overlay browser information changes.
     * @param {function} callback - The callback function to be called when the overlay browser information changes.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @remarks Do Not Use, this will break the overlay unless you know what you are doing.
     */
    RegisterOverlayBrowserInfoChanged(callback: () => void): Unregisterable | any;

    SetOverlayState(appId: number, uiComposition: UIComposition): any;
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

    BCanHostIsolatedGameAudio(): Promise<boolean>;

    BEnabled(): Promise<boolean>;

    BRemotePlayTogetherGuestOnPhoneOrTablet: any;

    BRemotePlayTogetherGuestSupported(): Promise<boolean>;

    CancelInviteAndSession: any;
    CancelInviteAndSessionWithGuestID: any;
    CloseGroup: any;
    CreateGroup: any;
    CreateInviteAndSession: any;
    CreateInviteAndSessionWithGuestID: any;

    GetClientStreamingBitrate(): Promise<number>; //todo: -1 not streaming??
    GetClientStreamingQuality(): Promise<number>; //todo: -1 not streaming??
    GetControllerType(param0: number): Promise<ControllerType>; // todo: param0 with value 0 is host controller type - param0 is likely an index of clients or guestId?
    GetGameSystemVolume(): Promise<number>;

    GetPerUserInputSettings: any;
    GetPerUserInputSettingsWithGuestID: any;
    IdentifyController: any;
    InstallAudioDriver: any;
    InstallInputDriver: any;
    MoveControllerToSlot: any;
    RegisterForAdditionalParentalBlocks: Unregisterable | any;
    RegisterForAudioDriverPrompt: Unregisterable | any;
    RegisterForBitrateOverride: Unregisterable | any;
    RegisterForControllerIndexSet: Unregisterable | any;

    RegisterForDevicesChanges(callback: (devicesChange: RemotePlayDevice[]) => void): Unregisterable | any;

    RegisterForGroupCreated: Unregisterable | any;
    RegisterForGroupDisbanded: Unregisterable | any;
    RegisterForInputDriverPrompt: Unregisterable | any;
    RegisterForInputDriverRestartNotice: Unregisterable | any;

    RegisterForInputUsed(callback: (param0: string, param1: number, param2: number) => void): Unregisterable | any; // only fires on host

    RegisterForInviteResult: Unregisterable | any;

    RegisterForNetworkUtilizationUpdate(callback: (param0: string, param1: number, param2: number, param3: number) => void): Unregisterable | any; // only fires on host

    RegisterForPlaceholderStateChanged: Unregisterable | any;
    RegisterForPlayerInputSettingsChanged: Unregisterable | any;
    RegisterForQualityOverride: Unregisterable | any;
    RegisterForRemoteClientLaunchFailed: Unregisterable | any;

    RegisterForRemoteClientStarted(callback: (steam64Id: string, appId: number) => void): Unregisterable | any; // only fires on client

    RegisterForRemoteClientStopped(callback: (steam64Id: string, appId: number) => void): Unregisterable | any; // only fires on client

    RegisterForSettingsChanges(callback: (remotePlaySettings: RemotePlaySettings) => void): Unregisterable | any;

    SetClientStreamingBitrate: any;
    SetClientStreamingQuality: any;

    SetGameSystemVolume(volume: number): void;

    SetPerUserControllerInputEnabled: any;
    SetPerUserControllerInputEnabledWithGuestID: any;
    SetPerUserKeyboardInputEnabled: any;
    SetPerUserKeyboardInputEnabledWithGuestID: any;
    SetPerUserMouseInputEnabled: any;
    SetPerUserMouseInputEnabledWithGuestID: any;
    SetRemoteDeviceAuthorized: any;
    SetRemoteDevicePIN(pin: number): void;
    SetRemotePlayEnabled: any;
    SetStreamingClientConfig: any;
    SetStreamingClientConfigEnabled: any;
    SetStreamingDesktopToRemotePlayTogetherEnabled: any;
    SetStreamingP2PScope: any;
    SetStreamingServerConfig: any;
    SetStreamingServerConfigEnabled: any;

    StopStreamingClient(): void;

    StopStreamingSession: any;
    StopStreamingSessionAndSuspendDevice: any;
    UnlockH264: any;

    UnpairRemoteDevices(): void;// unpairs all devices
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
     * @param {number} filePrivacyState - The privacy state of the screenshot file.
     * @returns {Promise<boolean>} - A Promise that resolves to a boolean value indicating whether the upload was successful.
     */
    UploadLocalScreenshot(appId: string, localScreenshot_hHandle: number, filePrivacyState: FilePrivacyState): Promise<boolean>;
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

    // Returns the current timezone
    GetTimeZone(): Promise<string>;

    GetWindowed(): Promise<boolean>;

    IgnoreSteamDeckRewards: any;
    OpenWindowsMicSettings: any;
    RegisterForMicVolumeUpdates: Unregisterable | any;
    RegisterForSettingsArrayChanges: Unregisterable | any;

    RegisterForSettingsChanges(callback: (steamSettings: SteamSettings) => void): Unregisterable | any;

    RegisterForTimeZoneChange(callback: (timezoneId: string) => void): Unregisterable | any; // When timezone is changed from settings, callback will return new timezoneId
    ReinitMicSettings: any;
    RequestDeviceAuthInfo(): any;
    //
    SelectClientBeta(nBetaID: any): any;

    // Get from available languages
    SetCurrentLanguage(strShortName: string): void;

    SetEnableSoftProcessKill(value: boolean): void; // Default value is false, this is Valve internal menu

    SetHostname: any;
    SetMicTestMode: any;

    SetOOBETestMode(value: boolean): void;

    SetPreferredMonitor: any;
    SetRegisteredSteamDeck: any;
    SetSaveAccountCredentials: any;
    SetSetting: any;
    SetSteamPlayEnabled: any;

    SetTimeZone(timezoneId: string): void; // You can get valid timezoneIds from GetAvailableTimeZones()
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
    // param0 - AppDetailsReviewSection, Showcases, LibraryReviewSpotlight
    // param1 -
    // AppDetailsReviewSection: PositiveClicked, NegativeClicked, NeutralClicked, PositiveReviewPosted, NegativeReviewPosted, EditClicked, ReviewCanceled
    // LibraryReviewSpotlight: ReviseClicked, PositiveClicked, ReviseCloseClicked, NegativeClicked, PositiveRevisePosted, NegativeRevisePosted, ReviseCanceled, ReviewCanceled, CloseClicked
    // Showcases: Delete, Save-Modify, Save-New
    RecordActivationEvent(param0: string, param1: string): any;
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
    CancelStreamGame(): void; // existing stream

    /**
     * Registers a callback function to be called when the streaming client finishes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingClientFinished(callback: (param0: number, description: string) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when there is progress in the launch of the streaming client.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingClientLaunchProgress(callback: (actionType: string, param1: string, param2: number, param3: number) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the streaming client is started (e.g., when clicking the stream button).
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingClientStarted(callback: (appId: number) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the streaming launch is complete.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @todo Param0 is likely a code, 1 being it started, 10 being host computer is updating game, param1 just returns "complete"
     */
    RegisterForStreamingLaunchComplete(callback: (param0: number, param1: string) => void): Unregisterable | any;

    RegisterForStreamingShowEula: Unregisterable | any;
    RegisterForStreamingShowIntro: Unregisterable | any;

    /**
     * Registers a callback function to be called when the streaming client receives launch options from the host.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingShowLaunchOptions(callback: (appId: number, launchOptions: LaunchOption[]) => void): Unregisterable | any; // Callback when streaming client receives launch options from host

    StreamingContinueStreamGame(): void; // existing game running on another streaming capable device
    StreamingSetLaunchOption: any;
}

/**
 * Represents various functions related to Steam system audio.
 */
export interface Audio {
    /**
     * Clears the default device override for a specified audio type.
     * @param {number} audioType - The audio type (0 for input, 1 for output).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    ClearDefaultDeviceOverride(audioType: number): Promise<OperationResponse>;

    /**
     * Retrieves information about audio applications.
     * @returns {Promise<ApplicationsAudio>} - A Promise that resolves to information about audio applications.
     */
    GetApps(): Promise<ApplicationsAudio>;

    /**
     * Retrieves information about audio devices.
     * @returns {Promise<AudioDeviceInfo>} - A Promise that resolves to information about audio devices.
     */
    GetDevices(): Promise<AudioDeviceInfo>;

    /**
     * Registers a callback to be called when a new audio application is added.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppAdded(callback: (appAudioAdded: ApplicationAudio) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when an audio application is removed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppRemoved(callback: (appAudioId: number) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when the volume of an audio application changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppVolumeChanged(callback: (appAudioId: number, volume: number) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when a new audio device is added.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceAdded(callback: (audioDevice: Device) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when an audio device is removed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceRemoved(callback: (audioDeviceId: number) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when the volume of an audio device changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceVolumeChanged(callback: (audioDeviceId: number, audioType: number, volume: number) => void): Unregisterable | any;

    RegisterForServiceConnectionStateChanges: Unregisterable | any;

    /**
     * Registers a callback to be called when volume buttons are pressed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForVolumeButtonPressed(callback: (volumeUpPressed: boolean) => void): Unregisterable | any;

    /**
     * Sets the volume of an audio application.
     * @param {number} appAudioId - The ID of the audio application.
     * @param {number} volume - The volume level (floating point value between 0 and 1).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    SetAppVolume(appAudioId: number, volume: number): Promise<OperationResponse>;

    /**
     * Sets the default device override for a specified audio type.
     * @param {number} audioDeviceId - The ID of the audio device.
     * @param {number} audioType - The audio type (0 for input, 1 for output).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    SetDefaultDeviceOverride(audioDeviceId: number, audioType: number): Promise<OperationResponse>;

    /**
     * Sets the volume of an audio device.
     * @param {number} audioDeviceId - The ID of the audio device.
     * @param {number} audioType - The audio type (0 for input, 1 for output).
     * @param {number} volume - The volume level (floating point value between 0 and 1).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    SetDeviceVolume(audioDeviceId: number, audioType: number, volume: number): Promise<OperationResponse>;
}

export interface AudioDevice {
    RegisterForStateChanges: Unregisterable | any;
    UpdateSomething: any;
}

/**
 * Provides functionality for managing Bluetooth devices and interactions.
 */
export interface Bluetooth {
    /**
     * Cancels an ongoing pairing request with a Bluetooth device.
     * @param {number} adapterId - The ID of the Bluetooth adapter.
     * @param {number} deviceId - The ID of the Bluetooth device to cancel pairing with.
     * @returns {Promise<OperationResponse>} - A Promise that resolves with the result of the cancellation.
     */
    CancelPairing(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Connects to a paired Bluetooth device using the specified adapter.
     * @param {number} adapterId - The ID of the Bluetooth adapter.
     * @param {number} deviceId - The ID of the paired Bluetooth device to connect to.
     * @returns {Promise<OperationResponse>} - A Promise that resolves with the result of the connection attempt.
     */
    Connect(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Disconnects from a currently connected Bluetooth device using the specified adapter.
     * @param {number} adapterId - The ID of the Bluetooth adapter.
     * @param {number} deviceId - The ID of the connected Bluetooth device to disconnect from.
     * @returns {Promise<OperationResponse>} - A Promise that resolves with the result of the disconnection.
     */
    Disconnect(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Initiates pairing with a Bluetooth device using the specified adapter.
     * @param {number} adapterId - The ID of the Bluetooth adapter.
     * @param {number} deviceId - The ID of the Bluetooth device to initiate pairing with.
     * @returns {Promise<OperationResponse>} - A Promise that resolves with the result of the pairing attempt.
     */
    Pair(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Registers a callback function to be called when the Bluetooth state changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (bluetoothStateChange: BluetoothStateChange) => void): Unregisterable | any;

    /**
     * Sets whether the Bluetooth adapter should be in discovering mode.
     * @param {number} adapterId - The ID of the Bluetooth adapter.
     * @param {boolean} value - `true` to enable discovering mode, `false` to disable it.
     * @returns {Promise<OperationResponse>} - A Promise that resolves with the result of the operation.
     */
    SetAdapterDiscovering(adapterId: number, value: boolean): Promise<OperationResponse>;

    /**
     * Enables or disables Bluetooth functionality.
     * @param {boolean} bluetooth - `true` to enable Bluetooth, `false` to disable it.
     * @returns {Promise<OperationResponse>} - A Promise that resolves with the result of the operation.
     */
    SetEnabled(bluetooth: boolean): Promise<OperationResponse>;

    /**
     * Unpairs a Bluetooth device from the adapter.
     * @param {number} adapterId - The ID of the Bluetooth adapter.
     * @param {number} deviceId - The ID of the Bluetooth device to unpair with.
     * @returns {Promise<OperationResponse>} - A Promise that resolves with the result of the unpairing request.
     */
    UnPair(adapterId: number, deviceId: number): Promise<OperationResponse>;
}

export interface Devkit {
    DeveloperModeChanged: any;
    RegisterForPairingPrompt: Unregisterable | any;
    RespondToPairingPrompt: any;
    SetPairing: any;
}

export interface Display {
    EnableUnderscan(param0: boolean): any;

    RegisterForBrightnessChanges(callback: (brightnessChanges: BrightnessChange) => void): Unregisterable | any;

    SetBrightness(brightness: number): any;

    SetUnderscanLevel(param0: any): any;
}

// CMsgSystemDisplayManagerState, CMsgSystemDisplayManagerSetMode
export interface DisplayManager {
    ClearModeOverride(displayId: any): any;
    GetState: any;
    RegisterForStateChanges(callback: () => void): Unregisterable | any;
    SetCompatibilityMode(displayId: any): any;
    SetGamescopeInternalResolution(width: number, height: number): any;
    SetMode(base64: string): any; //
}

// CMsgSystemDockUpdateFirmware, CMsgSystemDockState
export interface Dock {
    DisarmSafetyNet(): void;

    RegisterForStateChanges(callback: (param0: any) => void): Unregisterable | any; // Deserialize binary

    UpdateFirmware(base64String: string): any; // serialize base64 string
}

export interface WirelessNetwork {
    Forget: any;
    SetAutoconnect: any;
}

export interface NetworkDevice {
    Connect(param0: any): any; // some base64 serialized string
    Disconnect: any;
    WirelessNetwork: WirelessNetwork;
}

export interface Network {
    Device: NetworkDevice;

    ForceRefresh(): Promise<OperationResponse>;

    ForceTestConnectivity(): void;

    GetProxyInfo(): Promise<ProxyInfo>;

    RegisterForAppSummaryUpdate: Unregisterable | any;
    RegisterForConnectionStateUpdate: Unregisterable | any;

    RegisterForConnectivityTestChanges(callback: (connectivityTestChange: ConnectivityTestChange) => void): Unregisterable | any;

    RegisterForDeviceChanges(callback: (param0: any) => void): Unregisterable | any;

    SetFakeLocalSystemState(param0: any): any; // enums

    SetProxyInfo(mode: number, address: string, port: number, excludeLocal: boolean): void;

    SetWifiEnabled(value: boolean): Promise<OperationResponse>;

    StartScanningForNetworks(): Promise<OperationResponse>;

    StopScanningForNetworks(): Promise<OperationResponse>;
}

// CMsgSystemPerfUpdateSettings, CMsgSystemPerfState, CMsgSystemPerfSettings
export interface Perf {
    RegisterForDiagnosticInfoChanges(callback: (param0: any) => void): Unregisterable | any; // deserialize binary
    RegisterForStateChanges(callback: (param0: any) => void): Unregisterable | any; // deserialize binary
    UpdateSettings(base64: string): any; // serialize
}

// CMsgGenerateSystemReportReply
export interface Report {
    GenerateSystemReport: any;
    SaveToDesktop: any;
    Submit: any;
}

export interface SystemUI {
    CloseGameWindow: any;
    GetGameWindowsInfo: any;
    RegisterForFocusChangeEvents(callback: (param0: any) => void): Unregisterable | any;
    RegisterForOverlayGameWindowFocusChanged: Unregisterable | any;

    RegisterForSystemKeyEvents(callback: (event: any) => void): Unregisterable | any; // eKey
}

export interface System {
    Audio: Audio;
    AudioDevice: AudioDevice;
    Bluetooth: Bluetooth;
    Devkit: Devkit;
    Display: Display;
    DisplayManager: DisplayManager;
    Dock: Dock;
    ExitFakeCaptivePortal: any;
    FactoryReset: any;
    FormatStorage: any;

    GetLegacyAmpControlEnabled(): Promise<any>; // {"bAvailable":true,"bEnabled":false}


    GetOSType(): Promise<OSType>;

    GetSystemInfo(): Promise<SystemInfo>;

    IsDeckFactoryImage(): Promise<boolean>;

    IsSteamInTournamentMode(): Promise<boolean>;

    Network: Network;
    NotifyGameOverlayStateChanged(param0: boolean, appId: number): any;

    /*
    {
        strTitle: (0, o.Localize)("#AddNonSteam_PickAppTitle"),
        rgFilters: y(),
        strInitialFile: t
    }
     */
    OpenFileDialog(param0: any): any;
    OpenLocalDirectoryInSystemExplorer(directory: string): void; // Opens local directory in system explorer
    Perf: Perf;
    RebootToAlternateSystemPartition: any;
    RebootToFactoryTestImage: any;

    RegisterForAirplaneModeChanges(callback: (airplaneModeChange: AirplaneModeChange) => void): Unregisterable | any;

    RegisterForBatteryStateChanges(callback: (batteryStateChange: BatteryStateChange) => void): Unregisterable | any;

    RegisterForFormatStorageProgress(callback: () => void): Unregisterable | any; // {"flProgress":0,"rtEstimatedCompletionTime":0,"eStage":1}

    RegisterForOnResumeFromSuspend(callback: () => void): Unregisterable | any;

    RegisterForOnSuspendRequest(callback: () => void): Unregisterable | any;

    RegisterForSettingsChanges: Unregisterable | any; // deserialize binary
    Report: Report;

    /**
     * Restarts the system.
     */
    RestartPC(): any;

    SetAirplaneMode(enabled: boolean): void;

    SetLegacyAmpControl: any;

    ShutdownPC(): any;

    SteamRuntimeSystemInfo: any;

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
    ExecuteSteamURL(url: string): void;
    GetSteamURLList: any;
    GetWebSessionID: any;
    RegisterForRunSteamURL: Unregisterable | any;
    RegisterForSteamURLChanges: Unregisterable | any;
}

export interface Updates {
    ApplyUpdates: any;

    CheckForUpdates(): Promise<OperationResponse>; // Checks for software updates
    GetCurrentOSBranch(): Promise<OSBranch>;

    RegisterForUpdateStateChanges: Unregisterable | any;

    // 1 - Stable, 2 - Beta, 3 - Preview
    SelectOSBranch(branch: number): any; // enum?
}

export interface User {
    AuthorizeMicrotxn(txnId: any): any;
    CancelLogin: any;
    CancelMicrotxn(txnId: any): any;
    CancelShutdown: any;
    ChangeUser: any;
    Connect(): any;
    FlipToLogin: any;
    ForceShutdown: any;
    ForgetPassword: any;

    GetIPCountry(): Promise<string>;

    GetLoginProgress: any;

    GetLoginUsers(): Promise<LoginUser[]>;

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

    // Hardware survey information
    RunSurvey(callback: (surveySections: SurveySection[]) => void): void;

    SendSurvey: any;
    SetAsyncNotificationEnabled(appId: number, enable: boolean): any;
    SetLoginCredentials: any;
    SetOOBEComplete: any;
    ShouldShowUserChooser: any;
    SignOutAndRestart: any;
    StartLogin: any;
    StartOffline(param0: boolean): any;

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
    OnGroupChatUserStateChange: any;
    OpenURLInClient(url: string, param1: any, param2: any): any;
    RegisterForComputerActiveStateChange: Unregisterable | any;
    RegisterForFriendPostMessage: Unregisterable | any;
    RegisterForMouseXButtonDown: Unregisterable | any;
    RegisterForPushToTalkStateChange: Unregisterable | any;
    RegisterForUIModeChange: Unregisterable | any;
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
    GetTransportInfo(): any;
}

export interface Window {
    BringToFront(param0: any): any; // param0 optional?
    Close(): any;
    DefaultMonitorHasFullscreenWindow: any;
    FlashWindow: any;
    GetDefaultMonitorDimensions: any;
    GetMousePositionDetails: any;
    GetWindowDimensions: any;
    GetWindowRestoreDetails(callback: (param0: any) => void): any;
    HideWindow(): any;
    IsWindowMaximized: any;
    IsWindowMinimized: any;
    MarkLastFocused: any;
    Minimize: any;
    MoveTo(x: number, y: number, ratio: number): any;
    MoveToLocation: any;
    // Takes param0 from callback of GetWindowRestoreDetails
    PositionWindowRelative(param0: any, x: number, y: number, width: number, height: number): any;
    ProcessShuttingDown: any;
    ResizeTo(width: number, height: number, ratio: number): any;
    RestoreWindowSizeAndPosition: any;
    SetAutoDisplayScale(param0: any): any;
    SetComposition(uiComposition: UIComposition, appIds: number[], param2: number): any;
    SetHideOnClose(param0: boolean): any;
    SetKeyFocus: any;
    SetManualDisplayScaleFactor(param0: any): any;
    SetMaxSize: any;
    SetMinSize: any;
    SetModal: any;
    SetResizeGrip(width: number, height: number): any;
    SetWindowIcon: any;
    ShowWindow(): any;
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
    data: Shortcut;
}

export interface Shortcut {
    bIsApplication: boolean;
    strAppName: string;
    strExePath: string;
    strArguments: string;
    strCmdline: string;
    strShortcutPath: string | undefined;
    strSortAs: string | undefined;
    strIconDataBase64: string | undefined;
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

export interface AppData {
    details: AppDetails;
    // more
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
    eAppOwnershipFlags: AppOwnershipFlags | number; // is this a bitmask?
    eAutoUpdateValue: number;
    eBackgroundDownloads: number;
    eCloudSync: number;
    eControllerRumblePreference: number; // ControllerRumbleSetting?
    eDisplayStatus: DisplayStatus;
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

// Appears to be all optional fields :disaster:
export interface SteamAppOverview {
    appid: number;
    display_name: string;
    visible_in_game_list: boolean;
    sort_as: string;

    /*
     * Possible bitmask values, but I haven't spotted any of them being masked in the app_type field.
     * Should be safe as an enum.
     */
    app_type: AppType;
    mru_index: number | undefined;
    rt_recent_activity_time: number;
    minutes_playtime_forever: number;
    minutes_playtime_last_two_weeks: number;
    rt_last_time_played_or_installed: number;
    rt_last_time_played: number;
    store_tag?: number[];
    association: SteamAppOverviewAssociation[];
    store_category?: number[];
    rt_original_release_date: number;
    rt_steam_release_date: number;
    icon_hash: string;
    controller_support?: AppControllerSupportLevel; // default none
    vr_supported?: boolean;
    metacritic_score: number;
    size_on_disk?: number;
    third_party_mod?: boolean;
    icon_data?: string;
    icon_data_format?: string;
    gameid: string;
    library_capsule_filename?: string;
    per_client_data: SteamAppOverviewClientData[];
    most_available_clientid: string;
    selected_clientid?: string;
    rt_store_asset_mtime: number;
    rt_custom_image_mtime?: number;
    optional_parent_app_id?: number;
    owner_account_id?: number;
    review_score_with_bombs: number;
    review_percentage_with_bombs: number;
    review_score_without_bombs: number;
    review_percentage_without_bombs: number;
    library_id?: string;
    vr_only?: boolean;
    mastersub_appid?: number;
    mastersub_includedwith_logo?: string;
    site_license_site_name?: string;
    shortcut_override_appid?: number;
    steam_deck_compat_category: SteamDeckCompatibilityCategory; // Default should be Unknown
    rt_last_time_locally_played?: number
    rt_purchased_time: number;
    header_filename?: string;

    m_setStoreCategories: Set<number>;
    m_setStoreTags: Set<number>;
    canonicalAppType: number;
    local_per_client_data: SteamAppOverviewClientData;
    most_available_per_client_data: SteamAppOverviewClientData;
    selected_per_client_data: SteamAppOverviewClientData;
    m_strPerClientData: Set<any> | undefined;
    m_strAssociations: Set<any> | undefined;

    BIsModOrShortcut: () => boolean;
    BIsShortcut: () => boolean;
}

export interface SteamAppOverviewAssociation {
    type: AppAssociationType; // Default should be Invalid
    name: string;
}

export interface SteamAppOverviewClientData {
    clientid: string;
    client_name: string;
    display_status: DisplayStatus; // Default should be Invalid
    status_percentage: number;
    active_beta?: string;
    installed?: boolean;
    bytes_downloaded: string;
    bytes_total: string;
    streaming_to_local_client?: boolean;
    is_available_on_current_platform: boolean;
    is_invalid_os_type?: boolean;
    playtime_left?: number;
    cloud_status: AppCloudStatus;
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
export interface SteamInstallFolder extends PotentialInstallFolder {
    /** Index of the folder. */
    nFolderIndex: number;
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
    /** List of applications installed in the folder. */
    vecApps: AppInfo[];
}

export interface PotentialInstallFolder {
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
    /** Indicates if the folder is on a fixed drive. */
    bIsFixed: boolean;
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
    ePrivacy: FilePrivacyState,
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

export interface InstallInfo {
    rgAppIDs: InstallInfoApps[],
    eInstallState: number;
    nDiskSpaceRequired: number;
    nDiskSpaceAvailable: number;
    nCurrentDisk: number;
    nTotalDisks: number;
    bCanChangeInstallFolder: boolean;
    iInstallFolder: number; // index of the install folder
    iUnmountedFolder: number;
    currentAppID: number;
    eAppError: AppError;
    errorDetail: string;
    bSystemMenuShortcut: boolean;
    bDesktopShortcut: boolean;
    bIsBackupInstall: boolean;
    strPeerContentServer: string;
    bPeerContentServerOnline: boolean;
    bPeerContentServerAvailable: boolean;
}

export interface InstallInfoApps {
    nAppID: number;
    lDiskSpaceRequiredBytes: number;
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

interface SteamSettings {
    bIsInClientBeta: boolean;
    bIsSteamSideload: boolean;
    eClientBetaState: ClientBetaState;
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
    strDisplayName: string;
    bDisplayIsExternal: boolean;
    flAutoDisplayScaleFactor: number;
    flCurrentDisplayScaleFactor: number;
    bDisplayIsUsingAutoScale: boolean;
    flMinDisplayScaleFactor: number;
    flMaxDisplayScaleFactor: number;
    flCurrentUnderscanLevel: number;
    bUnderscanEnabled: boolean;
    vecNightModeScheduledHours: Hour[];
}

export interface PrePurchaseApp {
    nAppID: number;
    eState: number; // todo: 3 = Preload? 4 - Ready? I got 3 from Starfield preload and 4 with csgo
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
     * - Bit 3: Online content & features - My online profile, screenshots, and achievements
     * - Bit 4: Online content & features - Friends, chat, and groups
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
    eConnectivityTestResult: ConnectivityTestResult;
    eFakeState: number;
    bChecking: boolean;
}

export interface ControllerStateChange {
    unControllerIndex: number;
    unPacketNum: number;
    /**
     * Bitmask representing pressed upper buttons.
     * - Bit 0-8: Unknown (@todo Please provide more details if known)
     * - Bit 9: L4
     * - Bit 10: R4
     * - Bit 11-13: Unknown (@todo Please provide more details if known)
     * - Bit 14: Left Joystick Touch
     * - Bit 15: Right Joystick Touch
     * - Bit 16-18: Unknown (@todo Please provide more details if known)
     * - Bit 19: Quick Access Menu
     */
    ulUpperButtons: number;
    /**
     * Bitmask representing pressed buttons.
     * - Bit 0: R2
     * - Bit 1: L2
     * - Bit 2: R1
     * - Bit 3: L1
     * - Bit 4: Y
     * - Bit 5: B
     * - Bit 6: X
     * - Bit 7: A
     * - Bit 8: D-Pad Up
     * - Bit 9: D-Pad Right
     * - Bit 10: D-Pad Left
     * - Bit 11: D-Pad Down
     * - Bit 12: Select
     * - Bit 13: Steam/Home
     * - Bit 14: Start
     * - Bit 15: L5
     * - Bit 16: R5
     * - Bit 17: Left Touchpad Click
     * - Bit 18: Right Touchpad Click
     * - Bit 19: Left Touchpad Touch
     * - Bit 20: Right Touchpad Touch
     * - Bit 21: Unknown (@todo Please provide more details if known)
     * - Bit 22: L3
     * - Bit 23-25: Unknown (@todo Please provide more details if known)
     * - Bit 26: R3
     * - Bit 27-28: Unknown (@todo Please provide more details if known)
     * - Bit 29: Mute (Dualsense)
     * - Bit 30-31: Unknown (@todo Please provide more details if known)
     */
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
    eControllerType: ControllerType;
    nXInputIndex: number;
    nControllerIndex: number;
    eRumblePreference: number; // ControllerRumbleSetting
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

export interface ProxyInfo {
    proxy_mode: number;
    address: string;
    port: number;
    exclude_local: boolean;
}

export interface RemotePlayDevice {
    clientName: string;
    status: string; // "Connected", "Paired",
    formFactor: number;
    unStreamingSessionID: number;
    bCanSuspend: boolean;
}

export interface RemotePlaySettings {
    bRemotePlaySupported: boolean;
    bRemotePlayEnabled: boolean;
    eRemotePlayP2PScope: number;
    bRemotePlayServerConfigAvailable: boolean;
    bRemotePlayServerConfigEnabled: boolean;
    RemotePlayServerConfig: any; // todo: document {}
    bRemotePlayClientConfigEnabled: boolean;
    unStreamingSessionID: number;
    strStreamingClientName: string;
    RemotePlayClientConfig: any; // todo: document {}
    nDefaultAudioChannels: number;
    bDefaultEncodeNVIDIA: boolean;
    bDefaultEncodeAMD: boolean;
    bDefaultEncodeIntel: boolean;
    nAutomaticResolutionX: number;
    nAutomaticResolutionY: number;
}

export interface GameAction {
    nGameActionID: number;
    gameid: string;
    strActionName: string;
    /*
        None - 0
        Completed - 1
        Cancelled - 2
        Failed - 3
        Starting - 4
        ConnectingToSteam - 5
        RequestingLicense - 6
        UpdatingAppInfo - 7
        UpdatingAppTicket - 8
        UnlockingH264 - 9
        WaitingOnWideVineUpdate - 10
        ShowCheckSystem - 11
        CheckTimedTrial - 12
        GetDurationControl - 13
        ShowDurationControl - 14
        ShowLaunchOption - 15
        ShowEula - 16
        ShowVR2DWarning - 17
        ShowVROculusOnly - 18
        ShowVRStreamingLaunch - 19
        ShowGameArgs - 20
        ShowCDKey - 21
        WaitingPrevProcess - 22
        DownloadingDepots - 23
        DownloadingWorkshop - 24
        UpdatingDRM - 25
        GettingLegacyKey - 26
        ProcessingInstallScript - 27
        RunningInstallScript - 28
        SynchronizingCloud - 29
        SynchronizingControllerConfig - 30
        ShowNoControllerConfig - 31
        ProcessingShaderCache - 32
        VerifyingFiles - 33
        KickingOtherSession - 34
        WaitingOpenVRAppQuit - 35
        SiteLicenseSeatCheckout - 36
        DelayLaunch - 37
        CreatingProcess - 38
        WaitingGameWindow - 39
     */
    strTaskName: string;
    strTaskDetails: string;
    nSecondsRemaing: number; //fixme: not a typo, actually valve
    strNumDone: string;
    strNumTotal: string;
    bWaitingForUI: boolean;
}

export interface MoveContentProgress {
    appid: number;
    eError: number; // 0 - appear when you open the move dialog and when it's done, 3 - cancelled? but appid is 0?, 20 - in progress
    flProgress: number;
    strBytesMoved: string;
    strTotalBytesToMove: string;
    nFilesMoved: number;
}

export interface FolderChange {
    folderIndex: number;
}

export interface MusicTrack {
    uSoundtrackAppId: number;
    ePlaybackStatus: number;// 1 - playing, 2 - paused
    eRepeatStatus: number;
    bShuffle: boolean;
    nVolume: number;
    nActiveTrack: number;
    nLengthInMsec: number;
}

export interface SoundtrackDetails {
    tracks: Track[];
    metadata: SoundtrackMetadata;
    vecAdditionalImageAssetURLs: string[];
    strCoverImageAssetURL: string;
}

export interface SoundtrackMetadata {
    artist: string;
}

export interface Track {
    discNumber: number;
    trackNumber: number;
    durationSeconds: number;
    trackDisplayName: string;
}

export interface EndUserLicenseAgreement {
    id: string;
    url: string;
    version: number;
}

export interface BroadcastStatus {
    broadcastid: string;
    nViewers: number;
    nRequests: number;
    bIsBroadcasting: boolean;
    bIsRecordingDesktop: boolean;
    eBroadcastReady: number;
    bBroadcastCapable: boolean;
    bMicrophoneEnabled: boolean;
    bMicrophoneActive: boolean;
    nCurrentFPS: number;
    nUploadKbps: number;
}

export interface OverlayBrowserProtocols {
    unAppID: number;
    strScheme: string;
    bAdded: boolean;
}

export interface LaunchOption {
    nIndex: number;
    strDescription: string;
    strGameName: string;
}

/**
 * Represents information about a Bluetooth adapter.
 */
export interface BluetoothAdapter {
    /**
     * The unique identifier of the Bluetooth adapter.
     */
    nId: number;

    /**
     * The MAC address of the Bluetooth adapter.
     */
    sMAC: string;

    /**
     * The name of the Bluetooth adapter.
     */
    sName: string;

    /**
     * Indicates whether the Bluetooth adapter is enabled.
     */
    bEnabled: boolean;

    /**
     * Indicates whether the Bluetooth adapter is in discovering mode.
     */
    bDiscovering: boolean;
}

/**
 * Represents information about a Bluetooth device.
 */
export interface BluetoothDevice {
    /**
     * The unique identifier of the Bluetooth device.
     */
    nId: number;

    /**
     * The ID of the Bluetooth adapter to which this device is discovered by / connected to.
     */
    nAdapterId: number;

    /**
     * The type of the Bluetooth device (e.g., headphones, mouse, keyboard).
     */
    eType: BluetoothDeviceType;

    /**
     * The MAC address of the Bluetooth device.
     */
    sMAC: string;

    /**
     * The name of the Bluetooth device.
     */
    sName: string;

    /**
     * Indicates whether the Bluetooth device is currently connected to the adapter.
     */
    bConnected: boolean;

    /**
     * Indicates whether the Bluetooth device is paired to the adapter.
     */
    bPaired: boolean;

    /**
     * The raw signal strength of the Bluetooth device.
     */
    nStrengthRaw: number;
}

/**
 * Represents a change in the state of Bluetooth adapters and devices.
 */
export interface BluetoothStateChange {
    /**
     * An array of Bluetooth adapters with their current state.
     */
    vecAdapters: BluetoothAdapter[];

    /**
     * An array of Bluetooth devices with their current state.
     */
    vecDevices: BluetoothDevice[];

    /**
     * Indicates whether Bluetooth is enabled (`true`) or disabled (`false`).
     */
    bEnabled: boolean;
}

/**
 * Represents the response of an operation. It appears to be not necessary to await for this operation response. It is only used to indicate the result of an operation.
 */
export interface OperationResponse {
    /**
     * The result code of the operation (1 for success, 2 for failure).
     */
    result: number;

    /**
     * A message describing the result of the operation.
     */
    message: string;
}

/**
 * Represents details about a single screenshot upload.
 */
export interface DetailsForScreenshotUpload {
    /**
     * The size of the screenshot upload on disk (including thumbnail).
     */
    strSizeOnDisk: string;

    /**
     * The amount of cloud storage available.
     */
    strCloudAvailable: string;

    /**
     * The total cloud storage.
     */
    strCloudTotal: string;
}

/**
 * Represents details about multiple screenshot uploads.
 */
export interface DetailsForScreenshotUploads {
    /**
     * The total size of all screenshot uploads on disk (sum of sizes including thumbnails).
     */
    unSizeOnDisk: number;

    /**
     * The amount of cloud storage available.
     */
    strCloudAvailable: string;

    /**
     * The total cloud storage.
     */
    strCloudTotal: string;
}

/**
 * Represents details about an application audio session.
 */
export interface ApplicationAudio {
    /**
     * The ID of the application audio.
     */
    id: number;

    /**
     * The name of the application (e.g., Spotify, YouTube from a browser, etc.).
     */
    strName: string;

    /**
     * The volume level of the application (floating point value between 0 and 1).
     */
    flVolume: number;
}

/**
 * Represents details about an array of application audio sessions.
 */
export interface ApplicationsAudio {
    /**
     * An array of application audio sessions.
     */
    apps: ApplicationAudio[];
}

/**
 * Represents details about an audio device.
 */
export interface Device {
    /**
     * The identifier of the audio device.
     */
    id: number;

    /**
     * The name of the audio device.
     */
    sName: string;

    /**
     * Indicates if the device has audio output.
     */
    bHasOutput: boolean;

    /**
     * Indicates if the device is the default output device.
     */
    bIsDefaultOutputDevice: boolean;

    /**
     * The volume level of the audio output device (floating point value between 0 and 1).
     */
    flOutputVolume: number;

    /**
     * Indicates if the device has audio input.
     */
    bHasInput: boolean;

    /**
     * Indicates if the device is the default input device.
     */
    bIsDefaultInputDevice: boolean;

    /**
     * The volume level of the audio input device (floating point value between 0 and 1).
     */
    flInputVolume: number;
}

/**
 * Represents details about audio devices and information about the active audio device.
 */
export interface AudioDeviceInfo {
    /**
     * The ID of the active output audio device.
     */
    activeOutputDeviceId: number;

    /**
     * The ID of the active input audio device.
     */
    activeInputDeviceId: number;

    /**
     * The ID of the overridden output audio device (-1 if not overridden).
     */
    overrideOutputDeviceId: number;

    /**
     * The ID of the overridden input audio device (-1 if not overridden).
     */
    overrideInputDeviceId: number;

    /**
     * An array of audio devices.
     */
    vecDevices: Device[];
}

export interface BatteryStateChange {
    bHasBattery: boolean;
    eACState: ACState;
    eBatteryState: BatteryState;
    flLevel: number; // Battery Percentage in floating point 0-1
    nSecondsRemaining: number; // Appears to be charge time remaining or time remaining on battery
    bShutdownRequested: boolean;
}

export interface OSBranch {
    eBranch: OSBranchType; // 1 - Stable
    sRawName: string;
}

export interface LoginUser {
    personaName: string;
    accountName: string;
    rememberPassword: boolean;
    avatarUrl: string;
}

export interface SurveyEntry {
    strName: string;
    vecArgs: string[];
}

export interface SurveySection {
    strSectionName: string;
    vecEntries: SurveyEntry[];
}

export interface GameKeyboardMessage {
    m_bOpen: boolean;
    nAppID: number;
    m_dwPID: number;
    m_dwOverlayPID: number;
    m_hPipe: number;
    m_eInputMode: number;
    m_eLineInputMode: number;
    m_pchDescription: string;
    m_unCharMax: number;
    m_pchExistingText: string;
}

export interface ControllerConfigInfoMessage {
    appID: number;
}

export interface ControllerConfigInfoMessageQuery extends ControllerConfigInfoMessage {
    bPersonalQueryDone: boolean;
}

export interface ControllerConfigInfoMessageList extends ControllerConfigInfoMessage {
    nControllerType: number;
    publishedFileID: string;
    accountID: number;
    Title: string;
    Description: string;
    URL: string;
    timeUpdated: string;
    bOfficial: boolean;
    bProgenitorOfficial: boolean;
    bRecommended: boolean;
    bProgenitorRecommended: boolean;
    bUsesSIAPI: boolean;
    bUsesMouse: boolean;
    bUsesKeyboard: boolean;
    bUsesGamepad: boolean;
    eExportType: number;
    playtime: string;
    bSelected: boolean;
}

export interface ControllerConfigCloudStateChange {
    bSyncDone: boolean;
    bSyncConflict: boolean;
    bSyncError: boolean;
}

export enum AppArtworkAssetType {
    Capsule = 0,
    Hero = 1,
    Logo = 2,
    Header = 3,
    Icon = 4,
    HeroBlur = 5,
}

export enum UIComposition {
    Hidden = 0,
    Notification = 1,
    Overlay = 2,
    Opaque = 3,
    OverlayKeyboard = 4, // Unverified
}

export enum OSType {
    Web = -700,
    Ios = -600,
    Android = -500,
    Android6 = -499,
    Android7 = -498,
    Android8 = -497,
    Android9 = -496,
    Ps3os = -300,
    Linux = -203,
    Linux22 = -202,
    Linux24 = -201,
    Linux26 = -200,
    Linux32 = -199,
    Linux35 = -198,
    Linux36 = -197,
    Linux310 = -196,
    Linux316 = -195,
    Linux318 = -194,
    Linux3x = -193,
    Linux4x = -192,
    Linux41 = -191,
    Linux44 = -190,
    Linux49 = -189,
    Linux414 = -188,
    Linux419 = -187,
    Linux5x = -186,
    Linux54 = -185,
    Linux6x = -184,
    Linux7x = -183,
    Linux510 = -182,
    Macos = -102,
    Macos104 = -101,
    Macos105 = -100,
    Macos1058 = -99,
    Macos106_unused1 = -98,
    Macos106_unused2 = -97,
    Macos106_unused3 = -96,
    Macos106 = -95,
    Macos1063 = -94,
    Macos1064_slgu = -93,
    Macos1067 = -92,
    Macos1067_unused = -91,
    Macos107 = -90,
    Macos108 = -89,
    Macos109 = -88,
    Macos1010 = -87,
    Macos1011 = -86,
    Macos1012 = -85,
    Macos1013 = -84,
    Macos1014 = -83,
    Macos1015 = -82,
    Macos1016 = -81,
    Macos11 = -80,
    Macos111 = -79,
    Macos1017 = -78,
    Macos12 = -77,
    Macos1018 = -76,
    Macos13 = -75,
    Macos1019 = -74,
    Macos14 = -73,
    Macos1020 = -72,
    Macos15 = -71,
    Unknown = -1,
    Windows = 0,
    Win311 = 1,
    Win95 = 2,
    Win98 = 3,
    WinME = 4,
    WinNT = 5,
    Win200 = 6,
    WinXP = 7,
    Win2003 = 8,
    WinVista = 9,
    Win7 = 10,
    Win2008 = 11,
    Win2012 = 12,
    Win8 = 13,
    Win81 = 14,
    Win2012R2 = 15,
    Win10 = 16,
    Win2016 = 17,
    Win2019 = 18,
    Win2022 = 19,
    Win11 = 20,
}

export enum ControllerType {
    None = -1,
    Unknown = 0,
    UnknownSteamController = 1,
    SteamController = 2, // Codename Gordon
    SteamControllerV2 = 3, // Codename Headcrab
    SteamControllerNeptune = 4, // Steam Deck
    FrontPanelBoard = 20,
    Generic = 30,
    XBox360Controller = 31,
    XBoxOneController = 32,
    PS3Controller = 33,
    PS4Controller = 34,
    WiiController = 35,
    AppleController = 36,
    AndroidController = 37,
    SwitchProController = 38,
    SwitchJoyConLeft = 39,
    SwitchJoyConRight = 40,
    SwitchJoyConPair = 41,
    SwitchProGenericInputOnlyController = 42,
    MobileTouch = 43,
    SwitchProXInputSwitchController = 44,
    PS5Controller = 45,
    XboxEliteController = 46,
    LastController = 47, // Unverified
    PS5EdgeController = 48,
    GenericKeyboard = 400,
    GenericMouse = 800,
}

export enum FilePrivacyState {
    Invalid = -1,
    Private = 2,
    FriendsOnly = 4,
    Public = 8,
    Unlisted = 16,
}

export enum BluetoothDeviceType {
    Invalid = 0,
    Unknown = 1,
    Phone = 2,
    Computer = 3,
    Headset = 4,
    Headphones = 5,
    Speakers = 6,
    OtherAudio = 7,
    Mouse = 8,
    Joystick = 9,
    Gamepad = 10,
    Keyboard = 11,
}

export enum AppAssociationType {
    Invalid = 0,
    Publisher = 1,
    Developer = 2,
    Franchise = 3,
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

export enum AppCloudStatus {
    Invalid = 0,
    Disabled = 1,
    Unknown = 2,
    Synchronized = 3,
    Checking = 4,
    OutOfSync = 5,
    Uploading = 6,
    Downloading = 7,
    SyncFailed = 8,
    Conflict = 9,
    PendingElsewhere = 10,
}

export enum SteamDeckCompatibilityCategory {
    Unknown = 0,
    Unsupported = 1,
    Playable = 2,
    Verified = 3,
}

export enum ACState {
    Unknown = 0,
    Disconnected = 1,
    Connected = 2,
    ConnectedSlow = 3,
}

export enum BatteryState {
    Unknown = 0,
    Discharging = 1,
    Charging = 2,
    Full = 3,
}

export enum OSBranchType {
    Unknown = 0,
    Release = 1,
    ReleaseCandidate = 2,
    Beta = 3,
    BetaCandidate = 4,
    Main = 5,
    Staging = 6,
}

export enum AppOwnershipFlags {
    None = 0,
    Subscribed = 1,
    Free = 2,
    RegionRestricted = 4,
    LowViolence = 8,
    InvalidPlatform = 16,
    Borrowed = 32,
    FreeWeekend = 64,
    Retail = 128,
    Locked = 256,
    Pending = 512,
    Expired = 1024,
    Permanent = 2048,
    Recurring = 4096,
    Canceled = 8192,
    AutoGrant = 16384,
    PendingGift = 32768,
    RentalNotActivated = 65536,
    Rental = 131072,
    SiteLicense = 262144,
    LegacyFreeSub = 524288,
    InvalidOSType = 1048576,
    TimedTrial = 2097152,
}

export enum AppError {
    None = 0,
    Unspecified = 1,
    Paused = 2,
    Canceled = 3,
    Suspended = 4,
    NoSubscription = 5,
    NoConnection = 6,
    Timeout = 7,
    MissingKey = 8,
    MissingConfig = 9,
    DiskReadFailure = 10,
    DiskWriteFailure = 11,
    NotEnoughDiskSpace = 12,
    CorruptGameFiles = 13,
    WaitingForNextDisk = 14,
    InvalidInstallPath = 15,
    AppRunning = 16,
    DependencyFailure = 17,
    NotInstalled = 18,
    UpdateRequired = 19,
    Busy = 20,
    NoDownloadSources = 21,
    InvalidAppConfig = 22,
    InvalidDepotConfig = 23,
    MissingManifest = 24,
    NotReleased = 25,
    RegionRestricted = 26,
    CorruptDepotCache = 27,
    MissingExecutable = 28,
    InvalidPlatform = 29,
    InvalidFileSystem = 30,
    CorruptUpdateFiles = 31,
    DownloadDisabled = 32,
    SharedLibraryLocked = 33,
    PendingLicense = 34,
    OtherSessionPlaying = 35,
    CorruptDownload = 36,
    CorruptDisk = 37,
    FilePermissions = 38,
    FileLocked = 39,
    MissingContent = 40,
    Requires64BitOS = 41,
    MissingUpdateFiles = 42,
    NotEnoughDiskQuota = 43,
    LockedSiteLicense = 44,
    ParentalBlocked = 45,
    SpawnProcess = 46,
    ClientOutOfDate = 47,
    PlaytimeExceeded = 48,
    CorruptFileSignature = 49,
    MissingGameFiles = 50,
    CompatToolFailed = 51,
    RemovedInstallPath = 52,
    InvalidBackupPath = 53,
    InvalidPasscode = 54,
    SelfUpdating = 55,
    ParentalPlaytimeExceeded = 56,
    Max = 57
}

export enum ClientBetaState {
    None = 0,
    NoneChosen = 1,
    NoneChosenNonAdmin = 2,
    InBeta = 3,
    InBetaNonAdmin = 4,
}

export enum ConnectivityTestResult {
    Unknown = 0,
    Connected = 1,
    CaptivePortal = 2,
    TimedOut = 3,
    Failed = 4,
    WifiDisabled = 5,
    NoLAN = 6,
}

export enum ControllerRumbleSetting {
    ControllerPreference = 0,
    Off = 1,
    On = 2,
}

export enum AppControllerSupportLevel {
    None = 0,
    Partial = 1,
    Full = 2,
}

export enum AppType {
    DepotOnly = -2147483648,
    Invalid = 0,
    Game = 1,
    Application = 2,
    Tool = 4,
    Demo = 8,
    Deprecated = 16,
    DLC = 32,
    Guide = 64,
    Driver = 128,
    Config = 256,
    Hardware = 512,
    Franchise = 1024,
    Video = 2048,
    Plugin = 4096,
    MusicAlbum = 8192,
    Series = 16384,
    Comic = 32768,
    Beta = 65536,
    Shortcut = 1073741824,
}

export enum AutoUpdateBehavior {
    Always = 0, // (Always keep this game updated)
    Launch = 1, // (Only update this game when I launch it)
    HighPriority = 2, // (High priority)
}

export enum BackgroundDownloadsBehavior {
    Pause = 0,
    Always = 1,
    Never = 2,
}


export interface Unregisterable {
    /**
     * Unregister the callback.
     */
    unregister(): void;
}