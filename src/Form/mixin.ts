import type { IUserComponentOptions } from '@mini-types/alipay';
import { getFieldInfo, clearFieldInfo, getFormInfo } from './cache';
import formStoreFactory, { FormStore } from './store';
import { IComponentData } from './props';

type ControlledMixInParams = {
  propsTriggerChange?: string;
  propsValue?: string;
};

export default (
  params: ControlledMixInParams = { propsTriggerChange: 'onChange', propsValue: 'value'}
): IUserComponentOptions<
  IComponentData,
  Record<string, any>,
  {
    onChangeFormFieldValue(changedValues,  allValues,  options): void;
    defineOnchange(): void;
  },
  {
    store: FormStore;
    fieldName?: string;
  },
  Record<string, unknown>,
  []
> => {
  const { propsTriggerChange = 'onChange', propsValue = 'value' } = params;
  return {
    onInit() {
      const fieldInfo = getFieldInfo();
      if (fieldInfo) {
        const { fieldName, form: uid } = fieldInfo;
        this.defineOnchange();
        const pageId = this.$page.$id;
        const formInfo =  getFormInfo()
        const store = formStoreFactory.getStore({ pageId, componentId: formInfo?.id, uid, fieldName });
        this.store = store;
        this.onBindChangeFormFieldValue =
          this.onChangeFormFieldValue.bind(this);
        this.store?.onValuesChange(this.onBindChangeFormFieldValue);
        this.fieldName = fieldName;
        // 只有FormItem的孩子受影响， FormItem的后代不需要订阅相关信息
        clearFieldInfo()
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
                this.store.validate([this.fieldName]);
              }
              if (this._onChange) {
                this._onChange(v, ...args);
              }
            };
          },
          set: (originFn) => {
            this._onChange = originFn;
          },
        });
      },

      onChangeFormFieldValue(changedValues, allValues, options) {
        if (this.fieldName in changedValues) {
          if (options?.syncFormItem)  {
            this.store.setFieldsValue({
              [this.fieldName]: this.props[propsValue],
            }, { formSilent: options?.formSilent })
          } else {
            this.setData({
              cValue: changedValues[this.fieldName],
            });
          }
        }
      },
    },

    didUnmount() {
      this.store?.offValuesChange(this.onBindChangeFormFieldValue);
    },
  };
};
