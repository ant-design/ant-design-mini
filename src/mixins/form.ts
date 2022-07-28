import { getFieldInfo, clearFieldInfo, getFormInfo } from '../Form/cache';
import formStoreFactory, { FormStore } from '../Form/store';
import type { IUserComponentOptions } from '@mini-types/alipay';


type FormMixInParams  = {
  propsTriggerChange?: string,
  propsValue?: string
}

export default (params: FormMixInParams = { propsTriggerChange: 'onChange', propsValue:  'value' }): IUserComponentOptions<
{ value: any },
{ [prop: string]: any },
{
  onChangeFormFieldValue(changedValues, options):void;
},
{
  store: FormStore,
  fieldName?: string
},
Record<string, unknown>,
[]
> => {
  const {  propsTriggerChange  = 'onChange', propsValue = 'value' } = params
  return {
    data: {
      value: null,
    },
    onInit() {
      const fieldInfo = getFieldInfo();
      if (fieldInfo)  {
        const { fieldName, form: uid } = fieldInfo;
        const pageId = this.$page.$id;
        const formInfo =  getFormInfo()
        const store = formStoreFactory.getStore({ pageId, componentId: formInfo?.id, uid,  fieldName });
        this.store = store;
        this.onBindChangeFormFieldValue = this.onChangeFormFieldValue.bind(this);
        this.store.onValuesChange(this.onBindChangeFormFieldValue);
        this.fieldName = fieldName;
        this.fieldInfo = fieldInfo;
        // 只有FormItem的孩子受影响， FormItem的后代不需要订阅相关信息
        clearFieldInfo()
      }
    },
    methods: {
      [propsTriggerChange](v, ...args) {
        this._onChange = this.props[propsTriggerChange];
        if (this.fieldName) {
          this.store.setFieldsValue({
            [this.fieldName]: v,
          });
          if (this.fieldInfo?.triggerValidateOnChange) {
            this.store.validate([this.fieldName]);
          }
          if (this._onChange) {
            this._onChange(v, ...args);
          }
        }
      },
    
      onChangeFormFieldValue(changedValues, options) {
        if (this.fieldName in changedValues) {
          if (options?.syncFormItem)  {
            this.store.setFieldsValue({
              [this.fieldName]: this.props[propsValue],
            }, { formSilent: options?.formSilent })
          } else {
            this.setData({
              value: changedValues[this.fieldName],
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
