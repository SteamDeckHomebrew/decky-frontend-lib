import { ReactNode, FC } from 'react';

import { Export, findModuleExport } from '../webpack';
import { ItemProps } from './Item';
import { createPropListRegex } from '../utils';
import {
  ViteProgressBar,
  ViteProgressBarItem,
  ViteProgressBarWithInfo,
} from './vite-fallbacks';
import { renderedComponent } from '../rendered';

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
  /** Timestamp of the completion time, has to be divided by 1000 */
  rtEstimatedCompletionTime?: number;
  sOperationText?: ReactNode;
}

const isProgressBarSource = (source?: string) =>
  !!source && source.includes('role:"progressbar"') && source.includes('nProgress');

export const ProgressBar = (findModuleExport((e: Export) => {
  const source = e?.toString?.();
  return (
    (!!source && /\.ProgressBar,(?:\w*==)?"standard"(?:==)?/.test(source)) ||
    isProgressBarSource(source)
  );
}) || renderedComponent<ProgressBarProps>(isProgressBarSource, ViteProgressBar)) as FC<ProgressBarProps>;

const isProgressBarWithInfoSource = (source?: string) =>
  !!source && source.includes('sOperationText') && source.includes('nProgress');

export const ProgressBarWithInfo = (findModuleExport(
  (e: Export) =>
    // new || old
    e?.toString?.()?.includes('.ProgressBarFieldStatus,children') ||
    e?.toString?.()?.includes('.ProgressBarFieldStatus},') ||
    isProgressBarWithInfoSource(e?.toString?.()),
) || renderedComponent<ProgressBarWithInfoProps>(isProgressBarWithInfoSource, ViteProgressBarWithInfo)) as FC<ProgressBarWithInfoProps>;

const progressBarItemRegex = createPropListRegex(['indeterminate', 'nTransitionSec', 'nProgress']);
export const ProgressBarItem = (findModuleExport((e: Export) =>
  e?.toString && progressBarItemRegex.test(e.toString?.()),
) || renderedComponent<ProgressBarItemProps>(isProgressBarWithInfoSource, ViteProgressBarItem)) as FC<ProgressBarItemProps>;
