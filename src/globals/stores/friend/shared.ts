import type { BrowserContext, CSteamID } from '../../shared';
import type { CFriendChat } from './friendchat';

export enum EClientPersonaStateFlag {
  k_EClientPersonaStateFlagStatus = 1 << 0,
  k_EClientPersonaStateFlagPlayerName = 1 << 1,
  k_EClientPersonaStateFlagQueryPort = 1 << 2,
  k_EClientPersonaStateFlagSourceID = 1 << 3,
  k_EClientPersonaStateFlagPresence = 1 << 4,
  k_EClientPersonaStateFlagLastSeen = 1 << 5,
  k_EClientPersonaStateFlagUserClanRank = 1 << 6,
  k_EClientPersonaStateGameExtraInfo = 1 << 7,
  k_EClientPersonaStateGameDataBlob = 1 << 8,
  k_EClientPersonaStateFlagClanData = 1 << 9,
  k_EClientPersonaStateFlagFacebook = 1 << 10,
  k_EClientPersonaStateFlagRichPresence = 1 << 11,
  k_EClientPersonaStateFlagBroadcast = 1 << 12,
  k_EClientPersonaStateFlagWatching = 1 << 13,
}

export enum EFriendRelationship {
  None,
  Blocked,
  RequestRecipient,
  Friend,
  RequestInitiator,
  Ignored,
  IgnoredFriend,
  Suggested_DEPRECATED,
  Max,
}

export enum EPersonaState {
  Offline,
  Online,
  Busy,
  Away,
  Snooze,
  LookingToTrade,
  LookingToPlay,
  Invisible,
  Max,
}

// TODO(protobufs): generate
declare class CPlayer_GetProfileItemsEquipped_Response {}

// TODO(protobufs): generate
declare class CMsgClientPersonaState {}

declare class CPersonaStateImpl {
  m_bAvatarPending: boolean;
  m_bCommunityBanned: boolean;
  m_bInitialized: boolean;
  m_bNameInitialized: boolean;
  m_bOnSteamDeck: boolean;
  m_bPlayerNamePending: boolean;
  m_bStatusInitialized: boolean;
  m_broadcastAccountId: number | undefined;
  m_broadcastAppId: number | undefined;
  m_broadcastId: number | undefined;
  m_broadcastViewerCount: number | undefined;
  m_ePersonaState: EPersonaState;
  m_game_lobby_id: string;
  m_gameid: string;
  m_mapRichPresence: Map<string, string>;
  m_rtLastSeenOnline: number;
  m_steamid: CSteamID;

  /**
   * @returns `true` if the user has set an avatar.
   */
  BHasAvatarSet(): boolean;

  /**
   * @returns `true` if app info is ready.
   * @see {@link CAppInfoStore}
   */
  BIsAppInfoReady(): boolean;

  /**
   * @returns the user's SteamID3.
   */
  GetAccountID(): number;

  /**
   * @returns the user's community profile URL.
   */
  GetCommunityProfileURL(): string;

  /**
   * @returns the user's currently playing game's name.
   */
  GetCurrentGameName(): string;

  /**
   * @returns the user's currently playing game's icon URL.
   */
  GetCurrentGameIconURL(): string;

  HasCurrentGameRichPresence(): boolean;

  HasRichPresenceForViewGameInfo(): boolean;

  GetCurrentGameRichPresence(): string;

  /**
   * @returns the user's currently playing game's status, e.g.
   */
  GetCurrentGameStatus(): string;

  /**
   * @returns the seconds at which rate the user's status will be updated.
   */
  GetOfflineStatusUpdateRate(): number;

  /**
   * @returns a localized string for offline time, e.g. "Last online 5 years
   * ago".
   */
  GetOfflineStatusTime(): string;

  /**
   * @returns the localized online status, but still "Online" if in game.
   */
  GetLocalizedOnlineStatus(): string;

  HasStateFlag(flag: EClientPersonaStateFlag): boolean;

  /**
   * @returns `true` if the user is currently using a Steam Deck.
   */
  IsOnSteamDeck(): boolean;

  get avatar_url(): string;
  get avatar_url_full(): string;
  get avatar_url_medium(): string;
  get connect_string(): string | undefined;
  get has_joinable_game_flag(): boolean;
  get has_public_party_beacon(): boolean;
  get has_server_ip(): boolean;
  get is_awayOrSnooze(): boolean;
  get is_golden(): boolean;
  get is_in_joinable_game(): boolean;
  get is_in_nonsteam_game(): boolean;
  get is_in_valid_lobby(): boolean;
  get is_ingame(): true;
  get is_online(): true;
  get is_watchingbroadcast(): boolean;
  // UNIX timestamp
  get last_seen_online(): number;
  get online_state(): 'in-game' | 'offline' | 'online' | 'watchingbroadcast';
  get player_group(): string;
  get player_group_size(): number;
}

