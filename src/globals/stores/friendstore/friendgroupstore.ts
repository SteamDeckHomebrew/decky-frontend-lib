import type { CFriendStore } from '.';
import type { CPlayer } from './shared';

export enum FriendGroupDisplayType {
  eOnlineOnly,
  eOnlineOnlyNotInGame,
  eOfflineOnly,
  eIncomingInvites,
  eAll,
}

type FriendGroup_t = 'offline' | 'outgoing';

interface CFriendGroupDisplayPrefs {
  m_mapCollapsePrefs: Map<FriendGroup_t, boolean>;

  /**
   * @returns `true` if a provided group is collapsed.
   */
  GetUserGroupCollapsed(group: FriendGroup_t): boolean;

  /**
   * Sets a provided group's state to a provided value.
   */
  SetUserGroupCollapsed(group: FriendGroup_t, value: boolean): void;

  /**
   * Toggles a provided group's collapsed state.
   */
  ToggleUserGroupCollapsed(group: FriendGroup_t): void;

  // maybe remove cuz this is done by the forementioned methods already
  WritePrefs(): void;
}

// this extends CPlayerGroup but idc for now
interface CFriendGroup {
  // WHAT IS THIS
  m_OnHeaderClick: any;
  m_bAcceptsGroupRemovals: boolean;
  m_bCollapsed: boolean;
  m_bModifiable: boolean;
  m_eDisplayType: FriendGroupDisplayType;
  m_iGroupID: number;
  m_rgAccountIDMembers: number[];
  m_setMembers: Set<number>;
  m_strName: string;

  /**
   * Adds a provided user to this group.
   */
  AddMember(steamid3: number): void;

  /**
   * Removes all users from this group.
   */
  Clear(): void;

  /**
   * @returns a set of this group's members' SteamID3s.
   */
  GetCurrentMemberSet(): Set<number>;

  /**
   * Filters users of this group by their nicknames from a provided string.
   *
   * @param s The string to filter by.
   */
  GetMembersMatchingSearch(s: string): CPlayer[];

  /**
   * @returns `true` if a provided user is in this group.
   */
  HasMember(steamid3: number): boolean;

  /**
   * Removes a provided user from this group.
   */
  RemoveMember(steamid3: number): void;

  get GetRawMemberList(): CPlayer[];
  get accepts_group_removals(): boolean;
  get collapsed(): boolean;
  get display_type(): FriendGroupDisplayType;
  get icon_url(): string;
  get id(): number;
  get member_accountid_list(): number[];
  get member_count(): number;
  get member_counts(): { ingame: number; online: number };
  get member_list(): CPlayer[];
  get member_list_unsorted(): CPlayer[];
  get modifiable(): boolean;
  get name(): string;
  get onheaderclick(): any;
  get should_filter_categorized_friends(): boolean;
  get unfiltered_count(): number;
  get unique_id(): string;
}

interface CAllIncomingInvitesFriendsGroup extends CFriendGroup {
  m_mapSteamIDToMutualFriends: Map<any, any>;
  m_unMutualFriendsCacheHash: number;

  GetMutualFriendsCacheHash(): number;
  SetMutualFriends(e: Map<any, any>): void;
  SetMutualFriendsCacheHash(e: number): void;
}

interface CFriendGameGroup extends CFriendGroup {
  PlayerGroupSortComparator(e: CPlayer, t: CPlayer, r: Map<string, number>, n: any): any;
}

/**
 * Represents functionality related to friend groups (not group chats).
 */
export declare class CFriendGroupStore {
  m_FriendGroupDisplayPrefs: CFriendGroupDisplayPrefs;
  m_FriendStore: CFriendStore;
  m_groupAllFriends: CFriendGroup;
  m_groupIncomingInvites: CAllIncomingInvitesFriendsGroup;
  m_groupIngameFriends: CFriendGroup;
  m_groupOfflineFriends: CFriendGroup;
  m_groupOutgoingInvites: CFriendGroup;
  m_mapGameGroups: Map<number, CFriendGameGroup>;
  m_mapGroups: Map<number, CFriendGroup>;
  m_nonSteamGameGroup: CFriendGameGroup;
  m_singletonGameGroup: CFriendGameGroup;

  /**
   * Creates a friend group.
   *
   * @param name Name of the group to create.
   * @param friends Array of SteamID64s to put into the group.
   * @returns `true` on success.
   */
  CreateGroup(name: string, friends: string[]): Promise<boolean>;

  EnsureMutualFriendsForIncomingInvites(): void;

  /**
   * @returns a number of friends currently playing the provided game.
   */
  GetCountFriendsInGame(appid: number): number;

  /**
   * @returns the friends group responsible for the provided app.
   */
  GetGameGroup(appid: number): CFriendGameGroup;

  GetMaxCountFriendsInGame(): number;

  /**
   * Edits a group.
   *
   * @param group The group to edit.
   * @param name The name to change the group to.
   * @param addedFriends
   * @param removedFriends
   * @returns `true` on success.
   *
   * @todo no idea if this actually works, always fails for me :((( fuck you )))
   */
  ManageGroup(group: CFriendGroup, name: string, addedFriends?: string[], removedFriends?: string[]): Promise<boolean>;

  /**
   * Removes a group.
   *
   * @param group The group to delete.
   */
  RemoveGroup(group: CFriendGroup): void;

  // TODO: this also fails but its name is self-explanatory
  TransferFriendFromToGroup(player: CPlayer, groupA: CFriendGroup, groupB: CFriendGroup): Promise<boolean[]>;

  get all_friends(): CFriendGroup;
  get ingame_group(): CFriendGroup;
  get incoming_invites_group(): CAllIncomingInvitesFriendsGroup;
  get outgoing_invites_group(): CFriendGroup;
  get friend_groups(): [...this['game_groups'], ...this['user_groups'], ...this['default_groups']];
  get groupDisplayPrefs(): CFriendGroupDisplayPrefs;
  get user_groups(): CFriendGroup[];
  get game_groups(): CFriendGameGroup[];
  get singleton_game_group(): this['m_singletonGameGroup'];
  get categorized_friend_set(): Set<number>;
  get default_groups(): CFriendGroup[];
  get games_with_friends_playing(): number[];
}
