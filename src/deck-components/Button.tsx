import { FC } from 'react';

import { CommonUIModule } from '../webpack';

interface ButtonProps {
  className?: string;
  noFocusRing?: boolean;
  disabled?: boolean;
  onClick?(e: MouseEvent): void;
  onPointerDown?(e: PointerEvent): void;
  onPointerUp?(e: PointerEvent): void;
  onPointerCancel?(e: PointerEvent): void;
  onMouseDown?(e: PointerEvent): void;
  onMouseUp?(e: MouseEvent): void;
  onTouchStart?(e: TouchEvent): void;
  onTouchEnd?(e: TouchEvent): void;
  onTouchCancel?(e: TouchEvent): void;
  onSubmit?(e: SubmitEvent): void;
}

const DialogButton = Object.values(CommonUIModule).find(
  (mod: any) =>
    mod?.render?.toString()?.includes('Object.assign({type:"button"') &&
    mod?.render?.toString()?.includes('DialogButton'),
) as any;

// Button isn't exported, so call DialogButton to grab it

export const Button = DialogButton!.render({}).type as FC<ButtonProps>; // its actually a forwarded ref but that doesn't really matter in usage
