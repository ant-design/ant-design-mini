Page({
  data: {
    isNoBtnShow: false,
    isVerticalShow: false,
    isHoriShow: false,
    isSImgDialogShow: false,
    isMImgDialogShow: false,
    isLImgDialogShow: false,
    isCusDialogShow: false,
    url: 'https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png',
  },
  handleClose() {
    this.setData({
      isNoBtnShow: false,
      isVerticalShow: false,
      isHoriShow: false,
      isSImgDialogShow: false,
      isMImgDialogShow: false,
      isLImgDialogShow: false,
      isCusDialogShow: false,
    });
  },
  handleOpenVertical() {
    this.setData({
      isVerticalShow: true,
    });
  },
  handleOpenHori() {
    this.setData({
      isHoriShow: true,
    });
  },
  handleOpenSImg() {
    this.setData({
      isSImgDialogShow: true,
    });
  },
  handleOpenMImg() {
    this.setData({
      isMImgDialogShow: true,
    });
  },
  handleOpenLImg() {
    this.setData({
      isLImgDialogShow: true,
    });
  },
  handleOpenCus() {
    this.setData({
      isCusDialogShow: true,
    });
  },
  handleOpenNoBtn() {
    this.setData({ isNoBtnShow: true });
  },
});
