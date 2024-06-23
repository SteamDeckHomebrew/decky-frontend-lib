import {UIComposition} from "./Overlay";

/**
 * Represents functionality for managing Steam's windows.
 *
 * "Restore details" here refers to a string that is similiar to
 * `1&x=604&y=257&w=1010&h=600`, which is usable with certain
 * `window.open()` parameters and methods from here.
 *
 * Note that methods here have to be called from the
 * window you want to use (not SharedJSContext).
 */
export interface Window {
    BringToFront(forceOS?: WindowBringToFront): void;

    /**
     * Closes the window.
     */
    Close(): void;

    /**
     * @returns the window's fullscreen state.
     */
    DefaultMonitorHasFullscreenWindow(): Promise<boolean>;

    /**
     * Flashes the window in the taskbar.
     * @returns {void}
     */
    FlashWindow(): void;

    GetDefaultMonitorDimensions(): Promise<MonitorDimensions>;

    /**
     * @returns the mouse position's restore details.
     */
    GetMousePositionDetails(): Promise<string>;

    /**
     * @returns the window's dimensions.
     */
    GetWindowDimensions(): Promise<WindowDimensions>;

    /**
     * @returns the window's restore details.
     */
    GetWindowRestoreDetails(): Promise<string>;

    /**
     * Hides the window.
     * @returns {void}
     */
    HideWindow(): void;

    /**
     * @returns the window's maximized state.
     */
    IsWindowMaximized(): Promise<boolean>;

    /**
     * @returns the window's minimized state.
     */
    IsWindowMinimized(): Promise<boolean>;

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
     * @param {string} details - Window restore details string from {@link GetWindowRestoreDetails}.
     * @param {number} x - Window X position.
     * @param {number} y - Window Y position.
     * @param {number} width - Window width.
     * @param {number} height - Window height.
     * @returns {void}
     *
     * @example
     * Move the window to bottom right by 50 pixels:
     * ```
     * SteamClient.Window.GetWindowRestoreDetails((e) => {
     *     SteamClient.Window.PositionWindowRelative(e, 50, 50, 0, 0);
     * });
     * ```
     */
    PositionWindowRelative(details: string, x: number, y: number, width: number, height: number): void;

    /**
     * @returns true if yje naun [tpcess od about to shut down.]
     */
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

    SetComposition(mode: UIComposition, appIdCompositionQueue: number[], windowId: number): void;

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
     * The window has to be created with the resizable flag for this to take any effect.
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

/**
 * "Usable" here refers to space that is not taken by the taskbar.
 */
export interface MonitorDimensions {
    flHorizontalScale: number;
    flVerticalScale: number;
    nFullHeight: number;
    nFullLeft: number;
    nFullTop: number;
    nFullWidth: number;
    nUsableHeight: number;
    nUsableLeft: number;
    nUsableTop: number;
    nUsableWidth: number;
}

export interface WindowDimensions {
    x: number;
    y: number;
    width: number;
    height: number;
}
