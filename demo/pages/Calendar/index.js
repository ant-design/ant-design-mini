import dayjs from 'dayjs'

Page({
  data: {
    show: false,
    date1: null,
    range1: null,
    startDate: '2022-07-01',
    endDate: '2022-10-26',
    holidayList: [
      {
        name: '中秋',
        range: ['2022-09-10', '2022-09-12'],
        type: 'holiday',
        day: '2022-09-10'
      },
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
      date1: date,
    })
    this.onClose()
  },
  handleRangeChange (range) {
    this.setData({ range1: range })
    this.onClose()
  },
  handleChange (date) {
    my.alert({ 
      content: date
     })
    this.onClose()

  }
});
