import { SingleDropdownOption, quickAccessMenuClasses, ConfirmModal, Focusable } from '../deck-components';
import { afterPatch, joinClassNames } from '../utils';
import { ReactElement, VFC, useMemo, useState, Fragment, useEffect } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { EnhancedSelector, EnhancedSelectorFocusRingMode, EnhancedSelectorTransparencyMode } from './EnhancedSelector';
import { CustomDropdown } from './CustomDropdown';
import { CustomButton, CustomButtonFocusMode } from './CustomButton';
import { SoundFile } from '../utils/GamepadUIAudio';

export type DatePickerModalType = 'simple' | 'pretty';
export type DateObj = { day?: number, month?: number, year: number; };

/** A SingleDropdownOption with specific date data */
export interface DateSelection extends SingleDropdownOption {
  data: DateObj;
};

/** Whether the date includes day/ month and year, month and year, or year only. */
export enum DateIncludes {
  yearOnly,
  monthYear,
  dayMonthYear
}

/** Props for DatePicker component */
export interface DatePickerProps extends Omit<DatePickerModalProps, 'onSelectDate' | 'closeModal'> {
  /** The date picker modal style. Either "simple" or "pretty" @default 'simple' */
  modalType?: DatePickerModalType;

  /** Callback function to call when the date is changed */
  onChange?: (date: DateSelection) => void;

  /** Custom icon to use for the popup button */
  buttonIcon?: ReactElement;

  /** Whether or not the popup button icon should be removed @default false */
  noIcon?: boolean;

  /** Whether or not the popup button text chould be centered @default false */
  buttonLabelCenter?: boolean;

  /** CSS style for the popup button */
  buttonStyle?: React.CSSProperties;

  /** CSS style for the popup button container */
  buttonContainerStyle?: React.CSSProperties;

  /** Default text to display in the popup button when selectedDate is undefined or invalid @default 'Select Date...' */
  strDefaultLabel?: string;
}

/** CSS class names for DatePicker component */
export enum DatePickerClasses {
  topLevel = 'date-picker'
}

interface ModalWrapperProps {
  onSelectOption: (option: SingleDropdownOption) => void;
  selectedOption?: any;
  rgOptions?: any;
  closeModal?: () => void;
}

/** A highly configurable button component that pops up a modal to select a date and displays the captured result.  */
export const DatePicker: VFC<DatePickerProps> = ({
  modalType,
  selectedDate,
  buttonLabelCenter,
  buttonIcon,
  noIcon,
  buttonStyle,
  buttonContainerStyle,
  strDefaultLabel,
  toLocaleStringOptions,
  dateIncludes,
  onChange,
  ...modalProps
}) => {
  const DatePickerModal = modalType === 'pretty' ? PrettyDatePickerModal : SimpleDatePickerModal;
  const include = dateIncludes ?? DateIncludes.dayMonthYear;

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { day: incomingDay, month: incomingMonth, year: incomingYear } = selectedDate ?? {};

  const [day, setDay] = useState(include === DateIncludes.dayMonthYear ? incomingDay ?? 1 : undefined);
  const [month, setMonth] = useState(include >= DateIncludes.monthYear ? incomingMonth ?? 1 : undefined);
  const [year, setYear] = useState(incomingYear);

  const valid = isValidDate(day, month, year);

  useEffect(() => {
    if (mounted) {
      const { day, month, year } = selectedDate ?? {};
      const valid = selectedDate && isValidDate(day, month, year);
      if (valid) {
        setYear(year);
        setMonth(month);
        setDay(day);
      }
    }
  }, [incomingDay, incomingMonth, incomingYear]);

  const _date: DateObj = { year: year! };
  if (month) _date.month = month;
  if (day) _date.day = day;

  const date = useMemo(() => valid ? _date : undefined, [day, month, year, valid, include]);

  const options = useMemo(() => valid ? [{
    label: dateToLabel(year!, month, day, toLocaleStringOptions),
    data: date!
  }] : undefined, [day, month, year, valid, include]);

  useEffect(() => {
    if (valid && mounted) {
      const newDate = { ...options![0].data };

      switch (include) {
        case DateIncludes.dayMonthYear:
          if (!newDate.day) newDate.day = 1;
          if (!newDate.month) newDate.month = 1;
          break;
        case DateIncludes.monthYear:
          if (!newDate.month) newDate.month = 1;
          delete newDate.day;
          break;
        case DateIncludes.yearOnly:
          delete newDate.day;
          delete newDate.month;
      }
      setYear(newDate.year);
      setMonth(newDate.month);
      setDay(newDate.day);
      onChange?.({ label: dateToLabel(newDate.year!, newDate.month, newDate.day, toLocaleStringOptions), data: newDate });
    }
  }, [include]);

  return (
    <CustomDropdown
      onChange={onChange}
      selectedOption={date}
      rgOptions={options}
      strDefaultLabel={strDefaultLabel ?? 'Select Date...'}
      labelCenter={buttonLabelCenter}
      customDropdownIcon={buttonIcon ?? <FaRegCalendarAlt style={{ margin: 'auto' }} />}
      noDropdownIcon={noIcon ?? false}
      style={buttonStyle}
      containerStyle={buttonContainerStyle}
      containerClassName={DatePickerClasses.topLevel}
      customModal={({ onSelectOption, selectedOption, closeModal }: ModalWrapperProps) => {
        return <DatePickerModal
          onSelectDate={date => {
            onSelectOption(date);
            setYear(date.data.year);
            setMonth(date.data.month);
            setDay(date.data.day);
          }}
          selectedDate={selectedOption}
          dateIncludes={include}
          toLocaleStringOptions={toLocaleStringOptions}
          closeModal={closeModal}
          {...modalProps}
        />;
      }}
    />
  );
};

