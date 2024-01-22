import { FC, ReactNode } from 'react';

import { findModuleChild } from '../webpack';

export const Panel: FC<{ children?: ReactNode; }> = findModuleChild((mod) => {
  if (typeof mod !== 'object' || !mod.__esModule) return undefined;
  return mod.Panel;
})

export interface PanelSectionProps {
  title?: string;
  spinner?: boolean;
  children?: ReactNode;
}

const [panelSection, mod] = findModuleChild((mod: any) => {
  for (let prop in mod) {
    if (mod[prop]?.toString()?.includes('.PanelSection')) {
      return [mod[prop], mod];
    }
  }
  return null;
});

export const PanelSection = panelSection as FC<PanelSectionProps>;

export interface PanelSectionRowProps {
  children?: ReactNode;
}
// New as of Feb 22 2023 Beta || Old
export const PanelSectionRow =
  (mod.PanelSectionRow ||
  Object.values(mod).filter((exp: any) => !exp?.toString()?.includes('.PanelSection'))[0]) as FC<PanelSectionRowProps>;
