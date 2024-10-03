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

export const DialogCheckbox = Object.values(
  findModule((m: any) => {
    if (typeof m !== 'object') return false;
    for (const prop in m) {
      if (m[prop]?.prototype?.GetPanelElementProps) return true;
    }
    return false;
  }),
).find(
  (m: any) =>
    m?.prototype?.SetChecked &&
    m?.prototype?.Toggle &&
    m?.prototype?.GetPanelElementProps &&
    // beta || stable as of oct 2 2024
    (m?.prototype?.render?.toString().includes('="DialogCheckbox"') || (
      m.contextType &&
      m.prototype?.render.toString().includes('fallback:')
    ))
) as FC<DialogCheckboxProps>;
