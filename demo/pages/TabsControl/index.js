const items = [];
for (let i=0;i<10;i++) {
  items
}

Page({
  data: {
    current: 0,
    items: []
  },
  onLoad() {
    const items = new Array(10).fill(null).map((_, index) => {
      return {
        title: `Tab ${index}`,
        content: `Content of tab ${index}`,
      };
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
  onPrevTap() {
    if (this.data.items.length === 0) {
      return;
    }
    const current = this.data.current === 0 ? this.data.items.length - 1 : this.data.current - 1; 
    this.setData({
      current,
    });
  },
  onNextTap() {
    if (this.data.items.length === 0) {
      return;
    }
    const current = this.data.current >= this.data.items.length - 1 ? 0 : this.data.current + 1; 
    this.setData({
      current,
    });
  },
  onAddTap() {
    const items = [...this.data.items];
    items.push({
      title: `Tab ${items.length - 1}`,
      content: `Content of tab ${items.length - 1}`,
    });
    this.setData({
      items,
    });
  },
  onMinusTap() {
    if (this.data.items.length === 0) {
      return;
    }
    const items = [...this.data.items];
    items.splice(0, 1)
    this.setData({
      items,
      current: Math.max(this.data.current - 1, 0),
    });
  }
});