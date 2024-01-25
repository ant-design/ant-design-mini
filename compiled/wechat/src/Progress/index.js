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
import { useMemo, useRef, useState } from 'functional-mini/compat';
import { useComponent, useEffect } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { createCanvasContext } from '../_util/jsapi/create-canvas-context';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { ProgressBarFunctionalProps } from './props';
function requestAnimationFrame(fn) {
    setTimeout(fn, 16);
}
function toNumber(value, defaultValue) {
    if (typeof value === 'number') {
        return value;
    }
    if (typeof value === 'string') {
        var val = parseInt(value, 10);
        if (isNaN(val)) {
            return defaultValue;
        }
        return val;
    }
    return defaultValue;
}
var Progress = function (props) {
    var _a = useState(0), curProgress = _a[0], setCurProgress = _a[1];
    var canvasRequestRef = useRef(null);
    var _b = useState(100), canvasWidthState = _b[0], setCanvasWidthState = _b[1];
    function getDrawColor() {
        return __awaiter(this, void 0, void 0, function () {
            var strokeColor, trailColor, drawColor;
            return __generator(this, function (_a) {
                strokeColor = props.strokeColor, trailColor = props.trailColor;
                drawColor = {
                    strokeColor: strokeColor || '#1677ff',
                    trailColor: trailColor || '#F5F5F5',
                };
                return [2 /*return*/, drawColor];
            });
        });
    }
    function drawProgress(ctx, canvasWidth, color, rad) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = toNumber(props.strokeWidth, 8);
        ctx.setLineCap('round');
        ctx.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 2 - toNumber(props.strokeWidth, 8), -Math.PI / 2, -Math.PI / 2 + (rad / 360) * 2 * Math.PI, false);
        ctx.stroke();
    }
    function drawOrbit(ctx, canvasWidth, color) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = toNumber(props.strokeWidth, 8);
        ctx.arc(canvasWidth / 2, canvasWidth / 2, canvasWidth / 2 - toNumber(props.strokeWidth, 8), 0, Math.PI * 2, false);
        ctx.stroke();
    }
    function clearCanvas(ctx, canvasWidth) {
        ctx.clearRect(0, 0, canvasWidth, canvasWidth);
    }
    var instance = useComponent();
    var canvasId = useMemo(function () {
        if (instance.$id) {
            return "ant-progress-canvas-".concat(instance.$id);
        }
        return "ant-progress-canvas";
    }, []);
    function getCanvasContext() {
        return __awaiter(this, void 0, void 0, function () {
            var ctx;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = canvasRequestRef.current;
                        if (!ctx) return [3 /*break*/, 2];
                        return [4 /*yield*/, ctx];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        canvasRequestRef.current = createCanvasContext([canvasId, instance]);
                        return [4 /*yield*/, canvasRequestRef.current];
                    case 3:
                        ctx = _a.sent();
                        ctx.imageSmoothingEnabled = true;
                        ctx.imageSmoothingQuality = 'high';
                        return [2 /*return*/, ctx];
                }
            });
        });
    }
    function getCanvasWidth() {
        return __awaiter(this, void 0, void 0, function () {
            var systemInfo, pixelRatio, width;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getSystemInfo()];
                    case 1:
                        systemInfo = _a.sent();
                        pixelRatio = systemInfo.pixelRatio;
                        width = props.width;
                        // 微信小程序不支持 CanvasWidth 参数，此时 pixelRatio 默认为 1
                        pixelRatio = 1;
                        return [2 /*return*/, pixelRatio * width];
                }
            });
        });
    }
    function updateCanvasProgress(prev, targetPercent) {
        return __awaiter(this, void 0, void 0, function () {
            var drawColor, ctx, curRad, canvasWidth, targetRad, direction, draw;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getDrawColor()];
                    case 1:
                        drawColor = _a.sent();
                        return [4 /*yield*/, getCanvasContext()];
                    case 2:
                        ctx = _a.sent();
                        curRad = Math.floor((prev / 100) * 360);
                        return [4 /*yield*/, getCanvasWidth()];
                    case 3:
                        canvasWidth = _a.sent();
                        setCanvasWidthState(canvasWidth);
                        targetRad = Math.floor((targetPercent / 100) * 360);
                        direction = curRad < targetRad ? 1 : -1;
                        draw = function () {
                            if (curRad == targetRad)
                                return;
                            curRad = direction * props.speed + curRad;
                            if (direction == -1) {
                                curRad = Math.max(curRad, targetRad);
                            }
                            else {
                                curRad = Math.min(curRad, targetRad);
                            }
                            clearCanvas(ctx, canvasWidth);
                            drawOrbit(ctx, canvasWidth, drawColor.trailColor);
                            drawProgress(ctx, canvasWidth, drawColor.strokeColor, curRad);
                            ctx.draw(true);
                            requestAnimationFrame(draw);
                        };
                        draw();
                        return [2 /*return*/];
                }
            });
        });
    }
    useEffect(function () {
        var percent = +props.percent;
        if (isNaN(percent)) {
            percent = 0;
        }
        if (percent !== curProgress) {
            setCurProgress(percent > 100 ? 100 : percent < 0 ? 0 : percent);
        }
        if (props.type === 'circle') {
            updateCanvasProgress(curProgress, percent);
        }
    }, [props.type, props.speed, props.percent]);
    return {
        curProgress: curProgress,
        canvasWidth: canvasWidthState,
        canvasId: canvasId,
    };
};
mountComponent(Progress, ProgressBarFunctionalProps);
