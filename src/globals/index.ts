import type { CFocusNavController, LocalizationManager, MainWindowBrowserManager, PopupManager } from './managers';
import type { SteamClient } from './steam-client';
import type {
  App,
  CAppDetailsStore,
  CAppStore,
  CBadgeStore,
  CCollectionStore,
  CFriendStore,
  CGameRecordingStore,
  ConsoleStore,
  CSecurityStore,
  NotificationStore,
  SettingsStore,
  SteamUIStore,
} from './stores';

declare global {
  interface Window {
    App: App;
    appStore: CAppStore;
    appDetailsStore: CAppDetailsStore;
    badgeStore: CBadgeStore;
    collectionStore: CCollectionStore;
    ConsoleStore: ConsoleStore;
    FocusNavController: CFocusNavController;
    friendStore: CFriendStore;
    g_GRS: CGameRecordingStore;
    g_PopupManager: PopupManager;
    LocalizationManager: LocalizationManager;
    MainWindowBrowserManager: MainWindowBrowserManager;
    NotificationStore: NotificationStore;
    securitystore: CSecurityStore;
    settingsStore: SettingsStore;
    SteamClient: SteamClient;
    SteamUIStore: SteamUIStore;
  }
}
