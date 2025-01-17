import {AppDetails, Apps, Shortcut} from "./App";
import {Auth} from "./Auth";
import {Broadcast} from "./Broadcast";
import {Browser} from "./Browser";
import {BrowserView} from "./browser-view";
import {ClientNotifications} from "./ClientNotifications";
import {Cloud} from "./Cloud";
import {CommunityItems} from "./CommunityItems";
import {Console} from "./Console";
import {Customization} from "./Customization";
import {Downloads} from "./Downloads";
import {FamilySharing} from "./FamilySharing";
import {FriendSettings} from "./FriendSettings";
import {Friends} from "./Friends";
import {GameNotes} from "./GameNotes";
import {GameRecording} from "./GameRecording";
import {GameSessions} from "./GameSessions";
import {Input} from "./Input";
import {InstallFolder} from "./InstallFolder";
import {Installs} from "./Installs";
import {Messaging} from "./Messaging";
import {Music} from "./Music";
import {Notifications} from "./Notifications";
import {OpenVR} from "./OpenVR";
import {Overlay} from "./Overlay";
import {Storage} from "./Storage";
import {Parental} from "./Parental";
import {RemotePlay} from "./RemotePlay";
import {ServerBrowser} from "./ServerBrowser";
import {Screenshots} from "./Screenshots";
import {Settings} from "./Settings";
import {SharedConnection} from "./SharedConnection";
import {Stats} from "./Stats";
import {SteamChina} from "./SteamChina";
import {Streaming} from "./Streaming";
import {System} from "./system";
import {UI} from "./UI";
import {Updates} from "./Updates";
import {User} from "./User";
import {WebChat} from "./WebChat";
import {WebUITransport} from "./WebUITransport";
import {Window} from "./Window";
import {Device} from "./system/network/Device";

export interface SteamClient {
    Apps: Apps;
    Auth: Auth;
    Broadcast: Broadcast;
    Browser: Browser;
    BrowserView: BrowserView;
    ClientNotifications: ClientNotifications;
    Cloud: Cloud;
    CommunityItems: CommunityItems;
    Console: Console;
    Customization: Customization;
    Downloads: Downloads;
    FamilySharing: FamilySharing;
    Friends: Friends;
    FriendSettings: FriendSettings;
    GameNotes: GameNotes;
    GameRecording: GameRecording;
    GameSessions: GameSessions;
    Input: Input;
    InstallFolder: InstallFolder;
    Installs: Installs;
    MachineStorage: Storage;
    Messaging: Messaging;
    Music: Music;
    Notifications: Notifications;
    OpenVR: OpenVR;
    Overlay: Overlay;
    Parental: Parental;
    RemotePlay: RemotePlay;
    RoamingStorage: Storage;
    Screenshots: Screenshots;
    ServerBrowser: ServerBrowser;
    Settings: Settings;
    SharedConnection: SharedConnection;
    Stats: Stats;
    SteamChina: SteamChina;
    Storage: Storage;
    Streaming: Streaming;
    System: System;
    UI: UI;
    URL: URL;
    Updates: Updates;
    User: User;
    WebChat: WebChat;
    WebUITransport: WebUITransport;
    Window: Window;
}

