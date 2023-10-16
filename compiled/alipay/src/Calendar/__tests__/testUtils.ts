import dayjs, { Dayjs } from 'dayjs';
import { CellState, ComponentProps } from '../props';
import { getInstance } from '../../../../../tests/utils';

export function getSelectedDay(data: { monthList: { cells: CellState[] }[] }) {
  const result: string[] = [];
  data.monthList
    .map((o) => o.cells)
    .forEach((cellList) => {
      cellList.forEach((cell) => {
        if (cell.isSelected) {
          result.push(dayjs(cell.time).format('YYYY-MM-DD'));
        }
      });
    });

  return result;
}

export function sleep(time) {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, time);
  });
}

export function findDate(monthCells: CellState[], date: Dayjs) {
  return monthCells.find((cell: CellState) => {
    return date.isSame(dayjs(cell.time), 'date');
  });
}

export class SelectorQuery {
  select() {
    return this;
  }
  boundingClientRect() {
    return this;
  }
  exec(callback: (ret) => void) {
    callback([
      {
        top: 0,
        bottom: 0,
        height: 0,
      },
    ]);
  }
}

export function initCalendar(props: Partial<ComponentProps>) {
  return getInstance('Calendar', props, {
    createSelectorQuery: () => {
      return new SelectorQuery();
    },
    canIUse: () => {
      return true;
    },
  });
}
