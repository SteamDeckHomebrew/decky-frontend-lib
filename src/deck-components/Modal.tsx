import { FC, ReactNode } from 'react';
import { findModuleChild } from '../webpack';

// All of the popout options + strTitle are related. Proper usage is not yet known...
export interface ShowModalProps {
  browserContext?: unknown; // This is another Deck Object that is yet to be found
  bForcePopOut?: boolean;
  bHideActionIcons?: boolean;
  bHideMainWindowForPopouts?: boolean;
  bNeverPopOut?: boolean;
  fnOnClose?: () => void; // Seems to be the same as "closeModal" callback, but only when the modal is a popout. Will no longer work after "Update" invocation!
  popupHeight?: number;
  popupWidth?: number;
  promiseRenderComplete?: Promise<void>; // Invoked once the render is complete. Currently, it seems to be used as image loading success/error callback...
  strTitle?: string;
}

export interface ShowModalResult {
  // This method will not invoke any of the variations of "closeModal" callbacks!
  Close: () => void;

  // This method will replace the modal element completely and will not update the callback chains,
  // meaning that "closeModal" and etc. will not automatically close the modal anymore (also "fnOnClose" 
  // will not be even called upon close anymore)! You have to manually call the "Close" method when, for example, 
  // the "closeModal" is invoked in the newly updated modal: 
  //   <ModalRoot closeModal={() => { console.log("ABOUT TO CLOSE"); showModalRes.Close(); }} />
  Update: (modal: ReactNode) => void;
}

export const showModal: (modal: ReactNode, parent?: EventTarget, props?: ShowModalProps) => Promise<ShowModalResult> = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (typeof m[prop] === 'function' && m[prop].toString().includes('bHideMainWindowForPopouts:!0')) {
      return m[prop];
    }
  }
});

export interface ModalRootProps {
  onCancel?(): void;
  closeModal?(): void;
  onOK?(): void;
  onEscKeypress?(): void;
  className?: string;
  modalClassName?: string;
  bAllowFullSize?: boolean;
  bDestructiveWarning?: boolean;
  bDisableBackgroundDismiss?: boolean;
  bHideCloseIcon?: boolean;
  bOKDisabled?: boolean;
  bCancelDisabled?: boolean;
}

export interface ConfirmModalProps extends ModalRootProps {
  onMiddleButton?(): void; // setting this prop will enable the middle button
  strTitle?: ReactNode;
  strDescription?: ReactNode;
  strOKButtonText?: ReactNode;
  strCancelButtonText?: ReactNode;
  strMiddleButtonText?: ReactNode;
  bAlertDialog?: boolean; // This will open a modal with only OK button enabled
  bMiddleDisabled?: boolean;
}

export const ConfirmModal = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (!m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) {
      return m[prop];
    }
  }
}) as FC<ConfirmModalProps>;

export const ModalRoot = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) {
      return m[prop];
    }
  }
}) as FC<ModalRootProps>;
