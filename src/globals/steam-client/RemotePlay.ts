import { EControllerType } from "./Input";
import { EParentalFeature } from "./Parental";
import { EResult, SerializedProto, SerializedProtoBase64, Unregisterable } from "./shared";

export interface RemotePlay {
    /**
     * Checks whether the current user can accept a Remote Play Together invite.
     * @param gameId Steam game ID.
     * @param restrictedCountries Country restriction list used by Steam as a fallback when the native bridge is unavailable.
     */
    BCanAcceptInviteForGame(gameId: string, restrictedCountries: string): Promise<boolean>;

    /**
     * Checks whether the current user can create a Remote Play Together invite.
     * @param gameId Steam game ID.
     * @param inviteGuest True when checking guest-link support instead of a Steam friend invite.
     */
    BCanCreateInviteForGame(gameId: string, inviteGuest: boolean): Promise<boolean>;

    BRemotePlayTogetherGuestOnPhoneOrTablet(
        groupId: RemotePlayGroupID,
        steam64Id: string,
        guestId: number,
    ): Promise<boolean>;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    BRemotePlayTogetherGuestSupported(): Promise<boolean>;

    /**
     * Cancels a Remote Play Together invite or active session for a player.
     */
    CancelInviteAndSession(groupId: RemotePlayGroupID, steam64Id: string, guestId: number): Promise<EResult>;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    CancelInviteAndSessionWithGuestID(steam64Id: string, guestId: number): Promise<EResult>;

    CancelRemoteClientPairing(): void;

    CloseGroup(groupId: RemotePlayGroupID): Promise<number>;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    CreateGroup(gameId: string): Promise<EResult>;

    /**
     * Creates a Remote Play Together invite/session in an existing group.
     */
    CreateInviteAndSession(groupId: RemotePlayGroupID, steam64Id: string, guestInvite: boolean): Promise<EResult>;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    CreateInviteAndSessionWithGuestID(steam64Id: string, guestId: number, connectString: string): Promise<EResult>;

    GetClientID(): Promise<string>;

    GetClientStreamingBitrate(groupId: RemotePlayGroupID): Promise<number>;
    GetClientStreamingQuality(groupId: RemotePlayGroupID): Promise<number>;
    GetControllerType(groupId: RemotePlayGroupID, controllerIndex: number): Promise<EControllerType>;

    /**
     * @returns an integer from 0 to 100.
     */
    GetGameSystemVolume(groupId: RemotePlayGroupID): Promise<number>;

    GetPerUserInputSettings(groupId: RemotePlayGroupID, steam64Id: string): Promise<RemotePlayInputSettings>;

    GetPerUserInputSettingsWithGuestID(
        groupId: RemotePlayGroupID,
        steam64Id: string,
        guestId: number,
    ): Promise<RemotePlayInputSettings>;

    GetRemotePlayTogetherGroupIDForOverlayPID(pid: number): Promise<RemotePlayGroupID>;

    HasRemoteDevicePIN(): Promise<boolean>;

    IdentifyController(groupId: RemotePlayGroupID, controllerIndex: number): void;

    InstallAudioDriver(): void;
    InstallInputDriver(): void;
    MoveControllerToSlot(groupId: RemotePlayGroupID, controllerIndex: number, slot: number): void;
    PairViaWifiAP(clientId: string): Promise<EResult>;
    RegisterForAdditionalParentalBlocks(callback: (blocks: EParentalFeature[]) => void): Unregisterable;
    RegisterForAudioDriverPrompt(callback: () => void): Unregisterable;

    /**
     * Registers for native bitrate override notifications.
     */
    RegisterForBitrateOverride(
        callback: (groupId: RemotePlayGroupID, hostStreamingBitrateOverride: number) => void,
    ): Unregisterable;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    RegisterForClearControllers(callback: () => void): Unregisterable;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    RegisterForControllerIndexSet(
        callback: (groupId: RemotePlayGroupID, steam64Id: string, guestId: number, slot: number) => void,
    ): Unregisterable;

    RegisterForControllersUpdated(
        callback: (groupId: RemotePlayGroupID, controllers: RemotePlayController[]) => void,
    ): Unregisterable;

    RegisterForDevicesChanges(callback: (devices: RemotePlayDevice[]) => void): Unregisterable;

