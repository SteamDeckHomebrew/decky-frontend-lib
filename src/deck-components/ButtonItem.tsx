import { FC } from 'react';

import { CommonUIModule } from '../webpack';
import { ItemProps } from './Item';

export interface ButtonItemProps extends ItemProps {
  onClick?(e: MouseEvent): void;
  disabled?: boolean;
}
export const ButtonItem =
  (CommonUIModule.ButtonField ||
  Object.values(CommonUIModule).find(
    (mod: any) =>
      mod?.render?.toString()?.includes('"highlightOnFocus","childrenContainerWidth"') ||
     mod?.render?.toString()?.includes('childrenContainerWidth:"min"'),
  )) as FC<ButtonItemProps>;
