Page({
  data: {
    value: 80,
  },
  onChange(value, e) {
    console.log('slider changed:', value, e)
  },
  onAfterChange(value, e) {
    console.log('当前值:', value, e);
    my.showToast({
      content: `当前选中值为：${value}`
    });
  },
  handleChange(value, e) {
    console.log('slider changed:', value, e)
    this.setData({
      value,
    });
  }
});
