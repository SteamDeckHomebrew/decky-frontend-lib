import { FC, SVGAttributes } from 'react';

import { IconsModule } from '../common-modules';

// TODO type this and other icons?
export const Spinner = IconsModule && Object.values(IconsModule)?.find(
  (mod: any) => mod?.toString && /,[a-zA-Z0-9_$]+\),children:\[\(0,[a-zA-Z0-9_$]+\.jsx\)\(`path`,\{d:`M18 /.test(mod.toString()) ,
) as FC<SVGAttributes<SVGElement>>;
