import { ReactNode, FC } from 'react';

import { Var, findVar } from '../module-system';
import { createPropListRegex } from '../utils';

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
  title?: ReactNode;
  pages: (SidebarNavigationPage | 'separator')[];
  showTitle?: boolean;
  disableRouteReporting?: boolean;
  page?: string;
  onPageRequested?: (page: string) => void;
}

const sidebarNavigationRegex = createPropListRegex(["pages", "fnSetNavigateToPage", "disableRouteReporting"]);
export const SidebarNavigation = findVar((e: Var) =>
  typeof e == "function" && sidebarNavigationRegex.test(e.toString?.()),
) as FC<SidebarNavigationProps>;
