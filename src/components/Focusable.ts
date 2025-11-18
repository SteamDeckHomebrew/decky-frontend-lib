import { HTMLAttributes, ReactNode, RefAttributes, FC } from 'react';

import { Export, findModuleExport } from '../webpack';
import { FooterLegendProps } from './FooterLegend';
import type { FlowChildrenLayout_t } from '../globals/stores';
import { createPropListRegex } from '../utils';

export interface FocusableProps extends HTMLAttributes<HTMLDivElement>, FooterLegendProps {
  children: ReactNode;
  // TODO(globals): why does it say horizontal/right in the link below ? I
  // looked in the steam js and found 0 mentions of that
  // https://github.com/search?q=flow-children+language%3ATSX&type=code&l=TSX
  // also maybe move the type here if it's correct ?
  'flow-children'?: FlowChildrenLayout_t;
  focusClassName?: string;
  focusWithinClassName?: string;
  noFocusRing?: boolean;
  onActivate?: (e: CustomEvent) => void;
  onCancel?: (e: CustomEvent) => void;
}

const focusableRegex = createPropListRegex(["flow-children", "onActivate", "onCancel", "focusClassName", "focusWithinClassName"]);

export const Focusable = findModuleExport((e: Export) =>
  e?.render?.toString && focusableRegex.test(e.render.toString())
) as FC<FocusableProps & RefAttributes<HTMLDivElement>>;
