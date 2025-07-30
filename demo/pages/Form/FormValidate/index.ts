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
    if (!this.formRefList) {
      this.formRefList = [];
    }
    this.formRefList.push(ref.detail);
    /// #endif
  },
  reset() {
    this.form.reset();
  },
  onReady() {
    setTimeout(() => {
      // 填入表单及校验
      this.form.setFieldValue('fruit', '橘子');
      this.form.setFieldValidatorStatus('fruit', {
        status: 'error',
        errors: ['后台服务返回: 橘子还在进货，请换一个'],
      });
    });
  },
  async submit() {
    const values = await this.form.submit();

    /// #if ALIPAY
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
    /// #endif
  },
});
