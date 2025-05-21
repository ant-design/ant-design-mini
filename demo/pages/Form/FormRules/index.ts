import { Form } from '../../../../src/Form/form';

Page({
  onLoad() {
    this.form = new Form({
      rules: {
        password: [
          {
            required: true,
            message: '需要输入密码',
          },
        ],
        confirm: [
          {
            required: true,
            message: '需要输入确认密码',
          },
          (form) => ({
            async validator(_, value) {
              if (!value || form.getFieldValue('password') === value) {
                return;
              }
              throw new Error('验证密码需要跟密码相同');
            },
          }),
        ],
      },
    });
    /// #if WECHAT
    if (this.formRefList) {
      this.formRefList.forEach((ref) => {
        this.form.addItem(ref);
      });
    }
    /// #endif
  },
  handleRef(ref) {
    /// #if ALIPAY || ALIPAYNATIVE
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
  fill() {
    this.form.setFieldValue('account', 'lily');
    this.form.setFieldValue('password', '1234');
    this.form.setFieldValue('confirm', '1234');
  },
  async submit() {
    const values = await this.form.submit();

    /// #if ALIPAY || ALIPAYNATIVE
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
    /// #endif

    console.log(values);
  },
});
