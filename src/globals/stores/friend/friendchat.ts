import type { ReactNode } from 'react';
import type { BrowserContext, CCallbackList } from '../../shared';
import type { EResult } from '../../steam-client/shared';
import type { ClipSummary_t } from '../gamerecordingstore';
import type { CPlayer } from './shared';

// TODO(protobufs): generate
export enum EMessageReactionType {
  k_EMessageReactionType_Invalid,
  k_EMessageReactionType_Emoticon,
  k_EMessageReactionType_Sticker,
}

// TODO(protobufs): generate
export enum EMsgAnimationState {
  None,
  Animating,
}

// TODO(protobufs): generate
export enum EChatMsgDeleteState {
  None,
  Deleting,
  Deleted,
}

// TODO(protobufs): generate
export enum EChatMsgSendError {
  None,
  Generic,
  NotFriends,
  NoChatPermissionInGroup,
  RateLimitExceeded,
}

// TODO(protobufs): generate
export enum EChatRoomServerMessage {
  k_EChatRoomServerMsg_Invalid,
  k_EChatRoomServerMsg_RenameChatRoom,
  k_EChatRoomServerMsg_Joined,
  k_EChatRoomServerMsg_Parted,
  k_EChatRoomServerMsg_Kicked,
  k_EChatRoomServerMsg_Invited,
  k_EChatRoomServerMsg_InviteDismissed,
  k_EChatRoomServerMsg_ChatRoomTaglineChanged,
  k_EChatRoomServerMsg_ChatRoomAvatarChanged,
  k_EChatRoomServerMsg_AppCustom,
}

// TODO(protobufs): generate
export enum EChatWindowState {
  Unopened,
  Hidden,
  Visible,
  FocusedIdle,
  FocusedActive,
}

// TODO(protobufs): generate
export enum EFileUploadState {
  None,
  FileReady,
  InProgress,
  Error,
  Error_ImageTooLarge,
  Error_FileTypeNotSupported,
  Completed,
}

interface Reaction_t {
  eReactionType: EMessageReactionType;
  strReaction: string;
  cReactors: number;
  bUserReacted: boolean;
}

export declare class CChatMessageBlock {
  m_bMessageBlockIsOnlyEmotes: boolean;
  m_nextBlock: this;
  m_rgMessages: ChatMsg_t[];
  m_rtMidnightBeforeBlock: number;

  /**
   * Appends the provided message to this block.
   *
   * @param msg The message to append.
   */
  AppendMessage(msg: ChatMsg_t): void;

  BCanAccumulateMessage(msg: ChatMsg_t): boolean;
  BIsInvite(): boolean;
  BIsLocalMsg(): boolean;
  BIsServerMsg(): boolean;
  CreateVirtualSplitOnTimestamp(ts: number): CChatMessageBlock[];
  GetRTimeFirstMessage(): number;
  GetRTimeLastMessage(): number;
  GetRTimeMidnightBeforeBlock(): number;
  GetRTimeMidnightBeforeNextBlock(): number;
  RemoveLocalMessage(msg: ChatMsg_t): boolean;
  SetNextBlock(block: CChatMessageBlock): void;
  UniqueKey(): number;
}

export declare class CChatMessageBlockList {
  m_iIndexLastTimePassesGap: number | undefined;
  m_rgMessageBlocks: CChatMessageBlock[];

  /**
   * Appends the provided message to this block.
   *
   * @param msg The message to append.
   */
  AppendMessage(msg: ChatMsg_t): void;

  /**
   * Same as {@link AppendMessage}.
   */
  AppendNewMessage(msg: ChatMsg_t): void;

  /**
   * Reconstructs the message blocks with the provided one.
   *
   * @param msgs Messages to use for the new block(s).
   */
  BuildMessageBlocks(msgs: ChatMsg_t[]): void;

  /**
   * Removes every single message.
   */
  Clear(): void;

  RemoveLocalMessage(msg: ChatMsg_t): boolean;

  RemoveOldestMessages(param0: number): CChatMessageBlock[] | null;
}

type ChatRoomEffect_t =
  | 'balloons'
  | 'confetti'
  | 'firework'
  | 'goldfetti'
  | 'lny2020_confetti'
  | 'lny2020_firework'
  | 'lny2020_lanterns'
  | 'snow'
  | 'snowball';

interface ChatRoomEffectSettings {
  /** Button loc token */
  buttonToken: string;
  locToken: string;
  /** React element render function */
  render(...args: any[]): ReactNode;
  /** React element render function */
  renderButton(): ReactNode;
  /** React element render function */
  renderEffectIcon(): ReactNode;
  timeout: number;
}

declare class ChatRoomEffectInstance {
  name: string;
  timestamp: number;
  expires: number;
  settings: ChatRoomEffectSettings;

