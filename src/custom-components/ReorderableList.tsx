import { CSSProperties, Fragment, JSXElementConstructor, ReactNode, useEffect, useRef, useState } from 'react';
import { Field, FieldProps, Focusable, GamepadEvent, GamepadButton, FocusableProps } from '../components';

/**
 * Reorderable List Shim
 * Shim to translate old implementation calls into the new one
 * See an example implementation {@linkplain https://github.com/Tormak9970/Component-Testing-Plugin/blob/main/src/testing-window/ReorderableListTest.tsx here}.
 */
export function ReorderableList<T>(props: ReorderableListProps<T>) {
  return (
    <ReorderableListV2<T>
      {...props}
      entries={props.entries.map(entry => ({...entry, component: props.interactables}))}
    />
  )
}
export type ReorderableListProps<T> = ReorderableExtendedProps & ReorderableListV2Props<T> & {
  interactables?: JSXElementConstructor<{ entry: ReorderableEntry<T> }>;
}

interface ReorderableExtendedProps {
  activeCSS?: CSSProperties;
  inactiveCSS?: CSSProperties;
  defaultCSS?: CSSProperties;
  fieldProps?: FieldProps;
}
/**
 * A ReorderableList entry of type <T>.
 * @param label Optional name of this entry in the list.
 * @param data Optional data to connect to this entry.
 * @param position The position of this entry in the list.
 * @param component Optional component to connect to this entry.
 * @param activeCSS Optional css for this entry while selected in reordering mode.
 * @param inactiveCSS Optional css for this entry while NOT selected in reordering mode.
 * @param defaultCSS Optional css for this entry while NOT in reordering mode.
 * @param fieldProps Optional properties for Field component encapsulating this entry.
 */
export type ReorderableEntry<T> = ReorderableExtendedProps & {
  label?: ReactNode;
  data?: T;
  position: number;
  component?: JSXElementConstructor<{ entry: ReorderableEntry<T> }>;
};

/**
 * Properties for a ReorderableList component of type <T>.
 *
 * @param entries List of ReorderableEntry items to display, ordered by `position`.
 * @param onSave Callable function executed when saving list order.
 * @param disabled If reordering mode should be toggle-able. @default false
 * @param saveDescription Optional string for action description while in reordering mode. @default "Save Order"
 * @param reorderDescription Optional string for action description while NOT in reordering mode. @default "Reorder"
 * @param animate If the list should animate. @default true
 * @param focusableProps Optional properties for Focusable component encapsulating the ReorderableList.
 * @param activeCSS Optional css for selected item while in reordering mode.
 * @param inactiveCSS Optional css for non-selected items while in reordering mode.
 * @param defaultCSS Optional css for items while NOT in reordering mode.
 * @param fieldProps Optional properties for Field component encapsulating ReorderableEntries.
 */
export type ReorderableListV2Props<T> = ReorderableExtendedProps & {
  entries: ReorderableEntry<T>[];
  onSave: (entries: ReorderableEntry<T>[]) => void;
  disabled?: boolean;
  saveDescription?: string;
  reorderDescription?: string;
  animate?: boolean;
  focusableProps?: Omit<FocusableProps,"children">;
};

/**
 * Auxiliary function to update reorderable entries `position` property to match the current list order.
 * 
 * @param entries List of ReorderableEntry items to update.
 * @returns List of ReorderableEntry items with `position` matching current list order.
 */
export function inheritCurrentOrder<T>(entries: ReorderableEntry<T>[]){return entries.map((entry, idx)=> ({...entry, position:idx}))}
/**
 * A component for creating reorderable lists.
 *
 */
export function ReorderableListV2<T>(props: ReorderableListV2Props<T>) {
  const inheritCurrentPosition = (entries: ReorderableEntry<T>[]) => entries.sort((a: ReorderableEntry<T>, b: ReorderableEntry<T>) => a.position - b.position)
  const [entryList, setEntryList] = useState<ReorderableEntry<T>[]>([]);
  const entryListRef = useRef<ReorderableEntry<T>[]>([])
  const [reorderEnabled, setReorderEnabled] = useState<boolean>(false);
  const saveDescription = props.saveDescription ?? 'Save Order'
  const reorderDescription = props.reorderDescription ?? 'Reorder'

  useEffect(() => {
    let entries = inheritCurrentPosition(props.entries)
    if (!entryListRef.current.length) entryListRef.current = entries
    setEntryList(entries)
  }, [props.entries]);

  function toggleReorderEnabled(): void {
    setReorderEnabled((reorderEnabled) => {
      if (reorderEnabled) {
        props.onSave(entryList)
        entryListRef.current = entryList
      }
      return !reorderEnabled
    });
  }

  function onShiftPosition(entryData: ReorderableEntry<T>, offset: number){
    const listEntries = [...entryList]
    const currentIdx = listEntries.indexOf(entryData)
    const targetIdx = listEntries.findIndex((entry: ReorderableEntry<T>) => entry.position === entryData.position+offset);
    if (targetIdx == -1) return;
    [listEntries[currentIdx].position, listEntries[targetIdx].position] = [listEntries[targetIdx].position, listEntries[currentIdx].position]
    setEntryList(inheritCurrentPosition(listEntries))
  }

  function onBackout(event: GamepadEvent) {
    if (event.detail.button == GamepadButton.CANCEL && reorderEnabled) {
      setReorderEnabled(!reorderEnabled);
      setEntryList(inheritCurrentOrder(entryListRef.current));
    }
  }

  return (
    <Fragment>
      <div
        style={{
          width: 'inherit',
          height: 'inherit',
          flex: '1 1 1px',
          scrollPadding: '48px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignContent: 'stretch',
        }}
      >
        <Focusable
          {...props.focusableProps}
          onSecondaryButton={props.disabled ? toggleReorderEnabled:undefined}
          onSecondaryActionDescription={props.disabled ? (reorderEnabled ? saveDescription : reorderDescription):undefined}
          onClick={props.disabled ? toggleReorderEnabled:undefined}
          onButtonDown={props.disabled ? onBackout:undefined}
        >
          {entryList.map((entry: ReorderableEntry<T>) => (
            <ReorderableItem
              onShiftPosition={onShiftPosition}
              animate={props.animate ?? true}
              activeCSS={entry.activeCSS ?? props.activeCSS}
              inactiveCSS={entry.inactiveCSS ?? props.inactiveCSS}
              defaultCSS={entry.defaultCSS ?? props.defaultCSS}
              fieldProps={entry.fieldProps ?? props.fieldProps}
              entryData={entry}
              reorderEnabled={reorderEnabled}
              disabled={props.disabled ?? false}
            />
          ))}
        </Focusable>
      </div>
    </Fragment>
  );
}

