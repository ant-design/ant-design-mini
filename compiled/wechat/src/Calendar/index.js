var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import dayjs from 'dayjs';
import { useComponent, useEvent, useReady, useState, useEffect, } from 'functional-mini/component';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
import { defaultLocaleText, } from './props';
import { defaultMonthRange, getMonthListFromRange, getSelectionModeFromValue, renderCells, getScrollIntoViewId, } from './utils';
function getBoundingClientRect(instance, selector) {
    return new Promise(function (resolve, reject) {
        instance
            .createSelectorQuery()
            .select(selector)
            .boundingClientRect()
            .exec(function (ret) {
            if (ret && ret[0]) {
                resolve(ret[0]);
            }
            else {
                reject();
            }
        });
    });
}
var Calendar = function (props) {
    var _a, _b;
    var localeText = Object.assign({}, defaultLocaleText, props.localeText);
    var markItems = __spreadArray([], localeText.weekdayNames, true);
    var weekStartsOn = props.weekStartsOn;
    if (weekStartsOn === 'Sunday') {
        var item = markItems.pop();
        if (item)
            markItems.unshift(item);
    }
    var _c = useMergedState(props.defaultValue, {
        value: props.value,
    }), value = _c[0], setValue = _c[1];
    var _d = useState(''), scrollIntoViewId = _d[0], setScrollIntoViewId = _d[1];
    var selectionModeFromValue = getSelectionModeFromValue(value);
    var selectionMode = (_b = (_a = props.selectionMode) !== null && _a !== void 0 ? _a : selectionModeFromValue) !== null && _b !== void 0 ? _b : 'range';
    var triggerEvent = useComponentEvent(props).triggerEvent;
    function updateValue(newValue) {
        var isControl = hasValue(props.value);
        triggerEvent('change', newValue);
        if (!isControl) {
            setValue(newValue);
        }
    }
    useEvent('clickCell', function (e) {
        var time = e.currentTarget.dataset.time;
        var clickDate = dayjs(time.time);
        if (time.disabled) {
            return;
        }
        if (selectionMode === 'range') {
            if (Array.isArray(value)) {
                if (value.length === 1) {
                    var current = value[0];
                    if (dayjs(clickDate.toDate().getTime()).isBefore(dayjs(current))) {
                        updateValue([clickDate.toDate().getTime()]);
                    }
                    else {
                        updateValue([value[0], clickDate.toDate().getTime()]);
                    }
                }
                else {
                    updateValue([clickDate.toDate().getTime()]);
                }
            }
            else {
                updateValue([clickDate.toDate().getTime()]);
            }
        }
        else if (selectionMode === 'single') {
            updateValue(clickDate.toDate().getTime());
        }
    });
    var monthList = getMonthListFromRange(dayjs(props.monthRange[0]), dayjs(props.monthRange[1])).map(function (p) {
        var cells = renderCells(p, weekStartsOn, value, localeText);
        if (props.onFormatter && typeof props.onFormatter === 'function') {
            cells = cells.map(function (o) {
                var _a;
                var time = o.time, top = o.top, bottom = o.bottom, disabled = o.disabled, isSelectedBegin = o.isSelectedBegin, isSelectedEnd = o.isSelectedEnd, isSelected = o.isSelected;
                var newState = (_a = props.onFormatter({
                    time: time,
                    top: top ? __assign({}, top) : undefined,
                    bottom: bottom ? __assign({}, bottom) : undefined,
                    disabled: disabled,
                    isSelectedBegin: isSelectedBegin,
                    isSelectedEnd: isSelectedEnd,
                    isSelected: isSelected,
                }, value)) !== null && _a !== void 0 ? _a : {};
                var result = __assign({}, o);
                if (typeof newState === 'object') {
                    // 只允许修改三个字段
                    ['top', 'bottom', 'disabled'].forEach(function (key) {
                        if (key in newState) {
                            result[key] = newState[key];
                        }
                    });
                }
                return result;
            });
        }
        return {
            title: p.format(localeText.title),
            cells: cells,
        };
    });
    var _e = useState(0), headerState = _e[0], setHeaderState = _e[1];
    useEvent('setCurrentMonth', function (e) {
        setHeaderState(e.month);
    });
    var _f = useState(null), elementSize = _f[0], setElementSize = _f[1];
    var componentInstance = useComponent();
    function measurement() {
        Promise.all([
            getBoundingClientRect(componentInstance, '.ant-calendar-body-container'),
            getBoundingClientRect(componentInstance, '.ant-calendar-cells'),
            getBoundingClientRect(componentInstance, '.ant-calendar-title-container'),
        ])
            .then(function (_a) {
            var bodyContainer = _a[0], cellContainer = _a[1], Title = _a[2];
            // 滚动的时候 top 和 bottom 等尺寸会变
            // 所以只能依赖 height 来计算
            var paddingHeight = bodyContainer.height - cellContainer.height - Title.height;
            var monthTitleHeight = Title.height + paddingHeight;
            var cellHight = cellContainer.height / (monthList[0].cells.length / 7);
            setElementSize({
                monthTitleHeight: monthTitleHeight,
                cellHight: cellHight,
                paddingHeight: paddingHeight,
            });
        })
            .catch(function () {
            setElementSize(null);
        });
    }
    useEffect(function () {
        // 滚动到已选的位置
        props.changedScrollIntoView &&
            setScrollIntoViewId(getScrollIntoViewId(value));
    }, [value]);
    useReady(function () {
        measurement();
        // 初始化默认值时，滚动到选中位置
        var isControl = hasValue(props.value);
        if (isControl) {
            setScrollIntoViewId(getScrollIntoViewId(props.value));
        }
        else {
            props.defaultValue &&
                setScrollIntoViewId(getScrollIntoViewId(props.defaultValue));
        }
    }, []);
    useEvent('measurement', function () {
        // 组件如果内嵌在 slot 里, 一定会被渲染出来, 但是此时 cellHight 为 0
        // 此时需要重新计算
        if (!elementSize || elementSize.cellHight === 0) {
            measurement();
        }
    });
    return {
        elementSize: elementSize,
        markItems: markItems,
        monthList: monthList,
        headerState: headerState,
        scrollIntoViewId: scrollIntoViewId,
    };
};
mountComponent(Calendar, {
    defaultValue: null,
    value: null,
    selectionMode: 'range',
    monthRange: defaultMonthRange(),
    weekStartsOn: 'Sunday',
    localeText: defaultLocaleText,
    onFormatter: null,
});
