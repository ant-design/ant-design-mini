Page({
  data: {
    visible: true,
    value1: '',
  },
  onLoad() {},
  onInput(e) {
    console.log('gaibain', e);
    this.setData({ value1: e });
  }
});
