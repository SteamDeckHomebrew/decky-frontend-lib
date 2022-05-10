import { FC } from 'react';

import { CommonUIModule } from '../webpack';

interface ButtonProps {
  label?: string;
  description?: string;
  layout?: 'below';
  onClick?(e: MouseEvent): void;
  disabled?: boolean;
  bottomSeparator?: boolean;
}

export const Button = Object.values(CommonUIModule).find((mod: any) =>
  mod?.render?.toString()?.includes('childrenContainerWidth:"min"'),
) as FC<ButtonProps>;
