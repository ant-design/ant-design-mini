Page({
  data: {
    image:
      'https://gw.alipayobjects.com/zos/rmsportal/AzRAgQXlnNbEwQRvEwiu.png',
    tipsArrow: [
      { label: '', value: '0' },
      { label: 'top-left', value: '1' },
      { label: 'top-center', value: '2' },
      { label: 'top-right', value: '3' },
      { label: 'left', value: '4' },
      { label: 'right', value: '5' },
      { label: 'bottom-left', value: '6' },
      { label: 'bottom-center', value: '7' },
      { label: 'bottom-right', value: '8' },
    ],
    title: '这是一个提示框',
    buttonText: '操作按钮',
    showImage: true,
    showClose: true,
    arrowPosition: '2',
    buttonPosition: 'right',
  },
  handleChangeShowImage(checked) {
    this.setData({ showImage: checked });
  },
  handleChangeShowClose(checked) {
    this.setData({ showClose: checked });
  },
  handleChangeTitle(value) {
    this.setData({ title: value });
  },
  handleChangeButtonText(value) {
    this.setData({ buttonText: value });
  },
  handleChangeButtonPosition(value) {
    this.setData({ buttonPosition: value });
  },
  handleChangeArrowPosition(value) {
    this.setData({ arrowPosition: value });
  },
  handleClose() {
    my.alert({
      title: '关闭标签被点击',
      content: 'Tips 组件关闭',
    });
  },
  handleTapBtn() {
    my.alert({
      title: '按钮被点击',
      content: '页面中的 onButtonTap 被点击了',
    });
  },
});
