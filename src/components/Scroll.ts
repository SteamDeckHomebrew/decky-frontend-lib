import { FC, ReactNode } from 'react';

import { Export, findModuleByExport, findModuleExport } from '../webpack';

const ScrollingModule = findModuleByExport((e: Export) => e?.render?.toString?.().includes('{case"x":'));

const ScrollingModuleProps = ScrollingModule ? Object.values(ScrollingModule) : [];

export const ScrollPanel = ScrollingModuleProps.find((prop: any) =>
  prop?.render?.toString?.().includes('{case"x":'),
) as FC<{ children?: ReactNode }>;

export const ScrollPanelGroup: FC<{ children?: ReactNode }> = findModuleExport((e: Export) =>
  e?.render?.toString().includes('.FocusVisibleChild()),[])'),
);
