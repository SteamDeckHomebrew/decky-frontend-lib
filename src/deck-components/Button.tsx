import { CSSProperties, FC } from 'react';

import { CommonUIModule } from '../webpack';

export interface DialogButtonProps {
  label?: string;
  style: CSSProperties;
  className?: string;
  noFocusRing?: boolean;
  description?: string;
  layout?: 'below';
  onClick?(e: MouseEvent): void;
  disabled?: boolean;
  bottomSeparator?: boolean;
}

export const DialogButton = Object.values(CommonUIModule).find(
  (mod: any) =>
    mod?.render?.toString()?.includes('Object.assign({type:"button"') &&
    mod?.render?.toString()?.includes('DialogButton'),
) as FC<DialogButtonProps>;