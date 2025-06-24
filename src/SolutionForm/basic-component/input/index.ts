import { Component } from 'miniapp-store';
import { getStore } from '../../store/index';

Component({
  data: {
    showPassword: false,
  },
  props: { config: {} },
  computed() {
    return {
      ...getStore().mapState(['subSchemaArr']),
    };
  },
  watch: {
    config(newVal) {
      this.showPassword = newVal.passwordOpenEye;
    },
  },
  onInit() {
    this.store = getStore();
    this.showPassword = this.config.passwordOpenEye;
  },
  methods: {
    onChange(v) {
      this.props?.onTriggerChange(v?.trim() || '', this.props.field);
    },
    onClear(v) {
      this.props?.onTriggerChange(v, this.props.field);
    },
    onBlur(v) {
      this.props?.config?.onBlur?.(v, this.props.field);
    },
    onFocus(v) {
      this.props?.config?.onFocus?.(v, this.props.field);
    },
    onConfirm(v) {
      this.props?.config?.onConfirm?.(v, this.props.field);
    },
    changePassword(e) {
      const { type } = e.target.dataset;
      this.showPassword = type === 'hide';
    },
  },
});
