import { OperationResponse } from "./index";

export interface WebUITransport {
    GetTransportInfo(): Promise<TransportInfo>;

    /**
     * *Possibly* notifies websocket of failure and tries to reconnect to it.
     *
     * The responsible message for this is `CMsgWebUITransportFailure`.
     *
     * @param serializedBase64 Serialized ProtoBuf message.
     */
    NotifyTransportFailure(serializedBase64: string): Promise<OperationResponse>;
}

export interface TransportInfo {
    authKeyClientdll: string;
    authKeySteamUI: string;
    portClientdll: number;
    portSteamUI: number;
}
