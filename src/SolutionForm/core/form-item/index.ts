import { set, get, isEqual } from 'lodash';
import { createComponent } from '@alipay/merchant-base-mini';
import { getStore } from '../../store/index';

createComponent({
  props: {
    item: {},
    displayType: '',
    value: undefined,
  },
  data: {
    currentErrorInfo: {},
  },

  computed() {
    return {
      ...getStore().mapState([
        'errorInfo',
        'subSchemaArr',
        'formRenderPropsConfig',
      ]),
      tipsConfig() {
        return this.item.tipsConfig || {};
      },
      finalRequiredMarkStyle() {
        return (
          this.item.requiredMarkStyle ||
          this.formRenderPropsConfig?.requiredMarkStyle
        );
      },
      finalRequired() {
        const { rules = [] } = this.item;
        let fieldRules = [];
        if (rules instanceof Array) {
          fieldRules = [...rules];
        } else {
          fieldRules = [rules];
        }

        const hasRequiredRule = fieldRules.some((rule = {}) => rule?.required);
        return this.item.required || hasRequiredRule;
      },
      labelExtra() {
        const requiredMarkStyle =
          this.item.requiredMarkStyle ||
          this.formRenderPropsConfig?.requiredMarkStyle;
        if (!requiredMarkStyle || requiredMarkStyle === 'empty') {
          return '';
        }
        if (this.finalRequired && requiredMarkStyle === 'text-required') {
          return '(必填)';
        }
        if (!this.finalRequired && requiredMarkStyle === 'text-not-required') {
          return '(选填)';
        }
      },
      finalDisplayType() {
        // 支持表单项和表单组设置displayType
        return (
          this.displayType ||
          this.formRenderPropsConfig?.displayType ||
          'row'
        );
      },
    };
  },

  watch: {
    errorInfo: {
      deep: true,
      handler() {
        const errorInfo = get(this.errorInfo, this.props.name, []);

        this.currentErrorInfo = errorInfo[0] || {};
      },
    },
  },

  onInit() {
    this.store = getStore();
    if (this.item.visible === false) {
      return;
    }
    const { path: field } = this.item || {};

    if (!field) {
      throw new Error('props name is required in item');
    }

    this.initValue(this.props);

    this.setFieldRules(this.props);
    this.setFields(this.props);
  },

  deriveDataFromProps(nextProps) {
    // props全等拦截
    if (isEqual(nextProps, this.props)) {
      return;
    }
    if (
      nextProps.visible === false &&
      nextProps.name &&
      this.props.visible === true
    ) {
      this.store.commit('removeField', nextProps.name);
    }

    if (this.props.visible === false && nextProps.visible === true) {
      this.setFieldRules(nextProps);
      this.setFields(this.props);
      this.initValue(nextProps);
      return;
    }
    // 如果校验规则更改 重制当前表单项的校验规则
    if (
      this.props.required !== nextProps.required ||
      !isEqual(nextProps.rules, this.props.rules)
    ) {
      this.setFieldRules(nextProps);
    }

    if (
      !isEqual(nextProps?.item?.value, this.props?.item?.value) &&
      nextProps.visible
    ) {
      this.initValue(nextProps);
    }
  },

  didUnmount() {
    const { name: fieldName } = this.props;
    this.store.commit('removeField', fieldName);
  },

  methods: {
    initValue(props) {
      const { path: field, value: defaultValue } = props.item || {};
      if (defaultValue !== undefined) {
        const _value = {};
        set(_value, field, defaultValue);
        this.store.commit('setFieldsValue', _value);
      }
    },
    setFields(props) {
      const { name } = props;
      this.store.commit('setFields', name);
    },
    setFieldRules(props) {
      const { name, required, title, rules } = props.item || {};
      let fieldRules = [];
      if (rules instanceof Array) {
        fieldRules = [...rules];
      } else {
        fieldRules = [rules];
      }

      /**
       * 如果通过rules的方式定义了required则可以覆盖默认的错误信息
       */
      const hasRequiredRule = fieldRules.some(
        (rule = {}) => (rule.required && rule.message) || rule.required,
      );

      if (required && !hasRequiredRule) {
        const requiredItem = {
          required: true,
          message: `请完善${title || name}`,
        };
        fieldRules = [requiredItem, ...fieldRules];
      }

      if (fieldRules?.length > 0) {
        this.store.commit('setFieldRules', {
          fieldName: name,
          rule: fieldRules,
        });
      }
    },
  },
});
