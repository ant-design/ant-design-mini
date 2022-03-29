Page({
  data: {
    showLight: false,
    showDark: false,
    url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
  },
  handleLightVisibleChange(e, mode) {
    this.setData({
      showLight: e,
    });
    if (mode === 'mask') {
      my.showToast({ content: '点击mask关闭', duration: 2000 });
    }
  },
  handleDarkVisibleChange(e, mode) {
    this.setData({
      showDark: e,
    });
    if (mode === 'mask') {
      my.showToast({ content: '点击mask关闭', duration: 2000 });
    }
  },
  handleTapItem(e) {
    this.setData({
      [e.target.dataset.type]: false,
    });
    my.showToast({ content: `点击了${e.target.dataset.name}` });
  },
  onToggleMask() {
    this.setData({
      showMask: !this.data.showMask,
    });
  },
});
