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
    var App: CApp;
    var appStore: CAppStore;
    var appDetailsStore: CAppDetailsStore;
    var badgeStore: CBadgeStore;
    var collectionStore: CCollectionStore;
    var ConsoleStore: CConsoleStore;
    var FocusNavController: CFocusNavController;
    var friendStore: CFriendStore;
    var g_GRS: CGameRecordingStore;
    var g_PopupManager: CPopupManager;
    var LocalizationManager: CLocalizationManager;
    var MainWindowBrowserManager: CMainWindowBrowserManager;
    var NotificationStore: CNotificationStore;
    var securitystore: CSecurityStore;
    var settingsStore: CSettingsStore;
    var SteamClient: SteamClient;
    var SteamUIStore: CSteamUIStore;
    var uiStore: CLibraryUIStore;
    var urlStore: CURLStore;
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

export * from "./shared";
export * from "./steam-client";
export * from "./stores";