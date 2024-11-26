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
import { Component, getValueFromProps } from '../_util/simply';
import { AutoResizeDefaultProps } from './props';
Component(AutoResizeDefaultProps, {
    getInstance: function () {
        if (this.$id) {
            return my;
        }
        return this;
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
    adjustFontSize: function () {
        var _this = this;
        // 用createSelectorQuery来获取容器尺寸信息
        this.getBoundingClientRect('.ant-autoresize-fontsize-container').then(function (rect) {
            if (!rect)
                return;
            var _a = getValueFromProps(_this, [
                'text',
                'maxFontSize',
                'ratio',
            ]), text = _a[0], maxFontSize = _a[1], ratio = _a[2];
            // 假设自适应逻辑是基于容器宽度来设置字号
            var containerWidth = rect.width;
            var textLength = text.length;
            /** 判断是否还有空隙 总宽度 - 字体宽度 > 0 */
            var hasSpace = containerWidth - (maxFontSize / ratio) * textLength > 0;
            if (!hasSpace) {
                _this.checkTextOverflow();
            }
        });
    },
    // 检查是否超长
    checkTextOverflow: function () {
        var _this = this;
        // 子组件插槽的类名是default-slot
        Promise.all([
            this.getBoundingClientRect('.ant-autoresize-slot'),
            this.getBoundingClientRect('.ant-autoresize-fontsize-container'),
        ]).then(function (rects) {
            var textRect = rects[0];
            var containerRect = rects[1];
            if (textRect && containerRect) {
                var _a = getValueFromProps(_this, [
                    'wrap',
                    'minFontSize',
                ]), wrap = _a[0], minFontSize = _a[1];
                var newStyle = '';
                // 如果容器宽度小于文本宽度，且容器高度支持换行，则换行；
                // wrap为true时，文案超长会换行，注意样式如margin-top重叠
                if (containerRect.height / 2 > textRect.height || wrap) {
                    newStyle = "font-size: ".concat(minFontSize, "rpx; overflow: visible; white-space: pre-wrap; word-wrap: break-word; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;");
                }
                else {
                    // 如果不支持换行，则直接出现省略号；
                    newStyle = "font-size: ".concat(minFontSize, "rpx; max-width: ").concat(textRect.width, "px; width: ").concat(textRect.width, "px; overflow: hidden; display: inline-block; text-overflow: ellipsis; white-space: nowrap; -webkit-box-orient: vertical;");
                }
                // 设置样式...
                _this.setData({
                    wrapAndEllipsisStyle: newStyle,
                });
            }
        });
    },
}, {
    /** 换行或省略号样式 */
    wrapAndEllipsisStyle: '',
}, undefined, {
    attached: function () {
        this.adjustFontSize();
    },
});
