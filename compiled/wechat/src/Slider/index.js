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
import { useEvent, useMemo, useRef, useState, useComponent, } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { SliderController } from './controller';
import { sliderDefaultProps, SliderFunctionalProps, } from './props';
var useSliderController = function (props) {
    var controllerRef = useRef();
    if (!controllerRef.current) {
        controllerRef.current = new SliderController(0, props);
    }
    return controllerRef.current;
};
var Slider = function (props) {
    var component = useComponent();
    var sliderController = useSliderController(props);
    var _a = useMixState(props.defaultValue, {
        value: props.value,
        postState: function (value) {
            return {
                valid: true,
                value: sliderController.formatValue(value),
            };
        },
    }), value = _a[0], _b = _a[1], update = _b.update, isControlled = _b.isControlled;
    var _c = useState({
        changingStart: false,
        changingEnd: false,
    }), moveStatus = _c[0], setMoveStatus = _c[1];
    var triggerEvent = useComponentEvent(props).triggerEvent;
    sliderController.updateProps(props);
    sliderController.updateValue(value);
    sliderController.updateMoveStatus(moveStatus);
    sliderController.onChange(function (v, moveStatus, _a) {
        var valueChange = _a.valueChange, moveStatusChange = _a.moveStatusChange, type = _a.type, event = _a.event;
        if (!isControlled) {
            update(v);
        }
        if (valueChange) {
            triggerEvent('change', v);
        }
        if (moveStatusChange) {
            setMoveStatus(function (v2) { return (__assign(__assign({}, v2), moveStatus)); });
        }
        if (value && type === 'end') {
            triggerEvent('afterChange', v, event);
        }
    });
    useEvent('handleTrackTouchStart', function (e) {
        return sliderController.handleMove(component, e, 'start');
    });
    useEvent('handleTrackTouchMove', function (e) {
        return sliderController.handleMove(component, e, 'move');
    });
    useEvent('handleTrackTouchEnd', function (e) {
        return sliderController.handleMove(component, e, 'end');
    });
    var tickList = useMemo(function () {
        var step = props.step, min = props.min, max = props.max, showTicks = props.showTicks;
        if (!showTicks) {
            return [];
        }
        var tickList = [];
        var stepCount = (max - min) / step;
        for (var i = 0; i <= stepCount; i += 1) {
            tickList.push({
                left: i * (100 / stepCount),
                value: i * step + min,
            });
        }
        return tickList;
    }, [props]);
    var _d = useMemo(function () {
        var _a, _b;
        var roundedValue = value;
        var leftValue = 0;
        var rightValue = 0;
        var max = (_a = props.max) !== null && _a !== void 0 ? _a : sliderDefaultProps.max;
        var min = (_b = props.min) !== null && _b !== void 0 ? _b : sliderDefaultProps.min;
        if (roundedValue !== undefined) {
            if (typeof roundedValue === 'number') {
                leftValue = min;
                rightValue = roundedValue;
            }
            else {
                leftValue = roundedValue[0];
                rightValue = roundedValue[1];
            }
        }
        // FIX_ME when min and max is equal
        var width = ((rightValue - leftValue) / (max - min)) * 100;
        var left = ((leftValue - min) / (max - min)) * 100;
        return {
            sliderLeft: left,
            sliderWidth: width,
        };
    }, [value]), sliderLeft = _d.sliderLeft, sliderWidth = _d.sliderWidth;
    return __assign({ mixin: {
            value: value,
        }, tickList: tickList, sliderLeft: sliderLeft, sliderWidth: sliderWidth }, moveStatus);
};
mountComponent(Slider, SliderFunctionalProps);
