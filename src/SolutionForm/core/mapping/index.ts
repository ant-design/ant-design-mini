import { getStore } from '../../store/index';
import { FormRenderMappingDefaultProps } from './props';
import set from 'lodash.set';
import get from 'lodash.get';
import { createComponent } from 'miniapp-store';

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
      const disabled = get(listItem, 'item.disabled') || get(listItem, 'item.props.disabled')
      if (disabled) {
        // 禁用的情况下触发
        this.props.onDisabledTap(listItem);
      }
    },
  },
});
