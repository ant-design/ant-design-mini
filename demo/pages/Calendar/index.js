import dayjs from 'dayjs'

Page({
  data: {
    date: new Date(),
    show: false,
    date1: null,
    range1: null,
    startDate: new Date('2022-07-01'),
    endDate: new Date('2022-10-26'),
    holidayList: [
      {
        name: '中秋',
        range: [new Date('2022-09-10'), new Date('2022-09-12')],
        day: new Date('2022-09-10')
      },
      {
        name: '国庆',
        range: [new Date('2022-10-01'), new Date('2022-10-07')],
        day: new Date('2022-10-01')
      }
    ],
    customDateList: [
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
      show6: false
    })
  },
  onLoad () {
  },
  calStartEndDate () {
    const now = dayjs()
    const startDate = now.subtract(3, 'month');
    const endDate = now.add(3, 'month');
    this.setData ({
      startDate: startDate.format("YYYY-MM-DD"),
      endDate: endDate.format("YYYY-MM-DD")
    })
  },
  handleButton1Tap () {
    this.setData({
      show1: true,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: false
    })
  },
  handleButton2Tap () {
    this.setData({
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      show5: false,
      show6: false

    })
  },
  handleButton3Tap () {
    this.setData({
      show1: false,
      show2: false,
      show3: true,
      show4: false,
      show5: false,
      show6: false

    })
  },
  handleButton4Tap () {
    this.setData({
      show1: false,
      show2: false,
      show3: false,
      show4: true,
      show5: false,
      show6: false

    })
  },
  handleButton5Tap () {
    this.setData({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: true,
      show6: false

    })
  },
  handleButton6Tap () {
    this.setData({
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      show5: false,
      show6: true
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
    this.onClose()

  }
});
