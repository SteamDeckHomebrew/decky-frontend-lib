export interface ClientNotifications {
    /**
     * Displays a Steam notification.
     * @param {ClientUINotification} notification - Notification type.
     * @param {string} options - Stringified object of `NotificationOptions`.
     * @param {function} callback
     */
    DisplayClientNotification(notification: ClientUINotification, options: string, callback: any): void;

    /**
     * @param notificationId The ID of the notification to handle.
     * @param handleAction `true` to habdle the associated notification action, `false` otherwise.
     */
    OnRespondToClientNotification(notificationId: number, handleAction: boolean): void;
}

export enum ClientUINotification {
    GroupChatMessage = 1,
    FriendChatMessage = 2,
    FriendPersonaState = 3,
}