import { FC, ReactNode } from 'react';

import { findModuleChild } from '../webpack';

export const showContextMenu: (children: ReactNode, parent?: EventTarget) => void = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (typeof m[prop] === 'function' && m[prop].toString().includes('stopPropagation))')) {
      return m[prop];
    }
  }
});

export interface MenuProps {
  label: string;
  onCancel?(): void;
  cancelText?: string;
}

export const Menu: FC<MenuProps> = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;

  for (let prop in m) {
    if (m[prop]?.prototype?.HideIfSubmenu && m[prop]?.prototype?.HideMenu) {
      return m[prop];
    }
  }
});

export interface MenuItemProps {
  onSelected?(): void;
}

export const MenuItem: FC<MenuItemProps> = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;

  for (let prop in m) {
    if (m[prop]?.prototype?.OnOKButton && m[prop]?.prototype?.OnMouseEnter) {
      return m[prop];
    }
  }
});

/*
all().map(m => {
if (typeof m !== "object") return undefined;
for (let prop in m) { if (m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) return m[prop]}
}).find(x => x)
*/
