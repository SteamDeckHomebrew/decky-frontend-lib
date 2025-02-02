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

export enum EUIMode {
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
    m_eUIMode?: EUIMode;

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
 * ProtoBuf message class.
 */
export interface JsPbMessageClass {
    /**
     * @todo Returns {@link JsPbMessage}, but not sure how to do it for the messages.
     */
    deserializeBinary(data: ArrayBuffer): any;
}

/**
 * Deserialized ProtoBuf message.
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
