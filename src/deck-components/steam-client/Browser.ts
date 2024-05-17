import {Unregisterable} from "./index";

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
     * @returns {void}
     */
    HideCursorUntilMouseEvent(): void;

    InspectElement(clientY: number, clientX: number): void; // yup that's right, clientY and clientX are reversed

    NotifyUserActivation(): void;

    OpenDevTools(): void;

    /**
     * Pastes the clipboard contents.
     */
    Paste(): void;

    /**
     * @todo unconfirmed
     */
    RegisterForGestureEvents(callback: (gesture: TouchGesture) => void): Unregisterable | any;

    RegisterForOpenNewTab: Unregisterable | any;

    ReplaceMisspelling: any;

    /**
     * Restarts the browser.
     * @returns {void}
     */
    RestartJSContext(): void;

    SetBackgroundThrottlingDisabled(value: boolean): void;

    SetPendingFilePath(path: string): Promise<boolean>;

    SetShouldExitSteamOnBrowserClosed(value: boolean): any;

    SetTouchGesturesToCancel(gestures: TouchGestureType[]): void;

    /**
     * Prompts and downloads a file.
     * @param {string} url - The URL of the file to download.
     * @returns {void}
     */
    StartDownload(url: string): void;
}

export interface TouchGesture {
    eTouchGesture: TouchGestureType;
    x: number;
    y: number;
}

export enum TouchGestureType {
    None = 0,
    Touch = 1,
    Tap = 2,
    DoubleTap = 3,
    ShortPress = 4,
    LongPress = 5,
    LongTap = 6,
    TwoFingerTap = 7,
    TapCancelled = 8,
    PinchBegin = 9,
    PinchUpdate = 10,
    PinchEnd = 11,
    FlingStart = 12,
    FlingCancelled = 13,
}