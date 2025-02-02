import {EControllerType} from "./Input";
import {Unregisterable} from "./index";

export interface RemotePlay {
    BCanAcceptInviteForGame: any;
    BCanCreateInviteForGame: any;

    BCanHostIsolatedGameAudio(): Promise<boolean>;

    BEnabled(): Promise<boolean>;

    BRemotePlayTogetherGuestOnPhoneOrTablet(steam64Id: string, guestId: number): Promise<boolean>;

    BRemotePlayTogetherGuestSupported(): Promise<boolean>;

    CancelInviteAndSession(steam64Id: string): any;

    CancelInviteAndSessionWithGuestID(steam64Id: string, guestId: number): any;

    CancelRemoteClientPairing(): void;

    CloseGroup(): Promise<number>;

    CreateGroup: any;

    CreateInviteAndSession(steam64Id: string, param1: any): any;

    CreateInviteAndSessionWithGuestID(steam64Id: string, guestId: number, param2: any): any;

    GetClientID(): Promise<string>;

    GetClientStreamingBitrate(): Promise<number>; //todo: -1 not streaming??
    GetClientStreamingQuality(): Promise<number>; //todo: -1 not streaming??
    GetControllerType(param0: number): Promise<EControllerType>; // todo: param0 with value 0 is host controller type - param0 is likely an index of clients or guestId?
    GetGameSystemVolume(): Promise<number>;

    GetPerUserInputSettings(steam64Id: string): any;

    GetPerUserInputSettingsWithGuestID(steam64Id: string, guestId: number): any;

    IdentifyController(nControllerIndex: number): any;

    InstallAudioDriver: any;
    InstallInputDriver: any;
    MoveControllerToSlot: any;
    RegisterForAdditionalParentalBlocks: Unregisterable;
    RegisterForAudioDriverPrompt: Unregisterable;
    RegisterForBitrateOverride: Unregisterable;
    RegisterForClearControllers(callback: () => void): Unregisterable;
    RegisterForControllerIndexSet: Unregisterable;

    RegisterForDevicesChanges(callback: (devicesChange: RemotePlayDevice[]) => void): Unregisterable;

    RegisterForGroupCreated: Unregisterable;
    RegisterForGroupDisbanded: Unregisterable;
    RegisterForInputDriverPrompt: Unregisterable;
    RegisterForInputDriverRestartNotice: Unregisterable;

    RegisterForInputUsed(
        callback: (steam64Id: string, type: EClientUsedInputType, guestId: number) => void,
    ): Unregisterable; // only fires on host

    RegisterForInviteResult: Unregisterable;

    RegisterForNetworkUtilizationUpdate(
        callback: (steam64Id: string, guestId: number, networkUtilization: number, networkDuration: number) => void,
    ): Unregisterable; // only fires on host

    RegisterForPlaceholderStateChanged(callback: (isShowingPlaceholder: boolean) => void): Unregisterable;

    RegisterForPlayerInputSettingsChanged: Unregisterable;

    RegisterForQualityOverride(callback: (hostStreamingQualityOverride: number) => void): Unregisterable;

    RegisterForRemoteClientLaunchFailed: Unregisterable;

    RegisterForRemoteClientStarted(callback: (steam64Id: string, appId: number) => void): Unregisterable; // only fires on client

    RegisterForRemoteClientStopped(callback: (steam64Id: string, appId: number) => void): Unregisterable; // only fires on client

    RegisterForRemoteDeviceAuthorizationCancelled(callback: () => void): Unregisterable;

    RegisterForRemoteDeviceAuthorizationRequested(callback: (device: string) => void): Unregisterable;

    RegisterForRemoteDevicePairingPINChanged(callback: (device: string, pin: string) => void): Unregisterable;

    RegisterForRestrictedSessionChanges(callback: (restrictedSession: boolean) => void): Unregisterable;

    RegisterForSessionStopped(callback: (steam64Id: any, guestId: any, avatarHash: string) => void): Unregisterable;

    RegisterForSessionStarted(callback: (steam64Id: any, gameId: any, guestId: any) => void): Unregisterable;

    RegisterForSessionStopped(callback: (steam64Id: any, guestId: any) => void): Unregisterable;

    RegisterForSettingsChanges(callback: (remotePlaySettings: RemotePlaySettings) => void): Unregisterable;

    SetClientStreamingBitrate(bitrate: number): void;

    SetClientStreamingQuality(quality: number): void;

    SetGameSystemVolume(volume: number): void;

    SetPerUserControllerInputEnabled(steam64Id: string, enabled: boolean): any;

    SetPerUserControllerInputEnabledWithGuestID(steam64Id: string, guestId: number, enabled: boolean): any;

    SetPerUserKeyboardInputEnabled(steam64Id: string, enabled: boolean): any;

    SetPerUserKeyboardInputEnabledWithGuestID(steam64Id: string, guestId: number, enabled: boolean): any;

    SetPerUserMouseInputEnabled(steam64Id: string, enabled: boolean): any;

    SetPerUserMouseInputEnabledWithGuestID(steam64Id: string, guestId: number, enabled: boolean): any;

    SetRemoteDeviceAuthorized: any;

    SetRemoteDevicePIN(pin: number): void;

    SetRemotePlayEnabled(enabled: boolean): void;

    SetStreamingClientConfig: any;
    SetStreamingClientConfigEnabled: any;

    SetStreamingDesktopToRemotePlayTogetherEnabled(enabled: boolean): any;

    SetStreamingP2PScope: any;
    SetStreamingServerConfig: any;
    SetStreamingServerConfigEnabled: any;

    StopStreamingClient(): void;

    StopStreamingSession: any;
    StopStreamingSessionAndSuspendDevice: any;

    UnlockH264(): void;

    UnpairRemoteDevices(): void; // unpairs all devices
}

export enum EClientUsedInputType {
    Keyboard,
    Mouse,
    Controller,
    Max,
}

export interface RemotePlayDevice {
    clientName: string;
    status: string; // "Connected", "Paired",
    formFactor: number;
    unStreamingSessionID: number;
    bCanSuspend: boolean;
}

export interface RemotePlaySettings {
    bRemotePlaySupported: boolean;
    bRemotePlayEnabled: boolean;
    eRemotePlayP2PScope: EStreamP2PScope;
    bRemotePlayServerConfigAvailable: boolean;
    bRemotePlayServerConfigEnabled: boolean;
    RemotePlayServerConfig: any; // todo: document {}
    bRemotePlayClientConfigEnabled: boolean;
    unStreamingSessionID: number;
    strStreamingClientName: string;
    RemotePlayClientConfig: any; // todo: document {}
    nDefaultAudioChannels: number;
    bDefaultEncodeNVIDIA: boolean;
    bDefaultEncodeAMD: boolean;
    bDefaultEncodeIntel: boolean;
    nAutomaticResolutionX: number;
    nAutomaticResolutionY: number;
}

export enum EStreamP2PScope {
    Automatic,
    Disabled,
    OnlyMe,
    Friends,
    Everyone,
}