/** Props for SimpleDatePickerModal and PrettyDatePickerModal component */
export interface DatePickerModalProps {
  /** Callback function to call when a date is selected */
  onSelectDate?: (date: DateSelection) => void;

  /** The selected date */
  selectedDate?: DateObj;

  /** The earliest year that will be available to select from. This get overridden if selectedDate year is earlier @default 1970 */
  startYear?: number;

  /** The latest year that will be available to select from. This get overridden if selectedDate year is later. Default is current year. */
  endYear?: number;

  /** The options for the date string format */
  toLocaleStringOptions?: Intl.DateTimeFormatOptions;

  /** Whether the date includes day/ month and year, month and year, or year only. @default dayMonthYear*/
  dateIncludes?: DateIncludes;

  /** Whether or not the day/ month/ year selector labels should be centered @default true */
  centerSelectorLabels?: boolean;

  /** Whether the day/ month/ year selections should stop when at the end/ beginning of the list or cycle around @default false */
  noWrapAround?: boolean;

  /** Whether or not the day/ month/ year selection boxes should be focusable @default true */
  focusDropdowns?: boolean;

  /** Whether or not to show the dropdown arrow on the day/ month/ year selection boxes @default false */
  showDropdownIcons?: boolean;

  /** Which elements of the day/ month/ year EnhancedSelectors should be transparent @default none */
  transparencyMode?: EnhancedSelectorTransparencyMode;

  /** When to use focus ring instead of highlight when focusing an element @default never */
  focusRingMode?: EnhancedSelectorFocusRingMode;

  /** Whether or not to use the alternate sound effects for the EnhancedSelectors @default false */
  alternateSFX?: boolean;

  /** Sound effect override to use for the day/ month/ year EnhancedSelector buttons */
  sfxMain?: SoundFile;

  /** Sound effect override to use on day/ month/ year buttons for when at the end/ beginning of the list and noWrapAround is true */
  sfxInvalid?: SoundFile;

  /** Whether or not the day/ month/ year selection boxes should animate when shifting the selection @default true */
  animate?: boolean;

  /** The duration in ms of the day/ month/ year selection box animations @default 300 */
  animationDuration?: number;

  /** Function for closing the modal, typically automatically passed when showModal is called. */
  closeModal?: () => void;
}

export enum DatePickerModalClasses {
  topLevel = 'date-picker-modal',
  title = 'date-picker-modal-title',
  pretty = 'date-picker-pretty'
}

