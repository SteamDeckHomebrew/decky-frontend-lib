import {OperationResponse, Unregisterable} from "../index";

/**
 * Provides functionality for managing Bluetooth devices and interactions.
 */
export interface Bluetooth {
    /**
     * Cancels an ongoing pairing request with a Bluetooth device.
     * @param adapterId The ID of the Bluetooth adapter.
     * @param deviceId The ID of the Bluetooth device to cancel pairing with.
     * @returns A Promise that resolves with the result of the cancellation.
     */
    CancelPairing(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Connects to a paired Bluetooth device using the specified adapter.
     * @param adapterId The ID of the Bluetooth adapter.
     * @param deviceId The ID of the paired Bluetooth device to connect to.
     * @returns A Promise that resolves with the result of the connection attempt.
     */
    Connect(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Disconnects from a currently connected Bluetooth device using the specified adapter.
     * @param adapterId The ID of the Bluetooth adapter.
     * @param deviceId The ID of the connected Bluetooth device to disconnect from.
     * @returns A Promise that resolves with the result of the disconnection.
     */
    Disconnect(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Initiates pairing with a Bluetooth device using the specified adapter.
     * @param adapterId The ID of the Bluetooth adapter.
     * @param deviceId The ID of the Bluetooth device to initiate pairing with.
     * @returns A Promise that resolves with the result of the pairing attempt.
     */
    Pair(adapterId: number, deviceId: number): Promise<OperationResponse>;

    /**
     * Registers a callback function to be called when the Bluetooth state changes.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (bluetoothStateChange: BluetoothStateChange) => void): Unregisterable;

    /**
     * Sets whether the Bluetooth adapter should be in discovering mode.
     * @param adapterId The ID of the Bluetooth adapter.
     * @param value `true` to enable discovering mode, `false` to disable it.
     * @returns A Promise that resolves with the result of the operation.
     */
    SetAdapterDiscovering(adapterId: number, value: boolean): Promise<OperationResponse>;

    /**
     * Enables or disables Bluetooth functionality.
     * @param bluetooth `true` to enable Bluetooth, `false` to disable it.
     * @returns A Promise that resolves with the result of the operation.
     */
    SetEnabled(bluetooth: boolean): Promise<OperationResponse>;

    /**
     * Unpairs a Bluetooth device from the adapter.
     * @param adapterId The ID of the Bluetooth adapter.
     * @param deviceId The ID of the Bluetooth device to unpair with.
     * @returns A Promise that resolves with the result of the unpairing request.
     */
    UnPair(adapterId: number, deviceId: number): Promise<OperationResponse>;
}

/**
 * Represents a change in the state of Bluetooth adapters and devices.
 */
export interface BluetoothStateChange {
    /**
     * An array of Bluetooth adapters with their current state.
     */
    vecAdapters: BluetoothAdapter[];

    /**
     * An array of Bluetooth devices with their current state.
     */
    vecDevices: BluetoothDevice[];

    /**
     * Indicates whether Bluetooth is enabled (`true`) or disabled (`false`).
     */
    bEnabled: boolean;
}

/**
 * Represents information about a Bluetooth adapter.
 */
export interface BluetoothAdapter {
    /**
     * The unique identifier of the Bluetooth adapter.
     */
    nId: number;

    /**
     * The MAC address of the Bluetooth adapter.
     */
    sMAC: string;

    /**
     * The name of the Bluetooth adapter.
     */
    sName: string;

    /**
     * Indicates whether the Bluetooth adapter is enabled.
     */
    bEnabled: boolean;

    /**
     * Indicates whether the Bluetooth adapter is in discovering mode.
     */
    bDiscovering: boolean;
}

/**
 * Represents information about a Bluetooth device.
 */
export interface BluetoothDevice {
    /**
     * The unique identifier of the Bluetooth device.
     */
    nId: number;

    /**
     * The ID of the Bluetooth adapter to which this device is discovered by / connected to.
     */
    nAdapterId: number;

    /**
     * The type of the Bluetooth device (e.g., headphones, mouse, keyboard).
     */
    eType: BluetoothDeviceType;

    /**
     * The MAC address of the Bluetooth device.
     */
    sMAC: string;

    /**
     * The name of the Bluetooth device.
     */
    sName: string;

    /**
     * Indicates whether the Bluetooth device is currently connected to the adapter.
     */
    bConnected: boolean;

    /**
     * Indicates whether the Bluetooth device is paired to the adapter.
     */
    bPaired: boolean;

    /**
     * The raw signal strength of the Bluetooth device.
     */
    nStrengthRaw: number;
}

export enum BluetoothDeviceType {
    Invalid = 0,
    Unknown = 1,
    Phone = 2,
    Computer = 3,
    Headset = 4,
    Headphones = 5,
    Speakers = 6,
    OtherAudio = 7,
    Mouse = 8,
    Joystick = 9,
    Gamepad = 10,
    Keyboard = 11,
}
