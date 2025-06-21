import type { FC, ReactNode } from 'react';
import type { BrowserContext } from '../globals/shared';
import { findSP } from '../utils';
import { type Export, findModule, findModuleDetailsByExport, findModuleExport } from '../webpack';

export interface ShowModalProps {
  browserContext?: BrowserContext;

  /**
   * @todo Opposite of {@link bNeverPopOut}.
   */
  bForcePopOut?: boolean;

  /**
   * @todo seems unused ?
   */
  bHideActionIcons?: boolean;

  /**
   * Desktop behavior - dim (not hide) the main window when showing this modal.
   */
  bHideMainWindowForPopouts?: boolean;

  /**
   * @todo Opposite of {@link bForcePopOut}.
   */
  bNeverPopOut?: boolean;

  /**
   * Seems to be the same as "closeModal" callback, but only when the modal is a
   * popout.
   * @note Will no longer work after "Update" invocation!
   */
  fnOnClose?: () => void;

  popupHeight?: number;
  popupWidth?: number;

  /**
   * Invoked once the render is complete. Currently, it seems to be used as
   * image loading success/error callback...
   */
  promiseRenderComplete?: Promise<void>;

  /**
   * Document title. For modal title use the component's title, i.e. for
   * {@link ConfirmModal} pass `strTitle`.
   */
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

const showModalRaw: (
  modal: ReactNode,
  parent?: EventTarget,
  title?: string,
  props?: ShowModalProps,
  browserContext?: BrowserContext,
  hideActions?: { bHideActions?: boolean },
  modalManager?: unknown,
) => ShowModalResult = findModuleExport(
  (e: Export) =>
    typeof e === 'function' && e.toString().includes('props.bDisableBackgroundDismiss') && !e?.prototype?.Cancel,
);

export const showModal = (
  modal: ReactNode,
  parent?: EventTarget,
  props: ShowModalProps = {
    strTitle: 'Decky Dialog',
    bHideMainWindowForPopouts: false,
  },
): ShowModalResult => {
  return showModalRaw(modal, parent || findSP() || window, props.strTitle, props, undefined, {
    bHideActions: props.bHideActionIcons,
  });
};

export interface ModalRootProps {
  children?: ReactNode;
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

export const ConfirmModal = findModuleExport(
  (e: Export) => !e?.prototype?.OK && e?.prototype?.Cancel && e?.prototype?.render,
) as FC<ConfirmModalProps>;

export const ModalRoot = Object.values(
  findModule((m: any) => {
    if (typeof m !== 'object') return false;

    for (const prop in m) {
      if (m[prop]?.m_mapModalManager && Object.values(m)?.find((x: any) => x?.type)) {
        return true;
      }
    }

    return false;
  }) || {},
)?.find((x: any) => x?.type?.toString?.()?.includes('((function(){')) as FC<ModalRootProps>;

interface SimpleModalProps {
  active?: boolean;
  children: ReactNode;
}

const [ModalModule, _ModalPosition] = findModuleDetailsByExport(
  (e: Export) => e?.toString().includes('.ModalPosition'),
  5,
);

const ModalModuleProps = ModalModule ? Object.values(ModalModule) : [];

export const SimpleModal = ModalModuleProps.find((prop) => {
  const string = prop?.toString();
  return string?.includes('.ShowPortalModal()') && string?.includes('.OnElementReadyCallbacks.Register(');
}) as FC<SimpleModalProps>;

export const ModalPosition = _ModalPosition as FC<SimpleModalProps>;
