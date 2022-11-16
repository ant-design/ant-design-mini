import { FormInputDefaultProps } from './props';
import { FromItemRef, EventTrigger, Value, Values } from '../form';

Component({
  props: FormInputDefaultProps,
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
        return '';
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
      this.emit('onBlur');
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    },
    onClear(e) {
      this.emit('onChange', '');
      if (this.props.onClear) {
        this.props.onClear(e);
      }
    },
    onFocus(e) {
      this.setData({
        selfFocus: true,
      });
      if (this.props.onBlur) {
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
