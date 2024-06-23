import {JsPbMessage, Unregisterable} from "../index";
import {UpdaterState} from "../Updates";

// CMsgSystemDockUpdateFirmware, CMsgSystemDockState
export interface Dock {
    DisarmSafetyNet(): void;

    /**
     * If `data` is deserialized, returns {@link MsgSystemDockState}.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable;

    UpdateFirmware(base64String: string): any; // serialize base64 string
}

/**
 * CMsgSystemDockState
 */
export interface MsgSystemDockState extends JsPbMessage {
    update_state(): SystemDockUpdateState | undefined;
}

export interface SystemDockUpdateState {
    state: UpdaterState | undefined;
    rtime_last_checked: number | undefined;
    version_current: string | undefined;
    version_available: string | undefined;
    stage_progress: number | undefined;
    rtime_estimated_completion: number | undefined;
    old_fw_workaround: number | undefined;
}
