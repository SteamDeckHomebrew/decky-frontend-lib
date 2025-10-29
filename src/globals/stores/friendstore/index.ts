import type { CSteamID } from '../../shared';
import type { EResult } from '../../steam-client/shared';
import type { CFriendsUIFriendStore } from './friendsuifriendstore';
import type { CPlayer } from './shared';

export declare class CFriendStore {
  m_FriendsUIFriendStore: CFriendsUIFriendStore;
  m_mapOwnedGamesCacheErrors: Map<number, EResult>;
  m_mapPlayerCache: Map<number, CPlayer>;

  BShouldCachePlayer(persona: CPlayer): boolean;

  /**
   * @returns a set of owned games' IDs.
   */
  FetchOwnedGames(steamid3: number): Promise<{ setApps: Set<number> }>;

  /**
   * @returns the number of friends currently playing the provided game.
   */
  GetCountFriendsInGame(appid: number): number;

  /**
   * @returns the number of currently playing friends.
   */
  GetCountFriendsPlayingGames(): number;

  GetFriendState(friend: number | CSteamID): CPlayer;

  /**
   * @returns an array of friends currently playing the provided game.
   */
  GetFriendsInGame(appid: number): CPlayer[];

  GetMaxCountFriendsInGame(): number;

  /**
   * @returns a set of owned games' IDs of a provided friend.
   */
  GetOwnedGames(steamid3: number): Set<number>;

  IsLibraryAccessDenied(steamid3: number): boolean;

  /**
   * Loads the persona for a provided friend.
   *
   * @param friend SteamID3 or CSteamID instance of a friend to load the persona
   * for.
   * @returns the loaded persona.
   */
  LoadPersonaState(friend: number | CSteamID): Promise<CPlayer>;

  RefreshOwnedGames(steamid3: number): void;

  get allFriends(): CPlayer[];
  get currentUserSteamID(): CSteamID;
  get favoriteFriends(): CPlayer[];
}
