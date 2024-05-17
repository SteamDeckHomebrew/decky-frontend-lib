import {ClientUINotification} from "./ClientNotifications";
import {JsPbMessage, Unregisterable} from "./index";

export interface Notifications {
    /**
     * If `data` is deserialized, returns {@link ClientNotificationFriendMessage},
     * or {@link ClientNotificationGroupChatMessage}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForNotifications(
        callback: (notificationIndex: number, type: ClientUINotification, data: ArrayBuffer) => void,
    ): Unregisterable | any;
}

/**
 * CClientNotificationGroupChatMessage
 */
export interface ClientNotificationGroupChatMessage extends JsPbMessage {
    tag(): string;

    /** A Steam64 ID. */
    steamid_sender(): string;

    chat_group_id(): string;

    chat_id(): string;

    title(): string;

    body(): string;

    rawbody(): string;

    icon(): string;

    notificationid(): number;
}

/**
 * CClientNotificationFriendMessage
 */
export interface ClientNotificationFriendMessage extends JsPbMessage {
    body(): string;

    icon(): string;

    notificationid(): number;

    response_steamurl(): string;

    /** A Steam64 ID. */
    steamid(): string;

    tag(): string;

    title(): string;
}