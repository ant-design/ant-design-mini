Page({
  data: {
    checked: false,
    value: ['banana'],
    options: [
      { value: 'apple', label: 'Apple' },
      { value: 'orange', label: 'Orange' },
      { value: 'banana', label: 'Banana' },
    ],
    customOptions: [
      {
        title: 'Group one',
        list: [
          {
            title: 'Option one',
            value: '1',
          },
          {
            title: 'Option two',
            value: '2',
          },
          {
            title: 'Option three',
            value: '3',
          },
        ],
      },
      {
        title: 'Group two',
        list: [
          {
            title: 'Option four',
            value: '4',
          },
          {
            title: 'Option five',
            value: '5',
          },
          {
            title: 'Option six',
            value: '6',
          },
        ],
      },
    ],
    customValue: [],
  },
  onChange(value, e) {
    console.log(value, e);
  },

  handleCheckedChange(checked) {
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
  handleValueChange(value) {
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

  toggleChange() {
    this.setData({
      checked: !this.data.checked,
    });
  },

  handleCustomChange(checked, e) {
    let value = this.data.customValue;

    /// #if WECHAT
    const event = checked;
    if (event.detail) {
      value = value.concat(event.target.dataset.value);
    } else {
      value = value.filter((v) => v !== event.target.dataset.value);
    }
    /// #endif

    /// #if ALIPAY
    if (checked) {
      value = value.concat(e.target.dataset.value);
    } else {
      value = value.filter((v) => v !== e.target.dataset.value);
    }
    /// #endif

    this.setData({ customValue: value });
    console.log(value);
  },
});
