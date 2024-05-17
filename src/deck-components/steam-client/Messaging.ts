import {Unregisterable} from "./index";

export interface Messaging {
    // section - "ContentManagement", "JumpList", "PostToLibrary"
    // seems multipurpose
    // callback arguments are the same as in PostMessage
    RegisterForMessages(
        section: string,
        callback: (section: string, param1: string, message: string) => void,
    ): Unregisterable | any;

    /*
    function m(e) {
        SteamClient.Messaging.PostMessage("LibraryCommands", "ShowFriendChatDialog", JSON.stringify({
            steamid: e.persona.m_steamid.ConvertTo64BitString()
        }))
    }
    SteamClient.Messaging.PostMessage("FriendsUI", "AcceptedRemotePlayInvite", JSON.stringify({id: this.appID})) : SteamClient.Messaging.PostMessage("FriendsUI", "AcceptedGameInvite", JSON.stringify({id: this.appID}))
     */
    PostMessage(section: string, param1: string, message: string): void;
}