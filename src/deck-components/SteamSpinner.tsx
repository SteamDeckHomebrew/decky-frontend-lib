import { FC, SVGAttributes } from 'react';

import { findModuleChild } from '../webpack';

export const SteamSpinner = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (
      m[prop]?.toString?.()?.includes('Steam Spinner') && m[prop]?.toString?.()?.includes('src')
    )
      return m[prop];
  }
}) as FC<SVGAttributes<SVGElement>>;
