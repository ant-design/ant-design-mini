Page({
  handleSliderChange(value, e) {
    console.log('slider changed:', value, e)
  },
  handleAfterChange(value, e) {
    console.log('当前值:', value, e);
    my.showToast({
      content: `当前选中值为：${value}`
    })
  }
});