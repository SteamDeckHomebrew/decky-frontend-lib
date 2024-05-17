import {Unregisterable} from "./index";


export interface OpenVR {
    Device: VRDevice;
    DeviceProperties: DeviceProperties;

    /**
     * @throws OperationResponse if mutual capabilities haven't been loaded.
     */
    GetMutualCapabilities(): Promise<any>;

    GetWebSecret(): Promise<string>;

    InstallVR(): any;

    Keyboard: Keyboard;
    PathProperties: PathProperties;

    QuitAllVR(): any;

    RegisterForButtonPress: Unregisterable | any;

    RegisterForHMDActivityLevelChanged(callback: (m_eHMDActivityLevel: any) => void): Unregisterable | any;

    RegisterForInstallDialog: Unregisterable | any;

    RegisterForStartupErrors(callback: (clientError: any, initError: any, initErrorString: string) => void): Unregisterable | any;

    RegisterForVRHardwareDetected(callback: (m_bHMDPresent: any, m_bHMDHardwareDetected: any, m_strHMDName: any) => void): Unregisterable | any;

    RegisterForVRModeChange(callback: (m_bIsVRRunning: boolean) => void): Unregisterable | any;

    RegisterForVRSceneAppChange(callback: (param0: number) => void): Unregisterable | any;

    SetOverlayInteractionAffordance: any;

    StartVR: any;
    TriggerOverlayHapticEffect: any;
    VRNotifications: VRNotifications;
    VROverlay: VROverlay;
}

export interface VRDevice {
    BIsConnected: any;
    RegisterForDeviceConnectivityChange: Unregisterable | any;

    RegisterForVRDeviceSeenRecently(callback: (m_bVRDeviceSeenRecently: any) => void): Unregisterable | any;
}

export interface DeviceProperties {
    GetBoolDeviceProperty: any;
    GetDoubleDeviceProperty: any;
    GetFloatDeviceProperty: any;
    GetInt32DeviceProperty: any;
    GetStringDeviceProperty: any;
    RegisterForDevicePropertyChange: Unregisterable | any;
}

export interface Keyboard {
    Hide(): any;

    RegisterForStatus(callback: (m_bIsKeyboardOpen: boolean, m_eKeyboardFlags: any, m_sInitialKeyboardText: string) => void): Unregisterable | any;

    SendDone(): any;

    SendText(key: string): any; //???
    Show(): any;
}

export interface PathProperties {
    GetBoolPathProperty: any;
    GetDoublePathProperty: any;
    GetFloatPathProperty: any;
    GetInt32PathProperty: any;
    GetStringPathProperty: any;
    RegisterForPathPropertyChange: any;
    SetBoolPathProperty: any;
    SetDoublePathProperty: any;
    SetFloatPathProperty: any;
    SetInt32PathProperty: any;
    SetStringPathProperty: any;
}

export interface VRNotifications {
    HideCustomNotification: any;
    RegisterForNotificationEvent: Unregisterable | any;
    ShowCustomNotification: any;
}

export interface VROverlay {
    HideDashboard: any;

    IsDashboardVisible(): Promise<boolean>;

    RegisterForButtonPress: Unregisterable | any;
    RegisterForCursorMovement: Unregisterable | any;
    RegisterForThumbnailChanged: Unregisterable | any;
    RegisterForVisibilityChanged: Unregisterable | any;
    ShowDashboard: any;

    SwitchToDashboardOverlay(param0: string): void;
}