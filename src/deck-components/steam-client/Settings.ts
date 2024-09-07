import {CompatibilityToolInfo} from "./App";
import {JsPbMessage, OperationResponse, Unregisterable} from "./index";

export interface Settings {
    AddClientBeta(name: string, password: string): void;

    /**
     * Clears HTTP cache located in `<STEAMPATH>/appcache/httpcache`.
     */
    ClearAllHTTPCaches(): void;

    /**
     * Clears download cache and logs you out.
     */
    ClearDownloadCache(): void;

    GetAccountSettings(): Promise<AccountSettings>;

    GetAppUsesP2PVoice(appId: number): Promise<boolean>;

    GetAvailableLanguages(): Promise<Language[]>;

    GetAvailableTimeZones(): Promise<TimeZone[]>;

    // Returns the current language "english"
    GetCurrentLanguage(): Promise<string>;

    GetGlobalCompatTools(): Promise<CompatibilityToolInfo[]>;

    /**
     * @returns A Promise that resolves to a ProtoBuf message. If deserialized, returns {@link MsgMonitorInfo}.
     */
    GetMonitorInfo(): Promise<ArrayBuffer>;

    GetOOBETestMode(): Promise<boolean>;

    GetRegisteredSteamDeck(): Promise<RegisteredSteamDeck>;

    // Returns the current timezone
    GetTimeZone(): Promise<string>;

    GetWindowed(): Promise<boolean>;

    IgnoreSteamDeckRewards(): void;

    /**
     * Opens the Windows microphones dialog.
     */
    OpenWindowsMicSettings(): void;

    RegisterForMicVolumeUpdates: Unregisterable;

    /**
     * If `data` is deserialized, returns {@link MsgClientSettings}.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForSettingsArrayChanges(callback: (data: ArrayBuffer) => void): Unregisterable;

    RegisterForSettingsChanges(callback: (steamSettings: SteamSettings) => void): Unregisterable;

    RegisterForTimeZoneChange(callback: (timezoneId: string) => void): Unregisterable; // When timezone is changed from settings, callback will return new timezoneId
    ReinitMicSettings(): void;

    RenderHotkey(event: KeyCaptureEvent): Promise<string>;

    RequestDeviceAuthInfo(): void;

    //
    SelectClientBeta(nBetaID: any): any;

    // Get from available languages
    SetCurrentLanguage(strShortName: string): void;

    SetEnableSoftProcessKill(value: boolean): void; // Default value is false, this is Valve internal menu

    SetHostname(hostname: string): void;

    SetMicTestMode: any;

    SetOOBETestMode(value: boolean): void;

    SetPreferredMonitor(monitor: string): void;

    SetRegisteredSteamDeck: any;

    /**
     * Sets the "Don't save account credentials on this computer" option.
     * @param value Whether to save account credentials.
     */
    SetSaveAccountCredentials(value: boolean): void;

    SetSetting(serializedBase64: string): any;

    SetSteamPlayEnabled(value: boolean): void;

    SetTimeZone(timezoneId: string): void; // You can get valid timezoneIds from GetAvailableTimeZones()

    SetUseNintendoButtonLayout(controllerIndex: number, value: boolean): void;

    SetWindowed(value: boolean): void;

    SpecifyGlobalCompatTool(strToolName: string): void;

    ToggleSteamInstall(): Promise<OperationResponse>;
}

export interface AccountSettings {
    strEmail: string;
    bEmailValidated: boolean;
    bHasAnyVACBans: boolean;
    bHasTwoFactor: boolean;
    eSteamGuardState: ESteamGuardState;
    rtSteamGuardEnableTime: number;
    bSaveAccountCredentials: boolean;
}

/**
 * @todo unconfirmed, taken from localization strings
 */
export enum ESteamGuardState {
    EmailUnverified = 0,
    Protected = 1,
    Disabled = 2,
    Offline = 3,
    NotEnabled = 4,
}

export interface KeyCaptureEvent {
    alt_key: boolean;
    ctrl_key: boolean;
    display_name: string;
    meta_key: boolean;
    shift_key: boolean;
}

export interface Language {
    language: ELanguage;
    strShortName: string;
}

export enum ELanguage {
    None = -1,
    English = 0,
    German = 1,
    French = 2,
    Italian = 3,
    Korean = 4,
    Spanish = 5,
    SimplifiedChinese = 6,
    TraditionalChinese = 7,
    Russian = 8,
    Thai = 9,
    Japanese = 10,
    Portuguese = 11,
    Polish = 12,
    Danish = 13,
    Dutch = 14,
    Finnish = 15,
    Norwegian = 16,
    Swedish = 17,
    Hungarian = 18,
    Czech = 19,
    Romanian = 20,
    Turkish = 21,
    Brazilian = 22,
    Bulgarian = 23,
    Greek = 24,
    Arabic = 25,
    Ukrainian = 26,
    LatamSpanish = 27,
    Vietnamese = 28,
    SteamChina_SChinese = 29,
    Max = 30,
}
export interface RegisteredSteamDeck {
    bRegistered: boolean;
    bIgnoreRegistrationPrompt: boolean;
    strSteamID: string;
    strSerialNumber: string;
}

