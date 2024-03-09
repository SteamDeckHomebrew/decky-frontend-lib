import { findModule } from '../webpack';

type QuickAccessMenuClasses = Record<
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

type ScrollPanelClasses = Record<'ScrollBoth' | 'ScrollPanel' | 'ScrollX' | 'ScrollY', string>;

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
  | 'duration-app-launch'
  | 'OOBEUpdateStatusContainer'
  | 'UpdateScreen'
  | 'UpdatePanel'
  | 'CurrentStatus'
  | 'TotalUpdateSize'
  | 'ProgressInfoContainer'
  | 'TimeRemaining'
  | 'BatteryLowWarning'
  | 'fadeInAnimation'
  | 'ProgressStatus'
  | 'UpdateStatusContainer'
  | 'UpdaterFieldStatusSuccess'
  | 'UpdaterFieldStatusApplying'
  | 'TextContainer'
  | 'ApplyingText'
  | 'UpdateBytesRemaining'
  | 'Label'
  | 'Numerator'
  | 'Separator'
  | 'Denominator'
  | 'PatchNotes'
  | 'PostedTime'
  | 'EventDetailTitle'
  | 'EventDetailsSubTitle'
  | 'EventDetailsBody'
  | 'InsufficientBatteryText'
  | 'UnsupportedHardwareWarning'
  | 'Title'
  | 'Text'
  | 'Body'
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

type PlaySectionClasses = Record<
  | 'AchievementCountLabel'
  | 'AchievementProgressRow'
  | 'ActionSection'
  | 'AppButtonsContainer'
  | 'Arrow'
  | 'AvatarAndPersona'
  | 'BreakNarrow'
  | 'BreakShort'
  | 'BreakTall'
  | 'BreakUltraWide'
  | 'BreakWide'
  | 'ClickablePlayBarItem'
  | 'CloudStatusIcon'
  | 'CloudStatusLabel'
  | 'CloudStatusRow'
  | 'CloudSyncProblem'
  | 'CloudSynching'
  | 'ComingSoon'
  | 'Container'
  | 'DetailsProgressBar'
  | 'DetailsProgressContainer'
  | 'DetailsSection'
  | 'DetailsSectionExtra'
  | 'DetailsSectionStatus'
  | 'DotDotDot'
  | 'DownloadPaused'
  | 'DownloadProgressBar'
  | 'Downloading'
  | 'FavoriteButton'
  | 'Favorited'
  | 'GameInfoButton'
  | 'GameStat'
  | 'GameStatIcon'
  | 'GameStatIconForced'
  | 'GameStatRight'
  | 'GameStatsSection'
  | 'GamepadUIBreakNarrow'
  | 'GamepadUIBreakShort'
  | 'GamepadUIBreakWide'
  | 'Glassy'
  | 'HideWhenNarrow'
  | 'Icon'
  | 'Icons'
  | 'InPage'
  | 'InnerContainer'
  | 'InvalidPlatform'
  | 'ItemFocusAnim-darkGrey'
  | 'ItemFocusAnim-darkerGrey'
  | 'ItemFocusAnim-darkerGrey-nocolor'
  | 'ItemFocusAnim-green'
  | 'ItemFocusAnim-grey'
  | 'ItemFocusAnimBorder-darkGrey'
  | 'Label'
  | 'LastPlayed'
  | 'LastPlayedInfo'
  | 'MenuActive'
  | 'MenuButton'
  | 'MiniAchievements'
  | 'OfflineMode'
  | 'OnlyDownloadBar'
  | 'PermanentlyUnavailable'
  | 'PlayBar'
  | 'PlayBarCloudStatusContainer'
  | 'PlayBarDetailLabel'
  | 'PlayBarGameIcon'
  | 'PlayBarGameName'
  | 'PlayBarIconAndGame'
  | 'PlayBarLabel'
  | 'Playtime'
  | 'PlaytimeIcon'
  | 'PlaytimeIconForced'
  | 'PortraitBar'
  | 'Presale'
  | 'RecentlyUpdated'
  | 'RecentlyUpdatedIcon'
  | 'RecentlyUpdatedLink'
  | 'RecentlyUpdatedText'
  | 'RightBreakNarrow'
  | 'RightBreakUltraNarrow'
  | 'RightBreakUltraWide'
  | 'RightBreakWide'
  | 'RightControls'
  | 'Row'
  | 'SharedLibrary'
  | 'StatusAndStats'
  | 'StatusNameContainer'
  | 'StickyHeader'
  | 'StickyHeaderShadow'
  | 'SuperimposedGridItems'
  | 'SyncAnim'
  | 'Visible'
  | 'duration-app-launch'
  | 'favorited'
  | 'focusAnimation'
  | 'hoverAnimation',
  string
