Page({
  data: {
    items1: [
      { text: '选项一', value: '1' },
      { text: '选项二', value: '2' },
      { text: '选项三', value: '3' }],
    items2: [
      { text: '选项一', subText: '副标题一', value: '1' },
      { text: '选项二', subText: '副标题二', value: '2' },
      { text: '选项三', subText: '副标题三', value: '3' }],
    items3: [
      { text: '选项一', subText: '副标题一', value: '1' },
      { text: '选项二', subText: '副标题二', value: '2', disabled: true },
      { text: '选项三', subText: '副标题三', value: '3' }],
    items: [
      {
        text: '选项一',
        value: '1',
      },
      {
        text: '选项二',
        subText: '描述文案 2',
        value: '2',
      },
      {
        text: '选项三',
        disabled: true,
        value: '3',
      },
      {
        text: '选项四',
        subText: '描述文案 4',
        disabled: true,
        value: '4',
      },
      {
        text: '选项五',
        subText: '描述文案 5',
        value: '5',
      },
    ],
    value: '1',
  },
  changeValue(e) {
    const { value } = e.currentTarget.dataset;
    this.setData({
      value,
    });
  },
  onChange(e) {
    this.setData({
      value: e,
    });
  },
});
