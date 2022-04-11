Page({
  data: {
    form: 'form',
    formV: 'formV',
    initialValues: {
      quantity: 1,
      needDelivery: false,
    },
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleSubmit(value) {
    my.alert({ title: '提交', content: JSON.stringify(value) });
  },
  handleFinishFailed(error) {
    console.log('error', error)
  }
});
