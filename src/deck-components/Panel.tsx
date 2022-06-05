import { FC } from 'react';

import { findModuleChild } from '../webpack';

export interface PanelSectionProps {
  title?: string;
  spinner?: boolean;
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

export const PanelSectionRow = Object.values(mod).filter(
  (exp: any) => !exp?.toString()?.includes('.PanelSection'),
)[0] as FC;
