Page({
  data: {
    items2: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
    ],
    items3: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '公积金',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
      },
    ],
    items4: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '公积金',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '出行',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*now3Q4h5DH8AAAAAAAAAAAAAARQnAQ',
      },
    ],
    items5: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '公积金',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '出行',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*now3Q4h5DH8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '医疗健康',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*I27zQbOu8ScAAAAAAAAAAAAAARQnAQ',
      },
    ],
    items3withDesc: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '公积金',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
      },
    ],
    items2withDesc: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
    ],
    itemsCustom: [
      {
        title: '生活缴费',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*MwsuTZI4qA8AAAAAAAAAAAAAARQnAQ',
        tag: '1',
      },
      {
        title: '市民中心',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*xXRcRohQFc0AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '公积金',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*UJf2QLxdoa8AAAAAAAAAAAAAARQnAQ',
        tag: '新',
      },
      {
        title: '出行',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*now3Q4h5DH8AAAAAAAAAAAAAARQnAQ',
      },
      {
        title: '医疗健康',
        icon: 'https://gw.alipayobjects.com/mdn/rms_3a7189/afts/img/A*I27zQbOu8ScAAAAAAAAAAAAAARQnAQ',
      },
    ],
    items5More: [],
  },
  onLoad() {
    const { items5 } = this.data;
    this.setData({
      scrollItems: this.data.items4.concat(this.data.items4),
      items5More: [...items5, ...items5],
    });
  },
  handleTapItem(item) {
    /// #if ALIPAY || BUNDLE2H
    my.alert({ title: '点击了', content: JSON.stringify(item) });
    /// #endif

    /// #if WECHAT
    //@ts-ignore
    wx.showToast({
      title: '点击',
    });
    /// #endif
  },
});
