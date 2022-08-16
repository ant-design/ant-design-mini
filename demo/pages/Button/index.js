Page({
  data: {
    list: [
      { type: 'default' },
      { type: 'primary' },
      { type: 'warn' },
      { type: 'danger' },
      { type: 'success' },
      { type: 'light' },
    ],
  },
  handleTap(e) {
    console.log('e', e)
    my.alert({
      title: '点击按钮'
    })
  }
});
