Page({
  data: {
    value: 0,
  },
  handleChange(value, dataSet) {
    this.setData({ value });
    console.log(dataSet)
  },
  handleAddValue() {
    this.setData({ value: this.data.value + 1 });
  },
  handleMinusValue() {
    this.setData({ value: this.data.value - 1 });
  },
});
