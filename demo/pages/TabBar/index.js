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
        icon: 'https://gw.alipayobjects.com/mdn/industry_lifee/afts/img/A*rF7uRZrUpiEAAAAAAAAAAAAAARQnAQ',
        activeIcon:
          'https://gw.alipayobjects.com/mdn/industry_lifee/afts/img/A*a29CQa2-9VIAAAAAAAAAAAAAARQnAQ',
        text: '导航',
      },
      {
        icon: 'https://gw.alipayobjects.com/mdn/industry_lifee/afts/img/A*lZCJTa_1JSYAAAAAAAAAAAAAARQnAQ',
        activeIcon:
          'https://gw.alipayobjects.com/mdn/industry_lifee/afts/img/A*W7e3R58X0XkAAAAAAAAAAAAAARQnAQ',
        text: '我的',
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

    current: 0,
  },
  handleChange(index) {
    this.setData({ current: index });
  },
});
