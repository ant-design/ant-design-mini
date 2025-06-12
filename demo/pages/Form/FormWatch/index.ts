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
  data: {
    changedValuesText: '',
    allValuesText: '',
  },
  onReady() {
    this.form.onValuesChange((changedValues, allValues) => {
      let changedValuesText = '';
      let allValuesText = '';
      Object.keys(changedValues).forEach((name) => {
        const value = changedValues[name];
        changedValuesText += `${name}: ${value};`;
      });

      Object.keys(allValues).forEach((name) => {
        const value = allValues[name];
        allValuesText += `${name}: ${value};`;
      });
      this.setData({
        changedValuesText,
        allValuesText,
      });
    });
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
    this.setData({
      changedValuesText: '',
      allValuesText: '',
    });
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
