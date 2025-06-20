import type { CSteamID } from '../shared/steamid';

export interface GameInfoDialog {
  m_autoRetry: 'None' | 'AutoRetryAlert' | 'AutoRetryJoin';
  m_bInitialPingAttempt: boolean;
  m_dialogID: number;
  //JoinServerError
  m_eConnectAttemptStatus: number;
  m_gameInfo: any | null;
  m_gameServerItem: any /*ServerBrowserServerFull*/;
  m_hQueryPlayerList: number;
  m_hQueryServer: number;
  m_pid: number;
  /* These 2 below are ServerBrowserPlayer*/
  m_playerList: any[];
  m_playerListPending: any[];
  m_steamID: any | null;
  m_strPassword: string;
  m_window: Window;

  /**
   * `SteamClient.Window.BringToFront`
   */
  BringToFront(): void;
  ClearConnectAttemptStatus(): void;
  /**
   * @returns JoinSertevrError
   * @todo param is force ?
   */
  Connect(hadSuccessfulResponse: boolean): Promise<any>;
  /**
   * `SteamClient.ServerBrowser.DestroyGameInfoDialog`
   */
  Destroy(): void;
  PingServer(): void;
  Refresh(): void;
  RequestPlayerList(): void;
  SetPassword(password: string): void;
  SetWindow(window: Window): void;
}

export interface PendingPromise {
  dialogID: number;
  resolve: any;
  reject: any;
}

export interface ServerBrowserStore {
  m_listPendingPromise: PendingPromise[];
  // ObservableMap, number is dialog ID
  m_mapGameInfoDialogs: Map<number, GameInfoDialog>;

  CloseGameInfoDialog(dialogId: number): void;
  ConnectToFriendsGame(steamId: CSteamID, window: Window): void;
  ConnectToFriendsGameBySteamID(steamId: CSteamID, window: Window): void;
  GetGameInfoDialogs(pid: number): GameInfoDialog[];
  ShowServerGameInfoDialog(dialog: any /*ServerBrowserDialog*/): Promise<GameInfoDialog>;
  ShowUserGameInfoDialog(pid: number, steamId: CSteamID): void;
}
