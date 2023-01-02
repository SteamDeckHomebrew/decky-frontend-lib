import { FC, useState, useEffect, useCallback } from 'react';

import {
  showContextMenu,
  DialogButton,
  Menu,
  MenuItem,
  DialogCheckbox,
  DialogCheckboxProps,
  Marquee,
  Chevron,
} from '../deck-components';

import { findModuleChild } from '../webpack';

const dropDownControlButtonClass = findModuleChild((m) => {
  if (typeof m !== 'object') return undefined;
  for (const prop in m) {
    if (typeof m[prop] === 'string' && m[prop].includes('gamepaddropdown_DropDownControlButton')) {
      return m[prop];
    }
  }
});

interface DropdownMultiselectItemProps extends DialogCheckboxProps {
  value: any,
  onSelect: (checked: boolean, value: any) => void,
  checked: boolean
}

const DropdownMultiselectItem: FC<DropdownMultiselectItemProps> = ({
  value,
  onSelect,
  checked: defaultChecked,
  ...rest
}) => {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    onSelect?.(checked, value);
  }, [checked, onSelect, value]);

  return (
    <MenuItem
      bInteractableItem
      onClick={() => setChecked((x) => !x)}
    >
      <DialogCheckbox
        style={{ marginBottom: 0, padding: 0 }}
        className="decky_DropdownMultiselectItem_DialogCheckbox"
        bottomSeparator="none"
        {...rest}
        onClick={() => setChecked((x) => !x)}
        onChange={(checked) => setChecked(checked)}
        controlled
        checked={checked}
      />
    </MenuItem>
  );
};

interface DropdownMultiselectProps {
  items: {
    label: string,
    value: any,
  }[],
  selected: any[],
  onSelect: (selected: any[]) => void,
  label: string
}

/**
 * A simplified dropdown that allows multiple values to be selected.
 * 
 * @example
 * const [selectedItems, setSelectedItems] = useState<string[]>(['image/jpeg']);
 * 
 * <Field label="File Types">
 *   <DropdownMultiselect
 *     label="File Types"
 *     items={[
 *       { label: 'PNG', value: 'image/png' },
 *       { label: 'JPEG', value: 'image/jpeg' },
 *     ]}
 *     selected={selectedItems}
 *     onSelect={(items) => {
 *       setSelectedItems(items);
 *     }}
 *   />
 * </Field>
 */
export const DropdownMultiselect: FC<DropdownMultiselectProps> = ({
  label,
  items,
  selected,
  onSelect,
}) => {
  const [itemsSelected, setItemsSelected] = useState<any>(selected);

  const handleItemSelect = useCallback((checked, value) => {
    setItemsSelected((x: any) => (checked ?
      [...x.filter((y: any) => y !== value), value] :
      x.filter((y: any) => y !== value)
    ));
  }, []);

  useEffect(() => {
    onSelect(itemsSelected);
  }, [itemsSelected, onSelect]);

  return (
    <DialogButton
      style={{
        display: 'flex',
        alignItems: 'center',
        maxWidth: '100%',
      }}
      className={dropDownControlButtonClass}
      onClick={(evt) => {
        evt.preventDefault();
        showContextMenu(
          <Menu
            label={label}
            cancelText={
              window.LocalizationManager.m_mapTokens.get('Button_Back') ??
              window.LocalizationManager.m_mapFallbackTokens.get('Button_Back') ??
              'Back'
            }
          >
            <style>
              {`
              /* Inherit color from ".basiccontextmenu" */
              .decky_DropdownMultiselectItem_DialogCheckbox > .DialogToggle_Label {
                color: inherit;
              }
              `}
            </style>
            {items.map((x) => (
              <DropdownMultiselectItem
                key={x.value}
                label={x.label}
                value={x.value}
                checked={itemsSelected.includes(x.value)}
                onSelect={handleItemSelect}
              />
            ))}
          </Menu>,
          evt.currentTarget ?? window
        );
      }}
    >
      <Marquee>
        {
          selected.length > 0 ?
            selected.map((x: any) => items[items.findIndex((v) => v.value === x)].label).join(', ') :
            '…'
        }
      </Marquee>
      <div style={{ flexGrow: 1, minWidth: '1ch' }} />
      <Chevron style={{ height: '1em' }} direction="down" />
    </DialogButton>
  );
}
