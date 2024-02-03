import { FC, ReactNode } from 'react';

import { findModule, findModuleChild } from '../webpack';

const ScrollingModule = findModule((mod) => {
  if (typeof mod !== 'object') return false;
  for (let prop in mod) {
    if (mod[prop]?.render?.toString?.().includes("{case\"x\":")) return true;
  }
  return false;
});

const ScrollingModuleProps = ScrollingModule ? Object.values(ScrollingModule) : [];

export const ScrollPanel = ScrollingModuleProps.find((prop: any) => prop?.render?.toString?.().includes("{case\"x\":")) as FC<{ children?: ReactNode }>;

export const ScrollPanelGroup: FC<{ children?: ReactNode }> = findModuleChild((mod) => {
  if (typeof mod !== 'object') return undefined;
  for (let prop in mod) {
    if (mod[prop]?.render?.toString().includes(".FocusVisibleChild()),[])")) return mod[prop];
  }
});