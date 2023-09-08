import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { CellState, LocaleText, SelectionMode, CalendarValue } from './props';

dayjs.extend(isoWeek);

export function getMonthListFromRange(start: Dayjs, end: Dayjs): Dayjs[] {
  if (start.isAfter(end))
    throw new Error(`Start time can't be later than end time.`);
  const result = [];
  let current = start.date(1);
  while (!current.isAfter(end)) {
    result.push(current.date(1));
    current = current.add(1, 'month');
  }
  return result;
}

export function defaultMonthRange(): [number, number] {
  const start = dayjs().startOf('date');
  const end = dayjs().startOf('date').add(5, 'month');
  return [start.toDate().getTime(), end.toDate().getTime()];
}

/**
 *
 * @param month 月份的某一天
 * @param weekStartsOn 日历以星期几开始
 * @returns 获取当月日历所有的日子
 */
export function getDate(month: Dayjs, weekStartsOn: string): Dayjs[] {
  const startOfMonth = month.date(1);
  const cells: Dayjs[] = [];
  let iterator: Dayjs = startOfMonth
    .subtract(startOfMonth.isoWeekday() % 7, 'day')
    .startOf('day');

  if (weekStartsOn === 'Monday') {
    iterator = iterator.add(1, 'day');
    if (
      iterator.isSame(startOfMonth, 'month') &&
      !iterator.isSame(startOfMonth.startOf('date'), 'date')
    ) {
      iterator = iterator.add(-7, 'days');
    }
  }
  const diffDay = startOfMonth.date(1).add(1, 'month').diff(iterator, 'day');
  const lintCount = Math.ceil(diffDay / 7);
  while (cells.length < lintCount * 7) {
    cells.push(iterator);
    iterator = iterator.add(1, 'day');
  }
  return cells;
}

export function renderCells(
  cellsMonth: Dayjs,
  weekStartsOn: string,
  value: CalendarValue,
  localeText: LocaleText
): CellState[] {
  let rowBeginDay = 0;
  let rowEndDay = 6;
  if (weekStartsOn === 'Monday') {
    rowBeginDay = 1;
    rowEndDay = 0;
  }
  const dates = getDate(cellsMonth, weekStartsOn);
  if (!value) {
    return dates.map((d): CellState => {
      const isToday = dayjs().isSame(d, 'day');
      const isRowBegin =
        d.isSame(cellsMonth.startOf('month'), 'date') ||
        d.day() === rowBeginDay;
      const isRowEnd =
        d.isSame(cellsMonth.endOf('month'), 'date') || d.day() === rowEndDay;

      let top: CellState['top'];
      if (isToday) {
        top = {
          label: localeText.today,
        };
      }

      return {
        disabled: false,
        time: d.toDate().getTime(),
        date: d.get('date'),
        isSelect: false,
        isBegin: false,
        top,
        isEnd: false,
        inThisMonth: d.month() === cellsMonth.month(),
        isRowBegin,
        isRowEnd,
      };
    });
  }

  let selectBegin: Dayjs;
  let selectEnd: Dayjs;

  if (Array.isArray(value)) {
    selectBegin = dayjs(value[0]);
    selectEnd = dayjs(value[1] ?? value[0]);
  } else {
    selectBegin = dayjs(value);
    selectEnd = dayjs(value);
  }

  return dates.map((d): CellState => {
    const isToday = dayjs().isSame(d, 'day');
    const isRowBegin =
      d.isSame(cellsMonth.startOf('month'), 'date') || d.day() === rowBeginDay;
    const isRowEnd =
      d.isSame(cellsMonth.endOf('month'), 'date') || d.day() === rowEndDay;

    const isBegin = selectBegin.isSame(d, 'day');
    const isEnd = selectEnd.isSame(d, 'day');
    const isSelect =
      (!!selectBegin.isBefore(d, 'day') && !!selectEnd.isAfter(d, 'day')) ||
      isBegin ||
      isEnd;
    const inThisMonth = d.month() === cellsMonth.month();
    const time = d.toDate().getTime();
    let topLabel = isToday ? localeText.today : '';
    if (Array.isArray(value)) {
      if (isBegin) {
        if (isEnd && value.length === 2) {
          topLabel = localeText.startAndEnd;
        } else {
          topLabel = localeText.start;
        }
      } else {
        if (isEnd) {
          topLabel = localeText.end;
        }
      }
    }

    return {
      disabled: false,
      time,
      date: d.get('date'),
      isSelect,
      isBegin,
      top: { label: topLabel },
      isEnd,
      inThisMonth,
      isRowBegin,
      isRowEnd,
    };
  });
}

export function getSelectionModeFromValue(
  value?: CalendarValue
): SelectionMode {
  if (Array.isArray(value)) {
    return 'range';
  }
  if (typeof value === 'number') {
    return 'single';
  }
  return null;
}
