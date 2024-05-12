import { HTMLAttributes, ReactNode, RefAttributes, VFC } from 'react';

import { Export, findModuleExport } from '../webpack';
import { FooterLegendProps } from './FooterLegend';

export interface FocusableProps extends HTMLAttributes<HTMLDivElement>, FooterLegendProps {
  children: ReactNode;
  'flow-children'?: string;
  focusClassName?: string;
  focusWithinClassName?: string;
  noFocusRing?: boolean;
  onActivate?: (e: CustomEvent) => void;
  onCancel?: (e: CustomEvent) => void;
}

export const Focusable = findModuleExport((e: Export) => e?.render?.toString()?.includes('["flow-children","onActivate","onCancel","focusClassName",')) as VFC<FocusableProps & RefAttributes<HTMLDivElement>>;
