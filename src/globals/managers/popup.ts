import type { EBrowserType } from '../shared/enums';
import type { BrowserContext } from '../shared/interfaces';

export type PopupCallback_t = (popup?: SteamPopup) => void;

export interface RestoreDetails {
  bExpires: boolean;
  /**
   * Date as a Unix timestamp.
   */
  last_used: number;
  strRestoreDetails: string;
}

export interface SteamPopupParameters {
  availscreenheight: number;
  availscreenwidth: number;
  /**
   * Value of `SteamClient.Window.SetHideOnClose`.
   */
  bHideOnClose: boolean;
  /**
   * @todo bHideMainWindowForPopouts
   */
  bModal: boolean;
  bNoFocusOnShow: boolean;
  /**
   * @todo saw in js, but is it there ?
   */
  bNoInitialShow: boolean;
  bPinned: boolean;
  /**
   * Popup's <body> class.
   */
  body_class: string;
  browserType: EBrowserType;
  /**
   * Popup is centered on this window.
   */
  center_on_window: Window;
  dimensions: {
    height?: number;
    left?: number;
    top?: number;
    width?: number;
  };
  /**
   * {@link EPopupCreationFlags}
   */
  eCreationFlags: number;
  /**
   * Popup <html> class.
   */
  html_class: string;
  /**
   * @todo unused ? maybe used with {@link bModal} ?
   */
  hwndParent: number;
  /**
   * Popup minimum height.
   */
  minHeight: number;
  /**
   * Popup minimum width.
   */
  minWidth: number;
  /**
   * Parent browser ID.
   */
  parent_container_popup_id: number;
  /**
   * Root element class.
   */
  popup_class: string;
  replace_existing_popup: boolean;
  strRestoreDetails: string;
  strUserAgent: string;
  strVROverlayKey: string;
  // @v
  /**
   * These parameters are interpreted by the Steam process to open popups
   * in the Steam overlay or SteamVR dashboard instead of on the desktop.
   */
  target_browser: BrowserContext;
  /**
   * Popup (internal) name.
   */
  m_strName: string;
  /**
   * Document title.
   */
  m_strTitle: string;
  /**
   * Parent browser ID.
   */
  window_opener_id: number;
}

// @v
/**
 * Helper to track when all links for a newly created popup have loaded.
 * Supports CPopup replacement too.
 */
export interface CRenderWhenLinksReady {
  m_fnRender: () => void;
  m_rgLoadingLinks: Node[];

  AddLink(link: Node, checkIfLoaded: boolean): void;
  SetTarget(renderCallback: () => void): void;
}

export interface SteamPopup {
  /**
   * `true` if the popup will not be shown initially.
   */
  m_bCreateHidden: boolean;
  /**
   * `true` if created.
   */
  m_bCreated: boolean;
  /**
   * `true` if focused.
   */
  m_bFocused: boolean;
  m_callbacks: {
    onLoad(e: any, t: any): any;
    onResize(t: any, r: any, i: any): any;
    updateParamsBeforeShow(...args: any[]): any;
  };
  /**
   * Root element.
   */
  m_element: HTMLElement;
  m_fnReadyToRender(...args: any[]): any;
  m_onCreateRender: any;
  m_popup: Window;
  m_renderWhenReady: CRenderWhenLinksReady;
  m_rgParams: Partial<SteamPopupParameters>;
  /**
   * Popup (internal) name.
   */
  m_strName: string;
  /**
   * Document title.
   */
  m_strTitle: string;

  BIsClosed(): boolean;
  BIsFocused(): boolean;
  BIsValid(): boolean;
  BIsVisible(): boolean;
  Close(): void;
  /** @todo EWindowBringToFront in SteamClient.Window */
  Focus(eForceOS?: number): void;
  GetName(): string;
  GetWindowRestoreDetails(): Promise<string>;
  IsMaximized(): Promise<boolean>;
  IsMinimized(): Promise<boolean>;
  OnBlur(): void;
  OnCreate(): void;
  OnDragOver(ev: DragEvent): void;
  OnDrop(ev: DragEvent): void;
  OnFocus(): void;
  OnMessage(ev: MessageEvent): void;
  OnResize(): void;
  OnResizeEvent(): void;
  OnUnload(ev?: Event): void;
  ReleasePopup(): void;
  RemoveEventListeners(): void;
  Render(wnd: Window, element: HTMLElement): void;
  /** @todo EWindowBringToFront in SteamClient.Window */
  Show(eForceOS?: number): void;
  UpdateParamsBeforeShow(param0: any): any;
}

export interface PopupManager {
  DebouncedSaveSavedDimensionStore_DebounceProperties: {
    hTimer: number;
    nPending: number;
  };
  m_DynamicCSSObserver: MutationObserver;
  m_bSaveRequired: boolean;
  m_bShuttingDown: boolean;
  m_mapPopups: Map<string, SteamPopup>;
  m_mapRestoreDetails: Map<string, RestoreDetails>;
  m_rgPopupCreatedCallbacks: PopupCallback_t[];
  m_rgShutdownCallbacks: PopupCallback_t[];
  m_unCurrentAccountID: number;

  /**
   * Adds a callback to dispatch on popup creation.
   */
  AddPopupCreatedCallback(callback: PopupCallback_t): void;

  /**
   * Adds a callback to dispatch on Steam shutdown.
   */
  AddShutdownCallback(callback: () => void): void;

  /**
   * Adds a popup and dispatches all the callbacks.
   */
  AddTrackedPopup(popupName: string, popup: SteamPopup): void;

  /**
   * @returns `true` if one of the context menus is focused, `false` otherwise.
   */
  BAnyMenuHasFocus(): boolean;

  /**
   * @returns `true` if one of the windows is focused, `false` otherwise.
   */
  BAnyPopupHasFocus(): boolean;

  /**
   * @returns `true` if Steam is about to shut down, `false` otherwise.
   */
  BShuttingDown(): boolean;

  /**
   * Clears saved restore details from {@link m_mapRestoreDetails}.
   */
  ClearSavedDimensionStore(): void;
  ClosePopupsOwnedByBrowser(browser: BrowserContext): void;

  /**
   * @returns the popup for the specified popup name.
   */
  GetExistingPopup(popupName: string): SteamPopup;

  /**
   * @returns the key used for usage in localStorage. Saved on a per-account basis.
   */
  GetLocalStorageKey(): string;

  /**
   * @returns the popup for the specified window.
   */
  GetPopupForWindow(window: Window): SteamPopup;

  /**
   * @todo SteamPopup[] only with `[...g_PopupManager.GetPopups()]`
   */
  GetPopups(): SteamPopup[];

  /**
   * @returns restore details for the specified window.
   */
  GetRestoreDetails(windowName: string): string;

  /**
   * Loads saved restore details from localStorage.
   */
  LoadSavedDimensionStore(): void;

  /**
   * Deletes a popup.
   */
  RemoveTrackedPopup(popup: SteamPopup): void;

  /**
   * Saves restore details in localStorage.
   */
  SaveSavedDimensionStore(): void;

  /**
   * @param accountId SteamID 3
   */
  SetCurrentLoggedInAccountID(accountId: number): void;

  /**
   * Sets restore details for the specified popup.
   */
  SetRestoreDetails(popupName: string, restoreDetails: string, expires: boolean): void;
}
