 import { FormInputDefaultProps } from './props';
import { FromItemRef, ValidatorStatusEnum, EventTrigger, Value, Values } from '../form';

Component({
  props: FormInputDefaultProps,
  data: {
    formData: {
      value: '',
      status: ValidatorStatusEnum.Default,
      errors: [],
    },
    selfFocus: false,
  },
  ref() {
    const formItemRef: FromItemRef = {
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
    onChange(e) {
      this.emit('onChange', e.detail.value);
      if (this.props.onInput) {
        this.props.onInput(e);
      }
    },
    onBlur(e) {
      this.setData({
        selfFocus: false,
      });
      this.emit('onBlur');
      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    },
    onClear() {
      this.emit('onChange', '');
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
