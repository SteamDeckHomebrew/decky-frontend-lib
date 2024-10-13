import {Unregisterable} from "./index";

/**
 * Represents friend settings and configuration.
 */
export interface FriendSettings {
    /**
     * Retrieves a list of enabled friend settings features.
     * @returns A Promise that resolves to an array of enabled friend settings features.
     */
    GetEnabledFeatures(): Promise<FriendSettingsFeature[]>;

    /**
     * Registers a callback function to be notified of friend settings changes.
     * @param callback The callback function to be called when friend settings change.
     * @returns An object that can be used to unregister the callback.
     * @remarks The callback receives an escaped JSON object string as "settingsChanges", which should be parsed into {@link FriendSettingsChange} object.
     */
    RegisterForSettingsChanges(callback: (settingsChanges: string) => void): Unregisterable;

    SetFriendSettings(details: string): any; // stringified object
}

export interface FriendSettingsFeature {
    feature: string;
    bEnabled: boolean;
}

export interface FriendSettingsEnabledFeature {
    DoNotDisturb: number;
    LoaderWindowSynchronization: number;
    NonFriendMessageHandling: number;
    NewVoiceHotKeyState: number;
    PersonaNotifications: number;
    ServerVirtualizedMemberLists: number;
    SteamworksChatAPI: number;
    FriendsFilter: number;
}

export interface FriendSettingsChange {
    bNotifications_ShowIngame: number;
    bNotifications_ShowOnline: number;
    bNotifications_ShowMessage: number;
    bNotifications_EventsAndAnnouncements: number;
    bSounds_PlayIngame: number;
    bSounds_PlayOnline: number;
    bSounds_PlayMessage: number;
    bSounds_EventsAndAnnouncements: number;
    bAlwaysNewChatWindow: number;
    bForceAlphabeticFriendSorting: number;
    nChatFlashMode: number;
    bRememberOpenChats: number;
    bCompactQuickAccess: number;
    bCompactFriendsList: number;
    bNotifications_ShowChatRoomNotification: number;
    bSounds_PlayChatRoomNotification: number;
    bHideOfflineFriendsInTagGroups: number;
    bHideCategorizedFriends: number;
    bCategorizeInGameFriendsByGame: number;
    nChatFontSize: number;
    b24HourClock: number;
    bDoNotDisturbMode: number;
    bDisableEmbedInlining: number;
    bSignIntoFriends: number;
    bDisableSpellcheck: number;
    bDisableRoomEffects: number;
    bAnimatedAvatars: number;
    featuresEnabled: FriendSettingsEnabledFeature;
}
