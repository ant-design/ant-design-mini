 import { FormSwitchDefaultProps } from './props';
import { FromItemRef, EventTrigger, Value, Values } from '../form';

Component({
  props: FormSwitchDefaultProps,
  data: {
    formData: {
      value: undefined,
      status: 'default',
      errors: [],
    },
  },
  ref() {
    const formItemRef: FromItemRef = {
      getInitialValue: () => {
        return false
      },
      setFormData: (values: Values) => {
        this.setData({
          ...this.data,
          formData: {
            ...this.data.formData,
            ...values,
          }
        })
      },
      getFormData: () => {
        return this.data.formData;
      },
      on: (callback: (trigger: EventTrigger, value?: Value) => void) => {
        this.emit = callback;
      },
      getProps: () => {
        return this.props;
      },
    };
    return formItemRef;
  },
  didUnmount() {
    this.emit('didUnmount');
  },
  deriveDataFromProps(nextProps) {
    this.emit('deriveDataFromProps', nextProps);
  },
  methods: {
    emit(trigger: EventTrigger, value?: Value) {},
    onChange(checked, e) {
      this.emit('onChange', checked);
      if (this.props.onChange) {
        this.props.onChange(checked, e);
      }
    },
  }
});
