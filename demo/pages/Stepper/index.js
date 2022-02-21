Page({
  data: {
    value: 5.98,
  },
  callBackFn(value) {
    my.alert({
      title: `value: ${value}`,
    });
  },
  modifyValue() {
    this.setData({
      value: 9,
    });
  },
});
