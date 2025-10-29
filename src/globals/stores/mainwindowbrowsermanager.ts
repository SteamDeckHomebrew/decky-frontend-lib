import type { CCallbackList } from '../shared/interfaces';
import type {
  BrowserViewHistory,
  BrowserViewPageSecurity,
  BrowserViewPopup,
} from '../steam-client/browser-view/BrowserViewPopup';
import type { Action, History, Location } from 'history';

type SteamBrowserTab_t = 'community' | 'store' | 'me';

type SteamBrowserTabs_t = {
  [key in SteamBrowserTab_t]: string;
};

export interface SteamBrowserHistoryState {
  /**
   * `true` if called from Steam.
   * @todo actually im not sure what this is
   */
  bExternal?: boolean;

  /**
   * Entry URL.
   */
  strURL?: string;
}

interface TabbedBrowserWebPageRequest {
  requestid: number;
  strLastURL: string;
  strTitle: string;
  strURL: string;
}

interface CTabbedBrowserStore {
  m_cbWebPageRequestsChanged: CCallbackList;
  m_nActiveWebpageRequestID: number;
  m_nWebPageRequestID: number;
  m_rgWebPageRequests: TabbedBrowserWebPageRequest[];

  /**
   * @param url Web page's URL. `data:text/html,<body></body>` by default.
   */
  AddWebPageRequest(url?: string, param1?: boolean): void;

  GetWebPageRequestsChangedCallbackList(): CCallbackList;

  /**
   * Removes all requests and closes the browser.
   */
  RemoveAllRequests(): void;

  RemoveWebPageRequest(requestId: number): boolean;

  ReorderWebPageRequest(param0: number, param1: number): void;

  /**
   * @todo Probably used to init this.
   */
  Set(activeWebpageRequestId: number, webPageRequestId: number, webPageRequests: TabbedBrowserWebPageRequest[]): void;

  /**
   * @param requestId Web page request ID, like in
   * {@link TabbedBrowserWebPageRequest.requestid}.
   * @param url Web page's URL.
   * @param title Web page's `<title>`.
   *
   * @returns `true` if request ID exists.
   */
  UpdateWebPageRequest(requestId?: number, url?: string, title?: string): boolean;
}

export interface CMainWindowBrowserManager {
  m_URL: string;
  m_URLRequested: string;
  m_bExpectImportantReplace: boolean;
  m_bLoading: boolean;
  m_bRouterChangeTroggeredBySync: boolean;
  m_browser: BrowserViewPopup;
  m_browserHistory: BrowserViewHistory;
  m_history: History;
  m_lastActiveTab: SteamBrowserTab_t;
  m_lastActiveTabURLs: SteamBrowserTabs_t;
  m_lastLocation: Location<SteamBrowserHistoryState>;
  m_loadErrorCode: number | null;
  m_loadErrorDesc: string | null;
  m_loadErrorURL: string | null;
  m_pageSecurity: BrowserViewPageSecurity | null;
  m_rootTabURLs: SteamBrowserTabs_t;
  m_strTitle: string;
  m_tabbedBrowserStore: CTabbedBrowserStore;
  m_tsWaitingForBrowserChange: number | undefined;

  /**
   * Opens the provided tab in the browser.
   */
  ActivateTab(tab: SteamBrowserTab_t): void;

  BIsWaitingForHistoryCallback(): boolean;

  /**
   * @returns the last active/opened tab in the browser.
   */
  GetLastActiveTab(): SteamBrowserTab_t;

  /**
   * @param url A Steam store/community URL.
   * @returns a browser tab responsible for provided URL or `ignore` or
   * `maintain`.
   */
  GetTabForURL(url: string): SteamBrowserTab_t | 'ignore' | 'maintain';

  /**
   * @todo Loads a URL, but `bExternal` is `false`.
   */
  LoadURL(url: string): void;

  /**
   * Reloads the current page.
   */
  Reload(): void;

  /**
   * @todo Loads a URL, but `bExternal` is `true`.
   */
  ShowURL(url: string, state: SteamBrowserHistoryState): void;

  SyncWithNewBrowserHistory(entry: BrowserViewHistory): void;

  SyncWithNewRouterEvent(location: Location<SteamBrowserHistoryState>, action: Action): void;

  UpdateActiveTab(url: string): void;
}
