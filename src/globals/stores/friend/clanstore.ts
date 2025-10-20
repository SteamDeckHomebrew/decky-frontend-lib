import type { CFriendStore } from '.';
import type { BrowserContext, CSteamID } from '../../shared';

export enum EClanAccountFlags {
  None,
  TrustedPress = 1 << 0,
  AllowClanImages = 1 << 1,
  AllowRSSFeed = 1 << 2,
  AllowPartnerEventEditor = 1 << 3,
}

export enum EClanRelationship {
  None,
  Blocked,
  Invited,
  Member,
  Kicked,
  KickAcknowledged,
  PendingApproval,
  RequestDenied,
}

export interface CClan {
  m_bChatRoomPrivate: boolean | undefined;
  m_bGotInitialState: boolean;
  m_bInitialized: boolean;
  m_bPersonaStateDesired: boolean;
  m_bPersonaStateLoadRequested: boolean;
  m_cChatRoomMembers: number;
  m_cMemberCount: number;
  m_cUsersInGame: number;
  m_cUsersOnline: number;
  /** @see {@link EClanAccountFlags} */
  m_eClanAccountFlags: number;
  m_eClanRelationship: EClanRelationship;
  m_steamid: CSteamID;
  m_strAvatarHash: string;
  m_strClanName: string;
  m_strClanTag: string;
  m_ulChatRoomGroupID: string | undefined;
  m_unOGGAppID: number | undefined;

  BIsInvite(): boolean;
  BIsMember(): boolean;
  BIsOGG(): boolean;
  BMatchesSearchString(s: string): boolean;
  BNeedsToLoadPersonaStateData(): boolean;
  BPersonaStateDesired(): boolean;
  GetChatGroupIDIfLoaded(): CClan['m_ulChatRoomGroupID'];
  GetChatRoomGroupID(): Promise<CClan['m_ulChatRoomGroupID'] | null>;
  GetOGGAppID(): CClan['m_unOGGAppID'];
  OpenChatDialog(browser?: BrowserContext, param1?: boolean): Promise<string | null>;

  get avatar_url(): string;
  get avatar_url_medium(): string;
  get avatar_url_full(): string;
  get chat_room_private(): boolean;
  get clanid(): number;
  get count_chat_room_members(): number;
  get member_count(): number;
  get name(): string;
  get steamid(): CSteamID;
  get users_ingame(): number;
  get users_online(): number;
}

export declare class CClanStore {
  m_FriendStore: CFriendStore;
  m_iIntervalLoadClanData: number | undefined;
  m_mapClans: Map<number, CClan>;

  EnsureInitialStateForClanInvites(): void;
  GetClan(id: number): CClan;
  GetOrCreateClan(steamid: number | CSteamID, eClanRelationship: EClanRelationship): CClan;
  JoinClanChatRoom(browser: BrowserContext, relationship: EClanRelationship): Promise<void>;
  LoadClanPersonaIfNeeded(persona: CClan): void;
  LoadMissingClanPersonas(): void;

  /**
   * @returns a boolean indicating whether the operation was successful.
   */
  RespondToClanInvite(steamid: CSteamID, accept: boolean): Promise<boolean>;

  ScheduleLoadMissingClanPersonas(): void;
  SetClanChatGroupID(clanID: number, groupID: string): string;

  get clan_invite_count(): number;
  get clan_invites(): CClan[];
}
