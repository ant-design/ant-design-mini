import { Form } from '../../../../src/Form/form';

Page({
  data: {
    position: 'horizontal',
    fruitList: ['苹果', '香蕉', '橘子', '西瓜'],
  },
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
  toggle() {
    this.setData({
      position: this.data.position === 'horizontal' ? 'vertical' : 'horizontal',
    });
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
