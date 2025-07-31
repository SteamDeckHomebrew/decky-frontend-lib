export enum EQuickAccessTab {
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

export enum ESideMenu {
  None,
  Main,
  QuickAccess,
}

export declare class CMenuStore {
  OpenSideMenu(sideMenu: ESideMenu): void;
  OpenQuickAccessMenu(quickAccessTab?: EQuickAccessTab): void;
  OpenMainMenu(): void;
}
