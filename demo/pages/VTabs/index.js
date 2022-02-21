Page({
  data: {
    index: 3,
    getVtabIndex: 0,
    newHeight: 100,
  },
  onLoad() {
    this.setData({
      getVtabIndex: this.data.index,
    });
  },
  onChange(idx) {
    this.setData({
      getVtabIndex: idx,
      index: idx,
    });
  },
  changeHeight() {
    this.setData({
      newHeight: this.data.newHeight + 20,
    });
  },
});
