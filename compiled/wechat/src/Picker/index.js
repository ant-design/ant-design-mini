import { useEvent, useRef, useState, useEffect, useMemo, } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { getMatchedItemByIndex, getMatchedItemByValue, getterColumns, getterFormatText, getterSelectedIndex, } from './utils';
var Picker = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
    }), value = _a[0], _b = _a[1], isValueControlled = _b.isControlled, updateValue = _b.update;
    var _c = useComponentEvent(props), triggerEvent = _c.triggerEvent, triggerEventOnly = _c.triggerEventOnly, triggerEventValues = _c.triggerEventValues;
    var _d = useMixState(props.defaultVisible, {
        value: props.visible,
    }), visible = _d[0], updateVisible = _d[1].update;
    var singleRef = useRef(false);
    var selectIndexRef = useRef(null);
    function triggerPicker(newVisibleValue) {
        updateVisible(newVisibleValue);
        triggerEvent('visibleChange', newVisibleValue);
    }
    var _e = useState([]), selectedIndex = _e[0], setSelectedIndex = _e[1];
    var columns = useMemo(function () {
        return getterColumns(props.options, singleRef);
    }, [props.options]);
    useEffect(function () {
        selectIndexRef.current = null;
        setSelectedIndex(getterSelectedIndex(columns, value, singleRef));
    }, [columns, value]);
    var formatValue = useMemo(function () {
        if (typeof props.formattedValueText === 'string') {
            return props.formattedValueText;
        }
        var formatValue = getterFormatText(columns, value, props.onFormat, singleRef);
        return formatValue;
    }, [visible, columns, value, props.onFormat]);
    useEvent('onOpen', function () {
        if (props.disabled) {
            return;
        }
        selectIndexRef.current = null;
        var selectedIndex = getterSelectedIndex(columns, value, singleRef);
        setSelectedIndex(selectedIndex);
        triggerPicker(true);
    });
    useEvent('onCancel', function () {
        triggerPicker(false);
        triggerEventOnly('cancel', { detail: { type: 'cancel' } });
    });
    useEvent('onMaskDismiss', function () {
        if (!props.maskClosable) {
            return;
        }
        triggerPicker(false);
        triggerEventOnly('cancel', { detail: { type: 'mask' } });
    });
    useEvent('onChange', function (e) {
        var selectedIndex = e.detail.value;
        var _a = getMatchedItemByIndex(columns, selectedIndex, singleRef), matchedColumn = _a.matchedColumn, matchedValues = _a.matchedValues;
        selectIndexRef.current = selectedIndex;
        setSelectedIndex(selectedIndex);
        triggerEventValues('change', [matchedValues, matchedColumn], e);
    });
    useEvent('onOk', function () {
        var result;
        if (selectIndexRef.current) {
            result = getMatchedItemByIndex(columns, selectIndexRef.current, singleRef);
        }
        else {
            result = getMatchedItemByValue(columns, value, singleRef);
        }
        var matchedColumn = result.matchedColumn, matchedValues = result.matchedValues;
        triggerPicker(false);
        if (!isValueControlled) {
            updateValue(matchedValues);
        }
        triggerEventValues('ok', [matchedValues, matchedColumn]);
    });
    return {
        formatValue: formatValue,
        selectedIndex: selectedIndex,
        columns: columns,
        state: {
            visible: visible,
        },
        mixin: {
            value: value,
        },
    };
};
mountComponent(Picker, {
    formattedValueText: null,
    visible: null,
    defaultVisible: null,
    animationType: 'transform',
    value: null,
    defaultValue: [],
    disabled: false,
    title: '',
    okText: '确定',
    cancelText: '取消',
    placeholder: '请选择',
    options: [],
    popClassName: '',
    popStyle: '',
    maskClosable: true,
});
