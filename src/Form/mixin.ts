import type { IUserComponentOptions } from '@mini-types/alipay';
import { getFieldInfo, clearFieldInfo, getFormInfo } from './cache';
import formStoreFactory, { FormStore } from './store';
import { IComponentData, FormMixInParams } from './props';
import equal from 'fast-deep-equal';

export default (
  params: FormMixInParams = {
    propsTriggerChange: 'onChange',
    propsValue: 'value',
    defaultPropsValue: '',
    dataValue:  'cValue'
  }
): IUserComponentOptions<
  IComponentData,
  Record<string, any>,
  {
    onChangeFormFieldValue(changedValues,  allValues,  options): void;
    defineOnchange(): void;
    triggerChange(v: any): void;
  },
  {
    store: FormStore;
    fieldName?: string;
  },
  Record<string, unknown>,
  []
> => {
  const {
    propsTriggerChange = 'onChange',
    propsValue = 'value',
    defaultPropsValue = '',
    dataValue  = 'cValue'
   } = params;
  return {
    data: {
      [dataValue]: defaultPropsValue,
    },
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
        this.fieldInfo = fieldInfo;
        // 只有FormItem的孩子受影响， FormItem的后代不需要订阅相关信息
        clearFieldInfo()
      }
    },

    didMount() {
      if (propsValue in this.props) {
        this.setData({
          [dataValue]: this.props[propsValue],
        });
      }
    },

    didUpdate(prevProps) {
      const value = this.props[propsValue];
      if (
        !equal(prevProps[propsValue], value) &&
        !equal(this.data[dataValue], value)
      ) {
        this.setData({
          [dataValue]: value,
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
                if (this.fieldInfo?.triggerValidateOnChange) {
                  this.store.validate([this.fieldName]);
                }
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
              [dataValue]: changedValues[this.fieldName],
            });
          }
        }
      },

      triggerChange(value, ...args) {
        this.props[propsTriggerChange]?.bind(this)(value, ...args);
        if (!this.props.controlled) {
          this.setData({
            [dataValue]: value,
          });
        }
      },
    },

    didUnmount() {
      this.store?.offValuesChange(this.onBindChangeFormFieldValue);
    },
  };
};
