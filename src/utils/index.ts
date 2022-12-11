export * from './patcher';
export * from './react';

export function joinClassNames(...classes: string[]): string {
  return classes.join(' ');
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
  const context = FocusNavController.m_ActiveContext || FocusNavController.m_LastActiveContext;
  return context.m_rgGamepadNavigationTrees.find((x: any) => x.m_ID == 'root_1_').Root
    .Element.ownerDocument.defaultView;
}
