import dayjs from 'dayjs';

Page({
  data: () => {
    const localeText = {
      weekdayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      title: 'YYYY/MM',
      today: 'Today',
      start: 'Start',
      end: 'End',
      startAndEnd: 'Start/End',
    };
    return {
      demo1: {
        visible: true,
      },
      demo2: {
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
        monthRange: [new Date().getTime(), new Date().getTime()],
      },
    };
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
  demoFormatter(cell, value) {
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
  demo8Formatter(cell) {
    return {
      top: {
        className: dayjs(cell.time).date() % 2 === 1 && 'odd',
        label: dayjs(cell.time).date() % 2 === 0 ? '偶数' : '奇数',
      },
    };
  },
});
