import { BrowserContext } from "./shared";

export interface ClientNotifications {
    /**
     * Displays a Steam notification.
     * @param notification Notification type.
     * @param options Stringified object of {@link SteamNotificationOptions}.
     * @param callback Invoked by the client when the notification action is activated.
     */
    DisplayClientNotification(
        notification: EClientUINotificationType,
        options: string,
        callback: (context: BrowserContext) => void,
    ): void;

    /**
     * @param notificationId The ID of the notification to handle.
     * @param handleAction `true` to execute the callback function associated with the notification.
     */
    OnRespondToClientNotification(notificationId: number, handleAction: boolean): void;
}

export interface SteamNotificationOptions {
    /** Notification body text. */
    body: string;
    chatroomgroupid?: number;
    chatroomid?: number;
    /** Icon URL or resource path. */
    icon?: string;
    /** Client-defined notification state payload. */
    state: string;
    /** A Steam64 ID. */
    steamid: string;
    /** Stable notification tag used for replacement/grouping. */
    tag?: string;
    title?: string;
}

export enum EClientUINotificationType {
    GroupChatMessage = 1,
    FriendChatMessage,
    FriendPersonaState,
}
