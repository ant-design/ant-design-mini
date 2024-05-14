import { Component, getValueFromProps } from '../_util/simply';
import { EventTrigger, Value, Values } from './form';

function createComponent({ props = {}, data = {}, methods = {} as any }) {
  Component(
    props,
    {
      ...methods,
      emit(trigger: EventTrigger, value?: Value) {},
      setFormData(values: Values) {
        this.setData({
          ...this.data,
          formData: {
            ...this.data.formData,
            ...values,
          },
        });
      },
      getFormData() {
        return this.data.formData;
      },
      on(callback: (trigger: EventTrigger, value?: Value) => void) {
        this.emit = callback;
      },
      getProps() {
        return getValueFromProps(this);
      },
    },
    {
      ...data,
      formData: {
        value: undefined,
        status: 'default',
        required: false,
        errors: [],
      },
    },
    null,
    {
      didUnmount() {
        this.emit('didUnmount');
      },
      deriveDataFromProps(nextProps) {
        this.emit('deriveDataFromProps', nextProps);
      },
    }
  );
}

export default createComponent;