    RegisterForGroupCreated(
        callback: (groupId: RemotePlayGroupID, steam64Id: string, gameId: string) => void,
    ): Unregisterable;
    RegisterForGroupDisbanded(
        callback: (groupId: RemotePlayGroupID, steam64Id?: string, gameId?: string) => void,
    ): Unregisterable;
    RegisterForInputDriverPrompt(callback: () => void): Unregisterable;
    RegisterForInputDriverRestartNotice(callback: () => void): Unregisterable;

    RegisterForInputUsed(
        callback: (
            groupId: RemotePlayGroupID,
            steam64Id: string,
            guestId: number,
            type: EClientUsedInputType,
        ) => void,
    ): Unregisterable; // only fires on host

    RegisterForInviteResult(
        callback: (
            groupId: RemotePlayGroupID,
            steam64Id: string,
            guestId: number,
            gameId: string,
            result: ERemoteClientLaunch,
            needsVoiceChat?: boolean,
            guestConnectUrl?: string,
        ) => void,
    ): Unregisterable;

    RegisterForNetworkUtilizationUpdate(
        callback: (
            groupId: RemotePlayGroupID,
            steam64Id: string,
            guestId: number,
            networkUtilization: number,
            networkDuration: number,
        ) => void,
    ): Unregisterable; // only fires on host

    RegisterForPlaceholderStateChanged(
        callback: (groupId: RemotePlayGroupID, isShowingPlaceholder: boolean) => void,
    ): Unregisterable;

    RegisterForPlayerInputSettingsChanged(
        callback: (
            groupId: RemotePlayGroupID,
            steam64Id: string,
            guestId: number,
            settings: RemotePlayInputSettings,
        ) => void,
    ): Unregisterable;

    RegisterForQualityOverride(
        callback: (groupId: RemotePlayGroupID, hostStreamingQualityOverride: number) => void,
    ): Unregisterable;

    RegisterForRemoteClientLaunchFailed(callback: (state: ERemoteClientLaunch) => void): Unregisterable;

    RegisterForRemoteClientStarted(
        callback: (
            groupId: RemotePlayGroupID,
            steam64Id: string,
            isHost: boolean,
            gameId: string,
            clientId?: string,
        ) => void,
    ): Unregisterable; // only fires on client

    RegisterForRemoteClientStopped(
        callback: (groupId: RemotePlayGroupID, steam64Id: string, gameId: string) => void,
    ): Unregisterable; // only fires on client

    RegisterForRemoteDeviceAuthorizationCancelled(callback: () => void): Unregisterable;

    RegisterForRemoteDeviceAuthorizationRequested(callback: (device: string) => void): Unregisterable;

    RegisterForRemoteDevicePairingPINChanged(callback: (device: string, pin: string) => void): Unregisterable;

    RegisterForRemoteDeviceSpectatePermissionCanceled(callback: () => void): Unregisterable;

    RegisterForRemoteDeviceSpectatePermissionRequested(callback: (deviceName: string) => void): Unregisterable;

    RegisterForRestrictedSessionChanges(callback: (restrictedSession: boolean) => void): Unregisterable;

    RegisterForSessionJoined(
        callback: (groupId: RemotePlayGroupID, steam64Id: string, guestId: number, avatarHash: string) => void,
    ): Unregisterable;

    RegisterForSessionStarted(
        callback: (groupId: RemotePlayGroupID, steam64Id: string, guestId: number, gameId: string) => void,
    ): Unregisterable;

    RegisterForSessionStopped(
        callback: (groupId: RemotePlayGroupID, steam64Id: string, guestId: number) => void,
    ): Unregisterable;

    RegisterForSettingsChanges(callback: (remotePlaySettings: RemotePlaySettings) => void): Unregisterable;

    RegisterForVRStreamingInvitation(callback: (clientId: string, accepted: boolean) => void): Unregisterable;

    SetClientStreamingBitrate(groupId: RemotePlayGroupID, bitrate: number): void;

    SetClientStreamingQuality(groupId: RemotePlayGroupID, quality: number): void;

    SetGameSystemVolume(groupId: RemotePlayGroupID, volume: number): void;

    SetPerUserControllerInputEnabled(groupId: RemotePlayGroupID, steam64Id: string, enabled: boolean): void;

    SetPerUserControllerInputEnabledWithGuestID(
        groupId: RemotePlayGroupID,
        steam64Id: string,
        guestId: number,
        enabled: boolean,
    ): void;

    SetPerUserKeyboardInputEnabled(groupId: RemotePlayGroupID, steam64Id: string, enabled: boolean): void;

