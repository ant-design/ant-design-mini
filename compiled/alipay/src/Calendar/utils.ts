import dayjs, { Dayjs } from 'dayjs';
import { isoWeekday } from '../_util/dayjs/iso-weekday';
import { CellState, LocaleText, SelectionMode, CalendarValue } from './props';

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
  const end = dayjs().startOf('date').add(2, 'month');
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
    .subtract(isoWeekday(startOfMonth) % 7, 'day')
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
        isSelected: false,
        isSelectedBegin: false,
        top,
        isSelectedEnd: false,
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

    const isSelectedBegin = selectBegin.isSame(d, 'day');
    const isSelectedEnd = selectEnd.isSame(d, 'day');
    const isSelected =
      (!!selectBegin.isBefore(d, 'day') && !!selectEnd.isAfter(d, 'day')) ||
      isSelectedBegin ||
      isSelectedEnd;
    const inThisMonth = d.month() === cellsMonth.month();
    const time = d.toDate().getTime();
    let topLabel = isToday ? localeText.today : '';
    if (Array.isArray(value)) {
      if (isSelectedBegin) {
        if (isSelectedEnd && value.length === 2) {
          topLabel = localeText.startAndEnd;
        } else {
          topLabel = localeText.start;
        }
      } else {
        if (isSelectedEnd) {
          topLabel = localeText.end;
        }
      }
    }

    return {
      disabled: false,
      time,
      date: d.get('date'),
      isSelected,
      isSelectedBegin,
      top: { label: topLabel },
      isSelectedEnd,
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

// 获取滚动视图的元素id
export function getScrollIntoViewId(value: CalendarValue) {
  // 已选中时间滚动到可视区域内（微信不支持id为数字开头）
  return `id_${
    value &&
    dayjs(Array.isArray(value) ? value[0] : value)
      .startOf('d')
      .subtract(7, 'd') // 需要定位的地方往前推7天，让已选中时间定位到中间位置
      .toDate()
      .getTime()
  }`;
}
