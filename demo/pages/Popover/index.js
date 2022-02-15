
Page({
  data: {
    show: true,
    url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
  },
  onVisibleChange(e) {
    this.setData({
      show: e,
    });
  },
  itemTap(e) {
    my.alert({
      content: `点击_${e.currentTarget.dataset.index}`,
    });
  },
});
