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
  handleRef(input) {
    this.input = input;
  },
  onChange(value) {
    // setTimeout(() => {})
    // this.input.update(value + '1');
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
  clearByInputRef() {
    this.input.update('');
  }
});
