import type { CFriendStore } from '.';
import type { CClan, CClanStore } from './clanstore';
import type { CFriendChat } from './friendchat';
import type { CPlayer } from './shared';

type FavoriteEntry_t = { friend: CPlayer } | { chat: any } | { clan: CClan };

export declare class CFriendsListFavoritesStore {
  // TODO: maybe remove cuz it's not useful here
  m_ChatStore: CFriendChat;
  m_ClanStore: CClanStore;
  m_FriendStore: CFriendStore;
  m_rgFavorites: FavoriteEntry_t[];

  /**
   * Adds a provided entry to the favorites list.
   *
   * @param entry The entry to add.
   * @param index Array index to use, e.g. `1` will be second in the list.
   * @returns `true` on success.
   */
  AddToFavorites(entry: FavoriteEntry_t, index?: number): Promise<boolean>;

  /**
   * @returns `true` if the provided entry is favorited.
   */
  BIsFavorited(entry: FavoriteEntry_t): boolean;

  /**
   * Removes the provided entry from favorites.
   *
   * @returns `true` on success.
   */
  RemoveFromFavorites(entry: FavoriteEntry_t): Promise<boolean>;

  // maybe remove cuz done by the aforementioned methods already
  SaveFavorites(): Promise<boolean>;
}
