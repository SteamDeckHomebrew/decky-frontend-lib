export enum EBrowserType {
  OffScreen,
  OpenVROverlay,
  OpenVROverlay_Dashboard,
  DirectHWND,
  DirectHWND_Borderless,
  DirectHWND_Hidden,
  ChildHWNDNative,
  Offscreen_SteamUI = 12,
  OpenVROverlay_Subview,
}

export enum EPopupCreationFlags {
  None,
  Minimized = 1 << 0,
  Hidden = 1 << 1,
  TooltipHint = 1 << 2,
  NoTaskbarIcon = 1 << 3,
  Resizable = 1 << 4,
  ScalePosition = 1 << 5,
  ScaleSize = 1 << 6,
  Maximized = 1 << 7,
  Composited = 1 << 8,
  NotFocusable = 1 << 9,
  FullScreen = 1 << 10,
  Fullscreen_Exclusive = 1 << 11,
  ApplyBrowserScaleToDimensions = 1 << 12,
  AlwaysOnTop = 1 << 13,
  NoWindowShadow = 1 << 14,
  NoMinimize = 1 << 15,
  PopUpMenuHint = 1 << 16,
  IgnoreSavedSize = 1 << 17,
  NoRoundedCorners = 1 << 18,
  ForceRoundedCorners = 1 << 19,
  OverrideRedirect = 1 << 20,
  IgnoreSteamDisplayScale = 1 << 21,
  TransparentParentWindow = 1 << 22,
}

export enum ESteamRealm {
  Unknown,
  Global,
  China,
}

export enum EUIMode {
  Unknown = -1,
  GamePad = 4,
  Desktop = 7,
}
