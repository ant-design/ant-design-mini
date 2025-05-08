import { get, isEqual, isFunction } from 'lodash';
import { destroyStore, getStore } from '../store/index';
import { createComponent } from '@alipay/merchant-base-mini';
import { FormRenderDefaultProps } from './props';

createComponent({
  props: FormRenderDefaultProps,

  computed() {
    return {
      ...getStore().mapState([
        'changeFormData',
        'subSchemaArr',
        'formData',
        'schemaData',
        'formRenderPropsConfig',
        'fields',
        'errorInfo',
        'hasGroup',
      ]),
    };
  },

  watch: {
    /**
     * changeFormData 触发onValueChange钩子
     */
    changeFormData: {
      async handler() {
        await this.store.dispatch('handleFieldValueChange');
        this.props?.onValueChange?.(this.changeFormData, this.formData);
      },
    },
    formData() {
      this.store.commit('updateSchema', {
        schema: this.props.schema,
      });
    },
  },

  onInit() {
    this.store = getStore();

    // 存在表单初始值
    if (this.props.initialValues) {
      this.store.commit('setFieldsValue', this.props.initialValues);
      // 如果配置了初始化值需要校验 则立即校验，初始化值会覆盖schema设置的value
      if (this.props.initialValidate) {
        this.store.dispatch('validate');
      }
    }
  },

  didUnmount() {
    destroyStore();
  },

  deriveDataFromProps(nextProps) {
    if (!isEqual(nextProps, this.props)) {
      this.initSchema(nextProps);
    }
  },

  methods: {
    initSchema(props) {
      this.store.commit('updateSchema', {
        schema: props.schema,
      });
    },

    /**
     * 点击内置默认提交按钮后的回调。
     * 同时通过 ref 访问 formRender 实例的 onSubmit 事件也会触发。
     */
    async handleSubmit() {
      const { onSubmit } = this.props;
      const res = await this.store.dispatch('validate');
      const { errors: validateErrors = {} } = res;
      const errors = Object.keys(validateErrors).map(
        (key) => validateErrors[key],
      );
      if (isFunction(onSubmit)) {
        onSubmit(get(this.store.state, 'formData', {}), errors);
      }
    },

    onTapOperation(action, index, event) {
      if (!this.props.onTapOperation) {
        console.error('没有传入操作区的点击事件 onTapOperation');
        return;
      }
      this.props.onTapOperation(action, index, event);
    },
    onDisabledTap(listItem) {
      this.props.onDisabledTap(listItem);
    },
  },
});
