Page({
  data: {
    index: 0,
    getVtabIndex: 0,
    newHeight: 100,
  },
  onLoad() {
    this.setData({
      getVtabIndex: this.data.index || 0,
    });
  },
  onChange(idx) {
    this.setData({
      getVtabIndex: idx,
      index: idx,
    });
  },
});
