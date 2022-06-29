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
    selectValue: undefined,
  },
  onSelectItem(item) {
    this.setData({ selectValue: item.value });
  },
});