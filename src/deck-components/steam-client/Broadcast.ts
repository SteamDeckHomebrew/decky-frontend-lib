import {Result, Unregisterable} from "./index";

export interface Broadcast {
    /**
     * Approves a viewer request for the broadcast.
     * @param steamId64 The SteamID64 of the user whose request is to be approved.
     * @param param1 Unknown parameter.
     */
    ApproveViewerRequest(steamId64: string, param1: number): void;

    /**
     * Invites a user identified by their SteamID64 to watch the broadcast.
     * @param steamId64 The SteamID64 of the user to invite.
     * @returns A Promise indicating the result of the invitation (1 for success, 2 for error).
     */
    InviteToWatch(steamId64: string): Promise<number>;

    /**
     * Registers a callback to be called when the broadcast status changes.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForBroadcastStatus(callback: (broadcastStatus: BroadcastStatus) => void): Unregisterable;

    /**
     * Registers a callback to be called when viewer requests are received.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForViewerRequests(
        callback: (viewerFriendCode: number, param1: number, param2: number) => void,
    ): Unregisterable;

    /**
     * Rejects a viewer request for the broadcast.
     * @param steamId64 The SteamID64 of the user whose request is to be rejected.
     * @param param1 Unknown parameter.
     */
    RejectViewerRequest(steamId64: string, param1: number): void;

    /**
     * Stops the broadcast.
     */
    StopBroadcasting(): void;
}

export interface BroadcastStatus {
    broadcastid: string;
    nViewers: number;
    nRequests: number;
    bIsBroadcasting: boolean;
    bIsRecordingDesktop: boolean;
    eBroadcastReady: Result;
    bBroadcastCapable: boolean;
    bMicrophoneEnabled: boolean;
    bMicrophoneActive: boolean;
    nCurrentFPS: number;
    nUploadKbps: number;
}