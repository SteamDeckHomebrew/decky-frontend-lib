import {EBrowserType, EUIMode, Unregisterable} from "./index";

export interface Overlay {
    /**
     * Destroys the gamepad UI desktop configurator window if open.
     */
    DestroyGamePadUIDesktopConfiguratorWindow(): void;

    GetOverlayBrowserInfo(): Promise<OverlayBrowserInfo[]>;

    HandleGameWebCallback(url: string): any;

    HandleProtocolForOverlayBrowser(appId: number, protocol: string): any;

    RegisterForActivateOverlayRequests: Unregisterable;

    /**
     * Registers a callback function to be called when a microtransaction authorization is requested.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuth(
        callback: (appId: number, microTxnId: string, realm: ESteamRealm, microTxnUrl: string) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be called when a microtransaction authorization is dismissed by the user in Steam's authorization page.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForMicroTxnAuthDismiss(callback: (appId: number, microTxnId: string) => void): Unregisterable;

    RegisterForNotificationPositionChanged(
        callback: (appId: any, position: ENotificationPosition, horizontalInset: number, verticalInset: number) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be called when an overlay is activated or closed.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForOverlayActivated(
        callback: (overlayProcessPid: number, appId: number, active: boolean, param3: boolean) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be called when the overlay browser protocols change.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForOverlayBrowserProtocols(
        callback: (browseProtocols: OverlayBrowserProtocols) => void,
    ): Unregisterable;

    /**
     * Registers **the** callback function to be called when the overlay browser information changes.
     * @param callback The callback function to be called when the overlay browser information changes.
     * @returns An object that can be used to unregister the callback.
     * @remarks Do Not Use, this will break the overlay unless you know what you are doing.
     */
    RegisterOverlayBrowserInfoChanged(callback: () => void): Unregisterable;

    SetOverlayState(appId: number, uiComposition: EUIComposition): any;
}

// EPosition
export enum ENotificationPosition {
    TopLeft,
    TopRight,
    BottomLeft,
    BottomRight,
}

export interface OverlayBrowserInfo {
    appID: number;
    eBrowserType: EBrowserType;
    eUIMode: EUIMode;
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

export enum ESteamRealm {
    Unknown,
    Global,
    China,
}

/**
 * Controls how Gamescope renders the GamepadUI window when a game is running.
 */
export enum EUIComposition {
    /** Steam is not rendered on the screen. */
    Hidden,
    /**
     * Transparent divs will allow pixels from the app behind Steam to penetrate.
     * Input goes to **the app**.
     */
    Notification,
    /**
     * Transparent divs will allow pixels from the app behind Steam to penetrate.
     * Input goes to **Steam**.
     */
    Overlay,
    /** Take all of the pixels on the screen, nothing "behind" Steam is shown. */
    Opaque,
    /**
     * Special composition mode that matches {@link Overlay}, but forwards synthetic keyboard
     * events to the Gamescope foreground app (game) instead of Steam.
     */
    OverlayKeyboard,
}
