import {Unregisterable} from "./index";

/**
 * Represents functions related to controlling music playback in the Steam client.
 */
export interface Music {
    /**
     * Decreases the music volume by 10%.
     */
    DecreaseVolume(): void;

    /**
     * Increases the music volume by 10%.
     */
    IncreaseVolume(): void;

    /**
     * @param param0 Unknown parameter usage.
     * @param param1 Unknown parameter usage.
     * @todo: unknown parameter usages, I have tried soundtrack identifier + track index and in reverse as well
     */
    PlayEntry(param0: number, param1: number): void;

    /**
     * Plays the next track in the music playlist.
     */
    PlayNext(): void;

    /**
     * Plays the previous track in the music playlist.
     */
    PlayPrevious(): void;

    /**
     * Registers a callback function to be called when music playback changes.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForMusicPlaybackChanges(callback: (param0: boolean | MusicTrack) => void): Unregisterable;

    /**
     * Registers a callback function to be called when the music playback position changes.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForMusicPlaybackPosition(callback: (position: number) => void): Unregisterable;

    /**
     * Sets the playback position of the music track.
     * @param position The position to set in seconds.
     */
    SetPlaybackPosition(position: number): void;

    /**
     * Sets the repeat status for music playback.
     * @param status The repeat status.
     */
    SetPlayingRepeatStatus(status: MusicRepeatStatus): void;

    /**
     * Sets the shuffle status for music playback.
     * @param value True to enable shuffle, false to disable shuffle.
     */
    SetPlayingShuffled(value: boolean): void;

    /**
     * Sets the volume for music playback.
     * @param volume The volume level to set.
     * @remarks Ranges from 0 to 100.
     */
    SetVolume(volume: number): void;

    /**
     * Toggles the mute state of the music volume.
     */
    ToggleMuteVolume(): void;

    /**
     * Toggles between play and pause for music playback.
     */
    TogglePlayPause(): void;
}

export interface MusicTrack {
    uSoundtrackAppId: number;
    ePlaybackStatus: MusicPlaybackStatus;
    eRepeatStatus: MusicRepeatStatus;
    bShuffle: boolean;
    nVolume: number;
    nActiveTrack: number;
    nLengthInMsec: number;
}

export enum MusicPlaybackStatus {
    Undefined = 0,
    Playing = 1,
    Paused = 2,
    Idle = 3,
}

export enum MusicRepeatStatus {
    None = 0,
    All = 1,
    Once = 2,
    Max = 3,
}
