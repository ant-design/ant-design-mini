Page({
  data: {
    rate1: 4
  },
  handleChange (rate, e) {
    console.log('e', e)
    my.alert({ content: rate })
    this.setData({
      rate1: rate
    })
  }

});