    SetPerUserKeyboardInputEnabledWithGuestID(
        groupId: RemotePlayGroupID,
        steam64Id: string,
        guestId: number,
        enabled: boolean,
    ): void;

    SetPerUserMouseInputEnabled(groupId: RemotePlayGroupID, steam64Id: string, enabled: boolean): void;

    SetPerUserMouseInputEnabledWithGuestID(
        groupId: RemotePlayGroupID,
        steam64Id: string,
        guestId: number,
        enabled: boolean,
    ): void;

    SetRemoteDeviceAuthorized(authorized: boolean, pin: string): void;

    SetRemoteDevicePIN(pin: string): void;

    SetRemoteDeviceSpectateAllowed(allowed: boolean, remember: boolean): void;

    SetRemotePlayEnabled(enabled: boolean): void;

    /**
     * @param base64 Serialized base64 message from {@link StreamingClientConfig}.
     */
    SetStreamingClientConfig(base64: SerializedProtoBase64<StreamingClientConfig>, sessionId: number): void;
  
    /**
     * Enables advanced client options.
     */
    SetStreamingClientConfigEnabled(value: boolean, sessionId: number): void;

    SetStreamingDesktopToRemotePlayTogetherEnabled(groupId: RemotePlayGroupID, enabled: boolean): void;

    SetStreamingP2PScope(scope: EStreamP2PScope): void;

    /**
     * @param base64 Serialized base64 message from {@link StreamingServerConfig}.
     */
    SetStreamingServerConfig(base64: SerializedProtoBase64<StreamingServerConfig>): void;

    /**
     * Enables advanced host options.
     */
    SetStreamingServerConfigEnabled(value: boolean): void;

    StartDesktopStream(clientId: string): void;

    StopRemoteClientStream(groupId: RemotePlayGroupID, steam64Id: string, gameId: string, clientId: string): void;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    StopStreamingClient(): void;

    StopStreamingSession(id: number): void;
    StopStreamingSessionAndSuspendDevice(id: number): void;

    UnlockH264(): void;

    /**
     * Unpairs all devices.
     */
    UnpairRemoteDevices(): void;

    UnpairLocalWifiAP(): void;

    UnpairRemoteClient(clientId: string): void;

    UnpairRemoteDevice(deviceId: string): void;
}

export enum EClientUsedInputType {
    Keyboard,
    Mouse,
    Controller,
    Max,
}

export type RemotePlayGroupID = string | number;

export interface RemotePlayDevice {
    clientId: string;
    deviceId?: string;
    clientName: string;
    status: string; // "Connected", "Paired",
    formFactor: number;
    unStreamingSessionID: number;
    bCanSteamVR: boolean;
    bCanSuspend: boolean;
}

export interface RemotePlayController {
    steamid: string;
    unGuestID: number;
    unIndex: number;
}

export interface RemotePlayInputSettings {
    bKeyboardEnabled: boolean;
    bMouseEnabled: boolean;
    bControllerEnabled: boolean;
}

export interface RemotePlaySettings {
    bAV1DecodeAvailable: boolean;
    bHEVCDecodeAvailable: boolean;
    bRemotePlayDisabledBySystemPolicy: boolean;
    bRemotePlaySupported: boolean;
    bRemotePlayEnabled: boolean;
    eRemotePlayP2PScope: EStreamP2PScope;
    bRemotePlayServerConfigAvailable: boolean;
    bRemotePlayServerConfigEnabled: boolean;
    bRemotePlayClientConfigEnabled: boolean;
    unStreamingSessionID: number;
    strStreamingClientName: string;
    /**
     * If deserialized, returns {@link StreamingClientConfig}.
     */
    RemotePlayClientConfig: SerializedProto<StreamingClientConfig>;
    /**
     * If deserialized, returns {@link StreamingServerConfig}.
     */
    RemotePlayServerConfig: SerializedProto<StreamingServerConfig>;
    /**
     * If deserialized, returns {@link StreamingClientCaps}.
     */
    RemotePlayClientCaps: SerializedProto<StreamingClientCaps>;
    /**
     * JSON state for the Remote Play Wi-Fi access point.
     */
    strWifiAPStateJSON: string;
    nDefaultAudioChannels: number;
    nAutomaticResolutionX: number;
    nAutomaticResolutionY: number;
}

