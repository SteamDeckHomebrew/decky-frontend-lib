import { OperationResponse, Unregisterable } from "./shared";

/**
 * Represents functionality for the server browser.
 */
export interface ServerBrowser {
    /**
     * Adds a favorite server.
     * @param server The server to add.
     * @returns an empty string if successful, `Invalid/missing IPv4?` if failed.
     */
    AddFavoriteServer(server: GameServer): Promise<string>;

    /**
     * Adds a favorite server by IP.
     * @param ip The IP to add to favorite servers.
     * @returns an empty string if successful, localization string if failed.
     */
    AddFavoriteServersByIP(ip: string): Promise<string>;

    CancelServerQuery(dialogId: number, queryRequestId: number): void;

    /**
     * Connects to a server from a given dialog.
     * @param dialogId The dialog ID to use.
     * @param password Server password, empty if none.
     * @returns a connection status.
     */
    ConnectToServer(dialogId: number, password: string): Promise<EJoinServerError>;

    /**
     * Creates a server info dialog for the server your friend is currently playing on.
     * @param pid Browser process ID that owns the dialog.
     * @param steamId A Steam64 ID of a friend.
     */
    CreateFriendGameInfoDialog(pid: number, steamId: string): void;

    /**
     * Creates a server info dialog.
     * @param pid Browser process ID that owns the dialog.
     * @param ip The server IP.
     * @param port The server port.
     * @param queryPort
     * @param appId The app ID, or 0 when unknown.
     * @returns the created dialog ID.
     */
    CreateServerGameInfoDialog(
        pid: number,
        ip: string,
        port: number,
        queryPort: number,
        appId?: number,
    ): Promise<number>;

    /**
     * Retrieves the server list.
     * @param appId The game ID, 0 for every game.
     * @param queryType The tab to use.
     * @param filters Server filters.
     * @param serverCallback What to do with the found server?
     * @param requestCompletedCallback The callback function to be called when the request is completed.
     * @returns the current server list request ID.
     * @throws Throws if the query type is unknown.
     * @throws Throws if the filter list isn't key/value pairs, i.e. of an even length.
     * @remarks Stops at 10000 if there are more servers to be found.
     * @example
     * Filter examples, may be combined:
     * ```
     * [ 'gamedir', 'cstrike' ] // Doesn't work?
     * [ 'hasplayers', '1' ] // Only works with "1"?
     * [ 'notfull', '1' ] // Doesn't work?
     * [ 'map', 'cs_office' ] // Has to be an exact match!
     * ```
     */

    /*
    The enum in question:

    (t =
    'lan' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoServersMatch'
            : '#ServerBrowser_NoLanServers'
        : 'internet' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoInternetGamesMatch'
            : e == l.zS.k_EServerFailedToRespond
            ? '#ServerBrowser_MasterServerNotResponsive'
            : e == l.zS.k_ENoServersListedOnMasterServer
            ? '#ServerBrowser_MasterServerHasNoServersListed'
            : '#ServerBrowser_NoInternetGamesResponded'
        : 'favorites' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoServersMatch'
            : '#ServerBrowser_NoFavoriteServers'
        : 'history' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoHistoryServersMatch'
            : '#ServerBrowser_NoServersPlayed'
        : 'friends' == this.id
        ? this.all_servers.length > 0
            ? '#ServerBrowser_NoServersMatch'
            : '#ServerBrowser_NoFriendsServers'
        : 'BUGBUG'),
    */
    CreateServerListRequest(
        appId: number,
        queryType: ServerBrowserTab_t,
        filters: string[],
        serverCallback: (server: GameServer) => void,
        requestCompletedCallback: (response: number) => void,
    ): Promise<number | OperationResponse>;

    /**
     * Destroys the game info dialog functions (but not the window).
     * @param dialogId The dialog ID to use.
     * @remarks ServerBrowser.CancelServerQuery may throw if it tries to ping the server.
     */
    DestroyGameInfoDialog(dialogId: number): void;

    /**
     * Stops retrieving a server list.
     * @param requestId The active server list request ID to use.
     */
    DestroyServerListRequest(requestId: number): void;

    /**
     * Gets a list of games that support the server browser feature.
     * @returns a list of games.
     */
    GetMultiplayerGames(): Promise<ServerBrowserGame[]>;

    /**
     * Gets the server browser preferences.
     * @returns server browser preferences.
     */
    GetServerListPreferences(): Promise<ServerBrowserPreferences>;

    /**
     * Pings the server of a specified dialog ID.
     * @param dialogId The dialog ID to use.
     */
    PingServer(dialogId: number): Promise<number | OperationResponse>;

