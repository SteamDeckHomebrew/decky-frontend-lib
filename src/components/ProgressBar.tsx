import { ReactNode, VFC } from 'react';

import { Export, findModuleExport } from '../webpack';
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

export const ProgressBar = findModuleExport((e: Export) => e?.toString()?.includes('.ProgressBar,"standard"==')) as VFC<ProgressBarProps>;

export const ProgressBarWithInfo = findModuleExport((e: Export) => e?.toString()?.includes('.ProgressBarFieldStatus},')) as VFC<ProgressBarWithInfoProps>;

export const ProgressBarItem = findModuleExport((e: Export) => e?.toString()?.includes('"indeterminate","nTransitionSec"')) as VFC<ProgressBarItemProps>;
