import dayjs, { Dayjs } from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { alipayComponent, useEvent, useState } from 'functional-mini/component';
import { getMonthListFromRange } from './utils';

dayjs.extend(isoWeek);

const defaultMarkItems = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

interface CellState {
  topLabel?: string
  time: number;
  date: number;
  isSelect: boolean;
  isBegin: boolean;
  isEnd: boolean;
  isSelectRowBegin: boolean;
  isSelectRowEnd: boolean;
  inThisMonth: boolean;
}

interface ComponentProps {
  defaultValue?: number | [number, number],
  value?: number | [number, number]
  selectionMode?: 'single' | 'range'
  monthRange: [number, number];
  onChange?: (date: number | [number, number]) => void
}


const Calendar = (props: ComponentProps) => {
  const markItems = [...defaultMarkItems];
  const weekStartsOn = 'Sunday' as 'Sunday' | 'Monday';
  if (weekStartsOn === 'Sunday') {
    const item = markItems.pop();
    if (item) markItems.unshift(item);
  }

  const [value, setValue] = useState<[number, number]>(props.defaultValue)

  const selectionMode = props.selectionMode ?? 'range';

  useEvent('clickCell', e => {
    const clickDate = dayjs(e.target.dataset.time.time)
    if (selectionMode === 'range') {
      if (value.length === 2) {
        setValue([clickDate.toDate().getTime()])
      } else if (value.length === 1) {
        setValue([value[0], clickDate.toDate().getTime()])
      }
    }







  }, [selectionMode, value])

  function renderCells(cellsMonth: Dayjs) {
    const cells: CellState[] = [];
    let iterator: Dayjs = cellsMonth.subtract(
      cellsMonth.isoWeekday() % 7,
      'day'
    );

    if (weekStartsOn === 'Monday') {
      iterator = iterator.add(1, 'day');
    }

    const diffDay = cellsMonth.date(1).add(1, 'month').diff(iterator, 'day');
    const lintCount = diffDay > 35 ? 6 : 5;


    const selectBegin = dayjs(value[0]);
    const selectEnd = dayjs(value[1] ?? value[0]);

    while (cells.length < lintCount * 7) {
      const d = iterator;
      const isSelect = !!selectBegin.isBefore(iterator, 'day') && !!selectEnd.isAfter(iterator, 'day')
      const isBegin = selectBegin.isSame(iterator, 'day');
      const isEnd = selectEnd.isSame(iterator, 'day');
      const isSelectRowBegin = false;
      const isSelectRowEnd = false;
      const inThisMonth = d.month() === cellsMonth.month();

      const time = d.toDate().getTime();

      let topLabel;

      console.log(isBegin,isEnd)
      if (isBegin) {
        if (isEnd && selectionMode === 'range' && value.length === 2) {
          topLabel = '开始/结束'
          console.log('11111',topLabel)
        } else {
          topLabel = '开始'
        }
      } else {
        if (isEnd) {
          topLabel = '结束'
        }
      }


      cells.push({
        time,
        date: d.get('date'),
        isSelect,
        isBegin,
        topLabel,
        isEnd,
        isSelectRowBegin,
        isSelectRowEnd,
        inThisMonth,
      });
      iterator = iterator.add(1, 'day');
    }
    return cells;
  }

  return {
    markItems,
    monthList: getMonthListFromRange(
      dayjs(props.monthRange[0]),
      dayjs(props.monthRange[1])
    ).map((p) => {
      return {
        title: `${p.year()}年${p.month() + 1}月`,
        cells: renderCells(p),
      };
    }),
  };
};

Component(
  alipayComponent(Calendar, {
    monthRange: [
      new Date('2023-01-01').getTime(),
      new Date('2023-07-01').getTime(),
    ],
    defaultValue: [
      new Date('2023-01-01').getTime(),
      new Date('2023-01-20').getTime(),
    ],
  })
);
