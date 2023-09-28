export * from './patcher';
export * from './react';
export * from './GamepadUIAudio';

declare global {
  var FocusNavController: any;
  var GamepadNavTree: any;
}

/**
 * Join strings for CSS class names omitting falsy values
 */
export function joinClassNames(...classes: any[]): string {
  return classes.filter(value => value).join(' ');
}

export function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}

/**
 * Finds the SP window, since it is a render target as of 10-19-2022's beta
 */
export function findSP(): Window {
  // old (SP as host)
  if (document.title == 'SP') return window;
  // new (SP as popup)
  const navTrees = getGamepadNavigationTrees();
  return navTrees?.find((x: any) => x.m_ID == 'root_1_').Root.Element.ownerDocument.defaultView;
}

/**
 * Gets the correct FocusNavController, as the Feb 22 2023 beta has two for some reason.
 */
export function getFocusNavController(): any {
  return window.GamepadNavTree?.m_context?.m_controller || window.FocusNavController;
}

/**
 * Gets the gamepad navigation trees as Valve seems to be moving them.
 */
export function getGamepadNavigationTrees(): any {
  const focusNav = getFocusNavController();
  const context = focusNav.m_ActiveContext || focusNav.m_LastActiveContext;
  return context?.m_rgGamepadNavigationTrees;
}
