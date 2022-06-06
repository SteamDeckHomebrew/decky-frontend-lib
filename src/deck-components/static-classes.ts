import { findModuleChild } from '../webpack';

type StaticClasses = Record<
  | 'ActiveTab'
  | 'AllTabContents'
  | 'BatteryDetailsLabels'
  | 'BatteryIcon'
  | 'BatteryPercentageLabel'
  | 'BatteryProjectedLabel'
  | 'BatteryProjectedValue'
  | 'BatterySectionContainer'
  | 'Blocked'
  | 'ComingSoon'
  | 'Container'
  | 'ContentTransition'
  | 'Down'
  | 'EmptyNotifications'
  | 'Enter'
  | 'EnterActive'
  | 'Exit'
  | 'ExitActive'
  | 'FooterBoxShadow'
  | 'FriendsListTabPanel'
  | 'FriendsTitle'
  | 'FullHeight'
  | 'HeaderAndFooterVisible'
  | 'HeaderContainer'
  | 'ItemFocusAnim-darkGrey'
  | 'ItemFocusAnim-darkerGrey'
  | 'ItemFocusAnim-darkerGrey-nocolor'
  | 'ItemFocusAnim-green'
  | 'ItemFocusAnim-grey'
  | 'ItemFocusAnimBorder-darkGrey'
  | 'KeyboardButton'
  | 'Label'
  | 'LowBattery'
  | 'LowBatteryGauge'
  | 'Menu'
  | 'Open'
  | 'PanelExitAnchor'
  | 'PanelOuterNav'
  | 'PanelSection'
  | 'PanelSectionRow'
  | 'PanelSectionTitle'
  | 'QuickAccessMenu'
  | 'ReallyLow'
  | 'Remaining'
  | 'Selected'
  | 'Tab'
  | 'TabContentColumn'
  | 'TabGroupPanel'
  | 'TabPanelHidden'
  | 'Tabs'
  | 'Text'
  | 'Title'
  | 'TransitionMenuDelay'
  | 'Up'
  | 'ViewPlaceholder'
  | 'VoiceTab'
  | 'duration-app-launch'
  | 'focusAnimation'
  | 'hoverAnimation',
  string
>;

type GamepadDialogClasses = Record<
  | 'duration-app-launch'
  | 'GamepadDialogContent'
  | 'GamepadDialogContent_InnerWidth'
  | 'Field'
  | 'Button'
  | 'NoMinWidth'
  | 'ActiveAndUnfocused'
  | 'StandaloneFieldSeparator'
  | 'StandardPadding'
  | 'CompactPadding'
  | 'WithDescription'
  | 'WithBottomSeparatorStandard'
  | 'WithBottomSeparatorThick'
  | 'HighlightOnFocus'
  | 'ItemFocusAnim-darkerGrey'
  | 'ItemFocusAnim-darkGrey'
  | 'WithBottomSeparator'
  | 'Disabled'
  | 'Clickable'
  | 'FieldClickTarget'
  | 'FieldChildren'
  | 'FieldLeadIcon'
  | 'FieldLabelRow'
  | 'VerticalAlignCenter'
  | 'InlineWrapShiftsChildrenBelow'
  | 'ExtraPaddingOnChildrenBelow'
  | 'ChildrenWidthFixed'
  | 'ChildrenWidthGrow'
  | 'WithFirstRow'
  | 'WithChildrenBelow'
  | 'FieldLabel'
  | 'FieldLabelValue'
  | 'FieldDescription'
  | 'ModalPosition'
  | 'WithStandardPadding'
  | 'slideInAnimation'
  | 'BasicTextInput'
  | 'Toggle'
  | 'ToggleRail'
  | 'On'
  | 'ToggleSwitch'
  | 'LabelFieldValue'
  | 'DropDownControlButtonContents'
  | 'Spacer'
  | 'ControlsListOuterPanel'
  | 'StandardSpacing'
  | 'ExtraSpacing'
  | 'AlignRight'
  | 'AlignLeft'
  | 'AlignCenter'
  | 'ControlsListChild'
  | 'QuickAccess-Menu'
  | 'BigButtons'
  | 'BottomButtons'
  | 'ItemFocusAnim-darkerGrey-nocolor'
  | 'ItemFocusAnim-grey'
  | 'ItemFocusAnimBorder-darkGrey'
  | 'ItemFocusAnim-green'
  | 'focusAnimation'
  | 'hoverAnimation',
  string
>;

type QuickAccessControlsClasses = Record<
  | 'duration-app-launch'
  | 'PanelSection'
  | 'PanelSectionTitle'
  | 'Text'
  | 'PanelSectionRow'
  | 'Label'
  | 'ComingSoon'
  | 'LowBattery'
  | 'ReallyLow'
  | 'LowBatteryGauge'
  | 'Remaining'
  | 'EmptyNotifications'
  | 'BatterySectionContainer'
  | 'BatteryIcon'
  | 'BatteryPercentageLabel'
  | 'BatteryDetailsLabels'
  | 'BatteryProjectedValue'
  | 'BatteryProjectedLabel'
  | 'ItemFocusAnim-darkerGrey-nocolor'
  | 'ItemFocusAnim-darkerGrey'
  | 'ItemFocusAnim-darkGrey'
  | 'ItemFocusAnim-grey'
  | 'ItemFocusAnimBorder-darkGrey'
  | 'ItemFocusAnim-green'
  | 'focusAnimation'
  | 'hoverAnimation',
  string
>;

export const staticClasses: StaticClasses = findModuleChild((mod) => {
  if (typeof mod !== 'object') return false;

  if (mod.TransitionMenuDelay) {
    return mod;
  }
});

export const gamepadDialogClasses: GamepadDialogClasses = findModuleChild((mod) => {
  if (typeof mod !== 'object') return false;

  if (mod.WithFirstRow) {
    return mod;
  }
});

export const quickAccessControlsClasses: QuickAccessControlsClasses = findModuleChild((mod) => {
  if (typeof mod !== 'object') return false;

  if (mod.PanelSectionRow) {
    return mod;
  }
});
