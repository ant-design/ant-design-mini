Page({
  data: {
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false,
  },
  changeCheckBox(v) {
    my.showToast({
      content: `当前 checkbox 状态为： ${v}，${v ? '选中' : '未选中'} 状态。`,
      duration: 1000,
    });
  },
  onTap1() {
    this.setData({
      checked1: !this.data.checked1,
    });
  },
  onTap2() {
    this.setData({
      checked2: !this.data.checked2,
    });
  },
  onTap3() {
    this.setData({
      checked3: !this.data.checked3,
    });
  },
  onTap4() {
    this.setData({
      checked4: !this.data.checked4,
    });
  },
});
