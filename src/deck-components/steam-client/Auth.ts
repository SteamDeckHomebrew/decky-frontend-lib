import {JsPbMessage} from "./index";
import {OSType} from "./system";

export interface Auth {
    GetLocalHostname(): Promise<string>;

    /**
     * @returns A Promise that resolves to a ProtoBuf message. If deserialized, returns {@link Authentication_DeviceDetails}.
     */
    GetMachineID(): Promise<ArrayBuffer>;

    GetRefreshInfo(): Promise<AuthRefreshInfo>;

    GetSteamGuardData(param0: any): any;

    IsSecureComputer(): Promise<boolean>;

    SetLoginToken(refreshToken: string, accountName: string): any;

    SetSteamGuardData(accountName: string, newGuardData: string): any;

    StartSignInFromCache(param0: any, login: string): Promise<any>;
}

export interface AuthRefreshInfo {
    reason: number;
    account_name: string;
    login_id_token: string;
}

/**
 * CAuthentication_DeviceDetails
 *
 * `deserializeBinary` argument:
 * ```
 * [
 *     await SteamClient.System.GetOSType(),
 *     await SteamClient.Auth.GetLocalHostname(),
 *     await SteamClient.Auth.GetMachineID(),
 * ];
 * ```
 */
export interface Authentication_DeviceDetails extends JsPbMessage {
    client_count(): number | undefined;

    device_friendly_name(): string | undefined;

    gaming_device_type(): GamingDeviceType | undefined;

    machine_id(): Uint8Array | string;

    os_type(): OSType | undefined;

    platform_type(): AuthTokenPlatformType | undefined;

    set_client_count(): any;

    set_device_friendly_name(): any;

    set_gaming_device_type(): any;

    set_machine_id(): any;

    set_os_type(): any;

    set_platform_type(): any;
}

export enum AuthTokenPlatformType {
    Unknown = 0,
    SteamClient = 1,
    WebBrowser = 2,
    MobileApp = 3,
}

export enum GamingDeviceType {
    Unknown = 0,
    StandardPC = 1,
    Console = 256,
    PS3 = 272,
    Steambox = 288,
    Handheld = 512,
    Phone = 528,
    SteamDeck = 544,
}
