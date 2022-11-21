Page({
  data: {
    value: '',
  },
  onChange(value, e) {
    console.log(value, e);
  },
  handleChange(value) {
    if (isNaN(Number(value))) {
      return;
    }
    console.log(value);
    this.setData({
      value,
    });
  },
  handleClear() {
    this.setData({
      value: '',
    });
  },
  handleRef(ref) {
    this.input = ref;
  },
  focus() {
    this.input.focus();
  },
  blur() {
    this.input.blur();
  },
});
