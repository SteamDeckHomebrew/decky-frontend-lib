import { FC, SVGAttributes } from 'react';

import { Export, findModuleExport } from '../webpack';

export const SteamSpinner = findModuleExport((e: Export) => e?.toString?.()?.includes('Steam Spinner') && e?.toString?.()?.includes('src')) as FC<SVGAttributes<SVGElement>>;
