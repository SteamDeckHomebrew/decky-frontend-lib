import {Unregisterable} from "../index";

export interface Display {
    EnableUnderscan(param0: boolean): any;

    RegisterForBrightnessChanges(callback: (brightnessChanges: BrightnessChange) => void): Unregisterable | any;

    SetBrightness(brightness: number): any;

    SetUnderscanLevel(param0: any): any;
}

export interface BrightnessChange {
    flBrightness: number;
}
