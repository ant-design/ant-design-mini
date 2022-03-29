Page({
  data: {
    imageUrl: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*06fDQa9nxDkAAAAAAAAAAAAAARQnAQ'
  },
  onIconTap() {
    my.alert({
      title: 'icon onTap',
      content: '你点击了右上角图标！'
    })
  }
});
