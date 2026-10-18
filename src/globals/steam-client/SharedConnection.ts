import { ESteamRealm, Unregisterable } from "./shared";

/**
 * `hSharedConnection` is the number from {@link AllocateSharedConnection}.
 */
export interface SharedConnection {
    AllocateSharedConnection(): Promise<number>;

    // if no such number, sends this warning:
    // src\clientdll\clientsharedconnection.cpp (154) : m_mapSharedConnections.HasElement( hSharedConnection )
    Close(hSharedConnection: number): void;

    RegisterOnBinaryMessageReceived(hSharedConnection: number, callback: (data: ArrayBuffer) => void): Unregisterable;

    RegisterOnLogonInfoChanged(hSharedConnection: number, callback: (info: LogonInfo) => void): Unregisterable;

    RegisterOnMessageReceived(hSharedConnection: number, callback: (message: string) => void): Unregisterable;

    SendMsg(hSharedConnection: number, msg: string): void;
    SendMsgAndAwaitBinaryResponse(hSharedConnection: number, msg: string): Promise<ArrayBuffer>;

    SendMsgAndAwaitResponse(hSharedConnection: number, msg: string): Promise<string>;

    SubscribeToClientServiceMethod(hSharedConnection: number, serviceMethod: string): void;

    SubscribeToEMsg(hSharedConnection: number, eMsg: number): void;
}

export interface LogonInfo {
    /** `true` if logged on. */
    bLoggedOn: boolean;
    eUniverse: ESteamRealm;
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
