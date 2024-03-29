import dayjs, { Dayjs } from 'dayjs';
import { describe, expect, it } from 'vitest';
import {
  getDate,
  getMonthListFromRange,
  getScrollIntoViewId,
} from 'compiled-alipay/Calendar/utils';

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

it('测试 checkDates 生成的日期是否正确', () => {
  let flag = dayjs('2000-01-01');
  for (let i = 0; i < 12 * 100; i++) {
    expect(checkDates(flag, 'Monday')).toBeTruthy();
    expect(checkDates(flag, 'Sunday')).toBeTruthy();
    flag = flag.add(1, 'month');
  }
});

it('测试 getScrollIntoViewId 获取滚动视图的元素id是否正确', () => {
  let flag = dayjs('2024-03-29 13:40:23').toDate().getTime();
  for (let i = 0; i < 12 * 100; i++) {
    expect(getScrollIntoViewId(flag)).toEqual(
      `id_${dayjs('2024-03-22').toDate().getTime()}`
    );
  }
});

function checkDates(month: Dayjs, start: 'Monday' | 'Sunday') {
  const dates = getDate(month, start);
  if (dates.length % 7 !== 0) {
    return false;
  }
  // 每周第一天必须为对应日期
  if (start === 'Monday' && dates[0].day() === 0) {
    return false;
  }
  if (start === 'Sunday' && dates[0].day() === 6) {
    return false;
  }
  //第一周必须包含当月第一天
  if (
    !dates.slice(0, 7).some((o) => o.isSame(month.startOf('month'), 'date'))
  ) {
    return false;
  }
  //最后一周必须包含当月最后一天
  if (!dates.slice(-7).some((o) => o.isSame(month.endOf('month'), 'date'))) {
    return false;
  }
  return true;
}
