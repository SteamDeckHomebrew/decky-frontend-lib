import { ReactNode } from 'react';

import { findModuleChild } from '../webpack';

export const showModal: (children: ReactNode, parent: EventTarget) => void = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (typeof m[prop] === 'function' && m[prop].toString().includes('stopPropagation))')) {
      return m[prop];
    }
  }
});
