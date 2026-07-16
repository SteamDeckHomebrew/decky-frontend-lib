import { Unregisterable } from "./shared";

export interface Messaging {
    /**
     * Registers for messages posted to a Steam UI message section.
     *
     * Known sections include `ContentManagement`, `FriendsUI`, `JumpList`,
     * `Library`, `LibraryCommands`, `PostToLibrary`, and `PostToSteamUI`.
     */
    RegisterForMessages<T extends string>(
        section: T,
        callback: (section: T, message: string, args: string) => void,
    ): Unregisterable;

    /*
    function m(e) {
        SteamClient.Messaging.PostMessage("LibraryCommands", "ShowFriendChatDialog", JSON.stringify({
            steamid: e.persona.m_steamid.ConvertTo64BitString()
        }))
    }
    SteamClient.Messaging.PostMessage("FriendsUI", "AcceptedRemotePlayInvite", JSON.stringify({id: this.appID})) : SteamClient.Messaging.PostMessage("FriendsUI", "AcceptedGameInvite", JSON.stringify({id: this.appID}))
     */
    /**
     * Posts a string payload to a Steam UI message section.
     * @param section Message bus section to post to.
     * @param message Message name within the section.
     * @param args String payload, usually JSON.
     */
    PostMessage(section: string, message: string, args: string): void;
}
