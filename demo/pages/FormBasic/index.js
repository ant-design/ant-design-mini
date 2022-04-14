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
  handleSubmit(e) {
    my.alert({ title: '提交', content: JSON.stringify(e) });
  },
});
