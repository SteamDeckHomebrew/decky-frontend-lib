import {Unregisterable} from "./index";
import {SteamRealm} from "./Overlay";

/**
 * `hSharedConnection` is the number from {@link AllocateSharedConnection}.
 */
export interface SharedConnection {
    AllocateSharedConnection(): Promise<number>;

    // if no such number, sends this warning:
    // src\clientdll\clientsharedconnection.cpp (154) : m_mapSharedConnections.HasElement( hSharedConnection )
    Close(hSharedConnection: number): void;

    RegisterOnBinaryMessageReceived(hSharedConnection: number, callback: (data: ArrayBuffer) => void): Unregisterable | any;

    RegisterOnLogonInfoChanged(hSharedConnection: number, callback: (info: LogonInfo) => void): Unregisterable | any;

    RegisterOnMessageReceived(hSharedConnection: number, callback: (param0: any) => void): Unregisterable | any;

    SendMsg: any;
    SendMsgAndAwaitBinaryResponse: any;

    SubscribeToClientServiceMethod(hSharedConnection: number, param1: any): any;

    SubscribeToEMsg(hSharedConnection: number, param1: any): any;
}

export interface LogonInfo {
    /** `true` if logged on, `false otherwise. */
    bLoggedOn: boolean;
    eUniverse: SteamRealm;
    /** Account username. Empty if not logged on. */
    strAccountName: string;
    /** URL for community content. */
    strCommunityImagesURL: string;
    /** Account nickname. Empty if not logged on. */
    strPersonaName: string;
    /** Steam64 ID. */
    strSteamid: string;
    /** Country code. */
    strUserCountry: string;
}