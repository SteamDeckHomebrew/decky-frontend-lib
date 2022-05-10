import { FC } from 'react';

import { CommonUIModule } from '../webpack';

interface ToggleProps {
  label?: string;
  description?: string;
  checked: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  onChange?(checked: boolean): void;
}

export const Toggle = Object.values(CommonUIModule).find((mod: any) =>
  mod?.render?.toString()?.includes('ToggleField,fallback'),
) as FC<ToggleProps>;
