Page({
  data: {
    pickerData: [['杭州', '宁波', '上海', '苏州']],
    selectorItems: [{
      text: '选项一',
      value: 'one'
    }, {
      text: '选项二',
      value: 'two'
    }, {
      text: '选项三',
      value: 'three'
    }],
    initialValues: {
      image: [
        {
          url: 'https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*znK_ToIL8rQAAAAAAAAAAAAAARQnAQ',
          status: 'done',
          description: '标签1'
        }
      ]
    }
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleFinishFailed(value, error) {
    console.log('value', value)
    console.log('error', error)
  },
  handleSubmit(values) {
    console.log('values',  values)
    my.alert({ title: '提交', content: JSON.stringify(values) });
  },
  handleUpload({ url }) {
    return new Promise(resolve => {
      resolve({
        status: 200
      })
    })
  }
});
