Page({
  data: {
    initialValues: {
      type: 'password',
    },
    values: {
      type: 'password',
    },
  },
  handleValuesChange(value, values) {
    console.log('values', values);
    this.setData({ values });
  },
  handleSubmit(values) {
    console.log('values', values)
    my.alert({ title: '提交', content: JSON.stringify(values) });
  },
});
