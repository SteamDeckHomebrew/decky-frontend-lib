import { ChangeEventHandler, ReactNode, VFC } from 'react';

import { CommonUIModule, Module } from '../webpack';

export interface TextFieldProps {
  label?: ReactNode;
  requiredLabel?: ReactNode;
  description?: ReactNode;
  bShowCopyAction?: boolean;
  bShowClearAction?: boolean;
  bAlwaysShowClearAction?: boolean;
  bIsPassword?: boolean;
  rangeMin?: number;
  rangeMax?: number;
  mustBeNumeric?: boolean;
  mustBeURL?: boolean;
  mustBeEmail?: boolean;
  focusOnMount?: boolean;
  tooltip?: string;
  inlineControls?: ReactNode;
  onChange?(event: ChangeEventHandler<HTMLInputElement>): void;
  value?: string;
}

export const TextField = Object.values(CommonUIModule).find(
  (mod: Module) => mod?.validateUrl && mod?.validateEmail,
) as VFC<TextFieldProps>;

console.log(TextField);
