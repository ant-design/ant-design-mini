Page({
  data: {
    loading: true,
  },
  onLoad() {
    setTimeout(() => {
      this.setData({
        loading: false,
        title: '自定义标题',
        message: '自定义详情',
        image: 'https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*avTGQIyeHk0AAAAAAAAAAAAADj16AQ/original',
      });
    }, 1000);
  },
  handleActionTap(e) {
    my.alert({
      content: '按钮点击'
    });
  },
  handleSecondaryActionTap(e) {
    my.alert({
      content: '次要按钮点击'
    });
  }
});
