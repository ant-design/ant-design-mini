Page({
  data: {
    value: ['2021', '12', 25],
    pickerList: [
      [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      // eslint-disable-next-line max-len
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    ],
    basicColumns: [
      [
        { label: '周一', value: 'Mon' },
        { label: '周二', value: 'Tues' },
        { label: '周三', value: 'Wed' },
        { label: '周四', value: 'Thur' },
        { label: '周五', value: 'Fri' },
      ],
      [
        { label: '上午', value: 'am' },
        { label: '下午', value: 'pm' },
      ],
    ],
  },
  handleCancelPicker() {
    my.showToast({
      content: '取消操作，关闭 picker',
    });
  },
  handleChangePikcer(v) {
    // eslint-disable-next-line no-console
    console.log('changePikcer', v);
  },
  handleOk(v) {
    this.setData({
      value: v,
    });
    my.showToast({
      content: `点击确定，当前选择的值为：${v}`,
    });
  },
  formatTime(value, data) {
    return data
      .map((v, i) => v.find((v1) => v1.value === value[i]).label)
      .join('');
  },
  handleTimeOk(value) {
    console.log(value);
  },
});
