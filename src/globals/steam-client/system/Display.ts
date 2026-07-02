import { Unregisterable } from "../shared";

export interface Display {
    EnableUnderscan(enabled: boolean): any;

    RegisterForBrightnessChanges(callback: (state: BrightnessState) => void): Unregisterable;

    SetBrightness(brightness: number): any;

    SetUnderscanLevel(level: number): any;
}

export interface BrightnessState {
    flBrightness: number;
}
