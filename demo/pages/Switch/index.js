Page({
  onChange(checked, e) {
    console.log(checked)
  },
  handleChange(checked, e) {
    console.log(checked);
    this.setData({
      checked,
    });
  }
});
