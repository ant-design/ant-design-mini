Page({
  data: {
    min: new Date(),
    defaultDate: new Date('2021/08/08'),
  },
  handlePickerChange(date, dateArr) {
    console.log('onPickerChange', date, dateArr);
  },
  handleOk(date, dateArr) {
    console.log('onOk', date, dateArr);
  },
});
