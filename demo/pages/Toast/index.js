Page({
  data: {
    toastShow: false,
    content1: "最长文案超过2行，最多可以显示24个字符。",
    content2: "加载中",
    content3: "这个提示持续时间3s",
    content4: "这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文案",
    toast1Show: true,
    toast2Show: false,
    toast3Show: false,
    toast4Show: false,
    icon2: "MoreOutline"
  },
  handleShowToast1 () {
    this.setData({
      toast1Show: true,
      toast2Show: false,
      toast3Show: false,
      toast4Show: false,
    })
  },
  handleShowToast2 () {
    this.setData({
      toast1Show: false,
      toast2Show: true,
      toast3Show: false,
      toast4Show: false,
    })
  },
  handleShowToast3 () {
    this.setData({
      toast1Show: false,
      toast2Show: false,
      toast3Show: true,
      toast4Show: false,
    })
  },
  handleShowToast4 () {
    this.setData({
      toast1Show: false,
      toast2Show: false,
      toast4Show: true,
      toast3Show: false,
    })
  }
});
