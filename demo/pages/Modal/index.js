Page({
  data: {
    isBaseModalShow: false,
    isDurationModalShow: false,
    isCustomModalShow: false,
    isSImgModalShow: false,
    isMImgModalShow: false,
    isLImgModalShow: false,
    url: 'https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png',
  },
  openBaseModal() {
    this.commonShow('isBaseModalShow');
  },
  closeBaseModal() {
    this.commonHide('isBaseModalShow');
  },
  openDurationModal() {
    this.commonShow('isDurationModalShow');
  },
  closeDurationModal() {
    this.commonHide('isDurationModalShow');
  },
  openCustomModal() {
    this.commonShow('isCustomModalShow');
  },
  closeCustomModal() {
    this.commonHide('isCustomModalShow');
  },
  openSImgModal() {
    this.commonShow('isSImgModalShow');
  },
  closeSImgModal() {
    this.commonHide('isSImgModalShow');
  },
  openMImgModal() {
    this.commonShow('isMImgModalShow');
  },
  closeMImgModal() {
    this.commonHide('isMImgModalShow');
  },
  openLImgModal() {
    this.commonShow('isLImgModalShow');
  },
  closeLImgModal() {
    this.commonHide('isLImgModalShow');
  },
  onButtonTap(type) {
    my.alert({
      title: type,
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
