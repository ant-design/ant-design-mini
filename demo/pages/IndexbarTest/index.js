Page({
  data: {
    items: [],
    scrollId: '',
    topRange: [],
    current: 'A'
  },
  onLoad() {
    this.setData({ items: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('') });
    this.initTopRange();
  },
  onChange(e) {
    this.setData({ scrollId: `amd-indexbar-${e}` })
  },
  onScroll(e) {
    const { current, topRange, items } = this.data;
    const { scrollTop } = e.detail;
    const _current = topRange.findIndex((item) => scrollTop < item - 1);
    if (current !== _current - 1 && _current - 1 >= 0) {
      this.setData({ current: items[_current - 1] });
    }
  },
  initTopRange() {
    my.createSelectorQuery()
      .selectAll('.amd-indexbar-list')
      .boundingClientRect()
      .exec((ret: any) => {
        const arr = []
        ret[0].forEach((u) => {
          arr.push(u.top - ret[0][0].top);
        });
        this.setData({ topRange: arr });
      });
  }
});
