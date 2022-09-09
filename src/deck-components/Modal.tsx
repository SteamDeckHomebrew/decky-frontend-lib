import { FC, ReactNode } from 'react';

import { findModuleChild } from '../webpack';

// TODO: there is another argument, figure out what it does
export const showModal: (children: ReactNode, parent?: EventTarget) => void = findModuleChild((m) => {
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
}

export interface ConfirmModalProps extends ModalRootProps {
  onMiddleButton?(): void;
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