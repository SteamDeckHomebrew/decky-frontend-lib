import { FC, VFC } from 'react';

import { ControlsModule } from '../modules';

interface ButtonProps {
  label?: string;
  description?: string;
  layout?: 'below';
  onClick?(): void;
  disabled?: boolean;
  bottomSeparator?: boolean;
}

export const Button: FC<ButtonProps> = ControlsModule.a;

interface SwitchProps {
  label?: string;
  description?: string;
  checked: boolean;
  icon?: JSX.Element;
  disabled?: boolean;
  onChange?(checked: boolean): void;
}

export const Switch: VFC<SwitchProps> = ControlsModule.j;

interface NotchLabel {
  notchIndex: number;
  label: string;
  value: number;
}

interface SliderProps {
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

export const Slider: VFC<SliderProps> = ControlsModule.l;
