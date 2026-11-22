import { ReactNode, FC } from 'react';

import { findVar, Var } from '../module-system';
import { ItemProps } from './Item';
import { createPropListRegex } from '../utils';

export interface ProgressBarItemProps extends ItemProps {
  rtEstimatedCompletionTime?: number;
  sOperationText?: ReactNode;
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

// @deprecated use ProgressBarItem instead, they are the same
export interface ProgressBarWithInfoProps extends ProgressBarItemProps {}

export const ProgressBar = findVar((e: Var) =>
  typeof e == "function" && e?.toString()?.includes("#ProgressBar_ValueUnknown"),
) as FC<ProgressBarProps>;

const progressBarItemRegex = createPropListRegex(["indeterminate", "nTransitionSec", "nProgress"]);
export const ProgressBarItem = findVar((e: Var) =>
  typeof e == "function" && progressBarItemRegex.test(e.toString?.()),
) as FC<ProgressBarItemProps>;

// @deprecated use ProgressBarItem instead, they are the same
export const ProgressBarWithInfo = ProgressBarItem;