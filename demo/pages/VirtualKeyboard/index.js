Page({
  data: {
    value1: '',
    focus1: '',
    focus2: '',
    focus3: '',
  },
  onChangeValue1(val) {
    this.setData({ value1: val });
  },
  onFocus1() {
    this.setData({ focus1: true, focus2: false, focus3: false });
  },
  onBlur1() {
    this.setData({ focus1: false });
  },
  onFocus2() {
    this.setData({ focus1: false, focus2: true, focus3: false });
  },
  onFocus3() {
    this.setData({ focus1: false, focus2: false, focus3: true });
  },
});
