Page({
  data: {
    items1: [
      { text: '选项一', value: '1' },
      { text: '选项二', value: '2' },
      { text: '选项三', value: '11' },
    ],
    items2: [
      { text: '选项一', subText: '描述文案一', value: '1' },
      { text: '选项二', subText: '描述文案二', value: '2' },
      { text: '选项三', subText: '描述文案三', value: '3' },
    ],
    items3: [
      { text: '选项一', subText: '描述文案一', value: '1' },
      { text: '选项二', subText: '描述文案二', value: '2', disabled: true },
      { text: '选项三', subText: '描述文案三', value: '3' },
    ],
    value: '1',
  },
  handleChangeValue(e) {
    const { value } = e.currentTarget.dataset;
    this.setData({
      value,
    });
  },
  handleChange(value, items, e) {
    this.setData({
      value,
    });
    console.log(value, items, e);
  },
  onSelectMin(value, item) {
    console.log(value, item);
    my.alert({ content: '不允许清空' });
  },
});