  Queue(): string;
  bIsExpired(): boolean;
  bIsActive(): boolean;
  iTimeToExpiry(): number;
  render(): ReactNode | null;
}

// unconfirmed, just typed from the js lol
export declare class CChatRoomEffectManager {
  m_effectSettings: {
    [effect in ChatRoomEffect_t]: ChatRoomEffectSettings;
  };
  m_mapRoomEffectQueue: {
    [effect in ChatRoomEffect_t]: ChatRoomEffectInstance[];
  };
  m_rgRunningEffects: ChatRoomEffectInstance[];

  ActivateRoomEffect(instance: ChatRoomEffectInstance): void;
  AddRoomEffect(name: ChatRoomEffect_t): void;
  BIsQueueFull(name: ChatRoomEffect_t): boolean;
  QueueRoomEffect(name: ChatRoomEffect_t): void;
  UpdateRunningRoomEffects(): void;
}

interface SendQueueEntry_t {
  /**
   * The error if the message failed to send.
   */
  eError?: EChatMsgSendError;

  id?: string;

  /**
   * Message contents.
   */
  message: string;

  /**
   * UNIX timestamp when this message got sent.
   */
  timestamp: number;
}

export declare class CPerChatSendQueue {
  m_id: string;
  m_queue: SendQueueEntry_t[];

  Add(msg: string): string;
  GetItemID(item: SendQueueEntry_t): string;
  GetItemIndex(item: SendQueueEntry_t): number;
  RemoveItem(index: number): void;
  SetItemFailed(item: SendQueueEntry_t, error: number): void;
  UpdateStoredQueue(): void;

  get queued_messages(): SendQueueEntry_t[];
}

interface FileUploadInfo_t {
  bSpoiler: boolean;
}

interface FileUploadProps_t {
  dataURL: string | undefined;
  displayFileName: string | undefined;
  eUploadState: EFileUploadState;
  exportFn: ((...args: any[]) => any) | undefined;
  file: File | null | undefined;
  // TODO: FileUploadInfo_t ?
  fileInfo: any;
  hmac: string | undefined;
  imageHeight: number;
  imageWidth: number;
  sha1: string | undefined;
  strErrorDescription: string | undefined;
  timestamp: number;
  uploadFileName: string | undefined;
  uploadInfo: FileUploadInfo_t;
  uploadProgress: number;
}

interface idk {
  displayFilename?: string;
  info: FileUploadInfo_t;
  onComplete?: (result: EResult, size: number) => any;
  processor?: any;
  unAssociatedAppID?: number;
}

interface CFileUploadManager {
  m_Callbacks: CChat;
  m_fileUploadProps: FileUploadProps_t;
  m_onComplete: ((result: EResult, size: number) => any) | undefined;

  BeginFileUpload(uploadInfo: FileUploadInfo_t): Promise<any>;
  ClearFileUploadError(): void;
  CommitFileUpload(bSuccess: boolean, ugcid: any): Promise<any>;
  DoFileUpload(e: any): Promise<any>;
  LogFileUploadMessage(msg: string): void;
  Reset(): void;
  RetryFileUpload(): Promise<any>;
  SetFileToUpload(fileOrExportFn: File | ((...args: any[]) => any) | null): void;
  SetImageFileToUpload(file: File | null, t: idk): any;
  SetOtherFileToUpload(file: File | null, t: idk): any;
  SetUploadFileError(state: EFileUploadState, description: string): void;
  StartFileExportToUpload(file: File | null, t: idk): any;

  get file(): File | null;
  get file_upload_data_url(): string | null;
  get file_upload_props(): FileUploadProps_t;
}

declare class CChatTabSet {
  m_activeTab: CChatView;
  m_browserContext: BrowserContext;
  m_id: number;
  m_vecTabs: CChatView[];

  /**
   * Focuses the next (or first tab if current is last) tab in the list.
   */
  ActivateNextTab(): void;

  /**
   * Focuses the previous (or last tab if current is first) tab in the list.
   */
  ActivatePreviousTab(): void;

  /**
   * Focuses the provided tab.
   */
  ActivateTab(tab: CChatView): void;

  /**
   * Adds a provided tab. Won't be added if already open.
   */
  AddTab(tab: CChatView): void;

  /**
   * @returns `true` if the provided tab exists.
   */
  BHasTab(tab: CChatView): boolean;

  /**
   * Closes all tabs (the chat window remains open).
   */
  CloseAllTabs(): void;

  /**
   * Releases the provided tab from memory (not closing it).
   */
  DeactivateTab(tab: CChatView): void;

  /**
   * Focuses the chat window.
   */
  Focus(): void;

  FocusActiveTab(): void;

  GetBrowserContext(): BrowserContext;

  /**
   * @returns the chat tab from its ID or `null` if not found.
   */
  GetTabByUniqueID(id: string): CChatView | null;

