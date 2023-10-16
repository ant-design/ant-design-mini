Page({
  data: {
    items: [],
  },
  onLoad() {
    this.setData({ items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(u => { return { label: u } }) });
  },
});