export interface TimeZone {
    utcOffset: number;
    timezoneID: string;
    timezoneLocalizationToken: string;
    regionsLocalizationToken: string;
}

interface Region {
    nRegionID: number;
    strRegionName: string;
}

interface Hour {
    nHour: number;
    strDisplay: string;
}

interface AvailableClientBeta {
    nBetaID: number;
    strName: string;
}

interface SteamSettings {
    bIsInClientBeta: boolean;
    bIsSteamSideload: boolean;
    eClientBetaState: ClientBetaState;
    strSelectedBetaName: string;
    nAvailableBetas: number;
    bChangeBetaEnabled: boolean;
    nSelectedBetaID: number;
    vecAvailableClientBetas: AvailableClientBeta[];
    bIsValveEmail: boolean;
    bIsInDesktopUIBeta: boolean;
    bEnableSoftProcessKill: boolean;
    vecValidDownloadRegions: Region[];
    vecValidAutoUpdateRestrictHours: Hour[];
    bCompatEnabled: boolean;
    bCompatEnabledForOtherTitles: boolean;
    strCompatTool: string;
    strDisplayName: string;
    bDisplayIsExternal: boolean;
    flAutoDisplayScaleFactor: number;
    flCurrentDisplayScaleFactor: number;
    bDisplayIsUsingAutoScale: boolean;
    flMinDisplayScaleFactor: number;
    flMaxDisplayScaleFactor: number;
    flCurrentUnderscanLevel: number;
    bUnderscanEnabled: boolean;
    vecNightModeScheduledHours: Hour[];
}

export enum ClientBetaState {
    None = 0,
    NoneChosen = 1,
    NoneChosenNonAdmin = 2,
    InBeta = 3,
    InBetaNonAdmin = 4,
}



/**
 * CMsgMonitorInfo
 */
export interface MsgMonitorInfo extends JsPbMessage {
    monitors(): Monitor[];

    selected_display_name(): string;

    add_monitors(param0: any, param1: any): any;

    set_monitors(param0: any): any;

    set_selected_display_name(param0: any): any;
}

/**
 * @todo Doesn't work on Linux ?
 */
export interface Monitor {
    monitor_device_name: string;
    monitor_display_name: string;
}

/**
 * CMsgClientSettings
 */
export interface MsgClientSettings extends JsPbMessage {
    always_show_user_chooser(): boolean;

    always_use_gamepadui_overlay(): boolean;

    auto_scale_factor(): number;

    bigpicture_windowed(): boolean;

    broadcast_bitrate(): number;

    broadcast_chat_corner(): number;

    broadcast_encoding_option(): BroadcastEncoderSetting;

    broadcast_output_height(): number;

    broadcast_output_width(): number;

    broadcast_permissions(): BroadcastPermission;

    broadcast_record_all_audio(): boolean;

    broadcast_record_all_video(): boolean;

    broadcast_record_microphone(): boolean;

    broadcast_show_live_reminder(): boolean;

    broadcast_show_upload_stats(): boolean;

    cef_remote_debugging_enabled(): boolean;

    cloud_enabled(): boolean;

    controller_combine_nintendo_joycons(): boolean;

    controller_generic_support(): boolean;

    controller_guide_button_focus_steam(): boolean;

    controller_power_off_timeout(): number;

    controller_ps_support(): number;

    controller_switch_support(): boolean;

    controller_xbox_driver(): boolean;

    controller_xbox_support(): boolean;

    default_ping_rate(): number;

    disable_all_toasts(): boolean;

    disable_toasts_in_game(): boolean;

    display_name(): string;

    download_peer_content(): number;

    download_rate_bits_per_s(): boolean;

    download_region(): number;

    download_throttle_rate(): number;

    download_throttle_while_streaming(): boolean;

    download_while_app_running(): boolean;

    enable_avif_screenshots(): boolean;

    enable_dpi_scaling(): boolean;

    enable_gpu_accelerated_webviews(): boolean;

    enable_hardware_video_decoding(): boolean;

    enable_marketing_messages(): boolean;

    enable_overlay(): boolean;

    enable_screenshot_notification(): boolean;

    enable_screenshot_sound(): boolean;

    enable_shader_background_processing(): boolean;

    enable_shader_precache(): boolean;

    enable_ui_sounds(): boolean;

    force_deck_perf_tab(): boolean;

    force_fake_mandatory_update(): boolean;

    force_oobe(): boolean;

    g_background_audio(): EGRAudio;

    g_background_a_m(): number;

    g_background_a_s(): boolean;

    g_background_br(): number;

    g_background_path(): string;

    g_background_max_keep(): string;

    g_background_mode(): EGRMode;

    g_background_time_resolution(): number;

    g_background_mk(): Hotkey;

    g_background_tg(): Hotkey;

    g_max_fps(): number;

    gamerecording_hotkey_ic(): Hotkey;
    gamerecording_ic_seconds(): number;

    game_notes_enable_spellcheck(): boolean;

