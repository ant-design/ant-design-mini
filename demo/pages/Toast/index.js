Page({
  data: {
    toastShow: false,
    content1: "这是一个很长很长很长很长很长很长很长很长很长的文案",
    content2: "加载中",
    content3: "这个提示持续时间3s",
    toast1Show: true,
    toast2Show: false,
    toast3Show: false,
    icon2: "HeartOutline"
  },
  handleShowToast1 () {
    this.setData({
      toast1Show: true,
      toast2Show: false,
      toast3Show: false
    })
  },
  handleShowToast2 () {
    this.setData({
      toast1Show: false,
      toast2Show: true,
      toast3Show: false
    })
  },
  handleShowToast3 () {
    this.setData({
      toast1Show: false,
      toast2Show: false,
      toast3Show: true
    })
  }
});
