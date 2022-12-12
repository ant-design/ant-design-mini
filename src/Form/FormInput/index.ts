import { FormInputDefaultProps } from './props';
import fmtEvent from '../../_util/fmtEvent';


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
    const formItemRef = {
      setFormData: (values) => {
        this.setData({
          ...this.data,
          formData: {
            ...this.data.formData,
            ...values,
          }
        });
        this.input.update(this.data.formData.value);
      },
      getFormData: () => {
        return this.data.formData;
      },
      on: (callback: (trigger, value) => void) => {
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
  input: { update: (value: any) => {} },
  methods: {
    handleRef(input) {
      this.input = input;
    },
    onChange(value, e) {
      this.emit('onChange', value);
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
    },
    onBlur(e) {
      if (this.props.onBlur) {
        this.props.onBlur(fmtEvent(this.props, e));
      }
    },
    onFocus(e) {
      if (this.props.onChange) {
        this.props.onFocus(fmtEvent(this.props, e));
      }
    },
    onConfirm(e) {
      if (this.props.onConfirm) {
        this.props.onConfirm(fmtEvent(this.props, e));
      }
    },
    onClear(e) {
      this.emit('onChange', '');
      if (this.props.onChange) {
        this.props.onChange('', fmtEvent(this.props, e));
      }
    },
    emit(trigger, value?: any) {},
  }
});
