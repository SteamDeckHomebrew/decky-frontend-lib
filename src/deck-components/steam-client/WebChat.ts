import {OverlayBrowserInfo} from "./Overlay";
import {UIMode} from "./UI";
import {Unregisterable} from "./index";

export interface WebChat {
    BSuppressPopupsInRestore(): Promise<boolean>;

    /**
     * Gets your Steam3 ID.
     * @returns {Promise<number>} A Promise that resolves to a Steam3 ID.
     */
    GetCurrentUserAccountID(): Promise<number>;

    /**
     * Gets the current user's 64x64 avatar as a data URL.
     * @returns {Promise<string>} A Promise that resolves to the data URL.
     */
    GetLocalAvatarBase64(): Promise<string>;

    /**
     * Gets the current user's nickname.
     * @returns {Promise<string>} A Promise that resolves to the nickname.
     */
    GetLocalPersonaName(): Promise<string>;

    GetOverlayChatBrowserInfo(): Promise<OverlayBrowserInfo[]>;

    // param0 - appid ?
    GetPrivateConnectString(param0: number): Promise<string>;

    /**
     * Gets information about push-to-Talk.
     * @returns {Promise<PushToTalkInfo>}
     */
    GetPushToTalkEnabled(): Promise<PushToTalkInfo>;

    /**
     * Gets the "Sign in to friends when Steam starts" option value.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating whether the option is enabled or not.
     */
    GetSignIntoFriendsOnStart(): Promise<boolean>;

    /**
     * Retrieves the current UI mode.
     * @returns {Promise<UIMode>} - A Promise that resolves to the current UI mode.
     */
    GetUIMode(): Promise<UIMode>;

    OnGroupChatUserStateChange(chatGroupId: any, accountId: any, action: any): any;

    OnNewGroupChatMsgAdded(
        groupId: number,
        chatId: number,
        accountId: number,
        timestamp: number,
        param4: number,
        message: string,
    ): any;

    // Opens the URL in default web browser, despite what the name says ?
    OpenURLInClient(url: string, pid: number, forceExternal: boolean): void;

    /**
     * Registers a callback function to be called when the computer's active state changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @todo Changes to 2 after 10 seconds?
     * @todo Does not affect the keyboard?
     */
    RegisterForComputerActiveStateChange(
        callback: (state: ComputerActiveState, time: number) => void,
    ): Unregisterable | any;

    /**
     * @todo WebChat.ShowFriendChatDialog does this.
     */
    RegisterForFriendPostMessage(callback: (data: FriendChatDialogData) => void): Unregisterable | any;

    /**
     * @returns {void}
     * @todo To unregister, use WebChat.UnregisterForMouseXButtonDown() ?
     */
    RegisterForMouseXButtonDown(callback: any): void;

    /**
     * Registers a callback function to be called when the push-to-talk state changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForPushToTalkStateChange(callback: (state: boolean) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the UI mode is changed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForUIModeChange(callback: (mode: UIMode) => void): Unregisterable | any;

    RegisterOverlayChatBrowserInfoChanged(callback: any): Unregisterable | any;

    SetActiveClanChatIDs(clanChatIds: any[]): any;

    SetNumChatsWithUnreadPriorityMessages(size: number): void;

    SetPersonaName: any;

    SetPushToMuteEnabled(value: boolean): any;

    SetPushToTalkEnabled(value: boolean): any;

    SetPushToTalkHotKey(param0: number): void;

    SetPushToTalkMouseButton(param0: number): void;

    SetVoiceChatActive: any;
    SetVoiceChatStatus: any;
    ShowChatRoomGroupDialog: any;

    /**
     * @todo Does not actually show the dialog.
     */
    ShowFriendChatDialog(steamid: string): void;

    UnregisterForMouseXButtonDown(): void;
}

export enum ComputerActiveState {
    Invalid = 0,
    Active = 1,
    Idle = 2,
}

export interface FriendChatDialog {
    browserid: number;
    btakefocus: string;
    command: string;
    pid: number;
    steamid: string;
}

export interface FriendChatDialogData {
    data: FriendChatDialog;
}

export interface PushToTalkInfo {
    /** Indicates whether push-to-talk is enabled. */
    bEnabled: boolean;
    /** Indicates whether push-to-mute is in use instead. */
    bPushToMute: boolean;
    /**
     * Push-to-talk hotkey.
     * @todo enum?
     */
    vkHotKey: number;
    /** Push-to-talk hotkey name. */
    strKeyName: string;
}