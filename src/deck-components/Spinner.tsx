import { FC } from 'react';

import { IconsModule } from '../webpack';

// interface ButtonProps {
//   label?: string;
//   description?: string;
//   layout?: 'below';
//   onClick?(e: MouseEvent): void;
//   disabled?: boolean;
//   bottomSeparator?: boolean;
// }

export const Spinner = Object.values(IconsModule).find((mod: any) =>
    mod?.toString && /Spinner\)}\),.\.createElement\(\"path\",{d:\"M18 /.test(mod.toString())
) as FC<{}>;