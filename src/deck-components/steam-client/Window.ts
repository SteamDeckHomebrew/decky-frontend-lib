import {UIComposition} from "./Overlay";

/**
 * Represents functionality for managing Steam's windows.
 * Note that methods here have to be called from the window you want to use.
 */
export interface Window {
    BringToFront(forceOS?: WindowBringToFront): any;

    /**
     * @todo Shuts down Steam too?
     */
    Close(): any;

    /**
     * Is the Steam window fullscreen?
     * @param {function} callback - The callback function to be called to receive the fullscreen state.
     * @returns {void}
     */
    DefaultMonitorHasFullscreenWindow(callback: (fullscreen: boolean) => void): void;

    /**
     * Flashes the window in the taskbar.
     * @returns {void}
     */
    FlashWindow(): void;

    /**
     * @todo Returns 0?
     */
    GetDefaultMonitorDimensions(callback: (param0: number) => void): void;

    GetMousePositionDetails(callback: (details: string) => void): void;

    /**
     * Gets the window X position.
     * @param {function} callback - The callback function to be called to receive the X position.
     * @returns {void}
     */
    GetWindowDimensions(callback: (x: number) => void): void;

    GetWindowRestoreDetails(callback: (details: string) => void): void;

    /**
     * Hides the window.
     * @returns {void}
     */
    HideWindow(): void;

    /**
     * Is the window maximized?
     * @param {function} callback - The callback function to be called to receive the maximized state.
     * @returns {void}
     */
    IsWindowMaximized(callback: (maximized: boolean) => void): void;

    /**
     * Is the window minimized?
     * @param {function} callback - The callback function to be called to receive the minimized state.
     * @returns {void}
     */
    IsWindowMinimized(callback: (minimized: boolean) => void): void;

    MarkLastFocused(): void;

    /**
     * Minimizes the window.
     * @returns {void}
     */
    Minimize(): void;

    /**
     * Moves the window to given coordinates.
     * @param {number} x - Window X position.
     * @param {number} y - Window Y position.
     * @param {number | undefined} dpi - Screen DPI.
     * @returns {void}
     */
    MoveTo(x: number, y: number, dpi: number | undefined): void;

    /**
     * Moves the window to a given location.
     * @param {string} location - Window location.
     * @param {number | undefined} offset - X/Y offset.
     * @returns {void}
     */
    MoveToLocation(location: WindowLocation, offset: number | undefined): void;

    /**
     * Moves the window relatively to given details.
     * @param {string} details - Window details string from `Window.GetWindowRestoreDetails`.
     * @param {number} x - Window X position.
     * @param {number} y - Window Y position.
     * @param {number} width - Window width.
     * @param {number} height - Window height.
     * @returns {void}
     *
     * @example
     * Move the window to bottom right by 50 pixels:
     * ```
     * SteamClient.Window.GetWindowRestoreDetails(e => {
     *     SteamClient.Window.PositionWindowRelative(e, 50, 50, 0, 0);
     * })
     * ```
     */
    PositionWindowRelative(details: string, x: number, y: number, width: number, height: number): void;

    ProcessShuttingDown(): Promise<boolean>;

    /**
     * Resizes the window to given dimension.
     * The window has to be created with the resizable flag.
     * @param {number} width - Window width.
     * @param {number} height - Window height.
     * @param {boolean | number} applyBrowserScaleOrDPIValue
     * @returns {void}
     */
    ResizeTo(width: number, height: number, applyBrowserScaleOrDPIValue: boolean | number): void;

    /**
     * Moves the window to given details.
     * @param {string} details - Window details string from `Window.GetWindowRestoreDetails`.
     * @returns {void}
     */
    RestoreWindowSizeAndPosition(details: string): void;

    SetAutoDisplayScale(value: boolean): void;

    SetComposition(uiComposition: UIComposition, appIds: number[], windowId: number): any;

    /**
     * Makes the window hide, but not close on pressing the close button.
     * @param {boolean} value - Hide on close?
     * @returns {void}
     */
    SetHideOnClose(value: boolean): void;

    SetKeyFocus(value: boolean): void;

    SetManualDisplayScaleFactor(displayScaleFactor: number): void;

    /**
     * Sets the window's max size.
     * @param {number} width - Window's max width.
     * @param {number} height - Window's max height.
     * @returns {void}
     */
    SetMaxSize(width: number, height: number): void;

    /**
     * Sets the window's min size.
     * @param {number} width - Window's max width.
     * @param {number} height - Window's max height.
     * @returns {void}
     */
    SetMinSize(width: number, height: number): void;

    SetModal(value: boolean): void;

    /**
     * Sets the window's resize grip size.
     * The window has to be created with the resize grip flag.
     * @param {number} width - Resize grip width.
     * @param {number} height - Resize grip height.
     * @returns {void}
     */
    SetResizeGrip(width: number, height: number): void;

    /**
     * Set the window's icon.
     * @param {WindowIcon} icon - The window icon to be used.
     * @returns {void}
     */
    SetWindowIcon(icon: WindowIcon): void;

    /**
     * Shows the window.
     * @returns {void}
     */
    ShowWindow(): void;

    /**
     * Stops the window's taskbar flashing.
     * @returns {void}
     */
    StopFlashWindow(): void;

    /**
     * Toggles the window's fullscreen state.
     * @returns {void}
     */
    ToggleFullscreen(): void;

    /**
     * Toggles the window's maximized state.
     * @returns {void}
     */
    ToggleMaximize(): void;
}

export enum WindowBringToFront {
    Invalid = 0,
    ForceOS = 1,
    WithoutForcingOS = 2,
}

export type WindowLocation =
    | 'upper-left'
    | 'lower-left'
    | 'center-top'
    | 'center-bottom'
    | 'upper-right'
    | 'lower-right';

export type WindowIcon = 'steam' | 'messages' | 'voice';