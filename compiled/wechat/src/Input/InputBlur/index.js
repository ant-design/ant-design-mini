import { useEffect, useEvent, useRef } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { hasValue, useMergedState } from '../../_util/hooks/useMergedState';
var InputBlur = function (props) {
    var isControlled = hasValue(props.controlled)
        ? !!props.controlled
        : hasValue(props.value);
    var _a = useMergedState(props.defaultValue, {
        // 因为受控模式下 value 也是会随着 props.value 变化的, 所以这里不需要判断是否受控
        defaultValue: props.value,
    }), value = _a[0], doUpdateValue = _a[1];
    function updateValue(value, updateWithoutFocusCheck) {
        if (!updateWithoutFocusCheck && focusRef.current) {
            return;
        }
        doUpdateValue(value);
    }
    var focusRef = useRef(false);
    useEffect(function () {
        if (!focusRef.current) {
            doUpdateValue(props.value);
        }
    }, [props, focusRef]);
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChange', function (e) {
        var newValue = e.detail.value;
        if (isControlled) {
            updateValue(newValue, true);
        }
        triggerEvent('change', newValue, e);
    });
    useEvent('onFocus', function (e) {
        var newValue = e.detail.value;
        focusRef.current = true;
        triggerEvent('focus', newValue, e);
    });
    useEvent('onBlur', function (e) {
        var newValue = e.detail.value;
        focusRef.current = false;
        if (isControlled) {
            updateValue(props.value);
        }
        triggerEvent('blur', newValue, e);
    });
    useEvent('onConfirm', function (e) {
        var newValue = e.detail.value;
        triggerEvent('confirm', newValue, e);
    });
    return {
        inputValue: value,
    };
};
mountComponent(InputBlur, {
    value: null,
    defaultValue: null,
    placeholder: null,
    placeholderClassName: '',
    placeholderStyle: '',
    enableNative: null,
    confirmType: null,
    confirmHold: null,
    alwaysSystem: null,
    selectionStart: null,
    selectionEnd: null,
    cursor: null,
    controlled: null,
    inputClassName: null,
    inputStyle: null,
    focus: null,
    password: null,
    disabled: null,
    name: null,
    type: null,
    randomNumber: null,
    // 微信小程序的 maxLength 需要为 -1 才能不限制输入长度。 不能传 null
    maxLength: -1,
});
