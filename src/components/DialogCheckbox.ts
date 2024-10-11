import { FC, ReactNode } from 'react';

import { findModuleExport } from '../webpack';
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

// Do not access KeyDown, SetChecked, Toggle here as they are getters and accessing them outside of a render breaks them globally
export const DialogCheckbox = findModuleExport(e =>
  e?.prototype &&
  typeof e?.prototype == "object" &&
  "GetPanelElementProps" in e?.prototype &&
  "SetChecked" in e?.prototype &&
  "Toggle" in e?.prototype &&
  // beta || stable as of oct 2 2024
  (e?.prototype?.render?.toString?.().includes('="DialogCheckbox"') || (
    e.contextType &&
    e.prototype?.render?.toString?.().includes('fallback:')
  ))
) as FC<DialogCheckboxProps>;
