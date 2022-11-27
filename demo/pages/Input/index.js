Page({
  data: {
    value: '',
    money: '',
    focus: false,
  },
  onChange(value, e) {
    console.log(value, e);
  },
  handleChange(value) {
    this.setData({
      value,
    });
  },
  handleMoney(value) {
    console.log(value);
    if (isNaN(Number(value))) {
      return;
    }
    this.setData({
      money: value,
    })
  },
  clear() {
    this.setData({
      value: '',
    });
  },
  handleRef(ref) {
    this.input = ref;
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
});
