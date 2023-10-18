import { Dayjs } from 'dayjs';

export function isoWeekday(da: Dayjs) {
  return da.day() || 7;
}
