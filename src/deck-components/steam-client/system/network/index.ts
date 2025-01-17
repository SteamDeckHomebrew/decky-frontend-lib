import {JsPbMessage, OperationResponse, Unregisterable} from "../../index";
import {Device} from "./Device";


export interface Network {
    Device: Device;

    ForceRefresh(): Promise<OperationResponse>;

    ForceTestConnectivity(): void;

    GetProxyInfo(): Promise<ProxyInfo>;

    // data.nAppID, data.serializedMsg
    RegisterForAppSummaryUpdate(callback: (data: any) => any): Unregisterable;

    /**
     * @todo {@link GameNetworkingUI_ConnectionState}, unconfirmed
     */
    RegisterForConnectionStateUpdate: Unregisterable;

    RegisterForConnectivityTestChanges(
        callback: (connectivityTestChange: ConnectivityTestChange) => void,
    ): Unregisterable;

    /**
     * If `data` is deserialized, returns {@link MsgNetworkDevicesData}.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForDeviceChanges(callback: (data: ArrayBuffer) => void): Unregisterable;

    SetFakeLocalSystemState(state: ENetFakeLocalSystemState): void;

    SetProxyInfo(mode: number, address: string, port: number, excludeLocal: boolean): void;

    SetWifiEnabled(value: boolean): Promise<OperationResponse>;

    StartScanningForNetworks(): Promise<OperationResponse>;

    StopScanningForNetworks(): Promise<OperationResponse>;
}

export interface ConnectivityTestChange {
    eConnectivityTestResult: EConnectivityTestResult;
    eFakeState: ENetFakeLocalSystemState;
    bChecking: boolean;
}

export enum EConnectivityTestResult {
    Unknown,
    Connected,
    CaptivePortal,
    TimedOut,
    Failed,
    WifiDisabled,
    NoLAN,
}

export interface ProxyInfo {
    proxy_mode: number;
    address: string;
    port: number;
    exclude_local: boolean;
}

export enum ENetFakeLocalSystemState {
    Normal,
    NoLAN,
    CaptivePortal_Redirected,
    CaptivePortal_InPlace,
    NoInternet,
    NoSteam,
}

/**
 * CMsgNetworkDevicesData
 */
export interface MsgNetworkDevicesData extends JsPbMessage {
    devices(): NetworkDevice[];

    is_wifi_enabled(): boolean;

    is_wifi_scanning_enabled(): boolean;
}

export interface NetworkDevice_Wireless {
    aps: WirelessAP[];
    /**
     * @remarks Not present if wired.
     * @todo enum
     */
    esecurity_supported?: number;
}

export interface WirelessAP {
    esecurity: EWirelessSecurityFlags;
    estrength: EWirelessEndpointStrength;
    id: number;
    is_active: boolean;
    is_autoconnect: boolean;
    password: string;
    ssid: string;
    strength_raw: number;
    user_name?: string;
}

export enum EWirelessSecurityFlags {
    None,
    StaticWep = 1 << 0,
    DynamicWep = 1 << 1,
    Wpa = 1 << 2,
    WpaEnterprise = 1 << 3,
    Wpa2 = 1 << 4,
    Wpa2Enterprise = 1 << 5,
    /**
     * Special value to indicate that this platform does not support
     * the security methods required to connect to an access point
     */
    Unsupported = 1 << 15,
}

export interface NetworkDevice_Wired {
    friendly_name: string;
    is_cable_present: boolean;
    speed_mbit: number;
}

export interface NetworkDevice {
    estate: ENetworkDeviceState;
    etype: ENetworkDeviceType;
    id: number;
    ipv4: NetworkDeviceIPv4;
    ipv6: NetworkDeviceIPv6;
    mac: string;
    product: string;
    vendor: string;
    /**
     * @remarks Present only if wired.
     */
    wired?: NetworkDevice_Wired;
    /**
     * @remarks Present even if wired.
     */
    wireless: NetworkDevice_Wireless;
}

export interface NetworkDeviceIPv4Address {
    ip: number;
    netmask: number;
}

export interface NetworkDeviceIPv6Address {
    ip: string;
}

export interface NetworkDeviceIP {
    dns_ip: number[];
    gateway_ip: number;
    is_default_route: boolean;
    is_dhcp_enabled: boolean;
    is_enabled: boolean;
}

export interface NetworkDeviceIPv4 extends NetworkDeviceIP {
    addresses: NetworkDeviceIPv4Address[];
}

export interface NetworkDeviceIPv6 extends NetworkDeviceIP {
    addresses: NetworkDeviceIPv6Address[];
}

export enum ENetworkDeviceState {
    NotPresent,
    Failed,
    Disconnected,
    Disconnecting,
    Connecting,
    Connected,
    Retrying,
}

export enum ENetworkDeviceType {
    Unknown,
    Wired,
    Wireless,
    Virtual,
}

export enum EWirelessEndpointStrength {
    None,
    Weak,
    Ok,
    Good,
    Excellent,
}
