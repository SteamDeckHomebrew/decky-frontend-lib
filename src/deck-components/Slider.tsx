import { FC } from 'react';

import { CommonUIModule } from '../webpack';

export interface NotchLabel {
  notchIndex: number;
  label: string;
  value: number;
}

export interface SliderProps {
  label?: string;
  value: number;
  layout?: 'below';
  icon?: JSX.Element;
  min?: number;
  max?: number;
  step?: number;
  notchCount?: number;
  notchLabels?: NotchLabel[];
  onChange?(value: number): void;
}

export const Slider = Object.values(CommonUIModule).find((mod: any) =>
  mod?.render?.toString()?.includes('SliderField,fallback'),
) as FC<SliderProps>;
