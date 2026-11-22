import { ForwardRefExoticComponent } from 'react';

import { findModuleExport } from '../module-system';

export const createDivWrapper: (
  className: string,
  role?: string,
  defaultProps?: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
) => ForwardRefExoticComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = findModuleExport(e => 
  typeof e == "function" &&
  /return [a-zA-Z0-9_$]+\.forwardRef\(function\([a-zA-Z0-9_$]+,[a-zA-Z0-9_$]+\){return.*role:/.test(e?.toString())
)
