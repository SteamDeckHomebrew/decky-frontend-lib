import { FC, ReactNode, RefAttributes } from 'react';

import { findModuleChild } from '../webpack';
import { FooterLegendProps } from './FooterLegend';

export interface FieldProps extends FooterLegendProps {
  label?: ReactNode;
  bottomSeparator?: 'standard' | 'thick' | 'none';
  description?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  inlineWrap?: 'keep-inline' | 'shift-children-below'; // If label is too long it will move shildren below before starting to wrap label
  childrenLayout?: 'below' | 'inline';
  childrenContainerWidth?: 'min' | 'max' | 'fixed'; // Does not work with childrenLayout==='below'
  spacingBetweenLabelAndChild?: 'none'; // This applies only when childrenLayout==='below'
  padding?: 'none' | 'standard' | 'compact';
  className?: string;
  highlightOnFocus?: boolean;
  indentLevel?: number;
  verticalAlignment?: 'center' | 'none'; // Alligns inline label with children
  focusable?: boolean; // Allows to get focus without any focusable children or on* callbacks
  onActivate?: (e: CustomEvent | MouseEvent) => void;
  onClick?: (e: CustomEvent | MouseEvent) => void;
}

export const Field = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (m[prop]?.render?.toString().includes('"shift-children-below"')) return m[prop];
  }
}) as FC<FieldProps & RefAttributes<HTMLDivElement>>;
