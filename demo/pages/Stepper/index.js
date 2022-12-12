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
      value: (this.data.value || 0) + 1,
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
  handleAddValue() {
    this.setData({ value: this.data.value + 1 });
  },
  handleMinusValue() {
    this.setData({ value: this.data.value - 1 });
  },
});
