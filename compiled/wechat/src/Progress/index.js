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
import { Component, getValueFromProps } from '../_util/simply';
import { ProgressBarDefaultProps } from './props';
import { createCanvasContext } from '../_util/jsapi/create-canvas-context';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
var animationFrameDuration = 16;
Component(ProgressBarDefaultProps, {
    requestAnimationFrame: function (fn, duration) {
        if (duration === void 0) { duration = animationFrameDuration; }
        setTimeout(fn, duration);
    },
    getDrawColor: function () {
        var _a = getValueFromProps(this, [
            'strokeColor',
            'trailColor',
        ]), strokeColor = _a[0], trailColor = _a[1];
        var drawColor = {
            strokeColor: strokeColor || '#1677ff',
            trailColor: trailColor || '#F5F5F5',
        };
        return drawColor;
    },
    getCanvasContext: function () {
        return __awaiter(this, void 0, void 0, function () {
            var systemInfo, pixelRatio, width, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.ctx)
                            return [2 /*return*/];
                        return [4 /*yield*/, getSystemInfo()];
                    case 1:
                        systemInfo = _b.sent();
                        pixelRatio = systemInfo.pixelRatio;
                        width = getValueFromProps(this, 'width');
                        _a = this;
                        return [4 /*yield*/, createCanvasContext([this.canvasId, this])];
                    case 2:
                        _a.ctx = _b.sent();
                        this.ctx.imageSmoothingEnabled = true;
                        this.ctx.imageSmoothingQuality = 'high';
                        // 微信小程序不支持 CanvasWidth 参数，此时 pixelRatio 默认为 1
                        pixelRatio = 1;
                        this.setData({
                            canvasWidth: width * pixelRatio,
                        });
                        return [2 /*return*/];
                }
            });
        });
    },
    clearCanvas: function () {
        var ctx = this.ctx;
        var canvasWidth = this.data.canvasWidth;
        ctx.clearRect(0, 0, canvasWidth, canvasWidth);
    },
    updateCanvasProgress: function (prev) {
        return __awaiter(this, void 0, void 0, function () {
            var drawColor, curRad, targetRad, direction, draw;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        drawColor = this.getDrawColor();
                        return [4 /*yield*/, this.getCanvasContext()];
                    case 1:
                        _a.sent();
                        curRad = Math.floor((prev / 100) * 360);
                        targetRad = Math.floor((this.data.curProgress / 100) * 360);
                        direction = curRad < targetRad ? 1 : -1;
                        draw = function () {
                            if (curRad == targetRad)
                                return;
                            var _a = getValueFromProps(_this, [
                                'speed',
                                'animation',
                            ]), speed = _a[0], animation = _a[1];
                            curRad = direction * speed + curRad;
                            if (direction == -1) {
                                curRad = Math.max(curRad, targetRad);
                            }
                            else {
                                curRad = Math.min(curRad, targetRad);
                            }
                            _this.clearCanvas();
                            _this.drawOrbit(drawColor.trailColor);
                            _this.drawProgress(drawColor.strokeColor, curRad);
                            _this.ctx.draw(true);
                            _this.requestAnimationFrame(draw, animation ? animationFrameDuration : 0);
                        };
                        draw();
                        return [2 /*return*/];
                }
            });
        });
    },
    drawProgress: function (color, rad) {
        var ctx = this.ctx;
        var canvasWidth = this.data.canvasWidth;
        var strokeWidth = Number(getValueFromProps(this, 'strokeWidth'));
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;
        ctx.setLineCap('round');
        ctx.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 2 - strokeWidth, -Math.PI / 2, -Math.PI / 2 + (rad / 360) * 2 * Math.PI, false);
        ctx.stroke();
    },
    drawOrbit: function (color) {
        var ctx = this.ctx;
        var canvasWidth = this.data.canvasWidth;
        var strokeWidth = Number(getValueFromProps(this, 'strokeWidth'));
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = strokeWidth;
        ctx.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 2 - strokeWidth, 0, Math.PI * 2, false);
        ctx.stroke();
    },
    calProgress: function () {
        var _a = getValueFromProps(this, ['percent', 'type']), p = _a[0], type = _a[1];
        var percent = +p;
        if (isNaN(percent)) {
            return this.setData({ curProgress: 0 });
        }
        var prevProgress = this.data.curProgress;
        if (percent === prevProgress) {
            return;
        }
        this.setData({
            curProgress: percent > 100 ? 100 : percent < 0 ? 0 : percent,
        });
        if (type === 'circle') {
            this.setCanvasId();
            this.updateCanvasProgress(prevProgress);
        }
    },
    setCanvasId: function () {
        this.canvasId = this.$id
            ? "ant-progress-canvas-".concat(this.$id)
            : "ant-progress-canvas";
    },
}, undefined, {
    curProgress: 0,
    canvasWidth: 100,
}, {
    ctx: null,
    drawColor: null,
    canvas: null,
    attached: function () {
        this.calProgress();
    },
    observers: {
        '**': function () {
            this.calProgress();
        },
    },
});
