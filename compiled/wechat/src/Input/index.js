import { useEvent, useState, useEffect } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
var Input = function (props) {
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
mountComponent(Input, {
    type: null,
    value: null,
    defaultValue: null,
    placeholder: null,
    placeholderClassName: null,
    placeholderStyle: null,
    allowClear: null,
    enableNative: null,
    confirmType: null,
    confirmHold: null,
    controlled: null,
    alwaysSystem: null,
    selectionStart: null,
    selectionEnd: null,
    cursor: null,
    maxLength: null,
    inputClassName: null,
    inputStyle: null,
    password: null,
    prefix: null,
    disabled: null,
    focusClassName: null,
    suffix: null,
    focus: null,
    name: null,
    focusStyle: null,
    randomNumber: null,
});
