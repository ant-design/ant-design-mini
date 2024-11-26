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
import { Component, triggerEvent, getValueFromProps } from '../_util/simply';
import { RateDefaultProps } from './props';
import createValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
Component(RateDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
    },
    getRate: function (clientX) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, gutter, count, allowHalf, _b, left, width, halfRateWidth, num, halfRateCount, val, rate;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = getValueFromProps(this, [
                            'gutter',
                            'count',
                            'allowHalf',
                        ]), gutter = _a[0], count = _a[1], allowHalf = _a[2];
                        return [4 /*yield*/, getInstanceBoundingClientRect(this.getInstance(), "#ant-rate-container".concat(this.$id ? "-".concat(this.$id) : ''))];
                    case 1:
                        _b = _c.sent(), left = _b.left, width = _b.width;
                        halfRateWidth = (width - (count - 1) * gutter) / count / 2;
                        num = clientX - left;
                        halfRateCount = 0;
                        /* eslint-disable no-constant-condition */
                        while (true) {
                            val = halfRateWidth * halfRateCount +
                                gutter * Math.floor(halfRateCount / 2);
                            if (halfRateCount >= count * 2 || num <= val) {
                                break;
                            }
                            halfRateCount++;
                        }
                        rate = allowHalf
                            ? halfRateCount * 0.5
                            : Math.ceil(halfRateCount * 0.5);
                        return [2 /*return*/, rate];
                }
            });
        });
    },
    handleStarTap: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, readonly, allowClear, _b, clientX, x, clickX, rateValue, rate;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = getValueFromProps(this, [
                            'readonly',
                            'allowClear',
                        ]), readonly = _a[0], allowClear = _a[1];
                        if (readonly) {
                            return [2 /*return*/];
                        }
                        _b = e.detail, clientX = _b.clientX, x = _b.x;
                        clickX = typeof x === 'number' ? x : clientX;
                        rateValue = this.getValue();
                        return [4 /*yield*/, this.getRate(clickX)];
                    case 1:
                        rate = _c.sent();
                        if (rateValue === rate && allowClear) {
                            rate = 0;
                        }
                        if (!this.isControlled()) {
                            this.update(rate);
                        }
                        if (rateValue !== rate) {
                            triggerEvent(this, 'change', rate);
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    handleStarMove: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var readonly, touches, clientX, rate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        readonly = getValueFromProps(this, ['readonly'])[0];
                        if (readonly) {
                            return [2 /*return*/];
                        }
                        touches = e.touches;
                        clientX = touches[0].clientX;
                        if (!this.moveRate) {
                            this.moveRate = {
                                originalRate: this.getValue(),
                            };
                        }
                        return [4 /*yield*/, this.getRate(clientX)];
                    case 1:
                        rate = _a.sent();
                        if (this.moveRate) {
                            this.moveRate = __assign(__assign({}, this.moveRate), { currentRate: rate });
                            if (this.isControlled()) {
                                this.setData({ displayValue: rate });
                            }
                            else {
                                this.update(rate);
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    handleStarMoveEnd: function () {
        var readonly = getValueFromProps(this, 'readonly');
        if (readonly) {
            return;
        }
        if (!this.moveRate) {
            return;
        }
        var _a = this.moveRate, currentRate = _a.currentRate, originalRate = _a.originalRate;
        this.moveRate = null;
        if (this.isControlled()) {
            this.setData({ displayValue: null });
        }
        if (currentRate !== originalRate) {
            triggerEvent(this, 'change', currentRate);
        }
    },
}, { displayValue: null }, [
    createValue({
        transformValue: function (value) {
            var allowHalf = getValueFromProps(this, 'allowHalf');
            if (allowHalf) {
                return {
                    needUpdate: true,
                    value: value % 0.5 !== 0 ? Math.round(value) : value,
                };
            }
            return {
                needUpdate: true,
                value: Math.ceil(value),
            };
        },
    }),
]);
