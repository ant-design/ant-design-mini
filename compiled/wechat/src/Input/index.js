import { useEvent, useState } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import useLayoutEffect from '../_util/hooks/useLayoutEffect';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
import { triggerRefEvent } from '../_util/hooks/useReportRef';
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
    // 微信的 input 不支持受控模式
    // 通过 counter 的变化，重新渲染组件，让 value 改回去
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    var _b = useMergedState(props.defaultValue, option), value = _b[0], updateValue = _b[1];
    var _c = useState(false), selfFocus = _c[0], setSelfFocus = _c[1];
    var triggerEvent = useComponentEvent(props).triggerEvent;
    triggerRefEvent();
    useLayoutEffect(function (mount) {
        if (!isControlled && !mount) {
            updateValue(props.value);
        }
    }, [props.value]);
    useEvent('onChange', function (e) {
        var newValue = e.detail.value;
        if (!isControlled) {
            updateValue(newValue);
        }
        else {
            setCounter(function (c) { return c + 1; });
        }
        triggerEvent('change', newValue, e);
    });
    useEvent('onFocus', function (e) {
        var newValue = e.detail.value;
        setSelfFocus(true);
        triggerEvent('focus', newValue, e);
    });
    useEvent('onBlur', function (e) {
        var newValue = e.detail.value;
        setSelfFocus(false);
        triggerEvent('blur', newValue, e);
    });
    useEvent('onConfirm', function (e) {
        var newValue = e.detail.value;
        triggerEvent('confirm', newValue, e);
    });
    useEvent('onClear', function (e) {
        if (!isControlled) {
            updateValue('');
        }
        triggerEvent('change', '', e);
    });
    useEvent('update', function (e) {
        if (isControlled) {
            return;
        }
        updateValue(e);
    });
    return {
        counter: counter,
        state: {
            value: value,
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
    maxLength: -1,
    alwaysEmbed: false,
    cursorSpacing: 0,
    cursorColor: null,
    adjustPosition: true,
    holdKeyboard: false,
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
