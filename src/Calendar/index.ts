import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { alipayComponent, useEffect, useEvent, useState } from 'functional-mini/component';
import { LocaleText, defaultLocaleText } from './props';
import { defaultMonthRange, getMonthListFromRange } from './utils';

dayjs.extend(isoWeek);

const windowWidth = my.getSystemInfoSync().windowWidth;

interface CellState {
  disabled: boolean
  topLabel?: string;
  bottom?: { label: string }

  time: number;
  date: number;
  isSelect: boolean;
  isBegin: boolean;
  isEnd: boolean;
  isSelectRowBegin: boolean;
  isSelectRowEnd: boolean;
  inThisMonth: boolean;
}

type ValueType = number | number[]
type SelectionMode = 'single' | 'range';

interface ComponentProps {
  defaultValue?: ValueType;
  value?: ValueType;
  selectionMode?: SelectionMode;
  monthrange: [number, number];
  weekStartsOn?: 'Sunday' | 'Monday';
  onChange?: (date: ValueType) => void;
  localeText?: Partial<LocaleText>
  onFilterDate?: (date: number, value: ValueType) => boolean
}

function getSelectionModeFromValue(value?: ValueType): SelectionMode {
  if (Array.isArray(value)) {
    return 'range';
  }
  if (typeof value === 'number') {
    return 'single';
  }
  return null;
}

const Calendar = (props: ComponentProps) => {
  const localeText = Object.assign({}, defaultLocaleText, props.localeText)


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
  const selectionMode = props.selectionMode ?? selectionModeFromValue ?? 'range';

  if (
    !!selectionModeFromValue && !!props.selectionMode &&
    selectionModeFromValue !== props.selectionMode
  ) {
    console.log('selectionMode is not match with value')
  }


  function updateValue(newValue: ValueType) {
    const isControl = typeof props.value !== 'undefined'
    if (props.onChange) {
      props.onChange(newValue)
    }
    if (!isControl) {
      setValue(newValue)
    }
  }

  useEffect(() => {
    setValue(value)
  }, [value])

  useEvent(
    'clickCell',
    (e) => {
      const clickDate = dayjs(e.target.dataset.time.time);
      if (e.target.dataset.time.disabled) {
        return
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

  function renderCells(cellsMonth: Dayjs) {
    const cells: CellState[] = [];
    let iterator: Dayjs = cellsMonth
      .subtract(cellsMonth.isoWeekday() % 7, 'day')
      .startOf('day');

    if (weekStartsOn === 'Monday') {
      iterator = iterator.add(1, 'day');
    }
    const diffDay = cellsMonth.date(1).add(1, 'month').diff(iterator, 'day');
    const lintCount = diffDay > 35 ? 6 : 5;
    if (!value) {
      while (cells.length < lintCount * 7) {
        const d = iterator;
        let disabled = false;
        const time = d.toDate().getTime();

        if (props.onFilterDate && typeof props.onFilterDate === 'function') {
          disabled = props.onFilterDate(time, value)
        }
        const inThisMonth = d.month() === cellsMonth.month();
        const isToday = dayjs().isSame(d, 'day');
        cells.push({
          disabled,
          time: d.toDate().getTime(),
          date: d.get('date'),
          isSelect: false,
          isBegin: false,
          topLabel: isToday ? localeText.today : '',
          isEnd: false,
          isSelectRowBegin: false,
          isSelectRowEnd: false,
          inThisMonth,
        });
        iterator = iterator.add(1, 'day');
      }
      return cells;
    }

    let selectBegin: Dayjs
    let selectEnd: Dayjs


    if (Array.isArray(value)) {
      selectBegin = dayjs(value[0]);
      selectEnd = dayjs(value[1] ?? value[0]);
    } else {
      selectBegin = dayjs(value);
      selectEnd = dayjs(value);
    }



    while (cells.length < lintCount * 7) {
      const d = iterator;
      const isToday = dayjs().isSame(d, 'day');
      const isSelect =
        !!selectBegin.isBefore(iterator, 'day') &&
        !!selectEnd.isAfter(iterator, 'day');




      const isBegin = selectBegin.isSame(iterator, 'day');
      const isEnd = selectEnd.isSame(iterator, 'day');
      const isSelectRowBegin = false;
      const isSelectRowEnd = false;



      const inThisMonth = d.month() === cellsMonth.month();
      const time = d.toDate().getTime();
      let topLabel = isToday ? localeText.today : '';

      let disabled = false;
      if (props.onFilterDate && typeof props.onFilterDate === 'function') {
        disabled = props.onFilterDate(time, value)
      }

      if (selectionModeFromValue === 'range') {
        if (isBegin) {
          if (isEnd && value.length === 2) {
            topLabel = localeText.startAndEnd
          } else {
            topLabel = localeText.start
          }
        } else {
          if (isEnd) {
            topLabel = localeText.end
          }
        }
      }
      cells.push({
        disabled,
        time,
        date: d.get('date'),
        isSelect,
        isBegin,
        topLabel,
        isEnd,
        isSelectRowBegin,
        isSelectRowEnd,
        inThisMonth,
      });
      iterator = iterator.add(1, 'day');
    }
    return cells;
  }

  const monthList = getMonthListFromRange(
    dayjs(props.monthrange[0]),
    dayjs(props.monthrange[1])
  ).map((p) => {
    return {
      title: p.format(localeText.title),
      cells: renderCells(p),
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
    localeText: defaultLocaleText
  })
);
