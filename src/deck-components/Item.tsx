import { ReactNode } from 'react';

export interface ItemProps {
  label?: string;
  description?: string;
  layout?: 'below' | 'inline';
  icon?: ReactNode;
  bottomSeparator?: boolean;
  indentLevel?: number;
  tooltip?: string;
}
