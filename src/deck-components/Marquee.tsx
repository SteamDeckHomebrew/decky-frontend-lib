import { CSSProperties, FC } from 'react';

import { findModuleChild } from '../webpack';

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

export const Marquee: FC<MarqueeProps> = findModuleChild((m) => {
  if (typeof m !== 'object') return;
  for (const prop in m) {
    if (m[prop]?.toString && m[prop].toString().includes('.Marquee') && m[prop].toString().includes('--fade-length')) {
      return m[prop];
    }
  }
  return;
});
