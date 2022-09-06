Page({
  data: {
    rate1: 4
  },
  handleChange (rate) {
    my.alert({ content: rate })
    this.setData({
      rate1: rate
    })
  },

  handleHaha() {
    console.log('handle haha')
  }
});
