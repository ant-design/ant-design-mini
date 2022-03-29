Page({
  data: {
    form: 'form',
    initialValues: {
      type: 'password',
    },
    values: {
      type: 'password',
    },
  },
  handleValuesChange(value, values) {
    console.log(value, values);
    this.setData({ values });
  },
  handleSubmit(e) {
    my.alert({ title: '提交', content: JSON.stringify(e) });
  },
});
