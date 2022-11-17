Page({
  data: {
    items: [],
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
});