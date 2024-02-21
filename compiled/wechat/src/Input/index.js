import { hasValue } from '../_util/hooks/useMergedState';
import { triggerEvent } from '../_util/simply';
import { InputFunctionalProps } from './props';
Component({
    props: InputFunctionalProps,
    methods: {
        isControlled: function () {
            var _a = this.props, controlled = _a.controlled, value = _a.value;
            return hasValue(controlled) || hasValue(value);
        },
        updateValue: function (newValue) {
            this.setData({
                _valueModified: true,
                _value: newValue,
            });
        },
        onChange: function (e) {
            var newValue = e.detail.value;
            if (!this.isControlled()) {
                this.updateValue(newValue);
            }
            triggerEvent(this, 'change', newValue, e);
        },
        onFocus: function (e) {
            var newValue = e.detail.value;
            this.setData({
                selfFocus: true
            });
            triggerEvent(this, 'focus', newValue, e);
        },
        onBlur: function (e) {
            var newValue = e.detail.value;
            this.setData({
                selfFocus: false
            });
            triggerEvent(this, 'blur', newValue, e);
        },
        onConfirm: function (e) {
            var newValue = e.detail.value;
            triggerEvent(this, 'confirm', newValue, e);
        },
        onClear: function (e) {
            if (!this.isControlled()) {
                this.updateValue('');
            }
            triggerEvent(this, 'change', '', e);
        },
        update: function (e) {
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
});
