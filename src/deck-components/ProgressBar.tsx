import { VFC } from 'react';

import { findModuleChild } from '../webpack';
import { ItemProps } from './Item';

export interface ProgressBarItem extends ItemProps {
  indeterminate?: boolean;
  nTransitionSec?: number;
  nProgress?: number;
  focusable?: boolean;
}

export const ProgressBarItem = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.toString()?.includes('"indeterminate","nTransitionSec"')) return m[prop];
  }
}) as VFC<ProgressBarItem>;
