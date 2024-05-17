/**
 * Represents functions related to managing friends in Steam.
 */
export interface Friends {
    /**
     * Adds a user to the friend list.
     * @param {string} steamId - The Steam ID of the user to add as a friend.
     * @returns {Promise<boolean>} A Promise that resolves to true if the friend was added successfully, false otherwise.
     */
    AddFriend(steamId: string): Promise<boolean>;

    GetCoplayData(): Promise<CoplayData>;

    //(e.ConvertTo64BitString(), t.steamidTarget)
    InviteUserToCurrentGame(param0: any, param1: any): any;

    /**
     * Invites a user to a specific game.
     * @param {string} steamId - The Steam ID of the user to invite.
     * @param {number} appId - The ID of the game to invite the user to.
     * @param {string} connectString - Additional parameters for the invitation.
     * @returns {Promise<boolean>} A Promise that resolves to true if the user was invited successfully, false otherwise.
     */
    InviteUserToGame(steamId: string, appId: number, connectString: string): Promise<boolean>;

    //(e.ConvertTo64BitString(), t.steamidTarget)
    InviteUserToLobby(param0: any, param1: any): any;

    //(e.ConvertTo64BitString())
    InviteUserToRemotePlayTogetherCurrentGame(param0: any): any;

    RegisterForVoiceChatStatus(callback: (status: any) => void): any;

    /**
     * Removes a user from the friend list.
     * @param {string} steamId - The Steam ID of the user to remove from the friend list.
     * @returns {Promise<boolean>} A Promise that resolves to true if the friend was removed successfully, false otherwise.
     */
    RemoveFriend(steamId: string): Promise<boolean>;
}

export interface CoplayData {
    currentUsers: CoplayUser[];
    recentUsers: CoplayUser[];
}

export interface CoplayUser {
    accountid: number;
    rtTimePlayed: number;
    appid: number;
}