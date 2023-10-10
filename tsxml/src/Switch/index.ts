import { SwitchDefaultProps } from './props';
import fmtEvent from '../_util/fmtEvent';
/// #if ALIPAY
import mixinValue from '../mixins/value';
/// #endif

/// #if WECHAT
import wechatMixinValue from '../mixins/wechat-value';
/// #endif
import '../_util/assert-component2';

Component({
  /// #if ALIPAY
  props: SwitchDefaultProps,
  mixins: [
    mixinValue({
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
    wechatMixinValue({
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
