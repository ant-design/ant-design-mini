Page({
  data: {
    percent1: 10,
    percent2: 60,
    percent3: 60,
    percent4: 60,
    percent5: 60,
    speed1: 6
  },
  handleAdd () {
    const newPercent = this.data.percent1 + 20
    this.setData({
      percent1: Math.max(Math.min(100, newPercent), 0)
    })
  },
  handleDelete () {
    const newPercent = this.data.percent1 - 20
    this.setData({
      percent1: Math.max(Math.min(100, newPercent), 0)
    })
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