/** A visually simple date picker modal that is configurable */
export const SimpleDatePickerModal: VFC<DatePickerModalProps> = ({
  onSelectDate,
  selectedDate,
  toLocaleStringOptions,
  focusDropdowns,
  showDropdownIcons,
  centerSelectorLabels,
  startYear,
  endYear,
  dateIncludes,
  closeModal,
  ...selectorProps
}) => {
  const thisYear = new Date().getUTCFullYear();

  const { day: incomingDay, month: incomingMonth, year: incomingYear } = (selectedDate ?? {});

  const include = dateIncludes ?? DateIncludes.dayMonthYear;

  const [day, setDay] = useState(include === DateIncludes.dayMonthYear ? incomingDay ?? 1 : undefined);
  const [month, setMonth] = useState(include >= DateIncludes.monthYear ? incomingMonth ?? 1 : undefined);
  const [year, setYear] = useState(incomingYear ?? thisYear);

  const start = startYear ?? 1970;
  const end = endYear ?? thisYear;

  const dayOptions = useMemo(() => getDayOptions(), []);
  const monthOptions = useMemo(() => getMonthOptions(), []);
  const yearOptions = useMemo(() => getYearOptions(year < start ? year : start, year > end ? year : end), []);

  const onConfirm = () => {
    const label = dateToLabel(year, month, day, toLocaleStringOptions);
    const date: DateObj = { year: year };
    if (day) date.day = day;
    if (month) date.month = month;
    onSelectDate?.({ label: label, data: date });
  };

  const daySelector = useMemo(() => {
    if (!day) return;
    const daysInMonth = getDaysInMonth(month!, year);
    let _day = day;
    if (day > daysInMonth) {
      _day = daysInMonth;
      setDay(daysInMonth);
    }
    return <EnhancedSelector
      selectionBoxWidth={`${55 + (showDropdownIcons ? 25 : 0)}px`}
      onChange={option => setDay(option.data)}
      focusDropdown={focusDropdowns ?? true}
      showDropdownIcon={showDropdownIcons}
      labelCenter={centerSelectorLabels ?? true}
      {...selectorProps}
      rgOptions={dayOptions.slice(0, daysInMonth)}
      selectedOption={_day}
    />;
  }, [month, year]);

  const monthSelector = useMemo(() => {
    if (!month) return;
    return <EnhancedSelector
      selectionBoxWidth={`${115 + (showDropdownIcons ? 25 : 0)}px`}
      onChange={option => setMonth(option.data)}
      focusDropdown={focusDropdowns ?? true}
      showDropdownIcon={showDropdownIcons}
      labelCenter={centerSelectorLabels ?? true}
      {...selectorProps}
      rgOptions={monthOptions}
      selectedOption={month}
    />;
  }, []);

  const yearSelector = useMemo(() => {
    return <EnhancedSelector
      selectionBoxWidth={`${74 + (showDropdownIcons ? 28 : 0)}px`}
      onChange={option => setYear(option.data)}
      focusDropdown={focusDropdowns ?? true}
      showDropdownIcon={showDropdownIcons}
      labelCenter={centerSelectorLabels ?? true}
      {...selectorProps}
      rgOptions={yearOptions}
      selectedOption={year}
    />;
  }, []);

  const titleStyle = { justifyContent: 'center' };
  const sectionStyle = day ? {} : { flex: '1' };
  const titleClass = joinClassNames(quickAccessMenuClasses.PanelSectionTitle, DatePickerModalClasses.title);

  return (
    <Fragment>
      <style>{`.${DatePickerModalClasses.topLevel} .DialogHeader { display: none !important; }
      ${showDropdownIcons && include === DateIncludes.dayMonthYear ? `.GenericConfirmDialog.${DatePickerModalClasses.topLevel} { width: 720px; }` : ''}
      `}</style>
      <ConfirmModal
        className={DatePickerModalClasses.topLevel}
        closeModal={closeModal}
        onOK={onConfirm}
      >
        <Focusable style={Object.assign({ display: 'flex' }, day ? { justifyContent: 'space-between' } : {})}>
          {month &&
            <div style={sectionStyle}>
              <div style={titleStyle} className={titleClass}>
                Month
              </div>
              {monthSelector}
            </div>}
          {day &&
            <div style={sectionStyle}>
              <div style={titleStyle} className={titleClass}>
                Day
              </div>
              {daySelector}
            </div>}
          <div style={sectionStyle}>
            <div style={titleStyle} className={titleClass}>
              Year
            </div>
            {yearSelector}
          </div>
        </Focusable>
      </ConfirmModal>
    </Fragment>
  );
};

