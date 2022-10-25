import { ElementType, FC, ReactNode } from 'react';

import { findModuleChild } from '../webpack';

export interface FocusRingProps {
  className?: string;
  rootClassName?: string;
  render?: ElementType;
  children?: ReactNode;
  NavigationManager?: any;
}

export const FocusRing = findModuleChild((m: any) => {
  if (typeof m !== 'object') return false;
  for (let prop in m) {
    if (m[prop]?.toString()?.includes('.GetShowDebugFocusRing())')) return m[prop];
  }
  return false;
}) as FC<FocusRingProps>;
