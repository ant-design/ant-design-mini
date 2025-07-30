Page({
  data: {
    value: 3,
  },
  onChange(value) {
    console.log(value);
  },
  handleChange(value) {
    console.log(value);
    /// #if WECHAT
    this.setData({
      value: value.detail,
    });
    /// #endif
    /// #if ALIPAY
    this.setData({
      value,
    });
    /// #endif
  },
});
