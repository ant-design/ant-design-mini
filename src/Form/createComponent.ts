import { FromItemRef, EventTrigger, Value, Values } from './form';

function createComponent({
  props = {},
  data = {},
  methods = {} as any,
  initialValue,
}) {
  Component({
    props,
    data: {
      ...data,
      formData: {
        value: undefined,
        status: 'default',
        errors: [],
      },
    },
    ref() {
      const formItemRef: FromItemRef = {
        getInitialValue: () => {
          return initialValue;
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
      ...methods,
      emit(trigger: EventTrigger, value?: Value) {},
      onChange(value, e) {
        this.emit('onChange', value);
        if (methods.onChange) {
          methods.onChange(value, e);
        }
      },
    }
  })
};

export default createComponent;

