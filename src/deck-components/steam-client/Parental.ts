import {EResult, Unregisterable} from "./index";

/**
 * Interface for managing parental control settings.
 */
export interface Parental {
    /**
     * Locks the parental control settings.
     */
    LockParentalLock(): void;

    RegisterForParentalPlaytimeWarnings(callback: (time: number) => void): Unregisterable;

    /**
     * Registers a callback function to be invoked when parental settings change.
     * @param callback The callback function to be invoked when parental settings change.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForParentalSettingsChanges(callback: (parentalSettings: ParentalSettings) => void): Unregisterable;

    /**
     * Unlocks the parental lock with the provided PIN.
     * @param pin The 4-digit PIN to unlock the parental lock.
     * @param param1 Additional parameter. // Todo: Unknown usage.
     * @returns A Promise that resolves to a number representing the result of the unlock operation.
     */
    UnlockParentalLock(pin: string, param1: boolean): Promise<EResult>;
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

/**
 * Represents a list of applications with their IDs.
 */
interface AppList {
    /**
     * Key-value pairs where the key is the `appId` (e.g., "App_123456") and the value indicates whether the appId is allowed during parental lock.
     */
    [appId: string]: number;
}
