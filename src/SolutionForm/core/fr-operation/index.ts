import { createComponent } from 'miniapp-store';
import { getStore } from '../../store/index';
import { get } from 'lodash';

createComponent({
  props: {
    onTapOperation: () => {},
  },
  data: {
    checked: false,
  },
  computed() {
    return {
      ...getStore().mapState(['formRenderPropsConfig']),
      operation: () => this.formRenderPropsConfig?.operation || {},
      fixedFooter: () => this.operation?.fixedFooter,
      flex: () => this.operation?.flex,
      className: () => get(this.operation, 'className', ''),
      protocolPrefix: () => get(this.operation, 'protocolPrefix', '我已阅读并同意'),
      protocols: () => get(this.operation, 'protocols', []),
      showProtocolCheck: () => get(this.operation, 'showProtocolCheck', false),
      footer: () => get(this.operation, 'footer', []),
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
      const { onActionTap, onDisabledTap } = this.operation;
      const { item } = event.currentTarget.dataset;
      if (item.disabled) {
        onDisabledTap?.(item);
        return;
      }

      this.props.onTapOperation && this.props.onTapOperation(item);

      onActionTap?.(item);
    },
  },
});
