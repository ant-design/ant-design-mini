Page({
  data: {
    checked: false,
  },
  handleChange(v, e) {
    my.showToast({
      content: `当前 checkbox 状态为： ${v ? '选中' : '未选中'} 状态。`,
      duration: 1000,
    });
  },
  handleChangeControlledValue() {
    this.setData({ checked: !this.data.checked });
  },
});
