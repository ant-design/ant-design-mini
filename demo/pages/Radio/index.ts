Page({
  data: {
    checked: false,
  },
  onChange(value, e) {
    console.log(value, e);
  },
  handleChange(checked) {
    /// #if WECHAT
    this.setData({
      checked: checked.detail,
    });
    /// #endif
    /// #if ALIPAY
    this.setData({
      checked,
    });
    /// #endif
  },
});
