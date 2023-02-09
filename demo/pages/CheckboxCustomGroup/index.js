Page({
  data: {
    value: [],
  },
  onChange(checked, e) {
    let { value } = this.data;
    if (checked) {
      value = [...value, e.target.dataset.value];
    } else {
      value = value.filter((v) => v !== e.target.dataset.value);
    }
    this.setData({ value });
    console.log(value);
  },
});
