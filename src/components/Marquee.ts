import { CSSProperties, FC } from 'react';

import { Var, findVar } from '../module-system';

export interface MarqueeProps {
  play?: boolean;
  direction?: 'left' | 'right';
  speed?: number;
  delay?: number;
  fadeLength?: number;
  center?: boolean;
  resetOnPause?: boolean;
  style?: CSSProperties;
  className?: string;
  children: React.ReactNode;
}

export const Marquee: FC<MarqueeProps> = findVar(
  (e: Var) => typeof e == "function" && e.toString?.().includes('--fade-length-left') && e.toString?.().includes('--fade-length-right'),
);
