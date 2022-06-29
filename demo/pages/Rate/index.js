Page({
  data: {
    rate1: 4
  },
  handleRateEnd (rate) {
    this.setData({rate1: rate})
  }
});
