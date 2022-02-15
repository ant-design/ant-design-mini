Page({
  data: {
    value: 'a1',
    disabled: false,
  },
  radioGroupChange(v) {
    // eslint-disable-next-line no-console
    console.log('RadioGroup 的 onChange 回调结果，当前选中的元素为：', v);
  },
  disableAll() {
    this.setData({
      disabled: true,
    });
  },
  enableAll() {
    this.setData({
      disabled: false,
    });
  },
});
