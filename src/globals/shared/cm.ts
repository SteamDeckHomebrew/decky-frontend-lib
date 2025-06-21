import type { JsPbMessageClass } from '../steam-client/shared';
import type { CCallbackList, UnknownFn_t } from './interfaces';
import type { CSteamID } from './steamid';

export interface CMInterfaceCallbacks {
  m_ClientConnectionCallbacks: CCallbackList;
  m_bRunOnce: boolean;
  m_mapServerTypeCallbacks: Map<any, any>;

  AddCallback(e: any, t: any): any;
  RunAllCallbacks(e: any, ...t: any): any;
  RunCallbacks(e: any, ...t: any): any;
}

export interface ErrorReportingStore {
  m_bEnabled: boolean;
  m_bInitialized: boolean;
  m_fnGetReportingInterval: () => number;
  m_rgErrorQueue: any[];
  m_sendTimer: any;
  m_strProduct: string;
  m_strVersion: string;
  m_transport: ServiceTransport;

  BIsBlacklisted(e: any): any;
  Init(e: any, t: any, n: any): any;
  QueueSend(e: any): any;
  ReportError(e: any, t: any): any;
  SendErrorReport(e: any): any;
  SendErrorReports(e: any): any;
}

export interface ServiceTransport {
  MakeReady: UnknownFn_t;
  SendMsg(e: any, t: any, n: any): any;
  SendNotification(e: any, t: any): any;
}

export interface UnknownInterface0 {
  invoke: UnknownFn_t;
  msgClass: JsPbMessageClass;
}

export interface CMInterface {
  ClientServersAvailableHandler: {
    invoke: UnknownFn_t;
    unregister(): void;
  };
  m_ServiceTransport: ServiceTransport;
  m_bCompletedInitialConnect: boolean;
  m_bConnected: boolean;
  m_bConnectionFailed: boolean;
  m_bForceDisconnect: boolean;
  m_bLoggedOn: boolean;
  m_bPerformedInitialClockAdjustment: boolean;
  m_bShouldChangePersonaStatusOnDisconnect: boolean;
  m_callbacksOnConnect: CMInterfaceCallbacks;
  m_callbacksOnConnectOneTime: CMInterfaceCallbacks;
  m_callbacksOnDisconnect: CMInterfaceCallbacks;
  m_hEMsgRegistrationObserver: UnknownFn_t;
  m_hSharedConnection: number;
  m_messageHandlers: {
    m_ErrorReportingStore: ErrorReportingStore;
    m_mapCallbacks: Map<number, UnknownInterface0>;
    m_mapServiceMethodHandlers: Map<string, UnknownInterface0>;
    m_rgRegisteredEMsgs: number[];
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
  m_nPerfClockServerMSOffset: number;
  m_nWallClockDriftMS: number;
  m_onConnect: any;
  m_rtReconnectThrottleExpiration: number;
  m_rtReconnectThrottleStart: number;
  m_setConnectedServers: Set<number>;
  m_setEMsgHandlers: Set<number>;
  m_setServiceMethodHandlers: Set<string>;
  m_steamid: CSteamID;
  m_strIPCountry: string;
  m_strPersonaName: string;
  m_unAccountFlags: number;

  ClearHeartbeatInterval(): any;
  Connect(): any;
  Disconnect(): any;
  GetShouldChangePersonaStatusOnDisconnect(): any;
  OnConnect(): any;
  OnLogonInfoChanged(e: any): any;
  OnMsgRecvd(e: any): any;
  OnSharedConnectionClosed(): any;
  OnSharedConnectionEstablished(e: any): any;
  ResetHeartbeatInterval(): any;
  SendHeartbeat(): any;
  SendInternal(e: any): any;
  SendMsgAndAwaitResponse(e: any, t: any): any;
  SetShouldChangePersonaStatusOnDisconnect(e: any): any;
}
