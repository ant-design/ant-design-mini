var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { Component, triggerEvent, getValueFromProps } from '../_util/simply';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { sliderDefaultProps } from './props';
import createValue from '../mixins/value';
Component(sliderDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
    },
    formatValue: function (val) {
        var _a = getValueFromProps(this, [
            'min',
            'max',
            'step',
            'range',
        ]), min = _a[0], max = _a[1], step = _a[2], range = _a[3];
        var value = this.fitSliderValue(val, min, max, step, range);
        value = this.getRoundedValue(value, step);
        return value;
    },
    getRoundedValue: function (value, step) {
        if (step === void 0) { step = 1; }
        if (value === undefined) {
            return 0;
        }
        if (typeof value === 'number') {
            return Math.round(value / step) * step;
        }
        return [
            Math.round(value[0] / step) * step,
            Math.round(value[1] / step) * step,
        ];
    },
    setSliderStyleByValue: function (roundedValue) {
        var leftValue = 0;
        var rightValue = 0;
        var _a = getValueFromProps(this, [
            'min',
            'max',
        ]), minFromProps = _a[0], maxFromProps = _a[1];
        var max = maxFromProps !== null && maxFromProps !== void 0 ? maxFromProps : sliderDefaultProps.max;
        var min = minFromProps !== null && minFromProps !== void 0 ? minFromProps : sliderDefaultProps.min;
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
        this.setData({
            sliderLeft: left,
            sliderWidth: width,
        });
    },
    setTickList: function () {
        var _a = getValueFromProps(this, [
            'step',
            'min',
            'max',
            'showTicks',
        ]), step = _a[0], min = _a[1], max = _a[2], showTicks = _a[3];
        if (!showTicks) {
            return;
        }
        var tickList = [];
        var stepCount = (max - min) / step;
        for (var i = 0; i <= stepCount; i += 1) {
            tickList.push({
                left: i * (100 / stepCount),
                value: i * step + min,
            });
        }
        this.setData({
            tickList: tickList,
        });
    },
    onTouchChanged: function (e, type) {
        return __awaiter(this, void 0, void 0, function () {
            var changeMoving, rect, _a, min, max, range, touchPosition, value, currentValue, leftValue, rightValue, leftDistance, rightDistance, isFarFromLeft, farValue;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (getValueFromProps(this, 'disabled')) {
                            return [2 /*return*/];
                        }
                        changeMoving = function (params) {
                            var newParams = {};
                            for (var key in params) {
                                if (params[key] !== _this.data[key]) {
                                    newParams[key] = params[key];
                                }
                            }
                            if (Object.keys(newParams).length > 0) {
                                _this.setData(newParams);
                            }
                        };
                        return [4 /*yield*/, this.getRect(e)];
                    case 1:
                        rect = _b.sent();
                        if (!rect)
                            return [2 /*return*/];
                        _a = getValueFromProps(this, [
                            'min',
                            'max',
                            'range',
                        ]), min = _a[0], max = _a[1], range = _a[2];
                        touchPosition = (rect.touch.pageX - rect.element.left) / rect.element.width;
                        value = min + touchPosition * (max - min);
                        if (!range) {
                            this.update(value, {}, !this.isControlled(), true);
                            changeMoving({ changingEnd: true });
                        }
                        else {
                            currentValue = this.getValue();
                            leftValue = currentValue[0];
                            rightValue = currentValue[1];
                            leftDistance = Math.abs(leftValue - value);
                            rightDistance = Math.abs(rightValue - value);
                            isFarFromLeft = leftDistance > rightDistance;
                            farValue = isFarFromLeft ? leftValue : rightValue;
                            this.update([value, farValue], {}, !this.isControlled(), 'onChange');
                            if (isFarFromLeft) {
                                changeMoving({ changingEnd: true });
                            }
                            else {
                                changeMoving({ changingStart: true });
                            }
                        }
                        if (type === 'end') {
                            changeMoving({ changingEnd: false, changingStart: false });
                            triggerEvent(this, 'afterChange', this.getValue(), e);
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    getRect: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var element, touch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getInstanceBoundingClientRect(this.getInstance(), "#ant-slider-id-".concat(this.$id || ''))];
                    case 1:
                        element = _a.sent();
                        touch = e.changedTouches[0];
                        if (element) {
                            return [2 /*return*/, {
                                    touch: {
                                        pageX: touch.pageX,
                                    },
                                    element: {
                                        left: element.left,
                                        width: element.width,
                                    },
                                }];
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    cloneSliderValue: function (value) {
        if (typeof value === 'object') {
            return [value[0], value[1]];
        }
        return value;
    },
    isSliderValueEqual: function (value1, value2) {
        if (value1 === value2) {
            return true;
        }
        if (value1 === undefined || value2 === undefined) {
            return false;
        }
        if (typeof value1 === 'number' || typeof value2 == 'number') {
            return value1 === value2;
        }
        if (value1[0] === value2[0] && value1[1] === value2[1]) {
            return true;
        }
        return false;
    },
    fitSliderValue: function (value, min, max, step, isRange) {
        if (value === undefined || value === null) {
            if (isRange) {
                return [min, min];
            }
            else {
                return min !== null && min !== void 0 ? min : 0;
            }
        }
        if (typeof value === 'number') {
            if (value > max) {
                return max;
            }
            if (value < min) {
                return min;
            }
            return value;
        }
        var leftValue = Math.min(value[0], value[1]);
        var rightValue = Math.max(value[0], value[1]);
        return [
            Math.max(min, leftValue),
            Math.min(max, rightValue),
        ];
    },
    handleTrackTouchStart: function (e) {
        this.onTouchChanged(e, 'start');
    },
    handleTrackTouchMove: function (e) {
        this.onTouchChanged(e, 'move');
    },
    handleTrackTouchEnd: function (e) {
        this.onTouchChanged(e, 'end');
    },
}, {
    sliderLeft: 0,
    sliderWidth: 0,
    tickList: [],
    changingStart: false,
    changingEnd: false,
}, [
    createValue({
        transformValue: function (val, extra, needUpdate, emit) {
            if (needUpdate === void 0) { needUpdate = true; }
            var value = this.formatValue(val);
            if (needUpdate) {
                this.setSliderStyleByValue(value);
                this.setTickList();
            }
            this.onChangeValue =
                typeof this.onChangeValue === 'undefined'
                    ? this.getValue()
                    : this.onChangeValue;
            if (emit && !this.isSliderValueEqual(this.onChangeValue, value)) {
                this.onChangeValue = value;
                triggerEvent(this, 'change', value);
            }
            return {
                value: value,
                needUpdate: needUpdate,
            };
        },
    }),
], {
    onChangeValue: undefined,
    observers: {
        'min, max, step, range, showTicks': function () {
            var value = getValueFromProps(this, 'value');
            this.update(value);
        },
    },
});
