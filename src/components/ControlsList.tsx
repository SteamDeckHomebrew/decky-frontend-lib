import { Export, findModuleExport } from '../webpack';
import { FC } from 'react';

export interface ControlsListProps {
  alignItems?: 'left' | 'right' | 'center';
  spacing?: 'standard' | 'extra';
}

export const ControlsList: FC<ControlsListProps> = findModuleExport((e: Export) => e?.toString && e.toString().includes('().ControlsListChild') && e.toString().includes('().ControlsListOuterPanel'));