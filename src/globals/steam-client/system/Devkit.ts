import { EResult, Unregisterable } from "../shared";

export interface Devkit {
    /**
     * Legacy developer-mode notification entry point.
     * @deprecated Not present on the current live Devkit bridge.
     */
    DeveloperModeChanged(state: boolean): unknown;

    /**
     * Registers for pairing confirmation prompts shown by the devkit settings UI.
     */
    RegisterForPairingPrompt(callback: (message: string) => boolean): Unregisterable;

    RespondToPairingPrompt(result: EResult, responseMessage: string): void;

    SetPairing(enabled: boolean): void;
}
