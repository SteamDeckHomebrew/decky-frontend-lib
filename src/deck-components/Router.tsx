import { Module, findModuleChild } from '../webpack';

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
  Decky,
}

export interface Router {
  CloseSideMenus(): void;
  OpenQuickAccessMenu(quickAccessTab?: QuickAccessTab): void;
  GetQuickAccessTab(): QuickAccessTab;
  Navigate(path: string): void;
  NavigateBackOrOpenMenu(): void;
  NavigateToExternalWeb(url: string): void;
  NavigateToStore(): void;
  ToggleSideMenu(sideMenu: SideMenu): void;
  CloseSideMenus(): void;
  OpenSideMenu(sideMenu: SideMenu): void;
  OpenPowerMenu(unknown?: any): void;
  get RunningApps(): any;
}

export const Router = findModuleChild((m: Module) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.Navigate && m[prop]?.NavigationManager) return m[prop];
  }
}) as Router;
