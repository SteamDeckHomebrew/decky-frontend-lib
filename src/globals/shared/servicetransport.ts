import type { JsPbMessageClass, OperationResponse } from '../steam-client/shared';
import type { TransportInfo } from '../steam-client/WebUITransport';
import type { ServiceTransport } from './cm';

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
