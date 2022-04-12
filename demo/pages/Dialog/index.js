Page({
  data: {
    isNoBtnShow: false,
    isMaskClosableShow: false,
    isVerticalShow: false,
    isHoriShow: false,
    isLImgDialogShow: false,
    isCusDialogShow: false,
    url: 'https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png',
  },
  handleClose() {
    this.setData({
      isNoBtnShow: false,
      isMaskClosableShow: false,
      isVerticalShow: false,
      isHoriShow: false,
      isLImgDialogShow: false,
      isCusDialogShow: false,
    });
  },
  handleButtonTap(index) {
    my.alert({
      title: `点击了第${index + 1}个按钮`,
      complete: () => {
        this.handleClose();
      },
    });
  },
  handleOpenNoBtn() {
    this.setData({ isNoBtnShow: true });
  },
  handleOpenMaskClosable() {
    this.setData({ isMaskClosableShow: true });
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
});