    /**
     * Registers for favorite/history server list changes.
     * @param callback Receives both favorite and history server lists.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForFavorites(callback: (list: ServerBrowserFavoritesAndHistory) => void): Unregisterable;

    /**
     * Registers for a friend's current game server changing.
     * @param dialogId The dialog ID to use.
     * @param callback Receives the friend's current server details.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForFriendGamePlayed(
        dialogId: number,
        callback: (server: ServerBrowserFriendServer) => void,
    ): Unregisterable;

    /**
     * Registers for server info dialog creation.
     * @param callback Receives the current server info dialogs.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForGameInfoDialogs(callback: (dialogs: ServerBrowserDialog[]) => void): Unregisterable;

    /**
     * Registers a callback function to be called when player details get requested.
     * @param dialogId The dialog ID to use.
     * @param callback The callback function to be called.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForPlayerDetails(
        dialogId: number,
        callback: (player: PlayerDetails) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be called when a server gets pinged.
     * @param dialogId The dialog ID to use.
     * @param callback The callback function to be called.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForServerInfo(dialogId: number, callback: (server: GameServer) => void): Unregisterable;

    /**
     * Removes a server from favorite servers.
     * @param server The server to remove.
     */
    RemoveFavoriteServer(server: GameServer): void;

    /**
     * Removes a server from history of played servers.
     * @param server The server to remove.
     */
    RemoveHistoryServer(server: GameServer): void;

    /**
     * Requests player details for a specific dialog.
     * @param dialogId The dialog ID to use.
     */
    RequestPlayerDetails(dialogId: number): Promise<number | OperationResponse>;

    /**
     * Sets the server browser preferences.
     * @param prefs Server list preferences.
     */
    SetServerListPreferences(prefs: ServerBrowserPreferences): void;
}



export type ServerBrowserTab_t = 'internet' | 'favorites' | 'history' | 'lan' | 'friends';

export interface ServerBrowserGame {
    /** The ID of the game. */
    appid: number;
    /** The ID of the game. */
    gameid: string;
    /** The game folder. */
    gamedir: string;
    /** The game's name. */
    name: string;
}

export interface ServerBrowserPreferences {
    GameList: string;
    filters: ServerBrowserTabFilters;
}

export type ServerBrowserTabFilters = {
    [tab in ServerBrowserTab_t]: ServerBrowserGameFilter;
};

export interface ServerBrowserGameFilter {
    /** Has users playing */
    NoEmpty: boolean;
    /** Server not full */
    NoFull: boolean;
    /** Is not password protected */
    NoPassword: boolean;
    /** Anti-cheat */
    Secure: EServerBrowserGameFilterAntiCheat;
    /** The ID of the game */
    appid: number;
    /** The game folder */
    game: string;
    /** Map filter */
    map: string;
    /** Latency */
    ping: EServerBrowserGameFilterPing;
}

export enum EServerBrowserGameFilterAntiCheat {
    All,
    Secure,
    NotSecure,
}

export enum EServerBrowserGameFilterPing {
    All,
    LessThan50 = 50,
    LessThan100 = 100,
    LessThan150 = 150,
    LessThan250 = 250,
}

export interface ServerBrowserFavoritesAndHistory {
    favorites: GameServer[];
    history: GameServer[];
}

export interface ServerBrowserFriendServer {
    /** The ID of the game. */
    appid: number;
    /** Non-Steam server? */
    bNonSteamServer: boolean;
    gameText: string;
    /** The ID of the game. */
    gameid: string;
    ip: string;
    port: number;
    queryPort: number;
    steamIDLobby: string;
}

export interface ServerBrowserDialog {
    dialogID: number;
    pid: number;
    steamID?: string;
    ip: string;
    port: number;
    queryPort: number;
    appid?: number;
}

export interface GameServer  {
    /** The ID of the game. */
    appid: number;
    /** Do not refresh if had unsuccessful response? */
    bDoNotRefresh?: boolean;
    /** Found the server? */
    bHadSuccessfulResponse: boolean;
    /** Has password? */
    bPassword: boolean;
    /** Is VAC secured? */
    bSecure: boolean;
    /** How many bot players there currently are. */
    botPlayers: number;
    /** The server's game name/description. */
    gameDesc: string;
    /** The game folder. */
    gameDir: string;
    /** Server tags, separated by a comma. */
    gameTags: string;
    /** The server IP. */
    ip: string;
    /** Last time played as a UNIX timestamp. */
    lastPlayed: number;
    /** Current server map. */
    map: string;
    /** Max players on the server. */
    maxPlayers: number;
    /** The server name. */
    name: string;
    /** The latency to the server. */
    ping: number;
    /** How many players there currently are. */
    players: number;
    /** The server port. */
    port: number;
    queryPort: number;
    /** The server's game version it is running on. */
    serverVersion: number;
    /** Game server account ID. */
    steamID: string;
}

export enum EJoinServerError {
    PingFailed = -3,
    Connecting,
    Pinging,
    None,
    VACBanned,
    ServerFull,
    ModNotInstalled,
    AppNotFound,
    NotInitialized,
}

export interface PlayerDetails {
    /**
     * `true` is the server refresh is successful.
     */
    bSuccess: boolean;

    /**
     * `true` when the server refresh is done.
     */
    bRefreshComplete: boolean;

    /**
     * Player name.
     * 
     * @note Defined when {@link bRefreshComplete} is `true`.
     */
    playerName?: string;

    /**
     * Player score.
     * 
     * @note Defined when {@link bRefreshComplete} is `true`.
     */
    score?: number;

    /**
     * Time played on the server in seconds
     * 
     * @note Defined when {@link bRefreshComplete} is `true`.
     */
    timePlayed?: number;
}
