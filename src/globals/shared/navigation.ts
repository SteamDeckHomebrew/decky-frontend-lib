export enum ENavigationSourceType {
  UNKNOWN,
  GAMEPAD,
  KEYBOARD_SIMULATOR,
  MOUSE,
  TOUCH,
  LPAD,
  RPAD,
}

export interface NavigationSource {
  eActivationSourceType: ENavigationSourceType;
  nActiveGamepadIndex: number;
  nLastActiveGamepadIndex: number;
}
