import { Form } from '../../../src/Form/form';

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
    if (!this.formRefList) {
      this.formRefList = [];
    }
    this.formRefList.push(ref.detail);
    /// #endif
  },
  reset() {
    this.form.reset();
  },
  submit() {
    this.form.submit().then(values => {
      /// #if ALIPAY
      my.alert({
        title: '提交',
        content: JSON.stringify(values),
      });
      /// #endif
      console.log(values);
    });
  },
});
