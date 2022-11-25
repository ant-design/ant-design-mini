Page({
  data: {
    value: 0,
  },
  onChange(value) {
    console.log(value);
  },
  handleChange(value) {
    this.setData({
      // 这里是由于 stepper 没有值会返回 undefined，但是小程序里不能setData undefined
      // See: https://opendocs.alipay.com/mini/framework/page-detail#Page.prototype.setData(data%3A%20Object%2C%20callback%3A%20Function)
      value: typeof value === 'undefined' ? '' : value,
    });
  },
  add() {
    this.setData({
      value: this.data.value + 1,
    });
  },
  minus() {
    this.setData({
      value: this.data.value - 1,
    });
  },
  clear() {
    this.setData({
      value: '',
    });
  },
  focus() {
    this.setData({
      focus: true,
    });
  },
  blur() {
    this.setData({
      focus: false,
    });
  },
  handleAddValue() {
    this.setData({ value: this.data.value + 1 });
  },
  handleMinusValue() {
    this.setData({ value: this.data.value - 1 });
  },
});
