Page({
  data: {
    value1: '',
    value2: '',
    value3: '',
    maxValue: 5800,
    quickAmounts: ['500', '1000', '2000']
  },

  handleChange1(value) {
    this.setData({
      value1: value
    });
  },
  handleChange2(value) {
    this.setData({
      value2: value
    });
  },
  handleChange3(value) {
    if (Number(value) > this.data.maxValue) {
      my.alert({
        title: '提示',
        content: `提现金额不能大于${this.data.maxValue}`
      });
      return;
    }
    this.setData({
      value3: value
    });
  },
  handleLinkTap() {
    my.alert({
      title: '交易明细',
      content: '交易明细'
    });
  },
  handleAllWithdraw() {
    this.input.update(this.data.maxValue);
  },
  handleRef(input) {
    this.input = input;
  }
});
