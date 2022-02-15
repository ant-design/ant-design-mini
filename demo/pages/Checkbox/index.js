Page({
  data: {
    disabled: false,
  },
  changeCheckBox(v) {
    my.showToast({
      content: `当前 checkbox 状态为： ${v}，${v ? '选中' : '未选中'} 状态。`,
      duration: 1000,
    });
  },
  onTap() {
    this.setData({
      disabled: !this.data.disabled,
    });
  },
});
