/**
 * Cloud-backed storage exposed to Steam's shared JS context.
 */
export interface CloudStorage {
    /**
     * Writes a JSON/string payload for the provided storage key.
     */
    WriteKey(key: string, value: string): Promise<void>;
}
