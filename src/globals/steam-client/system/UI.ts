import { Unregisterable } from "../shared";

export interface UI {
    /**
     * Requests that Steam close a game-owned OS window.
     */
    CloseGameWindow(appId: number, windowId: number): void;

    /**
     * Gets title/close metadata for game-owned OS windows.
     */
    GetGameWindowsInfo(appId: number, windowIds: number[]): Promise<GameWindowInfo[]>;

    /**
     * Registers for focused game window changes.
     */
    RegisterForFocusChangeEvents(callback: (event: FocusChangeEvent) => void): Unregisterable;

    /**
     * Registers for the focused overlay window.
     *
     * `appId` is 0 when Steam cannot identify the focused app.
     */
    RegisterForOverlayGameWindowFocusChanged(callback: (appId: number, overlayPid: number) => void): Unregisterable;

    /**
     * Registers for Steam/system button events.
     */
    RegisterForSystemKeyEvents(callback: (event: SystemKeyEvent) => void): Unregisterable;
}

interface SystemKeyEvent {
    /** System key identifier. */
    eKey: number;
    nControllerIndex: number;
}

export interface FocusChangeEvent {
    focusedApp: FocusedApp;
    rgFocusable: FocusedApp[];
}

export interface FocusedApp {
    appid: number;
    pid: number;
    windowid: number;
    strExeName: string;
}

export interface GameWindowInfo {
    bCanClose: boolean;
    strTitle: string;
    windowid: number;
}
