Page({
  data: {
    rate1: 4
  },
  handleRateEnd (rate) {
    my.alert({ content: rate })
    this.setData({
      rate1: rate
    })
  },

  handleHaha() {
    console.log('handle haha')
  }
});
