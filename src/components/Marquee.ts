import { CSSProperties, FC } from 'react';

import { Export, findModuleExport } from '../webpack';
import { ViteMarquee } from './vite-fallbacks';
import { renderedComponent } from '../rendered';

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

const isMarqueeSource = (source?: string) =>
  !!source && source.includes('--fade-length') && source.includes('fadeLength');

export const Marquee: FC<MarqueeProps> = (findModuleExport(
  (e: Export) =>
    (e?.toString?.()?.includes('.Marquee') && e.toString().includes('--fade-length')) ||
    isMarqueeSource(e?.toString?.()),
) || renderedComponent<MarqueeProps>(isMarqueeSource, ViteMarquee)) as FC<MarqueeProps>;
