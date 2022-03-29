
Page({
  data: {
    show: true,
    showMask: false,
    url: 'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
  },
  onVisibleChange(visible, mode) {
    this.setData({
      show: visible,
    });
    if (mode==='mask') {
      my.showToast({content: '点击mask关闭', duration:1000 });
    }
  },
  itemTap(e) {
    my.alert({
      content: `点击_${e.currentTarget.dataset.index}`,
    });
  },
  onToggleMask(){
    this.setData({
      showMask: !this.data.showMask,
    });
  },
});
