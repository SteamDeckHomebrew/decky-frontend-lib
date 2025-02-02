/**
 * Represents friend settings and configuration.
 */
export interface FriendSettings {
    /**
     * Retrieves a list of enabled friend settings features.
     * @returns A Promise that resolves to an array of enabled friend settings features.
     */
    GetEnabledFeatures(): Promise<FriendSettingsFeatureObject[]>;

    /**
     * Registers a callback function to be notified of friend settings changes.
     * @param callback The callback function to be called when friend settings change.
     * @remarks The callback receives a JSON object string which may be parsed into {@link FriendSettingsChange}.
     */
    RegisterForSettingsChanges(callback: (settings: string) => void): void;

    /**
     * @param details String received from {@link FriendSettings.RegisterForSettingsChanges}.
     */
    SetFriendSettings(details: string): void;
}

/** 0 - false, 1 - true */
type VDFBoolean = 0 | 1;

export enum EChatFlashMode {
    Always,
    Minimized,
    Never,
}

export interface FriendSettingsFeatureObject {
    feature: FriendSettingsFeature;
    bEnabled: boolean;
}

export type FriendSettingsFeature =
    | "DoNotDisturb"
    | "FriendsFilter"
    | "LoaderWindowSynchronization"
    | "NewVoiceHotKeyState"
    | "NonFriendMessageHandling"
    | "PersonaNotifications"
    | "ServerVirtualizedMemberLists"
    | "SteamworksChatAPI";

export type FriendSettingsEnabledFeatures<T> = {
    [feature in FriendSettingsFeature]: T;
};

export interface FriendSettingsChange {
    bNotifications_ShowIngame: VDFBoolean;
    bNotifications_ShowOnline: VDFBoolean;
    bNotifications_ShowMessage: VDFBoolean;
    bNotifications_EventsAndAnnouncements: VDFBoolean;
    bSounds_PlayIngame: VDFBoolean;
    bSounds_PlayOnline: VDFBoolean;
    bSounds_PlayMessage: VDFBoolean;
    bSounds_EventsAndAnnouncements: VDFBoolean;
    bAlwaysNewChatWindow: VDFBoolean;
    bForceAlphabeticFriendSorting: VDFBoolean;
    nChatFlashMode: EChatFlashMode;
    bRememberOpenChats: VDFBoolean;
    bCompactQuickAccess: VDFBoolean;
    bCompactFriendsList: VDFBoolean;
    bNotifications_ShowChatRoomNotification: VDFBoolean;
    bSounds_PlayChatRoomNotification: VDFBoolean;
    bHideOfflineFriendsInTagGroups: VDFBoolean;
    bHideCategorizedFriends: VDFBoolean;
    bCategorizeInGameFriendsByGame: VDFBoolean;
    nChatFontSize: number;
    b24HourClock: VDFBoolean;
    bDoNotDisturbMode: VDFBoolean;
    bDisableEmbedInlining: VDFBoolean;
    bSignIntoFriends: VDFBoolean;
    bDisableSpellcheck: VDFBoolean;
    bDisableRoomEffects: VDFBoolean;
    bAnimatedAvatars: VDFBoolean;
    featuresEnabled: FriendSettingsEnabledFeatures<VDFBoolean>;
}
