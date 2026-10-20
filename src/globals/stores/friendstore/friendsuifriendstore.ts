import type { CCallbackList, CSteamID, Unsubscribable } from '../../shared';
import type { EResult } from '../../steam-client/shared';
import type { CClanStore } from './clanstore';
import type { CFriendGroupStore } from './friendgroupstore';
import type { CFriendInGameNotificationStore } from './friendingamenotificationstore';
import type { CFriendsListFavoritesStore } from './friendslistfavoritesstore';
import type { CPlayer, EFriendRelationship, EPersonaState, PerFriendNotificationSettings } from './shared';

interface FriendStorePrefs {
  ePersonaState: EPersonaState;
  strNonFriendsAllowedToMsg: string;
}

interface SendFriendInviteResult {
  eResult: EResult;
  eFriendRelationship: EFriendRelationship;
}

interface TokenBucketChangeStatus {
  m_numStartingTokens: number;
  m_numTokensPerMillisecond: number;
  m_numIntervalsPerMillisecond: number;
  m_TimeLastChecked: number;
  m_flTokens: number;
  AddTokens(): void;
  BRemoveToken(): void;
  Reset(): void;
}

// TODO(protobufs): generate
declare class CMsgClientFriendsList {}

// TODO(protobufs): generate
declare class PerFriendPreferences {}

export interface CFriendsUIFriendStore {
  m_ClanStore: CClanStore;
  m_FavoritesStore: CFriendsListFavoritesStore;
  m_FriendGroupStore: CFriendGroupStore;
  m_FriendInGameNotificationStore: CFriendInGameNotificationStore;
  m_FriendStorePrefs: FriendStorePrefs;
  m_InitialAppInfoPromises: Promise<void>[];
  m_TokenBucketChangeStatus: TokenBucketChangeStatus;
  m_TokenFailureAssertCount: number;
  m_bAwayCallbackFired: boolean;
  m_bInitialAppInfoLoaded: boolean;
  m_bInitialPersonaStatesLoaded: boolean;
  m_bIsClientIdle: boolean;
  m_bMadeGetFriendsListRequest: boolean;
  m_bNextActivityCallbackRegistered: boolean;
  m_bParentalLocked: boolean;
  m_bPerFriendPreferencesLoaded: boolean;
  m_bReadyToRender: boolean;
  m_bReceivedFriendsList: boolean;
  m_bReconnectedSinceLastIdleUpdate: boolean;
  m_bSnoozeCallbackFired: boolean;
  m_bUserSetPersonaState: boolean;
  m_cFriendPersonaStatesInitialized: number;
  m_cLastUnreadPriorityMessageCountPosted: number;
  m_eUserPersonaState: EPersonaState;
  m_eUserPersonaStateParental: EPersonaState;
  m_iIntervalDelayLoadFriendsList: number;
  m_iIntervalSubscribeToPersonaStateUpdates: number;
  m_mapApprovedNonFriendMessages: Map<number, number>;
  m_mapPlayerCache: Map<number, CPlayer>;
  m_nMissingPersonaStateMaxRetries: number;
  m_nMissingPersonaStateRetryCount: number;
  m_rgPersonaStateChangeCallbacks: CCallbackList<[CPlayer]>;
  m_rgPlayerGameChangedCallbacks: CCallbackList<[number, number, number]>;
  m_self: CPlayer;
  m_setFriendAccountIDs: Set<number>;
  m_setFriendsNeedingPersonaStateLoad: Set<number>;
  m_setIncomingInviteAccountIDs: Set<number>;
  m_tsLastConnect: number;
  m_vecLastTenChangeStatusReasons: string[];

  // does not actually add a friend, im pretty sure
  AddFriend(steamid64: string, relationship: EFriendRelationship, dontInitPlayer: boolean): void;

  /**
   * Adds a callback to dispatch on persona state change.
   */
  AddPersonaStateChangedCallback(callback: (player: CPlayer) => void): Unsubscribable;

  /**
   * Adds a callback to dispatch on player's game change.
   */
  AddPlayerGameChangedCallback(callback: (steamid3: number, param1: number, appid: number) => void): Unsubscribable;

  /**
   * Adds a provided player to cache.
   *
   * @param steamid3 The SteamID3 of the player to add to the cache.
   * @returns the persona state of the player's SteamID3.
   */
  AddPlayerToCache(steamid3: number, unused0?: number, unused1?: boolean): CPlayer;

  AdjustPersonaStateForIdleTime(state: EPersonaState): number;

  BApprovedNonFriendMessages(steamid3: number): boolean;

  /**
   * @returns `true` if user is currently in invisible mode.
   */
  BIsInvisibleMode(): boolean;

  /**
   * @returns `true` if user is currently in offline mode (community, not
   * client).
   */
  BIsOfflineMode(): boolean;

