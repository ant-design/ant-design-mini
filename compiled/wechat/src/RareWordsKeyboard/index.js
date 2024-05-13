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
import { Component, triggerEvent, triggerEventOnly } from '../_util/simply';
import { PINYIN_MAP } from './constants';
import { RareWordsKeyboardProps } from './props';
import { formatZDatas, loadFontFace, matchWordsRecommend } from './utils';
import { ZDATAS } from './zdatas';
import { getInstanceBoundingClientRect } from '../_util/jsapi/get-instance-bounding-client-rect';
var wordsData = formatZDatas(ZDATAS.datas);
Component(RareWordsKeyboardProps, {
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
    // 隐藏键盘，失去焦点
    handleHide: function () {
        this.setData({
            inputValue: [],
            matchWordsList: [],
            displayStr: '',
            showMoreWords: false,
        });
        triggerEventOnly(this, 'close');
    },
    // 点击键盘key值
    handleKeyClick: function (e) {
        if (this.data.loading)
            return;
        var _a = e.currentTarget.dataset.value, value = _a === void 0 ? '' : _a;
        if (!value)
            return;
        var inputValue = __spreadArray(__spreadArray([], this.data.inputValue, true), [value], false);
        this.setData(__assign({ inputValue: __spreadArray([], inputValue, true) }, this.computeMatchWords(inputValue)));
    },
    // 点击删除
    handleDelete: function () {
        var inputValue = __spreadArray([], this.data.inputValue, true);
        if (this.data.inputValue.length === 0)
            return;
        inputValue.pop();
        this.setData(__assign({ inputValue: __spreadArray([], inputValue, true) }, this.computeMatchWords(inputValue)));
    },
    // 计算展示值和候选字列表
    computeMatchWords: function (inputValue) {
        var displayStr = Array.isArray(inputValue)
            ? inputValue.join('')
            : inputValue;
        var curMatchWords = matchWordsRecommend(wordsData, displayStr);
        return {
            displayStr: displayStr,
            matchWordsList: curMatchWords,
        };
    },
    // 点击查看更多
    hanleLookMore: function () {
        if (this.data.matchWordsList.length <= this.data.maxDisplayNum) {
            this.handleHide();
            return;
        }
        this.setData({
            showMoreWords: !this.data.showMoreWords,
        });
    },
    // 计算每行可以展示的最大字数
    computeMaxDisplayNum: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, singleWords, wordsWrap, maxDisplayNumInOneLine;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            this.getBoundingClientRect('.ant-rare-words-keyboard-match_words_hidden'),
                            this.getBoundingClientRect('.ant-rare-words-keyboard-match_words_inner'),
                        ])];
                    case 1:
                        _a = _b.sent(), singleWords = _a[0], wordsWrap = _a[1];
                        if (!(wordsWrap === null || wordsWrap === void 0 ? void 0 : wordsWrap.width) || !(singleWords === null || singleWords === void 0 ? void 0 : singleWords.width))
                            return [2 /*return*/];
                        maxDisplayNumInOneLine = parseInt(((wordsWrap === null || wordsWrap === void 0 ? void 0 : wordsWrap.width) / (singleWords === null || singleWords === void 0 ? void 0 : singleWords.width)).toString(), 10);
                        this.setData({ maxDisplayNum: maxDisplayNumInOneLine });
                        return [2 /*return*/];
                }
            });
        });
    },
    // 加载字体
    loadFont: function () {
        var _this = this;
        this.setData({
            loading: true,
        });
        loadFontFace()
            .then(function () {
            _this.setData({ showErrorPage: false, loading: false });
        })
            .catch(function (err) {
            _this.setData({ showErrorPage: true, loading: false });
            triggerEvent(_this, 'error', err);
        });
    },
    // 点击重试
    handleRetry: function () {
        this.loadFont();
    },
    handleWordClick: function (e) {
        var _a = e.currentTarget.dataset.value, value = _a === void 0 ? '' : _a;
        if (!value)
            return;
        triggerEvent(this, 'change', value);
        this.handleHide();
    },
}, {
    loading: false,
    inputValue: [],
    displayStr: '',
    matchWordsList: [],
    showMoreWords: false,
    pinyinMaps: PINYIN_MAP,
    maxDisplayNum: 0,
    showErrorPage: false, // 是否展示错误页
}, null, {
    attached: function () {
        this.loadFont();
        this.computeMaxDisplayNum();
    },
});
