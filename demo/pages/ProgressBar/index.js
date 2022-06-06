Page({
  data: {
    progress1: 0.1,
    progress2: 0.5,
    progress3: 0.5,
    progress4: 0.5,
  },
  handleInputChange1 (num) {
    this.setData({
      progress1: +num
    })
  },
  handleInputChange2 (num) {
    this.setData({
      progress2: +num
    })
  },
  handleInputChange3 (num) {
    this.setData({
      progress3: +num
    })
  },
  handleInputChange4 (num) {
    this.setData({
      progress4: +num
    })
  }
});
