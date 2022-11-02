Page({
  data: {
    current: 0,
    items: [],
    visible: false,
  },
  onLoad() {
    const items = new Array(30).fill(null).map((_, index) => {
      return {
        title: `Tab ${index}`,
        content: `Content of tab ${index}`,
      }
    });
    this.setData({
      items,
    });
  },
  onChange(current) {
    this.setData({
      current,
    });
  },
  onVisibleChange() {
    this.setData({
      visible: !this.data.visible,
    })
  },
});