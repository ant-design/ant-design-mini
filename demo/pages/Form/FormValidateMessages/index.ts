import { Form } from '../../../../src/Form/form';

const validateMessages = {
  required: '需要输入${label}',
  string: {
    min: '${label}最少${min}个字符',
  },
  pattern: {
    mismatch: '${label}需要满足${pattern}',
  },
};

Page({
  onLoad() {
    this.form = new Form({
      validateMessages,
      rules: {
        account: [
          {
            required: true,
            min: 6,
          },
        ],
        password: [
          {
            required: true,
          },
        ],
        ip: [
          {
            required: true,
            pattern:
              /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,
          },
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
    /// #if ALIPAY || BUNDLE2H
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

    /// #if ALIPAY || BUNDLE2H
    my.alert({
      title: '提交',
      content: JSON.stringify(values),
    });
    /// #endif
  },
});
