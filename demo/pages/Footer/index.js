Page({
  data: {
    url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*MRnUS5N-0TEAAAAAAAAAAAAAARQnAQ',
  },
  linkTap(e) {
    my.alert({
      title: 'onLinkTap 回调',
      content: e,
    });
  },
});