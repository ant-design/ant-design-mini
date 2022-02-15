Page({
  data: {
    form: 'form',
    initVal: {
      input1: 'input1',
      input2: 'input2',
    },
    changedFields: '',
    allFields: '',
    sRules: [
      {
        validator: (rule, value = []) => {
          return value.indexOf('2') !== -1;
        },
        message: '请至少选择选项二',
      },
    ],
    sitems: [
      {
        text: '选项一',
        value: '1',
      },
      {
        text: '选项二',
        value: '2',
      },
      {
        text: '选项三',
        value: '3',
      },
      {
        text: '选项四',
        value: '4',
      },
      {
        text: '选项五',
        value: '5',
      },
    ],
  },
  onValuesChange(changedFields, allFields) {
    this.setData({
      changedFields: JSON.stringify(changedFields),
      allFields: JSON.stringify(allFields),
    });
  },
  onFinish(allValues) {
    my.alert({
      title: 'onFinish',
      content: JSON.stringify(allValues),
    });
  },
});
