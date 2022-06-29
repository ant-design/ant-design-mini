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
        badge: true,
      },
      {
        icon: 'StarOutline',
        activeIcon: 'StarFill',
        text: '收藏',
        badge: true,
        badgeType: 'number',
        badgeText: '99'
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
        icon: 'https://gw.alipayobjects.com/mdn/rms_d75401/afts/img/A*kgPpSZndq70AAAAAAAAAAAAAARQnAQ',
        activeIcon: 'https://gw.alipayobjects.com/mdn/rms_d75401/afts/img/A*kgPpSZndq70AAAAAAAAAAAAAARQnAQ',
        text: '新车报价',
      },
      {
        type: 'image',
        icon: 'https://gw.alipayobjects.com/mdn/rms_d75401/afts/img/A*kgPpSZndq70AAAAAAAAAAAAAARQnAQ',
        activeIcon: 'https://gw.alipayobjects.com/mdn/rms_d75401/afts/img/A*kgPpSZndq70AAAAAAAAAAAAAARQnAQ',
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
  },
  handleChange(_, index) {
    my.alert({
      title: 'onTap',
      content: `点击了第 ${index + 1} 个 tab`,
    });
  },
});
