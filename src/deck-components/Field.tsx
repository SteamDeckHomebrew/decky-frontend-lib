import { FC, HTMLAttributes, ReactNode, RefAttributes } from 'react';
import { findModuleChild } from '../webpack';
import { FooterLegendProps } from './FooterLegend';

export interface FieldProps extends HTMLAttributes<HTMLDivElement>, FooterLegendProps {
  label?: ReactNode;
  bottomSeparator?: 'standard' | 'thick' | 'none';
  description?: ReactNode;
  disabled?: boolean;
  icon?: ReactNode;
  inlineWrap?: 'keep-inline' | 'shift-children-below';
  childrenLayout?: 'below' | 'inline';
  childrenContainerWidth?: 'min' | 'max' | 'fixed'; // Does not work with childrenLayout==='below'
  spacingBetweenLabelAndChild?: 'none'; // This applies only when childrenLayout==='below' 
  padding?: 'none' | 'standard' | 'compact';
  className?: string;
  highlightOnFocus?: boolean;
  indentLevel?: number;
  verticalAlignment?: 'center' | 'none'; // Alligns inline label with children
}

export const Field = findModuleChild((m) => {
    if (typeof m !== "object") return undefined;
    for (let prop in m) {
      if (m[prop]?.render?.toString().includes('"shift-children-below"')) return m[prop]
    }
}) as FC<FieldProps & RefAttributes<HTMLDivElement>>;
