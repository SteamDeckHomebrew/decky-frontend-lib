import type { ESteamUISound } from '../shared/enums';
import type { CCallbackList } from '../shared/interfaces';
import type { EClientNotificationType } from '../steam-client/Notifications';
import type { EParentalFeature } from '../steam-client/Parental';
import type { EACState } from '../steam-client/system';
import type { ReactNode } from 'react';

// TODO(protobufs): generate
export enum EBroadcastPermission {
  k_EBroadcastPermissionDisabled,
  k_EBroadcastPermissionFriendsApprove,
  k_EBroadcastPermissionFriendsAllowed,
  k_EBroadcastPermissionPublic,
  k_EBroadcastPermissionSubscribers,
}

export enum ESteamNotificationSource {
  Client,
  Server,
}

// that's what I *guess* it is, no idea what this is
export enum ESteamNotificationAction {
  New,
  Update,
  Remove,
}

interface SteamNotificationData {
  bCritical: boolean;
  body: string;
  /**
   * In ms.
   */
  duration: number;
  logo: ReactNode;
  onClick: () => void;
  // TODO: apparently can be a function too
  playSound: boolean;
  showNewIndicator: boolean;
  showToast: boolean;
  // TODO: apparently can be a function too
  sound: ESteamUISound;
  timestamp: Date;
  title: string;
}

export interface SteamNotification {
  bNewIndicator: boolean;
  data: SteamNotificationData;
  eSource: ESteamNotificationSource;
  eType: EClientNotificationType;
  nToastDurationMS: number;
  notificationID: number;
  /**
   * UNIX timestamp.
   */
  rtCreated: number;
}

export interface TrayNotification {
  eType: EClientNotificationType;
  notifications: SteamNotification[];
}

export interface NotificationTarget {
  eFeature: EParentalFeature;
  fnNotificationResolved: () => void;
  fnShowModal: () => void;
  fnTray: (target: NotificationTarget, notificationsInTray: TrayNotification[]) => void;
  nRemoveFromTraySec: number;
  toastDurationMS: number;
  type: EClientNotificationType;
}

/**
 * All the functions starting with `Test` may be used to test notifications.
 */
export interface CNotificationStore {
  m_LastSystemUpdateNotification: Pick<SteamNotification, 'eType' | 'rtCreated'> | null;
  m_bCheckBatteryAfterResume: boolean;
  m_bShowClientItemAnnouncementToasts: boolean;
  m_bShowedHighBatteryTempNotification: boolean;
  m_bShowedLowBatteryTempNotification: boolean;
  m_bShowedRefreshLogin: boolean;
  m_bTestNotifications: boolean;
  m_cbkCurrentToast: CCallbackList<[TrayNotification[]]>;
  m_cbkNotificationTray: CCallbackList<[TrayNotification[]]>;
  m_hPendingToastTimer: number;
  m_hTrayRemoveTimer: number;
  m_iLastBatteryLevelNotification: number;
  m_mapAppOverlayToasts: Map<number, SteamNotification[]>;
  // second map:
  // {"function(){return e(this,...t)}_function(){return e(this,...t)}" => 1760072931}
  // ?????
  m_mapToastLastShown: Map<number, Map<string, number>>;
  m_nNextTestNotificationID: number;
  m_nUnviewedNotifications: number;
  m_rgContextsRenderingToasts: number[];
  m_rgNotificationToasts: SteamNotification[];
  m_rgNotificationTray: TrayNotification[];
  m_rgPendingToasts: SteamNotification[];
  m_rtNextTrayRemove: number;
  m_setContextsRenderingToasts: Set<any>;

  AddAppOverlayNotification(
    appId: number,
    notificationId: number,
    type: EClientNotificationType,
    param3: any, // data: i.proto.deserializeBinary(o)
    notificationResolvedCallback: () => void,
  ): void;
  AddBroadcastAvailableToWatch(appId: number, permission: EBroadcastPermission): void;
  AddOverlaySplashScreen(appId: number): void;
  AddTimedTrialRemaining(
    appid: number,
    icon: string,
    offline: boolean,
    allowedSeconds: number,
    playedSeconds?: number,
  ): void;
  AppOverlayRunning(appId: number, value: boolean): void;
  BAnyContextRenderingToasts(): boolean;
  BAnyToastDisplayAlone(toasts: SteamNotification[]): boolean;
  BContextRenderingToasts(e: any): boolean;
  BIsToastRateLimited(e: number, t: any, r: number): boolean;

