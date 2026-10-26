import { JsPbMessage, OperationResponse, SerializedProtoBase64 } from "../../shared";

export interface Device {
    /**
     * @param base64 Serialized base64 message from `CMsgNetworkDeviceConnect`.
     */
    Connect(base64: SerializedProtoBase64<CMsgNetworkDeviceConnect>): Promise<OperationResponse>;
    Disconnect(deviceId: number): Promise<OperationResponse>;

    /**
     * Sets network device options, such as wireless autoconnect and band filtering.
     * @param deviceId Network device ID.
     * @param base64 Serialized base64 message from `CMsgNetworkDeviceSetOptions`.
     */
    SetOptions(deviceId: number, base64: SerializedProtoBase64<CMsgNetworkDeviceSetOptions>): Promise<OperationResponse>;

    WirelessNetwork: WirelessNetwork;
}

export interface WirelessNetwork {
    Forget(deviceId: number, deviceWapId: number): Promise<OperationResponse>;

    /**
     * @deprecated Not present on the current live WirelessNetwork bridge; use {@link Device.SetOptions}.
     */
    SetAutoconnect(deviceId: number, deviceWapId: number, autoConnect: boolean): unknown;
}

export interface CMsgNetworkDeviceConnect extends JsPbMessage {
    device_id(): number | undefined;

    ap_known(): CMsgNetworkDeviceConnect_KnownAP | undefined;

    ap_custom(): CMsgNetworkDeviceConnect_CustomAP | undefined;

    credentials(): CMsgNetworkDeviceConnect_Credentials | undefined;

    ip4(): CMsgNetworkDeviceIP4Config | undefined;

    ip6(): CMsgNetworkDeviceIP6Config | undefined;

    wireless(): CMsgNetworkDeviceConnect_Wireless | undefined;
}

export interface CMsgNetworkDeviceConnect_KnownAP extends JsPbMessage {
    ap_id(): number | undefined;
}

export type CMsgNetworkDeviceConnectKnownAP = CMsgNetworkDeviceConnect_KnownAP;

export interface CMsgNetworkDeviceConnect_CustomAP extends JsPbMessage {
    ssid(): string | undefined;

    esecurity(): number | undefined;
}

export type CMsgNetworkDeviceConnectCustomAP = CMsgNetworkDeviceConnect_CustomAP;

export interface CMsgNetworkDeviceConnect_Credentials extends JsPbMessage {
    username(): string | undefined;

    password(): string | undefined;
}

export type CMsgNetworkDeviceConnectCredentials = CMsgNetworkDeviceConnect_Credentials;

export interface CMsgNetworkDeviceConnect_Wireless extends JsPbMessage {
    band_filter(): string | undefined;
}

export type CMsgNetworkDeviceConnectWireless = CMsgNetworkDeviceConnect_Wireless;

export interface CMsgNetworkDeviceSetOptions extends JsPbMessage {
    wireless(createIfMissing?: boolean): CMsgNetworkDeviceSetOptions_Wireless | undefined;

    set_wireless(value: CMsgNetworkDeviceSetOptions_Wireless): this;
}

export interface CMsgNetworkDeviceSetOptions_Wireless extends JsPbMessage {
    ap_id(): number | undefined;

    band_filter(): string | undefined;

    is_autoconnect(): boolean | undefined;

    set_ap_id(value: number): this;

    set_band_filter(value: string): this;

    set_is_autoconnect(value: boolean): this;
}

export type CMsgNetworkDeviceSetOptionsWireless = CMsgNetworkDeviceSetOptions_Wireless;

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
