Page({
  data: {
    min: new Date('2019/01/15'),
    max: new Date('2021/08/20'),
    defaultDate: new Date('2019/02/02'),
    defaultDateRange: [new Date('2021/08/08'), new Date('2022/05/20')],
  },
  handlePickerChange(date, dateStr, dateArr) {
    console.log('onPickerChange', date, dateStr, dateArr);
  },
  handleOk(date, format, dateArr) {
    console.log('onOk', date, format, dateArr);
  },
  handlePickerRangeChange(type, date, dateStr, dateArr) {
    console.log('onPickerRangeChange', type, date, dateStr, dateArr);
  },
  handleRangeOk(date, format, dateArr) {
    console.log('onRangeOk', date, format, dateArr);
  },
});