/** A nice looking date picker modal that is configurable */
export const PrettyDatePickerModal: VFC<DatePickerModalProps> = ({
  onSelectDate,
  selectedDate,
  toLocaleStringOptions,
  focusDropdowns,
  showDropdownIcons,
  centerSelectorLabels,
  startYear,
  endYear,
  dateIncludes,
  closeModal,
  ...selectorProps
}) => {
  const thisYear = new Date().getUTCFullYear();

  const { day: incomingDay, month: incomingMonth, year: incomingYear } = (selectedDate ?? {});

  const include = dateIncludes ?? DateIncludes.dayMonthYear;

  const [day, setDay] = useState(include === DateIncludes.dayMonthYear ? incomingDay ?? 1 : undefined);
  const [month, setMonth] = useState(include >= DateIncludes.monthYear ? incomingMonth ?? 1 : undefined);
  const [year, setYear] = useState(incomingYear ?? thisYear);

  const start = startYear ?? 1970;
  const end = endYear ?? thisYear;

  const monthOptions = useMemo(() => getMonthOptions(), []);
  const yearOptions = useMemo(() => getYearOptions(year < start ? year : start, year > end ? year : end), []);

  const onConfirm = () => {
    const label = dateToLabel(year, month, day, toLocaleStringOptions);
    const date: DateObj = { year: year };
    if (day) date.day = day;
    if (month) date.month = month;
    onSelectDate?.({ label: label, data: date });
  };

  const monthSelector = useMemo(() => {
    return <EnhancedSelector
      selectionBoxWidth={`${115 + (showDropdownIcons ? 25 : 0)}px`}
      onChange={option => setMonth(option.data)}
      focusDropdown={focusDropdowns ?? true}
      showDropdownIcon={showDropdownIcons}
      labelCenter={centerSelectorLabels ?? true}
      {...selectorProps}
      rgOptions={monthOptions}
      selectedOption={month ?? 1}
      disabled={!month}
    />;
  }, []);

  const yearSelector = useMemo(() => {
    return <EnhancedSelector
      selectionBoxWidth={`${74 + (showDropdownIcons ? 28 : 0)}px`}
      onChange={option => setYear(option.data)}
      focusDropdown={focusDropdowns ?? true}
      showDropdownIcon={showDropdownIcons}
      labelCenter={centerSelectorLabels ?? true}
      {...selectorProps}
      rgOptions={yearOptions}
      selectedOption={year}
    />;
  }, []);

  const daysInMonth = useMemo(() => getDaysInMonth(month ?? 1, year), [month, year]);

  const titleStyle = { justifyContent: 'center' };
  const titleClass = joinClassNames(quickAccessMenuClasses.PanelSectionTitle, DatePickerModalClasses.title);

  const focusable = <Focusable style={{ display: 'flex', justifyContent: 'space-between', ...(showDropdownIcons ? { margin: '0 -8px' } : {}) }}>
    <div>
      <div style={titleStyle} className={titleClass}>
        Month
      </div>
      {monthSelector}
    </div>
    <div>
      <div style={titleStyle} className={titleClass}>
        Year
      </div>
      {yearSelector}
    </div>
  </Focusable>;

  const ancestorNode = useMemo(() => {
    const container: { navNode: any; } = { navNode: undefined };
    afterPatch(focusable.type, 'render', (_: any, ret: any) => {
      container.navNode = ret.props.value;
      return ret;
    }, { singleShot: true });
    return container;
  }, []);

  useEffect(() => {
    let timeout: number;
    const parentNavNode = ancestorNode.navNode?.m_rgChildren[0]?.m_rgChildren[0]?.m_rgChildren[0];
    if (!parentNavNode || !parentNavNode.m_rgChildren[0] || !parentNavNode.m_rgChildren[1]) {
      console.log('Date picker modal could not find focus nav nodes');
    } else {
      timeout = setTimeout(() => {
        parentNavNode.m_rgChildren[0].SetProperties({ navEntryPreferPosition: 2 });
        parentNavNode.m_rgChildren[1].SetProperties({ navEntryPreferPosition: 2 });
      }, 10);
    }
    return () => clearTimeout(timeout);
  }, [day, daysInMonth, month, year]);

  return (
    <Fragment>
      <style>{`.${DatePickerModalClasses.topLevel} .DialogHeader { display: none !important; }
        .${DatePickerModalClasses.topLevel}.${DatePickerModalClasses.pretty} { width: ${showDropdownIcons ? 505 : 470}px; }
        .${DatePickerModalClasses.topLevel}.${DatePickerModalClasses.pretty} .DialogFooter { padding-top: 0; }
        `}</style>
      <ConfirmModal
        className={joinClassNames(DatePickerModalClasses.topLevel, DatePickerModalClasses.pretty)}
        closeModal={closeModal}
        onOK={onConfirm}
      >
        {focusable}
        <CalendarPanel selectedDay={day} daysInMonth={daysInMonth} onChange={setDay} disabled={!day} />
      </ConfirmModal>
    </Fragment>
  );
};

