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
        icon: 'AlipayCircleFill',
        activeIcon: 'AlipayCircleFill',
        text: '首页',
      },
      {
        type: 'image',
        icon: 'https://gw.alipayobjects.com/mdn/rms_616c05/afts/img/A*lyJlRJMLJEEAAAAAAAAAAAAAARQnAQ',
        activeIcon:
          'https://gw.alipayobjects.com/mdn/rms_616c05/afts/img/A*lyJlRJMLJEEAAAAAAAAAAAAAARQnAQ',
        text: '新车报价',
      },
      {
        type: 'image',
        icon: 'https://gw.alipayobjects.com/mdn/rms_616c05/afts/img/A*lyJlRJMLJEEAAAAAAAAAAAAAARQnAQ',
        activeIcon:
          'https://gw.alipayobjects.com/mdn/rms_616c05/afts/img/A*lyJlRJMLJEEAAAAAAAAAAAAAARQnAQ',
        text: '新车报价',
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
    my.alert({
      title: 'onTap',
      content: `点击了第 ${index + 1} 个 tab`,
    });
  },
  handleChangeTabsCount6(_, index) {
    this.setData({
      tabsCount6Index: index,
    });
  },
});
