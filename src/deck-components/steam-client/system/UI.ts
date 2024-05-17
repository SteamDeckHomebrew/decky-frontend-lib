import {Unregisterable} from "../index";

export interface UI {
    CloseGameWindow(appId: number, windowId: number): void;

    GetGameWindowsInfo(appId: number, windowIds: number[]): Promise<GameWindowInfo>;

    RegisterForFocusChangeEvents(callback: (event: FocusChangeEvent) => void): Unregisterable | any;

    // appId is 0 if unknown app is focused
    RegisterForOverlayGameWindowFocusChanged(callback: (appId: number, param1: number) => void): Unregisterable | any;

    //event.eKey, event.nControllerIndex
    RegisterForSystemKeyEvents(callback: (event: any) => void): Unregisterable | any; // eKey
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
