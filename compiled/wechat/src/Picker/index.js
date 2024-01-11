import { useEvent, useRef, useState, useEffect, useMemo, } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { PickerFunctionalProps } from './props';
import { getMatchedItemByIndex, getMatchedItemByValue, getterColumns, getterFormatText, getterSelectedIndex, } from './utils';
var Picker = function (props) {
    var _a;
    var _b = useMixState((_a = props.defaultValue) !== null && _a !== void 0 ? _a : [], {
        value: props.value,
    }), value = _b[0], _c = _b[1], isValueControlled = _c.isControlled, updateValue = _c.update;
    var _d = useComponentEvent(props), triggerEvent = _d.triggerEvent, triggerEventOnly = _d.triggerEventOnly, triggerEventValues = _d.triggerEventValues;
    var _e = useMixState(props.defaultVisible, {
        value: props.visible,
    }), visible = _e[0], updateVisible = _e[1].update;
    var singleRef = useRef(false);
    var selectIndexRef = useRef(null);
    function triggerPicker(newVisibleValue) {
        updateVisible(newVisibleValue);
        triggerEvent('visibleChange', newVisibleValue);
    }
    var _f = useState([]), selectedIndex = _f[0], setSelectedIndex = _f[1];
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
    }, [props.formattedValueText, visible, columns, value, props.onFormat]);
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
mountComponent(Picker, PickerFunctionalProps);
