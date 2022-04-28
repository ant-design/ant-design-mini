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
    position: '',
    required: false,
    label: '',
    dependencies: [],
    validateFirst: false,
  },

  data: {
    errorInfo: null,
    helpVisible: false,
  },

  onInit() {
    const pageId = this.$page.$id;
    const { form: uid, name: fieldName } = this.props;
    const formInfo = getFormInfo();
    this.store = formStoreFactory.getStore({
      pageId,
      componentId: formInfo?.id,
      uid,
      fieldName,
    });
    if (!fieldName) {
      throw new Error('props name is required in FormItem');
    }
    if (this.store.checkFieldInited(fieldName)) {
      console.warn(`${fieldName} fieldItem already existed`);
    }
    this.store.addField(fieldName);
    cacheFieldInfo(
      function (this: any) {
        const { name: fieldName, form, dependencies } = this.props;
        return {
          fieldName,
          form,
          dependencies,
        };
      }.bind(this)
    );
    this.setFieldRules();
    this.setValidateOptions();
    this.onBindErrorInfoChange = this.onErrorInfoChange.bind(this);
    this.store.onErrorInfoChange(this.onBindErrorInfoChange);
  },

  didMount() {
    const { name: fieldName } = this.props;
    let formSilent = true;
    // 如果是form初始化之后动态添加的，silent为false，还需要触发form的onValuesChange
    if (getFormInfo() === null) {
      formSilent = false;
    }
    this.store?.setFieldsValueByFormItemInitial(
      { [fieldName]: this.props.initialValue },
      { formSilent }
    );
    clearFieldInfo();
  },

  didUpdate(prevProps) {
    if (
      prevProps.rules !== this.props.rules ||
      prevProps.required !== this.props.required ||
      prevProps.label !== this.props.label
    ) {
      this.setFieldRules();
    }
    if (
      prevProps.dependencies !== this.props.dependencies ||
      prevProps.validateFirst !== this.props.validateFirst
    ) {
      this.setValidateOptions();
    }
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

    setValidateOptions() {
      const { name: fieldName, dependencies, validateFirst } = this.props;
      this.store?.setValidateOptions(fieldName, {
        dependencies,
        validateFirst,
      });
    },

    onErrorInfoChange(formErrorInfo, updatedFields) {
      updatedFields.forEach((field) => {
        if (field === this.props.name) {
          this.setData({
            errorInfo: formErrorInfo[this.props.name] || [],
          });
        }
      });
    },

    updateErrorInfo(payload) {
      this.setData({ errorInfo: payload });
    },
    onToggleHelpVisible() {
      this.setData({ helpVisible: !this.data.helpVisible });
    },
    onHelpVisibleChange(visible, type) {
      if (type === 'mask') {
        this.setData({ helpVisible: visible });
      }
    },
  },
});
