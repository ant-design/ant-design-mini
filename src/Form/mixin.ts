import type { IUserComponentOptions } from '@mini-types/alipay';
import { getFieldName } from './cache';
import formStoreFactory, { FormStore } from './store';
import { IComponentData } from './props';

export default (): IUserComponentOptions<
  IComponentData,
  {
    form?: string;
    onChange(v): void;
  },
  {
    onChangeFormFieldValue(changedValues): void;
    defineOnchange(): void;
  },
  {
    store: FormStore;
    fieldName?: string;
  },
  Record<string, unknown>,
  []
> => {
  return {
    onInit() {
      const fieldName = getFieldName();
      if (fieldName) {
        this.defineOnchange();
        const pageId = this.$page.$id;
        const { form: uid } = this.props;
        const store = formStoreFactory.getStore({ pageId, uid });
        if (store.checkFieldInited(fieldName)) {
          return;
        }
        store.addField(fieldName);
        this.store = store;
        this.onBindChangeFormFieldValue =
          this.onChangeFormFieldValue.bind(this);
        this.store.onValuesChange(this.onBindChangeFormFieldValue);
        this.fieldName = fieldName;
        const value = this.store.getFieldValue(this.fieldName);
        this.setData({
          cValue: value,
        });
      }
    },

    methods: {
      defineOnchange() {
        this._onChange = this.props.onChange;
        Object.defineProperty(this.props, 'onChange', {
          get: () => {
            return (v) => {
              if (this.fieldName) {
                this.store.setFieldsValue({
                  [this.fieldName]: v,
                });
                this.store.validate({ fieldName: this.fieldName });
              }
              if (this._onChange) {
                //@ts-ignore
                this._onChange(v);
              }
            };
          },
          set: (originFn) => {
            this._onChange = originFn;
          },
        });
      },
      onChangeFormFieldValue(changedValues) {
        if (this.fieldName in changedValues) {
          this.setData({
            cValue: changedValues[this.fieldName],
          });
        }
      },
    },

    didUnmount() {
      if (this.store) {
        this.store.offValuesChange(this.onBindChangeFormFieldValue);
        this.store.removeField(this.fieldName);
      }
    },
  };
};
