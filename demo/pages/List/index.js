Page({
  data: {
    radius: false,
    list: [
      {
        info: '第一个 list-item 被点击',
        image:
          'https://gw.alipayobjects.com/mdn/rms_ce4c6f/afts/img/A*XMCgSYx3f50AAAAAAAAAAABkARQnAQ',
        arrow: 'right',
        content: '第一个 list-item',
      },
      {
        info: '第二个 list-item 被点击',
        image: 'AlipaySquareFill',
        arrow: 'right',
        content: '第二个 list-item',
      },
      {
        info: '第三个 list-item 被点击',
        image: '',
        arrow: 'right',
        content: '第三个 list-item',
      },
    ],
  },
  listClick(e) {
    my.alert({
      title: 'item onTap',
      content: e.currentTarget.dataset.info,
    });
  },
  handleSetRadius(checked) {
    this.setData({
      radius: checked,
    });
  },
});
