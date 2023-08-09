export * from './Button';
export * from './ButtonItem';
export * from './Carousel';
export * from './ControlsList';
export * from './Dialog';
export * from './DialogCheckbox';
export * from './Dropdown';
export * from './Field';
export * from './Focusable';
export * from './FocusRing';
export * from './FooterLegend';
export * from './Marquee';
export * from './Menu';
export * from './Modal';
export * from './Panel';
export * from './ProgressBar';
export * from './Router';
export * from './SidebarNavigation';
export * from './SliderField';
export * from './Spinner';
export * from './static-classes';
export * from './SteamSpinner';
export * from './Tabs';
export * from './TextField';
export * from './Toggle';
export * from './ToggleField';
export * from './SteamClient';
export * from './Scroll';

import { AppDetails, LogoPosition, SteamAppOverview, SteamClient } from './SteamClient';

declare global {
  var SteamClient: SteamClient;

  interface Window {
    LocalizationManager: {
      m_mapTokens: Map<string, string>;
      m_mapFallbackTokens: Map<string, string>;
      m_rgLocalesToUse: string[];
    };
    App: {
      m_CurrentUser: {
        bIsLimited: boolean;
        bIsOfflineMode: boolean;
        bSupportAlertActive: boolean;
        bCanInviteFriends: boolean;
        NotificationCounts: {
          comments: number;
          inventory_items: number;
          invites: number;
          gifts: number;
          offline_messages: number;
          trade_offers: number;
          async_game_updates: number;
          moderator_messages: number;
          help_request_replies: number;
        };
        strAccountBalance: string;
        strAccountName: string;
        strSteamID: string;
      };
    };
    appStore: {
      GetAppOverviewByAppID: (appId: number) => SteamAppOverview | null;
      GetCustomVerticalCapsuleURLs: (app: SteamAppOverview) => string[];
      GetCustomLandcapeImageURLs: (app: SteamAppOverview) => string[];
      GetCustomHeroImageURLs: (app: SteamAppOverview) => string[];
      GetCustomLogoImageURLs: (app: SteamAppOverview) => string[];
      GetLandscapeImageURLForApp: (app: SteamAppOverview) => string;
      GetVerticalCapsuleURLForApp: (app: SteamAppOverview) => string;
      GetCachedLandscapeImageURLForApp: (app: SteamAppOverview) => string;
      GetCachedVerticalImageURLForApp: (app: SteamAppOverview) => string;
      GetPregeneratedVerticalCapsuleForApp: (app: SteamAppOverview) => string;
      GetIconURLForApp: (app: SteamAppOverview) => string;
    };
    appDetailsStore: {
      GetAppDetails: (appId: number) => AppDetails | null;
      GetCustomLogoPosition: (app: SteamAppOverview) => LogoPosition | null;
      SaveCustomLogoPosition: (app: SteamAppOverview, logoPositions: LogoPosition) => any;
    };
  }
}
