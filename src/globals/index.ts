import type { SteamClient } from './steam-client';
import type {
  CApp,
  CAppDetailsStore,
  CAppStore,
  CBadgeStore,
  CCollectionStore,
  CConsoleStore,
  CFocusNavController,
  CFriendStore,
  CGameRecordingStore,
  CLibraryUIStore,
  CLocalizationManager,
  CMainWindowBrowserManager,
  CNotificationStore,
  CPopupManager,
  CSecurityStore,
  CSettingsStore,
  CSteamUIStore,
  CURLStore,
} from './stores';

declare global {
  interface Window {
    App: CApp;
    appStore: CAppStore;
    appDetailsStore: CAppDetailsStore;
    badgeStore: CBadgeStore;
    collectionStore: CCollectionStore;
    ConsoleStore: CConsoleStore;
    FocusNavController: CFocusNavController;
    friendStore: CFriendStore;
    g_GRS: CGameRecordingStore;
    g_PopupManager: CPopupManager;
    LocalizationManager: CLocalizationManager;
    MainWindowBrowserManager: CMainWindowBrowserManager;
    NotificationStore: CNotificationStore;
    securitystore: CSecurityStore;
    settingsStore: CSettingsStore;
    SteamClient: SteamClient;
    SteamUIStore: CSteamUIStore;
    uiStore: CLibraryUIStore;
    urlStore: CURLStore;
  }
}
