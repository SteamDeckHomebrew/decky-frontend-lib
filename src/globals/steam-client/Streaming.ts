import { Unregisterable } from "./shared";
import {LaunchOption} from "./App";
import type { ERemoteClientLaunch } from "./RemotePlay";

export interface Streaming {
    AcceptStreamingEULA(appId: number, id: string, version: number): void;

    /**
     * Cancels the pending stream launch flow.
     */
    CancelStreamGame(): void;

    /**
     * Registers a callback function to be called when the streaming client finishes.
     * @param callback The callback function to be called.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForStreamingClientFinished(callback: (code: ERemoteClientLaunch, result: string) => void): Unregisterable;

    /**
     * Registers a callback function to be called when there is progress in the launch of the streaming client.
     * @param callback The callback function to be called.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForStreamingClientLaunchProgress(
        callback: (taskName: string, taskDetails: string, done: number, total: number) => void,
    ): Unregisterable;

    /**
     * Registers a callback function to be called when the streaming client is started (e.g., when clicking the stream button).
     * @param callback The callback function to be called.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForStreamingClientStarted(callback: (appId: number) => void): Unregisterable;

    /**
     * Registers a callback function to be called when the streaming launch is complete.
     * @param callback The callback function to be called.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForStreamingLaunchComplete(callback: (code: ERemoteClientLaunch, result: string) => void): Unregisterable;

    /**
     * Registers a callback for the Remote Play prelaunch confirmation flow.
     */
    RegisterForStreamingPrelaunchCheck(
        callback: (appId: number, launchParam: string, alreadyConfirmed: boolean) => void,
    ): Unregisterable;

    RegisterForStreamingShowEula(callback: (appId: number) => void): Unregisterable;

    /**
     * @deprecated Not present in the current live SteamClient snapshot.
     */
    RegisterForStreamingShowIntro(callback: (appId: number, launchParam: string) => void): Unregisterable;

    /**
     * Registers a callback function to be called when the streaming client receives launch options from the host.
     * @param callback The callback function to be called.
     * @returns an object that can be used to unregister the callback.
     */
    RegisterForStreamingShowLaunchOptions(
        callback: (appId: number, launchOptions: LaunchOption[]) => void,
    ): Unregisterable; // Callback when streaming client receives launch options from host

    /**
     * Registers a callback shown when the host is still downloading or updating.
     */
    RegisterForStreamingStillDownloading(callback: (appId: number, launchParam: string) => void): Unregisterable;

    /**
     * Continues a pending stream launch after Steam UI confirmation.
     */
    StreamingContinueStreamGame(): void;

    /**
     * Chooses the launch option for the streamed app by its index
     * and restarts the stream.
     */
    StreamingSetLaunchOption(index: number): void;
}
