import {TouchGestureType} from "../Browser";

export interface BrowserViewPopup {
    /**
     * Blur the popup.
     * @param enabled Is the blur enabled?
     * @param backgroundColor
     * @param blur
     * @todo backgroundColor is a bool? Whatever that means
     */
    AddGlass(enabled: boolean, backgroundColor: boolean, blur: boolean): void;

    /**
     * Indicates whether you can go backward in history or not.
     * @returns true if you can go backward in history, false otherwise.
     */
    CanGoBackward(): boolean;

    /**
     * Indicates whether you can go forward in history or not.
     * @returns true if you can go forward in history, false otherwise.
     */
    CanGoForward(): boolean;

    // alert() i assume
    DialogResponse(param0: boolean): void;

    EnableSteamInput(): void;

    /**
     * Find a string in the page.
     * @param input The string to find.
     * @param param1 Additional parameter (exact usage may vary).
     * @param previous `true` for previous match, `false` for next match.
     */
    FindInPage(input: string, param1: boolean, previous: boolean): void;

    /**
     * Get the current popup position.
     * @returns The window position.
     */
    GetBounds(): BrowserViewBounds;

    /**
     * Go back in history.
     */
    GoBack(): void;

    /**
     * Go forward in history.
     */
    GoForward(): void;

    /**
     * @remarks `| number` is used for `BrowserViewContextMenu.custom_commands`.
     */
    HandleContextMenuCommand(command: BrowserViewContextMenuCommand | number, param2: BrowserViewContextMenu): void;

    /**
     * Load the specified URL.
     * @param url The URL to go to.
     */
    LoadURL(url: string): void;

    NotifyUserActivation(): void;

    /**
     * Paste the current clipboard selection.
     */
    Paste(): void;

    PostMessage(message: string, args: string): boolean;

    /**
     * Reload the page.
     */
    Reload(): void;

    /**
     * Load the specified URL, but don't save history.
     * @param url The URL to go to.
     */
    ReplaceURL(url: string): void;

    /**
     * Define blocked protocols, like https, etc.
     * @param protocols The protocols to block, separated by a semicolon.
     */
    SetBlockedProtocols(protocols: string): void;

    /**
     * Sets the browser window position.
     * @param x Browser window X position.
     * @param y Browser window Y position.
     * @param width Browser window width.
     * @param height Browser window height.
     */
    SetBounds(x: number, y: number, width: number, height: number): void;

    /**
     * Sets the browser window focus state.
     * @param value Is the window focused?
     */
    SetFocus(value: boolean): void;

    SetName(browserName: string): void;

    /**
     * Registers a callback to be called when a context menu is shown.
     * @param callback The callback function to be called.
     */
    SetShowContextMenuCallback(callback: (data: BrowserViewContextMenu) => void): void;

    /**
     * Registers a callback to be called when a steam:// protocol URL is loaded.
     */
    SetSteamURLCallback(callback: (steamURL: string) => void): void;

    /**
     * Raises the browser window.
     */
    SetTopWindow(): void;

    /**
     * @todo unconfirmed
     */
    SetTouchGesturesToCancel(gestures: TouchGestureType[]): void;

    SetVRKeyboardVisibility(value: boolean): void;

    SetVisible(value: boolean): void;

    /**
     * Stop the "find in page" function.
     */
    StopFindInPage(): void;

    /**
     * Stop listening for an event.
     * @param event The event to stop listening to.
     * @param callback The callback function to be called.
     */
    off(event: BrowserViewEvent, callback: (args: any) => void): void;

    /**
     * Start listening for an event.
     * @param event The event to start listening to.
     * @param callback The callback function to be called.
     */
    on(event: BrowserViewEvent, callback: (args: any) => void): void;

    /**
     * Fires when an `alert()` dialog appears.
     */
    on(event: 'alert-dialog', callback: (message: string) => void): void;

    /**
     * Fires when the browser is about to get destroyed.
     */
    on(event: 'before-close', callback: () => void): void;

    /**
     * Fires when a URL gets blocked.
     * @todo not SetBlockedProtocols, maybe only steam links
     */
    on(event: 'blocked-request', callback: (blockedURL: string) => void): void;

    /**
     * Fires when `CanGoBack() or `CanGoForward()` state changes.
     */
    on(event: 'can-go-back-forward-changed', callback: (canGoBackward: boolean, canGoForward: boolean) => void): void;

    /**
     * Fires when a `confirm()` dialog appears.
     */
    on(event: 'confirm-dialog', callback: (message: string) => void): void;

    /**
     * Fires when the browser's favicon changes.
     */
    on(event: 'favicon-urls-changed', callback: (faviconURLs: string[]) => void): void;

