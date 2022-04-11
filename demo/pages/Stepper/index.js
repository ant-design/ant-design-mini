Page({
  data: {
    value: 0,
  },
  handleChange(value) {
    this.setData({ value });
  },
  handleAddValue() {
    this.setData({ value: this.data.value + 1 });
  },
  handleMinusValue() {
    this.setData({ value: this.data.value - 1 });
  },
});
