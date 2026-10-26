export enum QuickAccessTab {
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

export enum SideMenu {
  None,
  Main,
  QuickAccess,
}

export declare class CMenuStore {
  m_MainMenuStore: any;
  m_cSideMenuExtendedVisibilityRequests: number;
  m_cSuppressRequests: number;
  m_eLastRequestedSideMenu: SideMenu;
  m_eOpenSideMenu: SideMenu;
  m_QuickAccessTab: QuickAccessTab;

  ClearLastRequestedSideMenu(): void;

  /**
   * Closes all opened side menus.
   */
  CloseSideMenus(): void;

  GetLastRequestedSideMenu(): SideMenu;

  /**
   * @returns the currently opened side menu.
   */
  GetOpenSideMenu(): SideMenu;

  /**
   * @returns the currently opened quick access menu tab.
   */
  GetQuickAccessTab(): QuickAccessTab;

  /**
   * @returns `true` if any of the side menus is visible.
   */
  IsAnySideMenuVisible(): boolean;

  // same as above but instead checks if SideMenu isn't SideMenu.None ???
  IsSideMenuInteractable(): boolean;

  /**
   * @returns `true` if the provided side menu is visible.
   */
  IsSideMenuVisible(menu: SideMenu): boolean;

  /**
   * Opens a provided side menu.
   *
   * @param menu The menu to open.
   */
  OpenSideMenu(menu: SideMenu): void;

  /**
   * Opens the quick access menu.
   *
   * @param tab The tab to open.
   */
  OpenQuickAccessMenu(tab?: QuickAccessTab): void;

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
  ToggleSideMenu(menu: SideMenu): void;
}
