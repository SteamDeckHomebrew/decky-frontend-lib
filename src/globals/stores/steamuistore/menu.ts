export enum EQuickAccessTab {
  Notifications,
  RemotePlayTogetherControls,
  VoiceChat,
  Friends,
  Settings,
  Perf,
  Help,
  Soundtrack,
  VRBatteries,
  Decky = 999,
}

export enum ESideMenu {
  None,
  Main,
  QuickAccess,
}

export declare class CMenuStore {
  m_MainMenuStore: any;
  m_cSideMenuExtendedVisibilityRequests: number;
  m_cSuppressRequests: number;
  m_eLastRequestedSideMenu: ESideMenu;
  m_eOpenSideMenu: ESideMenu;
  m_eQuickAccessTab: EQuickAccessTab;

  ClearLastRequestedSideMenu(): void;

  /**
   * Closes all opened side menus.
   */
  CloseSideMenus(): void;

  GetLastRequestedSideMenu(): ESideMenu;

  /**
   * @returns the currently opened side menu.
   */
  GetOpenSideMenu(): ESideMenu;

  /**
   * @returns the currently opened quick access menu tab.
   */
  GetQuickAccessTab(): EQuickAccessTab;

  /**
   * @returns `true` if any of the side menus is visible.
   */
  IsAnySideMenuVisible(): boolean;

  // same as above but instead checks if ESideMenu isn't ESideMenu.None ???
  IsSideMenuInteractable(): boolean;

  /**
   * @returns `true` if the provided side menu is visible.
   */
  IsSideMenuVisible(menu: ESideMenu): boolean;

  /**
   * Opens a provided side menu.
   *
   * @param menu The menu to open.
   */
  OpenSideMenu(menu: ESideMenu): void;

  /**
   * Opens the quick access menu.
   *
   * @param tab The tab to open.
   */
  OpenQuickAccessMenu(tab?: EQuickAccessTab): void;

  /**
   * Opens the main side menu.
   */
  OpenMainMenu(): void;

  RequestExtendSideMenuVisibility(): () => void;

  SetSuppressMenus(): () => void;

  /**
   * Toggles a provided side menu.
   *
   * @param menu The side menu to close/open.
   */
  ToggleSideMenu(menu: ESideMenu): void;
}
