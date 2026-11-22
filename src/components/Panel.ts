import { FC, ReactNode } from 'react';

import { Var, findVar } from '../module-system';
import { createDivWrapper } from './Wrappers';
import { createPropListRegex, quickAccessControlsClasses } from '../utils';

// TODO where did this go?
// export const Panel: FC<{ children?: ReactNode; }> = findModuleExport((e: Export) => {
//   if (typeof mod !== 'object' || !mod.__esModule) return undefined;
//   return mod.Panel;
// });

export interface PanelSectionProps {
  title?: string;
  spinner?: boolean;
  children?: ReactNode;
}

export const PanelSection = findVar((v: Var) => typeof v == "function" && createPropListRegex(["title", "children"], true).test(v.toString())) as FC<PanelSectionProps>;

export type PanelSectionRowProps = Parameters<typeof PanelSectionRow>[0];
// export const PanelSectionRow = Object.values(mod).filter(
//   (exp: any) => !exp?.toString?.()?.includes('.PanelSection'),
// )[0] as FC<PanelSectionRowProps>;
// export const PanelSectionRow = Object.values(mod).filter(
//   (exp: any) => !exp?.toString?.()?.includes('.PanelSection'),
// )[0] as FC<PanelSectionRowProps>;
export const PanelSectionRow = createDivWrapper(quickAccessControlsClasses.PanelSectionRow);