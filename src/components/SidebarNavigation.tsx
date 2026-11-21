import { FC, ReactNode } from 'react';

import { Export, findModuleExport } from '../webpack';
import { createPropListRegex } from '../utils';
import { ViteSidebarNavigation } from './vite-fallbacks';

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
const SidebarNavigationInternal = findModuleExport((e: Export) =>
  e?.toString &&
  (sidebarNavigationRegex.test(e.toString?.()) ||
    (e.toString?.().includes('fnSetNavigateToPage') && e.toString?.().includes('disableRouteReporting'))) ||
  // Vite build: pages use `identifier`.
  (typeof e === 'function' && e.toString?.().includes('renderPageContent')),
) as FC<SidebarNavigationProps>;

const mapPages = (pages: SidebarNavigationProps['pages']) =>
  pages
    .filter((page) => page === 'separator' || page.visible !== false)
    .map((page, index) =>
      page === 'separator'
        ? page
        : {
            ...page,
            identifier: page.identifier ?? page.route ?? String(index),
          },
    );

export const SidebarNavigation: FC<SidebarNavigationProps> = (props) =>
  SidebarNavigationInternal ? (
    <SidebarNavigationInternal {...props} pages={mapPages(props.pages)} />
  ) : (
    <ViteSidebarNavigation {...props} />
  );
