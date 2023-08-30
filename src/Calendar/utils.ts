import { Dayjs } from 'dayjs';

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



