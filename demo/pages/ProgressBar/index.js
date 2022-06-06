Page({
  data: {
    progress1: 10,
    progress2: 50,
    progress3: 50,
    progress4: 50,
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
