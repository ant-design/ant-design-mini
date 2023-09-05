import dayjs, { Dayjs } from 'dayjs';

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

type SelectRange = Dayjs | [Dayjs, Dayjs];

interface Options {
  weekStartsOn: 'Monday' | 'Sunday';
  range: SelectRange;
  month: Dayjs;
}

export interface CellState {
  topLabel?: string;
  time: number;
  date: number;
  isSelect: boolean;
  isBegin: boolean;
  isEnd: boolean;
  isSelectRowBegin: boolean;
  isSelectRowEnd: boolean;
  inThisMonth: boolean;
}

export function defaultMonthRange(): [number, number] {
  const start = dayjs().startOf('date');
  const end = dayjs().startOf('date').add(5, 'month');
  return [start.toDate().getTime(), end.toDate().getTime()];
}

export function calculateMonthCell(range: Dayjs[]) {
  return 1;
}

// 固定高度
// 自适应
