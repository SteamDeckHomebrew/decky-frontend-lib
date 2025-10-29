import type { CSteamUIStore, EQuickAccessTab, ESideMenu, SteamUIWindow } from '../globals/stores';
import Logger from '../logger';
import { type Export, findModuleExport } from '../webpack';

// TODO(globals): maybe just use window.SteamUIStore ? it's the exact same thing
export const Router = findModuleExport((e: Export) => e.Navigate && e.NavigationManager) as CSteamUIStore;

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
  OpenSideMenu(sideMenu: ESideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: EQuickAccessTab): void;
  OpenMainMenu(): void;
  OpenPowerMenu(unknown?: any): void;
  /** if calling this to perform navigation, call it after Navigate to prevent a race condition in desktop Big Picture mode that hides the overlay unintentionally */
  CloseSideMenus(): void;
}

export const Navigation = {} as Navigation;

const logger = new Logger('Navigation');

try {
  function createNavigationFunction(fncName: string, handler?: (win: any) => any) {
    return (...args: any) => {
      let win: SteamUIWindow | undefined;
      try {
        win = window.SteamUIStore.GetFocusedWindowInstance();
      } catch (e) {
        logger.warn('Navigation interface failed to call GetFocusedWindowInstance', e);
      }
      if (!win) {
        logger.warn('Navigation interface could not find any focused window. Falling back to Main Window Instance');
        win = Router.WindowStore?.GamepadUIMainWindowInstance || Router?.WindowStore?.SteamUIWindows?.[0];
      }

      if (win) {
        try {
          const thisObj = handler && handler(win);
          (thisObj || win)[fncName](...args);
        } catch (e) {
          logger.error('Navigation handler failed', e);
        }
      } else {
        logger.error('Navigation interface could not find a window to navigate');
      }
    };
  }
  const newNavigation = {
    CloseSideMenus: createNavigationFunction('CloseSideMenus', (win) => win.MenuStore),
    Navigate: createNavigationFunction('Navigate'),
    NavigateBack: createNavigationFunction('NavigateBack'),
    NavigateToAppProperties: createNavigationFunction('AppProperties', (win) => win.Navigator),
    NavigateToChat: createNavigationFunction('Chat', (win) => win.Navigator),
    NavigateToExternalWeb: createNavigationFunction('ExternalWeb', (win) => win.Navigator),
    NavigateToInvites: createNavigationFunction('Invites', (win) => win.Navigator),
    NavigateToLayoutPreview: Router.NavigateToLayoutPreview?.bind(Router),
    NavigateToLibraryTab: createNavigationFunction('LibraryTab', (win) => win.Navigator),
    NavigateToSteamWeb: createNavigationFunction('NavigateToSteamWeb'),
    OpenMainMenu: createNavigationFunction('OpenMainMenu', (win) => win.MenuStore),
    OpenPowerMenu: Router.OpenPowerMenu?.bind(Router),
    OpenQuickAccessMenu: createNavigationFunction('OpenQuickAccessMenu', (win) => win.MenuStore),
    OpenSideMenu: createNavigationFunction('OpenSideMenu', (win) => win.MenuStore),
  } as Navigation;

  Object.assign(Navigation, newNavigation);
} catch (e) {
  logger.error('Error initializing Navigation interface', e);
}
