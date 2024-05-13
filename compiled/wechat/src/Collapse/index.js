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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Component, triggerEvent, getValueFromProps } from '../_util/simply';
import { CollapseDefaultProps } from './props';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import createValue from '../mixins/value';
Component(CollapseDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
    },
    getBoundingClientRectWithBuilder: function (builder) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getInstanceBoundingClientRect(this.getInstance(), builder(this.$id ? "-".concat(this.$id) : ''))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    formatCurrent: function (val, props) {
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
        return __spreadArray([], current, true);
    },
    onChange: function (e) {
        var itemIndex = parseInt(e.currentTarget.dataset.index, 10);
        var _a = getValueFromProps(this, [
            'items',
            'accordion',
        ]), items = _a[0], accordion = _a[1];
        if (items[itemIndex] && items[itemIndex].disabled) {
            return;
        }
        var arr = this.getValue();
        var current = __spreadArray([], arr, true);
        var index = current.indexOf(itemIndex);
        if (index >= 0) {
            current.splice(index, 1);
        }
        else {
            if (accordion) {
                current = [itemIndex];
            }
            else {
                current.push(itemIndex);
                current.sort();
            }
        }
        if (!this.isControlled()) {
            this.update(current);
        }
        triggerEvent(this, 'change', current, e);
    },
    updateContentHeight: function (prevCurrent, nextCurrent) {
        return __awaiter(this, void 0, void 0, function () {
            var prevCurrentArray, nextCurrentArray, expandArray, closeArray, items, contentHeight;
            var _this = this;
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
                        items = getValueFromProps(this, 'items');
                        return [4 /*yield*/, Promise.all(items.map(function (item, index) { return __awaiter(_this, void 0, void 0, function () {
                                var height;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(expandArray.indexOf(index) >= 0 ||
                                                closeArray.indexOf(index) >= 0)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, this.getBoundingClientRectWithBuilder(function (id) { return ".ant-collapse-item-content".concat(id, "-").concat(index); })];
                                        case 1:
                                            height = (_a.sent()).height;
                                            return [2 /*return*/, "".concat(height, "px")];
                                        case 2: return [2 /*return*/, this.data.contentHeight[index]];
                                    }
                                });
                            }); }))];
                    case 1:
                        contentHeight = _a.sent();
                        if (closeArray.length === 0) {
                            this.setData({
                                contentHeight: contentHeight,
                            });
                        }
                        else {
                            this.setData({
                                contentHeight: contentHeight,
                            });
                            setTimeout(function () {
                                contentHeight = contentHeight.map(function (item, index) {
                                    if (closeArray.indexOf(index) >= 0) {
                                        return '0px';
                                    }
                                    return item;
                                });
                                _this.setData({
                                    contentHeight: contentHeight,
                                });
                            }, 10);
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    resetContentHeight: function (e) {
        var index = parseInt(e.currentTarget.dataset.index, 10);
        if (this.getValue().indexOf(index) < 0) {
            return;
        }
        var contentHeight = __spreadArray([], this.data.contentHeight, true);
        contentHeight[index] = '';
        this.setData({
            contentHeight: contentHeight,
        });
    },
}, {
    contentHeight: [],
    hasChange: false,
}, [
    createValue({
        valueKey: 'current',
        defaultValueKey: 'defaultCurrent',
        transformValue: function (current, extra) {
            var value = this.formatCurrent(current, extra ? extra.nextProps : getValueFromProps(this));
            return {
                needUpdate: true,
                value: value,
            };
        },
    }),
], {
    observers: {
        '**': function (data) {
            var prevData = this._prevData || this.data;
            this._prevData = __assign({}, data);
            if (prevData.items !== data.items || !this.isEqualValue(prevData)) {
                this.updateContentHeight(this.getValue(prevData), this.getValue());
            }
        },
    },
    attached: function () {
        var current = this.getValue();
        var contentHeight = this.properties.items.map(function (item, index) {
            if (current.indexOf(index) >= 0) {
                return '';
            }
            return '0px';
        });
        this.setData({
            hasChange: true,
            contentHeight: contentHeight,
        });
        this._prevData = this.data;
    },
});
