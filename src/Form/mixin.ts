import type { IUserComponentOptions } from '@mini-types/alipay';
import { getFieldName } from './cache';
import formStoreFactory, { FormStore } from './store';
import { IComponentData } from './props';

type ControlledMixInParams  = {
  propsTriggerChange?: string,
}

export default (params: ControlledMixInParams = { propsTriggerChange: 'onChange' }): IUserComponentOptions<IComponentData, Record<string, any>, {
  onChangeFormFieldValue(changedValues):void;
  defineOnchange(): void;
}, {
  store: FormStore,
  fieldName?: string
},
Record<string, unknown>,[]> => {
  const { propsTriggerChange = 'onChange' } = params
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
        this._onChange = this.props[propsTriggerChange];
        Object.defineProperty(this.props, propsTriggerChange, {
          get: () => {
            return (v, ...args) => {
              if (this.fieldName) {
                this.store.setFieldsValue({
                  [this.fieldName]: v,
                });
                this.store.validate({ fieldName: this.fieldName });
              }
              if (this._onChange) {
                //@ts-ignore
                this._onChange(v, ...args);
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
