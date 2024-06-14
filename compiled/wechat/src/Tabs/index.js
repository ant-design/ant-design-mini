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
import { useState } from 'functional-mini/compat';
import { useEvent, useReady, useRef, } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';
import { useComponentUpdateEffect } from '../_util/hooks/useLayoutEffect';
import { useMixState } from '../_util/hooks/useMixState';
import { TabsFunctionalProps } from './props';
var Tabs = function (props) {
    var _a = useMixState(props.defaultCurrent, {
        value: props.current,
    }), currentValue = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update;
    var _c = useState({
        scrollLeft: 0,
        scrollTop: 0,
        leftFade: false,
        rightFade: false,
    }), state = _c[0], updateState = _c[1];
    var scrollRef = useRef({ scrollLeft: 0, scrollTop: 0 });
    var triggerEvent = useComponentEvent(props).triggerEvent;
    var updatePartState = function (part) {
        updateState(function (old) {
            return __assign(__assign({}, old), part);
        });
    };
    var _d = useInstanceBoundingClientRect(), getBoundingClientRectWithBuilder = _d.getBoundingClientRectWithBuilder, getBoundingClientRect = _d.getBoundingClientRect;
    var updateFade = useStableCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, view, item;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    updatePartState({
                        leftFade: !!scrollRef.current.scrollLeft,
                    });
                    return [4 /*yield*/, Promise.all([
                            getBoundingClientRectWithBuilder(function (id) { return "#ant-tabs-bar-scroll-view".concat(id); }),
                            getBoundingClientRectWithBuilder(function (id) { return "#ant-tabs-bar-item".concat(id, "-").concat(props.items.length - 1); }),
                        ])];
                case 1:
                    _a = _b.sent(), view = _a[0], item = _a[1];
                    if (!item || !view) {
                        return [2 /*return*/];
                    }
                    updatePartState({
                        rightFade: item.left + item.width / 2 > view.width,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    var updateScroll = useStableCallback(function () { return __awaiter(void 0, void 0, void 0, function () {
        var current, _a, view, item, scrollTop, needScroll_1, distance, scrollLeft, needScroll, distance;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    current = currentValue;
                    return [4 /*yield*/, Promise.all([
                            getBoundingClientRectWithBuilder(function (id) { return "#ant-tabs-bar-scroll-view".concat(id); }),
                            getBoundingClientRectWithBuilder(function (id) { return "#ant-tabs-bar-item".concat(id, "-").concat(current); }),
                        ])];
                case 1:
                    _a = _b.sent(), view = _a[0], item = _a[1];
                    if (!view || !item) {
                        return [2 /*return*/];
                    }
                    if (props.direction === 'vertical') {
                        scrollTop = scrollRef.current.scrollTop || 0;
                        needScroll_1 = false;
                        if (props.scrollMode === 'center') {
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
                            if (scrollTop === state.scrollTop) {
                                scrollTop += Math.random();
                            }
                            updatePartState({
                                scrollTop: scrollTop,
                            });
                        }
                        return [2 /*return*/];
                    }
                    scrollLeft = scrollRef.current.scrollLeft || 0;
                    needScroll = false;
                    if (props.scrollMode === 'center') {
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
                        if (scrollLeft === state.scrollLeft) {
                            scrollLeft += Math.random();
                        }
                        updatePartState({
                            scrollLeft: scrollLeft,
                        });
                        updateFade();
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    useEvent('onScroll', function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (props.direction === 'vertical') {
                scrollRef.current.scrollTop = e.detail.scrollTop;
                return [2 /*return*/];
            }
            scrollRef.current.scrollLeft = e.detail.scrollLeft;
            updateFade();
            return [2 /*return*/];
        });
    }); });
    useEvent('onChange', function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var index;
        return __generator(this, function (_a) {
            index = parseInt(e.currentTarget.dataset.index, 10);
            if (props.items[index].disabled) {
                return [2 /*return*/];
            }
            if (currentValue === index) {
                return [2 /*return*/];
            }
            if (!isControlled) {
                update(index);
            }
            triggerEvent('change', index, e);
            return [2 /*return*/];
        });
    }); });
    useComponentUpdateEffect(function () {
        updateScroll();
    }, [props.items, currentValue]);
    var _e = useState(
    // vertical 模式下，不需要设置高度
    props.direction === 'vertical' ? 0 : 40), scrollHeight = _e[0], setScrollHeight = _e[1];
    useReady(function () {
        updateScroll();
        getBoundingClientRect('.ant-tabs-bar-item').then(function (res) {
            if (res && res.height > 0 && props.direction !== 'vertical') {
                setScrollHeight(res.height);
            }
        });
    }, []);
    return __assign({ scrollHeight: scrollHeight, mixin: {
            value: currentValue,
        } }, state);
};
mountComponent(Tabs, TabsFunctionalProps);
