import dayjs from 'dayjs';
import { alipayPage, useMemo, useEvent, useState } from 'functional-mini/page';

const useDemoVisible = (props, index) => {
  const visible = useMemo(() => {
    let demos;
    if (props.query) {
      demos = props.query.demos;
    }
    if (typeof demos === 'string' || typeof demos === 'number') {
      demos = [demos];
    }
    if (Array.isArray(demos)) {
      return demos.map((o) => parseInt(o, 10)).includes(index);
    }
    return true;
  }, []);

  return visible;
};

const useBasicDemo = (props, index) => {
  const visible = useDemoVisible(props, index);
  return {
    visible,
  };
};

const useDemo3 = (props) => {
  const visible = useDemoVisible(props, 3);
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
    visible,
    title: dayjs(month).format('YYYY年MM月'),
    monthRange: [month, month],
  };
};

const useDemo4 = (props) => {
  const visible = useDemoVisible(props, 4);
  const [month] = useState(new Date().getTime());
  useEvent(
    'demoFormatter',
    (cell, value) => {
      if (Array.isArray(value) && value.length == 1) {
        const current = value[0];
        return {
          disabled: dayjs(cell.time).diff(dayjs(current), 'days') > 3,
          bottom:
            dayjs(cell.time).diff(dayjs(current), 'days') > 3
              ? {
                  label: '不可选',
                }
              : undefined,
        };
      }
      return {};
    },
    []
  );

  return {
    visible,
    monthRange: [month, month],
  };
};

const useDemo6 = (props) => {
  const visible = useDemoVisible(props, 4);
  const [month] = useState(new Date().getTime());
  return {
    visible,
    monthRange: [month, month],
  };
};

const useDemo7 = (props) => {
  const visible = useDemoVisible(props, 7);
  const [month] = useState(new Date().getTime());
  const localeText = {
    weekdayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    title: 'YYYY/MM',
    today: 'Today',
    start: 'Start',
    end: 'End',
    startAndEnd: 'Start/End',
  };
  return {
    localeText,
    visible,
    monthRange: [month, month],
  };
};

const CalendarDemo = (props) => {
  const demo1 = useBasicDemo(props, 1);
  const demo2 = useBasicDemo(props, 2);
  const demo3 = useDemo3(props);
  const demo4 = useDemo4(props);
  const demo5 = useBasicDemo(props, 5);
  const demo6 = useDemo6(props);
  const demo7 = useDemo7(props);

  return {
    demo1,
    demo2,
    demo3,
    demo4,
    demo5,
    demo6,
    demo7,
  };
};

Page(alipayPage(CalendarDemo));
