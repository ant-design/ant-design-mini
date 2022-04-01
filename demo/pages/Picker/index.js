Page({
  data: {
    value: ['2015', '12', 25],
    pickerList: [
      ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      // eslint-disable-next-line max-len
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    ],
  },
  handleCancelPicker() {
    my.showToast({
      content: '取消操作，关闭 picker，无回调。',
    });
  },
  handleChangePikcer(v) {
    // eslint-disable-next-line no-console
    console.log('changePikcer', v);
  },
  handleOk(v) {
    my.showToast({
      content: `点击确定，当前选择的数组 index 为：${v}`,
    });
  },
  formatValue(v) {
    return v.join('-');
  },
});
