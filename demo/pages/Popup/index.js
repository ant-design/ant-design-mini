Page({
  data: {
    position: '',
    basicShow: false,
    maskClosable: true,
    showCloseIcon: false,
    animation: true,
    autoHeight: false,
    showCenterScoll: false,
    showCenterDisableScoll: false,
  },
  handlePopupClose() {
    this.setData({
      basicShow: false,
      showCenterScoll: false,
      showCenterDisableScoll: false,
    });
  },
  handleShowBasic(e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicShow: true,
    });
  },
  handleShowDisableScroll() {
    this.setData({
      showCenterDisableScoll: true,
    });
  },
  handleShowScroll() {
    this.setData({
      showCenterScoll: true,
    });
  },
  handleChangeMaskClosable(checked) {
    const { showCloseIcon } = this.data;
    if (!showCloseIcon && !checked) {
      return my.alert({
        content: '同时隐藏关闭按钮和蒙层关闭事件将无法关闭弹出层',
      });
    }
    this.setData({ maskClosable: checked });
  },
  handleChangeShowCloseIcon(checked) {
    const { maskClosable } = this.data;
    if (!maskClosable && !checked) {
      return my.alert({
        content: '同时隐藏关闭按钮和蒙层关闭事件将无法关闭弹出层',
      });
    }
    this.setData({ showCloseIcon: checked });
  },
  handleChangeAnimation(checked) {
    this.setData({ animation: checked });
  },
  handleChangeAutoHeight(checked) {
    this.setData({ autoHeight: checked });
  },
});
