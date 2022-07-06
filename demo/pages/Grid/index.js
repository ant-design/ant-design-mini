const items = [
  {
    title: '话费查询',
    icon: 'https://gw.alipayobjects.com/mdn/rms_f0bad2/afts/img/A*4QedQpoCyokAAAAAAAAAAABkARQnAQ',
  },
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_f0bad2/afts/img/A*e2P5SLSUjjMAAAAAAAAAAABkARQnAQ',
    title: '宽带办理',
  },
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_f0bad2/afts/img/A*XQh3S4Xp5I0AAAAAAAAAAABkARQnAQ',
    title: '话费卡转让',
  },
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_f0bad2/afts/img/A*g5HFRYGFNr0AAAAAAAAAAABkARQnAQ',
    title: '积分商城',
  },
  {
    icon: 'https://gw.alipayobjects.com/mdn/rms_f0bad2/afts/img/A*-PvLQp-4jcAAAAAAAAAAAABkARQnAQ',
    title: '更多服务',
  },
];
Page({
  data: {
    items,
    iconItems: [
      {
        title: 'FireFill',
        icon: 'FireFill',
      },
      {
        icon: 'StarFill',
        title: 'StarFill',
      },
      {
        icon: 'SmileFill',
        title: 'SmileFill',
      },
      {
        icon: 'FrownFill',
        title: 'FrownFill',
      },
      {
        icon: 'EyeFill',
        title: 'EyeFill',
      },
    ],
    circleItems: items.map((v, i) => ({
      title: '元素' + (i + 1),
      icon: 'https://gw.alipayobjects.com/mdn/rms_5118be/afts/img/A*Xt9pR6dgh90AAAAAAAAAAAAAARQnAQ',
    })),
    descItems: items.map((v) => ({
      ...v,
      desc: v.title.substring(0, 2) + '描述',
    })),
  },
  handleTapItem(item) {
    my.alert({ title: '点击了', content: JSON.stringify(item) });
  },
});
