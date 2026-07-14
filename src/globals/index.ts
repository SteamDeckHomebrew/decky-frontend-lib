import type { SteamClient } from "./steam-client";
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
} from "./stores";

declare global {
  const App: CApp;
  const appStore: CAppStore;
  const appDetailsStore: CAppDetailsStore;
  const badgeStore: CBadgeStore;
  const collectionStore: CCollectionStore;
  const ConsoleStore: CConsoleStore;
  const FocusNavController: CFocusNavController;
  const friendStore: CFriendStore;
  const g_GRS: CGameRecordingStore;
  const g_PopupManager: CPopupManager;
  const LocalizationManager: CLocalizationManager;
  const MainWindowBrowserManager: CMainWindowBrowserManager;
  const NotificationStore: CNotificationStore;
  const securitystore: CSecurityStore;
  const settingsStore: CSettingsStore;
  const SteamClient: SteamClient;
  const SteamUIStore: CSteamUIStore;
  const uiStore: CLibraryUIStore;
  const urlStore: CURLStore;
}
