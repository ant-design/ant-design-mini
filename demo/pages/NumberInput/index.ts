Page({
  data: {
    value1: '',
    value2: '',
    value3: '',
    maxValue: 5800,
    quickAmounts: ['500', '1000', '2000'],
  },

  handleChange1(val) {
    let value = val;
    /// #if WECHAT
    value = val.detail;
    /// #endif
    console.log(value);
    this.setData({
      value1: value,
    });
  },
  handleChange2(val) {
    let value = val;
    /// #if WECHAT
    value = val.detail;
    /// #endif
    console.log(value);
    this.setData({
      value2: value,
    });
  },
  handleChange3(val) {
    let value = val;
    /// #if WECHAT
    value = val.detail;
    /// #endif
    console.log(value);
    if (Number(value) > this.data.maxValue) {
      my.alert({
        title: '提示',
        content: `提现金额不能大于${this.data.maxValue}`,
      });
      return;
    }
    this.setData({
      value3: value,
    });
  },
  handleLinkTap() {
    /// #if ALIPAY || ALIPAYNATIVE
    my.alert({
      content: '交易明细',
    });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({
      title: '交易明细',
    });
    /// #endif
  },
  handleAllWithdraw() {
    this.input.update(this.data.maxValue);
  },
  handleRef(input) {
    /// #if WECHAT
    this.input = input.detail;
    /// #endif

    /// #if ALIPAY || ALIPAYNATIVE
    this.input = input;
    /// #endif
  },
});
