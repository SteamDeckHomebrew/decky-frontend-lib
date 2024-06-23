export interface Cloud {
    /**
     * Resolves a synchronization conflict for an app in the cloud.
     * @param appId The ID of the app with the sync conflict.
     * @param keepLocal Whether to keep the local version during conflict resolution.
     * @returns Returns data related to resolving the sync conflict.
     */
    ResolveAppSyncConflict(appId: number, keepLocal: boolean): void;

    /**
     * Retries syncing an app with the cloud.
     * @param appId The ID of the app to retry syncing.
     * @returns Returns data related to retrying the app sync.
     */
    RetryAppSync(appId: number): void;
}
