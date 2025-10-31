import type { JsPbMessageClass, OperationResponse } from '../steam-client/shared';
import type { CBaseProtoBufMsg, CCallbackList, Unsubscribable } from './interfaces';
import type { CSteamID } from './steamid';

type Callback_t = (...args: any[]) => void;

/**
 * @see https://github.com/SteamDatabase/SteamTracking/blob/master/Protobufs/enums_clientserver.proto#L4
 */
type EMsg_t = number;

interface ReportErrorOptions {
  cCallsitesToIgnore: number;
  bIncludeMessageInIdentifier: boolean;
  error: Error;
  strComponentStack: string;
}

interface ReportErrorResult {
  identifier: string;
  identifierHash: string;
  message: string[];
}

interface ErrorReportingStore {
  m_bEnabled: boolean;
  m_bInitialized: boolean;
  m_bReportingPaused: boolean;
  m_fnGetReportingInterval: () => number;
  m_rgErrorQueue: Error[];
  m_sendTimer: number | null;
  m_strProduct: string;
  m_strVersion: string;
  m_transport: ServiceTransport;

  BIsBlacklisted(error: Error): boolean;
  QueueSend(error: Error): void;
  ReportError(error: Error, options?: Partial<ReportErrorOptions>): Promise<ReportErrorResult | null>;
  SendErrorReport(error: Error): void;
  SendErrorReports(errors: Error[]): void;
}

export interface ServiceTransport {
  MakeReady(): Promise<OperationResponse>;
  SendMsg(target_job_name: string, msg: CBaseProtoBufMsg, protoMsg: any): CBaseProtoBufMsg;
  SendNotification(target_job_name: string, msg: CBaseProtoBufMsg): boolean;
}

interface ServiceHandler<T extends Callback_t> {
  /**
   * Invokes the callback.
   */
  invoke: T;

  msgClass: JsPbMessageClass;
}

interface ServiceMethod {
  /**
   * e.g. `"PlayerClient.NotifyCommunityPreferencesChanged#1"`.
   */
  name: string;

  /**
   * Protobuf message class.
   */
  request: any;
}

interface ServiceRegistrar<T extends Callback_t> {
  /**
   * Invokes the callback.
   */
  invoke: T;

  /**
   * Unregisters the callback.
   */
  unregister(): void;
}

interface MessageHandlers {
  m_mapCallbacks: Map<EMsg_t, ServiceHandler<any>[]>;
  m_mapServiceMethodHandlers: Map<string, ServiceHandler<any>[]>;
  m_rgRegisteredEMsgs: EMsg_t[];
  m_rgRegisteredServiceMethodHandlers: string[];

  AddCallback<T extends Callback_t>(msg: EMsg_t, msgClass: any | undefined, callback: T): ServiceRegistrar<T>;
  AddServiceMethodHandler<T extends Callback_t>(method: ServiceMethod, callback: T): ServiceRegistrar<T>;
  AddServiceNotificationHandler<T extends Callback_t>(msg: EMsg_t, callback: T): ServiceRegistrar<T>;
  DispatchMsgToHandlers(msg: CBaseProtoBufMsg, callback: (msg: CBaseProtoBufMsg) => void): boolean;
  InstallErrorReportingStore(store: ErrorReportingStore): void;
  RegisterBaseEMessageHandler<T extends Callback_t>(msg: EMsg_t, callback: T): ServiceRegistrar<T>;
  RegisterEMessageAction<T extends Callback_t>(
    msg: EMsg_t,
    msgClass: any | undefined,
    callback: T,
  ): ServiceRegistrar<T>;
  RegisterEMessageHandler<T extends Callback_t>(
    msg: EMsg_t,
    msgClass: any | undefined,
    callback: T,
  ): ServiceRegistrar<T>;
  RegisterServiceMethodHandler<T extends Callback_t>(msg: EMsg_t, callback: T): ServiceRegistrar<T>;
  RegisterServiceMethodHandlerAction<T extends Callback_t>(msg: EMsg_t, callback: T): ServiceRegistrar<T>;
  RegisterServiceNotificationHandler<T extends Callback_t>(msg: EMsg_t, callback: T): ServiceRegistrar<T>;
  RegisterServiceNotificationHandlerAction<T extends Callback_t>(msg: EMsg_t, callback: T): ServiceRegistrar<T>;
}

interface CMInterfaceCallbacks {
  m_ClientConnectionCallbacks: CCallbackList;
  m_bRunOnce: boolean;
  m_mapServerTypeCallbacks: Map<number, CCallbackList>;

  AddCallback(callback: () => void, t?: number): Unsubscribable;
  RunAllCallbacks(e: number[], ...args: any[]): void;
  RunCallbacks(e: number | undefined, ...args: any[]): void;
}

// CMInterfaceSharedClientConnection
export interface CMInterface {
  ClientServersAvailableHandler: ServiceRegistrar<any>;
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
  m_hEMsgRegistrationObserver: () => void;
  m_hSharedConnection: number;
  m_messageHandlers: MessageHandlers;
  m_nPerfClockServerMSOffset: number;
  m_nWallClockDriftMS: number;
  // actually valve, not a callback
  m_onConnect: Promise<void> | undefined;
  m_rtReconnectThrottleExpiration: number;
  m_rtReconnectThrottleStart: number;
  m_setConnectedServers: Set<number>;
  m_setEMsgHandlers: Set<EMsg_t>;
  m_setServiceMethodHandlers: Set<string>;
  m_steamid: CSteamID;
  m_strIPCountry: string;
  m_strPersonaName: string;
  m_unAccountFlags: number;

  ClearHeartbeatInterval(): void;
  Connect(): Promise<void>;
  Disconnect(): void;
  ResetHeartbeatInterval(): void;
  SendHeartbeat(): void;
  SendInternal(msg: CBaseProtoBufMsg): boolean;
  SendMsgAndAwaitResponse(param0: CBaseProtoBufMsg, param1: EMsg_t): CBaseProtoBufMsg;
}
