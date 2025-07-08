interface MonitorDimensions {
  m_nHeight: number;
  m_nLeft: number;
  m_nTop: number;
  m_nWidth: number;
}

interface Monitor {
  m_flDPI: number;
  m_full: MonitorDimensions;
  m_usable: MonitorDimensions;
}

export interface FocusedAppWindowStore {
  m_defaultMonitor: Monitor;
  m_nFocusedWindowID: number;
  m_unFocusedAppID: number;
  m_unFocusedOverlayAppID: number;
  m_unFocusedOverlayPID: number;

  /**
   * @returns the monitor dimensions.
   */
  GetDefaultMonitorDimensions(): Monitor;

  /**
   * @returns the focused window's app ID or `413080` if no app focused.
   */
  GetFocusedAppID(): number;

  GetFocusedOverlayAppID(): number;
  GetFocusedOverlayPID(): number;
  GetFocusedWindowID(): number;
}
