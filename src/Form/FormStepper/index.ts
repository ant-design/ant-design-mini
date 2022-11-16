 import { FormStepperDefaultProps } from './props';
import { FromItemRef, EventTrigger, Value, Values } from '../form';

Component({
  props: FormStepperDefaultProps,
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
        return 0
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
    onChange(value, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, e);
      }
    },
    onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    },
    onFocus(e) {
      if (this.props.onChange) {
        this.props.onFocus(e);
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(e);
      }
    },
  }
});
