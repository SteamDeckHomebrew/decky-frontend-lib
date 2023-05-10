import { FC, ReactNode } from 'react';

import { fakeRenderComponent } from '../utils';
import { findModuleChild } from '../webpack';
import { FooterLegendProps } from './FooterLegend';

export const showContextMenu: (children: ReactNode, parent?: EventTarget) => void = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (let prop in m) {
    if (typeof m[prop] === 'function' && m[prop].toString().includes('stopPropagation))')) {
      return m[prop];
    }
  }
});

export interface MenuProps extends FooterLegendProps {
  label: string;
  onCancel?(): void;
  cancelText?: string;
  children?: ReactNode;
}

export const Menu: FC<MenuProps> = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;

  for (let prop in m) {
    if (m[prop]?.prototype?.HideIfSubmenu && m[prop]?.prototype?.HideMenu) {
      return m[prop];
    }
  }
});

export interface MenuGroupProps {
  label: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const MenuGroup: FC<MenuGroupProps> = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;

  for (let prop in m) {
    if (
      (m[prop]?.toString()?.includes?.('bInGamepadUI:') &&
        fakeRenderComponent(() => m[prop]({overview: {appid: 7}}))?.type?.prototype?.RenderSubMenu) ||
      (m[prop]?.prototype?.RenderSubMenu && m[prop]?.prototype?.ShowSubMenu)
    ) {
      return m[prop];
    }
  }
});

export interface MenuItemProps extends FooterLegendProps {
  bInteractableItem?: boolean;
  onClick?(evt: Event): void;
  onSelected?(evt: Event): void;
  onMouseEnter?(evt: MouseEvent): void;
  onMoveRight?(): void;
  selected?: boolean;
  disabled?: boolean;
  bPlayAudio?: boolean;
  tone?: 'positive' | 'emphasis' | 'destructive';
  children?: ReactNode;
}

export const MenuItem: FC<MenuItemProps> = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;

  for (let prop in m) {
    if (
      m[prop]?.render?.toString()?.includes('bPlayAudio:') ||
      (m[prop]?.prototype?.OnOKButton && m[prop]?.prototype?.OnMouseEnter)
    ) {
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
