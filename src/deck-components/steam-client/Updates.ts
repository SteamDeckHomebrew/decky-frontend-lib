import {JsPbMessage, OperationResponse, Result, Unregisterable} from "./index";

export interface Updates {
    ApplyUpdates(param0: string): Promise<OperationResponse>;

    CheckForUpdates(): Promise<OperationResponse>; // Checks for software updates

    GetCurrentOSBranch(): Promise<OSBranch>;

    /**
     * If `data` is deserialized, returns {@link MsgSystemUpdateState}.
     * @returns {Promise<ArrayBuffer>} A Promise that resolves to a ProtoBuf message.
     */
    RegisterForUpdateStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    // 1 - Stable, 2 - Beta, 3 - Preview
    SelectOSBranch(branch: number): any; // enum?
}


export interface OSBranch {
    eBranch: OSBranchType; // 1 - Stable
    sRawName: string;
}

export enum OSBranchType {
    Unknown = 0,
    Release = 1,
    ReleaseCandidate = 2,
    Beta = 3,
    BetaCandidate = 4,
    Main = 5,
    Staging = 6,
}

/**
 * CMsgSystemUpdateState
 */
export interface MsgSystemUpdateState extends JsPbMessage {
    state(): UpdaterState | undefined;

    progress(): UpdateProgress | undefined;

    supports_os_updates(): boolean | undefined;

    update_apply_results(): UpdateApplyResult[];

    update_check_results(): UpdateCheckResult[];
}

export interface UpdateApplyResult {
    type: UpdaterType;
    eresult: Result;
    requires_client_restart: boolean;
    requires_system_restart: boolean;
}

export interface UpdateCheckResult {
    type: UpdaterType;
    eresult: Result;
    rtime_checked: number;
    available: boolean;
}

export interface UpdateProgress {
    stage_progress: number | undefined;
    stage_size_bytes: number | undefined;
    rtime_estimated_completion: number | undefined;
}

export enum UpdaterState {
    Invalid = 0,
    UpToDate = 2,
    Checking = 3,
    Available = 4,
    Applying = 5,
    ClientRestartPending = 6,
    SystemRestartPending = 7,
}

export enum UpdaterType {
    Invalid = 0,
    Client = 1,
    OS = 2,
    BIOS = 3,
    Aggregated = 4,
    Test1 = 5,
    Test2 = 6,
    Dummy = 7,
}