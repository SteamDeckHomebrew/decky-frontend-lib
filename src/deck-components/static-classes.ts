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

export const staticClasses: StaticClasses = findModuleChild((mod) => {
  if (typeof mod !== 'object') return false;

  if (mod.TransitionMenuDelay) {
    return mod;
  }
});