>;

type GamepadSliderClasses = Record<
  | 'error-shake-duration'
  | 'SliderControlPanelGroup'
  | 'SliderControlAndNotches'
  | 'WithDefaultValue'
  | 'SliderControl'
  | 'Disabled'
  | 'SliderTrack'
  | 'SliderHasNotches'
  | 'SliderTrackDark'
  | 'SliderHandleContainer'
  | 'VerticalLineSliderHandleContainer'
  | 'ParenSliderHandleContainer'
  | 'SliderHandle'
  | 'SliderHandleFocusPop'
  | 'VerticalLineSliderHandle'
  | 'ParenSliderHandle'
  | 'Left'
  | 'SliderControlWithIcon'
  | 'Icon'
  | 'SliderNotchContainer'
  | 'SliderNotch'
  | 'AlignToEnds'
  | 'SliderNotchLabel'
  | 'AlignToLeft'
  | 'AlignToRight'
  | 'SliderNotchTick'
  | 'TickActive'
  | 'LabelText'
  | 'DescriptionValue'
  | 'EditableValue'
  | 'FakeEditableValue'
  | 'RedBorder'
  | 'EditableValueSuffix'
  | 'ErrorShake'
  | 'error-shake'
  | 'CompoundSlider'
  | 'CompoundSliderSubSlider'
  | 'Right'
  | 'CompoundSliderSubSliderLabelContainer'
  | 'CompoundSliderSubSliderLabelPositioner'
  | 'CompoundSliderSubSliderLabel'
  | 'CompoundSliderSubSliderLabelInternal'
  | 'DefaultValueTickContainer'
  | 'DefaultValueTick',
  string
>;

type AppDetailsHeaderClasses = Record<
  | 'AddBoxSizer'
  | 'Background'
  | 'Bottom'
  | 'BottomCenter'
  | 'BottomLeft'
  | 'BottomRight'
  | 'BoxSizer'
  | 'BoxSizerButtonContainer'
  | 'BoxSizerContainer'
  | 'BoxSizerDelete'
  | 'BoxSizerDragBox'
  | 'BoxSizerEdge'
  | 'BoxSizerGridBox'
  | 'BoxSizerInfo'
  | 'BoxSizerSettings'
  | 'BoxSizerValidRegion'
  | 'CenterCenter'
  | 'DialogButton'
  | 'EdgeDown'
  | 'FallbackArt'
  | 'Features'
  | 'FullscreenEnterActive'
  | 'FullscreenEnterDone'
  | 'FullscreenEnterStart'
  | 'FullscreenExitActive'
  | 'FullscreenExitDone'
  | 'FullscreenExitStart'
  | 'HeaderBackgroundImage'
  | 'ImgBlur'
  | 'ImgBlurBackdrop'
  | 'ImgContainer'
  | 'ImgSrc'
  | 'Left'
  | 'Loaded'
  | 'Middle'
  | 'NoArt'
  | 'PinBox'
  | 'Right'
  | 'SVGTitle'
  | 'SaveBoxSizer'
  | 'TextNameSpace'
  | 'TitleImageContainer'
  | 'TitleLogo'
  | 'TitleSection'
  | 'Top'
  | 'TopCapsule'
  | 'TopGradient'
  | 'TopLeft'
  | 'TopRight'
  | 'UpperCenter'
  | 'UpperLeft'
  | 'duration-app-launch',
  string
>;

type AppDetailsClasses = Record<
  | 'BreakNarrow'
  | 'BreakShort'
  | 'BreakTall'
  | 'BreakUltraWide'
  | 'BreakWide'
  | 'Container'
  | 'GamepadUIBreakNarrow'
  | 'GamepadUIBreakShort'
  | 'GamepadUIBreakWide'
  | 'Glassy'
  | 'Header'
  | 'HeaderLoaded'
  | 'InnerContainer'
  | 'ItemFocusAnim-darkGrey'
  | 'ItemFocusAnim-darkerGrey'
  | 'ItemFocusAnim-darkerGrey-nocolor'
  | 'ItemFocusAnim-green'
  | 'ItemFocusAnim-grey'
  | 'ItemFocusAnimBorder-darkGrey'
  | 'PlayBar'
  | 'PreventScrolling'
  | 'RightBreakNarrow'
  | 'RightBreakUltraNarrow'
  | 'RightBreakUltraWide'
  | 'RightBreakWide'
  | 'ScrollContainer'
  | 'ShowPlayBar'
  | 'Throbber'
  | 'duration-app-launch'
  | 'fadein'
  | 'focusAnimation'
  | 'hoverAnimation',
  string
