Page({
  data: {
    visible: false,
    type: '',
    url: 'https://mdn.alipayobjects.com/huamei_yujk1o/afts/img/A*xYjqRJiKsvoAAAAAAAAAAAAADuaJAQ/original',
  },
  handleOpen(e) {
    const { field } = e.target.dataset;
    this.setData({ type: field, visible: true });
  },
  handleClose() {
    this.setData({ visible: false });
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
