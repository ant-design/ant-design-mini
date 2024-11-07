Page({
  data: {
    percent1: 10,
    percent2: 60,
    percent3: 60,
    percent4: 60,
    percent5: 60,
  },
  handleIncrease() {
    const newPercent = this.data.percent1 + 20;
    this.setData({
      percent1: Math.max(Math.min(100, newPercent), 0),
    });
  },
  handleReduce() {
    const newPercent = this.data.percent1 - 20;
    this.setData({
      percent1: Math.max(Math.min(100, newPercent), 0),
    });
  },
});
