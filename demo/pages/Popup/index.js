Page({
  data: {
    showLeft: false,
    showRight: false,
    showTop: false,
    showBottom: false,
    showCenter: false,
    showCenterScoll: false,
  },
  onTopBtnTap() {
    this.setData({
      showTop: true,
    });
  },
  onRightBtnTap() {
    this.setData({
      showRight: true,
    });
  },
  onLeftBtnTap() {
    this.setData({
      showLeft: true,
    });
  },
  onButtomBtnTap() {
    this.setData({
      showBottom: true,
    });
  },
  onCenterBtnTap() {
    this.setData({
      showCenter: true,
    });
  },
  onCenterBtnScrollTap() {
    this.setData({
      showCenterScoll: true,
    });
  },
  onPopupClose() {
    this.setData({
      showLeft: false,
      showRight: false,
      showTop: false,
      showBottom: false,
      showCenter: false,
      showCenterScoll: false,
    });
  },
});
