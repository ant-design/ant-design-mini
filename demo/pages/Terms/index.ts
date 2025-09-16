Page({
  data: {
    buttons1: [
      {
        text: '同意协议 + 行动点描述',
        type: 'primary',
      },
      {
        text: '取消',
        aide: true,
        type: 'default',
      },
    ],
    buttons2: [
      {
        text: '行动点描述',
        type: 'primary',
      },
    ],
    buttons3: [
      {
        text: '请阅读全部协议',
        disabled: true,
        type: 'primary',
        countdownTime: 30,
      },
    ],
    terms: [
      {
        name: '《用户协议》',
        key: 'user',
      },
    ],
    terms3: [
      {
        name: '《用户协议》',
        key: 'user',
      },
      {
        name: '《隐私协议》',
        key: 'private',
      },
      {
        name: '《网络协议》',
        key: 'internet',
      },
    ],
    checkboxTipsVisible: false,
    readCurrent: 1,
  },
  handleButtonTap(item, index, checked, event) {
    /// #if ALIPAY
    console.log(item, index, checked, event);
    my.showToast({ content: `点击了第 ${index + 1} 个按钮` });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个按钮` });
    /// #endif
  },
  handleButton2Tap(item, index, checked) {
    /// #if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
    /// #endif
    /// #if WECHAT
    this.setData({ checkboxTipsVisible: !item.detail[2] });
    /// #endif
  },
  handleTermTap(item, index, event) {
    /// #if ALIPAY
    console.log(item, index, event);
    my.showToast({ content: `点击了第 ${index + 1} 个协议` });
    /// #endif
    /// #if WECHAT
    // @ts-ignore
    wx.showToast({ title: `点击了第 ${item.detail[1] + 1} 个协议` });
    /// #endif
  },
  handleCheckChange(checked) {
    console.log('handleCheckChange', checked);
    /// #if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
    /// #endif
    /// #if WECHAT
    this.setData({ checkboxTipsVisible: !checked.detail });
    if (checked.detail) {
      this.setData({ checkboxTipsVisible: false });
    }
    /// #endif
  },
  handleTermPrefixTap(checked) {
    console.log('handleTermPrefixTap', checked);
    /// #if ALIPAY
    this.setData({ checkboxTipsVisible: !checked });
    if (checked) {
      this.setData({ checkboxTipsVisible: false });
    }
    /// #endif
    /// #if WECHAT
    this.setData({ checkboxTipsVisible: !checked.detail });
    if (checked.detail) {
      this.setData({ checkboxTipsVisible: false });
    }
    /// #endif
  },
  handleCountdownFinish(item, index) {
    console.log('handleCountdownFinish', item, index);
    this.setData({
      buttons3: this.data.buttons3.map((button, idx) =>
        idx === index
          ? { ...button, text: '同意协议 + 行动点描述', disabled: false }
          : button
      ),
    });
  },
  handleReadChange(current) {
    console.log('handleReadChange', current);
    /// #if WECHAT
    current = current.detail;
    /// #endif
    this.tap = true;
    this.setData({
      scrollTop:
        this.itemRectList[current].top -
        this.scrollViewRect.top +
        Math.random(),
    });
  },
  async onReady() {
    await this.updateRect();
  },
  async onImageLoad() {
    await this.updateRect();
  },
  async updateRect() {
    this.itemRectList = await Promise.all(
      this.data.terms3.map((item, index) =>
        this.getBoundingClientRect(`#term-content-${index}`)
      )
    );
    this.scrollViewRect = await this.getBoundingClientRect('#scroll-view');
  },
  onTouchStart() {
    this.tap = false;
  },
  onScroll(e) {
    if (this.tap) {
      return;
    }
    this.scrollTop = e.detail.scrollTop;
    const scrollTop = this.scrollTop + this.itemRectList[0].top;
    for (let i = 0; i < this.itemRectList.length; i++) {
      const item = this.itemRectList[i];
      if (
        scrollTop > item.top &&
        (!this.itemRectList[i + 1] ||
          scrollTop < this.itemRectList[i + 1].top) &&
        i !== this.data.readCurrent
      ) {
        this.setData({
          readCurrent: i,
        });
        return;
      }
    }
  },
  onScrollToLower() {
    console.log('触底');
  },
  getBoundingClientRect(id) {
    if (typeof my === 'undefined') {
      return this.getInstanceBoundingClientRect(this, id);
    }
    return this.getInstanceBoundingClientRect(my, id);
  },
  getInstanceBoundingClientRect(instance, selector) {
    return new Promise((resolve) => {
      instance
        .createSelectorQuery()
        .select(selector)
        .boundingClientRect()
        .exec((ret) => {
          if (ret && ret[0]) {
            resolve(ret[0]);
          }
        });
    });
  },
});
