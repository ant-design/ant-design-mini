import { Form } from '../../../src/Form/form';

Page({
  onLoad() {
    this.form = new Form();
    this.form2 = new Form();

    /// #if WECHAT
    if (this.formRefList) {
      this.formRefList.forEach((ref) => {
        this.form.addItem(ref);
      });
    }
    if (this.form2RefList) {
      this.form2RefList.forEach((ref) => {
        this.form2.addItem(ref);
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
  handleRef2(ref) {
    /// #if ALIPAY
    this.form2.addItem(ref);
    /// #endif

    /// #if WECHAT
    if (!this.form2RefList) {
      this.form2RefList = [];
    }
    this.form2RefList.push(ref.detail);
    /// #endif
  },
  reset() {
    this.form.reset();
  },
  reset2() {
    this.form2.reset();
  },
  submit() {
    this.form.submit().then(values => {
      /// #if ALIPAY
      my.alert({
        title: '表单1提交',
        content: JSON.stringify(values, null, 2),
      });
      /// #endif
      console.log(values);
    });
  },
  submit2() {
    this.form.submit().then(values => {
      /// #if ALIPAY
      my.alert({
        title: '表单2提交',
        content: JSON.stringify(values, null, 2),
      });
      /// #endif
      console.log(values);
    });
  },
});
