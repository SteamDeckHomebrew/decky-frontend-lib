import { ReactNode, FC, useState, CSSProperties } from "react";
import { FocusableProps, Focusable, DialogButton, GamepadEvent } from '../deck-components';
import { SFXPath, SoundFile, joinClassNames, playUISound } from '../utils';

export interface CustomButtonProps extends Omit<FocusableProps, 'focusWithinClassName' | 'flow-children' | 'onActivate' | 'onCancel' | 'onClick' | 'children' | 'noFocusRing' | 'onChange' | 'onFocus' | 'onBlur'> {
  /** The sound effect to use when clicking @default 'deck_ui_default_activation.wav' */
  audioSFX?: SoundFile;

  /** Whether or not the button sound effect should be disable @default false */
  noAudio?: boolean;

  /** Whether or not the button should be transparent @default false */
  transparent?: boolean;

  /** The type of indicator to use when focused @default highlight */
  focusMode?: CustomButtonFocusMode;

  /** Callback function to be executed when the button is clicked */
  onClick?: (e: CustomEvent) => void;

  /** CSS class name for the button's container div */
  containerClassName?: string;

  /** CSS style for the button's container div */
  containerStyle?: CSSProperties;

  /** Whether or not the button should be diabled @default false */
  disabled?: boolean;

  /** Whether or not the button should be focusable @default false */
  focusable?: boolean;

  /** Child elements of the component */
  children?: ReactNode;

  /** Callback to call when element takes focus */
  onFocus?: (evt: GamepadEvent) => void;

  /** Callback to call when element loses focus */
  onBlur?: (evt: GamepadEvent) => void;
}

/** Type of indicator to use when CustomButton is focused*/
export enum CustomButtonFocusMode {
  highlight,
  ring
}

/** CSS class names for CustomButton component */
export enum CustomButtonClasses {
  buttonContainer = 'custom-button-container',
  button = 'custom-button'
}

/** A button component with many customizable options */
export const CustomButton: FC<CustomButtonProps> = ({
  audioSFX,
  noAudio,
  disabled,
  focusable,
  transparent,
  focusMode,
  onFocus,
  onGamepadFocus,
  onBlur,
  onGamepadBlur,
  onClick,
  style,
  className,
  containerStyle,
  containerClassName,
  focusClassName,
  onOKActionDescription,
  children,
  ...focusableProps
}) => {
  const [focused, setFocused] = useState(false);
  const focusStyle = focusMode ?? CustomButtonFocusMode.highlight;

  const audioPath: SFXPath = `/sounds/${audioSFX ?? 'deck_ui_default_activation.wav'}`;

  const onClicked = (e: CustomEvent) => {
    if (!disabled) {
      !noAudio && playUISound(audioPath);
      onClick?.(e);
    }
  };

  return (
    <Focusable
      //@ts-ignore
      onClick={onClicked}
      className={joinClassNames(CustomButtonClasses.buttonContainer, containerClassName)}
      style={containerStyle}
      onActivate={focusable ?? true ? onClicked : undefined}
      onGamepadFocus={(e) => { setFocused(true); onFocus?.(e); onGamepadFocus?.(e); }}
      onGamepadBlur={(e) => { setFocused(false); onBlur?.(e); onGamepadBlur?.(e); }}
      noFocusRing={!(focusMode ?? false)}
      onOKActionDescription={disabled ? '' : onOKActionDescription}
      {...focusableProps}
    >
      <DialogButton
        className={joinClassNames(CustomButtonClasses.button, className, focusStyle === CustomButtonFocusMode.highlight && focused && 'gpfocus', focused && focusClassName)}
        style={Object.assign(transparent && (focusStyle === CustomButtonFocusMode.ring || !focused) ? { background: 'transparent' } : {}, style ?? {})}
        focusable={false}
        disabled={disabled}
      >
        {children}
      </DialogButton>
    </Focusable>
  );
};
