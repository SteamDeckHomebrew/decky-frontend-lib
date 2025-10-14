import { HTMLAttributes, ReactNode, RefAttributes, FC } from 'react';

import { Export, findModuleExport } from '../webpack';
import { FooterLegendProps } from './FooterLegend';
import { createPropListRegex } from '../utils';

export interface FocusableProps extends HTMLAttributes<HTMLDivElement>, FooterLegendProps {
  children: ReactNode;
  'flow-children'?: string;
  focusClassName?: string;
  focusWithinClassName?: string;
  noFocusRing?: boolean;
  onActivate?: (e: CustomEvent) => void;
  onCancel?: (e: CustomEvent) => void;
}

const focusableRegex = createPropListRegex(["flow-children", "onActivate", "onCancel", "focusClassName", "focusWithinClassName"]);

export const Focusable = findModuleExport((e: Export) => {
  const code: string | undefined = e?.render?.toString?.() || e?.toString?.();
  return typeof code === 'string' && focusableRegex.test(code);
}
) as FC<FocusableProps & RefAttributes<HTMLDivElement>>;
