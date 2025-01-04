import { Unregisterable } from "./index";

/**
 * Represents functions related to managing friends in Steam.
 */
export interface Friends {
    /**
     * Adds a user to the friend list.
     * @param steamId The Steam ID of the user to add as a friend.
     * @returns A Promise that resolves to true if the friend was added successfully, false otherwise.
     */
    AddFriend(steamId: string): Promise<boolean>;

    /**
     * @returns a list of players you recently played with.
     */
    GetCoplayData(): Promise<CoplayData>;

    //(e.ConvertTo64BitString(), t.steamidTarget)
    InviteUserToCurrentGame(steam64Id: string, param1: any): any;

    /**
     * Invites a user to a specific game.
     * @param steamId The Steam ID of the user to invite.
     * @param appId The ID of the game to invite the user to.
     * @param connectString Additional parameters for the invitation.
     * @returns A Promise that resolves to true if the user was invited successfully, false otherwise.
     */
    InviteUserToGame(steamId: string, appId: number, connectString: string): Promise<boolean>;

    //(e.ConvertTo64BitString(), t.steamidTarget)
    InviteUserToLobby(steam64Id: string, param1: any): any;

    //(e.ConvertTo64BitString())
    InviteUserToRemotePlayTogetherCurrentGame(steam64Id: string): any;

    RegisterForMultiplayerSessionShareURLChanged(param0: any, param1: any): Unregisterable;

    RegisterForVoiceChatStatus(callback: (status: VoiceChatStatus) => void): Unregisterable;

    /**
     * Removes a user from the friend list.
     * @param steamId The Steam ID of the user to remove from the friend list.
     * @returns A Promise that resolves to true if the friend was removed successfully, false otherwise.
     */
    RemoveFriend(steamId: string): Promise<boolean>;

    ShowRemotePlayTogetherUI(): void;
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

export interface VoiceChatStatus {
    bVoiceChatActive: boolean;
    bMicMuted: boolean;
    bOutputMuted: boolean;
}
