import { contacts, recommendUserInfos } from './contact';

Page({
  data: {
    recommendContactsList: recommendUserInfos,
    allContactsList: contacts,
    onError() {},
  },
  onLoad() {
    /// #if ALIPAY
    // Android 必须设置 canPullDown 为 false，否则滚动会有问题
    my.setCanPullDown({
      canPullDown: false,
    });
    /// #endif
    /// #if WECHAT
    this.setData({ onError: this.onError.bind(this) });
    /// #endif
  },
  onSelect(user) {
    console.log('user', user);
    /// #if ALIPAY
    my.confirm({
      content: JSON.stringify(user),
    });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({
      title: JSON.stringify(user.detail),
    });
    /// #endif
  },
  onError(error) {
    console.log(error);
  },
});
