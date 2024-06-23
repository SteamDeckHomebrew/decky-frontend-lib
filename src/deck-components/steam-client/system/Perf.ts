import {JsPbMessage, Unregisterable} from "../index";

// CMsgSystemPerfUpdateSettings, CMsgSystemPerfState, CMsgSystemPerfSettings
export interface Perf {
    /**
     * If `data` is deserialized, returns {@link MsgSystemPerfDiagnosticInfo}.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForDiagnosticInfoChanges(callback: (data: ArrayBuffer) => void): Unregisterable;

    /**
     * If `data` is deserialized, returns {@link MsgSystemPerfState}.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable;

    UpdateSettings(base64: string): any; // serialize
}

/**
 * CMsgSystemPerfDiagnosticInfo
 */
export interface MsgSystemPerfDiagnosticInfo extends JsPbMessage {
    battery_temp_c(): number | undefined;

    entries(): SystemPerfDiagnosticEntry[] | undefined;

    interfaces(): SystemPerfNetworkInterface[] | undefined;
}

export interface SystemPerfDiagnosticEntry {
    name: string | undefined;
    value: string | undefined;
}

export interface SystemPerfNetworkInterface {
    name: string | undefined;
    timestamp: number | undefined;
    tx_bytes_total: number | undefined;
    rx_bytes_total: number | undefined;
    tx_bytes_per_sec: number | undefined;
    rx_bytes_per_sec: number | undefined;
}

/**
 * CMsgSystemPerfState
 */
export interface MsgSystemPerfState extends JsPbMessage {
    active_profile_game_id(): string | undefined;

    current_game_id(): string | undefined;

    limits(): SystemPerfLimits | undefined;

    settings(): SystemPerfSettings | undefined;
}

export interface SystemPerfLimits {
    cpu_governor_manual_min_mhz: number | undefined;
    cpu_governor_manual_max_mhz: number | undefined;
    fsr_sharpness_min: number | undefined;
    fsr_sharpness_max: number | undefined;
    gpu_performance_manual_min_mhz: number | undefined;
    gpu_performance_manual_max_mhz: number | undefined;
    perf_overlay_is_standalone: boolean | undefined;
    is_dynamic_vrs_available: boolean | undefined;
    is_manual_display_refresh_rate_available: boolean | undefined;
    gpu_performance_levels_available: GPUPerformanceLevel[];
    display_refresh_manual_hz_min: number | undefined;
    display_refresh_manual_hz_max: number | undefined;
    fps_limit_options: number[] | undefined;
    tdp_limit_min: number | undefined;
    tdp_limit_max: number | undefined;
    is_nis_supported: boolean | undefined;
    nis_sharpness_min: number | undefined;
    nis_sharpness_max: number | undefined;
    display_external_refresh_manual_hz_min: number | undefined;
    display_external_refresh_manual_hz_max: number | undefined;
    fps_limit_options_external: number[] | undefined;
    is_tearing_supported: boolean | undefined;
    is_vrr_supported: boolean | undefined;
    is_dynamic_refresh_rate_in_steam_supported: boolean | undefined;
    is_split_scaling_and_filtering_supported: boolean | undefined;
    split_scaling_filters_available: SplitScalingFilter[];
    split_scaling_scalers_available: SplitScalingScaler[];
    is_hdr_supported: boolean | undefined;
    display_refresh_manual_hz_oc_max: number | undefined;
    disable_refresh_rate_management: boolean | undefined;
}

export enum GPUPerformanceLevel {
    Invalid = 0,
    Auto = 1,
    Manual = 2,
    Low = 3,
    High = 4,
    Profiling = 5,
}

export enum SplitScalingFilter {
    Invalid = 0,
    Linear = 1,
    Nearest = 2,
    FSR = 3,
    NIS = 4,
}

export enum SplitScalingScaler {
    Invalid = 0,
    Auto = 1,
    Integer = 2,
    Fit = 3,
    Fill = 4,
    Stretch = 5,
}

export interface SystemPerfSettings {
    global: SystemPerfSettingsGlobal | undefined;
    per_app: SystemPerfSettingsPerApp | undefined;
}

export interface SystemPerfSettingsGlobal {
    diagnostic_update_rate: number;
    system_trace_service_state: SystemServiceState;
    graphics_profiling_service_state: SystemServiceState;
    perf_overlay_service_state: SystemServiceState;
    perf_overlay_level: GraphicsPerfOverlayLevel;
    is_show_perf_overlay_over_steam_enabled: boolean;
    is_advanced_settings_enabled: boolean;
    allow_external_display_refresh_control: boolean;
    is_hdr_enabled: boolean;
    hdr_on_sdr_tonemap_operator: HDRToneMapOperator;
    is_hdr_debug_heatmap_enabled: boolean;
    force_hdr_wide_gammut_for_sdr: boolean;
    allow_experimental_hdr: boolean;
    sdr_to_hdr_brightness: number;
    debug_force_hdr_support: boolean;
    force_hdr_10pq_output_debug: boolean;
    is_display_oc_enabled: boolean;
    is_color_management_enabled: boolean;
}

export enum SystemServiceState {
    Unavailable = 0,
    Disabled = 1,
    Enabled = 2,
}

export enum GraphicsPerfOverlayLevel {
    Hidden = 0,
    Basic = 1,
    Medium = 2,
    Full = 3,
    Minimal = 4,
}

export enum HDRToneMapOperator {
    Invalid = 0,
    Uncharted = 1,
    Reinhard = 2,
}

export interface SystemPerfSettingsPerApp {
    gpu_performance_manual_mhz: number | undefined;
    fps_limit: number | undefined;
    is_variable_resolution_enabled: boolean | undefined;
    is_dynamic_refresh_rate_enabled: boolean | undefined;
    tdp_limit: number | undefined;
    cpu_governor: CPUGovernor | undefined;
    cpu_governor_manual_mhz: number | undefined;
    scaling_filter: number | undefined;
    fsr_sharpness: number | undefined;
    is_fps_limit_enabled: boolean | undefined;
    is_tdp_limit_enabled: boolean | undefined;
    is_low_latency_mode_enabled: boolean | undefined;
    display_refresh_manual_hz: number | undefined;
    is_game_perf_profile_enabled: boolean | undefined;
    gpu_performance_level: GPUPerformanceLevel | undefined;
    nis_sharpness: number | undefined;
    display_external_refresh_manual_hz: number | undefined;
    fps_limit_external: number | undefined;
    is_tearing_enabled: boolean | undefined;
    is_vrr_enabled: boolean | undefined;
    is_composite_debug_enabled: boolean | undefined;
    force_composite: boolean | undefined;
    use_dynamic_refresh_rate_in_steam: boolean | undefined;
    split_scaling_filter: SplitScalingFilter | undefined;
    split_scaling_scaler: SplitScalingScaler | undefined;
}

export enum CPUGovernor {
    Invalid = 0,
    Perf = 1,
    Powersave = 2,
    Manual = 3,
}
