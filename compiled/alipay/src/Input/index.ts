import { hasValue } from '../_util/hooks/useMergedState';
import { IPlatformEvent, triggerEvent } from '../_util/simply';
import { InputFunctionalProps } from './props';

Component({
  props: InputFunctionalProps,
  methods: {
    isControlled() {
      const { controlled, value } = this.props;
      return hasValue(controlled) || hasValue(value);
    },
    updateValue(newValue: unknown) {
      this.setData({
        _valueModified: true,
        _value: newValue,
      });
    },
    onChange(e: IPlatformEvent<{value: string;}>) {
      const newValue = e.detail.value;
      if (!this.isControlled()) {
        this.updateValue(newValue);
      }
      triggerEvent(this, 'change', newValue, e);
    },
    onFocus(e: IPlatformEvent<{value: string;}>) {
      const newValue = e.detail.value;
      this.setData({
        selfFocus: true
      });
      triggerEvent(this, 'focus', newValue, e);
    },
    onBlur(e: IPlatformEvent<{value: string;}>) {
      const newValue = e.detail.value;
      this.setData({
        selfFocus: false
      });
      triggerEvent(this, 'blur', newValue, e);
    },
    onConfirm(e: IPlatformEvent<{value: string;}>) {
      const newValue = e.detail.value;
      triggerEvent(this, 'confirm', newValue, e);
    },
    onClear(e: IPlatformEvent) {
      if (!this.isControlled()) {
        this.updateValue('');
      }
      triggerEvent(this, 'change', '', e);
     },
    update(e: string) {
      if (this.isControlled()) {
        return;
      }
      this.updateValue(e);
    }
  },
  data: {
    _valueModified: false,
    _value: undefined,
    selfFocus: false,
  },
})
