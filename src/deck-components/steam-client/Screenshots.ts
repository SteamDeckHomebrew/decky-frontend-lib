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
    GetLocalScreenshotByHandle(appId: string, screenshotIndex: number): Promise<Screenshot>;

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
     * Gets total screenshot usage in the specified library folder.
     * @param path Library folder path.
     * @returns {Promise<number>} A Promise that resolves to the number of taken space in bytes.
     */
    GetTotalDiskSpaceUsage(path: string): Promise<number>;

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

export enum FilePrivacyState {
    Invalid = -1,
    Private = 2,
    FriendsOnly = 4,
    Public = 8,
    Unlisted = 16,
}