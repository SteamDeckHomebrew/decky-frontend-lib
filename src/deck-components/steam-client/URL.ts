import {Unregisterable} from "./index";

export interface URL {
    /**
     * Executes a steam:// URL.
     * @param url The URL to execute.
     */
    ExecuteSteamURL(url: string): void;

    /**
     * @remarks The array may be empty.
     */
    GetSteamURLList(param0: string[]): Promise<SteamURLs>;

    GetWebSessionID(): Promise<string>;

    /**
     * Registers a callback to be called when a steam:// URL gets executed.
     * @param section `rungameid`, `open`, etc.
     * @param callback The callback function to be called.
     * @returns An object that can be used to unregister the callback.
     */
    RegisterForRunSteamURL(section: string, callback: (param0: number, url: string) => void): Unregisterable;

    RegisterForSteamURLChanges(callback: () => void): void;
}

export interface SteamURL {
    url: string;
    /**
     * @todo enum?
     */
    feature: number;
}

export interface SteamURLs {
    CommunityImages: SteamURL;
    StoreAppImages: SteamURL;
    BaseURLSharedCDN: SteamURL;
    ClanAssetCDN: SteamURL;
    CommunityCDN: SteamURL;
    AvatarBaseURL: SteamURL;
    StoreCDN: SteamURL;
    WebAPI: SteamURL;
    LocalSSA: SteamURL;
}
