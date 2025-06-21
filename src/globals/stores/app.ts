import type { CMInterface } from '../shared/cm';
import type { CurrentUser, WebUIServiceTransport } from '../shared/interfaces';
import type { SteamCloudStorage } from '../shared/storage';

export interface App {
  m_CurrentUser: CurrentUser;
  m_bFinishedStage1: boolean;
  m_bHaveShownSupportAlertModal: boolean;
  m_bServicesInitialized: boolean;
  m_bStartedStage2: boolean;
  m_bSupportAlertModalActive: boolean;
  /**
   * @todo Does not seem to be used.
   */
  m_bWasEverLoggedIn: boolean;
  m_cloudStorage: SteamCloudStorage;
  m_cm: CMInterface;
  m_eLoginState: number;
  m_transportClient: WebUIServiceTransport;

  BFinishedInitStageOne(): boolean;
  BHardwareSurveyPending(): boolean;
  BHasAckOnlyActiveSupportAlerts(): boolean;
  BHasActiveSupportAlerts(): boolean;
  BHasCurrentUser(): boolean;
  BIsFamilyGroupMember(e: any): boolean;
  BIsInFamilyGroup(): boolean;
  BIsInOOBE(): boolean;
  BIsOfflineMode(): boolean;
  BMustShowSupportAlertDialog(): boolean;
  BSupportAlertDialogActive(): boolean;
  BWasEverLoggedIn(): boolean;
  CloseSupportAlertsModal(): void;
  GetCloudStorageForLibrary(): SteamCloudStorage;
  GetCurrentUser(): CurrentUser;
  GetFamilyGroupID(): CurrentUser['strFamilyGroupID'];
  GetFamilyGroupName(): CurrentUser['strFamilyGroupName'];
  GetServicesInitialized(): boolean;
  Init(cm: CMInterface): Promise<void>;
  InitStage2(): Promise<void>;
  OptOutOfSurvey(): void;
  SendSurvey(): void;
  ShowSupportAlertsModal(): void;
  WaitForServicesInitialized(): Promise<boolean>;
}
