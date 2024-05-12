import { ReactNode, VFC } from 'react';

import { Export, findModuleExport } from '../webpack';

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

export const SidebarNavigation = findModuleExport((e: Export) =>
  e?.toString()?.includes('"disableRouteReporting"'),
) as VFC<SidebarNavigationProps>;
