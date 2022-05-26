Page({
  data: {
    min: new Date(),
    defaultDate: new Date('2021/08/08'),
  },
  handlePickerChange(date, dateStr, dateArr) {
    console.log('onPickerChange', date, dateStr, dateArr);
  },
  handleOk(date, format, dateArr) {
    console.log('onOk', date, format, dateArr);
  },
});
