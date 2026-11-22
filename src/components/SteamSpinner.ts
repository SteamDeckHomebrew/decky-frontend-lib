import { FC, ReactNode, SVGAttributes } from 'react';

import { Var, findVar } from '../module-system';

interface SteamSpinnerProps {
  children?: ReactNode;
  background?: "transparent"; // defaults to black seemingly, but only "transparent" is checked against
}

export const SteamSpinner = findVar(
  (e: Var) => typeof e == "function" && e?.toString?.()?.includes('Steam Spinner') && e?.toString?.()?.includes('src'),
) as FC<SVGAttributes<SVGElement> & SteamSpinnerProps>;
