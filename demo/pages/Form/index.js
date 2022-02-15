Page({
  data: {
    form: 'form',
    initVal: {
      input: 10,
      input1: 'disabled',
      checkbox: ['a1', 'a3'],
      radio: 'a3',
      picker: ['2014', '12', 24],
      switch: true,
      selector: ['1'],
    },
    pickerList: [
      ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
      ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
      ],
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
  onFinish(allValues) {
    my.alert({
      title: 'onFinish',
      content: JSON.stringify(allValues),
    });
  },
  onValuesChange(fieldVal, allVals) {
    // eslint-disable-next-line no-console
    console.log(fieldVal, allVals);
  },
  cancelPicker() {
    my.showToast({
      content: '取消操作，关闭 picker，无回调。',
    });
  },
  changePikcer(v) {
    // eslint-disable-next-line no-console
    console.log('changePikcer', v);
  },
  formatValue(v) {
    return v.join('/');
  },
});

