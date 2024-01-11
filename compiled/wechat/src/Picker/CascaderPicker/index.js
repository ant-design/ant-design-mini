import { useEvent, useMemo, useState } from 'functional-mini/component';
import { mountComponent } from '../../_util/component';
import { useComponentEvent } from '../../_util/hooks/useComponentEvent';
import { useComponentUpdateEffect } from '../../_util/hooks/useLayoutEffect';
import { useMixState } from '../../_util/hooks/useMixState';
import { resolveEventValues } from '../../_util/platform';
import { CascaderFunctionalProps } from './props';
import { defaultFormat, getterColumns, getValidValue } from './utils';
var CascaderPicker = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
    }), realValue = _a[0], _b = _a[1], isRealValueControlled = _b.isControlled, updateRealValue = _b.update;
    var _c = useState(function () {
        var value = props.value || props.defaultValue || [];
        var columns = getterColumns(props.value || props.defaultValue, props.options);
        return { columns: columns, value: value };
    }), _d = _c[0], value = _d.value, columns = _d.columns, setState = _c[1];
    var _e = useComponentEvent(props), triggerEventOnly = _e.triggerEventOnly, triggerEventValues = _e.triggerEventValues, triggerEvent = _e.triggerEvent;
    useComponentUpdateEffect(function () {
        var newColumns = getterColumns(props.value, props.options);
        var value = getValidValue(props.value, newColumns);
        setState({ value: value, columns: newColumns });
    }, [
        props.value,
        props.options,
        /**
         * 这里不要删
         *
         * 1. picker 触发 onOk
         * 2. 更新 realValue
         * 3. picker 触发 onFormat (此时 realValue 未更新)
         * 4. 依赖里的 realValue 更新
         * 5. 触发组件再次渲染
         * 6. 此时 onFormat 读取到最新的realValue
         */
        realValue,
    ]);
    function getOptionByValue(value, options) {
        var _a;
        if (!((value === null || value === void 0 ? void 0 : value.length) > 0))
            return null;
        var result = [];
        var item = options.find(function (v) { return v.value === value[0]; });
        var _loop_1 = function (i) {
            if (!item) {
                return { value: null };
            }
            result.push({
                value: item.value,
                label: item.label,
            });
            item = (_a = item.children) === null || _a === void 0 ? void 0 : _a.find(function (v) { return v.value === value[i + 1]; });
        };
        for (var i = 0; i < value.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        return result;
    }
    useEvent('onCancel', function (e) {
        triggerEventOnly('cancel', e);
    });
    var formattedValueText = useMemo(function () {
        var onFormat = props.onFormat;
        if (typeof onFormat === 'function') {
            var formatValueByProps = onFormat(realValue, getOptionByValue(realValue, props.options));
            if (typeof formatValueByProps !== 'undefined') {
                return formatValueByProps;
            }
        }
        return defaultFormat(realValue, getOptionByValue(realValue, props.options));
    }, [realValue]);
    useEvent('onVisibleChange', function (visible) {
        if (visible) {
            var newColumns = getterColumns(realValue, props.options);
            var currentValue = getValidValue(realValue, newColumns);
            setState({ value: currentValue, columns: newColumns });
        }
        triggerEvent('visibleChange', visible);
    });
    useEvent('onOk', function () {
        // 完成时再次校验value，避免visible状态下props无效
        var validValue = getValidValue(value, columns);
        if (!isRealValueControlled) {
            updateRealValue(validValue);
        }
        triggerEventValues('ok', [
            validValue,
            getOptionByValue(validValue, props.options),
        ]);
    });
    useEvent('onChange', function (event) {
        var selectedValue = resolveEventValues(event)[0];
        var newColumns = getterColumns(selectedValue, props.options);
        var value = getValidValue(selectedValue, newColumns);
        setState({ value: value, columns: newColumns });
        triggerEventValues('change', [
            selectedValue,
            getOptionByValue(selectedValue, props.options),
        ]);
    });
    return {
        formattedValueText: formattedValueText,
        currentValue: value,
        columns: columns,
    };
};
mountComponent(CascaderPicker, CascaderFunctionalProps);
