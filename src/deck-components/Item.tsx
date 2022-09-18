import { ReactNode } from 'react';

export interface ItemProps {
  label?: string;
  description?: string;
  layout?: 'below' | 'inline';
  icon?: ReactNode;
  bottomSeparator?: 'standard' | 'thick' | 'none';
  indentLevel?: number;
  tooltip?: string;
}
