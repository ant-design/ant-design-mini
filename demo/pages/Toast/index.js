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
    toast5Show: false,
    icon2: "MoreOutline",
    image1: `url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%2224%2024%2048%2048%22%3E%3CanimateTransform%20attributeName%3D%22transform%22%20type%3D%22rotate%22%20repeatCount%3D%22indefinite%22%20from%3D%220%22%20to%3D%22360%22%20dur%3D%221400ms%22%3E%3C%2FanimateTransform%3E%3Ccircle%20cx%3D%2248%22%20cy%3D%2248%22%20r%3D%2220%22%20fill%3D%22none%22%20stroke%3D%22%23FFF%22%20stroke-width%3D%222%22%20transform%3D%22translate%5C(0%2C0%5C)%22%3E%3Canimate%20attributeName%3D%22stroke-dasharray%22%20values%3D%221px%2C%20200px%3B100px%2C%20200px%3B100px%2C%20200px%22%20dur%3D%221400ms%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3Canimate%20attributeName%3D%22stroke-dashoffset%22%20values%3D%220px%3B-15px%3B-125px%22%20dur%3D%221400ms%22%20repeatCount%3D%22indefinite%22%3E%3C%2Fanimate%3E%3C%2Fcircle%3E%3C%2Fsvg%3E");`
  },
  handleShowToast1 () {
    this.setData({
      toast1Show: true,
      toast2Show: false,
      toast3Show: false,
      toast4Show: false,
      toast5Show: false
    })
  },
  handleShowToast2 () {
    this.setData({
      toast1Show: false,
      toast2Show: true,
      toast3Show: false,
      toast4Show: false,
      toast5Show: false
    })
  },
  handleShowToast3 () {
    this.setData({
      toast1Show: false,
      toast2Show: false,
      toast3Show: true,
      toast4Show: false,
      toast5Show: false
    })
  },
  handleShowToast4 () {
    this.setData({
      toast1Show: false,
      toast2Show: false,
      toast4Show: true,
      toast3Show: false,
      toast5Show: false
    })
  },
  handleShowToast5 () {
    this.setData({
      toast1Show: false,
      toast2Show: false,
      toast4Show: false,
      toast3Show: false,
      toast5Show: true,
    })
  }
});
