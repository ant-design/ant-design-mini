Page({
  data: {
    initialValues: {
      quantity: 1,
      needDelivery: false,
    },
    formUid: '1',
    formVUid: '2'
  },
  handleValuesChange(value, values) {
   // console.log(value, values);
  },
  handleSubmit(value) {
    my.alert({ title: '提交', content: JSON.stringify(value) });
  },
  handleFinishFailed(error) {
    console.log('error', error)
  }
});
