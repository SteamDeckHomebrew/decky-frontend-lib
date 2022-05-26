import { FC } from 'react';

import { CommonUIModule } from '../webpack';

interface ButtonItemProps {
  label?: string;
  description?: string;
  layout?: 'below';
  icon?: JSX.Element;
  onClick?(e: MouseEvent): void;
  disabled?: boolean;
  bottomSeparator?: boolean;
}

export const ButtonItem = Object.values(CommonUIModule).find((mod: any) =>
  mod?.render?.toString()?.includes('childrenContainerWidth:"min"'),
) as FC<ButtonItemProps>;
