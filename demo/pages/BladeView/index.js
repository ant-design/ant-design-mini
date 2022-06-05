const getRandomList = (min, max) => {
  return new Array(Math.floor(Math.random() * (max - min) + min)).fill('');
};
const groups = Array(26)
  .fill('')
  .map((_, i) => ({
    title: `${String.fromCharCode('A'.charCodeAt(0) + i)}`,
    key: String.fromCharCode('A'.charCodeAt(0) + i),
    items: getRandomList(3, 10).map((_, idx) => ({
      label: `${String.fromCharCode('A'.charCodeAt(0) + i)}-${idx + 1}`,
      value: `${String.fromCharCode('A'.charCodeAt(0) + i)}-${idx + 1}`,
    })),
  }));

Page({
  data: {
    groups,
    value: '',
  },
  onChange(item) {
    this.setData({ value: item.value });
    my.confirm(({
      content: `你当前选择的选项为${item.label}，对应值为${item.value}`
    }))
  },
});