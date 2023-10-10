import * as mixinValue from '../mixins/mixin-value';
import fmtEvent from '../_util/fmtEvent';
import { SwitchDefaultProps } from './props';

Component({
  /// #if ALIPAY
  props: SwitchDefaultProps,
  mixins: [
    mixinValue.mixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ],
  /// #endif

  /// #if WECHAT
  properties: {
    checked: {
      type: Boolean,
      value: null,
    },
    loading: Boolean,
    color: String,
    checkedText: String,
    uncheckedText: String,
    size: {
      type: String,
      value: 'medium',
    },
    disabled: Boolean,
    defaultChecked: Boolean,
  },
  options: {
    //@ts-ignore
    styleIsolation: 'shared',
  },
  behaviors: [
    mixinValue.wechatMixinValue({
      valueKey: 'checked',
      defaultValueKey: 'defaultChecked',
    }),
  ],
  /// #endif
  methods: {
    onChange(e) {
      const value = !this.getValue();
      if (!this.isControlled()) {
        this.update(value);
      }

      /// #if ALIPAY
      if (this.props.onChange) {
        this.props.onChange(value, fmtEvent(this.props, e));
      }
      /// #endif

      /// #if WECHAT
      this.triggerEvent('change', value);
      /// #endif
    },
  },
});
