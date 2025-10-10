import type { CMInterface } from '../shared/cm';
import type { SubscribableValue } from '../shared/interfaces';
import type { CUserLocalStorage } from '../shared/storage';
import type { FriendSettingsChange } from '../steam-client/FriendSettings';
import type { EClientNotificationType } from '../steam-client/Notifications';
import type { MsgClientSettings, MsgMonitorInfo, SteamSettings } from '../steam-client/Settings';

export enum ETextFilterSetting {
  SteamLabOptedOut,
  Enabled,
  EnabledAllowProfanity,
  Disabled,
}

export enum EUserReviewScorePreference {
  Unset,
  IncludeAll,
  ExcludeBombs,
}

export enum EProvideDeckFeedbackPreference {
  Unset,
  Yes,
  No,
}

/**
 * @see https://github.com/SteamDatabase/SteamTracking/blob/master/Protobufs/steammessages_base.proto#L340
 */
interface UserContentDescriptorPreferences {
  content_descriptors_to_exclude: {
    content_descriptorid: number;
    timestamp_added: number;
  }[];
}

export interface BatteryPreferences {
  bShowBatteryPercentage: boolean;
}

export interface CommunityPreferences {
  bParenthesizeNicknames: boolean;
  bTextFilterIgnoreFriends: boolean;
  content_descriptor_preferences: UserContentDescriptorPreferences & {
    eTextFilterSetting: ETextFilterSetting;
  };
}

export interface StorePreferences {
  content_descriptor_preferences: UserContentDescriptorPreferences;
  eReviewScorePreference: EUserReviewScorePreference;
  provide_deck_feedback: EProvideDeckFeedbackPreference;
}

export interface SettingsStore {
  m_BatteryPreferences: SubscribableValue<BatteryPreferences>;
  m_CMInterface: CMInterface;
  m_ClientSettings: MsgClientSettings;
  m_CommunityPreferences: CommunityPreferences;
  m_FriendSettings: FriendSettingsChange;
  m_MonitorInfo: MsgMonitorInfo | undefined;
  m_NotificationSettings: {
    notification_targets: number;
    notification_type: EClientNotificationType;
  }[];
  m_Settings: SteamSettings;
  m_StorePreferences: StorePreferences;
  m_bSteamIsInTournamentMode: boolean;
  m_bWindowed: boolean;
  m_localStorage: CUserLocalStorage;
  m_setDeferredSettings: Set<string>;
  m_strTimeZoneID: SubscribableValue<string>;

  /**
   * @returns `true` if connected to Steam.
   */
  BIsConnectedToSteam(): boolean;

  /**
   * @returns a ProtoBuf message.
   */
  CommunityPreferencesToMessage(value: CommunityPreferences): any;
  GetBatteryPreferences(): BatteryPreferences;

  /**
   * Gets a Steam client option as a `[value, setValue]` tuple.
   */
  GetClientSetting<K extends keyof MsgClientSettings, V = ReturnType<MsgClientSettings[K]>>(
    setting: K,
  ): [V, (value: V) => void];

  IsDeferred(value: string): boolean;
  IsSteamInTournamentMode(): boolean;
  // proto msgs
  MergeCommunityPreferences(e: any, t: any): void;
  // proto msgs
  MergeNotificationPreferences(e: any): void;
  // proto msgs
  MergeStorePreferences(e: any, t: any): void;

  /**
   * Updates monitor info with the current data.
   */
  RefreshMonitorInfo(): void;

  SetBatteryPreferences(value: BatteryPreferences): void;
  SetCommunityPreferences(value: CommunityPreferences): void;
  SetDeferred(value: string): void;
  SetStorePreferences(value: StorePreferences): void;

  /**
   * Sets windowed mode for BPM.
   */
  SetWindowedMode(value: boolean): void;

  ToggleNotificationPreference(e: any, t: any): void;
  UpdateCommunityPreference(e: any, t: any): any;
  UpdateCommunityPreferences(e: any): any;
  UpdateFriendSetting(e: any, t: any): any;
  UpdateFriendSettings(e: any): any;
  UpdateUserConfigObject(): void;
}
