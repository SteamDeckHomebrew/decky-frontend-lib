import { FC, SVGAttributes } from 'react';

import { IconsModule } from '../webpack';

// TODO type this and other icons?
export const Spinner = Object.values(IconsModule).find(
  (mod: any) => mod?.toString && /Spinner\)}\),.\.createElement\(\"path\",{d:\"M18 /.test(mod.toString()),
) as FC<SVGAttributes<SVGElement>>;
