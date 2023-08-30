import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';
import { getMonthListFromRange } from '../utils';

describe('Calendar utils', () => {
  it('test dayjsToCalendarDate', () => {
    expect(
      getMonthListFromRange(dayjs('2023-10-01'), dayjs('2023-11-01')).map((o) =>
        o.format('YYYY-MM-DD')
      )
    ).toEqual(['2023-10-01', '2023-11-01']);

    expect(
      getMonthListFromRange(dayjs('2023-10-01'), dayjs('2023-10-01')).map((o) =>
        o.format('YYYY-MM-DD')
      )
    ).toEqual(['2023-10-01']);

    expect(() =>
      getMonthListFromRange(dayjs('2023-11-01'), dayjs('2023-10-01')).map((o) =>
        o.format('YYYY-MM-DD')
      )
    ).toThrowError(`Start time can't be later than end time.`);
  });
});
