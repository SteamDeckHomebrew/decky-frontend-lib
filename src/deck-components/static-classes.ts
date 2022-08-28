import { findModule } from '../webpack';

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

type ScrollClasses = Record<
  | 'ScrollBoth'
  | 'ScrollPanel'
  | 'ScrollX'
  | 'ScrollY',
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

type UpdaterFieldClasses = Record<
  | "duration-app-launch"
  | "OOBEUpdateStatusContainer"
  | "UpdateScreen"
  | "UpdatePanel"
  | "CurrentStatus"
  | "TotalUpdateSize"
  | "ProgressInfoContainer"
  | "TimeRemaining"
  | "BatteryLowWarning"
  | "fadeInAnimation"
  | "ProgressStatus"
  | "UpdateStatusContainer"
  | "UpdaterFieldStatusSuccess"
  | "UpdaterFieldStatusApplying"
  | "TextContainer"
  | "ApplyingText"
  | "UpdateBytesRemaining"
  | "Label"
  | "Numerator"
  | "Separator"
  | "Denominator"
  | "PatchNotes"
  | "PostedTime"
  | "EventDetailTitle"
  | "EventDetailsSubTitle"
  | "EventDetailsBody"
  | "InsufficientBatteryText"
  | "UnsupportedHardwareWarning"
  | "Title"
  | "Text"
  | "Body"
  | "ItemFocusAnim-darkerGrey-nocolor"
  | "ItemFocusAnim-darkerGrey"
  | "ItemFocusAnim-darkGrey"
  | "ItemFocusAnim-grey"
  | "ItemFocusAnimBorder-darkGrey"
  | "ItemFocusAnim-green"
  | "focusAnimation"
  | "hoverAnimation",
  string
>;

type PlaySectionClasses = Record<
  | "AchievementCountLabel"
  | "AchievementProgressRow"
  | "ActionSection"
  | "AppButtonsContainer"
  | "Arrow"
  | "AvatarAndPersona"
  | "BreakNarrow"
  | "BreakShort"
  | "BreakTall"
  | "BreakUltraWide"
  | "BreakWide"
  | "ClickablePlayBarItem"
  | "CloudStatusIcon"
  | "CloudStatusLabel"
  | "CloudStatusRow"
  | "CloudSyncProblem"
  | "CloudSynching"
  | "ComingSoon"
  | "Container"
  | "DetailsProgressBar"
  | "DetailsProgressContainer"
  | "DetailsSection"
  | "DetailsSectionExtra"
  | "DetailsSectionStatus"
  | "DotDotDot"
  | "DownloadPaused"
  | "DownloadProgressBar"
  | "Downloading"
  | "FavoriteButton"
  | "Favorited"
  | "GameInfoButton"
  | "GameStat"
  | "GameStatIcon"
  | "GameStatIconForced"
  | "GameStatRight"
  | "GameStatsSection"
  | "GamepadUIBreakNarrow"
  | "GamepadUIBreakShort"
  | "GamepadUIBreakWide"
  | "Glassy"
  | "HideWhenNarrow"
  | "Icon"
  | "Icons"
  | "InPage"
  | "InnerContainer"
  | "InvalidPlatform"
  | "ItemFocusAnim-darkGrey"
  | "ItemFocusAnim-darkerGrey"
  | "ItemFocusAnim-darkerGrey-nocolor"
  | "ItemFocusAnim-green"
  | "ItemFocusAnim-grey"
  | "ItemFocusAnimBorder-darkGrey"
  | "Label"
  | "LastPlayed"
  | "LastPlayedInfo"
  | "MenuActive"
  | "MenuButton"
  | "MiniAchievements"
  | "OfflineMode"
  | "OnlyDownloadBar"
  | "PermanentlyUnavailable"
  | "PlayBar"
  | "PlayBarCloudStatusContainer"
  | "PlayBarDetailLabel"
  | "PlayBarGameIcon"
  | "PlayBarGameName"
  | "PlayBarIconAndGame"
  | "PlayBarLabel"
  | "Playtime"
  | "PlaytimeIcon"
  | "PlaytimeIconForced"
  | "PortraitBar"
  | "Presale"
  | "RecentlyUpdated"
  | "RecentlyUpdatedIcon"
  | "RecentlyUpdatedLink"
  | "RecentlyUpdatedText"
  | "RightBreakNarrow"
  | "RightBreakUltraNarrow"
  | "RightBreakUltraWide"
  | "RightBreakWide"
  | "RightControls"
  | "Row"
  | "SharedLibrary"
  | "StatusAndStats"
  | "StatusNameContainer"
  | "StickyHeader"
  | "StickyHeaderShadow"
  | "SuperimposedGridItems"
  | "SyncAnim"
  | "Visible"
  | "duration-app-launch"
  | "favorited"
  | "focusAnimation"
  | "hoverAnimation",
  string
>;

export const staticClasses: StaticClasses = findModule((mod) => typeof mod === 'object' && mod.TransitionMenuDelay);
export const scrollClasses: ScrollClasses = findModule((mod) => typeof mod === 'object' && mod.ScrollPanel && mod.ScrollY);
export const gamepadDialogClasses: GamepadDialogClasses = findModule((mod) => typeof mod === 'object' && mod.WithFirstRow);
export const quickAccessControlsClasses: QuickAccessControlsClasses = findModule((mod) => typeof mod === 'object' && mod.PanelSectionRow);
export const updaterFieldClasses: UpdaterFieldClasses = findModule((mod) => typeof mod === 'object' && mod.PatchNotes && mod.PostedTime);
export const playSectionClasses: PlaySectionClasses = findModule((mod) => typeof mod === 'object' && mod.MenuButton && mod.MenuActive);
