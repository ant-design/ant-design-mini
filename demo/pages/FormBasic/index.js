Page({
  data: {
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
