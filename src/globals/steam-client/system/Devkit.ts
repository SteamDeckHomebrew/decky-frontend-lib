import { EResult, Unregisterable } from "../shared";

export interface Devkit {
    DeveloperModeChanged(state: boolean): any;

    /**
     * Registers for pairing confirmation prompts shown by the devkit settings UI.
     */
    RegisterForPairingPrompt(callback: (message: string) => boolean): Unregisterable;

    RespondToPairingPrompt(result: EResult, responseMessage: string): any;

    SetPairing(enabled: boolean): any;
}
