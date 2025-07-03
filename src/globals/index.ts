import type { LocalizationManager, MainWindowBrowserManager, PopupManager } from './managers';
import type { SteamClient } from './steam-client';
import type { AppDetails, LogoPosition, SteamAppOverview } from './steam-client/App';
import type { App, ConsoleStore, NotificationStore, ServerBrowserStore, SettingsStore, SteamUIStore } from './stores';
import type { CCollectionStore } from './stores/collection';

interface AppData {
  details: AppDetails;
  // more
}

interface AppStoreAppOverview extends SteamAppOverview {
  m_setStoreCategories: Set<number>;
  m_setStoreTags: Set<number>;
  m_strPerClientData: Set<any> | undefined;
  m_strAssociations: Set<any> | undefined;

  BIsModOrShortcut: () => boolean;
  BIsShortcut: () => boolean;
}

declare global {
  interface Window {
    App: App;
    appStore: {
      GetAppOverviewByAppID: (appId: number) => SteamAppOverview | null;
      GetCustomVerticalCapsuleURLs: (app: AppStoreAppOverview) => string[];
      GetCustomLandcapeImageURLs: (app: AppStoreAppOverview) => string[];
      GetCustomHeroImageURLs: (app: AppStoreAppOverview) => string[];
      GetCustomLogoImageURLs: (app: AppStoreAppOverview) => string[];
      GetLandscapeImageURLForApp: (app: AppStoreAppOverview) => string;
      GetVerticalCapsuleURLForApp: (app: AppStoreAppOverview) => string;
      GetCachedLandscapeImageURLForApp: (app: AppStoreAppOverview) => string;
      GetCachedVerticalImageURLForApp: (app: AppStoreAppOverview) => string;
      GetPregeneratedVerticalCapsuleForApp: (app: AppStoreAppOverview) => string;
      GetIconURLForApp: (app: AppStoreAppOverview) => string;
    };
    appDetailsStore: {
      GetAppData: (appId: number) => AppData | null;
      GetAppDetails: (appId: number) => AppDetails | null;
      GetCustomLogoPosition: (app: AppStoreAppOverview) => LogoPosition | null;
      SaveCustomLogoPosition: (app: AppStoreAppOverview, logoPositions: LogoPosition) => any;
    };
    collectionStore: CCollectionStore;
    ConsoleStore: ConsoleStore;
    g_PopupManager: PopupManager;
    LocalizationManager: LocalizationManager;
    MainWindowBrowserManager: MainWindowBrowserManager;
    NotificationStore: NotificationStore;
    securitystore: {
      IsLockScreenActive: () => boolean;
    };
    serverBrowserStore: ServerBrowserStore;
    settingsStore: SettingsStore;
    SteamClient: SteamClient;
    SteamUIStore: SteamUIStore;
  }
}