export enum EResult {
    OK = 1,
    Fail,
    NoConnection,
    InvalidPassword = 5,
    LoggedInElsewhere,
    InvalidProtocolVer,
    InvalidParam,
    FileNotFound,
    Busy,
    InvalidState,
    InvalidName,
    InvalidEmail,
    DuplicateName,
    AccessDenied,
    Timeout,
    Banned,
    AccountNotFound,
    InvalidSteamID,
    ServiceUnavailable,
    NotLoggedOn,
    Pending,
    EncryptionFailure,
    InsufficientPrivilege,
    LimitExceeded,
    Revoked,
    Expired,
    AlreadyRedeemed,
    DuplicateRequest,
    AlreadyOwned,
    IPNotFound,
    PersistFailed,
    LockingFailed,
    LogonSessionReplaced,
    ConnectFailed,
    HandshakeFailed,
    IOFailure,
    RemoteDisconnect,
    ShoppingCartNotFound,
    Blocked,
    Ignored,
    NoMatch,
    AccountDisabled,
    ServiceReadOnly,
    AccountNotFeatured,
    AdministratorOK,
    ContentVersion,
    TryAnotherCM,
    PasswordRequiredToKickSession,
    AlreadyLoggedInElsewhere,
    Suspended,
    Cancelled,
    DataCorruption,
    DiskFull,
    RemoteCallFailed,
    PasswordUnset,
    ExternalAccountUnlinked,
    PSNTicketInvalid,
    ExternalAccountAlreadyLinked,
    RemoteFileConflict,
    IllegalPassword,
    SameAsPreviousValue,
    AccountLogonDenied,
    CannotUseOldPassword,
    InvalidLoginAuthCode,
    AccountLogonDeniedNoMail,
    HardwareNotCapableOfIPT,
    IPTInitError,
    ParentalControlRestricted,
    FacebookQueryError,
    ExpiredLoginAuthCode,
    IPLoginRestrictionFailed,
    AccountLockedDown,
    AccountLogonDeniedVerifiedEmailRequired,
    NoMatchingURL,
    BadResponse,
    RequirePasswordReEntry,
    ValueOutOfRange,
    UnexpectedError,
    Disabled,
    InvalidCEGSubmission,
    RestrictedDevice,
    RegionLocked,
    RateLimitExceeded,
    AccountLoginDeniedNeedTwoFactor,
    ItemDeleted,
    AccountLoginDeniedThrottle,
    TwoFactorCodeMismatch,
    TwoFactorActivationCodeMismatch,
    AccountAssociatedToMultiplePartners,
    NotModified,
    NoMobileDevice,
    TimeNotSynced,
    SmsCodeFailed,
    AccountLimitExceeded,
    AccountActivityLimitExceeded,
    PhoneActivityLimitExceeded,
    RefundToWallet,
    EmailSendFailure,
    NotSettled,
    NeedCaptcha,
    GSLTDenied,
    GSOwnerDenied,
    InvalidItemType,
    IPBanned,
    GSLTExpired,
    InsufficientFunds,
    TooManyPending,
    NoSiteLicensesFound,
    WGNetworkSendExceeded,
    AccountNotFriends,
    LimitedUserAccount,
}

export enum EBrowserType {
    /**
     * No window is created (like SharedJSContext).
     */
    OffScreen,
    OpenVROverlay,
    OpenVROverlay_Dashboard,
    /**
     * A normal window.
     */
    DirectHWND,
    /**
     * A borderless window.
     */
    DirectHWND_Borderless,
    /**
     * An initially hidden window.
     * May be shown with {@link SteamClient.Window.ShowWindow}.
     */
    DirectHWND_Hidden,
    ChildHWNDNative,
    Offscreen_SteamUI = 12,
    OpenVROverlay_Subview,
}

export enum UIMode {
    Unknown = -1,
    GamePad = 4,
    Desktop = 7,
}

export interface BrowserContext {
    /**
     * Window type.
     */
    m_eBrowserType?: EBrowserType;
    /**
     * The UI mode in use.
     */
    m_eUIMode?: UIMode;
    /**
     * @todo Appears when EBrowserType == 0 ?
     */
    m_gameID?: string;
    /**
     * @todo Same as `SteamClient.Browser.GetBrowserID()` ?
     */
    m_nBrowserID: number;
    /**
     * Game's app ID.
     */
    m_unAppID?: number;
    /**
     * If overlay, game's PID.
     */
    m_unPID: number;
}

/**
 * Represents the response of an operation. It appears to be not necessary to await for this operation response. It is only used to indicate the result of an operation.
 */
export interface OperationResponse {
    /**
     * The result code of the operation.
     */
    result: EResult;

    /**
     * A message describing the result of the operation.
     */
    message: string;
}

export interface Unregisterable {
    /**
     * Unregister the callback.
     */
    unregister(): void;
}

/**
 * JsPb message class.
 */
export interface JsPbMessageClass {
    /**
     * @todo Returns {@link JsPbMessage}, but not sure how to do it for the messages.
     */
    deserializeBinary(data: ArrayBuffer): any;
}

/**
 * Deserialized JsPb message.
 */
export interface JsPbMessage {
    getClassName(): string;

    serializeBase64String(): string;

    serializeBinary(): Uint8Array;

    /**
     * Converts the message to an object.
     */
    toObject(includeJsPbInstance: boolean): any;
}






//todo: Organize the interfaces below
export interface SteamShortcut {
    appid: number;
    data: Shortcut;
}

