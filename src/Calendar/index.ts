import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import {
  alipayComponent,
  useEffect,
  useEvent,
  useState,
} from 'functional-mini/component';
import { ComponentProps, defaultLocaleText, ValueType } from './props';
import {
  defaultMonthRange,
  getMonthListFromRange,
  getSelectionModeFromValue,
  renderCells,
} from './utils';

dayjs.extend(isoWeek);

const windowWidth = my.getSystemInfoSync().windowWidth;

const Calendar = (props: ComponentProps) => {
  const localeText = Object.assign({}, defaultLocaleText, props.localeText);

  const markItems = [...localeText.weekdayNames];
  const weekStartsOn = props.weekStartsOn;
  if (weekStartsOn === 'Sunday') {
    const item = markItems.pop();
    if (item) markItems.unshift(item);
  }

  const [value, setValue] = useState<[number, number]>(
    props.value ?? props.defaultValue ?? null
  );

  const selectionModeFromValue = getSelectionModeFromValue(value);
  const selectionMode =
    props.selectionMode ?? selectionModeFromValue ?? 'range';

  if (
    !!selectionModeFromValue &&
    !!props.selectionMode &&
    selectionModeFromValue !== props.selectionMode
  ) {
    console.log('selectionMode is not match with value');
  }
  function updateValue(newValue: ValueType) {
    const isControl = typeof props.value !== 'undefined';
    if (props.onChange) {
      props.onChange(newValue);
    }
    if (!isControl) {
      setValue(newValue);
    }
  }

  useEffect(() => {
    setValue(value);
  }, [value]);

  useEvent(
    'clickCell',
    (e) => {
      const clickDate = dayjs(e.target.dataset.time.time);
      if (e.target.dataset.time.disabled) {
        return;
      }
      if (selectionMode === 'range') {
        if (Array.isArray(value)) {
          if (value.length === 1) {
            const current = value[0];
            if (dayjs(clickDate.toDate().getTime()).isBefore(dayjs(current))) {
              updateValue([clickDate.toDate().getTime()]);
            } else {
              updateValue([value[0], clickDate.toDate().getTime()]);
            }
          } else {
            updateValue([clickDate.toDate().getTime()]);
          }
        } else {
          updateValue([clickDate.toDate().getTime()]);
        }
      } else if (selectionMode === 'single') {
        updateValue(clickDate.toDate().getTime());
      }
    },
    [selectionMode, value]
  );

  const monthList = getMonthListFromRange(
    dayjs(props.monthrange[0]),
    dayjs(props.monthrange[1])
  ).map((p) => {
    return {
      title: p.format(localeText.title),
      cells: renderCells(p, weekStartsOn, value, localeText),
    };
  });

  const [headerState, setHeaderState] = useState(0);

  useEvent(
    'setCurrentMonth',
    (e) => {
      setHeaderState(e);
    },
    [monthList]
  );

  return {
    windowWidth,
    markItems,
    monthList,
    headerState,
  };
};

Component(
  alipayComponent(Calendar, {
    monthrange: defaultMonthRange(),
    weekStartsOn: 'Sunday',
    localeText: defaultLocaleText,
  })
);
