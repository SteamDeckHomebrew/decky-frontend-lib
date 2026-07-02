import { JsPbMessage, OperationResponse, SerializedProtoBase64 } from "../../shared";

export interface Device {
    /**
     * @param base64 Serialized base64 message from `CMsgNetworkDeviceConnect`.
     */
    Connect(base64: SerializedProtoBase64<CMsgNetworkDeviceConnect>): Promise<OperationResponse>;
    Disconnect(deviceId: number): Promise<OperationResponse>;

    WirelessNetwork: WirelessNetwork;
}

export interface WirelessNetwork {
    Forget(deviceId: number, deviceWapId: number): any;

    SetAutoconnect(deviceId: number, deviceWapId: number, autoConnect: boolean): any;
}

export interface CMsgNetworkDeviceConnect extends JsPbMessage {
    device_id(): number | undefined;

    ap_known(): CMsgNetworkDeviceConnectKnownAP | undefined;

    ap_custom(): CMsgNetworkDeviceConnectCustomAP | undefined;

    credentials(): CMsgNetworkDeviceConnectCredentials | undefined;

    ip4(): CMsgNetworkDeviceIP4Config | undefined;

    ip6(): CMsgNetworkDeviceIP6Config | undefined;

    wireless(): CMsgNetworkDeviceConnectWireless | undefined;
}

export interface CMsgNetworkDeviceConnectKnownAP extends JsPbMessage {
    ap_id(): number | undefined;
}

export interface CMsgNetworkDeviceConnectCustomAP extends JsPbMessage {
    ssid(): string | undefined;

    esecurity(): number | undefined;
}

export interface CMsgNetworkDeviceConnectCredentials extends JsPbMessage {
    username(): string | undefined;

    password(): string | undefined;
}

export interface CMsgNetworkDeviceConnectWireless extends JsPbMessage {
    band_filter(): string | undefined;
}

export interface CMsgNetworkDeviceIP4Address extends JsPbMessage {
    ip(): number | undefined;

    netmask(): number | undefined;
}

export interface CMsgNetworkDeviceIP4Config extends JsPbMessage {
    addresses(): CMsgNetworkDeviceIP4Address[];

    dns_ip(): number[];

    gateway_ip(): number | undefined;

    is_dhcp_enabled(): boolean | undefined;

    is_default_route(): boolean | undefined;

    is_enabled(): boolean | undefined;
}

export interface CMsgNetworkDeviceIP6Address extends JsPbMessage {
    ip(): string | undefined;
}

export interface CMsgNetworkDeviceIP6Config extends JsPbMessage {
    addresses(): CMsgNetworkDeviceIP6Address[];

    dns_ip(): string[];

    gateway_ip(): string | undefined;

    is_dhcp_enabled(): boolean | undefined;

    is_default_route(): boolean | undefined;

    is_enabled(): boolean | undefined;
}
