Page({
  data: {
    value: ['a2', 'a3'],
    radius: true,
    controlled: false,
    disabled: false,
    uid: 'checkboxGroup',
    list: [
      { value: 'a1', disabled: false },
      { value: 'a2', disabled: false },
      { value: 'a3', disabled: false },
      { value: 'a4', disabled: false },
      { value: 'a5', disabled: false },
      { value: 'a6', disabled: false },
    ],
  },
  checkBoxGroupChange(v) {
    my.alert({
      title: `当前选中的元素为：${v}`,
    });
    this.setData({
      value: v,
    });
  },
  selectAll() {
    const newValue = this.data.list.map((item) => item.value);
    if (newValue.length > 0) {
      this.setData({
        value: newValue,
      });
    }
  },
  selectNone() {
    this.setData({
      value: [],
    });
  },
  disableAll() {
    this.setData({
      disabled: true,
    });
  },
  enableAll() {
    this.setData({
      disabled: false,
    });
  },
  controlledTrue() {
    this.setData({
      controlled: true,
    });
  },
  controlledFalse() {
    this.setData({
      controlled: false,
    });
  },
});
