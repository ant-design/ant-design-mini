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
import { useComponent, useEvent, useRef, useState, } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { RateFunctionalProps } from './props';
var Rate = function (props) {
    var _a = useMixState(props.defaultValue, {
        value: props.value,
        postState: function (value) {
            if (props.allowHalf) {
                return {
                    valid: true,
                    value: value % 0.5 !== 0 ? Math.round(value) : value,
                };
            }
            return {
                valid: true,
                value: Math.ceil(value),
            };
        },
    }), rateValue = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    var _c = useState(null), displayValue = _c[0], setDisplayValue = _c[1];
    var ref = useRef(null);
    var instance = useComponent();
    function getInstance() {
        if (instance.$id) {
            return my;
        }
        return instance;
    }
    function getRate(clientX) {
        return __awaiter(this, void 0, void 0, function () {
            var gutter, count, _a, left, width, halfRateWidth, num, halfRateCount, val, rate;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        gutter = props.gutter, count = props.count;
                        return [4 /*yield*/, getInstanceBoundingClientRect(getInstance(), "#ant-rate-container".concat(instance.$id ? "-".concat(instance.$id) : ''))];
                    case 1:
                        _a = _b.sent(), left = _a.left, width = _a.width;
                        halfRateWidth = (width - (count - 1) * gutter) / count / 2;
                        num = clientX - left;
                        halfRateCount = 0;
                        /* eslint-disable no-constant-condition */
                        while (true) {
                            val = halfRateWidth * halfRateCount + gutter * Math.floor(halfRateCount / 2);
                            if (halfRateCount >= count * 2 || num <= val) {
                                break;
                            }
                            halfRateCount++;
                        }
                        rate = props.allowHalf
                            ? halfRateCount * 0.5
                            : Math.ceil(halfRateCount * 0.5);
                        return [2 /*return*/, rate];
                }
            });
        });
    }
    useEvent('handleStarTap', function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, clientX, x, clickX, rate;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (props.readonly) {
                        return [2 /*return*/];
                    }
                    _a = e.detail, clientX = _a.clientX, x = _a.x;
                    clickX = typeof x === 'number' ? x : clientX;
                    return [4 /*yield*/, getRate(clickX)];
                case 1:
                    rate = _b.sent();
                    if (rateValue === rate && props.allowClear) {
                        rate = 0;
                    }
                    if (!isControlled) {
                        update(rate);
                    }
                    if (rateValue !== rate) {
                        triggerEvent('change', rate);
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    useEvent('handleStarMove', function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var touches, clientX, rate;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (props.readonly) {
                        return [2 /*return*/];
                    }
                    touches = e.touches;
                    clientX = touches[0].clientX;
                    if (!ref.current) {
                        ref.current = {
                            originalRate: rateValue,
                        };
                    }
                    return [4 /*yield*/, getRate(clientX)];
                case 1:
                    rate = _a.sent();
                    if (ref.current) {
                        ref.current = __assign(__assign({}, ref.current), { currentRate: rate });
                        if (isControlled) {
                            setDisplayValue(rate);
                        }
                        else {
                            update(rate);
                        }
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    useEvent('handleStarMoveEnd', function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, currentRate, originalRate;
        return __generator(this, function (_b) {
            if (props.readonly) {
                return [2 /*return*/];
            }
            if (!ref.current) {
                return [2 /*return*/];
            }
            _a = ref.current, currentRate = _a.currentRate, originalRate = _a.originalRate;
            ref.current = null;
            if (isControlled) {
                setDisplayValue(null);
            }
            if (currentRate !== originalRate) {
                triggerEvent('change', currentRate);
            }
            return [2 /*return*/];
        });
    }); });
    return {
        mixin: {
            value: displayValue !== null ? displayValue : rateValue,
        },
    };
};
mountComponent(Rate, RateFunctionalProps);