>;

type GamepadUIClasses = Record<
  | 'duration-app-launch'
  | 'TransitionMenuDelay'
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
  | 'ViewPlaceholder'
  | 'FullHeight'
  | 'Title'
  | 'Container'
  | 'Open'
  | 'QuickAccessMenu'
  | 'HeaderContainer'
  | 'Menu'
  | 'HeaderAndFooterVisible'
  | 'TabContentColumn'
  | 'Tabs'
  | 'Tab'
  | 'Selected'
  | 'ItemFocusAnim-darkerGrey'
  | 'ItemFocusAnim-darkerGrey-nocolor'
  | 'VoiceTab'
  | 'ItemFocusAnim-green'
  | 'Blocked'
  | 'TabPanelHidden'
  | 'FriendsTitle'
  | 'FriendsListTabPanel'
  | 'PanelOuterNav'
  | 'PanelExitAnchor'
  | 'TabGroupPanel'
  | 'FooterBoxShadow'
  | 'AllTabContents'
  | 'ContentTransition'
  | 'ActiveTab'
  | 'Up'
  | 'Enter'
  | 'EnterActive'
  | 'Exit'
  | 'ExitActive'
  | 'Down'
  | 'KeyboardButton'
  | 'ItemFocusAnim-darkGrey'
  | 'ItemFocusAnim-grey'
  | 'ItemFocusAnimBorder-darkGrey'
  | 'focusAnimation'
  | 'hoverAnimation',
  string
>;

type GamepadTabbedPageClasses = Record<
  | 'duration-app-launch'
  | 'headerHeight'
  | 'contentPadding'
  | 'GamepadTabbedPage'
  | 'TabHeaderRowWrapper'
  | 'Floating'
  | 'TabRow'
  | 'TabRowTabs'
  | 'BleedGlyphs'
  | 'TabsRowScroll'
  | 'FixCenterAlignScroll'
  | 'Tab'
  | 'Selected'
  | 'HasAddon'
  | 'RightAddon'
  | 'TabTitle'
  | 'LeftAddon'
  | 'TabCount'
  | 'Active'
  | 'TabBadge'
  | 'TabCountBadge'
  | 'TabRowSpacer'
  | 'Glyphs'
  | 'Show'
  | 'TabContents'
  | 'ContentTransition'
  | 'TabContentsScroll'
  | 'Right'
  | 'Enter'
  | 'EnterActive'
  | 'Exit'
  | 'ExitActive'
  | 'Left'
  | 'TabIcon',
  string
>;

type GamepadContextMenuClasses = Record<
  | "duration-app-launch"
  | "BasicContextMenuModal"
  | "BasicContextMenuHeader"
  | "BasicContextMenuHeaderShrinkableSpacing"
  | "BasicContextMenuContainer"
  | "slideInAnimation"
  | "contextMenu"
  | "contextMenuContents"
  | "hasSubMenu"
  | "contextMenuFade"
  | "contextMenuItem"
  | "active"
  | "Selected"
  | "Focused"
  | "Positive"
  | "Emphasis"
  | "Destructive"
  | "Capitalized"
  | "MenuSectionHeader"
  | "UpperCase"
  | "SubMenu"
  | "ContextMenuSeparator"
  | "Label"
  | "Arrow"
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

type AchievementClasses = Record<
  | "nAchievementHeight"
  | "nGlobalAchievementHeight"
  | "nAchievementsListTitleHeight"
  | "nAchievementGap"
  | "AchievementList"
  | "ListTitle"
  | "AchievementListItemBase"
  | "Container"
  | "Content"
  | "Right"
  | "Footer"
  | "AchievementTitle"
  | "AchievementDescription"
  | "AchievementGlobalPercentage"
  | "InBody"
  | "VerticalContent"
  | "UnlockDate"
  | "AlignEnd"
  | "ProgressBar"
  | "ProgressCount"
  | "AchievementContent"
  | "HiddenAchievementContent"
  | "FriendAchievementFooter"
  | "GlobalPercentage"
  | "UserUnlockDateTime"
  | "GlobalAchievementsListHeader"
  | "SearchField"
  | "Avatar"
  | "HeaderText"
  | "GlobalAchievementListItem"
  | "UnlockContainer"
  | "Info"
  | "Title"
  | "Description"
  | "Percent"
  | "ImageContainer"
  | "ProgressFill"
  | "SpoilerWarning"
  | "Hidden"
  | "ComparisonAchieverColumn"
  | "ComparisonAchieverInfo"
  | "ProgressContainer"
  | "ProgressLabel"
  | "Secondary"
  | "AvatarContainer"
  | "Unachieved",
  string
