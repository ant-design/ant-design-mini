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
  },
  handleRef(ref) {
    /// #if ALIPAY
    this.form.addItem(ref);
    /// #endif

    /// #if WECHAT
    if (this.form) {
      this.form.addItem(ref.detail);
    } else if (!this.formRefList) {
      this.formRefList = [ref.detail];
    } else {
      this.formRefList.push(ref.detail);
    }
    /// #endif
  },
  data: {
    needFruit: false,
  },
  onChange(value) {
    /// #if ALIPAY
    this.setData({
      needFruit: value,
    });
    /// #endif

    /// #if WECHAT
    this.setData({
      needFruit: value.detail,
    });
    /// #endif
  },
  reset() {
    this.setData({
      needFruit: false,
    });
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
