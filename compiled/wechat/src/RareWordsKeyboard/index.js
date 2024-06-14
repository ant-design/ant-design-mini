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
import { PINYIN_MAP } from './constants';
import { RareWordsKeyboardProps } from './props';
import { formatZDatas, loadFontFace, matchWordsRecommend } from './utils';
import { ZDATAS } from './zdatas';
import '../_util/assert-component2';
import { useEffect, useEvent, useState } from 'functional-mini/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useEvent as useStableCallback } from '../_util/hooks/useEvent';
import { mountComponent } from '../_util/component';
import { useInstanceBoundingClientRect } from '../_util/hooks/useInstanceBoundingClientRect';
var wordsData = formatZDatas(ZDATAS.datas);
var RareWordsKeyboard = function (props) {
    var _a = useState({
        showErrorPage: false,
        loading: false,
    }), fontState = _a[0], setFontState = _a[1];
    var _b = useState(0), maxDisplayNum = _b[0], setMaxDisplayNum = _b[1];
    var _c = useState({
        inputValue: [],
        displayStr: '',
        matchWordsList: [],
        showMoreWords: false, // 是否展示更多候选字
    }), keyboardState = _c[0], setKeyboardState = _c[1];
    var _d = useComponentEvent(props), triggerEvent = _d.triggerEvent, triggerEventOnly = _d.triggerEventOnly;
    var handleHide = useStableCallback(function () {
        setKeyboardState({
            inputValue: [],
            matchWordsList: [],
            displayStr: '',
            showMoreWords: false,
        });
        triggerEventOnly('close');
    });
    // 计算展示值和候选字列表
    function computeMatchWords(inputValue) {
        var displayStr = Array.isArray(inputValue)
            ? inputValue.join('')
            : inputValue;
        var curMatchWords = matchWordsRecommend(wordsData, displayStr);
        return {
            displayStr: displayStr,
            matchWordsList: curMatchWords,
        };
    }
    function loadFont() {
        setFontState(function (pre) {
            return __assign(__assign({}, pre), { loading: true });
        });
        loadFontFace()
            .then(function () {
            setFontState({ showErrorPage: false, loading: false });
        })
            .catch(function (err) {
            setFontState({ showErrorPage: true, loading: false });
            triggerEvent('error', err);
        });
    }
    var getBoundingClientRect = useInstanceBoundingClientRect().getBoundingClientRect;
    function computeMaxDisplayNum() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, singleWords, wordsWrap, maxDisplayNumInOneLine;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, Promise.all([
                            getBoundingClientRect('.ant-rare-words-keyboard-match_words_hidden'),
                            getBoundingClientRect('.ant-rare-words-keyboard-match_words_inner'),
                        ])];
                    case 1:
                        _a = _b.sent(), singleWords = _a[0], wordsWrap = _a[1];
                        if (!(wordsWrap === null || wordsWrap === void 0 ? void 0 : wordsWrap.width) || !(singleWords === null || singleWords === void 0 ? void 0 : singleWords.width))
                            return [2 /*return*/];
                        maxDisplayNumInOneLine = parseInt(((wordsWrap === null || wordsWrap === void 0 ? void 0 : wordsWrap.width) / (singleWords === null || singleWords === void 0 ? void 0 : singleWords.width)).toString(), 10);
                        setMaxDisplayNum(maxDisplayNumInOneLine);
                        return [2 /*return*/];
                }
            });
        });
    }
    useEffect(function () {
        loadFont();
        computeMaxDisplayNum();
    }, []);
    useEvent('handleRetry', function () {
        loadFont();
    });
    useEvent('handleWordClick', function (e) {
        var _a = e.currentTarget.dataset.value, value = _a === void 0 ? '' : _a;
        if (!value)
            return;
        triggerEvent('change', value);
        handleHide();
    });
    useEvent('hanleLookMore', function () {
        if (keyboardState.matchWordsList.length <= maxDisplayNum) {
            handleHide();
            return;
        }
        setKeyboardState(function (old) {
            return __assign(__assign({}, old), { showMoreWords: !old.showMoreWords });
        });
    });
    // 隐藏键盘，失去焦点
    useEvent('handleHide', function () {
        handleHide();
    });
    // 点击键盘key值
    useEvent('handleKeyClick', function (e) {
        if (fontState.loading) {
            return;
        }
        var _a = e.target.dataset.value, value = _a === void 0 ? '' : _a;
        if (!value) {
            return;
        }
        setKeyboardState(function (old) {
            var inputValue = __spreadArray(__spreadArray([], old.inputValue, true), [value], false);
            return __assign(__assign(__assign({}, old), { inputValue: inputValue }), computeMatchWords(inputValue));
        });
    });
    // 点击删除
    useEvent('handleDelete', function () {
        if (keyboardState.inputValue.length === 0) {
            return;
        }
        setKeyboardState(function (old) {
            var inputValue = __spreadArray([], old.inputValue, true);
            inputValue.pop();
            return __assign(__assign(__assign({}, old), { inputValue: __spreadArray([], inputValue, true) }), computeMatchWords(inputValue));
        });
    });
    return __assign(__assign(__assign(__assign({}, fontState), { maxDisplayNum: maxDisplayNum }), keyboardState), { pinyinMaps: PINYIN_MAP });
};
mountComponent(RareWordsKeyboard, RareWordsKeyboardProps);
