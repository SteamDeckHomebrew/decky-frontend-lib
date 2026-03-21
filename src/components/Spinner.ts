import { FC, SVGAttributes } from 'react';

import { IconsModule } from '../webpack';

// TODO type this and other icons?
export const Spinner = IconsModule && Object.values(IconsModule)?.find(
  (mod: any) => mod?.toString && /Spinner\),children:\[\(0,\w+\.jsx\)\("path",\{d:"M18 /.test(mod.toString()) || /Spinner\)}\)?,.\.createElement\(\"path\",{d:\"M18 /.test(mod.toString()),
) as FC<SVGAttributes<SVGElement>>;
