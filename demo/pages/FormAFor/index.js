Page({
  data: {
    list: [
      { name: 'field1', placeholder: 'field1' },
      { name: 'field2', placeholder: 'field2' },
      { name: 'field3', placeholder: 'field3' },
    ],
    changedFields: '',
    allFields: '',
    form: 'formAFor',
  },
  onValuesChange(changedFields, allFields) {
    this.setData({
      changedFields: JSON.stringify(changedFields),
      allFields: JSON.stringify(allFields),
    });
  },
  sub() {
    this.setData({
      list: this.data.list.slice(1),
    });
  },
  add() {
    const list = [
      { name: 'field1', placeholder: 'field1' },
      { name: 'field2', placeholder: 'field2' },
      { name: 'field3', placeholder: 'field3' },
      { name: 'field4', placeholder: 'field4' },
    ];
    this.setData({
      list,
    });
  },
});
