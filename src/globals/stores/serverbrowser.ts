import type { CSteamID } from '../shared/steamid';
import type { EJoinServerError, GameServer, PlayerDetails, ServerBrowserDialog } from '../steam-client/ServerBrowser';

export interface GameInfoDialog {
  m_autoRetry: 'None' | 'AutoRetryAlert' | 'AutoRetryJoin';
  m_bInitialPingAttempt: boolean;
  m_dialogID: number;
  m_eConnectAttemptStatus: EJoinServerError;
  m_gameInfo: any | null;
  m_gameServerItem: GameServer;
  m_hQueryPlayerList: number;
  m_hQueryServer: number;
  m_pid: number;
  m_playerList: PlayerDetails[];
  m_playerListPending: PlayerDetails[];
  m_steamID: any | null;
  m_strPassword: string;
  m_window: Window;

  /**
   * `SteamClient.Window.BringToFront`
   */
  BringToFront(): void;
  ClearConnectAttemptStatus(): void;
  /**
   * @todo param is force ?
   */
  Connect(hadSuccessfulResponse: boolean): Promise<EJoinServerError>;
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
  ShowServerGameInfoDialog(dialog: ServerBrowserDialog): Promise<GameInfoDialog>;
  ShowUserGameInfoDialog(pid: number, steamId: CSteamID): void;
}
