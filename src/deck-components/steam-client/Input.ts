import {Unregisterable} from "./index";

/**
 * Represents functions related to input and controllers in Steam.
 */
export interface Input {
    CalibrateControllerIMU(controllerIndex: any): any;

    CalibrateControllerJoystick(controllerIndex: any): any;

    CalibrateControllerTrackpads(controllerIndex: any): any;

    CancelGyroSWCalibration(): any;

    ClearSelectedConfigForApp(appId: number, controllerIndex: number): any;

    CloseDesktopConfigurator: any;

    /**
     * Writes text.
     * @param textToWrite The text to write.
     */
    ControllerKeyboardSendText(textToWrite: string): void;

    /**
     * Sets a specified key's pressed state.
     * @param keyIndex The key index to set the state for.
     * @param state true for pressed, false otherwise.
     * @example
     * Send paste command:
     * ```
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.LControl, true);
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.V, true);
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.V, false);
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.LControl, false);
     * ```
     */
    ControllerKeyboardSetKeyState(keyIndex: HIDKeyboardKey, state: boolean): void;

    DecrementCloudedControllerConfigsCounter(): any;

    DeletePersonalControllerConfiguration(param0: any): any;

    //f.Debug("sending to client"), this.SetEditingConfigurationValue(e, t, c.QU, (e => SteamClient.Input.DuplicateControllerConfigurationSourceMode(this.m_unControllerIndex, e))), this.SaveEditingConfiguration(e), this
    DuplicateControllerConfigurationSourceMode(controllerIndex: number, param1: any): any;

    EndControllerDeviceSupportFlow(): any;

    ExportCurrentControllerConfiguration(controllerIndex: number, appId: number, param2: number, title: string, description: string, param5: string): Promise<any>;

    ForceConfiguratorFocus(param0: boolean): any;

    ForceSimpleHapticEvent(param0: number, param1: number, param2: number, param3: number, param4: number): any;

    FreeControllerConfig(m_ChordSummaryConfiguration: any): any;

    GetConfigForAppAndController(appId: number, unControllerIndex: number): any;

    /**
     * Retrieves the controller mapping string for the specified controller index.
     * @param unControllerIndex The controller index.
     * @returns A Promise that resolves to the controller mapping string.
     */
    GetControllerMappingString(unControllerIndex: number): Promise<string>;

    GetControllerPreviouslySeen(): Promise<number[]>;

    GetSteamControllerDongleState(): Promise<boolean>;

    GetTouchMenuIconsForApp(appId: number): Promise<any>;

    GetXboxDriverInstallState(): Promise<any>; // "{"nResult":0}"
    IdentifyController(controllerIndex: number): any;

    InitControllerSounds(): any;

    InitializeControllerPersonalizationSettings(controllerIndex: number): any;

    ModalKeyboardDismissed(): void;

    OpenDesktopConfigurator: any;

    PreviewConfigForAppAndController(appId: number, controllerIndex: number, workshopUri: string): any;

    PreviewControllerLEDColor(flHue: number, flSaturation: number, flBrightness: number): any;

    QueryControllerConfigsForApp(appId: number, controllerIndex: number, param2: boolean): any;

    RegisterForActiveControllerChanges: Unregisterable; // {"nActiveController":0}
    //param0 - e possibly appid?
    //param1 - some index?
    RegisterForConfigSelectionChanges(callback: (param0: number, param1: number) => void): Unregisterable;

    RegisterForControllerAccountChanges: Unregisterable;

    RegisterForControllerAnalogInputMessages(
        callback: (controllerAnalogInputMessages: ControllerAnalogInputMessage[]) => void,
    ): Unregisterable;

    RegisterForControllerBatteryChanges(callback: any): Unregisterable;

    RegisterForControllerCommandMessages(
        callback: (controllerCommandMessage: ControllerCommandMessage) => void,
    ): Unregisterable;