  /**
   * Blocks a provided user.
   *
   * @param player The user to (un)block.
   * @param unblock `true` to unblock, `false` otherwise.
   */
  BlockPlayer(player: CPlayer, unblock?: boolean): Promise<EFriendRelationship>;

  EnsureApprovedNonFriendMapReady(): void;

  EnsureFriendsListLoaded(param0: boolean): void;

  ForceReadyToRender(): void;

  /**
   * @returns the incoming group invite count.
   */
  GetClanInviteCount(): number;

  /**
   * @returns a cached player from a provided SteamID3, or `null` if not a
   * friend.
   */
  GetFriend(steamid3: number): CPlayer | null;

  /**
   * Like {@link GetFriend}, but will return `undefined` if not cached yet.
   */
  GetFriendIfCached(steamid3: number): CPlayer | undefined;

  /**
   * @returns the incoming friend request count.
   */
  GetFriendInviteCount(): number;

  GetFriendsList(): Promise<void>;

  /**
   * @returns the online friends count.
   */
  GetOnlineFriendCount(): number;

  /**
   * @returns the outgoing friend request count.
   */
  GetOutgoingFriendRequestCount(): number;

  /**
   * @returns the incoming friend request count + incoming group invite count.
   */
  GetPendingInviteCount(): number;

  GetPersonaStatePreference(): EPersonaState;

  /**
   * Gets a player from a provided SteamID3 and caches it.
   */
  GetPlayer(steamid3: number): CPlayer;

  /**
   * Like {@link GetPlayer}, but returns `undefined` if not cached yet.
   */
  GetPlayerIfCached(steamid3: number): CPlayer | undefined;

  /**
   * @returns `true` if user has DND enabled.
   */
  GetUserDoNotDisturb(): boolean;

  // TODO: later
  InviteToGame(player: CPlayer, appid: number, connectString: string): void;

  // TODO: steamIdLobby is steam_id_lobby from CMsgClientMMSInviteToLobby but no
  // idea what that is yet
  InviteToLobby(player: CPlayer, appid: number, steamIdLobby: string): void;

  InviteToWatch(player: CPlayer): void;

  PlayFriendOnlineSound(): void;

  PlayJoinGameSound(): void;

  /**
   * Removes a provided user from friends.
   */
  RemoveFriend(player: CPlayer): Promise<EFriendRelationship>;

  /**
   * Like {@link RemoveFriend}, but using a SteamID.
   *
   * @param steamid Instance of CSteamID or a SteamID64.
   */
  RemoveFriendBySteamID(steamid: string | CSteamID): Promise<EFriendRelationship>;

  /**
   * Sends a friend invite to a provided user.
   */
  SendFriendInvite(player: CPlayer): Promise<SendFriendInviteResult>;

  /**
   * Like {@link SendFriendInvite}, but using a SteamID.
   *
   * @param steamid Instance of CSteamID or a SteamID64.
   */
  SendFriendInviteBySteamID(steamid: string | CSteamID): Promise<SendFriendInviteResult>;

  SendPersonaStateToServer(needPersonaResponse: boolean, changeStatusReason: string): boolean;

  SetApprovedNonFriendMessages(param0: number): void;

  SetFriendsList(msg: CMsgClientFriendsList): Promise<void>;

  // sets everyone to be offline lol why
  SetPersonasOffline(value: boolean): void;

  SetPlayerNickname(prefs: PerFriendPreferences, nicknane: string): Promise<EResult>;

  SetPlayerNotificationSettings(
    prefs: PerFriendPreferences,
    notificationSettings: PerFriendNotificationSettings,
  ): Promise<EResult>;

  SetPlayerPerFriendPreferences(
    prefs: PerFriendPreferences,
    nickname: string,
    notificationSettings: PerFriendNotificationSettings,
  ): Promise<EResult>;

  SetReconnectedSinceLastIdleUpdate(): void;

  /**
   * Sets the user's DND state.
   */
  SetUserDoNotDisturb(value: boolean): void;

  /**
   * Sets the user's status.
   * @param state The state to set.
   * @param isUserSet
   */
  SetUserPersonaState(state: EPersonaState, isUserSet: boolean): void;

  UpdateUnreadMessagesGlobal(): void;

  UpdateUserPersonaStateInternal(
    state: EPersonaState,
    isUserSet: boolean,
    isClientIdle: boolean,
    param3: boolean,
    changeStatusReason: string,
  ): void;

  get all_friends(): CPlayer[];
  get all_friends_accountids(): Set<number>;
  get friends_list_ready(): boolean;
  get not_ready_to_render_reason(): string;
  get online_friends(): CPlayer[];
  get self(): CPlayer;
  get ClanStore(): CClanStore;
  get FavoritesStore(): CFriendsListFavoritesStore;
  get FriendGroupStore(): CFriendGroupStore;
}
