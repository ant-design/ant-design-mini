Page({
  data: {
    checked: false,
  },
  onChange(checked, e) {
    console.log('change checked', checked, 'e', e)
  },
  handleChange(checked, e) {
    this.setData({
      checked,
    });
  }
});
