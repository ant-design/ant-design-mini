Page({
  data: {
    tabs: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],

    tabsBadge: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
        badge: {},
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
        badge: { type: 'number', text: 9999 },
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],

    tabsImage: [
      {
        type: 'image',
        icon: 'https://gw.alipayobjects.com/mdn/rms_8b9ee1/afts/img/A*NLfXQKIJLjMAAAAAAAAAAAAAARQnAQ',
        activeIcon:
          'https://gw.alipayobjects.com/mdn/rms_8b9ee1/afts/img/A*ym7MQoa2WJkAAAAAAAAAAAAAARQnAQ',
        text: '小程序',
      },
      {
        type: 'image',
        icon: 'https://gw.alipayobjects.com/mdn/rms_8b9ee1/afts/img/A*xRIaTKSgyuwAAAAAAAAAAAAAARQnAQ',
        activeIcon:
          'https://gw.alipayobjects.com/mdn/rms_8b9ee1/afts/img/A*t2yUQod-dFsAAAAAAAAAAAAAARQnAQ',
        text: '店铺',
      },
      {
        type: 'image',
        icon: 'https://gw.alipayobjects.com/mdn/rms_8b9ee1/afts/img/A*1EQEQZzPoHAAAAAAAAAAAAAAARQnAQ',
        activeIcon:
          'https://gw.alipayobjects.com/mdn/rms_8b9ee1/afts/img/A*FkGmSaLy8WoAAAAAAAAAAAAAARQnAQ',
        text: '客服',
        imageMode: 'scaleToFill',
      },
    ],

    tabsCount6: [
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
      {
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
      },
      {
        icon: 'HeartOutline',
        activeIcon: 'HeartFill',
        text: '喜欢',
      },
    ],

    tabsIndex: 0,
    tabsBadgeIndex: 1,
    tabsImageIndex: 2,
    tabsColorIndex: 0,
    tabsCount6Index: 1,
  },
  handleChangeTabs(_, index) {
    this.setData({
      tabsIndex: index,
    });
    my.alert({
      title: 'onTap',
      content: `点击了第 ${index + 1} 个 tab`,
    });
  },
  handleChangeTabsBadge(_, index) {
    this.setData({
      tabsBadgeIndex: index,
    });
  },
  handleChangeTabsImage(_, index) {
    this.setData({
      tabsImageIndex: index,
    });
  },
  handleChangeTabsColor(_, index) {
    this.setData({
      tabsColorIndex: index,
    });
  },
  handleChangeTabsCount6(_, index) {
    this.setData({
      tabsCount6Index: index,
    });
  },
});
