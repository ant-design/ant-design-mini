Page({
  data: {
    currentValue: 0,
  },
  handleSliderChange(value) {
    console.log('slider changed:', value)
    this.setData({
      currentValue: value,
    });
  },
  handleAfterChange(value) {
    console.log('当前值:', value);
    my.showToast({
      content: `当前选中值为：${value}`
    })
  }
});