    /**
     * Registers a callback for changes in controller configuration cloud state.
     * @param callback The callback function for config cloud state changes.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForControllerConfigCloudStateChanges(
        callback: (controllerConfigCloudStateChange: ControllerConfigCloudStateChange) => void,
    ): Unregisterable;

    /**
     * Registers a callback for receiving controller configuration info messages (controller layouts query, personal controller layout query).
     * @param callback The callback function for controller config info messages.
     * @returns An object that can be used to unregister the callback.
     * @remarks Do Not Use, this will break the controller layout selection unless you know what you are doing.
     */
    RegisterForControllerConfigInfoMessages(
        callback: (
            controllerConfigInfoMessages: ControllerConfigInfoMessageList[] | ControllerConfigInfoMessageQuery[],
        ) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be invoked when controller input messages are received.
     * @param callback The callback function to be invoked when controller input messages are received.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForControllerInputMessages(
        callback: (controllerInputMessages: ControllerInputMessage[]) => void,
    ): Unregisterable;

    RegisterForControllerListChanges(callback: (controllerListChanges: ControllerInfo[]) => void): Unregisterable;

    /**
     * Registers a callback for changes in the controller state (buttons presses, triggers presses, joystick changes etc...).
     * @param callback The callback function for controller state changes.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForControllerStateChanges(
        callback: (controllerStateChanges: ControllerStateChange[]) => void,
    ): Unregisterable;

    RegisterForDualSenseUpdateNotification(callback: (m_strDualSenseUpdateProduct: string) => void): Unregisterable;

    /**
     * Registers a callback for receiving game keyboard messages (text field popup for inputting text for games when in character creation or etc...).
     * @param callback The callback function for game keyboard messages.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForGameKeyboardMessages(callback: (gameKeyboardMessage: GameKeyboardMessage) => void): Unregisterable;

    RegisterForRemotePlayConfigChanges(callback: () => void): Unregisterable;

    //data.appId, data.ulConfigId
    RegisterForShowControllerLayoutPreviewMessages(callback: (data: any) => void): Unregisterable;

    /*
            onTouchMenuInput(e) {
            for (let t = 0; t < e.length; t++) {
                const n = this.TouchMenuGetKey(e[t]), o = this.m_mapActiveTouchMenus.get(n);
                void 0 !== o && o.updateTouchMenuState(e[t])
            }
        }
     */
    RegisterForTouchMenuInputMessages(callback: (inputs: number[]) => void): Unregisterable;

    RegisterForTouchMenuMessages(callback: (touchMenuMessage: TouchMenuMessage) => void): Unregisterable;

    //param0 - index?
    RegisterForUIVisualization(param0: any, param1: any, param2: any): Unregisterable;

    RegisterForUnboundControllerListChanges(callback: (m_unboundControllerList: any) => void): Unregisterable; // param0 is an array

    /*
        OnDismissKeyboardMessage(e) {
            this.m_WindowStore.SteamUIWindows.forEach((e => e.VirtualKeyboardManager.SetVirtualKeyboardHidden(e.BrowserWindow)))
        }
     */
    RegisterForUserDismissKeyboardMessages(callback: (param0: any) => void): Unregisterable;

    RegisterForUserKeyboardMessages: Unregisterable;

    RequestGyroActive(controllerIndex: number, param1: boolean): any;

    RequestRemotePlayControllerConfigs(param0: any): any;

    ResetControllerBindings(param0: any): any;

    ResolveCloudedControllerConfigConflict(param0: any): any;

    RestoreControllerPersonalizationSettings(controllerIndex: number): any;

    SaveControllerCalibration(controllerIndex: number): any;

    SaveControllerPersonalizationSettings(param0: any): any;

    SaveControllerSounds: any;

    SaveEditingControllerConfiguration(controllerIndex: number, sharedConfig: boolean): any;

    //this.SetEditingConfigurationValue(e, t, c.sL, (e => SteamClient.Input.SetControllerConfigurationModeShiftBinding(this.m_unControllerIndex, e)))
    SetControllerConfigurationModeShiftBinding(controllerIndex: number, param1: any): any;

    SetControllerHapticSetting(controllerIndex: number, eHapticSetting: any): any;

    SetControllerMappingString(mapping: string): void;

    SetControllerName(controllerIndex: number, controllerName: string): any;

    SetControllerNintendoLayoutSetting: any;
    SetControllerPersonalizationName: any;

    //param0 - nLStickDeadzone, bSWAntiDrift, nRHapticStrength, flRPadPressureCurve
    /*
                SteamClient.Input.SetControllerPersonalizationSetting("nLStickDeadzone", e.nLStickDeadzone),
                SteamClient.Input.SetControllerPersonalizationSetting("nRStickDeadzone", e.nRStickDeadzone),
                SteamClient.Input.SetControllerPersonalizationSetting("bSWAntiDrift", e.bSWAntiDrift ? 1 : 0),
                SteamClient.Input.SetControllerPersonalizationSetting("nLHapticStrength", e.nLHapticStrength),
                SteamClient.Input.SetControllerPersonalizationSetting("nRHapticStrength", e.nRHapticStrength),
                SteamClient.Input.SetControllerPersonalizationSetting("flLPadPressureCurve", 100 * e.flLPadPressureCurve),
                SteamClient.Input.SetControllerPersonalizationSetting("flRPadPressureCurve", 100 * e.flRPadPressureCurve),
                SteamClient.Input.SetControllerPersonalizationSetting("ePlayerSlotLEDSetting", e),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nGyroSampleAngleOffsetX", e.nGyroSampleAngleOffsetX),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.bMomentumEnabled", e.bMomentumEnabled ? 1 : 0),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nMomentumFrictionX", e.nMomentumFrictionX),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nMomentumFrictionY", e.nMomentumFrictionY),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nAccerationLevel", e.nAccerationLevel),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.bInvertX", e.bInvertX ? 1 : 0),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.bInvertY", e.bInvertY ? 1 : 0),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nRotationAngle", e.nRotationAngle),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nTriggerClamping", e.nTriggerClamping),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nTriggerClampingAmount", e.nTriggerClampingAmount),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nGyroEnableButton", e.nGyroEnableButton),
                SteamClient.Input.SetControllerPersonalizationSetting("GyroPreferenceData.nGyroEnableButtonBehavior", e.nGyroEnableButtonBehavior),
     */
    SetControllerPersonalizationSetting(param0: string, param1: number): any;

    //param0 - flGyroStationaryTolerance, flAccelerometerStationaryTolerance,
    /*
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroNaturalSensitivity", e.flGyroNaturalSensitivity),
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroXYRatio", e.flGyroXYRatio),
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroSpeedDeadzone", e.flGyroSpeedDeadzone),
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroPrecisionSpeed", e.flGyroPrecisionSpeed),
                SteamClient.Input.SetControllerPersonalizationSettingFloat("flGyroStationaryTolerance", e.flGyroStationaryTolerance),
                SteamClient.Input.SetControllerPersonalizationSettingFloat("flAccelerometerStationaryTolerance", e.flAccelerometerStationaryTolerance),
     */
    SetControllerPersonalizationSettingFloat(param0: string, param1: number): any;

    SetControllerRumbleSetting(controllerIndex: number, rumblePreference: any): any;

    SetControllerUseUniversalFaceButtonGlyphs(controllerIndex: number, value: boolean): void;

    SetCursorActionset(param0: boolean): any;

    SetDualSenseUpdateNotification(param0: boolean): any

    /*
            SetEditingConfigurationValue(e, t, n, o) {
            const a = new r.BinaryWriter;
            n.serializeBinaryToWriter(n.fromObject(t), a);
            const s = a.getResultBase64String();
            f.Debug("SetEditingConfigurationValue serializeBinaryToWriter", (0, i.ZN)(t), s), this.EditingConfigurationWillUpdate(), this.m_updatingEditingConfigurationPromise = o(s).then((t => {
                if (null == t) return f.Debug("SetEditingConfigurationValue returned nothing."), void (0, i.z)((() => this.UpdateEditingConfiguration(e, this.m_unControllerIndex, this.EditingConfiguration)));
                const n = c.bE.deserializeBinary(t).toObject();
                f.Debug("SetEditingConfigurationValue returned controller configuration.", n), this.UpdateEditingConfiguration(e, this.m_unControllerIndex, n), this.m_nEditNumber++, -1 == n.url.indexOf("autosave://") && this.SaveEditingConfiguration(e)
            })).catch((e => {
                f.Error("SetEditingConfigurationValue fail:", o, l.jt(e.result), e.message), this.m_bIsUpdatingActiveConfiguration = !1
            }))
        }

        SetControllerActionSet(e, t) {
            this.SetEditingConfigurationValue(e, t, c.X3, (e => SteamClient.Input.SetEditingControllerConfigurationActionSet(this.m_unControllerIndex, e)))
        }
     */
    SetEditingControllerConfigurationActionSet(controllerIndex: number, param1: any): any;

    //this.SetEditingConfigurationValue(e, t, c.io, (e => SteamClient.Input.SetEditingControllerConfigurationInputActivator(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationInputActivator(controllerIndex: number, param1: any): any;

    //this.SetEditingConfigurationValue(e, t, c.tH, (e => SteamClient.Input.SetEditingControllerConfigurationInputActivatorEnabled(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationInputActivatorEnabled(controllerIndex: number, param1: any): any;

    //this.SetEditingConfigurationValue(e, t, c.J2, (e => SteamClient.Input.SetEditingControllerConfigurationInputBinding(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationInputBinding(controllerIndex: number, param1: any): any;

    //this.SetEditingConfigurationValue(e, t, c.Sz, (e => SteamClient.Input.SetEditingControllerConfigurationMiscSetting(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationMiscSetting(controllerIndex: number, param1: any): any;

    //f.Debug("sending to client"), this.SetEditingConfigurationValue(e, t, c.QU, (e => SteamClient.Input.SetEditingControllerConfigurationSourceMode(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationSourceMode(controllerIndex: number, param1: any): any;

    SetGamepadKeyboardText(param0: boolean, param1: string): any;

    SetKeyboardActionset(param0: boolean, param1: boolean): any;

    /**
     * Sets the mouse position.
     * @param pid 0
     * @param x Mouse X position.
     * @param y Mouse Y position.
     */
    SetMousePosition(pid: number, x: number, y: number): void;

    SetSelectedConfigForApp(appId: number, controllerIndex: number, url: string, param3: boolean): any;

    SetSteamControllerDonglePairingMode(bEnable: boolean, bSilent: boolean): any;

    SetVirtualMenuKeySelected(unControllerIndex: number, unMenuIndex: number, m_controllerMenuActiveMenuItem: number): any; //
    SetWebBrowserActionset(param0: boolean): any;

    SetXboxDriverInstallState(param0: any): any; // state

    /**
     * Opens the Steam Input controller settings.
     * This function displays the Steam Input controller settings for configuration.
     */
    ShowControllerSettings(): void;

    StandaloneKeyboardDismissed(): any;

    StartControllerDeviceSupportFlow(param0: any, param1: any, callback: (param2: any) => void): any;

    /*
    this.m_updatingEditingConfigurationPromise = SteamClient.Input.StartEditingControllerConfigurationForAppIDAndControllerIndex(e, t).then((n=>{
                                const o = c.bE.deserializeBinary(n).toObject();
                                f.Debug("Loaded controller config for appid", e, n, o),
                                    (0,
                                        i.z)((()=>this.UpdateEditingConfiguration(e, t, o)))
                            }
                        )).catch((n=>{
                                f.Debug("Loading controller config for appid rejected", e, n),
                                    (0,
                                        i.z)((()=>this.UpdateEditingConfiguration(e, t, null)))
                            }
                        ))
     */
    StartEditingControllerConfigurationForAppIDAndControllerIndex(m_appId: number, m_unControllerIndex: number): Promise<any>;

    StartGyroSWCalibration(callback: () => void): any;

    StopEditingControllerConfiguration(controllerIndex: number): any;

    SwapControllerConfigurationSourceModes: any;

    //this.SetEditingConfigurationValue(e, t, c.Qb, (e => SteamClient.Input.SwapControllerModeInputBindings(this.m_unControllerIndex, e)))
    SwapControllerModeInputBindings(controllerIndex: number, param1: any): any;

    SwapControllerOrder(controllerIndex1: number, controllerIndex2: number): any;

    SyncCloudedControllerConfigs(): any;

    // type - enum
    /*
    Off - 0, Tick, Click
     */
    TriggerHapticPulse(controllerIndex: number, eHapticType: number, param2: number): any;

    TriggerSimpleHapticEvent(
        controllerIndex: number,
        eHapticType: number,
        unIntensity: number,
        ndBGain: number,
        param4: number,
    ): any;

    UnregisterForControllerStateChanges(): void;

    UnregisterForUIVisualization(controllerIndex: number): any;

    UploadChangesForCloudedControllerConfigs(): any;
}

export enum HIDKeyboardKey {
    Invalid = 0,
    BeforeFirst = 3,
    A = 4,
    B = 5,
    C = 6,
    D = 7,
    E = 8,
    F = 9,
    G = 10,
    H = 11,
    I = 12,
    J = 13,
    K = 14,
    L = 15,
    M = 16,
    N = 17,
    O = 18,
    P = 19,
    Q = 20,
    R = 21,
    S = 22,
    T = 23,
    U = 24,
    V = 25,
    W = 26,
    X = 27,
    Y = 28,
    Z = 29,
    Key_1 = 30,
    Key_2 = 31,
    Key_3 = 32,
    Key_4 = 33,
    Key_5 = 34,
    Key_6 = 35,
    Key_7 = 36,
    Key_8 = 37,
    Key_9 = 38,
    Key_0 = 39,
    Return = 40,
    Escape = 41,
    Backspace = 42,
    Tab = 43,
    Space = 44,
    Dash = 45,
    Equals = 46,
    LeftBracket = 47,
    RightBracket = 48,
    Backslash = 49,
    Unused1 = 50,
    Semicolon = 51,
    SingleQuote = 52,
    Backtick = 53,
    Comma = 54,
    Period = 55,
    ForwardSlash = 56,
    CapsLock = 57,
    F1 = 58,
    F2 = 59,
    F3 = 60,
    F4 = 61,
    F5 = 62,
    F6 = 63,
    F7 = 64,
    F8 = 65,
    F9 = 66,
    F10 = 67,
    F11 = 68,
    F12 = 69,
    PrintScreen = 70,
    ScrollLock = 71,
    Break = 72,
    Insert = 73,
    Home = 74,
    PageUp = 75,
    Delete = 76,
    End = 77,
    PageDown = 78,
    RightArrow = 79,
    LeftArrow = 80,
    DownArrow = 81,
    UpArrow = 82,
    NumLock = 83,
    KeypadForwardSlash = 84,
    KeypadAsterisk = 85,
    KeypadDash = 86,
    KeypadPlus = 87,
    KeypadEnter = 88,
    Keypad_1 = 89,
    Keypad_2 = 90,
    Keypad_3 = 91,
    Keypad_4 = 92,
    Keypad_5 = 93,
    Keypad_6 = 94,
    Keypad_7 = 95,
    Keypad_8 = 96,
    Keypad_9 = 97,
    Keypad_0 = 98,
    KeypadPeriod = 99,
    LAlt = 100,
    LShift = 101,
    LWin = 102,
    LControl = 103,
    RAlt = 104,
    RShift = 105,
    RWin = 106,
    RControl = 107,
    VolUp = 108,
    VolDown = 109,
    Mute = 110,
    Play = 111,
    Stop = 112,
    Next = 113,
    Prev = 114,
    AfterLast = 115,
}

export interface ControllerAnalogInputMessage {
    nA: number;
    x: number;
    y: number;
    nC: number;
}

export interface ControllerCommandMessage {
    /**
     * @todo enum
     */
    eAction: number;
    nControllerIndex: number;
}

export interface ControllerConfigCloudStateChange {
    bSyncDone: boolean;
    bSyncConflict: boolean;
    bSyncError: boolean;
}

export interface ControllerConfigInfoMessage {
    appID: number;
}

export interface ControllerConfigInfoMessageQuery extends ControllerConfigInfoMessage {
    bPersonalQueryDone: boolean;
}

export interface ControllerConfigInfoMessageList extends ControllerConfigInfoMessage {
    nControllerType: number;
    publishedFileID: string;
    accountID: number;
    Title: string;
    Description: string;
    URL: string;
    timeUpdated: string;
    bOfficial: boolean;
    bProgenitorOfficial: boolean;
    bRecommended: boolean;
    bProgenitorRecommended: boolean;
    bUsesSIAPI: boolean;
    bUsesMouse: boolean;
    bUsesKeyboard: boolean;
    bUsesGamepad: boolean;
    /**
     * @todo unconfirmed
     */
    eExportType: ControllerConfigExportType;
    playtime: string;
    bSelected: boolean;
}

export enum ControllerConfigExportType {
    Unknown = 0,
    PersonalLocal = 1,
    PersonalCloud = 2,
    Community = 3,
    Template = 4,
    Official = 5,
    OfficialDefault = 6,
}

export interface ControllerInputMessage {
    nA: number;
    bS: boolean;
    nC: number;
}

export interface ActiveAccount {
    strActiveAccountID: string;
    strName: string;
    strAvatarHash: string;
}

export interface ControllerInfo {
    strName: string;
    eControllerType: ControllerType;
    nXInputIndex: number;
    nControllerIndex: number;
    eRumblePreference: number; // ControllerRumbleSetting
    bWireless: boolean;
    unUniqueID: number;
    unVendorID: number;
    unProductID: number;
    unCapabilities: number;
    strFirmwareBuildTime: string;
    strSerialNumber: string;
    strChipID: string;
    nLEDColorR: number;
    nLEDColorG: number;
    nLEDColorB: number;
    flLEDBrightness: number;
    flLEDSaturation: number;
    nTurnOnSound: number;
    nTurnOffSound: number;
    nLStickDeadzone: number;
    nRStickDeadzone: number;
    nLHapticStrength: number;
    nRHapticStrength: number;
    flLPadPressureCurve: number;
    flRPadPressureCurve: number;
    bHaptics: boolean;
    bSWAntiDrift: boolean;
    flGyroStationaryTolerance: number;
    flAccelerometerStationaryTolerance: number;
    bRemoteDevice: boolean;
    bNintendoLayout: boolean;
    bUseReversedLayout: boolean;
    ActiveAccount: ActiveAccount | undefined;
    vecAltAccounts: any[]; // The type for this property might need to be more specific based on the actual data structure
}

export enum ControllerType {
    None = -1,
    Unknown = 0,
    UnknownSteamController = 1,
    SteamController = 2, // Codename Gordon
    SteamControllerV2 = 3, // Codename Headcrab
    SteamControllerNeptune = 4, // Steam Deck
    FrontPanelBoard = 20,
    Generic = 30,
    XBox360Controller = 31,
    XBoxOneController = 32,
    PS3Controller = 33,
    PS4Controller = 34,
    WiiController = 35,
    AppleController = 36,
    AndroidController = 37,
    SwitchProController = 38,
    SwitchJoyConLeft = 39,
    SwitchJoyConRight = 40,
    SwitchJoyConPair = 41,
    SwitchProGenericInputOnlyController = 42,
    MobileTouch = 43,
    SwitchProXInputSwitchController = 44,
    PS5Controller = 45,
    XboxEliteController = 46,
    LastController = 47, // Unverified
    PS5EdgeController = 48,
    GenericKeyboard = 400,
    GenericMouse = 800,
}

export interface ControllerStateChange {
    unControllerIndex: number;
    unPacketNum: number;
    /**
     * Bitmask representing pressed upper buttons.
     * - Bit 0-8: Unknown (@todo Please provide more details if known)
     * - Bit 9: L4
     * - Bit 10: R4
     * - Bit 11-13: Unknown (@todo Please provide more details if known)
     * - Bit 14: Left Joystick Touch
     * - Bit 15: Right Joystick Touch
     * - Bit 16-17: Unknown (@todo Please provide more details if known)
     * - Bit 18: Quick Access Menu
     */
    ulUpperButtons: number;
    /**
     * Bitmask representing pressed buttons.
     * - Bit 0: R2
     * - Bit 1: L2
     * - Bit 2: R1
     * - Bit 3: L1
     * - Bit 4: Y
     * - Bit 5: B
     * - Bit 6: X
     * - Bit 7: A
     * - Bit 8: D-Pad Up
     * - Bit 9: D-Pad Right
     * - Bit 10: D-Pad Left
     * - Bit 11: D-Pad Down
     * - Bit 12: Select
     * - Bit 13: Steam/Home
     * - Bit 14: Start
     * - Bit 15: L5
     * - Bit 16: R5
     * - Bit 17: Left Touchpad Click
     * - Bit 18: Right Touchpad Click
     * - Bit 19: Left Touchpad Touch
     * - Bit 20: Right Touchpad Touch
     * - Bit 21: Unknown (@todo Please provide more details if known)
     * - Bit 22: L3
     * - Bit 23-25: Unknown (@todo Please provide more details if known)
     * - Bit 26: R3
     * - Bit 27-28: Unknown (@todo Please provide more details if known)
     * - Bit 29: Mute (Dualsense)
     * - Bit 30-31: Unknown (@todo Please provide more details if known)
     */
    ulButtons: number;
    sLeftPadX: number;
    sLeftPadY: number;
    sRightPadX: number;
    sRightPadY: number;
    sCenterPadX: number;
    sCenterPadY: number;
    sLeftStickX: number;
    sLeftStickY: number;
    sRightStickX: number;
    sRightStickY: number;
    sTriggerL: number;
    sTriggerR: number;
    flTrustedGravityVectorX: number;
    flTrustedGravityVectorY: number;
    flTrustedGravityVectorZ: number;
    flSoftwareQuatW: number;
    flSoftwareQuatX: number;
    flSoftwareQuatY: number;
    flSoftwareQuatZ: number;
    flSoftwareGyroDegreesPerSecondPitch: number;
    flSoftwareGyroDegreesPerSecondYaw: number;
    flSoftwareGyroDegreesPerSecondRoll: number;
    flHardwareQuatW: number;
    flHardwareQuatX: number;
    flHardwareQuatY: number;
    flHardwareQuatZ: number;
    flHardwareGyroDegreesPerSecondPitch: number;
    flHardwareGyroDegreesPerSecondYaw: number;
    flHardwareGyroDegreesPerSecondRoll: number;
    flGyroNoiseLength: number;
    flGyroCalibrationProgress: number;
    flGravityVectorX: number;
    flGravityVectorY: number;
    flGravityVectorZ: number;
    flAccelerometerNoiseLength: number;
    sBatteryLevel: number;
    sPressurePadLeft: number;
    sPressurePadRight: number;
    sPressureBumperLeft: number;
    sPressureBumperRight: number;
    unHardwareUpdateInMicrosec: number;
}

export interface GameKeyboardMessage {
    m_bOpen: boolean;
    nAppID: number;
    m_dwPID: number;
    m_dwOverlayPID: number;
    m_hPipe: number;
    m_eInputMode: number;
    m_eLineInputMode: number;
    m_pchDescription: string;
    m_unCharMax: number;
    m_pchExistingText: string;
}

export interface TouchMenuMessage {
    bHasVirtualMenus: boolean;
    unControllerIndex: number;
    appID: number;
}
