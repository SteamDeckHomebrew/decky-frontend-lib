import { Unregisterable } from "./shared";

export interface Browser {
    AddWordToDictionary(word: string): void;

    ClearAllBrowsingData(): void;

    ClearHistory(): void;

    CloseDevTools(): void;

    GetBrowserID(): Promise<number>;

    GetSpellingSuggestions(word: string): string[];

    GetSteamBrowserID(): Promise<number>; // 16-bit unsigned integer?

    /**
     * Hides the mouse cursor until input.
     */
    HideCursorUntilMouseEvent(): void;

    /**
     * yup that's right, clientY and clientX are reversed
     */
    InspectElement(clientY: number, clientX: number): void;

    NotifyUserActivation(): void;

    OpenDevTools(): void;

    /**
     * Pastes the clipboard contents.
     */
    Paste(): void;

    /**
     * @note Not available on a created BrowserView.
     * @todo unconfirmed
     */
    RegisterForGestureEvents(callback: (gesture: TouchGesture) => void): Unregisterable;

    /**
     * @note Not available on a created BrowserView.
     */
    RegisterForOpenNewTab: Unregisterable;

    /**
     * Clears all browser backstack entries.
     */
    RemoveAllBackstackEntries(): Promise<void>;

    ReplaceMisspelling(word: string): void;

    /**
     * Restarts the Steam JS context.
     */
    RestartJSContext(): void;

    /**
     * Enables or disables background throttling for the current browser.
     */
    SetBackgroundThrottlingDisabled(value: boolean): void;

    /**
     * Registers a pending file selection path with Steam.
     * @param pendingFileId Generated ID used with the `.valvefile${pendingFileId}` accept token.
     * @param path Original file path/name to expose to the file input.
     */
    SetPendingFilePath(pendingFileId: string, path: string): Promise<boolean>;

    /**
     * Controls whether closing this browser should exit Steam.
     */
    SetShouldExitSteamOnBrowserClosed(value: boolean): Promise<void>;

    /**
     * Sets touch gestures that should be cancelled by the browser.
     */
    SetTouchGesturesToCancel(gestures: ETouchGesture[]): void;

    /**
     * Prompts and downloads a file.
     * @param url The URL of the file to download.
     */
    StartDownload(url: string): void;
}

export interface TouchGesture {
    eTouchGesture: ETouchGesture;
    x: number;
    y: number;
}

export enum ETouchGesture {
    None,
    Touch,
    Tap,
    DoubleTap,
    ShortPress,
    LongPress,
    LongTap,
    TwoFingerTap,
    TapCancelled,
    PinchBegin,
    PinchUpdate,
    PinchEnd,
    FlingStart,
    FlingCancelled,
}
