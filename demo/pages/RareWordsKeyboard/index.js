Page({
  data: {
    visible: false,
    visible2: false,
  },
  // 默认键盘
  onTap() {
    this.setData({ visible: !this.data.visible });
  },
  // 不带蒙层
  onTap2() {
    this.setData({ visible2: !this.data.visible2 });
  },
});
