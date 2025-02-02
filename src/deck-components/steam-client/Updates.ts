import { EResult, JsPbMessage, OperationResponse, Unregisterable } from "./shared";

export interface Updates {
    ApplyUpdates(param0: string): Promise<OperationResponse>;

    CheckForUpdates(): Promise<OperationResponse>; // Checks for software updates

    GetCurrentOSBranch(): Promise<OSBranch>;

    GetOSBranchList(): Promise<any[]>;

    /**
     * If `data` is deserialized, returns {@link MsgSystemUpdateState}.
     * @returns A Promise that resolves to a ProtoBuf message.
     */
    RegisterForUpdateStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable;

    // 1 - Stable, 2 - Beta, 3 - Preview
    SelectOSBranch(branch: number): any; // enum?
}


export interface OSBranch {
    eBranch: EOSBranch; // 1 - Stable
    sRawName: string;
}

export enum EOSBranch {
    Unknown,
    Release,
    ReleaseCandidate,
    Beta,
    BetaCandidate,
    Preview,
    PreviewCandidate,
    Main,
    Staging,
}

/**
 * CMsgSystemUpdateState
 */
export interface MsgSystemUpdateState extends JsPbMessage {
    state(): EUpdaterState | undefined;

    progress(): UpdateProgress | undefined;

    supports_os_updates(): boolean | undefined;

    update_apply_results(): UpdateApplyResult[];

    update_check_results(): UpdateCheckResult[];
}

export interface UpdateApplyResult {
    type: EUpdaterType;
    eresult: EResult;
    requires_client_restart: boolean;
    requires_system_restart: boolean;
}

export interface UpdateCheckResult {
    type: EUpdaterType;
    eresult: EResult;
    rtime_checked: number;
    available: boolean;
}

export interface UpdateProgress {
    stage_progress: number | undefined;
    stage_size_bytes: number | undefined;
    rtime_estimated_completion: number | undefined;
}

export enum EUpdaterState {
    Invalid,
    // ty valve
    UpToDate = 2,
    Checking,
    Available,
    Applying,
    ClientRestartPending,
    SystemRestartPending,
    RollBack,
}

export enum EUpdaterType {
    Invalid,
    Client,
    OS,
    BIOS,
    Aggregated,
    Test1,
    Test2,
    Dummy,
}
