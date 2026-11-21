import { FC, ReactNode, SVGAttributes } from 'react';

import { Export, findModuleExport } from '../webpack';
import { ViteSteamSpinner } from './vite-fallbacks';
import { renderedComponent } from '../rendered';

interface SteamSpinnerProps {
  children?: ReactNode;
  background?: 'transparent'; // defaults to black seemingly, but only "transparent" is checked against
}

const isSteamSpinnerSource = (source?: string) => !!source && source.includes('Steam Spinner') && source.includes('src');

export const SteamSpinner = (findModuleExport((e: Export) => isSteamSpinnerSource(e?.toString?.())) ||
  renderedComponent<SVGAttributes<SVGElement> & SteamSpinnerProps>(
    isSteamSpinnerSource,
    ViteSteamSpinner,
  )) as FC<SVGAttributes<SVGElement> & SteamSpinnerProps>;
