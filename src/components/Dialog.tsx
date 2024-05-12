import { CSSProperties, FC, RefAttributes } from 'react';

import { CommonUIModule } from '../webpack';
import { FooterLegendProps } from './FooterLegend';

export interface DialogCommonProps extends RefAttributes<HTMLDivElement> {
  style?: CSSProperties;
  className?: string;
}

export interface DialogButtonProps extends DialogCommonProps, FooterLegendProps {
  /**
   * Enables/disables the focus around the button.
   * 
   * @note
   * Default value depends on context, so setting it to `false` will enable it.
   */
  noFocusRing?: boolean;

  /**
   * Disables the button - assigned `on*` methods will not be invoked if clicked.
   * 
   * @note
   * Depending on where it is, it might still get focus. In such case it can be 
   * partially disabled separately.
   * 
   * @see focusable.
   */
  disabled?: boolean;

  /**
   * Enables/disables the navigation based focus on button - you won't be able to navigate to
   * it via the gamepad or keyboard. 
   * 
   * @note
   * If set to `false`, it still can be clicked and **WILL** become focused until navigated away.
   * Depending on the context of where the button is, even a disabled button can focused.
   */
  focusable?: boolean;
  
  onClick?(e: MouseEvent): void;
  onPointerDown?(e: PointerEvent): void;
  onPointerUp?(e: PointerEvent): void;
  onPointerCancel?(e: PointerEvent): void;
  onMouseDown?(e: MouseEvent): void;
  onMouseUp?(e: MouseEvent): void;
  onTouchStart?(e: TouchEvent): void;
  onTouchEnd?(e: TouchEvent): void;
  onTouchCancel?(e: TouchEvent): void;
  onSubmit?(e: SubmitEvent): void;
}

const CommonDialogDivs = Object.values(CommonUIModule).filter(
  (m: any) => typeof m === 'object' && m?.render?.toString().includes('"div",Object.assign({},'),
);
const MappedDialogDivs = new Map(
  Object.values(CommonDialogDivs).map((m: any) => {
    const renderedDiv = m.render({});
    // Take only the first class name segment as it identifies the element we want
    return [renderedDiv.props.className.split(' ')[0], m];
  }),
);

export const DialogHeader = MappedDialogDivs.get('DialogHeader') as FC<DialogCommonProps>;
export const DialogSubHeader = MappedDialogDivs.get('DialogSubHeader') as FC<DialogCommonProps>;
export const DialogFooter = MappedDialogDivs.get('DialogFooter') as FC<DialogCommonProps>;
export const DialogLabel = MappedDialogDivs.get('DialogLabel') as FC<DialogCommonProps>;
export const DialogBodyText = MappedDialogDivs.get('DialogBodyText') as FC<DialogCommonProps>;
export const DialogBody = MappedDialogDivs.get('DialogBody') as FC<DialogCommonProps>;
export const DialogControlsSection = MappedDialogDivs.get('DialogControlsSection') as FC<DialogCommonProps>;
export const DialogControlsSectionHeader = MappedDialogDivs.get('DialogControlsSectionHeader') as FC<DialogCommonProps>;

export const DialogButtonPrimary = Object.values(CommonUIModule).find(
  (mod: any) => mod?.render?.toString()?.includes('DialogButton') && mod?.render?.toString()?.includes('Primary'),
) as FC<DialogButtonProps>;

export const DialogButtonSecondary = Object.values(CommonUIModule).find(
  (mod: any) =>
    mod?.render?.toString()?.includes('Object.assign({type:"button"') &&
    mod?.render?.toString()?.includes('DialogButton') &&
    mod?.render?.toString()?.includes('Secondary'),
) as FC<DialogButtonProps>;

// This is the "main" button. The Primary can act as a submit button,
// therefore secondary is chosen (also for backwards comp. reasons)
export const DialogButton = DialogButtonSecondary;
