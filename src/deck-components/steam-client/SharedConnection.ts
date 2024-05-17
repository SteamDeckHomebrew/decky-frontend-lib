import {Unregisterable} from "./index";
import {SteamRealm} from "./Overlay";

export interface SharedConnection {
    // hSharedConnection is the number from AllocateSharedConnection()
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
    bLoggedOn: boolean;
    eUniverse: SteamRealm;
    strAccountName: string;
    strCommunityImagesURL: string;
    strPersonaName: string;
    /** Steam64 ID. */
    strSteamid: string;
    /** Country code. */
    strUserCountry: string;
}