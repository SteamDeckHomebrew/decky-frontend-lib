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
     * @param {number} handle - The screenshot handle to use.
     * @returns {void}
     */
    BrowseScreenshotForApp(appId: string, handle: number): void;

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

    /**
     * Download a workshop item.
     * @param {number} appId - The ID of the application.
     * @param {string} itemId - The ID of the workshop item.
     * @param {boolean} param1 - Additional parameter (exact usage may vary).
     * @returns {void}
     */
    DownloadWorkshopItem(appId: number, itemId: string, param1: boolean): void;

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
     * @remarks This function checks for the "sku.sis" file in that path.
     */
    GetBackupsInFolder(appBackupPath: string): Promise<string | undefined>;

    /**
     * @param appId - The ID of the application.
     * @returns {Promise<string>} - A Promise that resolves to a stringified object.
     */
    GetCachedAppDetails(appId: number): Promise<string>; // todo: Parsing nightmare

    GetCloudPendingRemoteOperations(appId: number): Promise<any>;

    GetConflictingFileTimestamps(appId: number): Promise<ConflictingFileTimestamp>;

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

    GetGameActionForApp(
        appId: string,
        callback: (
            param0: number /*flag check? for validity*/,
            appId: number | string,
            param2: string /* "LaunchApp", need to look for more to document*/,
        ) => void,
    ): void;

    /**
     * Retrieves launch options for a specified application.
     * These options may include different configurations or settings for launching the application, such as DirectX, Vulkan, OpenGL, 32-bit, 64-bit, etc.
     * This function does not retrieve launch/argument options inputted by the user.
     * @param {number} appId - The ID of the application.
     * @returns {Promise<LaunchOption[]>} - A Promise that resolves to an array of launch options for the specified application.
     */
    GetLaunchOptionsForApp(appId: number): Promise<LaunchOption[]>;

    /**
     * @returns {Promise<ArrayBuffer>} A Promise that resolves to a ProtoBuf message. If deserialized, returns {@link LibraryBootstrapData}.
     */
    GetLibraryBootstrapData(): Promise<ArrayBuffer>;

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
     * The soundtrack has to be installed.
     * @param {number} appId - The ID of the soundtrack application.
     * @returns {Promise<SoundtrackDetails>} - A Promise that resolves to the details of the soundtrack associated with the specified soundtrack application.
     */
    GetSoundtrackDetails(appId: number): Promise<SoundtrackDetails>;

    // [...appStore.m_mapStoreTagLocalization.keys()]
    GetStoreTagLocalization(tags: number[]): Promise<StoreTagLocalization[]>;

    /**
     * Retrieves a list of subscribed workshop item details for a specific application.
     * @param {number} appId - The ID of the application to retrieve subscribed workshop item details for.
     * @param {string[]} itemIds - Workshop item IDs to retrieve details for.
     * @returns {Promise<WorkshopItemDetails[] | OperationResponse>} - A Promise that resolves to an array of subscribed workshop item details for the specified application.
     * @throws Throws if the query failed.
     */
    GetSubscribedWorkshopItemDetails(appId: number, itemIds: string[]): Promise<WorkshopItemDetails[] | OperationResponse>;

    /**
     * Retrieves a list of subscribed workshop items for a specific application.
     * @param {number} appId - The ID of the application to retrieve subscribed workshop items for.
     * @returns {Promise<WorkshopItem[]>} - A Promise that resolves to an array of subscribed workshop items for the specified application.
     */
    GetSubscribedWorkshopItems(appId: number): Promise<WorkshopItem[]>;

    InstallFlatpakAppAndCreateShortcut(appName: string, appCommandLineOptions: string): Promise<any>; // returns {"appid":0,"strInstallOutput":""}
    JoinAppContentBeta(appId: number, param1: any): any;

    JoinAppContentBetaByPassword(appId: number, param1: any): any;

    ListFlatpakApps(): Promise<any>;

    LoadEula(appId: number): Promise<EndUserLicenseAgreement[]>; // Doesn't bring up the EULA dialog, just returns the eula data
    MarkEulaAccepted: any;
    MarkEulaRejected: any;

    /**
     * Move specified workshop item load order.
     * @param appId - The ID of the application.
     * @param oldOrder - The item to move, referenced by its position number.
     * @param newOrder - The position number to move the item to.
     * @returns {void}
     * @remarks Orders are zero-indexed.
     */
    MoveWorkshopItemLoadOrder(appId: number, oldOrder: number, newOrder: number): void;

    /**
     * Opens the settings dialog for a specific application.
     * @param {number} appId - The ID of the application for which to open the settings dialog.
     * @param {string} section - The section (tab) to switch to.
     * @returns {void}
     */
    OpenAppSettingsDialog(appId: number, section: string): void;

    PromptToChangeShortcut(): Promise<any>; // todo: unknown, prompts file picker

    /**
     * Raises the window for a given application.
     * @param {string} appId - The ID of the application to raise the window of.
     * @returns {Promise<number>} - A Promise that resolves to a number.
     * @todo Returns a result enum? 1 if ok, 2 if not running
     */
    RaiseWindowForGame(appId: number): Promise<number>; // ResumeGameInProgress

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

    /**
     * If `data` is deserialized, returns {@link AppOverview_Change}.
     * @remarks This is not a mistake, it doesn't return anything.
     */
    RegisterForAppOverviewChanges(callback: (data: ArrayBuffer) => void): void;

    RegisterForDRMFailureResponse(
        callback: (appid: number, eResult: number, errorCode: number) => void,
    ): Unregisterable | any;

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
    RegisterForGameActionStart(
        callback: (gameActionIdentifier: number, appId: string, action: string, param3: number) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when a game action task changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionTaskChange(
        callback: (
            gameActionIdentifier: number,
            appId: string,
            action: string,
            requestedAction: string,
            param4: string,
        ) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when a user requests a game action.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForGameActionUserRequest(
        callback: (
            gameActionIdentifier: number,
            appId: string,
            action: string,
            requestedAction: string,
            appId2: string,
        ) => void,
    ): Unregisterable | any;

    /**
     * @todo returns undefined (now)?
     */
    RegisterForLocalizationChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    RegisterForPrePurchasedAppChanges(callback: () => void): Unregisterable | any; // Unknown, did have it show up a few times, but not callback parameters
    RegisterForShowMarketingMessageDialog: Unregisterable | any;

    /**
     * Registers a callback function to be notified when workshop items are added or removed from a Steam application.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForWorkshopChanges(callback: (appId: number) => void): Unregisterable | any;

    RegisterForWorkshopItemDownloads(
        appId: number,
        callback: (appId: number, publishedFileId: string, param2: number) => void,
    ): Unregisterable | any;

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

    ReportMarketingMessageDialogShown(): void;

    RequestIconDataForApp(appId: number): any;

    RequestLegacyCDKeysForApp(appId: number): any;

    // collectionStore.GetCollection('hidden').allApps.map(e => e.appid)
    // May be broken?
    ResetHiddenState(appIds: number[]): Promise<void>;

    /**
     * Runs a game with specified parameters.
     * @param {string} appId - The ID of the application to run.
     * @param {string} launchOptions - Additional launch options for the application.
     * @param {number} param2 - Additional parameter (exact usage may vary).
     * @param {AppLaunchSource} launchSource
     * @remarks `launchOptions` is appended before the ones specified in the application's settings.
     * @returns {void}
     */
    RunGame(appId: string, launchOptions: string, param2: number, param3: AppLaunchSource): void;

    /*
      function u(e, t) {
        return t instanceof Map || t instanceof Set ? Array.from(t) : t;
      }
      SteamClient.Apps.SaveAchievementProgressCache(
        JSON.stringify(this.m_achievementProgress, u)
      );
    */
    SaveAchievementProgressCache(progress: string): any;

    /**
     * Scans the system for installed non-Steam applications.
     * @returns {Promise<NonSteamApp[]>} A Promise that resolves to an array of NonSteamApp objects representing installed non-Steam applications.
     * @remarks This function scans the user's system for installed applications that are not part of the Steam library. It does not scan for shortcuts added to the Steam library.
     *
     * On Linux, it scans inside /usr/share/applications and $XDG_DATA_HOME/applications.
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

    SetCachedAppDetails(appId: number, details: string): any;

    SetControllerRumblePreference(appId: number, param1: number): any; // param1 - enum for preference

    /**
     * Sets the custom artwork for a given application.
     * @param {number} appId - The ID of the application to set custom artwork for.
     * @param {string} base64Image - Base64 encoded image.
     * @param {string} imageType - "jpeg" or "png".
     * @param {AppArtworkAssetType} assetType - The type of artwork to set.
     * @returns {Promise<any>} A Promise that resolves after the custom artwork is set.
     */
    SetCustomArtworkForApp(
        appId: number,
        base64Image: string,
        imageType: string,
        assetType: AppArtworkAssetType,
    ): Promise<any>;

    SetCustomLogoPositionForApp(appId: number, details: string): Promise<void>; // I've tried sending escaped LogoPosition JSON, but it doesn't seem to work

    SetDLCEnabled(appId: number, appDLCId: number, value: boolean): void;

    /**
     * Set a local screenshot's caption.
     * @param {string} appId - The application ID the screenshot belongs to.
     * @param {number} hHandle - The handle of the screenshot.
     * @param {string} caption
     * @returns {void}
     */
    SetLocalScreenshotCaption(appId: string, hHandle: any, caption: string): void;

    /**
     * Set a local screenshot's privacy state.
     * @param {string} appId - The application ID the screenshot belongs to.
     * @param {number} hHandle - The handle of the screenshot.
     * @param {FilePrivacyState} privacy - Screenshot privacy state.
     */
    SetLocalScreenshotPrivacy(appId: string, hHandle: any, privacy: FilePrivacyState): void;

    /**
     * Set a local screenshot's spoiler state.
     * @param {string} appId - The application ID the screenshot belongs to.
     * @param {number} hHandle - The handle of the screenshot.
     * @param {boolean} spoilered - Is the screenshot spoilered?
     */
    SetLocalScreenshotSpoiler(appId: string, hHandle: any, spoilered: boolean): void;

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
     * Sets the workshop items disabled state.
     * @param {number} appId - The ID of the application.
     * @param {string[]} itemIds - Workshop item IDs to change the state for.
     * @param {boolean} value - `true` to disable, `false` otherwise.
     * @returns {void}
     */
    SetWorkshopItemsDisabledLocally(appId: number, itemIds: string[], value: boolean): void;

    /**
     * Sets the workshop items load order for a specified application.
     * @param {number} appId - The ID of the application.
     * @param {string[]} itemIds - Workshop item IDs.
     * @returns {void}
     * @remarks `itemIds` has to be the full list of subscribed items, otherwise the specified items get moved to the last position.
     */
    SetWorkshopItemsLoadOrder(appId: number, itemIds: string[]): void;

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

    // "#AppProperties_SteamInputDesktopConfigInLauncher"
    ToggleAllowDesktopConfiguration(appId: number): any;

    ToggleAppFamilyBlockedState(appId: number): any;

    /**
     * Toggles the Steam Cloud synchronization for game saves for a specific application.
     * @param {number} appId - The ID of the application.
     * @returns {void}
     * @remarks This function modifies the "<STEAMPATH>/userdata/<STEAMID3>/7/remote/sharedconfig.vdf" file.
     */
    ToggleAppSteamCloudEnabled(appId: number): void;

    // "#AppProperties_EnableSteamCloudSyncOnSuspend"
    ToggleAppSteamCloudSyncOnSuspendEnabled(appId: number): any;

    /**
     * Toggles the Steam Overlay setting for a specific application.
     * @param {number} appId - The ID of the application.
     * @returns {void}
     */
    ToggleEnableSteamOverlayForApp(appId: number): void;

    // "#AppProperties_ResolutionOverride_Internal"
    ToggleOverrideResolutionForInternalDisplay(appId: number): any;

    UninstallFlatpakApp(app: string): Promise<boolean>;

    /**
     * Verifies the integrity of an app's files.
     * @param {number} appId - The ID of the app to verify.
     */
    VerifyApp(appId: number): Promise<any>; // todo: returns {"nGameActionID":9}
}

export interface Auth {
    GetLocalHostname(): Promise<string>;

    /**
     * @returns {Promise<ArrayBuffer>} A Promise that resolves to a ProtoBuf message. If deserialized, returns {@link Authentication_DeviceDetails}.
     */
    GetMachineID(): Promise<ArrayBuffer>;

    GetRefreshInfo(): Promise<AuthRefreshInfo>;

    GetSteamGuardData: any;

    IsSecureComputer(): Promise<boolean>;

    SetLoginToken(refreshToken: string, accountName: string): any;

    SetSteamGuardData(accountName: string, newGuardData: string): any;

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
    RegisterForViewerRequests(
        callback: (viewerFriendCode: number, param1: number, param2: number) => void,
    ): Unregisterable | any;

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

    ClearAllBrowsingData(): void;

    ClearHistory(): void;

    CloseDevTools(): void;

    GetBrowserID(): Promise<number>;

    GetSteamBrowserID(): Promise<number>; // 16-bit unsigned integer?

    /**
     * Hides the mouse cursor until input.
     * @returns {void}
     */
    HideCursorUntilMouseEvent(): void;

    InspectElement(clientY: number, clientX: number): void; // yup that's right, clientY and clientX are reversed

    NotifyUserActivation(): void;

    OpenDevTools(): void;

    /**
     * @todo unconfirmed
     */
    RegisterForGestureEvents(callback: (gesture: TouchGesture) => void): Unregisterable | any;

    RegisterForOpenNewTab: Unregisterable | any;

    SetShouldExitSteamOnBrowserClosed(value: boolean): any;

    SetTouchGesturesToCancel(gestures: TouchGestureType[]): void;

    /**
     * Prompts and downloads a file.
     * @param {string} url - The URL of the file to download.
     * @returns {void}
     */
    StartDownload(url: string): void;
}

export interface BrowserView {
    Create(browser: BrowserViewInit | undefined): BrowserViewPopup;

    CreatePopup(browser: BrowserViewInit | undefined): {
        strCreateURL: string;
        browserView: BrowserViewPopup;
    };

    Destroy(browser: BrowserViewInit): void;

    PostMessageToParent(message: string, args: string): void;
}

export interface ClientNotifications {
    /**
     * Displays a Steam notification.
     * @param {ClientUINotification} notification - Notification type.
     * @param {string} options - Stringified object of `NotificationOptions`.
     * @param {function} callback
     */
    DisplayClientNotification(notification: ClientUINotification, options: string, callback: any): void;

    OnRespondToClientNotification: any;
}

export interface Cloud {
    ResolveAppSyncConflict(appId: number, keepLocal: boolean): any;

    RetryAppSync(appId: number): any;
}

export interface CommunityItems {
    DownloadItemAsset(communityItemId: string, param1: any, param2: string): any;

    GetItemAssetPath(communityItemId: string, param1: any, param2: string): any;

    RemoveDownloadedItemAsset(communityItemId: string, param1: any, param2: string): any;
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
    GenerateLocalStartupMoviesThumbnails(param0: number): Promise<any>;

    GetDownloadedStartupMovies(param0: string): Promise<any>;

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
    RegisterForDownloadItems(
        callback: (isDownloading: boolean, downloadItems: DownloadItem[]) => void,
    ): Unregisterable | any;

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

    GetFamilyGroupInfo(): Promise<string>;

    RegisterForKickedBorrower: any;

    RequestLocalDeviceAuthorization(steam64Id: string): Promise<number>;

    // param0 - account id?
    UpdateAuthorizedBorrower(param0: number, param1: boolean): Promise<number>;
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

    SetFriendSettings(details: string): any; // stringified object
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
     * @param {string} connectString - Additional parameters for the invitation.
     * @returns {Promise<boolean>} A Promise that resolves to true if the user was invited successfully, false otherwise.
     */
    InviteUserToGame(steamId: string, appId: number, connectString: string): Promise<boolean>;

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
    RegisterForAchievementNotification(
        callback: (achievementNotification: AchievementNotification) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when an app lifetime notification is received.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppLifetimeNotifications(
        callback: (appLifetimeNotification: AppLifetimeNotification) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when a screenshot notification is received.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForScreenshotNotification(
        callback: (screenshotNotification: ScreenshotNotification) => void,
    ): Unregisterable | any;
}

/**
 * Represents functions related to input and controllers in Steam.
 */
export interface Input {
    CalibrateControllerIMU(param0: any): any; // param0 - m_controllerStateDeviceIdx
    CalibrateControllerJoystick(param0: any): any; // param0 - m_controllerStateDeviceIdx
    CalibrateControllerTrackpads(param0: any): any; // param0 - m_controllerStateDeviceIdx
    CancelGyroSWCalibration(): any;

    ClearSelectedConfigForApp(appId: number, controllerIndex: number): any;

    CloseDesktopConfigurator: any;

    /**
     * Writes text.
     * @param {string} textToWrite - The text to write.
     * @returns {void}
     */
    ControllerKeyboardSendText(textToWrite: string): void;

    /**
     * Sets a specified key's pressed state.
     * @param {number} keyIndex - The key index to set the state for.
     * @param {boolean} state - true for pressed, false otherwise.
     * @returns {void}
     * @example
     * Send paste command:
     * ```
     * SteamClient.Input.ControllerKeyboardSetKeyState(103, true);
     * SteamClient.Input.ControllerKeyboardSetKeyState(25, true);
     * SteamClient.Input.ControllerKeyboardSetKeyState(25, false);
     * SteamClient.Input.ControllerKeyboardSetKeyState(103, false);
     * ```
     */
    ControllerKeyboardSetKeyState(keyIndex: number, state: boolean): void;

    DeauthorizeControllerAccount: any;

    DecrementCloudedControllerConfigsCounter(): any;

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

    GetTouchMenuIconsForApp(appId: number): Promise<any>;

    GetXboxDriverInstallState(): Promise<any>; // "{"nResult":0}"
    IdentifyController(controllerIndex: number): any;

    InitControllerSounds(): any;

    InitializeControllerPersonalizationSettings: any;

    ModalKeyboardDismissed(): void;

    OpenDesktopConfigurator: any;

    PreviewConfiguForAppAndController(appId: number): any;

    PreviewControllerLEDColor(flHue: number, flSaturation: number, flBrightness: number): any;

    QueryControllerConfigsForApp(appId: number): any;

    RegisterForActiveControllerChanges: Unregisterable | any; // {"nActiveController":0}
    RegisterForConfigSelectionChanges(callback: (param0: number, param1: number) => void): Unregisterable | any;

    RegisterForControllerAccountChanges: Unregisterable | any;

    RegisterForControllerAnalogInputMessages(
        callback: (controllerAnalogInputMessages: ControllerAnalogInputMessage[]) => void,
    ): Unregisterable | any;

    RegisterForControllerCommandMessages(
        callback: (controllerCommandMessage: ControllerCommandMessage) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback for changes in controller configuration cloud state.
     * @param {(controllerConfigCloudStateChange: ControllerConfigCloudStateChange) => void} callback - The callback function for config cloud state changes.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForControllerConfigCloudStateChanges(
        callback: (controllerConfigCloudStateChange: ControllerConfigCloudStateChange) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback for receiving controller configuration info messages (controller layouts query, personal controller layout query).
     * @param {(controllerConfigInfoMessages: ControllerConfigInfoMessageList[] | ControllerConfigInfoMessageQuery[]) => void} callback - The callback function for controller config info messages.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @remarks Do Not Use, this will break the controller layout selection unless you know what you are doing.
     */
    RegisterForControllerConfigInfoMessages(
        callback: (
            controllerConfigInfoMessages: ControllerConfigInfoMessageList[] | ControllerConfigInfoMessageQuery[],
        ) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be invoked when controller input messages are received.
     * @param {(controllerInputMessages: ControllerInputMessage[]) => void} callback - The callback function to be invoked when controller input messages are received.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForControllerInputMessages(
        callback: (controllerInputMessages: ControllerInputMessage[]) => void,
    ): Unregisterable | any;

    RegisterForControllerListChanges(callback: (controllerListChanges: ControllerInfo[]) => void): Unregisterable | any;

    /**
     * Registers a callback for changes in the controller state (buttons presses, triggers presses, joystick changes etc...).
     * @param {(controllerStateChanges: ControllerStateChange[]) => void} callback - The callback function for controller state changes.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForControllerStateChanges(
        callback: (controllerStateChanges: ControllerStateChange[]) => void,
    ): Unregisterable | any;

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

    RestoreControllerPersonalizationSettings(controllerIndex: number): any;

    SaveControllerCalibration: any;
    SaveControllerPersonalizationSettings: any;
    SaveControllerSounds: any;

    SaveEditingControllerConfiguration(controllerIndex: number, sharedConfig: boolean): any;

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

    /**
     * Sets the mouse position.
     * @param {number} pid - 0
     * @param {number} x - Mouse X position.
     * @param {number} y - Mouse Y position.
     * @returns {void}
     */
    SetMousePosition(pid: number, x: number, y: number): void;

    SetSelectedConfigForApp(): any;

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

    StandaloneKeyboardDismissed(): any;

    StartControllerDeviceSupportFlow(param0: any, param1: any, callback: (param2: any) => void): any;

    StartEditingControllerConfigurationForAppIDAndControllerIndex: any;
    StartGyroSWCalibration: any;
    StopEditingControllerConfiguration: any;
    SwapControllerModeInputBindings: any;
    SwapControllerOrder: any;

    SyncCloudedControllerConfigs(): any;

    // type - enum
    TriggerHapticPulse(controllerIndex: number, type: number, param2: number): any;

    TriggerSimpleHapticEvent(
        controllerIndex: number,
        type: number,
        intensity: number,
        dbGain: number,
        param4: number,
    ): any;

    UnregisterForControllerStateChanges(): void;

    UnregisterForUIVisualization(controllerIndex: number): any;

    UploadChangesForCloudedControllerConfigs(): any;
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
     * @param {boolean} dontPrompt - Whether to *not* prompt the user to uninstall.
     * @returns {void}
     */
    OpenUninstallWizard(appIds: number[], dontPrompt: boolean): void;

    RegisterForShowConfirmUninstall: Unregisterable | any; // Broken? doesn't seem to work

    /**
     * Registers a callback function to be called when the "Failed Uninstall" dialog is shown.
     * @param {function} callback - The callback function to be called when the dialog is shown.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForShowFailedUninstall(callback: (appId: number, reason: AppUpdateError) => void): Unregisterable | any;

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
    // callback arguments are the same as in PostMessage
    RegisterForMessages(
        section: string,
        callback: (section: string, param1: string, message: string) => void,
    ): Unregisterable | any;

    /*
    function m(e) {
        SteamClient.Messaging.PostMessage("LibraryCommands", "ShowFriendChatDialog", JSON.stringify({
            steamid: e.persona.m_steamid.ConvertTo64BitString()
        }))
    }
     */
    PostMessage(section: string, param1: string, message: string): void;
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
     * @param {MusicRepeatStatus} status - The repeat status.
     */
    SetPlayingRepeatStatus(status: MusicRepeatStatus): void;

    /**
     * Sets the shuffle status for music playback.
     * @param {boolean} value - True to enable shuffle, false to disable shuffle.
     */
    SetPlayingShuffled(value: boolean): void;

    /**
     * Sets the volume for music playback.
     * @param {number} volume - The volume level to set.
     * @remarks Ranges from 0 to 100.
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
    /**
     * If `data` is deserialized, returns {@link ClientNotificationFriendMessage},
     * or {@link ClientNotificationGroupChatMessage}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForNotifications(
        callback: (notificationIndex: number, type: ClientUINotification, data: ArrayBuffer) => void,
    ): Unregisterable | any;
}

export interface VRDevice {
    BIsConnected: any;
    RegisterForDeviceConnectivityChange: Unregisterable | any;
    RegisterForVRDeviceSeenRecently: Unregisterable | any;
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

    GetWebSecret(): Promise<string>;

    InstallVR(): any;

    Keyboard: Keyboard;
    PathProperties: PathProperties;

    QuitAllVR(): any;

    RegisterForButtonPress: Unregisterable | any;
    RegisterForHMDActivityLevelChanged: Unregisterable | any;
    RegisterForInstallDialog: Unregisterable | any;
    RegisterStartupErrors: Unregisterable | any;
    RegisterForVRHardwareDetected: Unregisterable | any;
    SetOverlayInteractionAffordance: any;

    ShowNotification(title: string, description: string): any;

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

    GetOverlayBrowserInfo(): any;

    HandleGameWebCallback(url: string): any;

    HandleProtocolForOverlayBrowser(appId: number, protocol: string): any;

    RegisterForActivateOverlayRequests: Unregisterable | any;

    /**
     * Registers a callback function to be called when a microtransaction authorization is requested.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuth(
        callback: (appId: number, microTxnId: string, realm: SteamRealm, microTxnUrl: string) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when a microtransaction authorization is dismissed by the user in Steam's authorization page.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuthDismiss(callback: (appId: number, microTxnId: string) => void): Unregisterable | any;

    RegisterForNotificationPositionChanged(
        callback: (appId: any, position: any, horizontalInset: number, verticalInset: number) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when an overlay is activated or closed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForOverlayActivated(
        callback: (popUpContextId: number, appId: number, active: boolean, param3: boolean) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when the overlay browser protocols change.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForOverlayBrowserProtocols(
        callback: (browseProtocols: OverlayBrowserProtocols) => void,
    ): Unregisterable | any;

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
     * @returns {Promise<Result>} - A Promise that resolves to a number representing the result of the unlock operation.
     */
    UnlockParentalLock(pin: string, param1: boolean): Promise<Result>;
}

export interface RemotePlay {
    BCanAcceptInviteForGame: any;
    BCanCreateInviteForGame: any;

    BCanHostIsolatedGameAudio(): Promise<boolean>;

    BEnabled(): Promise<boolean>;

    BRemotePlayTogetherGuestOnPhoneOrTablet(steam64Id: string, guestId: number): Promise<boolean>;

    BRemotePlayTogetherGuestSupported(): Promise<boolean>;

    CancelInviteAndSession(steam64Id: string): any;

    CancelInviteAndSessionWithGuestID(steam64Id: string, guestId: number): any;

    CloseGroup(): Promise<number>;

    CreateGroup: any;

    CreateInviteAndSession(steam64Id: string, param1: any): any;

    CreateInviteAndSessionWithGuestID(steam64Id: string, guestId: number, param2: any): any;

    GetClientStreamingBitrate(): Promise<number>; //todo: -1 not streaming??
    GetClientStreamingQuality(): Promise<number>; //todo: -1 not streaming??
    GetControllerType(param0: number): Promise<ControllerType>; // todo: param0 with value 0 is host controller type - param0 is likely an index of clients or guestId?
    GetGameSystemVolume(): Promise<number>;

    GetPerUserInputSettings(steam64Id: string): any;

    GetPerUserInputSettingsWithGuestID(steam64Id: string, guestId: number): any;

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

    RegisterForInputUsed(
        callback: (steam64Id: string, type: ClientUsedInputType, guestId: number) => void,
    ): Unregisterable | any; // only fires on host

    RegisterForInviteResult: Unregisterable | any;

    RegisterForNetworkUtilizationUpdate(
        callback: (steam64Id: string, guestId: number, networkUtilization: number, networkDuration: number) => void,
    ): Unregisterable | any; // only fires on host

    RegisterForPlaceholderStateChanged(callback: (isShowingPlaceholder: boolean) => void): Unregisterable | any;

    RegisterForPlayerInputSettingsChanged: Unregisterable | any;

    RegisterForQualityOverride(callback: (hostStreamingQualityOverride: number) => void): Unregisterable | any;

    RegisterForRemoteClientLaunchFailed: Unregisterable | any;

    RegisterForRemoteClientStarted(callback: (steam64Id: string, appId: number) => void): Unregisterable | any; // only fires on client

    RegisterForRemoteClientStopped(callback: (steam64Id: string, appId: number) => void): Unregisterable | any; // only fires on client

    RegisterForSessionStarted(callback: (steam64Id: any, gameId: any, guestId: any) => void): Unregisterable | any;

    RegisterForSessionStopped(callback: (steam64Id: any, guestId: any) => void): Unregisterable | any;

    RegisterForSettingsChanges(callback: (remotePlaySettings: RemotePlaySettings) => void): Unregisterable | any;

    SetClientStreamingBitrate(bitrate: number): void;

    SetClientStreamingQuality(quality: number): void;

    SetGameSystemVolume(volume: number): void;

    SetPerUserControllerInputEnabled(steam64Id: string, enabled: boolean): any;

    SetPerUserControllerInputEnabledWithGuestID(steam64Id: string, guestId: number, enabled: boolean): any;

    SetPerUserKeyboardInputEnabled(steam64Id: string, enabled: boolean): any;

    SetPerUserKeyboardInputEnabledWithGuestID(steam64Id: string, guestId: number, enabled: boolean): any;

    SetPerUserMouseInputEnabled(steam64Id: string, enabled: boolean): any;

    SetPerUserMouseInputEnabledWithGuestID(steam64Id: string, guestId: number, enabled: boolean): any;

    SetRemoteDeviceAuthorized: any;

    SetRemoteDevicePIN(pin: number): void;

    SetRemotePlayEnabled(enabled: boolean): void;

    SetStreamingClientConfig: any;
    SetStreamingClientConfigEnabled: any;

    SetStreamingDesktopToRemotePlayTogetherEnabled(enabled: boolean): any;

    SetStreamingP2PScope: any;
    SetStreamingServerConfig: any;
    SetStreamingServerConfigEnabled: any;

    StopStreamingClient(): void;

    StopStreamingSession: any;
    StopStreamingSessionAndSuspendDevice: any;

    UnlockH264(): any;

    UnpairRemoteDevices(): void; // unpairs all devices
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
    UploadLocalScreenshot(
        appId: string,
        localScreenshot_hHandle: number,
        filePrivacyState: FilePrivacyState,
    ): Promise<boolean>;
}

/**
 * Represents functionality for the server browser.
 */
export interface ServerBrowser {
    /**
     * Adds a favorite server.
     * @param {ServerBrowserServerFull} server - The server to add.
     * @returns {Promise<string>} A Promise that resolves to an empty string if successful, `Invalid/missing IPv4?` if failed.
     * @todo Refreshed the favorite servers list upon adding once, but doesn't now. :-(
     */
    AddFavoriteServer(server: ServerBrowserServerFull): Promise<string>;

    /**
     * Adds a favorite server by IP.
     * @param {string} ip - The IP to add to favorite servers.
     * @returns {Promise<string>} A Promise that resolves to an empty string if successful, localization string if failed.
     */
    AddFavoriteServersByIP(ip: string): Promise<string>;

    CancelServerQuery(dialogId: number, queryServer: number): void;

    /**
     * Connects to a server from a given dialog.
     * @param {number} dialogId - The dialog ID to use.
     * @param {string} password - Server password, empty if none.
     * @returns {Promise<JoinServerError>} A Promise that resolves to a connection status.
     */
    ConnectToServer(dialogId: number, password: string): Promise<JoinServerError>;

    /**
     * Creates a server info dialog, on which your friend is playing on.
     * @param {number} pid - 0
     * @param {string} steamId - A Steam64 ID of a friend.
     * @returns {void}
     */
    CreateFriendGameInfoDialog(pid: number, steamId: string): void;

    /**
     * Creates a server info dialog.
     * @param {string} ip - The IP to create a dialog for.
     * @param {number} port - The IP's port.
     * @param {number} queryPort -
     * @returns {Promise<number>} A Promise that resolves to the current dialog ID.
     */
    CreateServerGameInfoDialog(ip: string, port: number, queryPort: number): Promise<number>;

    /**
     * Retrieves the server list.
     * @param {number} appId - The game ID, 0 for every game.
     * @param {ServerBrowserTab} queryType - The tab to use.
     * @param {string[]} filters - Server filters.
     * @param {function} serverCallback - What to do with the found server?
     * @param {function} requestCompletedCallback - The callback function to be called when the request is completed.
     * @returns {Promise<number>} A Promise that resolves to the current server list request ID.
     * @throws Throws if the query type is unknown.
     * @throws Throws if the filter list isn't key/value pairs, i.e. of an even length.
     * @remarks Stops at 10000 if there are more servers to be found.
     * @example
     * Filter examples, may be combined:
     * ```
     * [ 'gamedir', 'cstrike' ] // Doesn't work?
     * [ 'hasplayers', '1' ] // Only works with "1"?
     * [ 'notfull', '1' ] // Doesn't work?
     * [ 'map', 'cs_office' ] // Has to be an exact match!
     * ```
     */

    /*
    The enum in question:

    (t =
    'lan' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoServersMatch'
            : '#ServerBrowser_NoLanServers'
        : 'internet' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoInternetGamesMatch'
            : e == l.zS.k_EServerFailedToRespond
            ? '#ServerBrowser_MasterServerNotResponsive'
            : e == l.zS.k_ENoServersListedOnMasterServer
            ? '#ServerBrowser_MasterServerHasNoServersListed'
            : '#ServerBrowser_NoInternetGamesResponded'
        : 'favorites' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoServersMatch'
            : '#ServerBrowser_NoFavoriteServers'
        : 'history' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoHistoryServersMatch'
            : '#ServerBrowser_NoServersPlayed'
        : 'friends' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoServersMatch'
            : '#ServerBrowser_NoFriendsServers'
        : 'BUGBUG'),
    */
    CreateServerListRequest(
        appId: number,
        queryType: ServerBrowserTab,
        filters: string[],
        serverCallback: (server: ServerBrowserServerFull) => void,
        requestCompletedCallback: (response: number) => void,
    ): Promise<number | OperationResponse>;

    /**
     * Destroys the game info dialog functions (but not the window).
     * @param {number} dialogId - The dialog ID to use.
     * @returns {void}
     * @remarks ServerBrowser.CancelServerQuery may throw if it tries to ping the server.
     */
    DestroyGameInfoDialog(dialogId: number): void;

    /**
     * Stops retrieving the server list.
     * @param {number} activeServerListRequestId - The active server request ID to use.
     * @returns {void}
     */
    DestroyServerListRequest(activeServerListRequestId: number): void;

    /**
     * Gets a list of games that support the server browser feature.
     * @returns {Promise<ServerBrowserGame[]>} A Promise that resolves to a list of games.
     */
    GetMultiplayerGames(): Promise<ServerBrowserGame[]>;

    /**
     * Gets the server browser preferences.
     * @returns {Promise<ServerBrowserPreferences>} A Promise that resolves to server browser preferences.
     */
    GetServerListPreferences(): Promise<ServerBrowserPreferences>;

    /**
     * Pings the server of a specified dialog ID.
     * @param {number} dialogId - The dialog ID to use.
     * @returns {Promise<number | OperationResponse>}
     */
    PingServer(dialogId: number): Promise<number | OperationResponse>;

    /**
     * Registers a callback function to be called when a server gets added to favorite servers.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} An object that can be used to unregister the callback.
     */
    RegisterForFavorites(callback: (list: ServerBrowserFavoritesAndHistory) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when idk
     * @param {number} dialogId - The dialog ID to use.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} An object that can be used to unregister the callback.
     */
    RegisterForFriendGamePlayed(
        dialogId: number,
        callback: (server: ServerBrowserFriendServer) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when a server info dialog opens.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} An object that can be used to unregister the callback.
     */
    RegisterForGameInfoDialogs(callback: (dialogs: ServerBrowserDialog[]) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when player details get requested.
     * @param {number} dialogId - The dialog ID to use.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} An object that can be used to unregister the callback.
     */
    RegisterForPlayerDetails(
        dialogId: number,
        callback: (player: ServerBrowserPlayer | ServerBrowserPlayerRefreshStatus) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when a server gets pinged.
     * @param {number} dialogId - The dialog ID to use.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} An object that can be used to unregister the callback.
     */
    RegisterForServerInfo(dialogId: number, callback: (server: ServerBrowserServerFull) => void): Unregisterable | any;

    /**
     * Removes a server from favorite servers.
     * @param {ServerBrowserServer} server - The server to remove.
     * @returns {void}
     */
    RemoveFavoriteServer(server: ServerBrowserServer): void;

    /**
     * Removes a server from history of played servers.
     * @param {ServerBrowserServer} server - The server to remove.
     * @returns {void}
     */
    RemoveHistoryServer(server: ServerBrowserServer): void;

    /**
     * Requests player details for a specific dialog.
     * @param {number} dialogId - The dialog ID to use.
     * @returns {Promise<number | OperationResponse>}
     */
    RequestPlayerDetails(dialogId: number): Promise<number | OperationResponse>;

    /**
     * Sets the server browser preferences.
     * @param {ServerBrowserPreferences} prefs - Server list preferences.
     * @returns {void}
     */
    SetServerListPreferences(prefs: ServerBrowserPreferences): void;
}

export interface Settings {
    AddClientBeta(param0: any, name: string): any;

    /**
     * Clears HTTP cache in `<STEAMPATH>/appcache/httpcache`.
     * @returns {void}
     */
    ClearAllHTTPCaches(): void;

    /**
     * Clears download cache and logs you out.
     * @returns {void}
     */
    ClearDownloadCache(): void;

    GetAccountSettings(): Promise<AccountSettings>;

    GetAppUsesP2PVoice(appId: number): Promise<boolean>;

    GetAvailableLanguages(): Promise<Language[]>;

    GetAvailableTimeZones(): Promise<TimeZone[]>;

    // Returns the current language "english"
    GetCurrentLanguage(): Promise<string>;

    GetGlobalCompatTools(): Promise<CompatibilityToolInfo[]>;

    /**
     * @returns {Promise<ArrayBuffer>} A Promise that resolves to a ProtoBuf message. If deserialized, returns {@link MsgMonitorInfo}.
     */
    GetMonitorInfo(): Promise<ArrayBuffer>;

    GetOOBETestMode(): Promise<boolean>;

    GetRegisteredSteamDeck(): Promise<RegisteredSteamDeck>;

    // Returns the current timezone
    GetTimeZone(): Promise<string>;

    GetWindowed(): Promise<boolean>;

    IgnoreSteamDeckRewards(): void;

    /**
     * Opens the Windows microphones dialog.
     * @returns {void}
     */
    OpenWindowsMicSettings(): void;

    RegisterForMicVolumeUpdates: Unregisterable | any;

    /**
     * If `data` is deserialized, returns {@link MsgClientSettings}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForSettingsArrayChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    RegisterForSettingsChanges(callback: (steamSettings: SteamSettings) => void): Unregisterable | any;

    RegisterForTimeZoneChange(callback: (timezoneId: string) => void): Unregisterable | any; // When timezone is changed from settings, callback will return new timezoneId
    ReinitMicSettings(): void;

    RequestDeviceAuthInfo(): void;

    //
    SelectClientBeta(nBetaID: any): any;

    // Get from available languages
    SetCurrentLanguage(strShortName: string): void;

    SetEnableSoftProcessKill(value: boolean): void; // Default value is false, this is Valve internal menu

    SetHostname(hostname: string): void;

    SetMicTestMode: any;

    SetOOBETestMode(value: boolean): void;

    SetPreferredMonitor(monitor: string): void;

    SetRegisteredSteamDeck: any;

    /**
     * Sets the "Don't save account credentials on this computer" option.
     * @param {boolean} value - Whether to save account credentials.
     * @returns {void}
     */
    SetSaveAccountCredentials(value: boolean): void;

    SetSetting: any;

    SetSteamPlayEnabled(value: boolean): void;

    SetTimeZone(timezoneId: string): void; // You can get valid timezoneIds from GetAvailableTimeZones()
    SetUseNintendoButtonLayout: any;

    SetWindowed(value: boolean): void;

    SpecifyGlobalCompatTool(strToolName: string): void;

    // "{"result":2,"message":""}"
    ToggleSteamInstall(): any;
}

export interface SharedConnection {
    // hSharedConnection is the number from AllocateSharedConnection()
    AllocateSharedConnection(): Promise<number>;

    // if no such number, sends this warning:
    // src\clientdll\clientsharedconnection.cpp (154) : m_mapSharedConnections.HasElement( hSharedConnection )
    Close(hSharedConnection: number): void;

    RegisterOnBinaryMessageReceived(hSharedConnection: number, callback: (param0: any) => void): Unregisterable | any;

    RegisterOnLogonInfoChanged(hSharedConnection: number, callback: (info: LogonInfo) => void): Unregisterable | any;

    RegisterOnMessageReceived(hSharedConnection: number, callback: (param0: any) => void): Unregisterable | any;

    SendMsg: any;
    SendMsgAndAwaitBinaryResponse: any;

    SubscribeToClientServiceMethod(hSharedConnection: number, param1: any): any;

    SubscribeToEMsg(hSharedConnection: number, param1: any): any;
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
    DeleteKey: Promise<OperationResponse | void>;
    /**
     * @remarks Use {@link SetObject} to set.
     */
    GetJSON: Promise<OperationResponse | string>;
    GetString: Promise<OperationResponse | string>;
    /**
     * @remarks Use {@link SetObject} to get.
     */
    SetObject: Promise<OperationResponse | void>;
    SetString: Promise<OperationResponse | void>;
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
    RegisterForStreamingClientLaunchProgress(
        callback: (actionType: string, taskDetails: string, done: number, total: number) => void,
    ): Unregisterable | any;

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
     * @todo `code` is likely a code, 1 being it started, 10 being host computer is updating game, `result` just returns "complete"
     */
    RegisterForStreamingLaunchComplete(callback: (code: number, result: string) => void): Unregisterable | any;

    RegisterForStreamingShowEula: Unregisterable | any;
    RegisterForStreamingShowIntro: Unregisterable | any;

    /**
     * Registers a callback function to be called when the streaming client receives launch options from the host.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingShowLaunchOptions(
        callback: (appId: number, launchOptions: LaunchOption[]) => void,
    ): Unregisterable | any; // Callback when streaming client receives launch options from host

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
    RegisterForDeviceVolumeChanged(
        callback: (audioDeviceId: number, audioType: number, volume: number) => void,
    ): Unregisterable | any;

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
    /**
     * If `data` is deserialized, returns {@link MsgSystemAudioManagerState}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;
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

    /**
     * If `data` is deserialized, returns {@link MsgSystemDockState}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

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

    /**
     * @todo {@link GameNetworkingUI_ConnectionState}, unconfirmed
     */
    RegisterForConnectionStateUpdate: Unregisterable | any;

    RegisterForConnectivityTestChanges(
        callback: (connectivityTestChange: ConnectivityTestChange) => void,
    ): Unregisterable | any;

    /**
     * If `data` is deserialized, returns {@link MsgNetworkDevicesData}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    SetFakeLocalSystemState(param0: any): any; // enums

    SetProxyInfo(mode: number, address: string, port: number, excludeLocal: boolean): void;

    SetWifiEnabled(value: boolean): Promise<OperationResponse>;

    StartScanningForNetworks(): Promise<OperationResponse>;

    StopScanningForNetworks(): Promise<OperationResponse>;
}

// CMsgSystemPerfUpdateSettings, CMsgSystemPerfState, CMsgSystemPerfSettings
export interface Perf {
    /**
     * If `data` is deserialized, returns {@link MsgSystemPerfDiagnosticInfo}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDiagnosticInfoChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    /**
     * If `data` is deserialized, returns {@link MsgSystemPerfState}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    UpdateSettings(base64: string): any; // serialize
}

export interface Report {
    /**
     * Generates a system report located in /tmp/steamXXXXXX (https://steamloopback.host/systemreports).
     */
    GenerateSystemReport(): Promise<SystemReportReply>;

    /**
     * Saves a report in the Desktop directory.
     * @param reportId The report ID (file name) to save.
     */
    SaveToDesktop(reportId: string): Promise<OperationResponse>;

    /**
     * @param reportId The report ID (file name) to submit.
     * @todo times out ({@link Result.Timeout})
     */
    Submit(reportId: string): Promise<OperationResponse>;
}

export interface SystemUI {
    CloseGameWindow(appId: number, windowId: number): void;

    GetGameWindowsInfo(appId: number, windowIds: number[]): Promise<GameWindowInfo>;

    RegisterForFocusChangeEvents(callback: (event: FocusChangeEvent) => void): Unregisterable | any;

    RegisterForOverlayGameWindowFocusChanged(callback: (param0: number, param1: number) => void): Unregisterable | any;

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

    ExitFakeCaptivePortal(): any;

    FactoryReset(): any;

    FormatStorage(forceFormat: boolean): any;

    GetLegacyAmpControlEnabled(): Promise<any>; // {"bAvailable":true,"bEnabled":false}

    GetOSType(): Promise<OSType>;

    GetSystemInfo(): Promise<SystemInfo>;

    IsDeckFactoryImage(): Promise<boolean>;

    IsSteamInTournamentMode(): Promise<boolean>;

    Network: Network;

    NotifyGameOverlayStateChanged(latestAppOverlayStateActive: boolean, appId: number): any;

    /**
     * Open a dialog for choosing a file.
     * @param {FileDialog} prefs - Dialog preferences.
     * @returns {Promise<string>} A Promise that resolves to the selected file name.
     * @throws Throws if no file was selected.
     */
    OpenFileDialog(prefs: FileDialog): Promise<string | OperationResponse>;

    /**
     * Open a URL in the default web browser.
     * @returns {void}
     */
    OpenInSystemBrowser(url: string): void;

    OpenLocalDirectoryInSystemExplorer(directory: string): void; // Opens local directory in system explorer
    Perf: Perf;
    RebootToAlternateSystemPartition: any;
    RebootToFactoryTestImage: any;

    RegisterForAirplaneModeChanges(callback: (airplaneModeChange: AirplaneModeChange) => void): Unregisterable | any;

    RegisterForBatteryStateChanges(callback: (batteryStateChange: BatteryStateChange) => void): Unregisterable | any;

    RegisterForFormatStorageProgress(callback: () => void): Unregisterable | any; // {"flProgress":0,"rtEstimatedCompletionTime":0,"eStage":1}

    RegisterForOnResumeFromSuspend(callback: () => void): Unregisterable | any;

    RegisterForOnSuspendRequest(callback: () => void): Unregisterable | any;

    /**
     * @returns {Promise<ArrayBuffer>} A Promise that resolves to a ProtoBuf message. If deserialized, returns {@link MsgSystemManagerSettings}.
     */
    RegisterForSettingsChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;
    Report: Report;

    /**
     * Restarts the system.
     */
    RestartPC(): any;

    SetAirplaneMode(value: boolean): void;

    SetLegacyAmpControl: any;

    ShutdownPC(): any;

    SteamRuntimeSystemInfo(): Promise<string>;

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
    EnsureMainWindowCreated(): void;

    ExitBigPictureMode(): void;

    GetDesiredSteamUIWindows(): Promise<SteamWindow[]>;

    /**
     * Gets information about whether your OS will be unsupported in the future or not.
     * @returns {Promise<OSEndOfLifeInfo>}
     */
    GetOSEndOfLifeInfo(): Promise<OSEndOfLifeInfo>;

    /**
     * Retrieves the current UI mode.
     * @returns {Promise<UIMode>} - A Promise that resolves to the current UI mode.
     */
    GetUIMode(): Promise<UIMode>;

    NotifyAppInitialized(): void;

    RegisterDesiredSteamUIWindowsChanged: Unregisterable | any;

    RegisterForErrorCondition(callback: (param0: number, param1: number) => void): Unregisterable | any;

    RegisterForKioskModeResetSignal: Unregisterable | any;

    RegisterForUIModeChanged(callback: (mode: UIMode) => void): Unregisterable | any;

    ResetErrorCondition(): void;

    /**
     * Sets the UI mode to the specified value.
     * @param {UIMode} mode - The UI mode to set.
     * @returns {void}
     */
    SetUIMode(mode: UIMode): void;
}

export interface URL {
    /**
     * Executes a steam:// URL.
     * @param url The URL to execute.
     */
    ExecuteSteamURL(url: string): void;

    /**
     * @remarks The array may be empty.
     */
    GetSteamURLList(param0: string[]): Promise<SteamURLs>;

    GetWebSessionID(): Promise<string>;

    /**
     * Registers a callback to be called when a steam:// URL gets executed.
     * @param {string} section - `rungameid`, `open`, etc.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForRunSteamURL(section: string, callback: (param0: number, url: string) => void): Unregisterable | any;

    RegisterForSteamURLChanges(callback: () => void): void;
}

export interface Updates {
    ApplyUpdates(param0: string): Promise<OperationResponse>;

    CheckForUpdates(): Promise<OperationResponse>; // Checks for software updates

    GetCurrentOSBranch(): Promise<OSBranch>;

    /**
     * If `data` is deserialized, returns {@link MsgSystemUpdateState}.
     * @returns {Promise<ArrayBuffer>} A Promise that resolves to a ProtoBuf message.
     */
    RegisterForUpdateStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    // 1 - Stable, 2 - Beta, 3 - Preview
    SelectOSBranch(branch: number): any; // enum?
}

export interface User {
    AuthorizeMicrotxn(txnId: any): any;

    CancelLogin: any;

    CancelMicrotxn(txnId: any): any;

    /**
     * Tries to cancel Steam shutdown.
     * @returns {void}
     * @remarks Used in the "Shutting down" dialog.
     */
    CancelShutdown(): void;

    /**
     * Opens the "Change Account" dialog.
     * @returns {void}
     */
    ChangeUser(): void;

    Connect(): Promise<OperationResponse>;

    FlipToLogin(): void;

    /**
     * Forces a shutdown while shutting down.
     * @returns {void}
     * @remarks Used in the "Shutting down" dialog.
     */
    ForceShutdown(): void;

    /**
     * Forgets an account's password.
     * @param {string} accountName - Login of the account to forget.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating whether the operation succeeded or not.
     */
    ForgetPassword(accountName: string): Promise<boolean>;

    /**
     * Gets your country code.
     * @returns {Promise<string>} A Promise that resolves to a string containing your country code.
     */
    GetIPCountry(): Promise<string>;

    GetLoginProgress(callback: (param0: number, param1: number) => void): Unregisterable | any;

    GetLoginUsers(): Promise<LoginUser[]>;

    GoOffline(): void;

    GoOnline(): void;

    OptOutOfSurvey(): void;

    PrepareForSystemSuspend(): any;

    Reconnect(): void;

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

    /**
     * Removes an account from remembered users.
     * @param {string} accountName - The account to remove.
     * @returns {void}
     */
    RemoveUser(accountName: string): void;

    RequestSupportSystemReport: any;

    ResumeSuspendedGames(param0: boolean): any;

    // Hardware survey information
    RunSurvey(callback: (surveySections: SurveySection[]) => void): void;

    SendSurvey: any;

    SetAsyncNotificationEnabled(appId: number, enable: boolean): any;

    /**
     * Sets given login credentials, but don't log in to that account.
     * @param {string} accountName - Account name.
     * @param {string} password - Account password.
     * @param {boolean} rememberMe - Whether to remember that account.
     * @returns {void}
     */
    SetLoginCredentials(accountName: string, password: string, rememberMe: boolean): void;

    SetOOBEComplete(): void;

    ShouldShowUserChooser(): Promise<boolean>;

    /**
     * Signs out and restarts Steam.
     * @returnsn {void}
     */
    SignOutAndRestart(): void;

    StartLogin(): void;

    // is param0 offline mode?
    StartOffline(param0: boolean): any;

    /**
     * Restarts the Steam client.
     */
    StartRestart(): any;

    StartShutdown(flag: boolean): any;
}

export interface WebChat {
    BSuppressPopupsInRestore(): Promise<boolean>;

    /**
     * Gets your Steam3 ID.
     * @returns {Promise<number>} A Promise that resolves to a Steam3 ID.
     */
    GetCurrentUserAccountID(): Promise<number>;

    /**
     * Gets the current user's 64x64 avatar as a data URL.
     * @returns {Promise<string>} A Promise that resolves to the data URL.
     */
    GetLocalAvatarBase64(): Promise<string>;

    /**
     * Gets the current user's nickname.
     * @returns {Promise<string>} A Promise that resolves to the nickname.
     */
    GetLocalPersonaName(): Promise<string>;

    GetOverlayChatBrowserInfo(): Promise<any[]>;

    // param0 - appid ?
    GetPrivateConnectString(param0: number): Promise<string>;

    /**
     * Gets information about push-to-Talk.
     * @returns {Promise<PushToTalkInfo>}
     */
    GetPushToTalkEnabled(): Promise<PushToTalkInfo>;

    /**
     * Gets the "Sign in to friends when Steam starts" option value.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating whether the option is enabled or not.
     */
    GetSignIntoFriendsOnStart(): Promise<boolean>;

    /**
     * Retrieves the current UI mode.
     * @returns {Promise<UIMode>} - A Promise that resolves to the current UI mode.
     */
    GetUIMode(): Promise<UIMode>;

    OnGroupChatUserStateChange(chatGroupId: any, accountId: any, param2: any): any;

    OnNewGroupChatMsgAdded(
        groupId: number,
        chatId: number,
        accountId: number,
        timestamp: number,
        param4: number,
        message: string,
    ): any;

    // Opens the URL in default web browser, despite what the name says ?
    OpenURLInClient(url: string, pid: number, forceExternal: boolean): void;

    /**
     * Registers a callback function to be called when the computer's active state changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @todo Changes to 2 after 10 seconds?
     * @todo Does not affect the keyboard?
     */
    RegisterForComputerActiveStateChange(
        callback: (state: ComputerActiveState, time: number) => void,
    ): Unregisterable | any;

    /**
     * @todo WebChat.ShowFriendChatDialog does this.
     */
    RegisterForFriendPostMessage(callback: (data: FriendChatDialogData) => void): Unregisterable | any;

    /**
     * @returns {void}
     * @todo To unregister, use WebChat.UnregisterForMouseXButtonDown() ?
     */
    RegisterForMouseXButtonDown(callback: any): void;

    /**
     * Registers a callback function to be called when the push-to-talk state changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForPushToTalkStateChange(callback: (state: boolean) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the UI mode is changed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForUIModeChange(callback: (mode: UIMode) => void): Unregisterable | any;

    RegisterOverlayChatBrowserInfoChanged(callback: any): Unregisterable | any;

    SetActiveClanChatIDs(param0: any[]): any;

    SetNumChatsWithUnreadPriorityMessages(param0: number): void;

    SetPersonaName: any;

    SetPushToMuteEnabled(value: boolean): any;

    SetPushToTalkEnabled(value: boolean): any;

    SetPushToTalkHotKey(param0: number): void;

    SetPushToTalkMouseButton(param0: number): void;

    SetVoiceChatActive: any;
    SetVoiceChatStatus: any;
    ShowChatRoomGroupDialog: any;

    /**
     * @todo Does not actually show the dialog.
     */
    ShowFriendChatDialog(steamid: string): void;

    UnregisterForMouseXButtonDown(): void;
}

export interface WebUITransport {
    GetTransportInfo(): Promise<TransportInfo>;
}

/**
 * Represents functionality for managing Steam's windows.
 */
export interface Window {
    BringToFront(forceOS: WindowBringToFront | undefined): any;

    /**
     * @todo Shuts down Steam too?
     */
    Close(): any;

    /**
     * Is the Steam window fullscreen?
     * @param {function} callback - The callback function to be called to receive the fullscreen state.
     * @returns {void}
     */
    DefaultMonitorHasFullscreenWindow(callback: (fullscreen: boolean) => void): void;

    /**
     * Flashes the window in the taskbar.
     * @returns {void}
     */
    FlashWindow(): void;

    /**
     * @todo Returns 0?
     */
    GetDefaultMonitorDimensions(callback: (param0: number) => void): void;

    GetMousePositionDetails(callback: (details: string) => void): void;

    /**
     * Gets the window X position.
     * @param {function} callback - The callback function to be called to receive the X position.
     * @returns {void}
     */
    GetWindowDimensions(callback: (x: number) => void): void;

    GetWindowRestoreDetails(callback: (details: string) => void): void;

    /**
     * Hides the window.
     * @returns {void}
     */
    HideWindow(): void;

    /**
     * Is the window maximized?
     * @param {function} callback - The callback function to be called to receive the maximized state.
     * @returns {void}
     */
    IsWindowMaximized(callback: (maximized: boolean) => void): void;

    /**
     * Is the window minimized?
     * @param {function} callback - The callback function to be called to receive the minimized state.
     * @returns {void}
     */
    IsWindowMinimized(callback: (minimized: boolean) => void): void;

    MarkLastFocused(): void;

    /**
     * Minimizes the window.
     * @returns {void}
     */
    Minimize(): void;

    /**
     * Moves the window to given coordinates.
     * @param {number} x - Window X position.
     * @param {number} y - Window Y position.
     * @param {number | undefined} dpi - Screen DPI.
     * @returns {void}
     */
    MoveTo(x: number, y: number, dpi: number | undefined): void;

    /**
     * Moves the window to a given location.
     * @param {string} location - Window location.
     * @param {number | undefined} offset - X/Y offset.
     * @returns {void}
     */
    MoveToLocation(location: WindowLocation, offset: number | undefined): void;

    /**
     * Moves the window relatively to given details.
     * @param {string} details - Window details string from `Window.GetWindowRestoreDetails`.
     * @param {number} x - Window X position.
     * @param {number} y - Window Y position.
     * @param {number} width - Window width.
     * @param {number} height - Window height.
     * @returns {void}
     *
     * @example
     * Move the window to bottom right by 50 pixels:
     * ```
     * SteamClient.Window.GetWindowRestoreDetails(e => {
     *     SteamClient.Window.PositionWindowRelative(e, 50, 50, 0, 0);
     * })
     * ```
     */
    PositionWindowRelative(details: string, x: number, y: number, width: number, height: number): void;

    ProcessShuttingDown(): Promise<boolean>;

    /**
     * Resizes the window to given dimension.
     * @param {number} width - Window width.
     * @param {number} height - Window height.
     * @param {boolean | number} applyBrowserScaleOrDPIValue
     * @returns {void}
     */
    ResizeTo(width: number, height: number, applyBrowserScaleOrDPIValue: boolean | number): void;

    /**
     * Moves the window to given details.
     * @param {string} details - Window details string from `Window.GetWindowRestoreDetails`.
     * @returns {void}
     */
    RestoreWindowSizeAndPosition(details: string): void;

    SetAutoDisplayScale(value: boolean): void;

    SetComposition(uiComposition: UIComposition, appIds: number[], windowId: number): any;

    /**
     * Makes the window hide, but not close on pressing the close button.
     * @param {boolean} value - Hide on close?
     * @returns {void}
     */
    SetHideOnClose(value: boolean): void;

    SetKeyFocus(value: boolean): void;

    SetManualDisplayScaleFactor(displayScaleFactor: number): void;

    /**
     * Sets the window's max size.
     * @param {number} width - Window's max width.
     * @param {number} height - Window's max height.
     * @returns {void}
     */
    SetMaxSize(width: number, height: number): void;

    /**
     * Sets the window's min size.
     * @param {number} width - Window's max width.
     * @param {number} height - Window's max height.
     * @returns {void}
     */
    SetMinSize(width: number, height: number): void;

    SetModal(value: boolean): void;

    /**
     * Sets the window's resize grip size.
     * @param {number} width - Resize grip width.
     * @param {number} height - Resize grip height.
     * @returns {void}
     */
    SetResizeGrip(width: number, height: number): void;

    /**
     * Set the window's icon.
     * @param {WindowIcon} icon - The window icon to be used.
     * @returns {void}
     */
    SetWindowIcon(icon: WindowIcon): void;

    /**
     * Shows the window.
     * @returns {void}
     */
    ShowWindow(): void;

    /**
     * Stops the window's taskbar flashing.
     * @returns {void}
     */
    StopFlashWindow(): void;

    /**
     * Toggles the window's fullscreen state.
     * @returns {void}
     */
    ToggleFullscreen(): void;

    /**
     * Toggles the window's maximized state.
     * @returns {void}
     */
    ToggleMaximize(): void;
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
    vecAchievedHidden: AppAchievement[];
    vecHighlight: AppAchievement[];
    vecUnachieved: AppAchievement[];
};

export type AppLanguage = {
    strDisplayName: string;
    /** A localization string for the language. */
    strShortName: string;
};

export type LogoPinPositions = 'BottomLeft' | 'UpperLeft' | 'CenterCenter' | 'UpperCenter' | 'BottomCenter';

export type ServerBrowserTab = 'internet' | 'favorites' | 'history' | 'lan' | 'friends';

export type WindowLocation =
    | 'upper-left'
    | 'lower-left'
    | 'center-top'
    | 'center-bottom'
    | 'center-bottom'
    | 'upper-right'
    | 'lower-right';

export type WindowIcon = 'steam' | 'messages' | 'voice';

export type BrowserViewEvent =
    | 'alert-dialog'
    | 'before-close'
    | 'blocked-request'
    | 'can-go-back-forward-changed'
    | 'confirm-dialog'
    | 'favicon-urls-changed'
    | 'find-in-page-results'
    | 'finished-request'
    | 'focus-changed'
    | 'full-screen'
    | 'history-changed'
    | 'load-error'
    | 'message'
    | 'new-tab'
    | 'node-has-focus'
    | 'page-security'
    | 'set-title'
    | 'start-loading'
    | 'start-request'
    | 'toggle-find-in-page';

export interface LogoPosition {
    pinnedPosition: LogoPinPositions;
    nWidthPct: number;
    nHeightPct: number;
}

export interface AppData {
    details: AppDetails;
    // more
}

export interface AppDeckDerivedProperties {
    gamescope_frame_limiter_not_supported?: boolean;
    non_deck_display_glyphs: boolean;
    primary_player_is_controller_slot_0: boolean;
    requires_h264: boolean;
    requires_internet_for_setup: boolean;
    requires_internet_for_singleplayer: boolean;
    requires_manual_keyboard_invoke: false;
    requires_non_controller_launcher_nav: false;
    small_text: boolean;
    supported_input: number;
}

export interface AppLibraryAssets {
    logoPosition?: LogoPosition;
    strCapsuleImage: string;
    strHeroBlurImage: string;
    strHeroImage: string;
    strLogoImage: string;
}

export interface AppBeta {
    /** Beta name. */
    strName: string;
    /** Beta description. */
    strDescription: string;
}

export interface DeckCompatTestResult {
    // enum ?
    test_result: number;
    /** A localization string. */
    test_loc_token: string;
}

export interface AppDLC {
    /** Is the DLC availble on the store? */
    bAvailableOnStore: boolean;
    bEnabled: boolean;
    /** Disk usage, in bytes. */
    lDiskUsageBytes: number;
    /** Purchase date. */
    rtPurchaseDate: number;
    rtStoreAssetModifyType: number;
    /** Store header image filename. */
    strHeaderFilename: string;
    /** Display name. */
    strName: string;
    /** State (installed/notinstalled). */
    strState: string;
    /** App ID. */
    unAppID: number;
}

export interface AppSoundtrack {
    /** Purchase date. */
    rtPurchaseDate: number;
    rtStoreAssetModifyType: number;
    /** Display name. */
    strName: string;
    /** State (installed/notinstalled). */
    strState: string;
    /** App ID. */
    unAppID: number;
}

export interface AppDetails {
    achievements: AppAchievements;
    /** Indicates whether the application is available on the store. */
    bAvailableContentOnStore: boolean;
    bCanMoveInstallFolder: boolean;
    bCloudAvailable: boolean;
    bCloudEnabledForAccount: boolean;
    bCloudEnabledForApp: boolean;
    bCloudSyncOnSuspendAvailable: boolean;
    bCloudSyncOnSuspendEnabled: boolean;
    /** Indicates whether the application has community market available. */
    bCommunityMarketPresence: boolean;
    bEnableAllowDesktopConfiguration: boolean;
    bFreeRemovableLicense: boolean;
    bHasAllLegacyCDKeys: boolean;
    bHasAnyLocalContent: boolean;
    bHasLockedPrivateBetas: boolean;
    bIsExcludedFromSharing: boolean;
    bIsSubscribedTo: boolean;
    bIsThirdPartyUpdater: boolean;
    bOverlayEnabled: boolean;
    bOverrideInternalResolution: boolean;
    bRequiresLegacyCDKey: boolean;
    bShortcutIsVR: boolean;
    bShowCDKeyInMenus: boolean;
    bShowControllerConfig: boolean;
    bSupportsCDKeyCopyToClipboard: boolean;
    bVRGameTheatreEnabled: boolean;
    bWorkshopVisible: boolean;
    deckDerivedProperties?: AppDeckDerivedProperties;
    eAppOwnershipFlags: AppOwnershipFlags | number; // is this a bitmask?
    eAutoUpdateValue: AutoUpdateBehavior;
    eBackgroundDownloads: BackgroundDownloadsBehavior;
    eCloudSync: number;
    eControllerRumblePreference: number; // ControllerRumbleSetting?
    eDisplayStatus: DisplayStatus;
    eEnableThirdPartyControllerConfiguration: number;
    eSteamInputControllerMask: number;
    /**
     * Index of the install folder. -1 if not installed.
     */
    iInstallFolder: number;
    /** Disk space required for installation, in bytes. */
    lDiskSpaceRequiredBytes: number;
    /** Application disk space usage, in bytes. */
    lDiskUsageBytes: number;
    /** DLC disk space usage, in bytes. */
    lDlcUsageBytes: number;
    nBuildID: number;
    nCompatToolPriority: number;
    /** Total play time, in minutes. */
    nPlaytimeForever: number;
    /** Screenshot count. */
    nScreenshots: number;
    rtLastTimePlayed: number;
    rtLastUpdated: number;
    rtPurchased: number;
    selectedLanguage: AppLanguage;
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
    /** Steam64 ID. */
    strOwnerSteamID: string;
    strResolutionOverride: string;
    strSelectedBeta: string;
    strShortcutExe: string;
    strShortcutLaunchOptions: string;
    strShortcutStartDir: string;
    strSteamDeckBlogURL: string;
    unAppID: number;
    unEntitledContentApp: number;
    unTimedTrialSecondsAllowed: number;
    unTimedTrialSecondsPlayed: number;
    vecBetas: AppBeta[];
    vecChildConfigApps: number[];
    vecDLC: AppDLC[];
    vecDeckCompatTestResults: DeckCompatTestResult[];
    vecLanguages: AppLanguage[];
    vecLegacyCDKeys: any[];
    vecMusicAlbums: AppSoundtrack[];
    /** windows | osx | linux */
    vecPlatforms: string[];
    vecScreenShots: Screenshot[];
    libraryAssets?: AppLibraryAssets;
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
    rt_last_time_locally_played?: number;
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

export interface ConflictingFileTimestamp {
    rtLocalTime: number;
    rtRemoteTime: number;
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
    achievement: AppAchievements;
    nCurrentProgress: number;
    nMaxProgress: number;
    unAppID: number;
}

export interface ScreenshotNotification {
    details: Screenshot;
    hScreenshot: number;
    strOperation: string;
    unAppID: number;
}

export interface Screenshot {
    nAppID: number;
    strGameID: string;
    hHandle: number;
    nWidth: number;
    nHeight: number;
    nCreated: number; // timestamp
    ePrivacy: FilePrivacyState;
    strCaption: '';
    bSpoilers: boolean;
    strUrl: string;
    bUploaded: boolean;
    ugcHandle: string;
}

export interface DownloadItem {
    active: boolean;
    appid: number;
    buildid: number;
    completed: boolean;
    completed_time: number;
    deferred_time: number;
    downloaded_bytes: number;
    launch_on_completion: boolean;
    paused: boolean;
    queue_index: number;
    target_buildid: number;
    total_bytes: number;
    update_error: string;
    update_result: number;
    update_type_info: UpdateTypeInfo[];
}

export interface UpdateTypeInfo {
    completed_update: boolean;
    downloaded_bytes: number;
    has_update: boolean;
    total_bytes: number;
}

export interface DownloadOverview {
    lan_peer_hostname: string;
    paused: boolean;
    throttling_suspended: boolean;
    update_appid: number;
    update_bytes_downloaded: number;
    update_bytes_processed: number;
    update_bytes_staged: number;
    update_bytes_to_download: number;
    update_bytes_to_process: number;
    update_bytes_to_stage: number;
    update_disc_bytes_per_second: number;
    update_is_install: boolean;
    update_is_prefetch_estimate: boolean;
    update_is_shader: boolean;
    update_is_upload: boolean;
    update_is_workshop: boolean;
    update_network_bytes_per_second: number;
    update_peak_network_bytes_per_second: number;
    update_seconds_remaining: number;
    update_start_time: number;
    update_state: 'None' | 'Starting' | 'Updating' | 'Stopping';
}

export interface InstallInfo {
    rgAppIDs: InstallInfoApps[];
    eInstallState: number;
    nDiskSpaceRequired: number;
    nDiskSpaceAvailable: number;
    nCurrentDisk: number;
    nTotalDisks: number;
    bCanChangeInstallFolder: boolean;
    /**
     * Index of the install folder. -1 if not installed.
     */
    iInstallFolder: number;
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

export interface WorkshopItemDetails {
    /**
     * Required items' IDs.
     */
    children: string[];
    eresult: Result;
    /**
     * Item size, in byts.
     */
    file_size: string;
    /**
     * @todo enum?
     */
    file_type: number;
    /**
     * Item preview image URL.
     */
    preview_url: string;
    /**
     * Item ID.
     */
    publishedfileid: string;
    /**
     * Item description.
     */
    short_description: string;
    /**
     * Item tags.
     */
    tags: string[];
    /**
     * Item title.
     */
    title: string;
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
    bAchieved: boolean;
    bHidden: boolean;
    flMinProgress: number;
    flCurrentProgress: number;
    flMaxProgress: number;
    /** How many players have this achievement, in percentage. */
    flAchieved: number;
    /** When this achievement was unlocked. */
    rtUnlocked: number;
    /** Achievement description. */
    strDescription: string;
    /** Achievement ID. */
    strID: string;
    /** Achievement icon. */
    strImage: string;
    /** Achievement name. */
    strName: string;
}

export interface AppAchievementData {
    rgAchievements: AppAchievement[];
}

export interface AppAchievementResponse {
    result: number;
    data: AppAchievementData;
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
    ePlaybackStatus: number; // 1 - playing, 2 - paused
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

export interface StoreTagLocalization {
    tag: number;
    string: string;
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
    /**
     * @remarks This is an integer, despite the prefix.
     */
    bIsVRLaunchOption: number;
    eType: AppLaunchOptionType;
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
     * The result code of the operation.
     */
    result: Result;

    /**
     * A message describing the result of the operation.
     */
    message: string;
}

export interface SystemReportReply extends OperationResponse {
    /**
     * If deserialized, returns {@link MsgGenerateSystemReportReply}.
     */
    reply: ArrayBuffer;
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

export interface TouchGesture {
    eTouchGesture: TouchGestureType;
    x: number;
    y: number;
}

export interface BrowserViewInit {
    bOnlyAllowTrustedPopups?: boolean;
    parentPopupBrowserID?: number;
    /** Initial URL to go to. */
    strInitialURL?: string;
    strUserAgentIdentifier?: string;
    strUserAgentOverride?: string;
    strVROverlayKey?: string;
}

export interface BrowserViewPopup {
    /**
     * Blur the popup.
     * @param {boolean} enabled - Is the blur enabled?
     * @param {boolean} backgroundColor
     * @param {boolean} blur
     * @returns {void}
     * @todo backgroundColor is a bool? Whatever that means
     */
    AddGlass(enabled: boolean, backgroundColor: boolean, blur: boolean): void;

    /**
     * Indicates whether you can go backward in history or not.
     * @returns {boolean} true if you can go backward in history, false otherwise.
     */
    CanGoBackward(): boolean;

    /**
     * Indicates whether you can go forward in history or not.
     * @returns {boolean} true if you can go forward in history, false otherwise.
     */
    CanGoForward(): boolean;

    // alert() i assume
    DialogResponse(param0: boolean): void;

    EnableSteamInput(): void;

    /**
     * Find a string in the page.
     * @param {string} input - The string to find.
     * @param {boolean} param1 - Additional parameter (exact usage may vary).
     * @param {boolean} previous - `true` for previous match, `false` for next match.
     * @returns {void}
     */
    FindInPage(input: string, param1: boolean, previous: boolean): void;

    /**
     * Get the current popup position.
     * @returns {BrowserViewBounds} The window position.
     */
    GetBounds(): BrowserViewBounds;

    /**
     * Go back in history.
     * @returns {void}
     */
    GoBack(): void;

    /**
     * Go forward in history.
     * @returns {void}
     */
    GoForward(): void;

    /**
     * @remarks `| number` is used for `BrowserViewContextMenu.custom_commands`.
     */
    HandleContextMenuCommand(command: BrowserViewContextMenuCommand | number, param2: BrowserViewContextMenu): void;

    /**
     * Load the specified URL.
     * @param {string} url - The URL to go to.
     * @returns {void}
     */
    LoadURL(url: string): void;

    NotifyUserActivation(): void;

    /**
     * Paste the current clipboard selection.
     * @returns {void}
     */
    Paste(): void;

    PostMessage(message: string, args: string): boolean;

    /**
     * Reload the page.
     * @returns {void}
     */
    Reload(): void;

    /**
     * Load the specified URL, but don't save history.
     * @param {string} url - The URL to go to.
     * @returns {void}
     */
    ReplaceURL(url: string): void;

    /**
     * Define blocked protocols, like https, etc.
     * @param protocols The protocols to block, separated by a semicolon.
     * @returns {void}
     */
    SetBlockedProtocols(protocols: string): void;

    /**
     * Sets the browser window position.
     * @param {number} x - Browser window X position.
     * @param {number} y - Browser window Y position.
     * @param {number} width - Browser window width.
     * @param {number} height - Browser window height.
     * @returns {void}
     */
    SetBounds(x: number, y: number, width: number, height: number): void;

    /**
     * Sets the browser window focus state.
     * @param {boolean} value - Is the window focused?
     * @returns {void}
     */
    SetFocus(value: boolean): void;

    SetName(browserName: string): void;

    /**
     * Registers a callback to be called when a context menu is shown.
     * @param {function} callback - The callback function to be called.
     */
    SetShowContextMenuCallback(callback: (data: BrowserViewContextMenu) => void): void;

    /**
     * Registers a callback to be called when a steam:// protocol URL is loaded.
     * @returns {void}
     */
    SetSteamURLCallback(callback: (steamURL: string) => void): void;

    /**
     * Raises the browser window.
     * @returns {void}
     */
    SetTopWindow(): void;

    /**
     * @todo unconfirmed
     */
    SetTouchGesturesToCancel(gestures: TouchGestureType[]): void;

    SetVRKeyboardVisibility(value: boolean): void;

    SetVisible(value: boolean): void;

    /**
     * Stop the "find in page" function.
     * @returns {void}
     */
    StopFindInPage(): void;

    /**
     * Stop listening for an event.
     * @param {BrowserViewEvent} event - The event to stop listening to.
     * @param {function} callback - The callback function to be called.
     * @returns {void}
     */
    off(event: BrowserViewEvent, callback: (args: any) => void): void;

    /**
     * Start listening for an event.
     * @param {BrowserViewEvent} event - The event to start listening to.
     * @param {function} callback - The callback function to be called.
     * @returns {void}
     */
    on(event: BrowserViewEvent, callback: (args: any) => void): void;

    /**
     * Fires when an `alert()` dialog appears.
     */
    on(event: 'alert-dialog', callback: (message: string) => void): void;

    /**
     * Fires when the browser is about to get destroyed.
     */
    on(event: 'before-close', callback: () => void): void;

    /**
     * Fires when a URL gets blocked.
     * @todo not SetBlockedProtocols, maybe only steam links
     */
    on(event: 'blocked-request', callback: (blockedURL: string) => void): void;

    /**
     * Fires when `CanGoBack() or `CanGoForward()` state changes.
     */
    on(event: 'can-go-back-forward-changed', callback: (canGoBackward: boolean, canGoForward: boolean) => void): void;

    /**
     * Fires when a `confirm()` dialog appears.
     */
    on(event: 'confirm-dialog', callback: (message: string) => void): void;

    /**
     * Fires when the browser's favicon changes.
     */
    on(event: 'favicon-urls-changed', callback: (faviconURLs: string[]) => void): void;

    /**
     * Fires when "Find in page" gets its results.
     */
    on(event: 'find-in-page-results', callback: (results: number, activeResultIndex: number) => void): void;

    /**
     * Fires when the page finishes loading.
     */
    on(event: 'finished-request', callback: (currentURL: string, previousURL: string) => void): void;

    /**
     * Fires when the browser goes focused or vice versa.
     */
    on(event: 'focus-changed', callback: (focused: boolean) => void): void;

    /**
     * Fires when the browser goes fullscreen or vice versa.
     */
    on(event: 'full-screen', callback: (fullscreen: boolean) => void): void;

    /**
     * Fires when history changes occur.
     */
    on(event: 'history-changed', callback: (history: BrowserViewHistory) => void): void;

    /**
     * Fires when the URL fails to load.
     */
    on(event: 'load-error', callback: (errorCode: number, errorURL: string, errorDescription: string) => void): void;

    /**
     * @todo Same as PostMessage?
     */
    on(event: 'message', callback: (args: any) => void): void;

    on(event: 'new-tab', callback: (args: any) => void): void;

    /**
     * Fires when a node gets focused.
     */
    on(
        event: 'node-has-focus',
        callback: (
            elementIdOrTagName: string,
            elementTag: string,
            param2: any,
            param3: string,
            param4: boolean,
        ) => void,
    ): void;

    on(event: 'page-security', callback: (url: string, pageSecurity: BrowserViewPageSecurity) => void): void;

    /**
     * Fires when the page's `<title>` changes.
     */
    on(event: 'set-title', callback: (title: string) => void): void;

    /**
     * Fires when the page starts loading.
     */
    on(event: 'start-loading', callback: (url: string, param1: boolean) => void): void;

    /**
     * Fires when the page starts loading.
     */
    on(event: 'start-request', callback: (url: string) => void): void;

    /**
     * Fires when "Find in page" gets toggled.
     */
    on(event: 'toggle-find-in-page', callback: () => void): void;
}

export interface BrowserViewBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface BrowserViewContextMenuCustomCommand {
    id: number;
    label: string;
}

export interface BrowserViewContextMenu {
    /**
     * Mouse X position inside the browser view.
     */
    coord_x: number;
    /**
     * Mouse Y position inside the browser view.
     */
    coord_y: number;
    custom_commands: BrowserViewContextMenuCustomCommand[];
    /**
     * Bitmask representing edit state.
     * @remarks Appears on editable elements like `<input>`, etc.
     * @example
     * May be used with BrowserViewContextMenuEditFlag:
     * ```js
     * edit_state_flags & BrowserViewContextMenuEditFlag.CanCut != 0 // Can cut text
     * ```
     */
    edit_state_flags?: number;
    /**
     * The misspelled word the cursor is on.
     * @remarks Appears on an editable element with text.
     */
    misspelled_word?: string;
    /**
     * Browser page URL.
     * @todo Appears when there is selected text?
     */
    link_url?: string;
    /**
     * Browser page URL.
     */
    page_url: string;
    /**
     * Selected text.
     * @remarks Appears when there is selected text.
     */
    selection_text?: string;
    /**
     * Bitmask representing context menu type.
     * @example
     * May be used with BrowserViewContextMenuTypeFlag:
     * ```js
     * type_flags & BrowserViewContextMenuTypeFlag.Selection != 0 // Selected text present
     * ```
     */
    type_flags: number;
    /**
     * Browser page URL.
     * @todo Appears when there is selected text?
     */
    unfiltered_link_url?: string;
}

export interface BrowserViewHistoryEntry {
    url: string;
}

export interface BrowserViewHistory {
    index: number;
    entries: BrowserViewHistoryEntry[];
}

export interface BrowserViewPageSecurity {
    bHasCertError: boolean;
    bIsEVCert: boolean;
    bIsSecure: boolean;
    certExpiry: number;
    certName: string;
    issuerName: string;
    nCertBits: number;
}

export interface ServerBrowserGame {
    /** The ID of the game. */
    appid: number;
    /** The ID of the game. */
    gameid: string;
    /** The game folder. */
    gamedir: string;
    /** The game's name. */
    name: string;
}

export interface ServerBrowserGameFilter {
    /** Has users playing */
    NoEmpty: boolean;
    /** Server not full */
    NoFull: boolean;
    /** Is not password protected */
    NoPassword: boolean;
    /** Anti-cheat */
    Secure: ServerBrowserGameFilterAntiCheat;
    /** The ID of the game */
    appid: number;
    /** The game folder */
    game: string;
    /** Map filter */
    map: string;
    /** Latency */
    ping: ServerBrowserGameFilterPing;
}

export interface ServerBrowserServer {
    /** The ID of the game. */
    appid: number;
    /** The server IP. */
    ip: string;
    /** The server port. */
    port: number;
    queryPort: number;
    /** Last time played as a UNIX timestamp. */
    lastPlayed: number;
}

export interface ServerBrowserServerFull extends ServerBrowserServer {
    /** Do not refresh if had unsuccessful response? */
    bDoNotRefresh: boolean;
    /** Found the server? */
    bHadSuccessfulResponse: boolean;
    /** Has password? */
    bPassword: boolean;
    /** Is VAC secured? */
    bSecure: boolean;
    /** How many bot players there currently are. */
    botPlayers: number;
    /** The server's game name/description. */
    gameDesc: string;
    /** The game folder. */
    gameDir: string;
    /** Server tags, separated by a comma. */
    gameTags: string;
    /** Current server map. */
    map: string;
    /** Max players on the server. */
    maxPlayers: number;
    /** The server name. */
    name: string;
    /** The latency to the server. */
    ping: number;
    /** How many players there currently are. */
    players: number;
    /** The server's game version it is running on. */
    serverVersion: number;
    steamID: string;
}

export interface ServerBrowserFriendServer {
    /** The ID of the game. */
    appid: number;
    /** Non-Steam server? */
    bNonSteamServer: boolean;
    gameText: string;
    /** The ID of the game. */
    gameid: string;
    steamIDLobby: string;
}

export interface ServerBrowserFavoritesAndHistory {
    favorites: ServerBrowserServer[];
    history: ServerBrowserServer[];
}

export interface ServerBrowserPlayerRefreshStatus {
    bSuccess: boolean;
    bRefreshComplete: boolean;
}

export interface ServerBrowserPlayer extends ServerBrowserPlayerRefreshStatus {
    /** Player name. */
    playerName: string;
    /** Player score. */
    score: number;
    /** Time played on the server. */
    timePlayed: number;
}

export interface ServerBrowserPreferences {
    GameList: string;
    filters: ServerBrowserTabFilters;
}

export interface ServerBrowserTabFilters {
    favorites: ServerBrowserGameFilter;
    friends: ServerBrowserGameFilter;
    history: ServerBrowserGameFilter;
    internet: ServerBrowserGameFilter;
    lan: ServerBrowserGameFilter;
}

export interface ServerBrowserDialog {
    dialogID: number;
    ip: number;
    port: number;
    queryPort: number;
}

export interface FileDialog {
    /** Whether to choose a directory instead. */
    bChooseDirectory?: boolean;
    /**
     * Array of file filters.
     * @example
     * Example from the "Add a Non-Steam Game" dialog:
     * ```
     * [
     *     {
     *         strFileTypeName: LocalizationManager.LocalizeString("#AddNonSteam_Filter_Exe_Linux"),
     *         rFilePatterns: [ "*.application", "*.exe", "*.sh", "*.AppImage" ],
     *         bUseAsDefault: true,
     *     },
     *     {
     *         strFileTypeName: LocalizationManager.LocalizeString("#AddNonSteam_Filter_All"),
     *         rFilePatterns: [ "*" ],
     *     }
     * ]
     * ```
     */
    rgFilters?: FileDialogFilter[];
    /** Initially selected file. */
    strInitialFile?: string;
    /** Window title. */
    strTitle?: string;
}

export interface FileDialogFilter {
    /** A localization string for the file type. */
    strFileTypeName: string;
    /**
     * File patterns.
     * @example [ "*.application", "*.exe", "*.sh", "*.AppImage" ]
     */
    rFilePatterns: string[];
    /** Whether to use this filter by default. */
    bUseAsDefault?: boolean;
}

export interface OSEndOfLifeInfo {
    bOSWillBeUnsupported: boolean;
    osType: OSType;
}

export interface SteamURL {
    url: string;
    /**
     * @todo enum?
     */
    feature: number;
}

export interface SteamURLs {
    CommunityImages: SteamURL;
    StoreAppImages: SteamURL;
    BaseURLSharedCDN: SteamURL;
    ClanAssetCDN: SteamURL;
    CommunityCDN: SteamURL;
    AvatarBaseURL: SteamURL;
    StoreCDN: SteamURL;
    WebAPI: SteamURL;
    LocalSSA: SteamURL;
}

export interface SteamWindow {
    appid: number;
    hwndParent: number;
    nBrowserID: number;
    strAppName: string;
    unID: number;
    unPID: number;
    windowType: number;
    x: number;
    y: number;
}

export interface TransportInfo {
    authKeyClientdll: string;
    authKeySteamUI: string;
    portClientdll: number;
    portSteamUI: number;
}

export interface FriendChatDialog {
    browserid: number;
    btakefocus: string;
    command: string;
    pid: number;
    steamid: string;
}

export interface FriendChatDialogData {
    data: FriendChatDialog;
}

export interface PushToTalkInfo {
    /** Indicates whether push-to-talk is enabled. */
    bEnabled: boolean;
    /** Indicates whether push-to-mute is in use instead. */
    bPushToMute: boolean;
    /**
     * Push-to-talk hotkey.
     * @todo enum?
     */
    vkHotKey: number;
    /** Push-to-talk hotkey name. */
    strKeyName: string;
}

export interface NotificationOptions {
    body: string;
    chatroomgroupid?: number;
    chatroomid?: number;
    icon?: string;
    state: string;
    /** A Steam64 ID. */
    steamid: string;
    tag?: string;
    title?: string;
}

export interface LogonInfo {
    bLoggedOn: boolean;
    eUniverse: SteamRealm;
    strAccountName: string;
    strCommunityImagesURL: string;
    strPersonaName: string;
    /** Steam64 ID. */
    strSteamid: string;
    /** Country code. */
    strUserCountry: string;
}

export interface GameWindowInfo {
    bCanClose: boolean;
    strTitle: string;
    windowid: number;
}

export interface FocusedApp {
    appid: number;
    pid: number;
    windowid: number;
    strExeName: string;
}

export interface FocusChangeEvent {
    focusedApp: FocusedApp;
    rgFocusable: FocusedApp[];
}

export interface AppBootstrapData {
    appid: number;
    hidden: boolean;
    user_tag: string[];
}

export interface UpdateApplyResult {
    type: UpdaterType;
    eresult: Result;
    requires_client_restart: boolean;
    requires_system_restart: boolean;
}

export interface UpdateCheckResult {
    type: UpdaterType;
    eresult: Result;
    rtime_checked: number;
    available: boolean;
}

export interface UpdateProgress {
    stage_progress: number | undefined;
    stage_size_bytes: number | undefined;
    rtime_estimated_completion: number | undefined;
}

export interface SystemPerfNetworkInterface {
    name: string | undefined;
    timestamp: number | undefined;
    tx_bytes_total: number | undefined;
    rx_bytes_total: number | undefined;
    tx_bytes_per_sec: number | undefined;
    rx_bytes_per_sec: number | undefined;
}

export interface SystemPerfDiagnosticEntry {
    name: string | undefined;
    value: string | undefined;
}

export interface NetworkDeviceIPv4Address {
    ip: number;
    netmask: number;
}

export interface NetworkDeviceIPv6Address {
    ip: string;
}

export interface NetworkDeviceIP {
    dns_ip: number[];
    gateway_ip: number;
    is_default_route: boolean;
    is_dhcp_enabled: boolean;
    is_enabled: boolean;
}

export interface NetworkDeviceIPv4 extends NetworkDeviceIP {
    addresses: NetworkDeviceIPv4Address[];
}

export interface NetworkDeviceIPv6 extends NetworkDeviceIP {
    addresses: NetworkDeviceIPv6Address[];
}

export interface WirelessAP {
    esecurity: WirelessAPSecurity;
    estrength: WirelessAPStrength;
    id: number;
    is_active: boolean;
    is_autoconnect: boolean;
    password: string;
    ssid: string;
    strength_raw: number;
    user_name?: string;
}

export interface NetworkDevice_Wireless {
    aps: WirelessAP[];
    /**
     * @remarks Not present if wired.
     * @todo enum
     */
    esecurity_supported?: number;
}

export interface NetworkDevice_Wired {
    friendly_name: string;
    is_cable_present: boolean;
    speed_mbit: number;
}

export interface NetworkDevice {
    estate: NetworkDeviceState;
    etype: NetworkDeviceType;
    id: number;
    ipv4: NetworkDeviceIPv4;
    ipv6: NetworkDeviceIPv6;
    mac: string;
    product: string;
    vendor: string;
    /**
     * @remarks Present only if wired.
     */
    wired?: NetworkDevice_Wired;
    /**
     * @remarks Present even if wired.
     */
    wireless: NetworkDevice_Wireless;
}

export interface Hotkey {
    alt_key: boolean;
    ctrl_key: boolean;
    display_name: string;
    key_code: number;
    meta_key: boolean;
    shift_key: boolean;
}

/**
 * @todo Doesn't work on Linux ?
 */
export interface Monitor {
    monitor_device_name: string;
    monitor_display_name: string;
}

export interface SystemDockUpdateState {
    state: UpdaterState | undefined;
    rtime_last_checked: number | undefined;
    version_current: string | undefined;
    version_available: string | undefined;
    stage_progress: number | undefined;
    rtime_estimated_completion: number | undefined;
    old_fw_workaround: number | undefined;
}

export interface SystemPerfLimits {
    cpu_governor_manual_min_mhz: number | undefined;
    cpu_governor_manual_max_mhz: number | undefined;
    fsr_sharpness_min: number | undefined;
    fsr_sharpness_max: number | undefined;
    gpu_performance_manual_min_mhz: number | undefined;
    gpu_performance_manual_max_mhz: number | undefined;
    perf_overlay_is_standalone: boolean | undefined;
    is_dynamic_vrs_available: boolean | undefined;
    is_manual_display_refresh_rate_available: boolean | undefined;
    gpu_performance_levels_available: GPUPerformanceLevel[];
    display_refresh_manual_hz_min: number | undefined;
    display_refresh_manual_hz_max: number | undefined;
    fps_limit_options: number[] | undefined;
    tdp_limit_min: number | undefined;
    tdp_limit_max: number | undefined;
    is_nis_supported: boolean | undefined;
    nis_sharpness_min: number | undefined;
    nis_sharpness_max: number | undefined;
    display_external_refresh_manual_hz_min: number | undefined;
    display_external_refresh_manual_hz_max: number | undefined;
    fps_limit_options_external: number[] | undefined;
    is_tearing_supported: boolean | undefined;
    is_vrr_supported: boolean | undefined;
    is_dynamic_refresh_rate_in_steam_supported: boolean | undefined;
    is_split_scaling_and_filtering_supported: boolean | undefined;
    split_scaling_filters_available: SplitScalingFilter[];
    split_scaling_scalers_available: SplitScalingScaler[];
    is_hdr_supported: boolean | undefined;
    display_refresh_manual_hz_oc_max: number | undefined;
    disable_refresh_rate_management: boolean | undefined;
}

export interface SystemPerfSettingsGlobal {
    diagnostic_update_rate: number;
    system_trace_service_state: SystemServiceState;
    graphics_profiling_service_state: SystemServiceState;
    perf_overlay_service_state: SystemServiceState;
    perf_overlay_level: GraphicsPerfOverlayLevel;
    is_show_perf_overlay_over_steam_enabled: boolean;
    is_advanced_settings_enabled: boolean;
    allow_external_display_refresh_control: boolean;
    is_hdr_enabled: boolean;
    hdr_on_sdr_tonemap_operator: HDRToneMapOperator;
    is_hdr_debug_heatmap_enabled: boolean;
    force_hdr_wide_gammut_for_sdr: boolean;
    allow_experimental_hdr: boolean;
    sdr_to_hdr_brightness: number;
    debug_force_hdr_support: boolean;
    force_hdr_10pq_output_debug: boolean;
    is_display_oc_enabled: boolean;
    is_color_management_enabled: boolean;
}

export interface SystemPerfSettingsPerApp {
    gpu_performance_manual_mhz: number | undefined;
    fps_limit: number | undefined;
    is_variable_resolution_enabled: boolean | undefined;
    is_dynamic_refresh_rate_enabled: boolean | undefined;
    tdp_limit: number | undefined;
    cpu_governor: CPUGovernor | undefined;
    cpu_governor_manual_mhz: number | undefined;
    scaling_filter: number | undefined;
    fsr_sharpness: number | undefined;
    is_fps_limit_enabled: boolean | undefined;
    is_tdp_limit_enabled: boolean | undefined;
    is_low_latency_mode_enabled: boolean | undefined;
    display_refresh_manual_hz: number | undefined;
    is_game_perf_profile_enabled: boolean | undefined;
    gpu_performance_level: GPUPerformanceLevel | undefined;
    nis_sharpness: number | undefined;
    display_external_refresh_manual_hz: number | undefined;
    fps_limit_external: number | undefined;
    is_tearing_enabled: boolean | undefined;
    is_vrr_enabled: boolean | undefined;
    is_composite_debug_enabled: boolean | undefined;
    force_composite: boolean | undefined;
    use_dynamic_refresh_rate_in_steam: boolean | undefined;
    split_scaling_filter: SplitScalingFilter | undefined;
    split_scaling_scaler: SplitScalingScaler | undefined;
}

export interface SystemPerfSettings {
    global: SystemPerfSettingsGlobal | undefined;
    per_app: SystemPerfSettingsPerApp | undefined;
}

export interface SteamDatagramLinkInstantaneousStats {
    out_packets_per_sec_x10: number | undefined;
    out_bytes_per_sec: number | undefined;
    in_packets_per_sec_x10: number | undefined;
    in_bytes_per_sec: number | undefined;
    ping_ms: number | undefined;
    packets_dropped_pct: number | undefined;
    packets_weird_sequence_pct: number | undefined;
    peak_jitter_usec: number | undefined;
}

export interface SteamDatagramLinkLifetimeStats {
    connected_seconds: number | undefined;
    packets_sent: number | undefined;
    kb_sent: number | undefined;
    packets_recv: number | undefined;
    kb_recv: number | undefined;
    packets_recv_sequenced: number | undefined;
    packets_recv_dropped: number | undefined;
    packets_recv_out_of_order: number | undefined;
    packets_recv_out_of_order_corrected: number | undefined;
    packets_recv_duplicate: number | undefined;
    packets_recv_lurch: number | undefined;
    multipath_packets_recv_sequenced: number[];
    multipath_packets_recv_later: number[];
    multipath_send_enabled: number | undefined;
    quality_histogram_100: number | undefined;
    quality_histogram_99: number | undefined;
    quality_histogram_97: number | undefined;
    quality_histogram_95: number | undefined;
    quality_histogram_90: number | undefined;
    quality_histogram_75: number | undefined;
    quality_histogram_50: number | undefined;
    quality_histogram_1: number | undefined;
    quality_histogram_dead: number | undefined;
    quality_ntile_2nd: number | undefined;
    quality_ntile_5th: number | undefined;
    quality_ntile_25th: number | undefined;
    quality_ntile_50th: number | undefined;
    ping_histogram_25: number | undefined;
    ping_histogram_50: number | undefined;
    ping_histogram_75: number | undefined;
    ping_histogram_100: number | undefined;
    ping_histogram_125: number | undefined;
    ping_histogram_150: number | undefined;
    ping_histogram_200: number | undefined;
    ping_histogram_300: number | undefined;
    ping_histogram_max: number | undefined;
    ping_ntile_5th: number | undefined;
    ping_ntile_50th: number | undefined;
    ping_ntile_75th: number | undefined;
    ping_ntile_95th: number | undefined;
    ping_ntile_98th: number | undefined;
    jitter_histogram_negligible: number | undefined;
    jitter_histogram_1: number | undefined;
    jitter_histogram_2: number | undefined;
    jitter_histogram_5: number | undefined;
    jitter_histogram_10: number | undefined;
    jitter_histogram_20: number | undefined;
    txspeed_max: number | undefined;
    txspeed_histogram_16: number | undefined;
    txspeed_histogram_32: number | undefined;
    txspeed_histogram_64: number | undefined;
    txspeed_histogram_128: number | undefined;
    txspeed_histogram_256: number | undefined;
    txspeed_histogram_512: number | undefined;
    txspeed_histogram_1024: number | undefined;
    txspeed_histogram_max: number | undefined;
    txspeed_ntile_5th: number | undefined;
    txspeed_ntile_50th: number | undefined;
    txspeed_ntile_75th: number | undefined;
    txspeed_ntile_95th: number | undefined;
    txspeed_ntile_98th: number | undefined;
    rxspeed_max: number | undefined;
    rxspeed_histogram_16: number | undefined;
    rxspeed_histogram_32: number | undefined;
    rxspeed_histogram_64: number | undefined;
    rxspeed_histogram_128: number | undefined;
    rxspeed_histogram_256: number | undefined;
    rxspeed_histogram_512: number | undefined;
    rxspeed_histogram_1024: number | undefined;
    rxspeed_histogram_max: number | undefined;
    rxspeed_ntile_5th: number | undefined;
    rxspeed_ntile_50th: number | undefined;
    rxspeed_ntile_75th: number | undefined;
    rxspeed_ntile_95th: number | undefined;
    rxspeed_ntile_98th: number | undefined;
}

export interface SteamDatagramConnectionQuality {
    instantaneous: SteamDatagramLinkInstantaneousStats | undefined;
    lifetime: SteamDatagramLinkLifetimeStats | undefined;
}

export interface SteamNetworkingICESessionSummary {
    failure_reason_code: number | undefined;
    local_candidate_types: number | undefined;
    remote_candidate_types: number | undefined;
    initial_route_kind: number | undefined;
    initial_ping: number | undefined;
    initial_score: number | undefined;
    negotiation_ms: number | undefined;
    best_route_kind: number | undefined;
    best_ping: number | undefined;
    best_score: number | undefined;
    best_time: number | undefined;
    selected_seconds: number | undefined;
    user_settings: number | undefined;
    ice_enable_var: number | undefined;
    local_candidate_types_allowed: number | undefined;
}

export interface SteamNetworkingP2PSDRRoutingSummary {
    initial_ping: number | undefined;
    initial_ping_front_local: number | undefined;
    initial_ping_front_remote: number | undefined;
    initial_score: number | undefined;
    initial_pop_local: number | undefined;
    initial_pop_remote: number | undefined;
    best_ping: number | undefined;
    best_ping_front_local: number | undefined;
    best_ping_front_remote: number | undefined;
    best_score: number | undefined;
    best_pop_local: number | undefined;
    best_pop_remote: number | undefined;
    best_time: number | undefined;
    negotiation_ms: number | undefined;
    selected_seconds: number | undefined;
}

export interface SteamDatagramP2PRoutingSummary {
    ice: SteamNetworkingICESessionSummary | undefined;
    sdr: SteamNetworkingP2PSDRRoutingSummary | undefined;
}

export interface MsgSystemAudioVolumeChannelEntry {
    echannel: SystemAudioChannel | undefined;
    volume: number | undefined;
}

export interface MsgSystemAudioVolume {
    entries: MsgSystemAudioVolumeChannelEntry[] | undefined;
    is_muted: boolean | undefined;
}

export interface MsgSystemAudioManagerObject {
    id: number | undefined;
    rtime_last_update: number | undefined;
}

export interface MsgSystemAudioManagerDevice {
    base: MsgSystemAudioManagerObject | undefined;
    name: string | undefined;
    nick: string | undefined;
    description: string | undefined;
    api: string | undefined;
}

export interface MsgSystemAudioManagerNode {
    base: MsgSystemAudioManagerObject | undefined;
    device_id: number | undefined;
    name: string | undefined;
    nick: string | undefined;
    description: string | undefined;
    edirection: SystemAudioDirection | undefined;
    volume: MsgSystemAudioVolume | undefined;
}

export interface MsgSystemAudioManagerPort {
    base: MsgSystemAudioManagerObject | undefined;
    node_id: number | undefined;
    name: string | undefined;
    alias: string | undefined;
    etype: SystemAudioPortType | undefined;
    edirection: SystemAudioPortDirection | undefined;
    is_physical: boolean | undefined;
    is_terminal: boolean | undefined;
    is_control: boolean | undefined;
    is_monitor: boolean | undefined;
}

export interface MsgSystemAudioManagerLink {
    base: MsgSystemAudioManagerObject | undefined;
    output_node_id: number | undefined;
    output_port_id: number | undefined;
    input_node_id: number | undefined;
    input_port_id: number | undefined;
}

export interface MsgSystemAudioManagerStateHW {
    devices: MsgSystemAudioManagerDevice[];
    nodes: MsgSystemAudioManagerNode[];
    ports: MsgSystemAudioManagerPort[];
    links: MsgSystemAudioManagerLink[];
}

/**
 * JsPb message class.
 */
export interface JsPbMessageClass {
    /**
     * @todo Returns {@link JsPbMessage}, but not sure how to do it for the messages.
     */
    deserializeBinary(data: ArrayBuffer): any;
}

/**
 * Deserialized JsPb message.
 */
export interface JsPbMessage {
    array: any[];
    arrayIndexOffset_: number;
    convertedPrimitiveFields_: any;
    messageId_?: string;
    pivot_: number;
    wrappers_: any;

    getClassName(): string;
    serializeBase64String(): string;
    serializeBinary(): Uint8Array;
    /**
     * Converts the message to an object.
     */
    toObject(includeJsPbInstance: boolean): any;
}

/**
 * CLibraryBootstrapData
 */
export interface LibraryBootstrapData extends JsPbMessage {
    app_data(): AppBootstrapData[];

    add_app_data(param0: any, param1: any): any;
    set_app_data(param0: any): any;
}

/**
 * CAppOverview_Change
 */
export interface AppOverview_Change extends JsPbMessage {
    app_overview(): SteamAppOverview[];
    full_update(): boolean;
    removed_appid(): number[];
    update_complete(): boolean;

    add_app_overview(param0: any, param1: any): any;
    add_removed_appid(param0: any, param1: any): any;
    set_app_overview(param0: any): any;
    set_full_update(param0: any): any;
    set_removed_appid(param0: any): any;
    set_update_complete(param0: any): any;
}

/**
 * CAuthentication_DeviceDetails
 *
 * `deserializeBinary` argument:
 * ```
 * [
 *     await SteamClient.System.GetOSType(),
 *     await SteamClient.Auth.GetLocalHostname(),
 *     await SteamClient.Auth.GetMachineID(),
 * ];
 * ```
 */
export interface Authentication_DeviceDetails extends JsPbMessage {
    client_count(): number | undefined;
    device_friendly_name(): string | undefined;
    gaming_device_type(): GamingDeviceType | undefined;
    machine_id(): Uint8Array | string;
    os_type(): OSType | undefined;
    platform_type(): AuthTokenPlatformType | undefined;

    set_client_count(): any;
    set_device_friendly_name(): any;
    set_gaming_device_type(): any;
    set_machine_id(): any;
    set_os_type(): any;
    set_platform_type(): any;
}

/**
 * CMsgMonitorInfo
 */
export interface MsgMonitorInfo extends JsPbMessage {
    monitors(): Monitor[];
    selected_display_name(): string;

    add_monitors(param0: any, param1: any): any;
    set_monitors(param0: any): any;
    set_selected_display_name(param0: any): any;
}

/**
 * CMsgSystemManagerSettings
 */
export interface MsgSystemManagerSettings extends JsPbMessage {
    display_adaptive_brightness_enabled(): boolean;
    display_colorgamut(): number;
    display_colorgamut_labelset(): number;
    display_colortemp(): number;
    display_colortemp_default(): number;
    display_colortemp_enabled(): boolean;
    display_diagnostics_enabled(): boolean;
    display_nightmode_blend(): number;
    display_nightmode_enabled(): boolean;
    display_nightmode_maxhue(): number;
    display_nightmode_maxsat(): number;
    display_nightmode_schedule_enabled(): boolean;
    display_nightmode_schedule_endtime(): number;
    display_nightmode_schedule_starttime(): number;
    display_nightmode_tintstrength(): number;
    display_nightmode_uiexp(): number;
    fan_control_mode(): number;
    idle_backlight_dim_ac_seconds(): number;
    idle_backlight_dim_battery_seconds(): number;
    idle_suspend_ac_seconds(): number;
    idle_suspend_battery_seconds(): number;
    idle_suspend_supressed(): boolean;
    is_adaptive_brightness_available(): boolean;
    is_display_brightness_available(): boolean;
    is_display_colormanagement_available(): boolean;
    is_display_colortemp_available(): boolean;
    is_fan_control_available(): boolean;
    is_wifi_powersave_enabled(): boolean;
}

/**
 * CMsgSystemAudioManagerState
 */
export interface MsgSystemAudioManagerState extends JsPbMessage {
    counter(): number | undefined;
    hw(): MsgSystemAudioManagerStateHW | undefined;
    rtime_filter(): number | undefined;
}

/**
 * CMsgSystemUpdateState
 */
export interface MsgSystemUpdateState extends JsPbMessage {
    state(): UpdaterState | undefined;
    progress(): UpdateProgress | undefined;
    supports_os_updates(): boolean | undefined;
    update_apply_results(): UpdateApplyResult[];
    update_check_results(): UpdateCheckResult[];
}

/**
 * CMsgSystemDockState
 */
export interface MsgSystemDockState extends JsPbMessage {
    update_state(): SystemDockUpdateState | undefined;
}

/**
 * CMsgSystemPerfDiagnosticInfo
 */
export interface MsgSystemPerfDiagnosticInfo extends JsPbMessage {
    battery_temp_c(): number | undefined;
    entries(): SystemPerfDiagnosticEntry[] | undefined;
    interfaces(): SystemPerfNetworkInterface[] | undefined;
}

/**
 * CMsgSystemPerfState
 */
export interface MsgSystemPerfState extends JsPbMessage {
    active_profile_game_id(): string | undefined;
    current_game_id(): string | undefined;
    limits(): SystemPerfLimits | undefined;
    settings(): SystemPerfSettings | undefined;
}

/**
 * CMsgGenerateSystemReportReply
 */
export interface MsgGenerateSystemReportReply extends JsPbMessage {
    /**
     * The report file name.
     */
    report_id(): string | undefined;
    set_report_id(param0: any): any;
}

/**
 * CMsgNetworkDevicesData
 */
export interface MsgNetworkDevicesData extends JsPbMessage {
    devices(): NetworkDevice[];
    is_wifi_enabled(): boolean;
    is_wifi_scanning_enabled(): boolean;
}

/**
 * CMsgClientSettings
 */
export interface MsgClientSettings extends JsPbMessage {
    always_show_user_chooser(): boolean;
    always_use_gamepadui_overlay(): boolean;
    auto_scale_factor(): number;
    bigpicture_windowed(): boolean;
    broadcast_bitrate(): number;
    broadcast_chat_corner(): number;
    broadcast_encoding_option(): BroadcastEncoderSetting;
    broadcast_output_height(): number;
    broadcast_output_width(): number;
    broadcast_permissions(): BroadcastPermission;
    broadcast_record_all_audio(): boolean;
    broadcast_record_all_video(): boolean;
    broadcast_record_microphone(): boolean;
    broadcast_show_live_reminder(): boolean;
    broadcast_show_upload_stats(): boolean;
    cef_remote_debugging_enabled(): boolean;
    cloud_enabled(): boolean;
    controller_combine_nintendo_joycons(): boolean;
    controller_generic_support(): boolean;
    controller_guide_button_focus_steam(): boolean;
    controller_power_off_timeout(): number;
    controller_ps_support(): number;
    controller_switch_support(): boolean;
    controller_xbox_driver(): boolean;
    controller_xbox_support(): boolean;
    default_ping_rate(): number;
    disable_all_toasts(): boolean;
    disable_toasts_in_game(): boolean;
    display_name(): string;
    download_peer_content(): number;
    download_rate_bits_per_s(): boolean;
    download_region(): number;
    download_throttle_rate(): number;
    download_throttle_while_streaming(): boolean;
    download_while_app_running(): boolean;
    enable_dpi_scaling(): boolean;
    enable_gpu_accelerated_webviews(): boolean;
    enable_hardware_video_decoding(): boolean;
    enable_marketing_messages(): boolean;
    enable_overlay(): boolean;
    enable_screenshot_notification(): boolean;
    enable_screenshot_sound(): boolean;
    enable_shader_background_processing(): boolean;
    enable_shader_precache(): boolean;
    enable_ui_sounds(): boolean;
    force_deck_perf_tab(): boolean;
    force_fake_mandatory_update(): boolean;
    force_oobe(): boolean;
    g_background_mk(): Hotkey;
    g_background_tg(): Hotkey;
    game_notes_enable_spellcheck(): boolean;
    gamescope_app_target_framerate(): number;
    gamescope_disable_framelimit(): boolean;
    gamescope_display_refresh_rate(): number;
    gamescope_enable_app_target_framerate(): boolean;
    gamescope_hdr_visualization(): HDRVisualization;
    in_client_beta(): boolean;
    is_external_display(): boolean;
    is_steam_sideloaded(): boolean;
    jumplist_flags(): number;
    library_disable_community_content(): boolean;
    library_display_icon_in_game_list(): boolean;
    library_display_size(): number;
    library_low_bandwidth_mode(): boolean;
    library_low_perf_mode(): boolean;
    library_whats_new_show_only_product_updates(): boolean;
    max_scale_factor(): number;
    min_scale_factor(): number;
    music_download_high_quality(): boolean;
    music_pause_on_app_start(): boolean;
    music_pause_on_voice_chat(): boolean;
    music_playlist_notification(): boolean;
    music_volume(): number;
    needs_steam_service_repair(): boolean;
    no_save_personal_info(): boolean;
    oobe_test_mode_enabled(): boolean;
    overlay_fps_counter_corner(): number;
    overlay_fps_counter_high_contrast(): boolean;
    overlay_key(): Hotkey;
    overlay_restore_browser_tabs(): boolean;
    overlay_scale_interface(): boolean;
    overlay_tabs(): string;
    overlay_toolbar_list_view(): boolean;
    override_browser_composer_mode(): number;
    play_sound_on_toast(): boolean;
    preferred_monitor(): string;
    ready_to_play_includes_streaming(): boolean;
    restrict_auto_updates(): boolean;
    restrict_auto_updates_end(): number;
    restrict_auto_updates_start(): number;
    run_at_startup(): boolean;
    save_uncompressed_screenshots(): boolean;
    screenshot_items_per_row(): number;
    screenshot_key(): Hotkey;
    screenshots_path(): string;
    server_ping_rate(): number;
    shader_precached_size(): string;
    show_family_sharing_notifications(): boolean;
    show_screenshot_manager(): boolean;
    show_steam_deck_info(): boolean;
    show_store_content_on_home(): boolean;
    show_timestamps_in_console(): boolean;
    skip_steamvr_install_dialog(): boolean;
    small_mode(): boolean;
    smooth_scroll_webviews(): boolean;
    start_in_big_picture_mode(): boolean;
    start_page(): string;
    startup_movie_id(): string;
    startup_movie_local_path(): string;
    startup_movie_shuffle(): boolean;
    startup_movie_used_for_resume(): boolean;
    steam_cef_gpu_blocklist_disabled(): boolean;
    steam_input_configurator_error_msg_enable(): boolean;
    steam_networking_share_ip(): number;
    steam_os_underscan_enabled(): boolean;
    steam_os_underscan_level(): number;
    steamos_status_led_brightness(): number;
    turn_off_controller_on_exit(): boolean;
    voice_mic_device_name(): string;
    voice_mic_input_gain(): number;
    voice_push_to_talk_key(): Hotkey;
    voice_push_to_talk_setting(): number;
    voice_speaker_output_gain(): number;
    web_browser_home(): string;
}

/**
 * CGameNetworkingUI_ConnectionState
 */
export interface GameNetworkingUI_ConnectionState extends JsPbMessage {
    connection_key(): string;
    appid(): number;
    connection_id_local(): number;
    identity_local(): string;
    identity_remote(): string;
    connection_state(): number;
    start_time(): number;
    close_time(): number;
    close_reason(): number;
    close_message(): string;
    status_loc_token(): string;
    transport_kind(): number;
    sdrpopid_local(): string;
    sdrpopid_remote(): string;
    address_remote(): string;
    p2p_routing(): SteamDatagramP2PRoutingSummary;
    ping_interior(): number;
    ping_remote_front(): number;
    ping_default_internet_route(): number;
    e2e_quality_local(): SteamDatagramConnectionQuality;
    e2e_quality_remote(): SteamDatagramConnectionQuality;
    e2e_quality_remote_instantaneous_time(): string;
    e2e_quality_remote_lifetime_time(): string;
    front_quality_local(): SteamDatagramConnectionQuality;
    front_quality_remote(): SteamDatagramConnectionQuality;
    front_quality_remote_instantaneous_time(): string;
    front_quality_remote_lifetime_time(): string;
}

/**
 * CMsgHotkey
 */
export interface MsgHotkey extends JsPbMessage {
    key_code(): number;
    alt_key(): boolean;
    shift_key(): boolean;
    ctrl_key(): boolean;
    meta_key(): boolean;
    display_name(): string;
}

/**
 * CClientNotificationGroupChatMessage
 */
export interface ClientNotificationGroupChatMessage extends JsPbMessage {
    tag(): string;
    /** A Steam64 ID. */
    steamid_sender(): string;
    chat_group_id(): string;
    chat_id(): string;
    title(): string;
    body(): string;
    rawbody(): string;
    icon(): string;
    notificationid(): number;
}

/**
 * CClientNotificationFriendMessage
 */
export interface ClientNotificationFriendMessage extends JsPbMessage {
    body(): string;
    icon(): string;
    notificationid(): number;
    response_steamurl(): string;
    /** A Steam64 ID. */
    steamid(): string;
    tag(): string;
    title(): string;
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
    Max = 57,
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

export enum SteamRealm {
    Unknown = 0,
    Global = 1,
    China = 2,
}

/**
 * @remarks Not present in any of the Steam files, source: https://gist.github.com/Ne3tCode/fc424ae2bd723d9ccb236eeccce66316#file-steammobile_friendsui_enums-steamd-L1308-L1340
 */
export enum AppLaunchSource {
    None = 0,
    _2ftLibraryDetails = 100,
    _2ftLibraryListView = 101,
    _2ftLibraryGrid = 103,
    InstallSubComplete = 104,
    DownloadsPage = 105,
    RemoteClientStartStreaming = 106,
    _2ftMiniModeList = 107,
    _10ft = 200,
    DashAppLaunchCmdLine = 300,
    DashGameIdLaunchCmdLine = 301,
    RunByGameDir = 302,
    SubCmdRunDashGame = 303,
    SteamURL_Launch = 400,
    SteamURL_Run = 401,
    SteamURL_JoinLobby = 402,
    SteamURL_RunGame = 403,
    SteamURL_RunGameIdOrJumplist = 404,
    SteamURL_RunSafe = 405,
    TrayIcon = 500,
    LibraryLeftColumnContextMenu = 600,
    LibraryLeftColumnDoubleClick = 601,
    Dota2Launcher = 700,
    IRunGameEngine = 800,
    DRMFailureResponse = 801,
    DRMDataRequest = 802,
    CloudFilePanel = 803,
    DiscoveredAlreadyRunning = 804,
    GameActionJoinParty = 900,
    AppPortraitContextMenu = 1000,
}

export enum AppLaunchOptionType {
    None = 0,
    Default = 1,
    SafeMode = 2,
    Multiplayer = 3,
    Config = 4,
    OpenVR = 5,
    Server = 6,
    Editor = 7,
    Manual = 8,
    Benchmark = 9,
    Option1 = 10,
    Option2 = 11,
    Option3 = 12,
    OculusVR = 13,
    OpenVROverlay = 14,
    OSVR = 15,
    OpenXR = 16,
    Dialog = 1e3,
}

/**
 * @remarks Not present in any of the Steam files. This is only present as localization strings, whose tokens start with `#Steam_AppUpdateError_`.
 */
export enum AppUpdateError {
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
    ParentalControlBlocked = 45,
    CreateProcessFailure = 46,
    SteamClientOutdated = 47,
    PlaytimeExceeded = 48,
    CorruptFileSignature = 49,
    MissingInstalledFiles = 50,
    CompatibilityToolFailure = 51,
    UnmountedUninstallPath = 52,
    InvalidBackupPath = 53,
    InvalidPasscode = 54,
    ThirdPartyUpdater = 55,
    ParentalPlaytimeExceeded = 56,
}

export enum ClientUINotification {
    GroupChatMessage = 1,
    FriendChatMessage = 2,
    FriendPersonaState = 3,
}

export enum MusicRepeatStatus {
    None = 0,
    All = 1,
    Once = 2,
    Max = 3,
}

export enum JoinServerError {
    PingFailed = -3,
    Connecting = -2,
    Pinging = -1,
    None = 0,
    VACBanned = 1,
    ServerFull = 2,
    ModNotInstalled = 3,
    AppNotFound = 4,
    NotInitialized = 5,
}

export enum ServerBrowserGameFilterAntiCheat {
    All = 0,
    Secure = 1,
    NotSecure = 2,
}

export enum ServerBrowserGameFilterPing {
    All = 0,
    LessThan50 = 50,
    LessThan100 = 100,
    LessThan150 = 150,
    LessThan250 = 250,
}

export enum UIMode {
    Unknown = -1,
    GamePad = 4,
    Desktop = 7,
}

export enum WindowBringToFront {
    Invalid = 0,
    ForceOS = 1,
    WithoutForcingOS = 2,
}

export enum ComputerActiveState {
    Invalid = 0,
    Active = 1,
    Idle = 2,
}

export enum ClientUsedInputType {
    Keyboard = 0,
    Mouse = 1,
    Controller = 2,
    Max = 3,
}

export enum TouchGestureType {
    None = 0,
    Touch = 1,
    Tap = 2,
    DoubleTap = 3,
    ShortPress = 4,
    LongPress = 5,
    LongTap = 6,
    TwoFingerTap = 7,
    TapCancelled = 8,
    PinchBegin = 9,
    PinchUpdate = 10,
    PinchEnd = 11,
    FlingStart = 12,
    FlingCancelled = 13,
}

export enum BrowserViewContextMenuCommand {
    Close = -1,
    OpenDevTools = 26500,
    CloseDevTools = 26501,
    InspectElement = 26502,
    OpenLinkInNewTab = 26503,
}

export enum BrowserViewContextMenuTypeFlag {
    None = 0,
    Page = 1 << 0,
    Frame = 1 << 1,
    Link = 1 << 2,
    Media = 1 << 3,
    Selection = 1 << 4,
    Editable = 1 << 5,
}

export enum BrowserViewContextMenuEditFlag {
    None = 0,
    CanUndo = 1 << 0,
    CanRedo = 1 << 1,
    CanCut = 1 << 2,
    CanCopy = 1 << 3,
    CanPaste = 1 << 4,
    CanDelete = 1 << 5,
    CanSelectAll = 1 << 6,
    CanTranslate = 1 << 7,
}

export enum HDRVisualization {
    None,
    Heatmap,
    Analysis,
    HeatmapExtended,
    HeatmapClassic,
}

export enum BroadcastPermission {
    Disabled,
    FriendsApprove,
    FriendsAllowed,
    Public,
    Subscribers,
}

export enum BroadcastEncoderSetting {
    BestQuality,
    BestPerformance,
}

export enum UpdaterState {
    Invalid = 0,
    UpToDate = 2,
    Checking = 3,
    Available = 4,
    Applying = 5,
    ClientRestartPending = 6,
    SystemRestartPending = 7,
}

export enum UpdaterType {
    Invalid,
    Client,
    OS,
    BIOS,
    Aggregated,
    Test1,
    Test2,
    Dummy,
}

export enum Result {
    OK = 1,
    Fail = 2,
    NoConnection = 3,
    InvalidPassword = 5,
    LoggedInElsewhere = 6,
    InvalidProtocolVer = 7,
    InvalidParam = 8,
    FileNotFound = 9,
    Busy = 10,
    InvalidState = 11,
    InvalidName = 12,
    InvalidEmail = 13,
    DuplicateName = 14,
    AccessDenied = 15,
    Timeout = 16,
    Banned = 17,
    AccountNotFound = 18,
    InvalidSteamID = 19,
    ServiceUnavailable = 20,
    NotLoggedOn = 21,
    Pending = 22,
    EncryptionFailure = 23,
    InsufficientPrivilege = 24,
    LimitExceeded = 25,
    Revoked = 26,
    Expired = 27,
    AlreadyRedeemed = 28,
    DuplicateRequest = 29,
    AlreadyOwned = 30,
    IPNotFound = 31,
    PersistFailed = 32,
    LockingFailed = 33,
    LogonSessionReplaced = 34,
    ConnectFailed = 35,
    HandshakeFailed = 36,
    IOFailure = 37,
    RemoteDisconnect = 38,
    ShoppingCartNotFound = 39,
    Blocked = 40,
    Ignored = 41,
    NoMatch = 42,
    AccountDisabled = 43,
    ServiceReadOnly = 44,
    AccountNotFeatured = 45,
    AdministratorOK = 46,
    ContentVersion = 47,
    TryAnotherCM = 48,
    PasswordRequiredToKickSession = 49,
    AlreadyLoggedInElsewhere = 50,
    Suspended = 51,
    Cancelled = 52,
    DataCorruption = 53,
    DiskFull = 54,
    RemoteCallFailed = 55,
    PasswordUnset = 56,
    ExternalAccountUnlinked = 57,
    PSNTicketInvalid = 58,
    ExternalAccountAlreadyLinked = 59,
    RemoteFileConflict = 60,
    IllegalPassword = 61,
    SameAsPreviousValue = 62,
    AccountLogonDenied = 63,
    CannotUseOldPassword = 64,
    InvalidLoginAuthCode = 65,
    AccountLogonDeniedNoMail = 66,
    HardwareNotCapableOfIPT = 67,
    IPTInitError = 68,
    ParentalControlRestricted = 69,
    FacebookQueryError = 70,
    ExpiredLoginAuthCode = 71,
    IPLoginRestrictionFailed = 72,
    AccountLockedDown = 73,
    AccountLogonDeniedVerifiedEmailRequired = 74,
    NoMatchingURL = 75,
    BadResponse = 76,
    RequirePasswordReEntry = 77,
    ValueOutOfRange = 78,
    UnexpectedError = 79,
    Disabled = 80,
    InvalidCEGSubmission = 81,
    RestrictedDevice = 82,
    RegionLocked = 83,
    RateLimitExceeded = 84,
    AccountLoginDeniedNeedTwoFactor = 85,
    ItemDeleted = 86,
    AccountLoginDeniedThrottle = 87,
    TwoFactorCodeMismatch = 88,
    TwoFactorActivationCodeMismatch = 89,
    AccountAssociatedToMultiplePartners = 90,
    NotModified = 91,
    NoMobileDevice = 92,
    TimeNotSynced = 93,
    SmsCodeFailed = 94,
    AccountLimitExceeded = 95,
    AccountActivityLimitExceeded = 96,
    PhoneActivityLimitExceeded = 97,
    RefundToWallet = 98,
    EmailSendFailure = 99,
    NotSettled = 100,
    NeedCaptcha = 101,
    GSLTDenied = 102,
    GSOwnerDenied = 103,
    InvalidItemType = 104,
    IPBanned = 105,
    GSLTExpired = 106,
    InsufficientFunds = 107,
    TooManyPending = 108,
    NoSiteLicensesFound = 109,
    WGNetworkSendExceeded = 110,
    AccountNotFriends = 111,
    LimitedUserAccount = 112,
}

export enum AuthTokenPlatformType {
    Unknown,
    SteamClient,
    WebBrowser,
    MobileApp,
}

export enum SystemAudioDirection {
    Invalid,
    Input,
    Output,
}

export enum SystemAudioChannel {
    Invalid,
    Aggregated,
    FrontLeft,
    FrontRight,
    LFE,
    BackLeft,
    BackRight,
    FrontCenter,
    Unknown,
    Mono,
}

export enum SystemAudioPortType {
    Invalid,
    Unknown,
    Audio32f,
    Midi8b,
    Video32RGBA,
}

export enum SystemAudioPortDirection {
    Invalid,
    Input,
    Output,
}

export enum CPUGovernor {
    Invalid,
    Perf,
    Powersave,
    Manual,
}

export enum GPUPerformanceLevel {
    Invalid,
    Auto,
    Manual,
    Low,
    High,
    Profiling,
}

export enum SplitScalingFilter {
    Invalid,
    Linear,
    Nearest,
    FSR,
    NIS,
}

export enum SplitScalingScaler {
    Invalid,
    Auto,
    Integer,
    Fit,
    Fill,
    Stretch,
}

export enum SystemServiceState {
    Unavailable,
    Disabled,
    Enabled,
}

export enum GraphicsPerfOverlayLevel {
    Hidden,
    Basic,
    Medium,
    Full,
    Minimal,
}

export enum HDRToneMapOperator {
    Invalid,
    Uncharted,
    Reinhard,
}

export enum GamingDeviceType {
    Unknown = 0,
    StandardPC = 1,
    Console = 256,
    PS3 = 272,
    Steambox = 288,
    Handheld = 512,
    Phone = 528,
    SteamDeck = 544,
}

export enum WirelessAPSecurity {
    None = 0,
    StaticWep = 1 << 0,
    DynamicWep = 1 << 1,
    Wpa = 1 << 2,
    WpaEnterprise = 1 << 3,
    Wpa2 = 1 << 4,
    Wpa2Enterprise = 1 << 5,
    Unsupported = 1 << 15,
}

export enum WirelessAPStrength {
    None,
    Weak,
    Ok,
    Good,
    Excellent,
}

export enum NetworkDeviceState {
    NotPresent,
    Failed,
    Disconnected,
    Disconnecting,
    Connecting,
    Connected,
    Retrying,
}

export enum NetworkDeviceType {
    Unknown,
    Wired,
    Wireless,
    Virtual,
}

/**
 * @todo May be useful for ParentalSettings.feature ?
 */
export enum ParentalFeature {
    Invalid = 0,
    Store = 1,
    Community = 2,
    Profile = 3,
    Friends = 4,
    News = 5,
    Trading = 6,
    Settings = 7,
    Console = 8,
    Browser = 9,
    ParentalSetup = 10,
    Library = 11,
    Test = 12,
    SiteLicense = 13,
    KioskMode = 14,
    Max = 15,
}

export interface Unregisterable {
    /**
     * Unregister the callback.
     */
    unregister(): void;
}
