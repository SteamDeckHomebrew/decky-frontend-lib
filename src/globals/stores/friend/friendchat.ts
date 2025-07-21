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
  m_iIndexLastTimePassesGap: any | undefined;
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

export declare class ChatMsg_t {
  eAnimationState: EMsgAnimationState;
  eDeleteState: EChatMsgDeleteState;
  eServerMsgType: EChatRoomServerMessage | undefined;
  m_bNoUserContent: boolean | undefined;
  m_mentions: any | undefined;
  m_rgReactions: any[];
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
  ): {
    eReactionType: EMessageReactionType;
    strReaction: string;
    cReactors: number;
    bUserReacted: boolean;
  } | null;

  get Mentions(): any;
}

export declare class CChat {
  m_ChatMessageBlockList: CChatMessageBlockList;
  m_ChatStore: object;
  m_FriendStore: object;
  m_MessageSendQueue: any;
  m_accountIDLastMessage: any | undefined;
  m_bChatLogsLoaded: boolean;
  m_bFriendIsTyping: boolean;
  m_bHasUnreadPriorityChatMessages: boolean;
  m_bMoreAvailable: boolean;
  m_bNeedsNonFriendWarning: boolean;
  m_bPrepended: boolean;
  m_bReceivedChatLogs: boolean;
  m_cUnreadChatMessages: number;
  m_chatRoomEffects: any;
  m_iClearFriendIsTypingInterval: any | undefined;
  m_msTimeActivated: number;
  m_nLoadingHistoryInProgressCount: number;
  m_oldestMessageOrdinal: number;
  m_oldestMessageTime: number;
  m_rgChatMessages: ChatMsg_t[];
  m_rgChatViews: any[];
  m_rtFirstUnread: number;
  m_rtFirstUnreadChatMsg: number;
  m_rtLastAckedChatMsg: number;
  m_rtLastMessageReceived: number;
  m_rtLastServerAckedChatMsg: number;
  m_rtLastServerMessageReceived: number;
  m_setInflightClientMessageID: Set<string>;
  m_strLastMessage: any | undefined;
  m_tsLastSentTypingNotification: any | undefined;
  m_unAccountIDFriend: number;

  AckChatMsgOnServer(e);
  BIsVoiceAllowed();
  BVoiceActive();
  CheckShouldNotify(e, t, r);
  ClearFriendIsTypingState();
  GetBBCodeParser();
  GetLastMessage();
  GetMember(e);
  GetMessageReactionReactors(e, t, r);
  GetMessagesFromResponse(e);
  GetMessagesFromTimeRange(e, t, r, i, a);
  GetShowNonFriendWarning();
  GetVoiceNotAllowedReason();
  OnFriendTypingNotification();
  OnNewChatMsgAdded(e, t, r, n);
  OnReceivedNewMessage(e, t, r, n);
  OnTyping();
  PopulateCommitFileUploadFormData(e, t, r);
  SendChatMessageInternal(e): Promise<any>;
  SetShowNonFriendWarning(e);
  ToggleVoiceChat();
  UpdateMessageReaction(e, t, r, i): Promise<any>;
  ViewerNeedsApproval(e);

  get BIsPrepend(): boolean;
  get ChatStore(): any;
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
