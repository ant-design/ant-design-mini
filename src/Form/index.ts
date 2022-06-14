import { store } from './store';

Component({
  props: {
    onValuesChange: function onValuesChange(changedValues, totalValues) {
      return {
        changedValues,
        totalValues,
      };
    },
    onFinish: function onFinish(totalValues) {
      return totalValues;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onFinishFailed: function onFinishFailed() {},
    className: '',
    form: 'default',
    requiredMarkStyle: 'asterisk',
    position: 'horizontal',
    initialValues: {},
  },
  onInit() {
    const { form, initialValues, onValuesChange, onFinish } = this.props;
    if (!form) {
      throw new Error('no form name');
    } // setup initval

    store.init(form, initialValues, onValuesChange, onFinish);
  },
  didUnmount: function didUnmount() {
    store.tear(this.props.form);
  },
  ref() {
    return {
      getCompInstance: () => this,
      setFieldsValue: (form, value) => store.setFieldsValue(form, value),
    };
  },
});
