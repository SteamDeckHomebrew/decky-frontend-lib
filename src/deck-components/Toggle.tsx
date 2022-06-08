import { FC } from 'react';

import { CommonUIModule } from '../webpack';
import { ItemProps } from './Item';

export interface ToggleProps extends ItemProps {
  checked: boolean;
  disabled?: boolean;
  onChange?(checked: boolean): void;
}

export const Toggle = Object.values(CommonUIModule).find((mod: any) =>
  mod?.render?.toString()?.includes('ToggleField,fallback'),
) as FC<ToggleProps>;
