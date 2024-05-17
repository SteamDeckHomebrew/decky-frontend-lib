import {OperationResponse, Unregisterable} from "./index";

export interface User {
    AuthorizeMicrotxn(txnId: any): any;

    CancelLogin: any;

    CancelMicrotxn(txnId: any): any;

    /**
     * Tries to cancel Steam shutdown.
     * @returns {void}
     * @remarks Used in the "Shutting down" dialog.
     */
    CancelShutdown(): void;

    /**
     * Opens the "Change Account" dialog.
     * @returns {void}
     */
    ChangeUser(): void;

    Connect(): Promise<OperationResponse>;

    FlipToLogin(): void;

    /**
     * Forces a shutdown while shutting down.
     * @returns {void}
     * @remarks Used in the "Shutting down" dialog.
     */
    ForceShutdown(): void;

    /**
     * Forgets an account's password.
     * @param {string} accountName - Login of the account to forget.
     * @returns {Promise<boolean>} A Promise that resolves to a boolean indicating whether the operation succeeded or not.
     */
    ForgetPassword(accountName: string): Promise<boolean>;

    /**
     * Gets your country code.
     * @returns {Promise<string>} A Promise that resolves to a string containing your country code.
     */
    GetIPCountry(): Promise<string>;

    GetLoginProgress(callback: (param0: number, param1: number) => void): Unregisterable | any;

    GetLoginUsers(): Promise<LoginUser[]>;

    GoOffline(): void;

    GoOnline(): void;

    OptOutOfSurvey(): void;

    PrepareForSystemSuspend(): any;

    Reconnect(): void;

    RegisterForConnectionAttemptsThrottled(callback: (data: ConnectionAttempt) => void): Unregisterable | any;

    RegisterForCurrentUserChanges(callback: (user: CurrentUser) => void): void;

    RegisterForLoginStateChange(callback: (accountName: string, loginState: LoginState, loginResult: number, loginPercentage: number, param4: number) => void): Unregisterable | any;

    RegisterForPrepareForSystemSuspendProgress(callback: (data: any) => void): Unregisterable | any;

    RegisterForResumeSuspendedGamesProgress: Unregisterable | any;

    RegisterForShutdownDone(callback: () => void): Unregisterable | any;

    RegisterForShutdownFailed: Unregisterable | any;

    /**
     * Register a function to be executed when a shutdown start is detected.
     * @param callback The function to be executed on shutdown start.
     */
    RegisterForShutdownStart(callback: () => void): Unregisterable | any;

    RegisterForShutdownState: Unregisterable | any;

    /**
     * Removes an account from remembered users.
     * @param {string} accountName - The account to remove.
     * @returns {void}
     */
    RemoveUser(accountName: string): void;

    RequestSupportSystemReport(reportId: string): Promise<{
        bSuccess: boolean;
    }>;

    ResumeSuspendedGames(param0: boolean): any;

    // Hardware survey information
    RunSurvey(callback: (surveySections: SurveySection[]) => void): void;

    SendSurvey: any;

    SetAsyncNotificationEnabled(appId: number, enable: boolean): any;

    /**
     * Sets given login credentials, but don't log in to that account.
     * @param {string} accountName - Account name.
     * @param {string} password - Account password.
     * @param {boolean} rememberMe - Whether to remember that account.
     * @returns {void}
     */
    SetLoginCredentials(accountName: string, password: string, rememberMe: boolean): void;

    SetOOBEComplete(): void;

    ShouldShowUserChooser(): Promise<boolean>;

    /**
     * Signs out and restarts Steam.
     * @returnsn {void}
     */
    SignOutAndRestart(): void;

    StartLogin(): void;

    // is param0 offline mode?
    StartOffline(param0: boolean): any;

    /**
     * Restarts the Steam client.
     */
    StartRestart(): any;

    StartShutdown(flag: boolean): any;
}

export interface ConnectionAttempt {
    rtCooldownExpiration: number;
}

export interface CurrentUser {
    NotificationCounts: {
        async_game_updates: number;
        comments: number;
        gifts: number;
        help_request_replies: number;
        inventory_items: number;
        invites: number;
        moderator_messages: number;
        offline_messages: number;
        trade_offers: number;
    };
    bHWSurveyPending: boolean;
    bIsLimited: boolean;
    bIsOfflineMode: boolean;
    bPromptToChangePassword: boolean;
    bSupportAckOnlyMessages: boolean;
    bSupportAlertActive: boolean;
    bSupportPopupMessage: boolean;
    clientinstanceid: string;
    strAccountBalance: string;
    strAccountBalancePending: string;
    strAccountName: string;
    strFamilyGroupID: string;
    strSteamID: string;
}

export enum LoginState {
    None = 0,
    WelcomeDialog = 1,
    WaitingForCreateUser = 2,
    WaitingForCredentials = 3,
    WaitingForNetwork = 4,
    WaitingForServerResponse = 5,
    WaitingForLibraryReady = 6,
    Success = 7,
    Quit = 8,
}

export interface LoginUser {
    personaName: string;
    accountName: string;
    rememberPassword: boolean;
    avatarUrl: string;
}

export interface SurveyEntry {
    strName: string;
    vecArgs: string[];
}

export interface SurveySection {
    strSectionName: string;
    vecEntries: SurveyEntry[];
}