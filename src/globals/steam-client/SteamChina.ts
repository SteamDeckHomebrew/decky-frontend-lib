export interface SteamChina {
    /**
     * Gets the Steam China custom launcher app ID, or 0 when unavailable.
     */
    GetCustomLauncherAppID(): Promise<number>;
}
