Page({
  data: {
    value1: '',
    focus1: false,
  },
  onLoad() {},
  onChangeValue1(val: string) {
    this.setData({ value1: val });
  },
  onFocus1() {
    this.setData({ focus1: true });
  },
  onBlur1() {
    this.setData({ focus1: false });
  },
});
