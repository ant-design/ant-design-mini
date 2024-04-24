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
import { Component, triggerEventOnly, getValueFromProps, } from '../_util/simply';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
import { NoticeBarDefaultProps } from './props';
Component(NoticeBarDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
    },
    getBoundingClientRectWithId: function (prefix) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getInstanceBoundingClientRect(this.getInstance(), "".concat(prefix).concat(this.$id ? "-".concat(this.$id) : ''))];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    },
    onTap: function () {
        var mode = getValueFromProps(this, 'mode');
        if (mode === 'link') {
            triggerEventOnly(this, 'tap');
        }
        if (mode === 'closeable') {
            this.setData({
                show: false,
            });
            triggerEventOnly(this, 'tap');
        }
    },
    startMarquee: function (state) {
        var loop = getValueFromProps(this, 'loop');
        var leading = 500;
        var duration = state.duration, overflowWidth = state.overflowWidth, viewWidth = state.viewWidth;
        var marqueeScrollWidth = overflowWidth;
        if (loop) {
            marqueeScrollWidth = overflowWidth + viewWidth;
        }
        var newMarqueeStyle = "transform: translate3d(".concat(-marqueeScrollWidth, "px, 0, 0); transition: ").concat(duration, "s all linear ").concat(typeof leading === 'number' ? "".concat(leading / 1000, "s") : '0s', ";");
        this.setData({
            marqueeStyle: newMarqueeStyle,
        });
        return newMarqueeStyle;
    },
    measureText: function (callback) {
        var _this = this;
        var fps = 40;
        var loop = getValueFromProps(this, 'loop');
        // 计算文本所占据的宽度，计算需要滚动的宽度
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var marqueeSize, contentSize, overflowWidth, viewWidth, marqueeScrollWidth;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getBoundingClientRectWithId('.ant-notice-bar-marquee')];
                    case 1:
                        marqueeSize = _a.sent();
                        return [4 /*yield*/, this.getBoundingClientRectWithId('.ant-notice-bar-content')];
                    case 2:
                        contentSize = _a.sent();
                        overflowWidth = (marqueeSize &&
                            contentSize &&
                            marqueeSize.width - contentSize.width) ||
                            0;
                        viewWidth = (contentSize === null || contentSize === void 0 ? void 0 : contentSize.width) || 0;
                        marqueeScrollWidth = overflowWidth;
                        if (loop) {
                            marqueeScrollWidth = overflowWidth + viewWidth;
                        }
                        if (overflowWidth > 0) {
                            callback({
                                overflowWidth: overflowWidth,
                                viewWidth: viewWidth,
                                duration: marqueeScrollWidth / fps,
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); }, 0);
    },
    // 文本滚动的计算
    resetMarquee: function (state) {
        var loop = getValueFromProps(this, 'loop');
        var viewWidth = state.viewWidth;
        var showMarqueeWidth = '0px';
        if (loop) {
            showMarqueeWidth = "".concat(viewWidth, "px");
        }
        var marqueeStyle = "transform: translate3d(".concat(showMarqueeWidth, ", 0, 0); transition: 0s all linear;");
        this.setData({
            marqueeStyle: marqueeStyle,
        });
    },
    onTransitionEnd: function () {
        var _this = this;
        var loop = getValueFromProps(this, 'loop');
        var trailing = 200;
        if (loop) {
            setTimeout(function () {
                _this.measureText(function (state) {
                    _this.resetMarquee.call(_this, state);
                });
            }, trailing);
        }
    },
}, {
    show: true,
    marqueeStyle: '',
}, undefined, {
    attached: function () {
        var _this = this;
        var enableMarquee = this.properties.enableMarquee;
        if (enableMarquee) {
            this.measureText(function (state) {
                _this.startMarquee.call(_this, state);
            });
        }
    },
    observers: {
        'enableMarquee': function (enableMarquee) {
            var _this = this;
            // 这里更新处理的原因是防止notice内容在动画过程中发生改变。
            if (enableMarquee) {
                this.measureText(function (state) {
                    _this.startMarquee.call(_this, state);
                });
            }
        },
    },
    pageLifetimes: {
        show: function () {
            var _this = this;
            if (this.properties.enableMarquee) {
                this.setData({ marqueeStyle: '' });
                this.resetMarquee({
                    overflowWidth: 0,
                    duration: 0,
                    viewWidth: 0,
                });
                this.measureText(function (state) { return _this.startMarquee.call(_this, state); });
            }
        },
    },
});
