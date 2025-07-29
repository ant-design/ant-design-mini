Page({
  data: {
    value: '',
    money: '',
  },
  onChange(value, e) {
    console.log(value, e);
  },
  handleChange(value) {
    /// #if ALIPAY
    this.setData({
      value,
    });
    /// #endif

    /// #if WECHAT
    this.setData({
      value: value.detail,
    });
    /// #endif
  },

  handleMoney(value) {
    console.log(value);

    /// #if ALIPAY
    if (isNaN(Number(value))) {
      return;
    }
    this.setData({
      money: value,
    });
    /// #endif

    /// #if WECHAT
    if (isNaN(Number(value.detail))) {
      return;
    }
    this.setData({
      money: value.detail,
    });
    /// #endif
  },
  clear() {
    this.setData({
      value: '',
    });
  },
  handleRefInput(input) {
    /// #if WECHAT
    this.input = input.detail;
    /// #endif

    /// #if ALIPAY
    this.input = input;
    /// #endif
  },
  handleRefTextArea(textArea) {
    /// #if WECHAT
    this.textArea = textArea.detail;
    /// #endif

    /// #if ALIPAY
    this.textArea = textArea;
    /// #endif
  },
  clearByInputRef() {
    this.input.update('');
  },
  clearByTextAreaRef() {
    this.textArea.update('');
  },
});
