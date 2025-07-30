import { Form } from '../../../../src/Form/form';

Page({
  onLoad() {
    this.form = new Form();
    /// #if WECHAT
    if (this.formRefList) {
      this.formRefList.forEach((ref) => {
        this.form.addItem(ref);
      });
    }
    /// #endif

    /// #if ALIPAY
    my.showLoading({
      content: '表单加载中...',
    });
    setTimeout(() => {
      this.form.setInitialValues({
        account: 'lily',
        address: 'alipay',
        needDelivery: true,
        quantity: 1,
      });
      this.form.reset();
      my.hideLoading();
    }, 1000);
    /// #endif

    /// #if WECHAT
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    wx.showLoading({
      title: '加载中',
    });
    setTimeout(() => {
      this.form.setInitialValues({
        account: 'lily',
        address: 'alipay',
        needDelivery: true,
        quantity: 1,
      });
      this.form.reset();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      wx.hideLoading();
    }, 1000);
    /// #endif
  },
  handleRef(ref) {
    /// #if ALIPAY
    this.form.addItem(ref);
    /// #endif

    /// #if WECHAT
    if (!this.formRefList) {
      this.formRefList = [];
    }
    this.formRefList.push(ref.detail);
    /// #endif
  },

  reset() {
    this.form.reset();
  },
  async submit() {
    const values = await this.form.submit();
    console.log(values);
    /// #if ALIPAY
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
    /// #endif
  },
});
