import { HTMLAttributes, ReactNode, RefAttributes, FC } from 'react';

import { findVar, Var } from '../module-system';

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

export const Carousel = findVar((e: Var) => e.render?.toString().includes('setFocusedColumn:')) as FC<
  CarouselProps & RefAttributes<HTMLDivElement>
>;
