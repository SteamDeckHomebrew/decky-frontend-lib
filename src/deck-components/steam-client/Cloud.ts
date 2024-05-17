export interface Cloud {
    /**
     * Resolves a synchronization conflict for an app in the cloud.
     * @param {number} appId - The ID of the app with the sync conflict.
     * @param {boolean} keepLocal - Whether to keep the local version during conflict resolution.
     * @returns {any} - Returns data related to resolving the sync conflict.
     */
    ResolveAppSyncConflict(appId: number, keepLocal: boolean): void;

    /**
     * Retries syncing an app with the cloud.
     * @param {number} appId - The ID of the app to retry syncing.
     * @returns {any} - Returns data related to retrying the app sync.
     */
    RetryAppSync(appId: number): void;
}