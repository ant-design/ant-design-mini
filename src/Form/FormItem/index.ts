import formStoreFactory from '../store';
import { cacheFieldInfo, clearFieldInfo, getFormInfo } from '../cache';
import {
  IComponentProps,
  IComponentData,
  IComponentMethods,
  IComponentExtraThis,
} from './props';

Component<
  IComponentData,
  IComponentProps,
  IComponentMethods,
  IComponentExtraThis
>({
  props: {
    rules: [],
    name: '',
    position: 'horizontal',
    required: false,
    label: '',
  },

  data: {
    errorInfo: null,
  },

  onInit() {
    const pageId = this.$page.$id;
    const { form: uid, name: fieldName } = this.props;
    const formInfo =  getFormInfo()
    this.store = formStoreFactory.getStore({ pageId, componentId: formInfo?.id, uid, fieldName });
    if (!fieldName) {
      throw new Error('props name is required in FormItem')
    }
    if (this.store.checkFieldInited(fieldName)) {
      console.warn(`${fieldName} fieldItem already existed`)
    }
    this.store.addField(fieldName);
    cacheFieldInfo(
      function (this: any) {
        return { fieldName: this.props.name, form: this.props.form };
      }.bind(this)
    );
    this.setFieldRules();
    this.onBindErrorInfoChange = this.onErrorInfoChange.bind(this);
    this.store.onErrorInfoChange(this.onBindErrorInfoChange);
  },

  didMount() {
    const { name: fieldName } = this.props
    let formSilent  = true
    // 如果是form初始化之后动态添加的，silent为false，还需要触发form的onValuesChange
    if (getFormInfo() === null) {
      formSilent  = false
    }
    this.store?.setFieldsValueByFormItemInitial({ [fieldName]: this.props.initialValue }, { formSilent });
    clearFieldInfo();
  },

  didUnmount() {
    const { name: fieldName } = this.props;
    this.store?.offValuesChange(this.onBindErrorInfoChange);
    this.store?.removeField(fieldName);
  },

  methods: {
    setFieldRules() {
      const { name, required, label, rules } = this.props;
      let fieldRules = [];
      if (rules instanceof Array) {
        fieldRules = [...rules];
      } else {
        fieldRules = [rules];
      }
      const hasRequiredRule = fieldRules.some((rule) => rule.required);
      if (required && !hasRequiredRule) {
        const requiredItem = {
          required: true,
          message: `请输入${label || name}`,
        };
        fieldRules = [requiredItem, ...fieldRules];
      }
      if (fieldRules?.length > 0) {
        this.store.setFieldRules(name, fieldRules);
      }
    },

    onErrorInfoChange(formErrorInfo, options) {
      const fieldName = options?.fieldName;
      if (!(fieldName && fieldName !== this.props.name)) {
        this.setData({
          errorInfo: formErrorInfo[this.props.name]?.[0] || {},
        });
      }
    },

    updateErrorInfo(payload) {
      this.setData({ errorInfo: payload });
    },
  },
});