interface CalendarPanelProps {
  selectedDay?: number;
  daysInMonth: number;
  disabled: boolean;
  onChange: (day: number) => void;
}
const CalendarPanel: VFC<CalendarPanelProps> = ({ selectedDay, daysInMonth, disabled, onChange }) => {
  const grid = useMemo(() => {
    const dayElts = [];
    for (let i = 0; i < daysInMonth; i++) {
      const day = i + 1;
      const selectedStyle = selectedDay === day ? { background: '#a8b4ee2e' } : {};
      dayElts.push(
        <CustomButton
          onClick={() => onChange(day)}
          style={{ minWidth: '40px', margin: 'auto', padding: '10px 0', fontSize: '13px', ...selectedStyle }}
          focusMode={CustomButtonFocusMode.ring}
          transparent={true}
          disabled={disabled}
          focusable={!disabled}
          audioSFX='deck_ui_switch_toggle_on.wav'
        >
          {day}
        </CustomButton>
      );
    }
    return (
      <Focusable style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: '40px 40px 40px 40px 40px 40px 40px', justifyContent: 'space-around' }}>
        {dayElts}
      </Focusable>
    );
  }, [daysInMonth, selectedDay]);

  return grid;
};

const locales = window.LocalizationManager.m_rgLocalesToUse;

function getDayOptions() {
  const dayOptions: SingleDropdownOption[] = [];
  for (let i = 1; i <= 31; i++) {
    dayOptions.push({ label: i, data: i });
  }
  return dayOptions;
}

function getMonthOptions() {
  const monthOptions: SingleDropdownOption[] = [];
  for (let i = 1; i <= 12; i++) {
    monthOptions.push({ label: new Date(2000, i - 1).toLocaleDateString(locales, { month: 'long' }), data: i });
  }
  return monthOptions;
}

function getYearOptions(beginning: number, end: number) {
  const yearOptions = [];
  for (let i = beginning; i <= end; i++) {
    yearOptions.push({ label: i, data: i });
  }
  return yearOptions;
}

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

export function dateToLabel(year: number, month?: number, day?: number, formatOptions?: Intl.DateTimeFormatOptions) {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };

  let _options: Intl.DateTimeFormatOptions;

  if (formatOptions?.dateStyle) {
    switch (formatOptions?.dateStyle) {
      case 'full':
        _options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          weekday: 'long'
        };
        break;

      case 'long':
        _options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        };
        break;

      case 'medium':
        _options = {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        };
        break;

      case 'short':
        _options = {
          year: '2-digit',
          month: 'numeric',
          day: 'numeric'
        };
        break;

      default:
        _options = defaultOptions;
    }
  } else {
    _options = formatOptions ?? defaultOptions;
  }

  if (month === undefined) {
    delete _options.month;
  }
  if (day === undefined) {
    delete _options.day;
    delete _options.weekday;
  }

  const date = new Date(year, (month ?? 1) - 1, day ?? 1).toLocaleDateString(locales, _options);
  return date;
}

function isValidDate(day?: number, month?: number, year?: number) {
  if ((year === undefined) ||
    (day !== undefined && month === undefined) ||
    (month !== undefined && (month < 1 || month > 12)) ||
    (day !== undefined && (day < 1 || day > getDaysInMonth(month!, year)))) {
    return false;
  }
  return true;
}