export interface AppData {
    details: AppDetails;
    // more
}

export interface SteamDatagramLinkInstantaneousStats {
    out_packets_per_sec_x10: number | undefined;
    out_bytes_per_sec: number | undefined;
    in_packets_per_sec_x10: number | undefined;
    in_bytes_per_sec: number | undefined;
    ping_ms: number | undefined;
    packets_dropped_pct: number | undefined;
    packets_weird_sequence_pct: number | undefined;
    peak_jitter_usec: number | undefined;
}

export interface SteamDatagramLinkLifetimeStats {
    connected_seconds: number | undefined;
    packets_sent: number | undefined;
    kb_sent: number | undefined;
    packets_recv: number | undefined;
    kb_recv: number | undefined;
    packets_recv_sequenced: number | undefined;
    packets_recv_dropped: number | undefined;
    packets_recv_out_of_order: number | undefined;
    packets_recv_out_of_order_corrected: number | undefined;
    packets_recv_duplicate: number | undefined;
    packets_recv_lurch: number | undefined;
    multipath_packets_recv_sequenced: number[];
    multipath_packets_recv_later: number[];
    multipath_send_enabled: number | undefined;
    quality_histogram_100: number | undefined;
    quality_histogram_99: number | undefined;
    quality_histogram_97: number | undefined;
    quality_histogram_95: number | undefined;
    quality_histogram_90: number | undefined;
    quality_histogram_75: number | undefined;
    quality_histogram_50: number | undefined;
    quality_histogram_1: number | undefined;
    quality_histogram_dead: number | undefined;
    quality_ntile_2nd: number | undefined;
    quality_ntile_5th: number | undefined;
    quality_ntile_25th: number | undefined;
    quality_ntile_50th: number | undefined;
    ping_histogram_25: number | undefined;
    ping_histogram_50: number | undefined;
    ping_histogram_75: number | undefined;
    ping_histogram_100: number | undefined;
    ping_histogram_125: number | undefined;
    ping_histogram_150: number | undefined;
    ping_histogram_200: number | undefined;
    ping_histogram_300: number | undefined;
    ping_histogram_max: number | undefined;
    ping_ntile_5th: number | undefined;
    ping_ntile_50th: number | undefined;
    ping_ntile_75th: number | undefined;
    ping_ntile_95th: number | undefined;
    ping_ntile_98th: number | undefined;
    jitter_histogram_negligible: number | undefined;
    jitter_histogram_1: number | undefined;
    jitter_histogram_2: number | undefined;
    jitter_histogram_5: number | undefined;
    jitter_histogram_10: number | undefined;
    jitter_histogram_20: number | undefined;
    txspeed_max: number | undefined;
    txspeed_histogram_16: number | undefined;
    txspeed_histogram_32: number | undefined;
    txspeed_histogram_64: number | undefined;
    txspeed_histogram_128: number | undefined;
    txspeed_histogram_256: number | undefined;
    txspeed_histogram_512: number | undefined;
    txspeed_histogram_1024: number | undefined;
    txspeed_histogram_max: number | undefined;
    txspeed_ntile_5th: number | undefined;
    txspeed_ntile_50th: number | undefined;
    txspeed_ntile_75th: number | undefined;
    txspeed_ntile_95th: number | undefined;
    txspeed_ntile_98th: number | undefined;
    rxspeed_max: number | undefined;
    rxspeed_histogram_16: number | undefined;
    rxspeed_histogram_32: number | undefined;
    rxspeed_histogram_64: number | undefined;
    rxspeed_histogram_128: number | undefined;
    rxspeed_histogram_256: number | undefined;
    rxspeed_histogram_512: number | undefined;
    rxspeed_histogram_1024: number | undefined;
    rxspeed_histogram_max: number | undefined;
    rxspeed_ntile_5th: number | undefined;
    rxspeed_ntile_50th: number | undefined;
    rxspeed_ntile_75th: number | undefined;
    rxspeed_ntile_95th: number | undefined;
    rxspeed_ntile_98th: number | undefined;
}

export interface SteamDatagramConnectionQuality {
    instantaneous: SteamDatagramLinkInstantaneousStats | undefined;
    lifetime: SteamDatagramLinkLifetimeStats | undefined;
}

