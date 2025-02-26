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
    onChange(v, dateStr, e) {
      this.props?.onTriggerChange(v, this.props.field);
      this.props?.config?.onOk?.(v, dateStr, e);
    },
    onCancel(e) {
      this.props?.config?.onCancel(e);
    },
    onPickerChange(v, dateStr, e) {
      this.props?.config?.onPickerChange?.(v, dateStr, e);
    },
    onFormat(v, dateStr) {
      return this.props?.config?.onFormat?.(v, dateStr);
    },
    onFormatLabel(type, value) {
      return this.props?.config?.onFormatLabel?.(type, value);
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
