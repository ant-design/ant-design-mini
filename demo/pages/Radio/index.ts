Page({
  data: {
    checked: false,
    value: 'banana',
    options: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
      { value: 'banana', label: '香蕉' },
    ],
    optionsWithDisabled: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
      { value: 'watermelon', label: '西瓜', disabled: true },
      { value: 'banana', label: '香蕉' },
    ],
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
    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({
      checked,
    });
    /// #endif
  },

  onRadioGroupChange(value, e) {
    console.log(value, e);
  },
  handleRadioGroupChange(value) {
    /// #if WECHAT
    this.setData({
      value: value.detail,
    });
    /// #endif
    /// #if ALIPAY || ALIPAYNATIVE
    this.setData({
      value,
    });
    /// #endif
  },
});
