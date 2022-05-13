import { findModuleChild } from '../webpack';

interface StaticClasses {
  ActiveTab: string;
  AllTabContents: string;
  BatteryDetailsLabels: string;
  BatteryIcon: string;
  BatteryPercentageLabel: string;
  BatteryProjectedLabel: string;
  BatteryProjectedValue: string;
  BatterySectionContainer: string;
  Blocked: string;
  ComingSoon: string;
  Container: string;
  ContentTransition: string;
  Down: string;
  EmptyNotifications: string;
  Enter: string;
  EnterActive: string;
  Exit: string;
  ExitActive: string;
  FooterBoxShadow: string;
  FriendsListTabPanel: string;
  FriendsTitle: string;
  FullHeight: string;
  HeaderAndFooterVisible: string;
  HeaderContainer: string;
  'ItemFocusAnim-darkGrey': string;
  'ItemFocusAnim-darkerGrey': string;
  'ItemFocusAnim-darkerGrey-nocolor': string;
  'ItemFocusAnim-green': string;
  'ItemFocusAnim-grey': string;
  'ItemFocusAnimBorder-darkGrey': string;
  KeyboardButton: string;
  Label: string;
  LowBattery: string;
  LowBatteryGauge: string;
  Menu: string;
  Open: string;
  PanelExitAnchor: string;
  PanelOuterNav: string;
  PanelSection: string;
  PanelSectionRow: string;
  PanelSectionTitle: string;
  QuickAccessMenu: string;
  ReallyLow: string;
  Remaining: string;
  Selected: string;
  Tab: string;
  TabContentColumn: string;
  TabGroupPanel: string;
  TabPanelHidden: string;
  Tabs: string;
  Text: string;
  Title: string;
  TransitionMenuDelay: string;
  Up: string;
  ViewPlaceholder: string;
  VoiceTab: string;
  'duration-app-launch': string;
  focusAnimation: string;
  hoverAnimation: string;
}

export const staticClasses: StaticClasses = findModuleChild((mod) => {
  if (typeof mod !== 'object') return false;

  if (mod.TransitionMenuDelay) {
    return mod;
  }
});
