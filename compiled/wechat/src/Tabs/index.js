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
import createValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { Component, getValueFromProps, triggerEvent } from '../_util/simply';
import { TabsDefaultProps } from './props';
Component(TabsDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
    },
    get$Id: function () {
        return this.$id ? "-".concat(this.$id) : '';
    },
    getBoundingClientRect: function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getInstanceBoundingClientRect(this.getInstance(), query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    updateFade: function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, _a, view, item;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.setData({
                            leftFade: !!this.scrollLeft,
                        });
                        items = getValueFromProps(this, 'items');
                        return [4 /*yield*/, Promise.all([
                                this.getBoundingClientRect("#ant-tabs-bar-scroll-view".concat(this.get$Id())),
                                this.getBoundingClientRect("#ant-tabs-bar-item".concat(this.get$Id(), "-").concat(items.length - 1)),
                            ])];
                    case 1:
                        _a = _b.sent(), view = _a[0], item = _a[1];
                        if (!item || !view) {
                            return [2 /*return*/];
                        }
                        this.setData({
                            rightFade: item.left + item.width / 2 > view.width,
                        });
                        return [2 /*return*/];
                }
            });
        });
    },
    updateScroll: function () {
        return __awaiter(this, void 0, void 0, function () {
            var current, _a, view, item, _b, direction, scrollMode, scrollTop, needScroll_1, distance, scrollLeft, needScroll, distance;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        current = this.getValue();
                        return [4 /*yield*/, Promise.all([
                                this.getBoundingClientRect("#ant-tabs-bar-scroll-view".concat(this.get$Id())),
                                this.getBoundingClientRect("#ant-tabs-bar-item".concat(this.get$Id(), "-").concat(current)),
                            ])];
                    case 1:
                        _a = _c.sent(), view = _a[0], item = _a[1];
                        if (!view || !item) {
                            return [2 /*return*/];
                        }
                        _b = getValueFromProps(this, [
                            'direction',
                            'scrollMode',
                        ]), direction = _b[0], scrollMode = _b[1];
                        if (direction === 'vertical') {
                            scrollTop = this.scrollTop || 0;
                            needScroll_1 = false;
                            if (scrollMode === 'center') {
                                needScroll_1 = true;
                                scrollTop +=
                                    item.top - view.top - Math.max((view.height - item.height) / 2, 0);
                            }
                            else {
                                distance = item.top - view.top;
                                if (distance < 0) {
                                    scrollTop += distance;
                                    needScroll_1 = true;
                                }
                                else if (distance + item.height > view.height) {
                                    scrollTop += Math.min(distance + item.height - view.height, distance);
                                    needScroll_1 = true;
                                }
                            }
                            if (needScroll_1) {
                                if (scrollTop === this.data.scrollTop) {
                                    scrollTop += Math.random();
                                }
                                this.setData({
                                    scrollTop: scrollTop,
                                });
                            }
                            return [2 /*return*/];
                        }
                        scrollLeft = this.scrollLeft || 0;
                        needScroll = false;
                        if (scrollMode === 'center') {
                            needScroll = true;
                            scrollLeft +=
                                item.left - view.left - Math.max((view.width - item.width) / 2, 0);
                        }
                        else {
                            distance = item.left - view.left;
                            if (distance < 0) {
                                scrollLeft += distance;
                                needScroll = true;
                            }
                            else if (distance + item.width > view.width) {
                                scrollLeft += Math.min(distance + item.width - view.width, distance);
                                needScroll = true;
                            }
                        }
                        if (needScroll) {
                            if (scrollLeft === this.data.scrollLeft) {
                                scrollLeft += Math.random();
                            }
                            this.setData({
                                scrollLeft: scrollLeft,
                            });
                            this.updateFade();
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    onScroll: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var direction;
            return __generator(this, function (_a) {
                direction = getValueFromProps(this, 'direction');
                if (direction === 'vertical') {
                    this.scrollTop = e.detail.scrollTop;
                    return [2 /*return*/];
                }
                this.scrollLeft = e.detail.scrollLeft;
                this.updateFade();
                return [2 /*return*/];
            });
        });
    },
    onChange: function (e) {
        var index = parseInt(e.currentTarget.dataset.index, 10);
        var items = getValueFromProps(this, 'items');
        if (items[index].disabled) {
            return;
        }
        if (this.getValue() === index) {
            return;
        }
        if (!this.isControlled()) {
            this.update(index);
        }
        triggerEvent(this, 'change', index, e);
    },
}, {
    scrollHeight: 0,
    scrollLeft: 0,
    scrollTop: 0,
    leftFade: false,
    rightFade: false,
}, [
    createValue({
        valueKey: 'current',
        defaultValueKey: 'defaultCurrent',
    }),
], {
    scrollLeft: 0,
    scrollTop: 0,
    attached: function () {
        var _this = this;
        this.updateScroll();
        this.getBoundingClientRect('.ant-tabs-bar-item').then(function (res) {
            var direction = getValueFromProps(_this, 'direction');
            if (res && res.height > 0 && direction !== 'vertical') {
                _this.setData({
                    scrollHeight: res.height,
                });
            }
            else {
                _this.setData({
                    scrollHeight: direction === 'vertical' ? 0 : 40,
                });
            }
        });
    },
    observers: {
        'items': function () {
            this.updateScroll();
        },
        'mixin.current': function () {
            this.updateScroll();
        },
    },
});
