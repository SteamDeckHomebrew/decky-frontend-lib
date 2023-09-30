import { CSSProperties, VFC } from 'react';
import { CommonUIModule } from '../webpack';
import { NotchLabel } from './SliderField';

export interface SliderProps {
  value: number;
  resetValue?: number;
  disabled?: boolean;
  min?: number;
  max?: number;
  clampMin?: boolean;
  clampMax?: boolean;
  notchCount?: number;
  notchLabels?: NotchLabel[];
  notchTicksVisible?: boolean;
  dpadStep?: number;
  onChange?: (value: number, sliderChangeSource?: number) => void;
  onChangeStart?: (sliderChangeSource?: number) => void;
  onChangeComplete?: (value: number, sliderChangeSource?: number) => void;
  focusable?: boolean;
  handleType?: 'leftparen' | 'rightparen' | 'verticalline';
  navRef?: unknown; //nav node ref
  trackStyleOverride?: CSSProperties;
  trackTone?: 'dark';
  showHandle?: boolean;
  isKeyNavTarget?: boolean;
}

export const Slider: VFC<SliderProps> = CommonUIModule.GamepadSliderControl ||
  Object.values(CommonUIModule).find(
    (mod: any) => mod?.prototype?.UpdateSliderValueForPosition
  );
