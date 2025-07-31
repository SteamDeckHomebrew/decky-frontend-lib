import type { CCallbackList, SubscribableValue } from '../../shared';

type VKMRef_t = any;

interface ActiveElementProps {
  onEnterKeyPress?: (() => void) | null;
  onKeyboardFullyVisible?: (() => void) | null;
  onKeyboardNavOut?: (() => void) | null;
  onKeyboardShow?: (() => void) | null;
  /**
   * @todo "text" seems actually like a key
   */
  onTextEntered?: (text: string) => void;
  strEnterKeyLabel?: string;
}

export declare class CVirtualKeyboardManager {
  k_nKeyboardWindowOffset: number;
  k_rgKeyboardLocations: string[];
  m_OnActiveElementChanged: CCallbackList<[VKMRef_t | null]>;
  m_OnActiveElementClicked: CCallbackList<[VKMRef_t | null]>;
  m_bDismissOnEnter: boolean;
  m_bIsInlineVirtualKeyboardOpen: SubscribableValue<boolean>;
  m_bIsVirtualKeyboardModal: SubscribableValue<boolean>;
  m_currentVirtualKeyboardRef: VKMRef_t;
  /**
   * Index of {@link k_rgKeyboardLocations}
   */
  m_iKeyboardLocation: number;
  m_lastActiveVirtualKeyboardRef: VKMRef_t;
  m_strDeadKeyCombined: string | null;
  m_strDeadKeyNext: string | null;
  m_strDeadKeyPending: string | null;
  /**
   * @todo enum?
   */
  m_textFieldLocation: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };

  ClearCurrentVirtualKeyboardRef(): void;
  CreateVirtualKeyboardRef(e: any, t: any): any;
  GetDeadKeyPending(): string | null;
  GetEnterKeyLabel(): string | undefined;
  HandleDeadKeyDown(key: string, deadKeyNext: string, deadKeyCombined: string): void;
  HandleNavOut(e: any): any;
  HandleVirtualKeyDown(key: string, t: any): any;
  Init(): void;
  InitKeyboardLocation(e: any, t: any, n: any): void;
  ResetDeadKeyState(): any;
  RestoreVirtualKeyboardForLastActiveElement(): void;
  /**
   * @param location -1 by default
   */
  RotateKeyboardLocation(move: boolean, ownerWindow: Window, location: number): void;
  SelectBestModalPosition(ownerWindow: any): void;
  SendClientPasteCommand(): void;
  SetActiveVirtualKeyboardTarget(ref: any, props: ActiveElementProps, ownerWindow: any): void;
  SetDismissOnEnterKey(value: boolean): void;
  SetTextFieldLocation(top: number, right: number, bottom: number, left: number): void;
  SetVirtualKeyboardActiveRef(ref: VKMRef_t): void;
  SetVirtualKeyboardDone(ownerWindow: any): void;
  SetVirtualKeyboardHidden(ownerWindow: any): void;
  SetVirtualKeyboardShownInternal(value: boolean, ownerWindow: any): void;
  SetVirtualKeyboardVisible(ownerWindow: any): void;
  /**
   * @todo ownerWindow is r?.()
   */
  ShowVirtualKeyboard(ref: VKMRef_t, props: ActiveElementProps, ownerWindow: any, bIsModal: boolean): void;
}
