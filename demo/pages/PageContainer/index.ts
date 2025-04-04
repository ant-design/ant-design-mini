Page({
  data: {
    loading: true,
    status: 'failed',
    safeArea: 'both',
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        loading: false,
      });
    }, 1000);
  },
  handleRefresh() {
    /// #if ALIPAY || BUNDLE2H
    my.reLaunch({
      url: 'index',
      fail(e) {
        console.log(e);
      },
    });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.reLaunch({
      url: 'index',
      fail(e) {
        console.log(e);
      },
    });
    /// #endif
  },
  handleSwitchToDisconnected() {
    this.setData({
      status: 'disconnected',
      title: '',
      message: '',
      image: '',
    });
  },
  handleSwitchToEmpty() {
    this.setData({
      status: 'empty',
      title: '',
      message: '',
      image: '',
    });
  },
  handleSwitchToBusy() {
    this.setData({
      status: 'busy',
      title: '',
      message: '',
      image: '',
    });
  },
  handleSwitchToCustom() {
    this.setData({
      loading: false,
      status: '',
      title: '自定义标题',
      message: '自定义详情',
      image: 'https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg',
    });
  },
  handleSwitchToNormal() {
    this.setData({
      status: '',
      title: '',
      message: '',
      image: '',
    });
  },
  handleToggleSafeArea(e) {
    const { position = '' } = e.target.dataset;

    this.setData({
      safeArea: position,
    });
  },
});
