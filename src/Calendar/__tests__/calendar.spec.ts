import { getInstance } from '../../../tests/utils';
import { describe, expect, it } from 'vitest';
import dayjs, { Dayjs } from 'dayjs';
import { CellState } from '../utils';

function findDate(monthCells: CellState[], date: Dayjs) {
  return monthCells.find((cell: CellState) => {
    return date.isSame(dayjs(cell.time), 'date');
  });
}

describe('Calendar', () => {
  it('测试默认值', () => {
    const instance = getInstance(
      'Calendar',
      {},
      {
        getSystemInfoSync: () => {
          return {
            windowWidth: 750,
          };
        },
        canIUse: () => {
          return true;
        },
      }
    );

    const initData = instance.getData();

    const { windowWidth, monthList, markItems } = initData;

    expect({ windowWidth }).toEqual({ windowWidth: 750 });
    // 默认显示 6 个月
    expect(monthList.length).toEqual(6);
    // 默认从周日开启
    expect(markItems).toEqual(['日', '一', '二', '三', '四', '五', '六']);
    const today = findDate(monthList[0].cells, dayjs());
    // 默认显示今天
    expect(today.topLabel).toEqual('今日');
    // 默认不选择
    expect(today.isSelect).toEqual(false);
  });

  it('测试默认值', () => {
    const instance = getInstance(
      'Calendar',
      {},
      {
        getSystemInfoSync: () => {
          return {
            windowWidth: 750,
          };
        },
        canIUse: () => {
          return true;
        },
      }
    );

    const initData = instance.getData();

    const { windowWidth, monthList, markItems } = initData;

    expect({ windowWidth }).toEqual({ windowWidth: 750 });
    // 默认显示 6 个月
    expect(monthList.length).toEqual(6);
    // 默认从周日开启
    expect(markItems).toEqual(['日', '一', '二', '三', '四', '五', '六']);
    const today = findDate(monthList[0].cells, dayjs());
    // 默认显示今天
    expect(today.topLabel).toEqual('今日');
    // 默认不选择
    expect(today.isSelect).toEqual(false);
  });
});
