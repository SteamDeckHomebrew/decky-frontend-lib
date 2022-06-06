import { ReactNode, VFC } from 'react';

import { Module, findModuleChild } from '../webpack';

export interface SidebarNavigationPages {
  title: string;
  route: string;
  content: ReactNode;
}

export interface SidebarNavigationProps {
  title?: string;
  pages: SidebarNavigationPages[];
  showTitle?: boolean;
  disableRouteReporting?: boolean;
}

export const SidebarNavigation = findModuleChild((mod: Module) => {
  for (let prop in mod) {
    if (mod[prop]?.toString()?.includes('"disableRouteReporting"')) {
      return mod[prop];
    }
  }
  return null;
}) as VFC<SidebarNavigationProps>;
