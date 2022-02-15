Page({
  data: {
    isVerticalShow: false,
    isHoriShow: false,
    isSImgDialogShow: false,
    isMImgDialogShow: false,
    isLImgDialogShow: false,
    isCusDialogShow: false,
    url: 'https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png',
  },
  onVerticalButtonTap() {
    this.setData({
      isVerticalShow: false,
    });
  },
  onHoriButtonTap() {
    this.setData({
      isHoriShow: false,
    });
  },
  onVerticalClose() {
    this.setData({
      isVerticalShow: false,
    });
  },
  onHoriClose() {
    this.setData({
      isHoriShow: false,
    });
  },
  openVertical() {
    this.setData({
      isVerticalShow: true,
    });
  },
  openHori() {
    this.setData({
      isHoriShow: true,
    });
  },
  openSImg() {
    this.setData({
      isSImgDialogShow: true,
    });
  },
  openMImg() {
    this.setData({
      isMImgDialogShow: true,
    });
  },
  openLImg() {
    this.setData({
      isLImgDialogShow: true,
    });
  },
  openCus() {
    this.setData({
      isCusDialogShow: true,
    });
  },
  onSImgClose() {
    this.setData({
      isSImgDialogShow: false,
    });
  },
  onMImgClose() {
    this.setData({
      isMImgDialogShow: false,
    });
  },
  onLImgClose() {
    this.setData({
      isLImgDialogShow: false,
    });
  },
  onCusClose() {
    this.setData({
      isCusDialogShow: false,
    });
  },
});
