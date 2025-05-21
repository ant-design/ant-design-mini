Page({
  data: {
    liked: false,
    loaded: false,
    showBubble: true,
    basicActions: [
      {
        label: 'copy',
        icon: 'TextOutline',
      },
      {
        label: 'like',
        icon: 'LikeOutline',
      },
      {
        label: 'collect',
        icon: 'StarOutline',
      },
      {
        label: 'edit',
        icon: 'EditSOutline',
      },
    ],
    bubbleActions: [
      {
        label: 'copy',
        icon: 'TextOutline',
      },
      {
        label: 'collect',
        icon: 'StarOutline',
      },
    ],
  },

  handleTapAction(item) {
    /// #if WECHAT
    // @ts-ignore
    item = item.detail;
    /// #endif
    const basicActions = [...this.data.basicActions];
    if (item.label === 'like') {
      this.setData({
        liked: !this.data.liked,
      });
      basicActions.find((action) => action.label === 'like').icon = this.data.liked
        ? 'https://mdn.alipayobjects.com/huamei_bsws4g/afts/img/JmVoRp-2UwMAAAAAAAAAAAAADoEQAQFr/original'
        : 'LikeOutline';
    } else {
      /// #if ALIPAY || ALIPAYNATIVE
      my.showToast({
        content: `${item.label} tapped`,
      });
      /// #endif
      /// #if WECHAT
      // @ts-ignore
      wx.showToast({
        title: `${item.label} tapped`,
      });
      /// #endif
    }
    this.setData({
      basicActions,
    });
  },
  handleBubbleAction(item) {
    /// #if WECHAT
    // @ts-ignore
    item = item.detail;
    /// #endif
    /// #if ALIPAY || ALIPAYNATIVE
    my.showToast({
      content: `${item.label} tapped`,
    });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({
      title: `${item.label} tapped`,
    });
    /// #endif
  },
  onTypingComplete() {
    this.setData({
      loaded: true,
    });
  },
  toggleBubble() {
    this.setData({
      showBubble: !this.data.showBubble,
      loaded: false,
    });
  },
});
