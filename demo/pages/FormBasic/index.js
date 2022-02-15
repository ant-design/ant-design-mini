Page({
  data: {
    form: 'form',
    initVal: {
      input1: 'input1',
      input2: 'input2',
    },
    changedFields: '',
    allFields: '',
  },
  onValuesChange(changedFields, allFields) {
    this.setData({
      changedFields: JSON.stringify(changedFields),
      allFields: JSON.stringify(allFields),
    });
  },
});
