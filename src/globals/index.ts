import type { LocalizationManager, MainWindowBrowserManager, PopupManager } from './managers';
import type { SteamClient } from './steam-client';
import type {
  App,
  CAppDetailsStore,
  CAppStore,
  CCollectionStore,
  ConsoleStore,
  NotificationStore,
  ServerBrowserStore,
  SettingsStore,
  SteamUIStore,
} from './stores';

declare global {
  interface Window {
    App: App;
    appStore: CAppStore;
    appDetailsStore: CAppDetailsStore;
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
