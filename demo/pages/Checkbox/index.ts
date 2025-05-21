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
        title: '分组一',
        list: [
          {
            title: '选项一',
            value: '1',
          },
          {
            title: '选项二',
            value: '2',
          },
          {
            title: '选项三',
            value: '3',
          },
        ],
      },
      {
        title: '分组二',
        list: [
          {
            title: '选项四',
            value: '4',
          },
          {
            title: '选项五',
            value: '5',
          },
          {
            title: '选项六',
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

    /// #if ALIPAY || ALIPAYNATIVE
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
    /// #if ALIPAY || ALIPAYNATIVE
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

    /// #if ALIPAY || ALIPAYNATIVE
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
