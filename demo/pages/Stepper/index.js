Page({
  data: {
    
  },
  onChange(value) {
    console.log(value);
  },
  handleChange(value) {
    console.log(value);
    this.setData({
      value,
    });
  },
  add() {
    this.setData({
      value: this.data.value + 1,
    });
  },
  minus() {
    this.setData({
      value: this.data.value - 1,
    });
  },
  clear() {
    this.setData({
      value: null,
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
  handleAddValue() {
    this.setData({ value: this.data.value + 1 });
  },
  handleMinusValue() {
    this.setData({ value: this.data.value - 1 });
  },
});
