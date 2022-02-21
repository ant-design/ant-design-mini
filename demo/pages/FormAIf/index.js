Page({
  data: {
    checkboxShow: true,
    form: 'formCheckbox',
    uid: 'formCheckboxGroup',
    initVal: {
      checkbox: ['a1', 'a2'],
      input: 'initVal',
    },
    changedFields: '',
    allFields: '',
  },
  changeCheckboxShow() {
    this.setData({
      checkboxShow: !this.data.checkboxShow,
    });
  },
  onValuesChange(changedFields, allFields) {
    this.setData({
      changedFields: JSON.stringify(changedFields),
      allFields: JSON.stringify(allFields),
    });
  },
});
