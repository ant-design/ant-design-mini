let index = 0;
Page({
  data: {
    randomLine: 1,
    name: ['item-1'],
  },
  onTap() {
    index += 1;
    const name = [`item-${index % 3}`, `item-${(index - 1) % 3}`];
    this.setData({
      name: [...name],
    });
  },
  onChange(e) {
    my.showToast({
      content: `当前展开的元素: ${e}`,
    });
  },
});
