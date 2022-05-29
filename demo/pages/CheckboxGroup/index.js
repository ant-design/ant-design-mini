Page({
  data: {
    value: ['orange'],
    list: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
      { value: 'banner', label: '香蕉' },
    ],
  },

  onHanleChange() {
    this.setData({
      value: ['orange', 'banner']
    })
  },
  handleChange(value) {
    console.log('onChange', value);
  },
});
