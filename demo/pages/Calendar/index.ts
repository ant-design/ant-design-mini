import dayjs from 'dayjs';

const localeText = {
  weekdayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  format: 'YYYY/MM',
  today: 'Today',
  start: 'Start',
  end: 'End',
  startAndEnd: 'Start/End',
};

function demo8Formatter(cell) {
  const isOdd = dayjs(cell.time).date() % 2 === 1;
  const isNotBeginEnd = !cell.isSelectedBegin && !cell.isSelectedEnd;

  const isWeekend = dayjs(cell.time).day() > 4;

  let topClassName;
  if (isNotBeginEnd) {
    topClassName = isOdd ? 'odd' : 'even';
  }

  return {
    top: {
      className: topClassName,
      label: isOdd ? '奇数' : '偶数',
    },
    bottom: {
      label: isWeekend ? '周末' : '',
    },
  };
}

function demo8MonthFormatter(month) {
  return {
    ...month,
  };
}

function demoFormatter(cell, value) {
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
}

const nowDate = Date.now();
Page({
  data: {
    demo1: {
      defaultValue: [nowDate, nowDate],
      visible: true,
    },
    demo2: {
      defaultValue: dayjs().add(1, 'M').toDate().getTime(),
      visible: true,
    },
    demo3: {
      title: dayjs(new Date().getTime()).format('YYYY年MM月'),
      monthRange: [new Date().getTime(), new Date().getTime()],
      visible: true,
    },
    demo4: {
      visible: true,
    },
    demo5: {
      visible: true,
    },
    demo6: {
      monthRange: [new Date().getTime(), new Date().getTime()],
      visible: true,
    },
    demo7: {
      localeText,
      visible: true,
      monthRange: [new Date().getTime(), new Date().getTime()],
    },
    demo8: {
      visible: true,
      monthRange: [
        dayjs().toDate().getTime(),
        dayjs().add(1, 'M').toDate().getTime(),
      ],
    },
    /// #if WECHAT
    demoFormatter,
    demo8Formatter,
    demo8MonthFormatter,
    /// #endif
    demo9: {
      visible: true,
      value: nowDate,
    },
    demo10: {
      visible: false,
      monthRange: [
        dayjs().subtract(1, 'year').valueOf(),
        dayjs().add(1, 'year').valueOf(),
      ],
    },
  },
  demo3NextMonth() {
    const current = this.data.demo3.monthRange[0];
    const newMonth = dayjs(current).add(1, 'month').toDate().getTime();

    this.setData({
      'demo3.title': dayjs(newMonth).format('YYYY年MM月'),
      'demo3.monthRange': [newMonth, newMonth],
    });
  },
  demo3PreviousMonth() {
    const current = this.data.demo3.monthRange[0];
    const newMonth = dayjs(current).add(-1, 'month').toDate().getTime();

    this.setData({
      'demo3.title': dayjs(newMonth).format('YYYY年MM月'),
      'demo3.monthRange': [newMonth, newMonth],
    });
  },
  demoFormatter,
  demo8Formatter,
  demo8MonthFormatter,
  demo9HandleChange(value) {
    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({
      'demo9.value': value,
    });
    /// #endif
    /// #if WECHAT
    this.setData({
      'demo9.value': value.detail,
    });
    /// #endif
  },
  demo9HandlePreviousDay() {
    this.setData({
      'demo9.value': this.data.demo9.value - 1000 * 24 * 3600,
    });
  },
  demo9HandleNextDay() {
    this.setData({
      'demo9.value': this.data.demo9.value + 1000 * 24 * 3600,
    });
  },
  demo9HandleScrollIntoView() {
    this.ref.scrollIntoView(dayjs().add(1, 'M').toDate().getTime());
  },
  onPopupOpen() {
    this.setData({
      'demo10.visible': true,
    });
  },
  onPopupClose() {
    this.setData({
      'demo10.visible': false,
    });
  },
  handleRef(ref) {
    /// #if ALIPAY || ALIPAYNATIVE
    this.ref = ref;
    /// #endif
    /// #if WECHAT
    this.ref = ref.detail;
    /// #endif
  },
});
