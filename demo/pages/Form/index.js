Page({
  data: {
    form: 'form',
    initialValues: {
      stepper: 20,
      switch: false,
      picker: ['2012', '12', 12],
    },
    selectorItems: [
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
    pickerList: [
      [
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019',
        '2020',
        '2021',
        '2022',
      ],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    ],
  },
  formatValue(v) {
    return v.join('/');
  },
  handleValuesChange(value, values) {
    console.log(value, values);
  },
  handleSubmit(e) {
    my.alert({ title: '提交', content: JSON.stringify(e) });
  },
});