  /**
   * @returns `true` if you are currently in a game.
   */
  BIsUserInGame(): boolean;
  BNextToastDisplayAlone(appId: number): boolean;
  BShowToast(e: any, t: any): boolean;
  BSkipSystemUpdateNotification(type: EClientNotificationType): boolean;
  ChooseSound(data: SteamNotificationData, t: any): any | null;
  ClearAllToastNotifications(): void;
  ClearRemoveFromTrayTimer(): void;
  // wtf is this
  Dev_SendTestNotifications(): void;
  DispatchNextToast(): void;
  DoScreenshotNotification(screenshotHandle: number, description: string): void;
  ExpireToast(toast: SteamNotification): void;
  GetCurrentAppOverlayNotification(appId: number): SteamNotification;
  GetCurrentToastNotification(): SteamNotification | null;
  GetNotificationTargets(): Record<EClientNotificationType, SteamNotification>;
  GetNotificationsInTray(): [CNotificationStore['m_rgNotificationTray'], CNotificationStore['m_cbkNotificationTray']];
  IncomingVoiceChat(steamId: number, show: boolean): void;
  LoadServerToastRequiredData(steamId: number): boolean;
  MarkNotificationRead(notificationId: number): void;
  NotifyClaimSteamDeckRewards(): void;
  NotifyLowDiskSpace(folderIndex: number): void;
  NotifyTimerExpired(appId: number): void;
  OnBatteryLevelChange(flLevel: number, eACState: EACState, bHasBattery: boolean): void;
  /**
   * @param temperature in Celsius
   */
  OnBatteryTemperatureChange(temperature: number): void;
  OnNewNotificationReceived(notification: SteamNotification): void;
  OnNotification(notificationIndex: number, type: EClientNotificationType, data: ArrayBuffer): void;
  OnNotificationUpdateReceived(toast: SteamNotification, action: ESteamNotificationAction): void;
  OnScreenshotStarted(): void;
  PendingLoginRefresh(showedRefreshLogin: boolean): void;
  PlayNotificationSound(toast: SteamNotification): void;
  PopNextToastNotification(appId: number): SteamNotification;
  ProcessNotification(
    target: NotificationTarget,
    notification: SteamNotification,
    action: ESteamNotificationAction,
  ): void;
  RemoveFromToastsWhere(callback: (toast: SteamNotification) => void): void;
  RemoveFromTrayWhere(callback: (toast: SteamNotification) => void): void;
  RemoveScreenshotNotification(screenshotHandle: number): void;
  RunDebugTestsWhenServicesReady(e: boolean): void;
  ScheduleRemoveFromTray(delaySeconds: number): void;
  SendPendingServerToasts(): void;
  SetContextRenderingToast(context: any, add: boolean): void;
  Viewed(): void;

  // #region Test functions
  TestAchievement(appId: number, showProgress: boolean): void;
  TestAsyncGame(appId: number): void;
  TestCloudSyncConflict(appId: number): void;
  TestCloudSyncFailure(appId: number): void;
  TestComment(): void;
  TestDownloadComplete(appId: number): void;
  TestFamilyInvite(steamId: number): void;
  TestFamilyPurchaseRequest(steamId: number): void;
  TestFamilyPurchaseRequestResponse(steamId: number): void;
  TestFamilySharing(): void;
  TestFriendIngame(gameName: string, steamId: number): void;
  TestFriendInvite(steamId: number): void;
  TestFriendInviteRollup(newInviteCount: number): void;
  TestFriendMessage(steamId: number, messageBody: string): void;
  TestFriendOnline(steamId: number): void;
  TestGRE(): void;
  TestGRUM(): void;
  TestGameRecordingInstantClip(): void;
  TestGeneralAnnouncement(): void;
  TestGift(steamId: number): void;
  TestGroupChatMention(steamId: number, messageBody: string): void;
  TestGroupChatMessage(steamId: number, messageBody: string): void;
  TestHardwareSurvey(): void;
  TestHelpRequest(): void;
  TestIncomingVoiceChat(): void;
  TestItemAnnouncement(steamId: number): Promise<void>;
  /**
   * @param percentage from 0 to 1
   */
  TestLowBatteryNotification(percentage: number): void;
  TestMajorSale(): void;
  TestModeratorMessage(): void;
  TestParentalFeatureRequest(steamId: number): void;
  TestParentalFeatureResponse(steamId: number): void;
  TestParentalPlaytimeRequest(steamId: number): void;
  TestParentalPlaytimeResponse(steamId: number): void;
  TestPlaytestInvite(): void;
  TestPlaytimeWarning(): void;
  TestReadControllerGuide(): void;
  TestRemoteClientConnection(): void;
  TestRemoteClientStartStream(): void;
  TestRequestedGameAdded(steamid64?: string): void;
  TestScreenshot(): void;
  TestSteamInputActionSetChanged(): void;
  TestStreamingClientConnection(): void;
  TestSystemUpdate(notificationType: 1 | 2): void;
  TestTradeOffer(): void;
  TestTradeReversal(): void;
  TestUnsupportedDock(): void;
  TestWishlist(appId: number): void;
  // #endregion
}
