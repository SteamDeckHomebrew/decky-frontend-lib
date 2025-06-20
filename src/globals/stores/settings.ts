import type { CMInterface } from '../shared/cm';
import type { SubscribableValue } from '../shared/interfaces';
import type { SteamLocalStorage } from '../shared/storage';

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

export interface BatteryPreferences {
  bShowBatteryPercentage: boolean;
}

export interface CommunityPreferences {
  bParenthesizeNicknames: boolean;
  bTextFilterIgnoreFriends: boolean;
  content_descriptor_preferences: {
    content_descriptors_to_exclude: {
      content_descriptorid: number;
      timestamp_added: number;
    }[];
    eTextFilterSetting: ETextFilterSetting;
  };
}

export interface StorePreferences {
  content_descriptor_preferences: {
    content_descriptors_to_exclude: any[];
  };
  eReviewScorePreference: EUserReviewScorePreference;
  provide_deck_feedback: EProvideDeckFeedbackPreference;
}

export interface SettingsStore {
  m_BatteryPreferences: SubscribableValue<BatteryPreferences>;
  m_CMInterface: CMInterface;
  m_ClientSettings: any; // CMsgClientSettings
  m_CommunityPreferences: CommunityPreferences;
  m_FriendSettings: any; // FriendSettingsChange
  m_MonitorInfo: any | undefined; // CMsgMonitorInfo
  m_NotificationSettings: {
    notification_targets: number;
    /**
     * @todo enum
     */
    notification_type: number;
  }[];
  m_Settings: any; // SteamSettings
  m_StorePreferences: StorePreferences;
  m_bSteamIsInTournamentMode: boolean;
  m_bWindowed: boolean;
  m_localStorage: SteamLocalStorage;
  m_setDeferredSettings: Set<any>;
  m_strTimeZoneID: SubscribableValue<string>;

  /**
   * @returns `false` if connected to Steam, `true` otherwise.
   */
  BIsConnectedToSteam(): boolean;
  CommunityPreferencesToMessage(prefs: CommunityPreferences): any; // ProtoBuf message
  GetBatteryPreferences(): BatteryPreferences;
  GetClientSetting(setting: string): any;
  Init(e: any): any;
  InitDefaultCommunityContentDescriptorPreferences(): any;
  InitDefaultStoreContentDescriptorPreferences(): any;
  IsDeferred(value: any): boolean;
  IsSteamInTournamentMode(): boolean;
  MergeCommunityPreferences(e: any, t: any): any;
  MergeNotificationPreferences(e: any): any;
  MergeStorePreferences(e: any, t: any): any;
  RefreshMonitorInfo(): void;
  SetBatteryPreferences(prefs: BatteryPreferences): void;
  SetCommunityPreferences(prefs: CommunityPreferences): void;
  SetDeferred(value: any): void;
  SetStorePreferences(prefs: StorePreferences): void;
  SetWindowedMode(value: boolean): void;
  ToggleNotificationPreference(e: any, t: any): void;
  UpdateCommunityPreference(e: any, t: any): any;
  UpdateCommunityPreferences(e: any): any;
  UpdateFriendSetting(e: any, t: any): any;
  UpdateFriendSettings(e: any): any;
}
