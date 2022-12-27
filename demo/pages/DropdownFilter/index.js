Page({
  data: {
    current: -1,
    items: [
      {
        title: '选项一',
        selectorItems: [
          { text: '选项一', value: '1' },
          { text: '选项二', value: '2' },
          { text: '选项三', value: '3' },
        ],
      },
      {
        title: '选项二',
        selectorItems: [
          { text: '选项一', value: '1' },
          { text: '选项二', value: '2' },
          { text: '选项三', value: '3' },
          { text: '选项四', value: '4' },
          { text: '选项五', value: '5' },
          { text: '选项六', value: '6' },
        ],
      },
    ],
  },
  handleChange(index) {
    console.log('onChange', index);
    this.setData({ current: index });
  },
  handleSelectorChange(value, e) {
    console.log('changeSelector', value, e);
    this.setData({
      current: -1,
    });
  },
});
