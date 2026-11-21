import { FC, ReactNode } from 'react';

import { Export, findModuleDetailsByExport } from '../webpack';
import { VitePanelSection, VitePanelSectionRow, discoverNativeClasses, nativeClasses } from './vite-fallbacks';
import { renderedComponent, renderedComponentByDomClass } from '../rendered';

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

const [mod, panelSection] = findModuleDetailsByExport((e: Export) => e.toString?.()?.includes('.PanelSection'));

export const PanelSection = (panelSection ||
  renderedComponent<PanelSectionProps>(
    (source) => source.includes('children:n}=e') && source.includes('spinner'),
    VitePanelSection,
  )) as FC<PanelSectionProps>;

export interface PanelSectionRowProps {
  children?: ReactNode;
}
export const PanelSectionRow = ((mod &&
  Object.values(mod).filter((exp: any) => !exp?.toString?.()?.includes('.PanelSection'))[0]) ||
  renderedComponentByDomClass<PanelSectionRowProps>(() => {
    discoverNativeClasses();
    return nativeClasses.row;
  }, VitePanelSectionRow)) as FC<PanelSectionRowProps>;
