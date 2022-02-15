Page({
  data: {
    list: [
      { name: 'field1', placeholder: 'field1' },
      { name: 'field2', placeholder: 'field2' },
      { name: 'field3', placeholder: 'field3' },
    ],
    form: 'formInsMethod',
    ins: '',
  },
  setFieldsValue() {
    this.formInstance.setFieldsValue(this.data.form, {
      field1: '1',
      field2: '2',
      field3: '3',
    });
  },
  getCompInstance() {
    const ins = JSON.stringify(this.formInstance.getCompInstance(), undefined, 4);
    this.setData({ ins });
  },
  ref(ins) {
    this.formInstance = ins;
  },
});

