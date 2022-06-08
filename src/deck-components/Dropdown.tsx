import { ReactNode, VFC } from 'react';

import { CommonUIModule } from '../webpack';
import { ItemProps } from './Item';

export interface SingleDropdownOption {
  data: number;
  label: string;

  options?: never;
}

export interface MultiDropdownOption {
  label: string;
  options: DropdownOption[];

  data?: never;
}

export type DropdownOption = SingleDropdownOption | MultiDropdownOption;

export interface DropdownProps {
  rgOptions: DropdownOption[];
  selectedOption: number | null;
  disabled?: boolean;
  onMenuWillOpen?(showMenu: () => void): void;
  onMenuOpened?(): void;
  onChange?(data: SingleDropdownOption): void;
  contextMenuPositionOptions?: any;
  menuLabel?: string;
  strDefaultLabel?: string;
  renderButtonValue?(element: ReactNode): ReactNode;
  focusable?: boolean;
}

export const Dropdown = Object.values(CommonUIModule).find(
  (mod: any) => mod?.prototype?.SetSelectedOption && mod?.prototype?.BuildMenu,
) as VFC<DropdownProps>;

export interface DropdownItemProps extends DropdownProps, ItemProps {}

export const DropdownItem = Object.values(CommonUIModule).find((mod: any) =>
  mod?.toString()?.includes('"dropDownControlRef","description"'),
) as VFC<DropdownItemProps>;
