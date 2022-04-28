import dayjs from 'dayjs';

Page({
  data: {
    pickerData: ['杭州', '宁波', '上海', '苏州'],
    selectorItems: [
      {
        text: '选项一',
        value: 'one',
      },
      {
        text: '选项二',
        value: 'two',
      },
      {
        text: '选项三',
        value: 'three',
      },
    ],
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleFinishFailed(value, error) {
    console.log('value', value);
    console.log('error', error);
  },
  handleSubmit(values) {
    console.log('values', values);
    my.alert({
      title: '提交',
      content: JSON.stringify({
        ...values,
        datePicker: values.datePicker
          ? dayjs(values.datePicker).format('YYYY-MM-DD')
          : null,
      }),
    });
  },
});
