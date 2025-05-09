import { createComponent } from '@alipay/merchant-base-mini';
import { getStore } from '../../store/index';
import { get } from 'lodash';

createComponent({
  data: {
    checked: false,
  },
  computed() {
    return {
      ...getStore().mapState(['formRenderPropsConfig']),
      operation: () => this.formRenderPropsConfig?.operation || {},
      fixedFooter: () => this.operation?.fixedFooter,
      flex: () => this.operation?.flex,
      className: () => {
        console.log('<<<operation', this.operation);
        return get(this.operation, 'className', '');
      },
      protocolPrefix: () => get(this.operation, 'protocolPrefix', '我已阅读并同意'),
      protocols: () => get(this.operation, 'protocols', []),
      showProtocolCheck: () => get(this.operation, 'showProtocolCheck', true),
      footer: () => get(this.operation, 'footer', []),
      // onActionTap: () => {},
      // onProtocolTap
      // onDisabledTap: () => {},
      // onProtocolChange: () => {},
      // onFooterFirstAppear: () => {},
    };
  },
  onInit() {
    this.store = getStore();
  },

  methods: {

    // 协议选框
    onProtocolChange(checked) {
      this.checked = checked;
      const { onProtocolChange } = this.operation;
      onProtocolChange?.(this.checked);
    },

    handleTapProtocolPrefix() {
      this.checked = !this.checked;
      const { onProtocolChange } = this.operation;
      onProtocolChange?.(this.checked);
    },

    // 点击协议
    onProtocolTap(event) {
      const { onProtocolTap } = this.operation;
      const { item, index } = event.currentTarget.dataset;

      onProtocolTap(item, index, event);
    },

    // 整体 Footer
    onFooterFirstAppear() {
      const { onFooterFirstAppear } = this.operation;
      onFooterFirstAppear?.();
    },

    onActionTap(event) {
      const { onActionTap } = this.operation;
      const { item, index } = event.currentTarget.dataset;

      onActionTap?.(item, index, event);
    },
    onDisabledTap(event) {
      const { onDisabledTap } = this.operation;
      const { item, index } = event.currentTarget.dataset;
      onDisabledTap?.(item, index, event);
    },
  },
});
