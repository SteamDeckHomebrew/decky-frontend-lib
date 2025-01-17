import {OperationResponse, Unregisterable} from "./index";

export interface User {
    AuthorizeMicrotxn(txnId: any): any;

    CancelLogin: any;

    CancelMicrotxn(txnId: any): any;

    /**
     * Tries to cancel Steam shutdown.
     * @remarks Used in the "Shutting down" dialog.
     */
    CancelShutdown(): void;

    /**
     * Opens the "Change Account" dialog.
     */
    ChangeUser(): void;

    Connect(): Promise<OperationResponse>;

    FlipToLogin(): void;

    /**
     * Forces a shutdown while shutting down.
     * @remarks Used in the "Shutting down" dialog.
     */
    ForceShutdown(): void;

    /**
     * Forgets an account's password.
     * @param accountName Login of the account to forget.
     * @returns A Promise that resolves to a boolean indicating whether the operation succeeded or not.
     */
    ForgetPassword(accountName: string): Promise<boolean>;

    /**
     * Gets your country code.
     * @returns A Promise that resolves to a string containing your country code.
     */
    GetIPCountry(): Promise<string>;

    GetLoginProgress(callback: (param0: number, param1: number) => void): Unregisterable;

    GetLoginUsers(): Promise<LoginUser[]>;

    GoOffline(): void;

    GoOnline(): void;

    OptOutOfSurvey(): void;

    PrepareForSystemSuspend(): any;

    Reconnect(): void;

    RegisterForConnectionAttemptsThrottled(callback: (data: ConnectionAttempt) => void): Unregisterable;

    RegisterForCurrentUserChanges(callback: (user: CurrentUser) => void): void;

    RegisterForLoginStateChange(callback: (accountName: string, loginState: ELoginState, loginResult: number, loginPercentage: number, param4: number) => void): Unregisterable;

    RegisterForPrepareForSystemSuspendProgress(callback: (data: any) => void): Unregisterable;

    RegisterForResumeSuspendedGamesProgress: Unregisterable;

    RegisterForShowHardwareSurvey(callback: () => void): Unregisterable;

    RegisterForShutdownDone(callback: () => void): Unregisterable;

    RegisterForShutdownFailed: Unregisterable;

    /**
     * Register a function to be executed when a shutdown start is detected.
     * @param callback The function to be executed on shutdown start.
     */
    RegisterForShutdownStart(callback: () => void): Unregisterable;

    RegisterForShutdownState: Unregisterable;

    /**
     * Removes an account from remembered users.
     * @param accountName The account to remove.
     */
    RemoveUser(accountName: string): void;

    RequestSupportSystemReport(reportId: string): Promise<{
        bSuccess: boolean;
    }>;

    ResumeSuspendedGames(param0: boolean): any;

    // Hardware survey information
    RunSurvey(callback: (surveySections: SurveySection[]) => void): void;

    SendSurvey(): void;

    SetAsyncNotificationEnabled(appId: number, enable: boolean): any;

    /**
     * Sets given login credentials, but don't log in to that account.
     * @param accountName Account name.
     * @param password Account password.
     * @param rememberMe Whether to remember that account.
     */
    SetLoginCredentials(accountName: string, password: string, rememberMe: boolean): void;

    SetOOBEComplete(): void;

    ShouldShowUserChooser(): Promise<boolean>;

    /**
     * Signs out and restarts Steam.
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

export enum ELoginState {
    None,
    WelcomeDialog,
    WaitingForCreateUser,
    WaitingForCredentials,
    WaitingForNetwork,
    WaitingForServerResponse,
    WaitingForLibraryReady,
    Success,
    Quit,
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
