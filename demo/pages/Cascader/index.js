Page({
  data: { cascaderVisible: true },
  openCascader() {
    this.setData({ cascaderVisible: true });
  },
  onClose() {
    this.setData({ cascaderVisible: false });
  },
});
