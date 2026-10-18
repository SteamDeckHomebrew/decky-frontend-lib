import { Unregisterable } from "../shared";

export interface Display {
    EnableUnderscan(enabled: boolean): void;

    RegisterForBrightnessChanges(callback: (state: BrightnessState) => void): Unregisterable;

    SetBrightness(brightness: number): void;

    SetUnderscanLevel(level: number): void;
}

export interface BrightnessState {
    flBrightness: number;
}
