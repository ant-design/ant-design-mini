Page({
  data: {
    toastShow: false,
    content1: "最长文案超过2行，最多可以显示24个字符。",
    content2: "加载中",
    content3: "这个提示持续时间3s",
    content4: "这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的文案",
    content5: "欢迎使用新版本",
    toast1Show: false,
    toast2Show: false,
    toast3Show: false,
    toast4Show: false,
    toast5Show: false,
    toast6Show: false,
    icon2: "LikeOutline",
    image1: 'https://gw.alipayobjects.com/mdn/rms_5118be/afts/img/A*4NPGQ66arP0AAAAAAAAAAAAAARQnAQ'
  },

  handleShowToast(e) {
    const { index }  = e.target.dataset;
    this.setData({
      toast1Show: false,
      toast2Show: false,
      toast3Show: false,
      toast4Show: false,
      toast5Show: false,
      toast6Show: false,
    })

    this.setData({
      [`toast${index}Show`]: true
    })

    console.log(this.data)
  },

  handleCloseToast(e) {
    const { index }  = e.target.dataset;
    this.setData({
      [`toast${index}Show`]: false
    })
  }
});
