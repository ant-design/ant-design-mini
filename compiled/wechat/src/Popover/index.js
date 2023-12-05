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
import { useComponent, useEvent, useEffect, useState, } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { hasValue, useMergedState } from '../_util/hooks/useMergedState';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { getPopoverStyle } from './utils';
var Popover = function (props) {
    var _a = useMergedState(props.defaultVisible, {
        value: props.visible,
    }), value = _a[0], updateValue = _a[1];
    var _b = useState({
        popoverContentStyle: '',
        adjustedPlacement: '',
    }), popoverStyle = _b[0], setPopoverStyle = _b[1];
    var isControl = hasValue(props.visible);
    var instance = useComponent();
    function getInstance() {
        if (instance.$id) {
            return my;
        }
        return instance;
    }
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEffect(function () {
        if (!value) {
            setPopoverStyle(function (old) { return (__assign(__assign({}, old), { adjustedPlacement: '' })); });
            return;
        }
        var placement = props.placement, autoAdjustOverflow = props.autoAdjustOverflow;
        Promise.all([
            getInstanceBoundingClientRect(getInstance(), "#ant-popover-children".concat(instance.$id ? "-".concat(instance.$id) : '')),
            getInstanceBoundingClientRect(getInstance(), instance.$id
                ? "#ant-popover-children-".concat(instance.$id, " > *")
                : "#ant-popover-children-container"),
            getInstanceBoundingClientRect(getInstance(), instance.$id
                ? "#ant-popover-content-".concat(instance.$id)
                : '#ant-popover-content'),
            getSystemInfo(),
        ]).then(function (res) {
            var containerRect = res[0], childrenRect = res[1], contentRect = res[2], systemInfo = res[3];
            var _a = getPopoverStyle(placement, autoAdjustOverflow, {
                containerRect: containerRect,
                childrenRect: childrenRect,
                contentRect: contentRect,
                systemInfo: systemInfo,
            }), popoverContentStyle = _a.popoverContentStyle, adjustedPlacement = _a.adjustedPlacement;
            setPopoverStyle({
                popoverContentStyle: popoverContentStyle,
                adjustedPlacement: adjustedPlacement,
            });
        });
    }, [value, props.autoAdjustOverflow, props.placement]);
    useEvent('onVisibleChange', function (e) {
        var newValue = !value;
        if (!isControl) {
            updateValue(newValue);
        }
        triggerEvent('visibleChange', newValue, e);
    });
    return {
        adjustedPlacement: popoverStyle.adjustedPlacement,
        popoverContentStyle: popoverStyle.popoverContentStyle,
        mixin: {
            value: value,
        },
    };
};
mountComponent(Popover, {
    visible: null,
    defaultVisible: false,
    destroyOnClose: false,
    showMask: true,
    placement: 'top',
    autoAdjustOverflow: true,
    maskClassName: '',
    maskStyle: '',
    content: '',
    contentClassName: '',
    contentStyle: '',
    color: '',
});
