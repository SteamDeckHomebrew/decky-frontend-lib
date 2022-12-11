import { findModuleChild } from '../webpack';
import { FC } from 'react';

export interface ControlsListProps {
  alignItems?: 'left' | 'right' | 'center';
  spacing?: 'standard' | 'extra';
}

export const ControlsList: FC<ControlsListProps> = findModuleChild((m) => {
  if (typeof m !== 'object') return;
  for (const prop in m) {
    if (m[prop]?.toString && m[prop].toString().includes('().ControlsListChild') && m[prop].toString().includes('().ControlsListOuterPanel')) {
      return m[prop];
    }
  }
  return;
});
