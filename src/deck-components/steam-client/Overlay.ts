import {EBrowserType, UIMode, Unregisterable} from "./index";

export interface Overlay {
    /**
     * Destroys the gamepad UI desktop configurator window if open.
     * @returns {void}
     */
    DestroyGamePadUIDesktopConfiguratorWindow(): void;

    GetOverlayBrowserInfo(): Promise<OverlayBrowserInfo[]>;

    HandleGameWebCallback(url: string): any;

    HandleProtocolForOverlayBrowser(appId: number, protocol: string): any;

    RegisterForActivateOverlayRequests: Unregisterable | any;

    /**
     * Registers a callback function to be called when a microtransaction authorization is requested.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuth(
        callback: (appId: number, microTxnId: string, realm: SteamRealm, microTxnUrl: string) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when a microtransaction authorization is dismissed by the user in Steam's authorization page.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuthDismiss(callback: (appId: number, microTxnId: string) => void): Unregisterable | any;

    RegisterForNotificationPositionChanged(
        callback: (appId: any, position: NotificationPosition, horizontalInset: number, verticalInset: number) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when an overlay is activated or closed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForOverlayActivated(
        callback: (overlayProcessPid: number, appId: number, active: boolean, param3: boolean) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when the overlay browser protocols change.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForOverlayBrowserProtocols(
        callback: (browseProtocols: OverlayBrowserProtocols) => void,
    ): Unregisterable | any;

    /**
     * Registers **the** callback function to be called when the overlay browser information changes.
     * @param {function} callback - The callback function to be called when the overlay browser information changes.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @remarks Do Not Use, this will break the overlay unless you know what you are doing.
     */
    RegisterOverlayBrowserInfoChanged(callback: () => void): Unregisterable | any;

    SetOverlayState(appId: number, uiComposition: UIComposition): any;
}

export enum NotificationPosition {
    TopLeft = 0,
    TopRight = 1,
    BottomLeft = 2,
    BottomRight = 3,
}

export interface OverlayBrowserInfo {
    appID: number;
    eBrowserType: EBrowserType;
    eUIMode: UIMode;
    flDisplayScale?: number;
    gameID: string;
    nBrowserID: number;
    nScreenHeight: number;
    nScreenWidth: number;
    /**
     * The PID of the overlay process.
     */
    unPID: number;
}

export interface OverlayBrowserProtocols {
    unAppID: number;
    strScheme: string;
    bAdded: boolean;
}

export enum SteamRealm {
    Unknown = 0,
    Global = 1,
    China = 2,
}

/**
 * Controls how Gamescope renders the GamepadUI window when a game is running.
 */
export enum UIComposition {
    /** Steam is not rendered on the screen. */
    Hidden = 0,
    /**
     * Transparent divs will allow pixels from the app behind Steam to penetrate.
     * Input goes to **the app**.
     */
    Notification = 1,
    /**
     * Transparent divs will allow pixels from the app behind Steam to penetrate.
     * Input goes to **Steam**.
     */
    Overlay = 2,
    /** Take all of the pixels on the screen, nothing "behind" Steam is shown. */
    Opaque = 3,
    /**
     * Special composition mode that matches Overlay, but forwards synthetic keyboard
     * events to the Gamescope foreground app (game) instead of Steam.
     */
    OverlayKeyboard = 4,
}