Page({
  data: {
    startDate: '2022-07-01',
    endDate: '2022-10-26',
    // date: '2022-05-01',
    holidayList: [
      {
        name: '国庆',
        range: ['2022-10-01', '2022-10-07'],
        type: 'holiday',
        day: '2022-10-01'
      }
    ],
    customDateList: [
      {
        date: '2022-07-17',
        text: '未出账',
        color: '#999999'
      },
      {
        date: '2022-07-18',
        text: '未出账',
        color: '#999999'
      },
      {
        date: '2022-07-19',
        text: '未出账',
        color: '#999999'
      },
      {
        date: '2022-07-20',
        text: '未出账',
        color: '#999999'
      },
      {
        date: '2022-07-21',
        text: '未出账',
        color: '#999999'
      },
      {
        date: '2022-08-25',
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: '2022-08-24',
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: '2022-08-23',
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: '2022-08-22',
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: '2022-08-21',
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: '2022-08-20',
        text: '-100',
        color: '#00B578'
      },
      {
        date: '2022-08-19',
        text: '-100',
        color: '#00B578'
      },
      {
        date: '2022-08-18',
        text: '-100',
        color: '#00B578'
      },
      {
        date: '2022-08-17',
        text: '-100',
        color: '#00B578'
      },
      {
        date: '2022-08-16',
        text: '-100',
        color: '#00B578'
      },
    ],
    disableDates: [
      '2022-09-11',
      '2022-09-12',
      '2022-09-13',
      '2022-09-14',
      '2022-09-15',
    ]
  },
  onChange (date) {
    my.alert({
      content: date
    })
  },
  onClose () {
    my.alert({
      content: '组件关闭'
    })
  }
});
