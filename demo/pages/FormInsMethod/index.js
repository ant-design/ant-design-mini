const initialValues = {
  account: '',
  password: '',
};
Page({
  data: {
    form: 'form',
    initialValues,
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
    this.formRef.setFieldsValue(initialValues);
  },
});