    gamescope_allow_tearing(): boolean;

    gamescope_app_target_framerate(): number;

    gamescope_composite_debug(): boolean;

    gamescope_disable_framelimit(): boolean;

    gamescope_disable_mura_correction(): boolean;

    gamescope_display_refresh_rate(): number;

    gamescope_enable_app_target_framerate(): boolean;

    gamescope_force_composite(): boolean;

    gamescope_hdr_visualization(): HDRVisualization;

    gamescope_include_steamui_in_screenshots(): boolean;

    gamescope_use_game_refresh_rate_in_steam(): boolean;

    gamestream_hardware_video_encode(): boolean;

    hdr_compat_testing(): boolean;

    in_client_beta(): boolean;

    is_external_display(): boolean;

    is_steam_sideloaded(): boolean;

    jumplist_flags(): number;

    library_disable_community_content(): boolean;

    library_display_icon_in_game_list(): boolean;

    library_display_size(): number;

    library_low_bandwidth_mode(): boolean;

    library_low_perf_mode(): boolean;

    library_whats_new_show_only_product_updates(): boolean;

    max_scale_factor(): number;

    min_scale_factor(): number;

    music_download_high_quality(): boolean;

    music_pause_on_app_start(): boolean;

    music_pause_on_voice_chat(): boolean;

    music_playlist_notification(): boolean;

    music_volume(): number;

    needs_steam_service_repair(): boolean;

    no_save_personal_info(): boolean;

    oobe_test_mode_enabled(): boolean;

    os_version_unsupported(): boolean;

    overlay_fps_counter_corner(): number;

    overlay_fps_counter_high_contrast(): boolean;

    overlay_key(): Hotkey;

    overlay_restore_browser_tabs(): boolean;

    overlay_scale_interface(): boolean;

    overlay_tabs(): string;

    overlay_toolbar_list_view(): boolean;

    override_browser_composer_mode(): number;

    play_sound_on_toast(): boolean;

    preferred_monitor(): string;

    ready_to_play_includes_streaming(): boolean;

    restrict_auto_updates(): boolean;

    restrict_auto_updates_end(): number;

    restrict_auto_updates_start(): number;

    run_at_startup(): boolean;

    save_uncompressed_screenshots(): boolean;

    screenshot_items_per_row(): number;

    screenshot_key(): Hotkey;

    screenshots_path(): string;

    server_ping_rate(): number;

    setting_validation_bool(): boolean;

    setting_validation_enum(): HDRVisualization;

    setting_validation_int32(): number;

    setting_validation_uint32(): number;

    setting_validation_uint64(): number;

    setting_validation_float(): number;

    setting_validation_string(): string;

    shader_precached_size(): string;

    show_copy_count_in_library(): boolean;

    show_family_sharing_notifications(): boolean;

    show_screenshot_manager(): boolean;

    show_steam_deck_info(): boolean;

    show_store_content_on_home(): boolean;

    show_timestamps_in_console(): boolean;

    skip_steamvr_install_dialog(): boolean;

    small_mode(): boolean;

    smooth_scroll_webviews(): boolean;

    start_in_big_picture_mode(): boolean;

    start_page(): string;

    startup_movie_id(): string;

    startup_movie_local_path(): string;

    startup_movie_shuffle(): boolean;

    startup_movie_used_for_resume(): boolean;

    steam_cef_gpu_blocklist_disabled(): boolean;

    steam_input_configurator_error_msg_enable(): boolean;

    steam_networking_share_ip(): number;

    steam_os_underscan_enabled(): boolean;

    steam_os_underscan_level(): number;

    steamos_cec_enabled(): boolean;

    steamos_cec_wake_on_resume(): boolean;

    steamos_magnifier_scale(): number;

    steamos_status_led_brightness(): number;

    steamos_tdp_limit(): number;

    steamos_tdp_limit_enabled(): boolean;

    steamos_wifi_debug(): boolean;

    steamos_wifi_force_wpa_supplicant(): boolean;

    system_bluetooth_enabled(): boolean;

    turn_off_controller_on_exit(): boolean;

    voice_mic_device_name(): string;

    voice_mic_input_gain(): number;

    voice_push_to_talk_key(): Hotkey;

    voice_push_to_talk_setting(): number;

    voice_speaker_output_gain(): number;

    web_browser_home(): string;
}

export enum BroadcastEncoderSetting {
    BestQuality = 0,
    BestPerformance = 1,
}

export enum BroadcastPermission {
    Disabled = 0,
    FriendsApprove = 1,
    FriendsAllowed = 2,
    Public = 3,
    Subscribers = 4,
}

export enum EGRAudio {
    Game,
    System,
    Select,
}

export enum EGRMode {
    Never,
    Always,
    Manual,
}

export interface Hotkey {
    alt_key: boolean;
    ctrl_key: boolean;
    display_name: string;
    key_code: number;
    meta_key: boolean;
    shift_key: boolean;
}

export enum HDRVisualization {
    None = 0,
    Heatmap = 1,
    Analysis = 2,
    HeatmapExtended = 3,
    HeatmapClassic = 4,
}
