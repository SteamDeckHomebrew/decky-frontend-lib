import { ChangeEventHandler, HTMLAttributes, ReactNode, FC } from 'react';

import { Export, findModuleExport } from '../webpack';

export interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
  requiredLabel?: ReactNode;
  description?: ReactNode;
  disabled?: boolean;
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
  placeholder?: string;
  inlineControls?: ReactNode;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

// The gamepad text field is a class component that validates its input.
export const TextField = findModuleExport((e: Export) => {
  const source = e?.toString?.();
  return !!source && source.includes('validateUrl') && source.includes('validateEmail');
}) as FC<TextFieldProps>;
