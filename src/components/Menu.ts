import { FC, ReactNode } from 'react';

import { fakeRenderComponent } from '../utils';
import { Export, findModuleExport } from '../webpack';
import { FooterLegendProps } from './FooterLegend';

export const showContextMenu: (children: ReactNode, parent?: EventTarget) => void = findModuleExport(
  (e: Export) => typeof e === 'function' && e.toString().includes('GetContextMenuManagerFromWindow(')
  && e.toString().includes('.CreateContextMenuInstance('),
);

export interface MenuProps extends FooterLegendProps {
  label: string;
  onCancel?(): void;
  cancelText?: string;
  children?: ReactNode;
}

export const Menu: FC<MenuProps> = findModuleExport(
  (e: Export) => e?.prototype?.HideIfSubmenu && e?.prototype?.HideMenu,
);

export interface MenuGroupProps {
  label: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const MenuGroup: FC<MenuGroupProps> = findModuleExport(
  (e: Export) =>
    (e?.toString()?.includes?.('bInGamepadUI:') &&
      fakeRenderComponent(() => e({ overview: { appid: 7 } }), {useContext: () => ({IN_GAMEPADUI: true})})?.type?.prototype?.RenderSubMenu) ||
    (e?.prototype?.RenderSubMenu && e?.prototype?.ShowSubMenu)
);
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

export const MenuItem: FC<MenuItemProps> = findModuleExport(
  (e: Export) =>
    e?.render?.toString()?.includes('bPlayAudio:') || (e?.prototype?.OnOKButton && e?.prototype?.OnMouseEnter),
);

/*
all().map(m => {
if (typeof m !== "object") return undefined;
for (let prop in m) { if (m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) return m[prop]}
}).find(x => x)
*/
