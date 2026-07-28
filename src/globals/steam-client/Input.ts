import { OperationResponse, SerializedProto, Unregisterable } from "./shared";

/**
 * Represents functions related to input and controllers in Steam.
 */
export interface Input {
    CalibrateControllerIMU(controllerIndex: number): void;

    CalibrateControllerJoystick(controllerIndex: number): void;

    CalibrateControllerTrackpads(controllerIndex: number): void;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    CancelGyroSWCalibration(): unknown;

    ClearSelectedConfigForApp(appId: number, controllerIndex: number): void;

    /**
     * Closes the desktop controller configurator.
     */
    CloseDesktopConfigurator(): void;

    /**
     * Writes text.
     * @param textToWrite The text to write.
     */
    ControllerKeyboardSendText(textToWrite: string): void;

    /**
     * Sets a specified key's pressed state.
     * @param key The key index to set the state for.
     * @param state `true` for pressed, `false` otherwise.
     * @example
     * Send paste command:
     * ```
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.LControl, true);
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.V, true);
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.V, false);
     * SteamClient.Input.ControllerKeyboardSetKeyState(EHIDKeyboardKey.LControl, false);
     * ```
     */
    ControllerKeyboardSetKeyState(key: EHIDKeyboardKey, state: boolean): void;

    DecrementCloudedControllerConfigsCounter(): void;

    DeletePersonalControllerConfiguration(configUrl: string): void;

