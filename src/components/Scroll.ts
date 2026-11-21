import { FC, ReactNode } from 'react';

import { Export, findModuleByExport, findModuleExport } from '../webpack';
import { ViteScrollPanel, ViteScrollPanelGroup } from './vite-fallbacks';

const isScrollPanelSource = (source?: string) =>
  !!source && source.includes('scrollDirection') && source.includes('scrollPaddingTop');

const ScrollingModule = findModuleByExport((e: Export) => isScrollPanelSource(e?.render?.toString?.()));

const ScrollingModuleProps = ScrollingModule ? Object.values(ScrollingModule) : [];

export const ScrollPanel = (ScrollingModuleProps.find((prop: any) =>
  isScrollPanelSource(prop?.render?.toString?.()),
) || ViteScrollPanel) as FC<{ children?: ReactNode }>;

export const ScrollPanelGroup = (findModuleExport(
  (e: Export) =>
    // new || old
    e?.render?.toString().includes('.FocusVisibleChild(),[])') || e?.render?.toString().includes('.FocusVisibleChild()),[])'),
) || ViteScrollPanelGroup) as FC<{ children?: ReactNode }>;
