export interface Device {
    Connect(param0: any): any; // some base64 serialized string
    Disconnect(deviceId: any): Promise<any>;

    WirelessNetwork: WirelessNetwork;
}

export interface WirelessNetwork {
    Forget(deviceId: any, deviceWapId: any): any;

    SetAutoconnect(deviceId: any, deviceWapId: any, autoConnect: boolean): any;
}