Page({
  data: {
    basicVisible: false,
    withTitleVisible: false,
    basicTwoVisible: false,
    basicThreeVisible: false,
    focusOneVisible: false,
    focusTwoVisible: false,
    focusThreeVisible: false,
    url: 'https://gw.alipayobjects.com/zos/rmsportal/yFeFExbGpDxvDYnKHcrs.png',
  },
  handleOpen(e) {
    const { field } = e.target.dataset;
    this.setData({ [field]: true });
  },
  handleClose() {
    for (let key in this.data) {
      if (this.data[key] === true) {
        this.setData({ [key]: false });
      }
    }
  },
  handlePrimaryButtonTap() {
    this.handleClose();
    my.alert({ content: '点击主按钮' });
  },
  handleSecondaryButtonTap() {
    this.handleClose();
    my.alert({ content: '点击辅助按钮' });
  },
  handleCancelButtonTap() {
    this.handleClose();
    my.alert({ content: '点击取消按钮' });
  },
});
