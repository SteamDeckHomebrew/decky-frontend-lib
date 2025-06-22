import type { JsPbMessageClass, OperationResponse } from '../steam-client/shared';
import type { TransportInfo } from '../steam-client/WebUITransport';
import type { ServiceTransport } from './cm';
import type { EBrowserType, EUIMode } from './enums';

export type UnknownFn_t = (...args: any[]) => any;

export interface BrowserContext {
  /**
   * Window type.
   */
  m_eBrowserType?: EBrowserType;

  /**
   * The UI mode in use.
   */
  m_eUIMode: EUIMode;

  /**
   * @todo Appears when EBrowserType == 0 ?
   */
  m_gameID?: string;

  /**
   * @todo Same as `SteamClient.Browser.GetBrowserID()` ?
   */
  m_nBrowserID: number;

  /**
   * Game's app ID.
   */
  m_unAppID?: number;

  /**
   * If overlay, game's PID.
   */
  m_unPID: number;
}

export interface Unregisterable {
  unregister(): void;
}

export interface WebSocketConnection {
  m_bDisconnectRequested: boolean;
  m_bReconnectOnFailure: boolean;
  m_bReconnecting: boolean;
  m_nConnectionTimeoutMs: number;
  m_nMaximumConnectAttempt: number;
  m_sName: string;
  m_sURL: string;
  m_socket: WebSocket;

  BCanSendMessages(): boolean;
  BShouldReconnect(): boolean;
  Connect(url: string): Promise<OperationResponse>;
  Disconnect(): void;
  InternalConnect(url: string, retries: number): Promise<OperationResponse>;
  PrepareForShutdown(): void;
  SendSerializedMessage(param0: any): any;
  StartReconnect(): Promise<void>;
  WaitForSocketOpen(ws: WebSocket, retries: number): Promise<boolean>;
}

export interface Unsubscribable {
  Unsubscribe(): void;
}

/**
 * @todo somehow make F be 1/2/etc args idfk
 */
export type CCallbackListCallback_t<T> = (...args: T[]) => void;

/**
 * Interface to register and unregister callbacks from, with ability to dispatch.
 */
export interface CCallbackList<T = never> {
  m_vecCallbacks: CCallbackListCallback_t<T>[];

  ClearAllCallbacks(): void;
  CountRegistered(): number;
  Dispatch(...args: T[]): void;
  Register(callback: CCallbackListCallback_t<T>): Unsubscribable;
}

export interface SubscribableValue<T> {
  m_callbacks: CCallbackList<T>;
  m_currentValue: T;
  m_fnEquals: (currentValue: T, newValue: T) => boolean | undefined;

  /**
   * Sets a new value and notifies Subscribers of the new value.
   */
  Set(value: T): void;

  /**
   * Adds a subscription to the backing CCallbackList.
   */
  Subscribe(subscriber: CCallbackListCallback_t<T>): Unsubscribable;

  /**
   * A snapshot of the current value which can change at any time.
   */
  get Value(): T;
}

export interface WebUIServiceTransport extends ServiceTransport {
  m_connectionClientdll: WebSocketConnection;
  m_connectionSteamUI: WebSocketConnection;
  m_iMsgSeq: number;
  m_mapPendingMethodRequests: Map<any, any>;
  m_mapServiceCallErrorCount: Map<any, any>;
  m_messageHandlers: {
    m_mapCallbacks: Map<any, any>;
    m_mapServiceMethodHandlers: Map<
      string,
      {
        invoke(...args: any[]): any;
        msgClass: JsPbMessageClass;
      }
    >;
    m_rgRegisteredEMsgs: any[];
    m_rgRegisteredServiceMethodHandlers: string[];

    AddCallback(e: any, t: any, n: any): any;
    AddServiceMethodHandler(e: any, t: any): any;
    AddServiceNotificationHandler(e: any, t: any): any;
    DEBUG_LogMessageDispatch(e: any, t: any): any;
    DispatchMsgToHandlers(e: any, t: any): any;
    InstallErrorReportingStore(e: any): any;
    RegisterBaseEMessageHandler(e: any, t: any): any;
    RegisterEMessageAction(e: any, t: any, n: any): any;
    RegisterEMessageHandler(e: any, t: any, n: any): any;
    RegisterServiceMethodHandler(e: any, t: any): any;
    RegisterServiceMethodHandlerAction(e: any, t: any): any;
    RegisterServiceNotificationHandler(e: any, t: any): any;
    RegisterServiceNotificationHandlerAction(e: any, t: any): any;
  };
  m_transportInfo: TransportInfo;

  AuthConnection(e: any): any;
  DispatchMethodResponse(e: any): any;
  DispatchNotification(e: any): any;
  FailAllPendingRequests(): any;
  GetAuthInfoForConnection(e: any): any;
  ReportError(message: string): void;
  SendAuthMessage(e: any): any;
}
