import {OperationResponse, Unregisterable} from "../index";

/**
 * Represents various functions related to Steam system audio.
 */
export interface Audio {
    /**
     * Clears the default device override for a specified audio type.
     * @param {number} audioType - The audio type (0 for input, 1 for output).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    ClearDefaultDeviceOverride(audioType: number): Promise<OperationResponse>;

    /**
     * Retrieves information about audio applications.
     * @returns {Promise<ApplicationsAudio>} - A Promise that resolves to information about audio applications.
     */
    GetApps(): Promise<ApplicationsAudio>;

    /**
     * Retrieves information about audio devices.
     * @returns {Promise<AudioDeviceInfo>} - A Promise that resolves to information about audio devices.
     */
    GetDevices(): Promise<AudioDeviceInfo>;

    /**
     * Registers a callback to be called when a new audio application is added.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppAdded(callback: (appAudioAdded: ApplicationAudio) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when an audio application is removed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppRemoved(callback: (appAudioId: number) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when the volume of an audio application changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForAppVolumeChanged(callback: (appAudioId: number, volume: number) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when a new audio device is added.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceAdded(callback: (audioDevice: Device) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when an audio device is removed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceRemoved(callback: (audioDeviceId: number) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when the volume of an audio device changes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForDeviceVolumeChanged(callback: (audioDeviceId: number, audioType: number, volume: number) => void): Unregisterable | any;

    RegisterForServiceConnectionStateChanges(callback: (param0: any) => void): Unregisterable | any;

    /**
     * Registers a callback to be called when volume buttons are pressed.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForVolumeButtonPressed(callback: (volumeUpPressed: boolean) => void): Unregisterable | any;

    /**
     * Sets the volume of an audio application.
     * @param {number} appAudioId - The ID of the audio application.
     * @param {number} volume - The volume level (floating point value between 0 and 1).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    SetAppVolume(appAudioId: number, volume: number): Promise<OperationResponse>;

    /**
     * Sets the default device override for a specified audio type.
     * @param {number} audioDeviceId - The ID of the audio device.
     * @param {number} audioType - The audio type (0 for input, 1 for output).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    SetDefaultDeviceOverride(audioDeviceId: number, audioType: number): Promise<OperationResponse>;

    /**
     * Sets the volume of an audio device.
     * @param {number} audioDeviceId - The ID of the audio device.
     * @param {number} audioType - The audio type (0 for input, 1 for output).
     * @param {number} volume - The volume level (floating point value between 0 and 1).
     * @returns {Promise<OperationResponse>} - A Promise indicating the result of the operation.
     */
    SetDeviceVolume(audioDeviceId: number, audioType: number, volume: number): Promise<OperationResponse>;
}

/**
 * Represents details about an array of application audio sessions.
 */
export interface ApplicationsAudio {
    /**
     * An array of application audio sessions.
     */
    apps: ApplicationAudio[];
}

/**
 * Represents details about an application audio session.
 */
export interface ApplicationAudio {
    /**
     * The ID of the application audio.
     */
    id: number;

    /**
     * The name of the application (e.g., Spotify, YouTube from a browser, etc.).
     */
    strName: string;

    /**
     * The volume level of the application (floating point value between 0 and 1).
     */
    flVolume: number;
}

/**
 * Represents details about audio devices and information about the active audio device.
 */
export interface AudioDeviceInfo {
    /**
     * The ID of the active output audio device.
     */
    activeOutputDeviceId: number;

    /**
     * The ID of the active input audio device.
     */
    activeInputDeviceId: number;

    /**
     * The ID of the overridden output audio device (-1 if not overridden).
     */
    overrideOutputDeviceId: number;

    /**
     * The ID of the overridden input audio device (-1 if not overridden).
     */
    overrideInputDeviceId: number;

    /**
     * An array of audio devices.
     */
    vecDevices: Device[];
}

/**
 * Represents details about an audio device.
 */
export interface Device {
    /**
     * The identifier of the audio device.
     */
    id: number;

    /**
     * The name of the audio device.
     */
    sName: string;

    /**
     * Indicates if the device has audio output.
     */
    bHasOutput: boolean;

    /**
     * Indicates if the device is the default output device.
     */
    bIsDefaultOutputDevice: boolean;

    /**
     * The volume level of the audio output device (floating point value between 0 and 1).
     */
    flOutputVolume: number;

    /**
     * Indicates if the device has audio input.
     */
    bHasInput: boolean;

    /**
     * Indicates if the device is the default input device.
     */
    bIsDefaultInputDevice: boolean;

    /**
     * The volume level of the audio input device (floating point value between 0 and 1).
     */
    flInputVolume: number;
}