import { FC } from 'react';

import { CommonUIModule } from '../webpack';
import { ItemProps } from './Item';
import { ViteToggleField } from './vite-fallbacks';

export interface ToggleFieldProps extends ItemProps {
  highlightOnFocus?: boolean;
  checked: boolean;
  disabled?: boolean;
  onChange?(checked: boolean): void;
}

export const ToggleField = (Object.values(CommonUIModule).find(
  (mod: any) =>
    // stable || beta as of oct 2 2024, or Vite (late 2026)
    mod?.render?.toString?.()?.includes('ToggleField,fallback') ||
    mod?.render?.toString?.()?.includes('ToggleField\",') ||
    mod?.render?.toString?.()?.includes('ToggleField'),
) || ViteToggleField) as FC<ToggleFieldProps>;
