import { Unregisterable } from "./shared";
import {AppAchievements} from "./App";
import { Screenshot } from "./Screenshots";

/**
 * Represents functions related to Steam Game Sessions.
 */
export interface GameSessions {
    /**
     * Registers a callback function to be called when an achievement notification is received.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForAchievementNotification(
        callback: (achievementNotification: AchievementNotification) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be called when an app lifetime notification is received.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForAppLifetimeNotifications(
        callback: (appLifetimeNotification: AppLifetimeNotification) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be called when a screenshot notification is received.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForScreenshotNotification(
        callback: (screenshotNotification: ScreenshotNotification) => void,
    ): Unregisterable;
}

export interface AchievementNotification {
    achievement: AppAchievements;
    nCurrentProgress: number;
    nMaxProgress: number;
    unAppID: number;
}

/**
 * @prop unAppID is not properly set by Steam for non-steam game shortcuts, so it defaults to 0 for them
 */
export interface AppLifetimeNotification {
    unAppID: number;
    nInstanceID: number;
    bRunning: boolean;
}

export interface ScreenshotNotification {
    details: Screenshot;
    hScreenshot: number;
    strOperation: "deleted" | "written";
    unAppID: number;
}