/**
 * Properties for a ReorderableItem component of type <T>
 */
type ReorderableListEntryProps<T> = ReorderableExtendedProps & {
  onShiftPosition: (entryData: ReorderableEntry<T>, offset: number) => void
  entryData: ReorderableEntry<T>;
  reorderEnabled: boolean;
  animate: boolean;
  disabled: boolean;
};

function ReorderableItem<T>(props: ReorderableListEntryProps<T>) {
  const [isSelected, setIsSelected] = useState<boolean>(false)
  const fieldProps = props.fieldProps ?? DefaultFieldProps
  const animate = props.animate ?? true
  const activeCSS = props.activeCSS ?? ReorderableItemActiveCSS
  const inactiveCSS = props.inactiveCSS ?? ReorderableItemInactiveCSS
  const defaultCSS = props.defaultCSS ?? ReorderableItemDefaultCSS
  const itemRef = useRef<SteamElement>(null)

  function onButton(event: GamepadEvent): void {
    if (itemRef.current && event.detail.button == GamepadButton.SECONDARY){
      if (props.reorderEnabled){
        let previousFocusableIfNoChildren = itemRef.current.m_node.m_Properties.focusableIfNoChildren
        let previousChildFocusDisabled = itemRef.current.m_node.m_Properties.childFocusDisabled
        itemRef.current.m_node.m_Properties.focusableIfNoChildren = true
        itemRef.current.m_node.m_Properties.childFocusDisabled = true
        itemRef.current.m_node.BTakeFocus()
        itemRef.current.m_node.m_Properties.focusableIfNoChildren = previousFocusableIfNoChildren
        itemRef.current.m_node.m_Properties.childFocusDisabled = previousChildFocusDisabled
      } else {
        itemRef.current.m_node.BChildTakeFocus()
      }
    }
    if (!props.reorderEnabled) return;

    if (event.detail.button == GamepadButton.DIR_UP) { props.onShiftPosition(props.entryData, -1) }
    else if (event.detail.button == GamepadButton.DIR_DOWN) { props.onShiftPosition(props.entryData, 1) } 
  }

  return (
    <div style={ animate && props.reorderEnabled ? (isSelected ? activeCSS : inactiveCSS) : defaultCSS }>
      <Field
        {...fieldProps}
        // @ts-expect-error navRef not defined in props yet
        navRef={itemRef}
        label={props.entryData.label}
        focusable={props.reorderEnabled}
        onButtonDown={props.disabled ? onButton:undefined}
        onGamepadBlur={() => setIsSelected(false)}
        onGamepadFocus={() => setIsSelected(true)}
      >
        <Focusable style={{ display: 'flex', width: '100%', position: 'relative' }}>
          {props.entryData.component ? <props.entryData.component entry={props.entryData} /> : null}
        </Focusable>
      </Field>
    </div>
  );
}

const ReorderableItemDefaultCSS: CSSProperties = {
  transform: 'scale(1)',
  transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
  opacity: 1
}
const ReorderableItemActiveCSS: CSSProperties = {
  ...ReorderableItemDefaultCSS
}
const ReorderableItemInactiveCSS: CSSProperties = {
  ...ReorderableItemDefaultCSS,
  transform: 'scale(0.9)',
  opacity: 0.7
}

export const MultiRowComponentFieldProps: FieldProps = {
  bottomSeparator: "none",
  childrenLayout: "below",
  padding: "none",
}
const DefaultFieldProps: FieldProps = {
  bottomSeparator: "standard",
  childrenLayout: "inline",
  padding: "standard"
}

interface SteamElement {
  m_node: NavNode
}
interface NavNode {
  m_Properties: NavNodeProperties
  BTakeFocus: ()=>boolean
  BChildTakeFocus: ()=>boolean
}
interface NavNodeProperties {
  childFocusDisabled: boolean|undefined
  focusableIfNoChildren: boolean|undefined
}