import { useEvent, useState, useEffect } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { hasValue, useMergedState } from '../../_util/hooks/useMergedState';
var Textarea = function (props) {
    var isControlled = hasValue(props.controlled)
        ? !!props.controlled
        : hasValue(props.value);
    var option = {
        value: props.value,
    };
    if (!isControlled && hasValue(props.value)) {
        option = {
            defaultValue: props.value,
        };
    }
    var _a = useMergedState(props.defaultValue, option), value = _a[0], updateValue = _a[1];
    var _b = useState(false), selfFocus = _b[0], setSelfFocus = _b[1];
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEffect(function () {
        // 非受控模式下, props 变化后, 需要更新 value
        if (!isControlled) {
            updateValue(props.value);
        }
    }, [props.value]);
    useEvent('onChange', function (e) {
        var newValue = e.detail.value;
        if (!isControlled) {
            updateValue(newValue);
        }
        triggerEvent('change', newValue, e);
    }, []);
    useEvent('onFocus', function (e) {
        var newValue = e.detail.value;
        setSelfFocus(true);
        triggerEvent('focus', newValue, e);
    }, []);
    useEvent('onBlur', function (e) {
        var newValue = e.detail.value;
        setSelfFocus(false);
        triggerEvent('blur', newValue, e);
    }, []);
    useEvent('onConfirm', function (e) {
        var newValue = e.detail.value;
        triggerEvent('confirm', newValue, e);
    }, []);
    useEvent('onClear', function (e) {
        if (!isControlled) {
            updateValue('');
        }
        triggerEvent('change', '', e);
    }, []);
    useEvent('update', function (e) {
        if (isControlled) {
            return;
        }
        updateValue(e);
    }, []);
    return {
        mixin: {
            value: value,
            updated: true,
            controlled: isControlled,
        },
        selfFocus: selfFocus,
    };
};
mountComponent(Textarea, {
    value: null,
    defaultValue: null,
    placeholder: null,
    placeholderClassName: null,
    placeholderStyle: null,
    autoHeight: null,
    showCount: null,
    allowClear: null,
    controlled: null,
    enableNative: false,
    maxLength: -1,
    inputClassName: null,
    disabled: null,
    inputStyle: null,
    focusStyle: null,
    name: null,
    confirmType: null,
    focus: null,
    confirmHold: null,
    focusClassName: null,
});
