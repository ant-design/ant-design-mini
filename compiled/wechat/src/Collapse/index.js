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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useRef, useState } from 'functional-mini/compat';
import { useEffect, useEvent } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';
import { useComponentUpdateEffect } from '../_util/hooks/useLayoutEffect';
import { useMixState } from '../_util/hooks/useMixState';
import { CollapseFunctionalProps } from './props';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
var Collapse = function (props) {
    var _a = useState([]), contentHeight = _a[0], setContentHeight = _a[1];
    var _b = useState(false), hasChange = _b[0], setHasChange = _b[1];
    var taskQueueRef = useRef();
    var previousValueRef = useRef([]);
    var _c = useMixState(props.defaultCurrent, {
        value: props.current,
        postState: function (val) {
            var current = __spreadArray([], (val || []), true);
            var items = props.items;
            current = current.filter(function (item) {
                if (!items[item] || items[item].disabled) {
                    return false;
                }
                return true;
            });
            if (props.accordion) {
                current = current.length > 0 ? [current[0]] : [];
            }
            return {
                valid: true,
                value: __spreadArray([], current, true),
            };
        },
    }), value = _c[0], _d = _c[1], isControlled = _d.isControlled, update = _d.update;
    var triggerEvent = useComponentEvent(props).triggerEvent;
    useEvent('onChange', function (e) {
        var itemIndex = parseInt(e.currentTarget.dataset.index, 10);
        if (props.items[itemIndex] && props.items[itemIndex].disabled) {
            return;
        }
        var arr = value;
        var current = __spreadArray([], arr, true);
        var index = current.indexOf(itemIndex);
        if (index >= 0) {
            current.splice(index, 1);
        }
        else {
            if (props.accordion) {
                current = [itemIndex];
            }
            else {
                current.push(itemIndex);
                current.sort();
            }
        }
        if (!isControlled) {
            update(current);
        }
        triggerEvent('change', current);
    });
    var getBoundingClientRectWithBuilder = useInstanceBoundingClientRect().getBoundingClientRectWithBuilder;
    var updateContentHeight = useStableCallback(function (prevCurrent, nextCurrent) { return __awaiter(void 0, void 0, void 0, function () {
        var prevCurrentArray, nextCurrentArray, expandArray, closeArray, newContentHeight;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    prevCurrentArray = prevCurrent;
                    nextCurrentArray = nextCurrent;
                    expandArray = [];
                    closeArray = [];
                    nextCurrentArray.forEach(function (item) {
                        if (prevCurrentArray.indexOf(item) < 0) {
                            expandArray.push(item);
                        }
                    });
                    prevCurrentArray.forEach(function (item) {
                        if (nextCurrentArray.indexOf(item) < 0) {
                            closeArray.push(item);
                        }
                    });
                    return [4 /*yield*/, Promise.all(props.items.map(function (item, index) { return __awaiter(void 0, void 0, void 0, function () {
                            var height;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(expandArray.indexOf(index) >= 0 ||
                                            closeArray.indexOf(index) >= 0)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, getBoundingClientRectWithBuilder(function (id) { return ".ant-collapse-item-content".concat(id, "-").concat(index); })];
                                    case 1:
                                        height = (_a.sent()).height;
                                        return [2 /*return*/, "".concat(height, "px")];
                                    case 2: return [2 /*return*/, contentHeight[index]];
                                }
                            });
                        }); }))];
                case 1:
                    newContentHeight = _a.sent();
                    if (closeArray.length === 0) {
                        setContentHeight(newContentHeight);
                    }
                    else {
                        setContentHeight(newContentHeight);
                        taskQueueRef.current = function () {
                            setTimeout(function () {
                                setContentHeight(function (contentHeight) {
                                    return contentHeight.map(function (item, index) {
                                        if (closeArray.indexOf(index) >= 0) {
                                            return '0px';
                                        }
                                        return item;
                                    });
                                });
                            }, 10);
                        };
                    }
                    return [2 /*return*/];
            }
        });
    }); });
    useEffect(function () {
        if (taskQueueRef.current) {
            var task = taskQueueRef.current;
            taskQueueRef.current = null;
            if (typeof task === 'function') {
                task();
            }
        }
    });
    useEffect(function () {
        var current = value;
        var contentHeight = props.items.map(function (item, index) {
            if (current.indexOf(index) >= 0) {
                return '';
            }
            return '0px';
        });
        setContentHeight(contentHeight);
        setHasChange(true);
        previousValueRef.current = value;
    }, []);
    useComponentUpdateEffect(function () {
        var previous = previousValueRef.current;
        previousValueRef.current = value;
        updateContentHeight(previous, value);
    }, [props.items, JSON.stringify(value)]);
    useEvent('resetContentHeight', function (e) {
        var index = parseInt(e.currentTarget.dataset.index, 10);
        if (value.indexOf(index) < 0) {
            return;
        }
        setContentHeight(function (oldContentHeight) {
            var newContentHeight = __spreadArray([], oldContentHeight, true);
            newContentHeight[index] = '';
            return newContentHeight;
        });
    });
    return {
        contentHeight: contentHeight,
        hasChange: hasChange,
        mixin: {
            value: value,
        },
    };
};
mountComponent(Collapse, CollapseFunctionalProps);
