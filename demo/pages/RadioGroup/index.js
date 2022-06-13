Page({
  data: {
    list: [
      { value: 'apple', label: '苹果' },
      { value: 'orange', label: '橘子' },
      { value: 'banana', label: '香蕉' },
    ],
  },
  handleChange(e) {
    console.log(e);
  },
});
