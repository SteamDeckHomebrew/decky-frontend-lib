export interface WebUITransport {
    GetTransportInfo(): Promise<TransportInfo>;

    NotifyTransportFailure: any;
}

export interface TransportInfo {
    authKeyClientdll: string;
    authKeySteamUI: string;
    portClientdll: number;
    portSteamUI: number;
}