interface CommunityData {
  avatar_url: string;
  in_game: {
    name: string;
    is_non_steam: boolean;
    logo: string;
    rich_presence: string;
  };
  level: number;
  level_class: string;
  persona_name: string;
  m_rtLastLoad: number;

  /**
   * Loads community data if not already.
   */
  EnsureCommunityDataLoaded(): void;

  /**
   * Reloads community data.
   */
  Reload(): void;
}

interface MiniProfileData {
  m_accountid: number;
  m_bLoadingData: boolean;
  m_communityData: CommunityData | undefined;
  m_nAppIDLastSeenPlaying: number;
  m_persona: CPersonaStateImpl;
  m_strAccountName: string;
  m_strAvatarHash: string;
  m_strBroadcastTitle: string | undefined;
  m_strGameExtraInfo: string;
  m_strPlayerName: string;
  m_strProfileURL: string | undefined;
  m_unGamePlayedAppID: number;
  m_unGameServerIP: number;
  m_unGameServerPort: number;
  m_unPersonaStateFlags: number;
}

interface PerFriendNotificationSettings {
  Notifications_SendMobile: number;
  Notifications_ShowInGame: number;
  Notifications_ShowMessage: number;
  Notifications_ShowOnline: number;
  Sounds_PlayInGame: number;
  Sounds_PlayMessage: number;
  Sounds_PlayOnline: number;
}

export declare class CPlayer {
  m_NotificationSettings: PerFriendNotificationSettings;
  m_bLoadedEquippedProfileItems: boolean;
  m_bPersonaNameHistoryLoaded: boolean;
  m_bPersonaStateLoadRequested: boolean;
  m_bRequestedEquippedProfileItems: boolean;
  m_dtLastSeenPlaying: Date | undefined;
  m_eFriendRelationship: EFriendRelationship;
  m_equippedProfileItems: CPlayer_GetProfileItemsEquipped_Response;
  m_miniProfileDataLoader: MiniProfileData | undefined;
  m_rgPersonaNameHistory: string[];
  m_strGameNameNormalized: string | undefined;
  m_strNickname: string | undefined;
  m_strPlayerNameNormalized: string | undefined;
  m_strPlayerNicknameNormalized: string | undefined;
  m_tsLastPersonaStateUpdate: number;
  m_unAccountID: number;

  BHaveReceivedPersonaUpdateSince(timestamp: number): boolean;

  BLoadedEquippedItems(): boolean;

  BMatchesSearchString(s: string, param1: boolean): boolean;

  BPlayInGameSound(): boolean;

  BPlayMessageSound(): boolean;

  BPlayOnlineSound(): boolean;

  BShowInGameNotification(): boolean;

  BShowMessageNotification(): boolean;

  BShowOnlineNotification(): boolean;

  BWasRecentlyPlayingAppID(appid: number, seconds: number): boolean;

  ClearStateOnDisconnect(): void;

  /**
   * @returns the broadcast's title or localized string if title is not set or
   * `null` if not broadcasting.
   */
  GetBroadcastDescription(): string | null;

  /**
   * @returns the community profile URL.
   */
  GetCommunityProfileURL(): string;

  GetEquippedProfileItems(): CPlayer_GetProfileItemsEquipped_Response;

  LoadAndSetGoldenProfileFrame(): Promise<void>;

  LoadEquippedProfileItems(e: boolean): Promise<void>;

  LoadIfNecessary(): void;

  /**
   * Matches a provided string against the user's nickname.
   *
   * @param s The string to match.
   */
  MatchSearchString(s: string): {
    bFullMatch: boolean;
    iOffset: number;
    match: number;
  };

  /**
   * Opens the chat dialog.
   */
  OpenChatDialog(browser: BrowserContext): CFriendChat;

  SetLastSeenPlaying(appid: number): void;

  SetPersonaStateUpdated(): void;

  /**
   * @returns `true` if app info is ready.
   * @see {@link CAppInfoStore}
   */
  is_appinfo_ready(): boolean;

  get accountid(): number;
  get current_game_icon_url(): string;
  get current_game_name(): string;
  get current_game_rich_presence(): string;
  get display_name(): string;
  get efriendrelationship(): EFriendRelationship;
  get has_nickname(): boolean;
  get has_secondary_display_name(): boolean;
  get is_blocked(): boolean;
  get is_display_name_nickname(): boolean;
  get is_friend(): boolean;
  get is_ready(): boolean;
  get localized_online_status(): string;
  get miniProfileData(): MiniProfileData;
  get mutable_persona(): CPlayer;
  // undefined until set, just use display_name
  get nickname(): string | undefined;
  set nickname(s: string);
  get notification_settings(): PerFriendNotificationSettings;
  get persona(): CPlayer;
  get persona_name_history(): string[];
  get persona_name_history_loaded(): boolean;
  get primary_display_name(): string;
  get secondary_display_name(): string;
  get showing_secondary_display_name(): boolean;
  get steamid(): CSteamID;
  get steamid64(): string;
}
