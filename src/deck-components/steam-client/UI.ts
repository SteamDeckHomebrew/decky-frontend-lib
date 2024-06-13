import {UIMode, Unregisterable} from "./index";
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

    /**
     * Registers a callback function to be called when a convar's value gets changed.
     *
     * Hard crashes if such a convar does not exist or if you can't set it.
     *
     * @param convar The ConVar to watch.
     * @param callback The callback function to be called.
     */
    RegisterForClientConVar(convar: string, callback: (value: string) => void): Unregisterable | any;

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

export enum EWindowType {
    MainGamepadUI,
    OverlayGamepadUI,
    Keyboard,
    ControllerConfigurator,
    VR,
    MainDesktopUI,
    DesktopLogin,
    OverlayDesktopUI,
    SteamChinaReviewLauncher,
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
    windowType: EWindowType;
    x: number;
    y: number;
}