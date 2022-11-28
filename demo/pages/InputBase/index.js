Page({
  data: {
    value: undefined,
    focus: false,
  },
  randomValue() {
    this.setData({
      value: Math.random(),
    });
  },
  clear() {
    this.setData({
      value: '',
    });
  },
  focus() {
    this.setData({
      focus: true,
    });
  },
  blur() {
    this.setData({
      focus: false,
    });
  },
  onChange(value) {
    console.log(value);
  },
  handleChange(value) {
    console.log(value);
    if (!isNaN(Number(value))) {
      this.setData({
        value,
      });
    }
  },
});
