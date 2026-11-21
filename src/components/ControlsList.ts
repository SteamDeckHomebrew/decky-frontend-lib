import { FC, ReactNode } from 'react';

import { Export, findModuleExport } from '../webpack';
import { ViteControlsList } from './vite-fallbacks';

export interface ControlsListProps {
  alignItems?: 'left' | 'right' | 'center';
  spacing?: 'standard' | 'extra';
  children?: ReactNode;
}

export const ControlsList: FC<ControlsListProps> = (findModuleExport((e: Export) => {
  const source = e?.toString?.();
  if (!source) return false;
  return (
    ((source.includes('alignItems') && source.includes('itemMaxSize')) ||
      // Old webpack build
      (source.includes('().ControlsListChild') && source.includes('().ControlsListOuterPanel'))) &&
    source.includes('children')
  );
}) || ViteControlsList) as FC<ControlsListProps>;
