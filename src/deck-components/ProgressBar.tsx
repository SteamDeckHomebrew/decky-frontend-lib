import { ReactNode, VFC } from 'react';

import { findModuleChild } from '../webpack';
import { ItemProps } from './Item';

export interface ProgressBarItemProps extends ItemProps {
  indeterminate?: boolean;
  nTransitionSec?: number;
  nProgress?: number;
  focusable?: boolean;
}

export interface ProgressBarProps {
  indeterminate?: boolean;
  nTransitionSec?: number;
  nProgress?: number;
  focusable?: boolean;
}

export interface ProgressBarWithInfoProps extends ProgressBarItemProps {
  sTimeRemaining?: ReactNode;
  sOperationText?: ReactNode;
}

export const ProgressBar = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.toString()?.includes('.ProgressBar,"standard"==')) return m[prop];
  }
}) as VFC<ProgressBarProps>;

export const ProgressBarWithInfo = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.toString()?.includes('.ProgressBarFieldStatus},')) return m[prop];
  }
}) as VFC<ProgressBarWithInfoProps>;

export const ProgressBarItem = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.toString()?.includes('"indeterminate","nTransitionSec"')) return m[prop];
  }
}) as VFC<ProgressBarItemProps>;
