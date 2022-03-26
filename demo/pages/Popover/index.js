Page({
  data: {
    showLight: false,
    showDark: false,
    url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
  },
  handleLightVisibleChange(e) {
    this.setData({
      showLight: e,
    });
  },
  handleDarkVisibleChange(e) {
    this.setData({
      showDark: e,
    });
  },
  handleTapItem(e) {
    this.setData({
      [e.target.dataset.type]: false,
    });
    my.showToast({ content: `点击了${e.target.dataset.name}` });
  },
});
