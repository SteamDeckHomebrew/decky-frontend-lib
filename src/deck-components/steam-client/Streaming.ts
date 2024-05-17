import {Unregisterable} from "./index";
import {LaunchOption} from "./App";

export interface Streaming {
    AcceptStreamingEULA(param0: any, param1: any, param2: any): any;

    CancelStreamGame(): void; // existing stream

    /**
     * Registers a callback function to be called when the streaming client finishes.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingClientFinished(callback: (code: number, result: string) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when there is progress in the launch of the streaming client.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingClientLaunchProgress(
        callback: (actionType: string, taskDetails: string, done: number, total: number) => void,
    ): Unregisterable | any;

    /**
     * Registers a callback function to be called when the streaming client is started (e.g., when clicking the stream button).
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingClientStarted(callback: (appId: number) => void): Unregisterable | any;

    /**
     * Registers a callback function to be called when the streaming launch is complete.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     * @todo `code` is likely a code, 1 being it started, 10 being host computer is updating game, `result` just returns "complete"
     */
    RegisterForStreamingLaunchComplete(callback: (code: number, result: string) => void): Unregisterable | any;

    RegisterForStreamingShowEula(callback: (appId: number) => any): Unregisterable | any;

    RegisterForStreamingShowIntro(callback: (param0: any, param1: any) => any): Unregisterable | any;

    /**
     * Registers a callback function to be called when the streaming client receives launch options from the host.
     * @param {function} callback - The callback function to be called.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStreamingShowLaunchOptions(
        callback: (appId: number, launchOptions: LaunchOption[]) => void,
    ): Unregisterable | any; // Callback when streaming client receives launch options from host

    StreamingContinueStreamGame(): void; // existing game running on another streaming capable device
    StreamingSetLaunchOption(param0: any): any;
}