  // TODO: maybe one of them is CChat why am i confused about this
  GetTabForChat(e: CChatView): CChatView | null;

  GetTabSetIdentifier(): string;

  /**
   * @returns the localized chat window title.
   */
  GetTitle(): string;

  /**
   * Moves `tabA` after `tabB`.
   */
  MoveTabAfter(tabA: CChatView, tabB: CChatView): void;

  /**
   * Moves a tab to a provided index, e.g. `0` will make it first, etc.
   *
   * @param tab The tab to move.
   * @param index Zero-indexed place to move the tab to.
   */
  MoveTabToIndex(tab: CChatView, index: number): void;

  OnPopupClosed(): void;

  OnWindowFocus(): void;

  /**
   * Removes a provided tab.
   *
   * @returns `true` on success.
   */
  RemoveTab(tab: CChatView): boolean;

  Serialize(): {
    active_tab: string;
    tabs: string[];
  };

  get activeTab(): CChatView;
  get is_popup_active(): boolean;
  get is_popup_focused(): boolean;
  get is_popup_visible(): boolean;
  get tabCount(): number;
  get tabs(): this['m_vecTabs'];
}

export interface CChatView {
  m_bScrolledToBottom: boolean;
  m_chat: CChat;
  m_clientHeight: number;
  m_clipToUpload: ClipSummary_t | undefined;
  m_fileUploadManager: CFileUploadManager;
  m_msLastActive: number;
  m_rgOnChatFrameChangedCallbacks: (() => void)[];
  m_rgOnChatRequestScrollBottomCallbacks: (() => void)[];
  m_scrollHeight: number;
  m_scrollTop: number;
  m_strTextEntry: string;
  m_tabset: CChatTabSet;
  m_textEntryChangeCallbacks: CCallbackList;
  m_textEntryFocusCallbacks: CCallbackList;

  AddOnChatFrameChangedCallback(callback: () => void): void;

  AddOnChatRequestScrollBottomCallback(callback: () => void): void;

  /**
   * Appends provided text to the text field.
   */
  AddPendingText(text: string): void;

  BIsInBrowserContext(browser: BrowserContext): boolean;

  /**
   * @returns `true` is voice chat is currently active.
   */
  BVoiceActive(): boolean;

  CheckActivationAndNotifyChat(): void;

  /**
   * Escapes BB code.
   */
  ConvertMessageToBBCode(msg: string): string;

  /**
   * Focuses the text field.
   */
  FocusTextInput(): void;

  GetChatView(): this;

  /**
   * @returns the chat's tab name.
   */
  GetTabName(): string;

  /**
   * @returns the chat's tab internal ID.
   */
  GetUniqueID(): string;

  /**
   * @returns the unread messages count.
   */
  GetUnreadMessageCount(): number;

  /**
   * @returns the chat tab's window visibility state.
   */
  GetVisibilityState(): EChatWindowState;

  InternalOnTabActivate(): void;

  /**
   * @returns `true` if this tab is a group chat.
   */
  IsChatRoom(): boolean;

  /**
   * @returns `true` if this tab is friend's DMs.
   */
  IsFriendChat(): boolean;

  IsTabForChat(chat: CChat): boolean;

  // lmao valve
  IsVoiceActive(): boolean;

  // #region events
  OnActivate(): void;
  OnChatFrameChanged(): void;
  OnDeactivate(): void;
  OnFocus(): void;
  OnScrollBottomRequest(): void;
  OnTabClosed(): void;
  OnTabDeactivate(): void;
  OnTabFocus(): void;
  OnViewClosed(): void;
  // #endregion

  RegisterForTextEntryFocus(callback: any): void;

  RegisterForTextUpdated(callback: any): void;

  RemoveOnChatFrameChangedCallback(callback: () => void): void;

  RemoveOnChatRequestScrollBottomCallback(callback: () => void): void;

  /**
   * Sends a chat message.
   *
   * @param msg The message to send.
   */
  SendChatMessage(msg: string): Promise<void>;

  SetClipToUpload(clip: ClipSummary_t): void;

  SetFileToUpload(file: File | null, t?: idk): void;

  StartFileExportToUpload(file: File | null, t?: idk): any;

  UploadFile(spoiler: boolean): Promise<void>;
}

export declare class ChatMsg_t {
  eAnimationState: EMsgAnimationState;
  eDeleteState: EChatMsgDeleteState;
  eServerMsgType: EChatRoomServerMessage | undefined;
  m_bNoUserContent: boolean | undefined;
  m_mentions: any | undefined;
  m_rgReactions: Reaction_t[];
  m_strSlashCommand: string | undefined;
  rtTimestamp: number;
  strMessageInternal: string;
  strServerMsgAppCustomLocalized: string | undefined;
  strServerMsgParam: string | undefined;
  unAccountID: number;
  unOrdinal: number;
  unServerMsgParamAccountID: number | undefined;

