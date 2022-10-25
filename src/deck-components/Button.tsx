import { FC } from 'react';

import { DialogButton, DialogButtonProps } from './Dialog';

export interface ButtonProps extends DialogButtonProps {}

// Button isn't exported, so call DialogButton to grab it
export const Button = (DialogButton as any)?.render({}).type as FC<ButtonProps>;
