import { HTMLAttributes, ReactNode, RefAttributes, VFC } from 'react';

import { findModuleChild } from '../webpack';

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

export const Carousel = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.render?.toString().includes('setFocusedColumn:')) return m[prop];
  }
}) as VFC<CarouselProps & RefAttributes<HTMLDivElement>>;
