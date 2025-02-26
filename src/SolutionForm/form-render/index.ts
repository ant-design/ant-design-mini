import { get, isEqual, isFunction } from 'lodash';
import { destroyStore, getStore } from '../store/index';
import { createComponent } from '@alipay/merchant-base-mini';
import { FormRenderDefaultProps } from './props';
import { getPathArr } from '../store/helper';
import { getFullPathByPath } from '../util/schema';

createComponent({

  props: FormRenderDefaultProps,

  data: {
    message: '',
  },

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
    errorInfo: {
      deep: true,
      handler(newErrorInfo, oldErrorInfo) {
        const curKeys = getPathArr(newErrorInfo, this.hasGroup);
        curKeys.forEach((curKey) => {
          // 当前key展示的信息
          const newInfo = get(newErrorInfo, curKey, [])[0];
          // 当前key以前的信息
          const oldInfo = get(oldErrorInfo, curKey, [])[0];
          // 根据当前key获取原本的schema 以便获取埋点信息
          const originSchema = get(this.schemaData, getFullPathByPath(curKey));
          const { errorSpm, errorExtra } = originSchema.props?.spmInfo || {};

          // 如果更改后的errorInfo有值并且和以前的错误信息不一样则上报埋点
          if (newInfo && !isEqual(newInfo, oldInfo)) {
            this.store.dispatch('handleTracert', {
              spmInfo: { spm: errorSpm, extra: errorExtra },
              type: 'expo',
            });
          }
        });
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
    this.store.commit('updateTracert', this.props);

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
      try {
        const res = await this.store.dispatch('validate');
        const { errors: validateErrors = {} } = res;
        const formData = { ...this.store.state.formData };
        const errors = Object.keys(validateErrors).map(
          (key) => validateErrors[key],
        );
        if (isFunction(onSubmit)) {
          onSubmit(formData, errors);
        }
      } catch (error) {
        console.log('handleSubmit error', error);
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
