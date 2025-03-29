import { Apps } from "./App";
import {Auth} from "./Auth";
import {Broadcast} from "./Broadcast";
import {Browser} from "./Browser";
import {BrowserView} from "./browser-view";
import {ClientNotifications} from "./ClientNotifications";
import {Cloud} from "./Cloud";
import {CommunityItems} from "./CommunityItems";
import {Console} from "./Console";
import {Customization} from "./Customization";
import {Downloads} from "./Downloads";
import {FamilySharing} from "./FamilySharing";
import {FriendSettings} from "./FriendSettings";
import {Friends} from "./Friends";
import {GameNotes} from "./GameNotes";
import {GameRecording} from "./GameRecording";
import {GameSessions} from "./GameSessions";
import {Input} from "./Input";
import {InstallFolder} from "./InstallFolder";
import {Installs} from "./Installs";
import {Messaging} from "./Messaging";
import {Music} from "./Music";
import {Notifications} from "./Notifications";
import {OpenVR} from "./OpenVR";
import {Overlay} from "./Overlay";
import {Storage} from "./Storage";
import {Parental} from "./Parental";
import {RemotePlay} from "./RemotePlay";
import {ServerBrowser} from "./ServerBrowser";
import {Screenshots} from "./Screenshots";
import {Settings} from "./Settings";
import {SharedConnection} from "./SharedConnection";
import {Stats} from "./Stats";
import {SteamChina} from "./SteamChina";
import {Streaming} from "./Streaming";
import {System} from "./system";
import {UI} from "./UI";
import {Updates} from "./Updates";
import {User} from "./User";
import {WebChat} from "./WebChat";
import {WebUITransport} from "./WebUITransport";
import {Window} from "./Window";

export interface SteamClient {
    Apps: Apps;
    Auth: Auth;
    Broadcast: Broadcast;
    Browser: Browser;
    BrowserView: BrowserView;
    ClientNotifications: ClientNotifications;
    Cloud: Cloud;
    CommunityItems: CommunityItems;
    Console: Console;
    Customization: Customization;
    Downloads: Downloads;
    FamilySharing: FamilySharing;
    Friends: Friends;
    FriendSettings: FriendSettings;
    GameNotes: GameNotes;
    GameRecording: GameRecording;
    GameSessions: GameSessions;
    Input: Input;
    InstallFolder: InstallFolder;
    Installs: Installs;
    MachineStorage: Storage;
    Messaging: Messaging;
    Music: Music;
    Notifications: Notifications;
    OpenVR: OpenVR;
    Overlay: Overlay;
    Parental: Parental;
    RemotePlay: RemotePlay;
    RoamingStorage: Storage;
    Screenshots: Screenshots;
    ServerBrowser: ServerBrowser;
    Settings: Settings;
    SharedConnection: SharedConnection;
    Stats: Stats;
    SteamChina: SteamChina;
    Storage: Storage;
    Streaming: Streaming;
    System: System;
    UI: UI;
    URL: URL;
    Updates: Updates;
    User: User;
    WebChat: WebChat;
    WebUITransport: WebUITransport;
    Window: Window;
}
