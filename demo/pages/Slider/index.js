Page({
  data: {
    currentValue: 0,
  },
  handleSliderChange(value) {
    console.log('slider changed:')
    console.log(value);
    this.setData({
      currentValue: value,
    });
  }
});
