import { getStore } from '../../store/index';
import { FormRenderMappingDefaultProps } from './props';
import set from 'lodash.set';
import { createComponent } from '@alipay/merchant-base-mini';

createComponent({
  props: FormRenderMappingDefaultProps,
  computed() {
    return {
      ...getStore().mapState([
        'formData',
        'rules',
        'errorInfo',
        'formRenderPropsConfig',
      ]),
      finalFormItemArr() {
        return (
          this.formItemArr
            ?.filter?.((item) => item.visible)
            ?.map((item) => ({
              ...item,
              id: item.path,
            })) || []
        );
      },
    };
  },

  onInit() {
    this.store = getStore();
  },

  methods: {
    onTriggerChange(v, field) {
      // 更改表单内容
      const value = {};
      set(value, field, v);

      this.store.commit('setFieldsValue', value);
    },
    onDisabledTap(e) {
      const { listItem } = e.target.dataset || {};
      if (listItem.item.disabled || listItem.item.props.disabled) {
        // 禁用的情况下触发
        this.props.onDisabledTap(listItem);
      }
    },
  },
});