    /**
     * Fires when "Find in page" gets its results.
     */
    on(event: 'find-in-page-results', callback: (results: number, activeResultIndex: number) => void): void;

    /**
     * Fires when the page finishes loading.
     */
    on(event: 'finished-request', callback: (currentURL: string, previousURL: string) => void): void;

    /**
     * Fires when the browser goes focused or vice versa.
     */
    on(event: 'focus-changed', callback: (focused: boolean) => void): void;

    /**
     * Fires when the browser goes fullscreen or vice versa.
     */
    on(event: 'full-screen', callback: (fullscreen: boolean) => void): void;

    /**
     * Fires when history changes occur.
     */
    on(event: 'history-changed', callback: (history: BrowserViewHistory) => void): void;

    /**
     * Fires when the URL fails to load.
     */
    on(event: 'load-error', callback: (errorCode: number, errorURL: string, errorDescription: string) => void): void;

    /**
     * @todo Same as PostMessage?
     */
    on(event: 'message', callback: (args: any) => void): void;

    on(event: 'new-tab', callback: (args: any) => void): void;

    /**
     * Fires when a node gets focused.
     */
    on(
        event: 'node-has-focus',
        callback: (
            elementIdOrTagName: string,
            elementTag: string,
            param2: any,
            param3: string,
            param4: boolean,
        ) => void,
    ): void;

    on(event: 'page-security', callback: (url: string, pageSecurity: BrowserViewPageSecurity) => void): void;

    /**
     * Fires when the page's `<title>` changes.
     */
    on(event: 'set-title', callback: (title: string) => void): void;

    /**
     * Fires when the page starts loading.
     */
    on(event: 'start-loading', callback: (url: string, param1: boolean) => void): void;

    /**
     * Fires when the page starts loading.
     */
    on(event: 'start-request', callback: (url: string) => void): void;

    /**
     * Fires when "Find in page" gets toggled.
     */
    on(event: 'toggle-find-in-page', callback: () => void): void;
}


export interface BrowserViewBounds {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface BrowserViewContextMenu {
    /**
     * Mouse X position inside the browser view.
     */
    coord_x: number;
    /**
     * Mouse Y position inside the browser view.
     */
    coord_y: number;
    custom_commands: BrowserViewContextMenuCustomCommand[];
    /**
     * Bitmask representing edit state.
     * @remarks Appears on editable elements like `<input>`, etc.
     * @example
     * May be used with BrowserViewContextMenuEditFlag:
     * ```js
     * edit_state_flags & BrowserViewContextMenuEditFlag.CanCut != 0 // Can cut text
     * ```
     */
    edit_state_flags?: number;
    /**
     * The misspelled word the cursor is on.
     * @remarks Appears on an editable element with text.
     */
    misspelled_word?: string;
    /**
     * Browser page URL.
     * @todo Appears when there is selected text?
     */
    link_url?: string;
    /**
     * Browser page URL.
     */
    page_url: string;
    /**
     * Selected text.
     * @remarks Appears when there is selected text.
     */
    selection_text?: string;
    /**
     * Bitmask representing context menu type.
     * @example
     * May be used with BrowserViewContextMenuTypeFlag:
     * ```js
     * type_flags & BrowserViewContextMenuTypeFlag.Selection != 0 // Selected text present
     * ```
     */
    type_flags: number;
    /**
     * Browser page URL.
     * @todo Appears when there is selected text?
     */
    unfiltered_link_url?: string;
}

export interface BrowserViewContextMenuCustomCommand {
    id: number;
    label: string;
}

export enum BrowserViewContextMenuCommand {
    Close = -1,
    OpenDevTools = 26500,
    CloseDevTools = 26501,
    InspectElement = 26502,
    OpenLinkInNewTab = 26503,
}

export type BrowserViewEvent =
    | 'alert-dialog'
    | 'before-close'
    | 'blocked-request'
    | 'can-go-back-forward-changed'
    | 'confirm-dialog'
    | 'favicon-urls-changed'
    | 'find-in-page-results'
    | 'finished-request'
    | 'focus-changed'
    | 'full-screen'
    | 'history-changed'
    | 'load-error'
    | 'message'
    | 'new-tab'
    | 'node-has-focus'
    | 'page-security'
    | 'set-title'
    | 'start-loading'
    | 'start-request'
    | 'toggle-find-in-page';


export interface BrowserViewHistory {
    index: number;
    entries: BrowserViewHistoryEntry[];
}

export interface BrowserViewHistoryEntry {
    url: string;
}

export interface BrowserViewPageSecurity {
    bHasCertError: boolean;
    bIsEVCert: boolean;
    bIsSecure: boolean;
    certExpiry: number;
    certName: string;
    issuerName: string;
    nCertBits: number;
}
