Page({
  data: {
    percent1: 10,
    percent2: 10,
    percent3: 10,
    percent4: 10,
    percent5: 10,
    speed1: 6
  },
  handleInput1Change (e) {
    this.setData({
      percent1: +(e.detail.value)
    })
  },
  handleInput2Change (e) {
    this.setData({
      percent2: +(e.detail.value)
    })
  },
  handleInput3Change (e) {
    this.setData({
      percent3: +(e.detail.value)
    })
  },
  handleInput4Change (e) {
    this.setData({
      percent4: +(e.detail.value)
    })
  },
  handleInput5Change (e) {
    this.setData({
      speed1: +(e.detail.value)
    })
  },
  handleInput6Change (e) {
    this.setData({
      percent5: +(e.detail.value)
    })
  }
});
