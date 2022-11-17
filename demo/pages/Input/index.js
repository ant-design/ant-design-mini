Page({
  data: {
    value: '',
  },
  onChange(value, e) {
    console.log(value, e);
  },
  handleChange(value) {
    this.setData({
      value,
    });
  },
  handleClear() {
    this.setData({
      value: '',
    });
  }
});
