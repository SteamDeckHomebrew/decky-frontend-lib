import {SteamClient} from "./steam-client";
export * from "./steam-client/shared";

declare global {
    var SteamClient: SteamClient;
}