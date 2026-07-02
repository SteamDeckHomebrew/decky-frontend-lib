import {
    JsPbMessage,
    OperationResponse,
    SerializedProto,
    SerializedProtoBase64,
    Unregisterable,
} from "../shared";

// CMsgSystemDisplayManagerState, CMsgSystemDisplayManagerSetMode
export interface DisplayManager {
    /**
     * Clears the mode override for a display.
     */
    ClearModeOverride(displayId: number): any;

    /**
     * Gets the current display manager state. `reply` is a serialized
     * {@link CMsgSystemDisplayManagerState} message.
     */
    GetState(): Promise<DisplayManagerStateResponse>;

    RegisterForStateChanges(callback: () => void): Unregisterable;

    SetCompatibilityMode(displayId: number): any;

    SetGamescopeInternalResolution(width: number, height: number): any;

    /**
     * Sets a display mode using a serialized {@link CMsgSystemDisplayManagerSetMode}.
     */
    SetMode(base64: SerializedProtoBase64<CMsgSystemDisplayManagerSetMode>): any;
}

export interface DisplayManagerStateResponse extends OperationResponse {
    reply?: SerializedProto<CMsgSystemDisplayManagerState>;
}

export interface CMsgSystemDisplayManagerState extends JsPbMessage {
    displays(): CMsgSystemDisplay[];

    is_mode_switching_supported(): boolean | undefined;

    compatibility_mode(): number | undefined;
}

export interface CMsgSystemDisplay extends JsPbMessage {
    id(): number | undefined;

    name(): string | undefined;

    description(): string | undefined;

    is_primary(): boolean | undefined;

    is_enabled(): boolean | undefined;

    is_internal(): boolean | undefined;

    has_mode_override(): boolean | undefined;

    width_mm(): number | undefined;

    height_mm(): number | undefined;

    current_mode_id(): number | undefined;

    modes(): CMsgSystemDisplayMode[];

    refresh_rate_min(): number | undefined;

    refresh_rate_max(): number | undefined;

    is_vrr_capable(): boolean | undefined;

    is_vrr_output_active(): boolean | undefined;

    is_hdr_capable(): boolean | undefined;

    is_hdr_output_active(): boolean | undefined;

    supported_refresh_rates(): number[];

    rgb_range(): number | undefined;
}

export interface CMsgSystemDisplayMode extends JsPbMessage {
    id(): number | undefined;

    width(): number | undefined;

    height(): number | undefined;

    refresh_hz(): number | undefined;
}

export interface CMsgSystemDisplayManagerSetMode extends JsPbMessage {
    display_id(): number | undefined;

    mode_id(): number | undefined;

    rgb_range(): number | undefined;
}
