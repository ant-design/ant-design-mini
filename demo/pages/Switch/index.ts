Page({
  data: {
    checked: true,
  },
  onChange(checked, e) {
    console.log(checked);
  },
  handleChange(checked, e) {
    /// #if WECHAT
    this.setData({
      checked: checked.detail,
    });
    /// #endif
    /// #if ALIPAY || BUNDLE2H
    this.setData({
      checked,
    });
    /// #endif
  },
  handleChangeByButton() {
    console.log(this.data.checked);
    this.setData({
      checked: !this.data.checked,
    });
  },
});
