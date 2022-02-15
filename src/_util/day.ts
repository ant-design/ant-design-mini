import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export function isBetweenDate(currentDate: string, startDate: string, endDate: string): boolean {
  return dayjs(currentDate).isBetween(startDate, endDate);
}

export function isSameDate(currentDate: string, targetDate: string): boolean {
  return dayjs(currentDate).isSame(targetDate);
}
