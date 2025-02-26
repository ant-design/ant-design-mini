import { set, get, isEqual } from 'lodash';
import { createComponent } from '@alipay/merchant-base-mini';
import { getStore } from '../../store/index';
import { NOT_SPM_REPORT_WIDGET } from '../../util/constants';

createComponent({
  props: {
    rules: [],
    name: '',
    extra: undefined,
    required: false,
    label: '',
    widget: '',
    spmInfo: null,
    visible: false,
    tipsConfig: {},
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
      finalRequiredMarkStyle() {
        return (
          this.props.requiredMarkStyle ||
          this.formRenderPropsConfig?.requiredMarkStyle
        );
      },
      finalRequired() {
        const { rules } = this.props;
        let fieldRules = [];
        if (rules instanceof Array) {
          fieldRules = [...rules];
        } else {
          fieldRules = [rules];
        }

        const hasRequiredRule = fieldRules.some((rule) => rule.required);
        return this.props.required || hasRequiredRule;
      },
      labelExtra() {
        const requiredMarkStyle =
          this.props.requiredMarkStyle ||
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
      displayType() {
        // 支持表单项和表单组设置displayType
        return (
          this.props.displayType ||
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
    if (this.props.visible === false) {
      return;
    }

    this.handleSpm(
      {
        spmInfo: this.props.spmInfo,
        type: 'expo',
      },
      this.props.widget,
    );

    const { name: field } = this.props;

    if (!field) {
      throw new Error('props name is required in FormItem');
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
      this.handleSpm(
        {
          spmInfo: nextProps.spmInfo,
          type: 'expo',
        },
        nextProps.widget,
      );
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
    handleSpm(params, widget) {
      // 不做统一上报的组件在内置组件单独上报
      if (NOT_SPM_REPORT_WIDGET.indexOf(widget) < 0) {
        this.store.dispatch('handleTracert', params);
      }
    },
    onTapItem() {
      this.handleSpm(
        {
          spmInfo: this.props.spmInfo,
          type: 'click',
        },
        this.props.widget,
      );
    },
    initValue(props) {
      const { name: field, defaultValue } = props || {};
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
      const { name, required, label, rules } = props;
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
        (rule) => (rule.required && rule.message) || rule.required,
      );

      if (required && !hasRequiredRule) {
        const requiredItem = {
          required: true,
          message: `请完善${label || name}`,
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
