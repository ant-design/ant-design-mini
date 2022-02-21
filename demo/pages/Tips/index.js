Page({
  data: {
    image: 'https://gw.alipayobjects.com/zos/rmsportal/AzRAgQXlnNbEwQRvEwiu.png',
    tipsArrow: [
      { name: '', value: '无箭头', checked: true },
      { name: 'top-left', value: 'top-left' },
      { name: 'top-center', value: 'top-center' },
      { name: 'top-right', value: 'top-right' },
      { name: 'left', value: 'left' },
      { name: 'right', value: 'right' },
      { name: 'bottom-left', value: 'bottom-left' },
      { name: 'bottom-center', value: 'bottom-center' },
      { name: 'bottom-right', value: 'bottom-right' },
    ],
    tipsTitle: '这是一个提示框',
    tipsButton: '操作按钮',
    tipsImage: true,
    tipsClose: true,
    arrowPosition: '',
    buttonPosition: 'right',
  },
  onClose() {
    my.alert({
      title: '关闭标签被点击',
      content: 'Tips 组件关闭',
    });
  },
  onButtonTap() {
    my.alert({
      title: '按钮被点击',
      content: '页面中的 onButtonTap 被点击了',
    });
  },
  inputTitle(e) {
    this.setData({
      tipsTitle: e.detail.value,
    });
  },
  inputButtonText(e) {
    this.setData({
      tipsButton: e.detail.value,
    });
  },
  tipsImageSwitch(e) {
    this.setData({
      tipsImage: e.detail.value,
    });
  },
  tipsCloseSwitch(e) {
    this.setData({
      tipsClose: e.detail.value,
    });
  },
  tipsArrowChange(e) {
    this.setData({
      arrowPosition: e.detail.value,
    });
  },
  tipsButtonPosition(e) {
    this.setData({
      buttonPosition: e.detail.value === true ? 'bottom' : 'right',
    });
  },
});
