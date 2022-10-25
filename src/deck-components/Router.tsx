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

export enum DisplayStatus {
  Invalid = 0,
  Launching = 1,
  Uninstalling = 2,
  Installing = 3,
  Running = 4,
  Validating = 5,
  Updating = 6,
  Downloading = 7,
  Synchronizing = 8,
  ReadyToInstall = 9,
  ReadyToPreload = 10,
  ReadyToLaunch = 11,
  RegionRestricted = 12,
  PresaleOnly = 13,
  InvalidPlatform = 14,
  PreloadComplete = 16,
  BorrowerLocked = 17,
  UpdatePaused = 18,
  UpdateQueued = 19,
  UpdateRequired = 20,
  UpdateDisabled = 21,
  DownloadPaused = 22,
  DownloadQueued = 23,
  DownloadRequired = 24,
  DownloadDisabled = 25,
  LicensePending = 26,
  LicenseExpired = 27,
  AvailForFree = 28,
  AvailToBorrow = 29,
  AvailGuestPass = 30,
  Purchase = 31,
  Unavailable = 32,
  NotLaunchable = 33,
  CloudError = 34,
  CloudOutOfDate = 35,
  Terminating = 36,
}

export type AppOverview = {
  appid: string;
  display_name: string;
  display_status: DisplayStatus;
  sort_as: string;
};

export interface Router {
  CloseSideMenus(): void;
  OpenQuickAccessMenu(quickAccessTab?: QuickAccessTab): void;
  GetQuickAccessTab(): QuickAccessTab;
  Navigate(path: string): void;
  NavigateBackOrOpenMenu(): void;
  NavigateToAppProperties(): void;
  NavigateToBugForum(): void;
  NavigateToExternalWeb(url: string): void;
  NavigateToHelp(): void;
  NavigateToInvites(): void;
  NavigateToRunningApp(replace?: boolean): void;
  NavigateToStorage(): void;
  NavigateToStore(): void;
  NavigateToStoreApp(appId: number | string): void;
  NavigateToStoreFreeToPlay(): void;
  NavigateToStoreManual(): void;
  NavigateToStoreNewReleases(): void;
  NavigateToStoreOnSale(): void;
  ToggleSideMenu(sideMenu: SideMenu): void;
  CloseSideMenus(): void;
  OpenSideMenu(sideMenu: SideMenu): void;
  OpenPowerMenu(unknown?: any): void;
  get RunningApps(): AppOverview[];
  get MainRunningApp(): AppOverview | undefined;
}

export const Router = findModuleChild((m: Module) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.Navigate && m[prop]?.NavigationManager) return m[prop];
  }
}) as Router;
