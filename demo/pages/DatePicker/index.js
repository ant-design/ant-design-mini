Page({
  data: {
    min: new Date('2019/01/15'),
    max: new Date('2023/08/20'),
    defaultDate: new Date('2019/02/02'),
    defaultDateRange: [null,new Date('2022/05/20')],
    date1: [new Date("2014/05/20"), new Date("2015/05/20")],
    minDate1: new Date("2017/01/15"),
    maxDate1: new Date("2018/08/20"),
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
  handleChangeDate() {
    this.setData({ defaultDate: new Date('2019/05/02') });
  },
});
