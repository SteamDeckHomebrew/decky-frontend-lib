import { ReactNode } from 'react';

export enum GamepadButton {
  INVALID,
  OK,
  CANCEL,
  SECONDARY,
  OPTIONS,
  BUMPER_LEFT,
  BUMPER_RIGHT,
  TRIGGER_LEFT,
  TRIGGER_RIGHT,
  DIR_UP,
  DIR_DOWN,
  DIR_LEFT,
  DIR_RIGHT,
  SELECT,
  START,
  LSTICK_CLICK,
  RSTICK_CLICK,
  LSTICK_TOUCH,
  RSTICK_TOUCH,
  LPAD_TOUCH,
  LPAD_CLICK,
  RPAD_TOUCH,
  RPAD_CLICK,
  REAR_LEFT_UPPER,
  REAR_LEFT_LOWER,
  REAR_RIGHT_UPPER,
  REAR_RIGHT_LOWER,
  STEAM_GUIDE,
  STEAM_QUICK_MENU,
}
export enum NavEntryPositionPreferences {
  /**
   * Always give focus to the first child element.
   */
  FIRST,

  /**
   * Always give focus to the last child element.
   */
  LAST,

  /**
   * Give focus to the child element that would maintain the flow in the X axis.
   * 
   * Imagine you have a calculator window with 9 standard buttons.
   * You have 3 rows of buttons, with 3 buttons per row.
   * If you select button with number 8 and navigate down, the buttons
   * will be navigated in the following order 8->5->3.
   * The flow is maintained for the X axis while you're navigating the Y axis.
   */
  MAINTAIN_X,

  /**
   * Give focus to the child element that would maintain the flow in the Y axis.
   * 
   * Imagine you have a calculator window with 9 standard buttons.
   * You have 3 columns of buttons, with 3 buttons per column.
   * If you select button with number 4 and navigate right, the buttons
   * will be navigated in the following order 4->5->6.
   * The flow is maintained for the Y axis while you're navigating the X axis.
   */
  MAINTAIN_Y,

  /**
   * Give focus to the first child element with `preferredFocus == true` prop.
   */
  PREFERRED_CHILD,
}
export interface GamepadEventDetail {
  button: number;
  is_repeat?: boolean;
  source: number;
}
export declare type ActionDescriptionMap = {
  [key in GamepadButton]?: ReactNode;
};
export declare type GamepadEvent = CustomEvent<GamepadEventDetail>;
export interface FooterLegendProps {
  /**
   * Navigation entry strategy to be used when gaining focus during navigation.
   * 
   * This is meant to be used on a parent container that has children. Once the
   * container (e.g. Focusable) is navigated to and has children in it, the children
   * is then navigated to (focused) using the provided strategy.
   * 
   * If no strategy is provided, it seems that the `NavEntryPositionPreferences.FIRST`
   * is used initialy, but for the next time the parent remembers previously focused
   * child and focused back on it instead.
   */
  navEntryPreferPosition?: NavEntryPositionPreferences;

  /**
   * Mark the element as the preferred child (to be focused) whenever the parent uses the
   * `NavEntryPositionPreferences.PREFERRED_CHILD` navigation strategy.
   */
  preferredFocus?: boolean;

  actionDescriptionMap?: ActionDescriptionMap;
  onOKActionDescription?: ReactNode;
  onCancelActionDescription?: ReactNode;
  onSecondaryActionDescription?: ReactNode;
  onOptionsActionDescription?: ReactNode;
  onMenuActionDescription?: ReactNode;
  onButtonDown?: (evt: GamepadEvent) => void;
  onButtonUp?: (evt: GamepadEvent) => void;
  onOKButton?: (evt: GamepadEvent) => void;
  onCancelButton?: (evt: GamepadEvent) => void;
  onSecondaryButton?: (evt: GamepadEvent) => void;
  onOptionsButton?: (evt: GamepadEvent) => void;
  onGamepadDirection?: (evt: GamepadEvent) => void;
  onGamepadFocus?: (evt: GamepadEvent) => void;
  onGamepadBlur?: (evt: GamepadEvent) => void;
  onMenuButton?: (evt: GamepadEvent) => void;
}
