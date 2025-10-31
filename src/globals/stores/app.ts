import type { CMInterface } from '../shared/cm';
import type { CCloudStorage, EUserConfigStoreNamespace } from '../shared/storage';
import type { CurrentUser, ELoginState } from '../steam-client/User';

export interface CApp {
  m_CurrentUser: CurrentUser;
  m_bFinishedStage1: boolean;
  m_bHaveShownSupportAlertModal: boolean;
  m_bServicesInitialized: boolean;
  m_bStartedStage2: boolean;
  m_bWasEverLoggedIn: boolean;
  m_cm: CMInterface;
  m_eLoginState: ELoginState;
  m_mapCloudStorage: Map<EUserConfigStoreNamespace, CCloudStorage>;

  BFinishedInitStageOne(): boolean;

  /**
   * @returns `true` if there is a hardware survey pending.
   */
  BHardwareSurveyPending(): boolean;

  BHasAckOnlyActiveSupportAlerts(): boolean;

  BHasActiveSupportAlerts(): boolean;

  /**
   * @returns `true` if there is a currently logged in user.
   */
  BHasCurrentUser(): boolean;

  /**
   * @returns `true` if provided SteamID3 is in the current user's family group.
   */
  BIsFamilyGroupMember(steamid3: number): boolean;

  /**
   * @returns `true` if the current user is in a family group.
   */
  BIsInFamilyGroup(): boolean;

  /**
   * @returns `true` if Steam is in out of the box experience.
   */
  BIsInOOBE(): boolean;

  /**
   * @returns `true` if Steam is in offline mode.
   */
  BIsOfflineMode(): boolean;

  BMustShowSupportAlertDialog(): boolean;

  /**
   * @todo Does not seem to be used.
   */
  BWasEverLoggedIn(): boolean;

  /**
   * @returns the cloud storage for the provided namespace.
   */
  GetCloudStorage(namespace: EUserConfigStoreNamespace): CCloudStorage | undefined;

  /**
   * Like {@link GetCloudStorage}, but for
   * {@link EUserConfigStoreNamespace.Library}.
   */
  GetCloudStorageForLibrary(): CCloudStorage;

  /**
   * @returns the currently logged in user.
   */
  GetCurrentUser(): CurrentUser;

  /**
   * @returns the currently logged in user's family group ID.
   */
  GetFamilyGroupID(): CurrentUser['strFamilyGroupID'];

  /**
   * @returns the currently logged in user's family group name.
   */
  GetFamilyGroupName(): CurrentUser['strFamilyGroupName'];

  /**
   * @returns `true` if all services have been initialized.
   */
  GetServicesInitialized(): boolean;

  OptOutOfSurvey(): void;

  SendSurvey(): void;

  ShowSupportAlertsModal(): void;

  /**
   * Wait until all stores (e.g. AppStore & SettingsStore globals) load.
   *
   * Full list of stores can be found in the `App.InitStage2` function def.
   */
  WaitForServicesInitialized(): Promise<boolean>;
}
