import { FC } from 'react';

import { CommonUIModule } from '../common-modules';
import { ItemProps } from './Item';

export interface ToggleFieldProps extends ItemProps {
  highlightOnFocus?: boolean;
  checked: boolean;
  disabled?: boolean;
  onChange?(checked: boolean): void;
}

export const ToggleField = Object.values(CommonUIModule).find((mod: any) =>
  mod?.render?.toString?.()?.includes("ToggleField`,")
) as FC<ToggleFieldProps>;
