import { Unregisterable } from "./shared";
import {AppAchievements} from "./App";
import { Screenshot } from "./Screenshots";

/**
 * Represents functions related to Steam Game Sessions.
 */
export interface GameSessions {
    /**
     * Registers for achievement progress/unlock notifications from running games.
     * @param callback Receives the achievement notification payload.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForAchievementNotification(
        callback: (notification: AchievementNotification) => void,
    ): Unregisterable;

    /**
     * Registers for app lifetime notifications when a game instance starts or stops.
     * @param callback Receives the app lifetime notification payload.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForAppLifetimeNotifications(
        callback: (notification: AppLifetimeNotification) => void,
    ): Unregisterable;

    /**
     * Registers for screenshot write/delete notifications.
     * @param callback Receives the screenshot notification payload.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForScreenshotNotification(
        callback: (notification: ScreenshotNotification) => void,
    ): Unregisterable;
}

/**
 * @prop unAppID is not properly set by Steam for non-steam game shortcuts, so it defaults to 0 for them
 */
interface GameSessionNotificationBase {
  unAppID: number;
}

export interface AchievementNotification extends GameSessionNotificationBase {
    achievement: AppAchievements;
    nCurrentProgress: number;
    nMaxProgress: number;
}

export interface AppLifetimeNotification extends GameSessionNotificationBase {
    nInstanceID: number;
    bRunning: boolean;
}

export interface ScreenshotNotification extends GameSessionNotificationBase {
    details: Screenshot;
    hScreenshot: number;
    strOperation: "deleted" | "written";
}
