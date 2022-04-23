Page({
  data: {
    formData: {
      money: {
        number: 5,
        currency: 'dollar',
      },
    },
  },
  saveRefForm(ref) {
    this.formRef = ref;
  },
  onFormValuesChange(changedValues, allValues) {
    console.log('changedValues', changedValues, 'allValues', allValues);
  },
  onFinish() {
    const values = this.formRef.getFieldsValue();
    console.log('values', values);
  },
  onChangeField() {
    this.formRef.setFieldsValue({
      money: {
        number: 10,
        currency: 'rmb',
      },
    });
  },
});