>;

type MainMenuAppRunningClasses = Record<
  | "duration-app-launch"
  | "ScrollMask"
  | "HideMask"
  | "MainMenuAppRunning"
  | "MenuOpen"
  | "NavigationColumn"
  | "ControllerColumnFocused"
  | "NavColumnFocused"
  | "NavigationBox"
  | "NavigationMenuItem"
  | "ItemFocusAnim-darkerGrey"
  | "Active"
  | "Disabled"
  | "SwitchAppsTitle"
  | "SelectableAppWindow"
  | "ActiveDot"
  | "NavigationMenuItemSeparator"
  | "AppColumn"
  | "FocusedColumn"
  | "AppColumnContent"
  | "ActiveContent"
  | "CurrentGameBackground"
  | "CurrentGameLogo"
  | "OverlayAchievements"
  | "Container"
  | "OverlayGuides"
  | "OverlayNotes"
  | "OverlayInplaceBrowser"
  | "ItemFocusAnim-darkerGrey-nocolor"
  | "ItemFocusAnim-darkGrey"
  | "ItemFocusAnim-grey"
  | "ItemFocusAnimBorder-darkGrey"
  | "ItemFocusAnim-green"
  | "focusAnimation"
  | "hoverAnimation",
  string
>;

type BasicAppDetailsSectionStylerClasses = Record<
  | "duration-app-launch"
  | "headerPadding"
  | "Header"
  | "AppDetailsContent"
  | "AppDetailsContainer"
  | "AppDetailsRoot"
  | "GameInfoContainer"
  | "GameInfoQuickLinks"
  | "GameInfoCollections"
  | "CollectionsHeader"
  | "PlaySection"
  | "ActionRow"
  | "AppDetailSectionList"
  | "AppActionButton"
  | "ActionButtonAndStatusPanel"
  | "AppButtons"
  | "InvertFocusedIcon"
  | "DeckVerifiedFeedbackContainer"
  | "DeckVerifiedFeedbackConfirmationContainer"
  | "DeckVerifiedFeedbackButton"
  | "DeckVerifiedFeedbackQuestion"
  | "DeckVerifiedFeedbackConfirmation",
  string
>;

export const quickAccessMenuClasses: QuickAccessMenuClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.Title && mod?.QuickAccessMenu && mod?.BatteryDetailsLabels,
);
/**
 * @depreciated please use quickAccessMenuClasses instead
 */
export const staticClasses = quickAccessMenuClasses;
export const scrollPanelClasses: ScrollPanelClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.ScrollPanel,
);
/**
 * @depreciated please use scrollPanelClasses instead
 */
export const scrollClasses = scrollPanelClasses;
// TODO refactor to use class mapper
export const gamepadDialogClasses: GamepadDialogClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.GamepadDialogContent,
);
export const quickAccessControlsClasses: QuickAccessControlsClasses = findModule(
  (mod) => typeof mod === 'object' && typeof mod?.PanelSection === 'string' && mod?.PanelSection,
);
export const updaterFieldClasses: UpdaterFieldClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.OOBEUpdateStatusContainer,
);
export const playSectionClasses: PlaySectionClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.Container,
);
export const gamepadSliderClasses: GamepadSliderClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.SliderControlPanelGroup,
);
export const appDetailsHeaderClasses: AppDetailsHeaderClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.TopCapsule,
);
export const appDetailsClasses: AppDetailsClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.HeaderLoaded,
);
export const gamepadUIClasses: GamepadUIClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.BasicUiRoot,
);
export const gamepadTabbedPageClasses: GamepadTabbedPageClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.GamepadTabbedPage
);
export const gamepadContextMenuClasses: GamepadContextMenuClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.BasicContextMenuModal
);
export const achievementClasses: AchievementClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.AchievementListItemBase
);
export const mainMenuAppRunningClasses: MainMenuAppRunningClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.MainMenuAppRunning
);
export const basicAppDetailsSectionStylerClasses: BasicAppDetailsSectionStylerClasses = findModule(
  (mod) => typeof mod === 'object' && mod?.AppDetailsRoot
);
