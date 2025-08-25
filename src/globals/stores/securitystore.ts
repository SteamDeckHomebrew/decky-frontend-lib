interface LockScreenSettings_t {
  version: number;
  bLockOnWake: boolean;
  bLockOnLogin: boolean;
  bLockDesktopMode: boolean;
  strPIN: string;
  strOwnerAccountName: string;
  bUserForgotPin: boolean;
  bShowResetPinModal: boolean;
}

interface ActiveLockScreenProps_t {
  allowAnyPIN?: boolean;
  closeModal?: () => void;
  hideForgotPIN?: boolean;
  preventCancel?: boolean;
  preventSteamButtons?: boolean;
  onSuccess?: () => void;
}

export declare class CSecurityStore {
  BConsumeLockTocket(): boolean;
  BResettingPIN(): boolean;
  BShowResetPINModal(): boolean;
  BeginPINReset(): Promise<void>;
  ClearPIN(bShowResetPinModal: boolean): void;
  ClearPINIfNotUsed(): void;
  GetActiveLockScreenProps(): ActiveLockScreenProps_t | null;
  GetSettings(): LockScreenSettings_t;
  InitialLoginComplete(e);
  IsLockScreenActive(): boolean;
  ProvideLockTockey;
  SetActiveLockScreenProps(props: ActiveLockScreenProps_t | null): void;
  SetHasShownResetPINModal;
  SetSettings(settings: LockScreenSettings_t): void;
}
