import { FromItemRef, EventTrigger, Value, Values } from './form';

function createComponent({ props = {}, data = {}, methods = {} as any }) {
  Component({
    props,
    data: {
      ...data,
      formData: {
        value: undefined,
        status: 'default',
        required: false,
        errors: [],
      },
    },
    ref() {
      const formItemRef: FromItemRef = {
        setFormData: (values: Values) => {
          this.setData({
            ...this.data,
            formData: {
              ...this.data.formData,
              ...values,
            },
          });
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
    },
  });
}

export default createComponent;
