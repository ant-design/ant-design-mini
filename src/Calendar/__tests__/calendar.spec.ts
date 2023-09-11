import dayjs from 'dayjs';
import { describe, expect, it, vi } from 'vitest';
import { CellState } from '../props';
import { findDate, getSelectedDay, initCalendar, sleep } from './testUtils';
import { TestInstance } from '/tests/utils';

describe('Calendar', () => {
  it('测试默认值', () => {
    const instance = initCalendar({});
    const initData = instance.getData();

    const { monthList, markItems } = initData;

    // 默认显示 6 个月
    expect(monthList.length).toEqual(6);
    // 默认从周日开启
    expect(markItems).toEqual(['日', '一', '二', '三', '四', '五', '六']);
    const today = findDate(monthList[0].cells, dayjs());
    // 默认显示今天
    expect(today.top?.label).toEqual('今日');
    // 默认不选择
    expect(today.isSelected).toEqual(false);
  });

  it('onFormatter 只允许修改三个字段', () => {
    const instance = initCalendar({
      weekStartsOn: 'Monday',
      monthRange: [
        new Date('2023-01-01').getTime(),
        new Date('2023-02-01').getTime(),
      ],
      onFormatter() {
        return {
          disabled: true,
          top: {
            label: 'top',
            className: 'top',
          },
          bottom: {
            label: 'bottom',
            className: 'bottom',
          },
          time: 0,
          isSelected: true,
          isSelectedBegin: true,
          isSelectedEnd: true,
          inThisMonth: true,
        };
      },
    });

    const first = instance.getData().monthList[0].cells[0];
    // 数据不可改变
    expect(
      JSON.stringify({ ...first, time: null }, null, 2)
    ).toMatchInlineSnapshot(
      `
      "{
        \\"disabled\\": true,
        \\"time\\": null,
        \\"date\\": 26,
        \\"isSelected\\": false,
        \\"isSelectedBegin\\": false,
        \\"top\\": {
          \\"label\\": \\"top\\",
          \\"className\\": \\"top\\"
        },
        \\"isSelectedEnd\\": false,
        \\"inThisMonth\\": false,
        \\"isRowBegin\\": true,
        \\"isRowEnd\\": false,
        \\"bottom\\": {
          \\"label\\": \\"bottom\\",
          \\"className\\": \\"bottom\\"
        }
      }"
    `
    );
  });

  it('测试 value 修改', async () => {
    const instance = initCalendar({
      weekStartsOn: 'Monday',
      value: new Date('2023-01-01').getTime(),
      monthRange: [
        new Date('2023-01-01').getTime(),
        new Date('2023-02-01').getTime(),
      ],
    });
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-01']);

    instance.setProps({
      value: new Date('2023-01-02').getTime(),
    });
    await sleep(100);
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-02']);
  });

  it('测试 weekStartsOn', () => {
    const instance = initCalendar({
      weekStartsOn: 'Monday',
      monthRange: [
        new Date('2023-01-01').getTime(),
        new Date('2023-02-01').getTime(),
      ],
    });

    const initData = instance.getData();
    const { monthList, markItems } = initData;
    expect(monthList.length).toEqual(2);
    // 默认从周日开启
    expect(markItems).toEqual(['一', '二', '三', '四', '五', '六', '日']);
    const firstWeek = monthList[0].cells.slice(0, 7).map((cell: CellState) => {
      return dayjs(cell.time).format('YYYY-MM-DD');
    });
    expect(firstWeek).toEqual([
      '2022-12-26',
      '2022-12-27',
      '2022-12-28',
      '2022-12-29',
      '2022-12-30',
      '2022-12-31',
      '2023-01-01',
    ]);
  });

  function extendInstance(instance: TestInstance) {
    return {
      clickCell(date: string) {
        instance.callMethod('clickCell', {
          target: {
            dataset: {
              time: {
                time: dayjs(date).toDate().getTime(),
              },
            },
          },
        });
      },
    };
  }

  it('测试点击', async () => {
    const instance = initCalendar({
      weekStartsOn: 'Monday',
      monthRange: [
        new Date('2023-01-01').getTime(),
        new Date('2023-02-01').getTime(),
      ],
    });
    const extendFunctions = extendInstance(instance);

    extendFunctions.clickCell('2023-01-04');
    await sleep(100);
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-04']);

    // 如果选择的日期早于当前日期， 则切换 start
    extendFunctions.clickCell('2023-01-02');
    await sleep(100);
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-02']);

    extendFunctions.clickCell('2023-01-06');
    await sleep(100);
    expect(getSelectedDay(instance.getData())).toEqual([
      '2023-01-02',
      '2023-01-03',
      '2023-01-04',
      '2023-01-05',
      '2023-01-06',
    ]);
  });

  function lastClickDate(args: [number | [number, number]] | undefined) {
    if (!args) {
      return;
    }
    const first = args[0];
    if (Array.isArray(first)) {
      return first.map((o) => dayjs(o).format('YYYY-MM-DD'));
    }

    return dayjs(first).format('YYYY-MM-DD');
  }

  it('测试点击', async () => {
    const mockFn = vi.fn();
    const getLastChange = () => lastClickDate(mockFn.mock.lastCall);
    const instance = initCalendar({
      weekStartsOn: 'Monday',
      monthRange: [
        new Date('2023-01-01').getTime(),
        new Date('2023-02-01').getTime(),
      ],
      onChange: mockFn,
    });
    const extendFunctions = extendInstance(instance);
    extendFunctions.clickCell('2023-01-04');

    await sleep(100);
    expect(getLastChange()).toEqual(['2023-01-04']);
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-04']);

    // 如果选择的日期早于当前日期， 则切换 start
    extendFunctions.clickCell('2023-01-02');
    await sleep(100);
    expect(getLastChange()).toEqual(['2023-01-02']);
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-02']);

    extendFunctions.clickCell('2023-01-06');
    await sleep(100);
    expect(getLastChange()).toEqual(['2023-01-02', '2023-01-06']);
    expect(getSelectedDay(instance.getData())).toEqual([
      '2023-01-02',
      '2023-01-03',
      '2023-01-04',
      '2023-01-05',
      '2023-01-06',
    ]);
    instance.setProps({
      selectionMode: 'single',
    });
    await sleep(100);
    extendFunctions.clickCell('2023-01-06');
    await sleep(50);
    expect(getLastChange()).toEqual('2023-01-06');
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-06']);
    extendFunctions.clickCell('2023-01-02');
    await sleep(50);
    expect(getLastChange()).toEqual('2023-01-02');
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-02']);
    instance.setProps({
      onFormatter: (cell) => {
        if (dayjs(cell.time).format('YYYY-MM-DD') === '2023-01-10') {
          return {
            disabled: true,
          };
        }
      },
    });
    await sleep(50);
    extendFunctions.clickCell('2023-01-02');
    await sleep(50);
    expect(getSelectedDay(instance.getData())).toEqual(['2023-01-02']);
  });
});
