Page({
  data: {
    initialValues: {
      name: '',
      address:  ''
    },
  },
  saveRef(ref) {
    this.formRef = ref;
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleFinishFailed(value, error) {
    console.log('value', value)
    console.log('error', error)
  },
  async handleSubmit() {
    const { valid } =  await this.formRef.validate()
    if (valid) {
      const values = this.formRef.getFieldsValue()
      my.alert({
        title: '提交成功',
        content: JSON.stringify(values, null, 2)
      })
    }
  },
  handleSetName() {
    this.formRef.setFieldsValue({
      name: 'alex'
    })
  }
});
