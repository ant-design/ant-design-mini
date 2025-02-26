import { createComponent } from '@alipay/merchant-base-mini';
import { getStore } from '../../store/index';

createComponent({
  onInit() {
    this.store = getStore();
    this.store.dispatch('handleTracert', {
      spmInfo: this.props?.config?.spmInfo,
      type: 'expo',
    });
  },
  methods: {
    onOk(v, selectedOptions, e) {
      if (Array.isArray(v) && v.length === 0) {
        // 异常情况兜底 直接抛出错误
        throw new Error('请检查picker组件的schema参数option是否为空数组');
      }
      this.props?.onTriggerChange(v, this.props.field);
      this.props?.config?.onOk?.(v, selectedOptions);
    },
    onChange(v, selectedOptions) {
      this.props?.config?.onChange?.(v, selectedOptions);
    },
    onCancel(e) {
      this.props?.config?.onCancel?.(e, this.props.field);
    },
    onFormat(v, selectedOptions) {
      return this.props?.config?.onFormat?.(v, selectedOptions);
    },
    onVisibleChange(visible, e) {
      this.props?.config?.onVisibleChange?.(visible, e);
      if (visible) {
        // 如果展示则表示点击了picker 做埋点上报
        this.store.dispatch('handleTracert', {
          spmInfo: this.props?.config?.spmInfo,
          type: 'click',
        });
      }
    },
  },
});
