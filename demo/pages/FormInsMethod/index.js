Page({
  data: {
    form: 'form',
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleSubmit(e) {
    my.alert({ title: '提交', content: JSON.stringify(e) });
  },
  getForm(ref) {
    this.formRef = ref;
  },
  handleSetValue() {
    this.formRef.setFieldsValue(this.data.form, {
      account: '18888888888',
      password: '666666',
    });
  },
});
