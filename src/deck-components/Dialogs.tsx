import { FC, VFC } from 'react';

import { DialogModule } from '../modules';

export const Dialog: FC = DialogModule.a;

export const DialogTitle: FC = DialogModule.u;

export const DialogBody: FC = DialogModule.d;

export const DialogActions: FC = DialogModule.r;

interface DialogConfirmButtonsProps {
  focusButton: 'primary';
  strOKText: string;
  onOK?(): void;
  onCancel?(): void;
}

export const DialogConfirmButtons: VFC<DialogConfirmButtonsProps> = DialogModule.A;
