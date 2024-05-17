import {Unregisterable} from "./index";
import {OSType} from "./system";

export interface UI {
    EnsureMainWindowCreated(): void;

    ExitBigPictureMode(): void;

    GetDesiredSteamUIWindows(): Promise<SteamWindow[]>;

    /**
     * Gets information about whether your OS will be unsupported in the future or not.
     * @returns {Promise<OSEndOfLifeInfo>}
     */
    GetOSEndOfLifeInfo(): Promise<OSEndOfLifeInfo>;

    /**
     * Retrieves the current UI mode.
     * @returns {Promise<UIMode>} - A Promise that resolves to the current UI mode.
     */
    GetUIMode(): Promise<UIMode>;

    NotifyAppInitialized(): void;

    RegisterDesiredSteamUIWindowsChanged(callback: () => void): Unregisterable | any;

    RegisterForClientConVar: any;

    RegisterForErrorCondition(callback: (param0: number, param1: number) => void): Unregisterable | any;

    RegisterForKioskModeResetSignal(callback: () => void): Unregisterable | any;

    RegisterForUIModeChanged(callback: (mode: UIMode) => void): Unregisterable | any;

    ResetErrorCondition(): void;

    /**
     * Sets the UI mode to the specified value.
     * @param {UIMode} mode - The UI mode to set.
     * @returns {void}
     */
    SetUIMode(mode: UIMode): void;
}

export enum UIMode {
    Unknown = -1,
    GamePad = 4,
    Desktop = 7,
}

export interface OSEndOfLifeInfo {
    bOSWillBeUnsupported: boolean;
    osType: OSType;
}

export interface SteamWindow {
    appid: number;
    hwndParent: number;
    nBrowserID: number;
    strAppName: string;
    unID: number;
    unPID: number;
    /**
     * @todo enum
     */
    windowType: number;
    x: number;
    y: number;
}