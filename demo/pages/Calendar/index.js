import dayjs from 'dayjs'

Page({
  data: {
    date: new Date(),
    show: false,
    date1: null,
    range1: null,
    min: new Date('2022-07-01'),
    max: new Date('2022-10-26'),
    customDateList2: [
      {
        name: '国庆',
        range: [new Date('2022-10-01'), new Date('2022-10-07')],
        day: new Date('2022-10-01')
      }
    ],
    customDateList: [
      {
        date: new Date('2022-10-01'),
        text: '国庆',
        color: 'red'
      },
      {
        date: new Date('2022-10-02'),
        text: '国庆',
        color: 'red'
      },
      {
        date: new Date('2022-10-03'),
        text: '国庆',
        color: 'red'
      },
      {
        date: new Date('2022-10-04'),
        text: '国庆',
        color: 'red'
      },
      {
        date: new Date('2022-10-05'),
        text: '国庆',
        color: 'red'
      },
      {
        date: new Date('2022-10-06'),
        text: '国庆',
        color: 'red'
      },
      {
        date: new Date('2022-10-07'),
        text: '国庆',
        color: 'red'
      },
      {
        date: new Date('2022-09-10'),
        text: '中秋',
        color: 'red'
      },
      {
        date: new Date('2022-09-11'),
        text: '中秋',
        color: 'red'
      },
      {
        date: new Date('2022-09-12'),
        text: '中秋',
        color: 'red'
      },
      {
        date: new Date('2022-07-17'),
        text: '未出账',
        color: '#999999'
      },
      {
        date: new Date('2022-07-18'),
        text: '未出账',
        color: '#999999'
      },
      {
        date: new Date('2022-07-19'),
        text: '未出账',
        color: '#999999'
      },
      {
        date: new Date('2022-07-20'),
        text: '未出账',
        color: '#999999'
      },
      {
        date: new Date('2022-07-21'),
        text: '未出账',
        color: '#999999'
      },
      {
        date: new Date('2022-08-25'),
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: new Date('2022-08-24'),
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: new Date('2022-08-23'),
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: new Date('2022-08-22'),
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: new Date('2022-08-21'),
        text: '+100',
        color: '#F93A4A'
      },
      {
        date: new Date('2022-08-20'),
        text: '-100',
        color: '#00B578'
      },
      {
        date: new Date('2022-08-19'),
        text: '-100',
        color: '#00B578'
      },
      {
        date: new Date('2022-08-18'),
        text: '-100',
        color: '#00B578'
      },
      {
        date: new Date('2022-08-17'),
        text: '-100',
        color: '#00B578'
      },
      {
        date: new Date('2022-08-16'),
        text: '-100',
        color: '#00B578'
      },
    ],
    disableDates: [
      new Date('2022-09-11'),
      new Date('2022-09-12'),
      new Date('2022-09-13'),
      new Date('2022-09-14'),
      new Date('2022-09-15'),
    ]
  },
  onChange (date) {
    my.alert({
      content: date
    })
  },
  onClose () {
    this.setData({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false
    })
  },
  onLoad () {
  },
  calStartDate () {
    const now = dayjs()
    const min = now.subtract(3, 'month');
    const max = now.add(3, 'month');
    this.setData ({
      min: min.format("YYYY-MM-DD"),
      max: max.format("YYYY-MM-DD")
    })
  },
  handleButtonTap (e) {
    const { dataset } = e.target
    const { index } = dataset
    this.setData({
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false,
      show7: false,
      show8: false,
      [`show${index}`]: true
    })
  },
  handleDateChange (date) {
    this.setData({
      date1: dayjs(date).format("YYYY-MM-DD"),
    })
    this.onClose()
  },
  handleRangeChange (range) {
    this.setData({ range1: range.map(item => dayjs(item).format("YYYY-MM-DD")) })
    this.onClose()
  },
  handleChange (date) {
    my.alert({ 
      content: date
     })

  }
});
