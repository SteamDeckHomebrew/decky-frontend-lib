import { useEffect, useState } from 'react';

declare global {
  var FocusNavController: any;
}

function getQuickAccessWindow(): Window | null {
  try {
    const context = FocusNavController?.m_ActiveContext || FocusNavController?.m_LastActiveContext;
    const navTrees = context?.m_ActiveContext?.m_rgGamepadNavigationTrees || FocusNavController?.m_rgGamepadNavigationTrees;
    return navTrees?.find((tree: any) => tree?.id === "QuickAccess-NA")?.m_Root?.m_element?.ownerDocument.defaultView ?? null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

/**
 * Returns state indicating the visibility of quick access menu.
 *
 * @remarks
 * During development it is possible to open the quick access menu without giving it
 * focus in some cases. In such cases, the quick access menu state is invisible.
 *
 * This seems to be impossible to replicate when running the deck normally. Even in
 * the edge cases it always seems to have a focus.
 *
 * @returns `true` if quick access menu is visible (focused) and `false` otherwise.
 *
 * @example
 * import { VFC, useEffect } from "react";
 * import { useQuickAccessVisible } from "decky-frontend-lib";
 *
 * export const PluginPanelView: VFC<{}> = ({ }) => {
 *   const isVisible = useQuickAccessVisible();
 *
 *   useEffect(() => {
 *     if (!isVisible) {
 *       return;
 *     }
 *
 *     const interval = setInterval(() => console.log("Hello world!"), 1000);
 *     return () => {
 *       clearInterval(interval);
 *     }
 *   }, [isVisible])
 *
 *   return (
 *     <div>
 *       {isVisible ? "VISIBLE" : "INVISIBLE"}
 *     </div>
 *   );
 * };
 */
export function useQuickAccessVisible(): boolean {
  const [isVisible, setIsVisible] = useState(getQuickAccessWindow()?.document.hasFocus() ?? true);

  useEffect(() => {
    const quickAccessWindow = getQuickAccessWindow();
    if (quickAccessWindow === null) {
      console.error('Could not get window of QuickAccess menu!');
      return;
    }

    const onBlur = () => setIsVisible(false);
    const onFocus = () => setIsVisible(true);

    quickAccessWindow.addEventListener('blur', onBlur);
    quickAccessWindow.addEventListener('focus', onFocus);
    return () => {
      quickAccessWindow.removeEventListener('blur', onBlur);
      quickAccessWindow.removeEventListener('focus', onFocus);
    };
  }, []);

  return isVisible;
}