export interface StreamingClientConfig {
    quality?: EStreamQualityPreference;
    desired_resolution_x?: number;
    desired_resolution_y?: number;
    desired_framerate_numerator?: number;
    desired_framerate_denominator?: number;
    desired_bitrate_kbps?: number;
    enable_hardware_decoding?: boolean;
    enable_performance_overlay?: boolean;
    enable_video_streaming?: boolean;
    enable_audio_streaming?: boolean;
    enable_input_streaming?: boolean;
    audio_channels?: number;
    enable_video_hevc?: boolean;
    enable_performance_icons?: boolean;
    enable_microphone_streaming?: boolean;
    controller_overlay_hotkey?: string;
    enable_touch_controller_OBSOLETE?: boolean;
    p2p_scope?: EStreamP2PScope;
    enable_audio_uncompressed?: boolean;
    display_limit?: StreamVideoLimit;
    quality_limit?: StreamVideoLimit;
    runtime_limit?: StreamVideoLimit;
    decoder_limit: StreamVideoLimit[];
    enable_unreliable_fec?: boolean;
    enable_video_av1?: boolean;
    windowed?: boolean;
    window_pixel_density?: number;
    window_width?: number;
    window_height?: number;
    window_position_x?: number;
    window_position_y?: number;
    window_frame_offset_x?: number;
    window_frame_offset_y?: number;
}

export interface StreamingServerConfig {
    host_play_audio?: EStreamHostPlayAudioPreference;
    custom_display_device?: string;
    display_resolution_setting?: EStreamDisplayConfigSetting;
    custom_display_resolution_x?: number;
    custom_display_resolution_y?: number;
    display_refresh_rate_setting?: EStreamDisplayConfigSetting;
    custom_display_refresh_rate?: string;
    display_hdr_setting?: EStreamDisplayConfigSetting;
    custom_display_hdr?: boolean;
    enable_capture_nvfbc?: boolean;
    enable_hardware_encoding?: boolean;
    software_encoding_threads?: number;
    enable_traffic_priority?: boolean;
}

export interface StreamingClientCaps {
    system_info?: string;
    system_can_suspend?: boolean;
    maximum_decode_bitrate_kbps?: number;
    maximum_burst_bitrate_kbps?: number;
    supports_video_hevc_OBSOLETE?: boolean;
    disable_steam_store?: boolean;
    disable_client_cursor?: boolean;
    disable_intel_hardware_encoding?: boolean;
    disable_amd_hardware_encoding?: boolean;
    disable_nvidia_hardware_encoding?: boolean;
    form_factor?: number;
    has_on_screen_keyboard?: boolean;
    supported_colorspaces: number[];
    supported_audio_codecs: number[];
    supported_video_codecs: EStreamVideoCodec[];
    can_toggle_fullscreen?: boolean;
}

export interface StreamVideoLimit {
  codec?: EStreamVideoCodec;
  mode?: StreamVideoMode;
  bitrate_kbps?: number;
  burst_bitrate_kbps?: number;
}

export interface StreamVideoMode {
  width?: number;
  height?: number;
  refresh_rate?: number;
  refresh_rate_numerator?: number;
  refresh_rate_denominator?: number;
}

export enum ERemoteClientLaunch {
  OK = 1,
  Fail,
  RequiresUI,
  RequiresLaunchOption,
  RequiresEULA,
  Timeout,
  StreamTimeout,
  StreamClientFail,
  OtherGameRunning,
  DownloadStarted,
  DownloadNoSpace,
  DownloadFiltered,
  DownloadRequiresUI,
  AccessDenied,
  NetworkError,
  Progress,
  ParentalUnlockFailed,
  ScreenLocked,
  Unsupported,
  DisabledLocal,
  DisabledRemote,
  Broadcasting,
  Busy,
  DriversNotInstalled,
  TransportUnavailable,
  Canceled,
  Invisible,
  RestrictedCountry,
  Unauthorized,
}

export enum EStreamVideoCodec {
  None,
  Raw,
  VP8,
  VP9,
  H264,
  HEVC,
  ORBX1,
  ORBX2,
  AV1,
}

export enum EStreamHostPlayAudioPreference {
    Default,
    Always,
}

export enum EStreamQualityPreference {
    Automatic = -1,
    Fast = 1,
    Balanced,
    Beautiful,
}

export enum EStreamP2PScope {
    Automatic,
    Disabled,
    OnlyMe,
    Friends,
    Everyone,
}

export enum EStreamDisplayConfigSetting {
    None,
    Client,
    Custom,
}