export interface SteamNetworkingICESessionSummary {
    failure_reason_code: number | undefined;
    local_candidate_types: number | undefined;
    remote_candidate_types: number | undefined;
    initial_route_kind: number | undefined;
    initial_ping: number | undefined;
    initial_score: number | undefined;
    negotiation_ms: number | undefined;
    best_route_kind: number | undefined;
    best_ping: number | undefined;
    best_score: number | undefined;
    best_time: number | undefined;
    selected_seconds: number | undefined;
    user_settings: number | undefined;
    ice_enable_var: number | undefined;
    local_candidate_types_allowed: number | undefined;
}

export interface SteamNetworkingP2PSDRRoutingSummary {
    initial_ping: number | undefined;
    initial_ping_front_local: number | undefined;
    initial_ping_front_remote: number | undefined;
    initial_score: number | undefined;
    initial_pop_local: number | undefined;
    initial_pop_remote: number | undefined;
    best_ping: number | undefined;
    best_ping_front_local: number | undefined;
    best_ping_front_remote: number | undefined;
    best_score: number | undefined;
    best_pop_local: number | undefined;
    best_pop_remote: number | undefined;
    best_time: number | undefined;
    negotiation_ms: number | undefined;
    selected_seconds: number | undefined;
}

export interface SteamDatagramP2PRoutingSummary {
    ice: SteamNetworkingICESessionSummary | undefined;
    sdr: SteamNetworkingP2PSDRRoutingSummary | undefined;
}


/**
 * CMsgNetworkDevicesData
 */
export interface MsgNetworkDevicesData extends JsPbMessage {
    devices(): Device[];

    is_wifi_enabled(): boolean;

    is_wifi_scanning_enabled(): boolean;
}


/**
 * CGameNetworkingUI_ConnectionState
 */
export interface GameNetworkingUI_ConnectionState extends JsPbMessage {
    connection_key(): string;

    appid(): number;

    connection_id_local(): number;

    identity_local(): string;

    identity_remote(): string;

    connection_state(): number;

    start_time(): number;

    close_time(): number;

    close_reason(): number;

    close_message(): string;

    status_loc_token(): string;

    transport_kind(): number;

    sdrpopid_local(): string;

    sdrpopid_remote(): string;

    address_remote(): string;

    p2p_routing(): SteamDatagramP2PRoutingSummary;

    ping_interior(): number;

    ping_remote_front(): number;

    ping_default_internet_route(): number;

    e2e_quality_local(): SteamDatagramConnectionQuality;

    e2e_quality_remote(): SteamDatagramConnectionQuality;

    e2e_quality_remote_instantaneous_time(): string;

    e2e_quality_remote_lifetime_time(): string;

    front_quality_local(): SteamDatagramConnectionQuality;

    front_quality_remote(): SteamDatagramConnectionQuality;

    front_quality_remote_instantaneous_time(): string;

    front_quality_remote_lifetime_time(): string;
}

/**
 * CMsgHotkey
 */
export interface MsgHotkey extends JsPbMessage {
    key_code(): number;

    alt_key(): boolean;

    shift_key(): boolean;

    ctrl_key(): boolean;

    meta_key(): boolean;

    display_name(): string;
}

export enum EControllerRumbleSetting {
    ControllerPreference,
    Off,
    On,
}

export enum EMusicPlayingRepeatStatus {
    None,
    All,
    Once,
    Max,
}

export enum BrowserViewContextMenuTypeFlag {
    None,
    Page = 1 << 0,
    Frame = 1 << 1,
    Link = 1 << 2,
    Media = 1 << 3,
    Selection = 1 << 4,
    Editable = 1 << 5,
}

export enum BrowserViewContextMenuEditFlag {
    None,
    CanUndo = 1 << 0,
    CanRedo = 1 << 1,
    CanCut = 1 << 2,
    CanCopy = 1 << 3,
    CanPaste = 1 << 4,
    CanDelete = 1 << 5,
    CanSelectAll = 1 << 6,
    CanTranslate = 1 << 7,
}

/**
 * @todo May be useful for ParentalSettings.feature ?
 */
export enum EParentalFeature {
    Invalid,
    Store,
    Community,
    Profile,
    Friends,
    News,
    Trading,
    Settings,
    Console,
    Browser,
    ParentalSetup,
    Library,
    Test,
    SiteLicense,
    KioskMode,
    Max,
}
