Page({
  data: {
    isBaseModalShow: false,
    isCloseableModalShow: false,
    isCustomBtnModalShow: false,
    isMainBtnModalShow: false,
    isCustomModalShow: false,
    isLImgModalShow: false,
    url: 'https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png',
  },
  openBaseModal() {
    this.commonShow('isBaseModalShow');
  },
  closeBaseModal() {
    this.commonHide('isBaseModalShow');
  },
  openCloseableModal() {
    this.commonShow('isCloseableModalShow');
  },
  closeCloseableModal() {
    this.commonHide('isCloseableModalShow');
  },
  openCustomBtnModal() {
    this.commonShow('isCustomBtnModalShow');
  },
  closeCustomBtnModal() {
    this.commonHide('isCustomBtnModalShow');
  },
  openMainBtnModal() {
    this.commonShow('isMainBtnModalShow');
  },
  closeMainBtnModal() {
    this.commonHide('isMainBtnModalShow');
  },
  openCustomModal() {
    this.commonShow('isCustomModalShow');
  },
  closeCustomModal() {
    this.commonHide('isCustomModalShow');
  },
  openLImgModal() {
    this.commonShow('isLImgModalShow');
  },
  closeLImgModal() {
    this.commonHide('isLImgModalShow');
  },
  handleButtonTap(type) {
    my.alert({
      title: `点击了${type === 'main' ? '主按钮' : '辅助按钮'}`,
    });
  },
  commonShow(prop) {
    this.setData({
      [prop]: true,
    });
  },
  commonHide(prop) {
    this.setData({
      [prop]: false,
    });
  },
});
