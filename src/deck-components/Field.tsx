import { FC, HTMLAttributes, ReactNode, RefAttributes } from 'react';
import { findModuleChild } from '../webpack';

export interface FieldProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  childrenLayout?: string;
  childrenContainerWidth?: string;
  padding?: string;
  highlightOnFocus?: boolean;
  indentLevel?: number;
  verticalAlignment?: string;
}

export const Field = findModuleChild((m) => {
    if (typeof m !== "object") return undefined;
    for (let prop in m) {
      if (m[prop]?.render?.toString().includes('"shift-children-below"')) return m[prop]
    }
}) as FC<FieldProps & RefAttributes<HTMLDivElement>>;
