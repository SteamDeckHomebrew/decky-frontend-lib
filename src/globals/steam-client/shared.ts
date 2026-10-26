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

/**
 * Controls how Gamescope renders the GamepadUI window when a game is running.
 */
export enum EUIComposition {
  /** Steam is not rendered on the screen. */
  Hidden,

  /**
   * Transparent divs will allow pixels from the app behind Steam to penetrate.
   * Input goes to **the app**.
   */
  Notification,

  /**
   * Transparent divs will allow pixels from the app behind Steam to penetrate.
   * Input goes to **Steam**.
   */
  Overlay,

  /** Take all of the pixels on the screen, nothing "behind" Steam is shown. */
  Opaque,

  /**
   * Special composition mode that matches {@link Overlay}, but forwards synthetic keyboard
   * events to the Gamescope foreground app (game) instead of Steam.
   */
  OverlayKeyboard,
}

/** 0 - false, 1 - true */
export type VDFBoolean_t = 0 | 1;

export type { BrowserContext } from '../shared/interfaces';

/**
 * Represents the response of an operation. It appears to be not necessary to await for this operation response. It is only used to indicate the result of an operation.
 */
export interface OperationResponse {
  /**
   * The result code of the operation.
   */
  result: EResult;

  /**
   * An unlocalized message describing the result of the operation.
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
 * Serialized ProtoBuf payload returned by SteamClient before the generated
 * JS protobuf class deserializes it.
 */
export type SerializedProto<TDecoded = unknown> = ArrayBuffer & {
  readonly __protobufDecodedType?: TDecoded;
};

/**
 * Base64-encoded ProtoBuf payload accepted by some SteamClient setters.
 */
export type SerializedProtoBase64<TDecoded = unknown> = string & {
  readonly __protobufDecodedType?: TDecoded;
  readonly __protobufEncoding?: "base64";
};

/**
 * Generated ProtoBuf message class.
 */
export interface JsPbMessageClass<
  TMessage extends JsPbMessage = JsPbMessage,
  TObject = TMessage extends JsPbMessage<infer TMessageObject> ? TMessageObject : unknown,
> {
  new(data?: unknown): TMessage;

  deserializeBinary(data: ArrayBuffer | Uint8Array): TMessage;

  deserializeBinaryFromReader?(message: TMessage, reader: unknown): TMessage;

  fromObject?(object: Partial<TObject>): TMessage;

  serializeBinaryToWriter?(message: TMessage, writer: unknown): void;

  toObject?(includeJsPbInstance: boolean, message: TMessage): TObject;
}

/**
 * Deserialized ProtoBuf message.
 */
export interface JsPbMessage<TObject = unknown> {
  getClassName(): string;

  serializeBase64String(): string;

  serializeBinary(): Uint8Array;

  /**
   * Converts the message to an object.
   */
  toObject(includeJsPbInstance?: boolean): TObject;
}