    //f.Debug("sending to client"), this.SetEditingConfigurationValue(e, t, c.QU, (e => SteamClient.Input.DuplicateControllerConfigurationSourceMode(this.m_unControllerIndex, e))), this.SaveEditingConfiguration(e), this
    DuplicateControllerConfigurationSourceMode(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    /**
     * Enables or disables controller analog input message delivery.
     */
    EnableControllerAnalogInputMessages(enabled: boolean): void;

    EndControllerDeviceSupportFlow(): void;

    ExportCurrentControllerConfiguration(
        controllerIndex: number,
        appId: number,
        configType: number,
        title: string,
        description: string,
        templateName: string,
    ): Promise<void>;

    ForceConfiguratorFocus(focused: boolean): void;

    ForceSimpleHapticEvent(
        controllerIndex: number,
        hapticLocation: number,
        hapticStyle: number,
        intensity: number,
        gain: number,
    ): void;

    FreeControllerConfig(controllerConfiguration: ControllerConfiguration): void;

    GetConfigForAppAndController(appId: number, controllerIndex: number): Promise<ControllerConfigInfoMessageList>;

    /**
     * Retrieves the controller mapping string for the specified controller index.
     * @param unControllerIndex The controller index.
     * @returns the controller mapping string.
     */
    GetControllerMappingString(unControllerIndex: number): Promise<string>;

    GetControllerPreviouslySeen(): Promise<number[]>;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    GetSteamControllerDongleState(): Promise<boolean>;

    GetTouchMenuIconsForApp(appId: number): Promise<TouchMenuIcon[]>;

    GetXboxDriverInstallState(): Promise<XboxDriverInstallState>;
    IdentifyController(controllerIndex: number): void;

    InitControllerSounds(): void;

    InitializeControllerPersonalizationSettings(controllerIndex: number): void;

    ModalKeyboardDismissed(): void;

    OpenDesktopConfigurator(appId: number): void;

    PreviewConfigForAppAndController(
        appId: number,
        controllerIndex: number,
        workshopUri: string,
    ): Promise<SerializedProto<ControllerConfiguration>>;

    PreviewControllerLEDColor(flHue: number, flSaturation: number, flBrightness: number): void;

    QueryControllerConfigsForApp(appId: number, controllerIndex: number, includeOtherControllerTypes: boolean): void;

    /**
     * Registers for active controller configuration load state changes.
     */
    RegisterForActiveConfigLoadedMessages(callback: (appId: number, controllerIndex: number, loaded: boolean) => void): Unregisterable;

    RegisterForActiveControllerChanges(callback: (change: ActiveControllerChange) => void): Unregisterable;
    RegisterForConfigSelectionChanges(callback: (appId: number, controllerIndex: number) => void): Unregisterable;

    RegisterForControllerAccountChanges(callback: (change: ControllerAccountChange) => void): Unregisterable;

    RegisterForControllerAnalogInputMessages(
        callback: (msgs: ControllerAnalogInputMessage[]) => void,
    ): Unregisterable;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    RegisterForControllerBatteryChanges(callback: (change: unknown) => void): Unregisterable;

    RegisterForControllerCommandMessages(
        callback: (msg: ControllerCommandMessage) => void,
    ): Unregisterable;

    /**
     * Registers a callback for changes in controller configuration cloud state.
     * @param callback The callback function for config cloud state changes.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForControllerConfigCloudStateChanges(
        callback: (state: ControllerConfigCloudState) => void,
    ): Unregisterable;

    /**
     * Registers a callback for receiving controller configuration info messages (controller layouts query, personal controller layout query).
     * @param callback The callback function for controller config info messages.
     * @returns an object that can be used to unregister the callback.
     * @remarks Do Not Use, this will break the controller layout selection unless you know what you are doing.
     */
    RegisterForControllerConfigInfoMessages(
        callback: (
            msgs: ControllerConfigInfoMessageList[] | ControllerConfigInfoMessageQuery[],
        ) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be invoked when controller input messages are received.
     * @param callback The callback function to be invoked when controller input messages are received.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForControllerInputMessages(
        callback: (
            controllerIndex: number,
            gamepadButton: ControllerInputGamepadButton,
            isButtonPressed: boolean,
            x: number,
            y: number,
        ) => void,
    ): Unregisterable;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    RegisterForControllerListChanges(callback: (controllerListChanges: ControllerInfo[]) => void): Unregisterable;

    /**
     * Registers a callback for changes in the controller state (buttons presses, triggers presses, joystick changes etc...).
     * @param callback The callback function for controller state changes.
     * @returns an object that can be used to unregister the callback.
     */
    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    RegisterForControllerStateChanges(
        callback: (changes: ControllerStateChange[]) => void,
    ): Unregisterable;

    RegisterForDualSenseUpdateNotification(callback: (m_strDualSenseUpdateProduct: string) => void): Unregisterable;

    /**
     * Registers a callback for receiving game keyboard messages (text field popup for inputting text for games when in character creation or etc...).
     * @param callback The callback function for game keyboard messages.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForGameKeyboardMessages(callback: (msg: GameKeyboardMessage) => void): Unregisterable;

    /**
     * Registers for physical keyboard count changes.
     */
    RegisterForKeyboardDeviceChanges(callback: (keyboardCount: number) => void): Unregisterable;

    RegisterForRemotePlayConfigChanges(callback: () => void): Unregisterable;

    //data.appId, data.ulConfigId
    RegisterForShowControllerLayoutPreviewMessages(
        callback: (data: ControllerLayoutPreviewMessage) => void,
    ): Unregisterable;

    /*
            onTouchMenuInput(e) {
            for (let t = 0; t < e.length; t++) {
                const n = this.TouchMenuGetKey(e[t]), o = this.m_mapActiveTouchMenus.get(n);
                void 0 !== o && o.updateTouchMenuState(e[t])
            }
        }
     */
    RegisterForTouchMenuInputMessages(callback: (inputs: number[]) => void): Unregisterable;

    RegisterForTouchMenuMessages(callback: (msg: TouchMenuMessage) => void): Unregisterable;

    RegisterForUIVisualization(callback: (leftPadX: number, leftPadY: number, rightPadX: number, rightPadY: number) => void): Unregisterable;

    RegisterForUnboundControllerListChanges(callback: (unboundControllerList: ControllerInfo[]) => void): Unregisterable;

    /*
        OnDismissKeyboardMessage(e) {
            this.m_WindowStore.SteamUIWindows.forEach((e => e.VirtualKeyboardManager.SetVirtualKeyboardHidden(e.BrowserWindow)))
        }
     */
    RegisterForUserDismissKeyboardMessages(callback: () => void): Unregisterable;

    RegisterForUserKeyboardMessages(callback: (message: UserKeyboardMessage) => void): Unregisterable;

    RequestGyroActive(controllerIndex: number, active: boolean): void;

    RequestRemotePlayControllerConfigs(groupId: string | number): void;

    ResetControllerBindings(controllerIndex: number): void;

    ResolveCloudedControllerConfigConflict(resolution: ControllerConfigCloudConflictResolution): void;

    RestoreControllerPersonalizationSettings(controllerIndex: number): void;

    SaveControllerCalibration(controllerIndex: number): void;

    SaveControllerPersonalizationSettings(controllerIndex: number): void;

    SaveControllerSounds(): void;

    SaveEditingControllerConfiguration(controllerIndex: number, sharedConfig: boolean): void;

    //this.SetEditingConfigurationValue(e, t, c.sL, (e => SteamClient.Input.SetControllerConfigurationModeShiftBinding(this.m_unControllerIndex, e)))
    SetControllerConfigurationModeShiftBinding(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    SetControllerHapticSetting(controllerIndex: number, enabled: boolean): void;

    SetControllerMappingString(mapping: string): void;

    SetControllerName(controllerIndex: number, controllerName: string): void;

    /**
     * Sets whether the controller uses Nintendo-style face button layout.
     * @param controllerIndex The controller index.
     * @param enabled `true` to use Nintendo layout, `false` to use the standard layout.
     */
    SetControllerNintendoLayoutSetting(controllerIndex: number, enabled: boolean): Promise<OperationResponse>;

    /**
     * Sets the pending controller personalization name.
     * @param personalizationName The name to save for the controller initialized by {@link InitializeControllerPersonalizationSettings}.
     */
    SetControllerPersonalizationName(personalizationName: string): void;

    // Known integer setting keys include nLStickDeadzone, bSWAntiDrift, and nRHapticStrength.
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
    SetControllerPersonalizationSetting(setting: string, value: number): void;

    // Known float setting keys include flGyroStationaryTolerance and flAccelerometerStationaryTolerance.
    /*
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroNaturalSensitivity", e.flGyroNaturalSensitivity),
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroXYRatio", e.flGyroXYRatio),
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroSpeedDeadzone", e.flGyroSpeedDeadzone),
                    SteamClient.Input.SetControllerPersonalizationSettingFloat("GyroPreferenceData.flGyroPrecisionSpeed", e.flGyroPrecisionSpeed),
                SteamClient.Input.SetControllerPersonalizationSettingFloat("flGyroStationaryTolerance", e.flGyroStationaryTolerance),
                SteamClient.Input.SetControllerPersonalizationSettingFloat("flAccelerometerStationaryTolerance", e.flAccelerometerStationaryTolerance),
     */
    SetControllerPersonalizationSettingFloat(setting: string, value: number): void;

    SetControllerRumbleSetting(controllerIndex: number, rumblePreference: EControllerRumbleSetting): void;

    SetControllerUseUniversalFaceButtonGlyphs(controllerIndex: number, value: boolean): void;

    SetCursorActionset(enabled: boolean): void;

    SetDualSenseUpdateNotification(enabled: boolean): void;

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
    SetEditingControllerConfigurationActionSet(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    //this.SetEditingConfigurationValue(e, t, c.io, (e => SteamClient.Input.SetEditingControllerConfigurationInputActivator(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationInputActivator(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    //this.SetEditingConfigurationValue(e, t, c.tH, (e => SteamClient.Input.SetEditingControllerConfigurationInputActivatorEnabled(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationInputActivatorEnabled(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    //this.SetEditingConfigurationValue(e, t, c.J2, (e => SteamClient.Input.SetEditingControllerConfigurationInputBinding(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationInputBinding(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    //this.SetEditingConfigurationValue(e, t, c.Sz, (e => SteamClient.Input.SetEditingControllerConfigurationMiscSetting(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationMiscSetting(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    //f.Debug("sending to client"), this.SetEditingConfigurationValue(e, t, c.QU, (e => SteamClient.Input.SetEditingControllerConfigurationSourceMode(this.m_unControllerIndex, e)))
    SetEditingControllerConfigurationSourceMode(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    SetEditingTritonCapSenseSettings(controllerIndex: number, enabled: boolean): void;

    SetGamepadKeyboardText(submitted: boolean, text: string): void;

    SetKeyboardActionset(enabled: boolean, standaloneKeyboard: boolean): void;

    /**
     * Sets the mouse position.
     * @param pid 0
     * @param x Mouse X position.
     * @param y Mouse Y position.
     */
    SetMousePosition(pid: number, x: number, y: number): void;

    SetSelectedConfigForApp(
        appId: number,
        controllerIndex: number,
        url: string,
        sharedConfig: boolean,
        singleControllerOfType: boolean,
    ): void;

    SetSteamControllerDonglePairingMode(enabled: boolean, silent: boolean): void;

    SetVirtualMenuKeySelected(controllerIndex: number, menuIndex: number, activeMenuItem: number): void;
    SetWebBrowserActionset(enabled: boolean): void;

    SetXboxDriverInstallState(install: boolean): Promise<XboxDriverInstallState>;

    /**
     * Opens the Steam Input controller settings.
     * This function displays the Steam Input controller settings for configuration.
     */
    ShowControllerSettings(): void;

    StandaloneKeyboardDismissed(): void;

    StartControllerDeviceSupportFlow(
        flow: number,
        controllerIndex: number,
        callback: (supportState: ControllerDeviceSupportFlowState) => void,
    ): void;

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
    StartEditingControllerConfigurationForAppIDAndControllerIndex(
        appId: number,
        controllerIndex: number,
    ): Promise<SerializedProto<ControllerConfiguration>>;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    StartGyroSWCalibration(callback: () => void): unknown;

    /**
     * Starts streaming UI visualization values for the edited controller mode.
     */
    StartUIVisualization(controllerIndex: number, modeId: number): void;

    StopEditingControllerConfiguration(controllerIndex: number): void;

    /**
     * Stops streaming UI visualization values for a controller.
     */
    StopUIVisualization(controllerIndex: number): void;

    SwapControllerConfigurationSourceModes(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    //this.SetEditingConfigurationValue(e, t, c.Qb, (e => SteamClient.Input.SwapControllerModeInputBindings(this.m_unControllerIndex, e)))
    SwapControllerModeInputBindings(
        controllerIndex: number,
        serializedConfigBase64: string,
    ): Promise<SerializedProto<ControllerConfiguration> | undefined>;

    SwapControllerOrder(controllerIndex1: number, controllerIndex2: number): void;

    SyncCloudedControllerConfigs(): void;

    // type - enum
    /*
    Off - 0, Tick, Click
     */
    TriggerHapticPulse(controllerIndex: number, hapticType: number, durationMs: number): void;

    TriggerSimpleHapticEvent(
        controllerIndex: number,
        hapticType: number,
        intensity: number,
        gainDb: number,
        gain: number,
    ): void;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    UnregisterForControllerStateChanges(): void;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    UnregisterForUIVisualization(controllerIndex: number): unknown;

    /**
     * Powers off the selected controller.
     */
    TurnOffController(controllerIndex: number): void;

    UploadChangesForCloudedControllerConfigs(): void;
}

export enum EHIDKeyboardKey {
    Invalid,
    BeforeFirst = 3,
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K,
    L,
    M,
    N,
    O,
    P,
    Q,
    R,
    S,
    T,
    U,
    V,
    W,
    X,
    Y,
    Z,
    Key_1,
    Key_2,
    Key_3,
    Key_4,
    Key_5,
    Key_6,
    Key_7,
    Key_8,
    Key_9,
    Key_0,
    Return,
    Escape,
    Backspace,
    Tab,
    Space,
    Dash,
    Equals,
    LeftBracket,
    RightBracket,
    Backslash,
    Unused1,
    Semicolon,
    SingleQuote,
    Backtick,
    Comma,
    Period,
    ForwardSlash,
    CapsLock,
    F1,
    F2,
    F3,
    F4,
    F5,
    F6,
    F7,
    F8,
    F9,
    F10,
    F11,
    F12,
    PrintScreen,
    ScrollLock,
    Break,
    Insert,
    Home,
    PageUp,
    Delete,
    End,
    PageDown,
    RightArrow,
    LeftArrow,
    DownArrow,
    UpArrow,
    NumLock,
    KeypadForwardSlash,
    KeypadAsterisk,
    KeypadDash,
    KeypadPlus,
    KeypadEnter,
    Keypad_1,
    Keypad_2,
    Keypad_3,
    Keypad_4,
    Keypad_5,
    Keypad_6,
    Keypad_7,
    Keypad_8,
    Keypad_9,
    Keypad_0,
    KeypadPeriod,
    LAlt,
    LShift,
    LWin,
    LControl,
    RAlt,
    RShift,
    RWin,
    RControl,
    VolUp,
    VolDown,
    Mute,
    Play,
    Stop,
    Next,
    Prev,
    AfterLast,
}

export type ControllerConfigCloudConflictResolution = boolean;

export interface ControllerConfiguration {
    url?: string;
    [key: string]: unknown;
}

export interface ActiveControllerChange {
    nActiveController: number;
}

export interface ControllerAccountChange {
    nControllerIndex?: number;
    strActiveAccountID?: string;
    [key: string]: unknown;
}

export interface ControllerLayoutPreviewMessage {
    appId: number;
    ulConfigId: string | number;
}

export interface TouchMenuIcon {
    strFilename: string;
}

export type XboxDriverInstallStateName =
    | "Installed"
    | "OutOfDate"
    | "PendingReboot"
    | "Uninstalled"
    | string;

export interface XboxDriverInstallState {
    nResult?: number;
    strState: XboxDriverInstallStateName;
    [key: string]: unknown;
}

export interface ControllerDeviceSupportFlowState {
    eFlow?: number;
    currentTestStep?: number;
    [key: string]: unknown;
}

export interface ControllerAnalogInputMessage {
    nA: number;
    x: number;
    y: number;
    nC: number;
}

export interface ControllerCommandMessage {
    /**
     * Controller command action identifier.
     */
    eAction: number;
    nControllerIndex: number;
}

export interface ControllerConfigCloudState {
    bSyncDone: boolean;
    bSyncConflict: boolean;
    bSyncError: boolean;
}

export interface ControllerConfigInfoMessage {
    appID: number;
}

export interface ControllerConfigInfoMessageQuery extends ControllerConfigInfoMessage {
    bGameQueryDone?: boolean;
    bPersonalQueryDone: boolean;
}

export interface ControllerConfigInfoMessageList extends ControllerConfigInfoMessage {
    bGameQueryDone?: boolean;
    bPersonalQueryDone?: boolean;
    nControllerType: number;
    nSortIdx: number;
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
     * Export type identifier for this controller configuration.
     */
    eExportType: EControllerConfigExportType;
    playtime: string;
    bSelected: boolean;
}

export enum EControllerConfigExportType {
    Unknown,
    PersonalLocal,
    PersonalCloud,
    Community,
    Template,
    Official,
    OfficialDefault,
}

export enum EControllerRumbleSetting {
    ControllerPreference,
    Off,
    On,
}

export enum ControllerInputGamepadButton {
    GAMEPAD_BUTTON_A = 0,
    GAMEPAD_BUTTON_B = 1,
    GAMEPAD_BUTTON_X = 2,
    GAMEPAD_BUTTON_Y = 3,
    GAMEPAD_BUTTON_DPAD_UP = 4,
    GAMEPAD_BUTTON_DPAD_RIGHT = 5,
    GAMEPAD_BUTTON_DPAD_DOWN = 6,
    GAMEPAD_BUTTON_DPAD_LEFT = 7,
    GAMEPAD_BUTTON_MENU = 8,
    GAMEPAD_BUTTON_VIEW = 9,
    GAMEPAD_LEFTPAD_UP = 10,
    GAMEPAD_LEFTPAD_DOWN = 11,
    GAMEPAD_LEFTPAD_LEFT = 12,
    GAMEPAD_LEFTPAD_RIGHT = 13,
    GAMEPAD_LEFTPAD_ANALOG = 14,
    GAMEPAD_RIGHTPAD_UP = 15,
    GAMEPAD_RIGHTPAD_DOWN = 16,
    GAMEPAD_RIGHTPAD_LEFT = 17,
    GAMEPAD_RIGHTPAD_RIGHT = 18,
    GAMEPAD_RIGHTPAD_ANALOG = 19,
    GAMEPAD_LEFTSTICK_UP = 20,
    GAMEPAD_LEFTSTICK_DOWN = 21,
    GAMEPAD_LEFTSTICK_LEFT = 22,
    GAMEPAD_LEFTSTICK_RIGHT = 23,
    GAMEPAD_LEFTSTICK_ANALOG = 24,
    GAMEPAD_LEFTSTICK_CLICK = 25,
    GAMEPAD_LTRIGGER_ANALOG = 26,
    GAMEPAD_RTRIGGER_ANALOG = 27,
    GAMEPAD_BUTTON_LTRIGGER = 28,
    GAMEPAD_BUTTON_RTRIGGER = 29,
    GAMEPAD_BUTTON_LSHOULDER = 30,
    GAMEPAD_BUTTON_RSHOULDER = 31,
    GAMEPAD_BUTTON_LBACK = 32,
    GAMEPAD_BUTTON_RBACK = 33,
    GAMEPAD_BUTTON_GUIDE = 34,
    GAMEPAD_BUTTON_SELECT = 35,
    GAMEPAD_BUTTON_START = 36,
    GAMEPAD_BUTTON_LPAD_CLICKED = 37,
    GAMEPAD_BUTTON_LPAD_TOUCH = 38,
    GAMEPAD_BUTTON_RPAD_CLICKED = 39,
    GAMEPAD_BUTTON_RPAD_TOUCH = 40,
    GAMEPAD_RIGHTSTICK_CLICK = 41,
    GAMEPAD_RIGHTSTICK_TOUCH = 42,
    GAMEPAD_LEFTSTICK_TOUCH = 43,
    GAMEPAD_BUTTON_LBACK_UPPER = 44,
    GAMEPAD_BUTTON_RBACK_UPPER = 45,
    GAMEPAD_BUTTON_LAST = 46,
    GAMEPAD_ANALOG_SCROLL = 47,
    GAMEPAD_ANALOG_LEFT_KEYBOARD_CURSOR = 48,
    GAMEPAD_ANALOG_RIGHT_KEYBOARD_CURSOR = 49,
    GAMEPAD_ANALOG_LAST = 50
}

/**
 * Third-party controller configuration policy. The enum name is inferred from
 * the associated app-details field and Steam UI dropdown values.
 */
export enum EThirdPartyControllerConfiguration {
    Off,
    DefaultSetting,
    On,
}

export interface ActiveAccount {
    strActiveAccountID: string;
    strName: string;
    strAvatarHash: string;
}

export interface ControllerInfo {
    strName: string;
    eControllerType: EControllerType;
    nXInputIndex: number;
    nControllerIndex: number;
    eRumblePreference: EControllerRumbleSetting;
    bWireless: boolean;
    unUniqueID: number;
    unVendorID: number;
    unProductID: number;
    /** Bitmask */
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
    vecAltAccounts: ActiveAccount[];
}

export enum EControllerType {
    None = -1,
    Unknown,
    UnknownSteamController,
    SteamController, // Codename Gordon
    SteamControllerV2, // Codename Headcrab
    SteamControllerNeptune, // Steam Deck
    FrontPanelBoard = 20,
    Generic = 30,
    XBox360Controller,
    XBoxOneController,
    PS3Controller,
    PS4Controller,
    WiiController,
    AppleController,
    AndroidController,
    SwitchProController,
    SwitchJoyConLeft,
    SwitchJoyConRight,
    SwitchJoyConPair,
    SwitchProGenericInputOnlyController,
    MobileTouch,
    SwitchProXInputSwitchController,
    PS5Controller,
    XboxEliteController,
    LastController, // Unverified
    PS5EdgeController,
    GenericKeyboard = 400,
    GenericMouse = 800,
}

export interface ControllerStateChange {
    unControllerIndex: number;
    unPacketNum: number;
    /**
     * Bitmask representing pressed upper buttons.
     * - Bit 0-8: Reserved/unknown.
     * - Bit 9: L4
     * - Bit 10: R4
     * - Bit 11-13: Reserved/unknown.
     * - Bit 14: Left Joystick Touch
     * - Bit 15: Right Joystick Touch
     * - Bit 16-17: Reserved/unknown.
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
     * - Bit 21: Reserved/unknown.
     * - Bit 22: L3
     * - Bit 23-25: Reserved/unknown.
     * - Bit 26: R3
     * - Bit 27-28: Reserved/unknown.
     * - Bit 29: Mute (Dualsense)
     * - Bit 30-31: Reserved/unknown.
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
    /** Input mode identifier. */
    m_eInputMode: number;
    /** Line input mode identifier. */
    m_eLineInputMode: number;
    m_pchDescription: string;
    m_unCharMax: number;
    m_pchExistingText: string;
}

export interface UserKeyboardMessage {
    nAppID: number;
    bChordInvoked: boolean;
    bEnterDismissesKeyboard: boolean;
    nXPosition: number;
    nYPosition: number;
    nWidth: number;
    nHeight: number;
}

export interface TouchMenuMessage {
    bHasVirtualMenus: boolean;
    unControllerIndex: number;
    appID: number;
}
