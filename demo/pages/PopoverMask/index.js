Page({
  data: {
    show: false,
  },
  onVisibleChange(e) {
    this.setData({
      show: e,
    });
  },
  onMaskTap(e) {
    this.setData({
      show: e,
    });
  },
});
