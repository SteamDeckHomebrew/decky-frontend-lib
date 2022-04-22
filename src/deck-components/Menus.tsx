import { FC } from 'react';

import { MenuModule } from '../modules';

interface SimpleMenuProps {
  label: string;
  onCancel?(): void;
  cancelText?: string;
}

export const SimpleMenu: FC<SimpleMenuProps> = MenuModule.c;

interface MenuItemProps {
  onSelected?(): void;
}

export const MenuItem: FC<MenuItemProps> = MenuModule.e;