  BHasServerAcknowledged(): boolean;
  BIsInvite(): boolean;
  BIsLocalEcho(): boolean;
  BIsNewerThan(ts: number): boolean;
  BIsOlderThan(ts: number): boolean;
  BIsServerMessage(): boolean;
  GetSlashCommand(): string | null;
  HasUserContent(): boolean;
  UniqueKey(): number | string;
  UpdateReaction(
    eReactionType: EMessageReactionType,
    strReaction: string,
    cReactors: number,
    bUserReacted: boolean,
  ): Reaction_t;

  get Mentions(): any;
}

export declare class CChat {
  m_ChatMessageBlockList: CChatMessageBlockList;
  m_MessageSendQueue: CPerChatSendQueue;
  m_accountIDLastMessage: number | undefined;
  m_bChatLogsLoaded: boolean;
  m_bFriendIsTyping: boolean;
  m_bHasUnreadPriorityChatMessages: boolean;
  m_bMoreAvailable: boolean;
  m_bNeedsNonFriendWarning: boolean;
  m_bPrepended: boolean;
  m_bReceivedChatLogs: boolean;
  m_cUnreadChatMessages: number;
  m_chatRoomEffects: CChatRoomEffectManager;
  m_iClearFriendIsTypingInterval: number | undefined;
  m_msTimeActivated: number;
  m_nLoadingHistoryInProgressCount: number;
  m_oldestMessageOrdinal: number;
  m_oldestMessageTime: number;
  m_rgChatMessages: ChatMsg_t[];
  m_rgChatViews: CChatView[];
  m_rtFirstUnread: number;
  m_rtFirstUnreadChatMsg: number;
  m_rtLastAckedChatMsg: number;
  m_rtLastMessageReceived: number;
  m_rtLastServerAckedChatMsg: number;
  m_rtLastServerMessageReceived: number;
  m_setInflightClientMessageID: Set<string>;
  m_strLastMessage: string | undefined;
  m_tsLastSentTypingNotification: number | undefined;
  m_unAccountIDFriend: number;

  AckChatMsgOnServer(e: any): any;

  /**
   * @returns `true` if the chat partner is a friend and online.
   */
  BIsVoiceAllowed(): boolean;

  /**
   * @returns `true` is voice chat is currently active.
   */
  BVoiceActive(): boolean;

  CheckShouldNotify(e: any, t: any, r: any): any;
  ClearFriendIsTypingState(): any;
  GetBBCodeParser(): any;

  /**
   * @returns the last message's contents.
   */
  GetLastMessage(): string;

  GetMember(steamid3: number): CPlayer;
  GetMessageReactionReactors(e: any, t: any, r: any): any;
  GetMessagesFromResponse(e: any): any;
  GetMessagesFromTimeRange(e: any, t: any, r: any, i: any, a: any): any;
  GetShowNonFriendWarning(): any;

  /**
   * @returns a localized message why voice is not allowed, or `null` if it is.
   */
  GetVoiceNotAllowedReason(): string | null;

  // #region events
  OnFriendTypingNotification(): any;
  OnNewChatMsgAdded(e: any, t: any, r: any, n: any): any;
  OnReceivedNewMessage(e: any, t: any, r: any, n: any): any;
  OnTyping(): any;
  // #endregion

  PopulateCommitFileUploadFormData(e: FormData, t: FileUploadInfo_t, r: idk): any;

  /**
   * Sends a message to this chat.
   *
   * @param content The message contents to send.
   */
  SendChatMessage(content: string): Promise<void>;

  SendChatMessageInternal(content: string): Promise<EChatMsgSendError>;

  SetShowNonFriendWarning(value: boolean): void;

  /**
   * If this chat's voice chat is not active, opens voice chat for this chat,
   * otherwise joins said voice chat.
   *
   * @returns ...true. Yeah, true.
   */
  ToggleVoiceChat(): true;

  UpdateMessageReaction(
    msg: ChatMsg_t,
    eType: EMessageReactionType,
    strReaction: string,
    bUserAdded: boolean,
  ): Promise<EResult>;

  ViewerNeedsApproval(requestid: number): void;

  get BIsPrepend(): boolean;
  get accountid_last_message(): number | undefined;
  get accountid_partner(): number;
  get chat_message_blocks(): CChatMessageBlockList;
  get chat_messages(): ChatMsg_t[];
  get chat_partner(): CPlayer;
  get first_unread_msg_time(): number;
  get has_unread_priority_messages(): boolean;
  get is_blocked_friend(): boolean;
  get is_friend_typing(): boolean;
  get last_voice_participation_time(): number;
  get name(): string;
  get self(): CPlayer;
  get time_last_ack(): number;
  get time_last_message(): number;
  get unique_id(): string;
  get unread_message_count(): number;
}
