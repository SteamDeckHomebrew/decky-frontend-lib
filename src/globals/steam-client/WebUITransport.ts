import { JsPbMessage, OperationResponse, SerializedProtoBase64 } from "./shared";

export interface WebUITransport {
    GetTransportInfo(): Promise<TransportInfo>;

    /**
     * Tells Steam the websocket failed and opens a troubleshooting dialog.
     *
     * The responsible message for this is `CMsgWebUITransportFailure`.
     *
     * @param base64 Serialized ProtoBuf message.
     */
    NotifyTransportFailure(base64: SerializedProtoBase64<CMsgWebUITransportFailure>): Promise<OperationResponse>;
}

export interface CMsgWebUITransportFailure extends JsPbMessage {
    connect_count(): number | undefined;
}

export interface TransportInfo {
    authKeyClientdll: string;
    authKeySteamUI: string;
    portClientdll: number;
    portSteamUI: number;
}
