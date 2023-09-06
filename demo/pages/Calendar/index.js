import { useEvent, alipayPage, useState } from 'functional-mini/page';
import dayjs from 'dayjs';

const useDemo3 = () => {
  const [month, setMonth] = useState(new Date().getTime());

  useEvent(
    'demo3NextMonth',
    () => {
      setMonth((v) => dayjs(v).add(1, 'month').toDate().getTime());
    },
    []
  );

  useEvent(
    'demo3PreviousMonth',
    () => {
      setMonth((v) => dayjs(v).add(-1, 'month').toDate().getTime());
    },
    []
  );

  return {
    title: dayjs(month).format('YYYY年MM月'),
    monthRange: [month, month],
  };
};

const useDemo4 = () => {
  const [month] = useState(new Date().getTime());

  useEvent(
    'demoFormatter',
    (cell, value) => {
      if (Array.isArray(value) && value.length == 1) {
        const current = value[0];
        return {
          disabled: dayjs(cell.time).diff(dayjs(current), 'days') > 3,
        };
      }
      return {};
    },
    []
  );

  return {
    title: dayjs(month).format('YYYY年MM月'),
    monthRange: [month, month],
  };
};

const useDemo6 = () => {
  const [month] = useState(new Date().getTime());
  return {
    title: dayjs(month).format('YYYY年MM月'),
    monthRange: [month, month],
  };
};

const CalendarDemo = () => {
  const demo3 = useDemo3();
  const demo4 = useDemo4();
  const demo6 = useDemo6();

  return {
    demo4,
    demo6,
    demo3,
  };
};

Page(alipayPage(CalendarDemo));
