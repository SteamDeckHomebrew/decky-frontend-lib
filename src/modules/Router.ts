import { sleep } from '../utils';
import {Export, findModuleExport} from "../webpack";
import {DisplayStatus} from "../deck-components/steam-client/App";

export enum SideMenu {
  None,
  Main,
  QuickAccess,
}

export enum QuickAccessTab {
  Notifications,
  RemotePlayTogetherControls,
  VoiceChat,
  Friends,
  Settings,
  Perf,
  Help,
  Music,
  Decky = 999,
}

export type AppOverview = {
  appid: string;
  display_name: string;
  display_status: DisplayStatus;
  sort_as: string;
};

export interface MenuStore {
  OpenSideMenu(sideMenu: SideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: QuickAccessTab): void;
  OpenMainMenu(): void;
}

export interface WindowRouter {
  BrowserWindow: Window;
  MenuStore: MenuStore;
  Navigate(path: string): void;
  NavigateToChat(): void;
  NavigateToSteamWeb(url: string): void;
  NavigateBack(): void;
}

export interface WindowStore {
  GamepadUIMainWindowInstance?: WindowRouter; // Current
  SteamUIWindows: WindowRouter[];
  OverlayWindows: WindowRouter[]; // Used by desktop GamepadUI
}

export interface Router {
  WindowStore?: WindowStore;
  CloseSideMenus(): void;
  Navigate(path: string): void;
  NavigateToAppProperties(): void;
  NavigateToExternalWeb(url: string): void;
  NavigateToInvites(): void;
  NavigateToChat(): void;
  NavigateToLibraryTab(): void;
  NavigateToLayoutPreview(e: unknown): void;
  OpenPowerMenu(unknown?: any): void;
  get RunningApps(): AppOverview[];
  get MainRunningApp(): AppOverview | undefined;
}

export const Router = findModuleExport((e: Export) => e.Navigate && e.NavigationManager) as Router;

export interface Navigation {
  Navigate(path: string): void;
  NavigateBack(): void;
  NavigateToAppProperties(): void;
  NavigateToExternalWeb(url: string): void;
  NavigateToInvites(): void;
  NavigateToChat(): void;
  NavigateToLibraryTab(): void;
  NavigateToLayoutPreview(e: unknown): void;
  NavigateToSteamWeb(url: string): void;
  OpenSideMenu(sideMenu: SideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: QuickAccessTab): void;
  OpenMainMenu(): void;
  OpenPowerMenu(unknown?: any): void;
  CloseSideMenus(): void;
}

export let Navigation = {} as Navigation;

try {
  (async () => {
    let InternalNavigators: any = {};
    if (!Router.NavigateToAppProperties || (Router as unknown as any).deckyShim) {
      function initInternalNavigators() {
        try {
          InternalNavigators = findModuleExport((e: Export) => e.GetNavigator && e.SetNavigator)?.GetNavigator();
        } catch (e) {
          console.error('[DFL:Router]: Failed to init internal navigators, trying again');
        }
      }
      initInternalNavigators();
      while (!InternalNavigators?.AppProperties) {
        console.log('[DFL:Router]: Trying to init internal navigators again');
        await sleep(2000);
        initInternalNavigators();
      }
    }
    const newNavigation = {
      Navigate: Router.Navigate?.bind(Router),
      NavigateBack: Router.WindowStore?.GamepadUIMainWindowInstance?.NavigateBack?.bind(
        Router.WindowStore.GamepadUIMainWindowInstance,
      ),
      NavigateToAppProperties: InternalNavigators?.AppProperties || Router.NavigateToAppProperties?.bind(Router),
      NavigateToExternalWeb: InternalNavigators?.ExternalWeb || Router.NavigateToExternalWeb?.bind(Router),
      NavigateToInvites: InternalNavigators?.Invites || Router.NavigateToInvites?.bind(Router),
      NavigateToChat: InternalNavigators?.Chat || Router.NavigateToChat?.bind(Router),
      NavigateToLibraryTab: InternalNavigators?.LibraryTab || Router.NavigateToLibraryTab?.bind(Router),
      NavigateToLayoutPreview: Router.NavigateToLayoutPreview?.bind(Router),
      NavigateToSteamWeb: Router.WindowStore?.GamepadUIMainWindowInstance?.NavigateToSteamWeb?.bind(
        Router.WindowStore.GamepadUIMainWindowInstance,
      ),
      OpenSideMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenSideMenu?.bind(
        Router.WindowStore.GamepadUIMainWindowInstance.MenuStore,
      ),
      OpenQuickAccessMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenQuickAccessMenu?.bind(
        Router.WindowStore.GamepadUIMainWindowInstance.MenuStore,
      ),
      OpenMainMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenMainMenu?.bind(
        Router.WindowStore.GamepadUIMainWindowInstance.MenuStore,
      ),
      CloseSideMenus: Router.CloseSideMenus?.bind(Router),
      OpenPowerMenu: Router.OpenPowerMenu?.bind(Router),
    } as Navigation;

    Object.assign(Navigation, newNavigation);
  })();
} catch (e) {
  console.error('[DFL:Router]: Error initializing Navigation interface', e);
}
