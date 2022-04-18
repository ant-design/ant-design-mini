Page({
  data: {
    form: 'form',
    initialValues: {
      name: '',
      address:  '',
      birthday: new Date('2016/04/15'),
      favoriteFruits: ['banana'],
    },
    selectorItems: [{
      text: '苹果',
      value: 'apple'
    }, {
      text: '香蕉',
      value: 'banana'
    }, {
      text: '桔子',
      value: 'orange'
    }]
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleFinishFailed(value, error) {
    console.log('value', value)
    console.log('error', error)
  },
  handleSubmit(e) {
    my.alert({ title: '提交', content: JSON.stringify(e) });
  },
});
