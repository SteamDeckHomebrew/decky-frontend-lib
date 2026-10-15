import { Unregisterable } from "./shared";


export interface OpenVR {
    Device: VRDevice;
    DeviceProperties: DeviceProperties;

    /**
     * @throws OperationResponse if mutual capabilities haven't been loaded.
     */
    GetMutualCapabilities(): Promise<string[]>;

    GetWebSecret(): Promise<string>;

    /**
     * Extends VR activity timeout for a tracked device.
     * Steam passes device index 0 for the HMD and 0 seconds to clear the override.
     */
    ExtendActivityTimeout(deviceIndex: number, timeoutSeconds: number): void;

    InstallVR(): void;

    Keyboard: Keyboard;
    PathProperties: PathProperties;

    QuitAllVR(): void;

    /**
     * Registers for VR controller button presses.
     * @param callback Receives the numeric OpenVR button ID.
     */
    RegisterForButtonPress(callback: (button: number) => void): Unregisterable;

    RegisterForHMDActivityLevelChanged(callback: (m_eHMDActivityLevel: EHMDActivityLevel) => void): Unregisterable;

    RegisterForInstallDialog(callback: (installPath: string, hasOculusRuntime: boolean) => void): Unregisterable;

    RegisterForStartupErrors(callback: (clientError: number, initError: number, initErrorString: string) => void): Unregisterable;

    RegisterForVRHardwareDetected(callback: (hmdPresent: boolean, hmdHardwareDetected: boolean, hmdName: string) => void): Unregisterable;

    RegisterForVRModeChange(callback: (m_bIsVRRunning: boolean) => void): Unregisterable;

    RegisterForVRSceneAppChange(callback: (appId: number) => void): Unregisterable;

    /**
     * Registers for changes to tracked VR device indices.
     */
    RegisterForVRTrackedDevices(callback: (deviceIndices: number[]) => void): Unregisterable;

    SetOverlayInteractionAffordance(affordance: number, enabled: boolean): void;

    StartVR(ignoreSkipVRParam: boolean): void;
    TriggerOverlayHapticEffect(effect: number, value: number): void;
    VRNotifications: VRNotifications;
    VROverlay: VROverlay;
}

export interface VRDevice {
    BIsConnected(deviceIndex: number): Promise<boolean>;

    /**
     * Registers for connectivity changes for a tracked VR device.
     * @param deviceIndex Tracked device index to watch.
     * @param callback Receives whether the tracked device is connected.
     */
    RegisterForDeviceConnectivityChange(deviceIndex: number, callback: (connected: boolean) => void): Unregisterable;

    RegisterForVRDeviceSeenRecently(callback: (vrDeviceSeenRecently: boolean) => void): Unregisterable;
}

export interface DeviceProperties {
    GetBoolDeviceProperty(deviceIndex: number, property: number): Promise<boolean>;
    GetDoubleDeviceProperty(deviceIndex: number, property: number): Promise<number>;
    GetFloatDeviceProperty(deviceIndex: number, property: number): Promise<number>;
    GetInt32DeviceProperty(deviceIndex: number, property: number): Promise<number>;
    GetStringDeviceProperty(deviceIndex: number, property: number): Promise<string>;

    /**
     * Registers for changes to a tracked VR device property.
     * Steam's UI re-queries the property when this callback fires.
     */
    RegisterForDevicePropertyChange(deviceIndex: number, property: number, callback: () => void): Unregisterable;
}

export interface Keyboard {
    Hide(): void;

    /**
     * {@link EKeyboardFlags} could be useful here
     */
    RegisterForStatus(callback: (m_bIsKeyboardOpen: boolean, m_eKeyboardFlags: number, m_sInitialKeyboardText: string) => void): Unregisterable;

    SendDone(): void;

    SendText(key: string): void;
    Show(): void;
}

export interface PathProperties {
    GetBoolPathProperty(path: string): Promise<boolean>;
    GetDoublePathProperty(path: string): Promise<number>;
    GetFloatPathProperty(path: string): Promise<number>;
    GetInt32PathProperty(path: string): Promise<number>;
    GetStringPathProperty(path: string): Promise<string>;
    RegisterForPathPropertyChange(path: string, callback: () => void): Unregisterable;
    SetBoolPathProperty(path: string, value: boolean): void;
    SetDoublePathProperty(path: string, value: number): void;
    SetFloatPathProperty(path: string, value: number): void;
    SetInt32PathProperty(path: string, value: number): void;
    SetStringPathProperty(path: string, value: string): void;
}

export interface VRNotifications {
    HideCustomNotification(notificationId: number): void;
    RegisterForNotificationEvent(callback: (event: number, notificationId: number) => void): Unregisterable;
    ShowCustomNotification(overlayKey: string, notificationType: number, text: string): Promise<number>;
}

export interface VROverlay {
    HideDashboard(): void;

    IsDashboardVisible(): Promise<boolean>;

    /**
     * Registers for VR overlay button presses.
     * @param callback Receives the numeric OpenVR button ID.
     */
    RegisterForButtonPress(callback: (button: number) => void): Unregisterable;

    /**
     * Registers for VR overlay cursor movement.
     * Steam's keyboard overlay treats the first argument as the controller index.
     */
    RegisterForCursorMovement(
        callback: (controllerIndex: number, active: boolean, x: number, y: number) => void,
    ): Unregisterable;

    /**
     * Registers for mouse press events against VR overlays.
     * Steam's UI uses pixel coordinates and divides them by `devicePixelRatio` for DOM hit testing.
     */
    RegisterForOverlayMousePressEvents(
        callback: (overlayKey: string, pressed: boolean, x: number, y: number, button: number) => void,
    ): Unregisterable;

    /**
     * Registers for VR overlay thumbnail changes.
     * Steam dispatches one string value from the dashboard thumbnail change event data.
     */
    RegisterForThumbnailChanged(callback: (thumbnailPath: string) => void): Unregisterable;
    RegisterForVisibilityChanged(callback: (visible: boolean) => void): Unregisterable;
    ShowDashboard(): void;

    SwitchToDashboardOverlay(overlayKey: string): void;
}

export enum EHMDActivityLevel {
    Unknown = -1,
    Idle,
    UserInteraction,
    UserInteraction_Timeout,
    Standby,
    Idle_Timeout,
}

export enum EKeyboardFlags {
    Minimal = 1 << 0,
    Modal = 1 << 1,
    ShowArrowKeys = 1 << 2,
    HideDoneKey = 1 << 3,
}
