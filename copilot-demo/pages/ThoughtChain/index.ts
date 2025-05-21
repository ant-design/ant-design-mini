//@ts-ignore

Page({
  data: {
    basicList: [
      {
        title: '理解问题',
        content: '3A游戏',
        icon: 'CheckCircleOutline',
      },
      {
        title: '没有在本地找到结果',
        content: '当前主流显卡',
        icon: 'CheckCircleOutline',
      },
      {
        title: '在互联网上搜索问题',
        content: '黑神话悟空所需显卡',
        icon: 'MoreOutline',
      },
    ],
    customList: [
      {
        title: '理解问题',
        content: '解析语法结构',
      },
      {
        status: 'loading',
        title: '搜索问题',
        content: [
          {
            title: '理解问题',
          },
          {
            title: '联网搜索',
            content: '1. 黑神话悟空介绍',
          },
          {
            title: '已根据搜索结果精选3篇资料',
            content: [
              '1. 黑神话悟空介绍',
              '2. 对于1080p显示器，4060ti和4060该选哪个？',
              '3. 黑神话悟空官方建议配置',
            ],
          },
          {
            title: '联想更多结果',
          },
        ],
      },
    ],
  },
  onContentItemTap(e) {
    const { content } = e.currentTarget.dataset || {};
    /// #if ALIPAY || ALIPAYNATIVE
    my.showToast({ content: content });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: content });
    /// #endif
  },
});
