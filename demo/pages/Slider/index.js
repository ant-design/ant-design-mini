Page({
  handleSliderChange(value) {
    console.log('slider changed:', value)
  },
  handleAfterChange(value) {
    console.log('当前值:', value);
    my.showToast({
      content: `当前选中值为：${value}`
    })
  }
});