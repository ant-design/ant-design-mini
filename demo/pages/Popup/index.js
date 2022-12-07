Page({
  data: {
    position: '',
    basicShow: false,
    maskClosable: true,
    closeable: false,
    animation: true,
    scrollVisible: false,
  },
  handlePopupClose() {
    this.setData({
      basicShow: false,
      scrollVisible: false,
    });
  },
  handleShowBasic(e) {
    const { position } = e.target.dataset;
    this.setData({
      position,
      basicShow: true,
    });
  },
  handleShowScroll() {
    this.setData({ scrollVisible: true });
  },
  handleChangeMaskClosable(checked) {
    const { closeable } = this.data;
    if (!closeable && !checked) {
      return my.alert({
        content: '同时隐藏关闭按钮和蒙层关闭事件将无法关闭弹出层',
      });
    }
    this.setData({ maskClosable: checked });
  },
  handleChangecloseable(checked) {
    const { maskClosable } = this.data;
    if (!maskClosable && !checked) {
      return my.alert({
        content: '同时隐藏关闭按钮和蒙层关闭事件将无法关闭弹出层',
      });
    }
    this.setData({ closeable: checked });
  },
  handleChangeAnimation(checked) {
    this.setData({ animation: checked });
  },
});
