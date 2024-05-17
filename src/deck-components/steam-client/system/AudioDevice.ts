import {JsPbMessage, Unregisterable} from "../index";

export interface AudioDevice {
    /**
     * If `data` is deserialized, returns {@link MsgSystemAudioManagerState}.
     * @returns {Unregisterable | any} - An object that can be used to unregister the callback.
     */
    RegisterForStateChanges(callback: (data: ArrayBuffer) => void): Unregisterable | any;

    UpdateSomething(param0: any): any; // e.UpdateSomething(t.serializeBase64String())
}

/**
 * CMsgSystemAudioManagerState
 */
export interface MsgSystemAudioManagerState extends JsPbMessage {
    counter(): number | undefined;

    hw(): MsgSystemAudioManagerStateHW | undefined;

    rtime_filter(): number | undefined;
}

export interface MsgSystemAudioManagerStateHW {
    devices: MsgSystemAudioManagerDevice[];
    nodes: MsgSystemAudioManagerNode[];
    ports: MsgSystemAudioManagerPort[];
    links: MsgSystemAudioManagerLink[];
}

export interface MsgSystemAudioManagerDevice {
    base: MsgSystemAudioManagerObject | undefined;
    name: string | undefined;
    nick: string | undefined;
    description: string | undefined;
    api: string | undefined;
}

export interface MsgSystemAudioManagerNode {
    base: MsgSystemAudioManagerObject | undefined;
    device_id: number | undefined;
    name: string | undefined;
    nick: string | undefined;
    description: string | undefined;
    edirection: SystemAudioDirection | undefined;
    volume: MsgSystemAudioVolume | undefined;
}

export interface MsgSystemAudioManagerPort {
    base: MsgSystemAudioManagerObject | undefined;
    node_id: number | undefined;
    name: string | undefined;
    alias: string | undefined;
    etype: SystemAudioPortType | undefined;
    edirection: SystemAudioPortDirection | undefined;
    is_physical: boolean | undefined;
    is_terminal: boolean | undefined;
    is_control: boolean | undefined;
    is_monitor: boolean | undefined;
}

export interface MsgSystemAudioVolume {
    entries: MsgSystemAudioVolumeChannelEntry[] | undefined;
    is_muted: boolean | undefined;
}

export interface MsgSystemAudioVolumeChannelEntry {
    echannel: SystemAudioChannel | undefined;
    volume: number | undefined;
}

export interface MsgSystemAudioManagerLink {
    base: MsgSystemAudioManagerObject | undefined;
    output_node_id: number | undefined;
    output_port_id: number | undefined;
    input_node_id: number | undefined;
    input_port_id: number | undefined;
}

export interface MsgSystemAudioManagerObject {
    id: number | undefined;
    rtime_last_update: number | undefined;
}

export enum SystemAudioDirection {
    Invalid = 0,
    Input = 1,
    Output = 2,
}

export enum SystemAudioPortDirection {
    Invalid = 0,
    Input = 1,
    Output = 2,
}

export enum SystemAudioPortType {
    Invalid = 0,
    Unknown = 1,
    Audio32f = 2,
    Midi8b = 3,
    Video32RGBA = 4,
}

export enum SystemAudioChannel {
    Invalid = 0,
    Aggregated = 1,
    FrontLeft = 2,
    FrontRight = 3,
    LFE = 4,
    BackLeft = 5,
    BackRight = 6,
    FrontCenter = 7,
    Unknown = 8,
    Mono = 9,
}