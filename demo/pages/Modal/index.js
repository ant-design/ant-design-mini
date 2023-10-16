Page({
  data: {
    basicVisible: false,
    withTitleVisible: false,
    basicTwoVisible: false,
    basicThreeVisible: false,
    focusOneVisible: false,
    focusTwoVisible: false,
    focusThreeVisible: false,
    customVisible: false,
    customBodyVisible: false,
  },
  handleOpen(e) {
    const { field } = e.target.dataset;
    this.setData({ [field]: true });
  },
  handleClose() {
    this.setData({
      basicVisible: false,
      withTitleVisible: false,
      basicTwoVisible: false,
      basicThreeVisible: false,
      focusOneVisible: false,
      focusTwoVisible: false,
      focusThreeVisible: false,
      customVisible: false,
      customBodyVisible: false,
    });
  },
  handlePrimaryButtonTap() {
    this.handleClose();
    my.showToast({ content: '点击主按钮', duration: 1000 });
  },
  handleSecondaryButtonTap() {
    this.handleClose();
    my.showToast({ content: '点击辅助按钮', duration: 1000 });
  },
  handleCancelButtonTap() {
    this.handleClose();
    my.showToast({ content: '点击取消按钮', duration: 1000 });
  },
});
