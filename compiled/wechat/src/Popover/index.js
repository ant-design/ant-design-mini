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
import mixinValue from '../mixins/value';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { Component, getValueFromProps, triggerEvent, triggerEventOnly, } from '../_util/simply';
import { PopoverDefaultProps } from './props';
import { getPopoverStyle } from './utils';
Component(PopoverDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
    },
    updatePopover: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, placement, autoAdjustOverflow, _b, containerRect, childrenRect, contentRect, systemInfo, _c, popoverContentStyle, adjustedPlacement;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = getValueFromProps(this, [
                            'placement',
                            'autoAdjustOverflow',
                        ]), placement = _a[0], autoAdjustOverflow = _a[1];
                        return [4 /*yield*/, Promise.all([
                                getInstanceBoundingClientRect(this.getInstance(), "#ant-popover-children".concat(this.$id ? "-".concat(this.$id) : '')),
                                getInstanceBoundingClientRect(this.getInstance(), this.$id
                                    ? "#ant-popover-children-".concat(this.$id, " > *")
                                    : "#ant-popover-children-container"),
                                getInstanceBoundingClientRect(this.getInstance(), this.$id
                                    ? "#ant-popover-content-".concat(this.$id)
                                    : '#ant-popover-content'),
                                getSystemInfo(),
                            ])];
                    case 1:
                        _b = _d.sent(), containerRect = _b[0], childrenRect = _b[1], contentRect = _b[2], systemInfo = _b[3];
                        _c = getPopoverStyle(placement, autoAdjustOverflow, {
                            containerRect: containerRect,
                            childrenRect: childrenRect,
                            contentRect: contentRect,
                            systemInfo: systemInfo,
                        }), popoverContentStyle = _c.popoverContentStyle, adjustedPlacement = _c.adjustedPlacement;
                        this.setData({
                            popoverContentStyle: popoverContentStyle,
                            adjustedPlacement: adjustedPlacement,
                        });
                        return [2 /*return*/];
                }
            });
        });
    },
    onVisibleChange: function (e) {
        var value = !this.getValue();
        if (!this.isControlled()) {
            this.update(value);
        }
        triggerEvent(this, 'visibleChange', value, e);
    },
    onTapAction: function () {
        this.onVisibleChange();
        triggerEventOnly(this, 'tapAction');
    },
}, {
    adjustedPlacement: '',
    popoverContentStyle: '',
}, [
    mixinValue({
        valueKey: 'visible',
        defaultValueKey: 'defaultVisible',
        transformValue: function (value) {
            if (value) {
                this.updatePopover();
            }
            else {
                this.setData({
                    adjustedPlacement: '',
                });
            }
            return {
                needUpdate: true,
                value: value,
            };
        },
    }),
], {
    observers: {
        'placement, autoAdjustOverflow, mixin': function () {
            if (this.getValue()) {
                this.updatePopover();
            }
        },
    },
});
