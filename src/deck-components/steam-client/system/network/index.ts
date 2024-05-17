import {JsPbMessage, OperationResponse, Unregisterable} from "../../index";
import {Device} from "./Device";


export interface Network {
    Device: Device;

    ForceRefresh(): Promise<OperationResponse>;

    ForceTestConnectivity(): void;

    GetProxyInfo(): Promise<ProxyInfo>;

    // data.nAppID, data.serializedMsg
    RegisterForAppSummaryUpdate(callback: (data: any) => any): Unregisterable | any;

    /**
     * @todo {@link GameNetworkingUI_ConnectionState}, unconfirmed
     */
    RegisterForConnectionStateUpdate: Unregisterable | any;

    RegisterForConnectivityTestChanges(
        callback: (connectivityTestChange: ConnectivityTestChange) => void,
    ): Unregisterable | any;

    /**
     * If `data` is deserialized, returns {@link MsgNetworkDevicesData}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    SetFakeLocalSystemState(state: NetFakeLocalSystemState): void;

    SetProxyInfo(mode: number, address: string, port: number, excludeLocal: boolean): void;

    SetWifiEnabled(value: boolean): Promise<OperationResponse>;

    StartScanningForNetworks(): Promise<OperationResponse>;

    StopScanningForNetworks(): Promise<OperationResponse>;
}

export interface ConnectivityTestChange {
    eConnectivityTestResult: ConnectivityTestResult;
    eFakeState: NetFakeLocalSystemState;
    bChecking: boolean;
}

export enum ConnectivityTestResult {
    Unknown = 0,
    Connected = 1,
    CaptivePortal = 2,
    TimedOut = 3,
    Failed = 4,
    WifiDisabled = 5,
    NoLAN = 6,
}

export interface ProxyInfo {
    proxy_mode: number;
    address: string;
    port: number;
    exclude_local: boolean;
}

export enum NetFakeLocalSystemState {
    Normal = 0,
    NoLAN = 1,
    CaptivePortal_Redirected = 2,
    CaptivePortal_InPlace = 3,
    NoInternet = 4,
    NoSteam = 5,
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
    esecurity: WirelessAPSecurityFlags;
    estrength: WirelessAPStrength;
    id: number;
    is_active: boolean;
    is_autoconnect: boolean;
    password: string;
    ssid: string;
    strength_raw: number;
    user_name?: string;
}

export enum WirelessAPSecurityFlags {
    None = 0,
    StaticWep = 1,
    DynamicWep = 2,
    Wpa = 4,
    WpaEnterprise = 8,
    Wpa2 = 16,
    Wpa2Enterprise = 32,
    /**
     * Special value to indicate that this platform does not support
     * the security methods required to connect to an access point
     */
    Unsupported = 32768,
}

export interface NetworkDevice_Wired {
    friendly_name: string;
    is_cable_present: boolean;
    speed_mbit: number;
}

export interface NetworkDevice {
    estate: NetworkDeviceState;
    etype: NetworkDeviceType;
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

export enum NetworkDeviceState {
    NotPresent = 0,
    Failed = 1,
    Disconnected = 2,
    Disconnecting = 3,
    Connecting = 4,
    Connected = 5,
    Retrying = 6,
}

export enum NetworkDeviceType {
    Unknown = 0,
    Wired = 1,
    Wireless = 2,
    Virtual = 3,
}

export enum WirelessAPStrength {
    None = 0,
    Weak = 1,
    Ok = 2,
    Good = 3,
    Excellent = 4,
}