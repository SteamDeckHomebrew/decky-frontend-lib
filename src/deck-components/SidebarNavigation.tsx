import { ReactNode, VFC } from 'react';

import { Module, findModuleChild } from '../webpack';

export interface SidebarNavigationPage {
  title: ReactNode;
  content: ReactNode;
  icon?: ReactNode;
  visible?: boolean;
  hideTitle?: boolean;
  identifier?: string;
  route?: string;
  link?: string;
  padding?: 'none' | 'compact';
}

export interface SidebarNavigationProps {
  title?: string;
  pages: (SidebarNavigationPage | 'separator')[];
  showTitle?: boolean;
  disableRouteReporting?: boolean;
  page?: string;
  onPageRequested?: (page: string) => void;
}

export const SidebarNavigation = findModuleChild((mod: Module) => {
  for (let prop in mod) {
    if (mod[prop]?.toString()?.includes('"disableRouteReporting"')) {
      return mod[prop];
    }
  }
  return null;
}) as VFC<SidebarNavigationProps>;
