import { FC, ReactNode } from 'react';

import { findModule } from '../webpack';
import { DialogCommonProps } from './Dialog';
import { FooterLegendProps } from './FooterLegend';

export interface DialogCheckboxProps extends DialogCommonProps, FooterLegendProps {
  onChange?(checked: boolean): void;
  label?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
  tooltip?: string;
  color?: string;
  highlightColor?: string;
  bottomSeparator?: 'standard' | 'thick' | 'none';
  controlled?: boolean;
  checked?: boolean;
  onClick?(evt: Event): void;
}

export const DialogCheckbox = Object.values(findModule((m: any) => {
  if (typeof m !== 'object') return false;
  for (const prop in m) {
    if (m[prop]?.prototype?.GetPanelElementProps) return true;
  }
  return false;
})).find((m: any) =>
  m.contextType &&
  m.prototype?.render.toString().includes('fallback:') &&
  m?.prototype?.SetChecked &&
  m?.prototype?.Toggle &&
  m?.prototype?.GetPanelElementProps
) as FC<DialogCheckboxProps>;
