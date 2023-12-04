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
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
var SliderController = /** @class */ (function () {
    function SliderController(_value, _props) {
        this._value = _value;
        this._props = _props;
        this.id = 0;
        this.valueId = 0;
        this._callback = null;
        this._moveStatus = null;
    }
    Object.defineProperty(SliderController.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SliderController.prototype, "props", {
        get: function () {
            return this._props;
        },
        enumerable: false,
        configurable: true
    });
    SliderController.prototype.handleMove = function (component, e, type) {
        var _this = this;
        if (this.props.disabled) {
            return;
        }
        var currentId = this.getId();
        this.getRect(component, e).then(function (res) {
            var _a = _this.getValue(res, type), value = _a.value, moveStatus = _a.moveStatus;
            var formatValue = _this.formatValue(value);
            _this.fireChange(currentId, formatValue, moveStatus, type, e);
        });
    };
    SliderController.prototype.fireChange = function (id, value, moveStatus, type, event) {
        if (id < this.valueId) {
            return;
        }
        if (this._callback) {
            var changed = !this.isSliderValueEqual(this._value, value);
            var moveStatusChanged = this.isMoveStatusChanged(this._moveStatus, moveStatus);
            this._value = value;
            this.valueId = id;
            if (changed || moveStatusChanged) {
                this._callback(value, moveStatus, {
                    valueChange: changed,
                    moveStatusChange: moveStatusChanged,
                    type: type,
                    event: event,
                });
            }
        }
    };
    SliderController.prototype.isMoveStatusChanged = function (value1, value2) {
        if (value1 === value2) {
            return false;
        }
        if (!value1 || !value2) {
            return true;
        }
        if (value1.changingStart !== value2.changingStart) {
            return true;
        }
        if (value1.changingEnd !== value2.changingEnd) {
            return true;
        }
        return false;
    };
    SliderController.prototype.isSliderValueEqual = function (value1, value2) {
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
    };
    SliderController.prototype.getId = function () {
        var id = this.id;
        this.id = this.id + 1;
        return id;
    };
    SliderController.prototype.getRect = function (component, e) {
        return __awaiter(this, void 0, void 0, function () {
            var elementId, instance, element, touch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        elementId = e.currentTarget.id;
                        instance = component;
                        return [4 /*yield*/, getInstanceBoundingClientRect(instance, "#".concat(elementId))];
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
    };
    SliderController.prototype.fitSliderValue = function (value, min, max, isRange) {
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
        return [Math.max(min, leftValue), Math.min(max, rightValue)];
    };
    SliderController.prototype.getValue = function (rect, type) {
        var touchPosition = (rect.touch.pageX - rect.element.left) / rect.element.width;
        var props = this.props;
        var currentValue = this.value;
        var value = props.min + touchPosition * (props.max - props.min);
        if (!props.range) {
            return {
                value: value,
                moveStatus: type === 'end'
                    ? {
                        changingEnd: false,
                        changingStart: false,
                    }
                    : {
                        changingEnd: true,
                    },
            };
        }
        else {
            var leftValue = currentValue[0];
            var rightValue = currentValue[1];
            var leftDistance = Math.abs(leftValue - value);
            var rightDistance = Math.abs(rightValue - value);
            var isFarFromLeft = leftDistance > rightDistance;
            var farValue = isFarFromLeft ? leftValue : rightValue;
            return {
                value: [value, farValue],
                moveStatus: type === 'end'
                    ? {
                        changingEnd: false,
                        changingStart: false,
                    }
                    : isFarFromLeft
                        ? {
                            changingEnd: true,
                        }
                        : {
                            changingStart: true,
                        },
            };
        }
    };
    SliderController.prototype.formatValue = function (val) {
        var props = this.props;
        var value = this.fitSliderValue(val, props.min, props.max, props.range);
        value = this.getRoundedValue(value, props.step);
        return value;
    };
    SliderController.prototype.getRoundedValue = function (value, step) {
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
    };
    SliderController.prototype.updateProps = function (props) {
        this._props = props;
    };
    SliderController.prototype.updateValue = function (value) {
        this._value = value;
    };
    SliderController.prototype.updateMoveStatus = function (moveStatus) {
        this._moveStatus = moveStatus;
    };
    SliderController.prototype.onChange = function (callback) {
        this._callback = callback;
    };
    return SliderController;
}());
export { SliderController };
