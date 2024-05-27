import { FC } from 'react';

import { CommonUIModule } from '../webpack';
import { ItemProps } from './Item';

export interface NotchLabel {
  notchIndex: number;
  label: string;
  value?: number;
}

export interface SliderFieldProps extends ItemProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  notchCount?: number;
  notchLabels?: NotchLabel[];
  notchTicksVisible?: boolean;
  showValue?: boolean;
  resetValue?: number;
  disabled?: boolean;
  editableValue?: boolean;
  validValues?: 'steps' | 'range' | ((value: number) => boolean);
  valueSuffix?: string;
  minimumDpadGranularity?: number;
  onChange?(value: number): void;
  className?: string;
}

export const SliderField = Object.values(CommonUIModule).find((mod: any) =>
  mod?.toString()?.includes('SliderField,fallback'),
) as FC<SliderFieldProps>;
