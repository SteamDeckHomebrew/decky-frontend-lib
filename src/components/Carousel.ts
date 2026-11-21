import { HTMLAttributes, ReactNode, RefAttributes, FC } from 'react';

import { Export, findModuleExport } from '../webpack';
import { ViteCarousel } from './vite-fallbacks';
import { renderedComponent } from '../rendered';

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  autoFocus?: boolean;
  enableBumperPaging?: boolean;
  fnDoesItemTakeFocus?: (...unknown: any[]) => boolean;
  fnGetColumnWidth?: (...unknown: any[]) => number;
  fnGetId?: (id: number) => number;
  fnItemRenderer?: (id: number, ...unknown: any[]) => ReactNode;
  fnUpdateArrows?: (...unknown: any[]) => any;
  initialColumn?: number;
  nHeight?: number;
  nIndexLeftmost?: number;
  nItemHeight?: number;
  nItemMarginX?: number;
  nNumItems?: number;
  name?: string;
  scrollToAlignment?: 'center';
}

const isCarouselSource = (source?: string) =>
  !!source && source.includes('nIndexLeftmost') && source.includes('fnItemRenderer');

export const Carousel = (findModuleExport(
  (e: Export) => e?.render?.toString?.().includes('setFocusedColumn') || isCarouselSource(e?.toString?.()),
) || renderedComponent<CarouselProps & RefAttributes<HTMLDivElement>>(isCarouselSource, ViteCarousel)) as FC<
  CarouselProps & RefAttributes<HTMLDivElement>
>;
