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
import { ZDATAS } from './zdatas';
import { loadFontFace as loadFontFaceJSAPI } from '../_util/jsapi/load-font-face';
/**
 * json转字符串
 * @param {string} data 需要转json的字符串
 * @return {object} json 字符串
 */
export function safeJSONparse(data) {
    var result;
    try {
        result = JSON.parse(data);
    }
    catch (_a) {
        result = {};
    }
    return result || {};
}
/**
 * 判断数组是否为空
 */
export function isWordsDataEmpty(arr) {
    var _a;
    if (!arr)
        return true;
    if (!Array.isArray(arr))
        return true;
    if (arr.length === 0)
        return true;
    // 数据合法性校验
    if (!((_a = arr === null || arr === void 0 ? void 0 : arr[0]) === null || _a === void 0 ? void 0 : _a.charId))
        return true;
    return false;
}
/**
 * 清除字符串里的数字
 */
export function clearNumberInStr(str) {
    return str.replace(/[0-9]/gi, '');
}
/**
 * 格式化字库数据
 * @param datas ZDatas 数据
 * @return {IWordsData} 字库
 */
export function formatZDatas(datas) {
    if (datas === void 0) { datas = []; }
    return datas.map(function (item) {
        return __assign(__assign({}, item), { pinYinChars: item.pinYinChars.map(function (i) { return i.char; }), splitChars: item.splitChars.map(function (i) { return i.char; }) });
    });
}
/**
 * 候选字推荐序函数
 * 考虑两个维度，一个是输入值和生僻字的匹配程度，比如你输入YA 雅是完全匹配，炎是模糊匹配，排列的时候肯定”雅“在前面，
 * 如果除了”雅“还有一个”亚“，两个都是完全匹配，这个时候就看哪个字占比高，哪个就排在前面
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @param {string} filterKey 过滤依据的key值
 * @return {IWordsData} 返回符合要求并且排序好的候选项列表
 */
export function matchWordsRecommend(wordsData, inputValue, filterKey) {
    if (wordsData === void 0) { wordsData = []; }
    if (inputValue === void 0) { inputValue = ''; }
    if (filterKey === void 0) { filterKey = 'all'; }
    return wordsSorter(wordsFilter(wordsData, inputValue, filterKey), inputValue, filterKey);
}
/**
 * 字库过滤，只挑选符合要求的候选字
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @param {string} filterKey 过滤依据的key值
 * @return {IWordsData} 返回符合要求并且排序好的候选项列表
 */
export function wordsFilter(wordsData, inputValue, filterKey) {
    if (wordsData === void 0) { wordsData = []; }
    if (inputValue === void 0) { inputValue = ''; }
    if (filterKey === void 0) { filterKey = 'all'; }
    // 字库数据为空降级为使用本地数据
    if (!wordsData || isWordsDataEmpty(wordsData))
        wordsData = formatZDatas(ZDATAS.datas);
    if (!inputValue)
        return [];
    switch (filterKey) {
        case 'all':
            /* eslint-disable-next-line no-case-declarations */
            var matchPinyinArr = filterByPinyin(wordsData, inputValue);
            /* eslint-disable-next-line no-case-declarations */
            var matchSplitArr = filterBySplitWord(wordsData, inputValue);
            return mergeMatchWordsArr(matchPinyinArr, matchSplitArr);
        case 'pinyin':
            return filterByPinyin(wordsData, inputValue);
        case 'split':
            return filterBySplitWord(wordsData, inputValue);
        default:
            return [];
            break;
    }
}
/**
 * 根据拼音过滤候选项
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function filterByPinyin(wordsData, inputValue) {
    if (wordsData === void 0) { wordsData = []; }
    if (inputValue === void 0) { inputValue = ''; }
    var keyTranslate = inputValue.toUpperCase();
    return wordsData.filter(function (item) {
        var pinYinChars = (item === null || item === void 0 ? void 0 : item.pinYinChars) || [];
        if (pinYinChars.length === 0)
            return false;
        return (pinYinChars.filter(function (pinyinItem) {
            return pinyinItem.indexOf(keyTranslate) > -1;
        }).length > 0);
    });
}
/**
 * 根据拆字过滤候选项
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function filterBySplitWord(wordsData, inputValue) {
    if (wordsData === void 0) { wordsData = []; }
    if (inputValue === void 0) { inputValue = ''; }
    return wordsData.filter(function (item) {
        var splitChars = item.splitChars || [];
        if (splitChars.length === 0) {
            return false;
        }
        return (splitChars.filter(function (splitItem) {
            return splitItem.indexOf(inputValue) > -1;
        }).length > 0);
    });
}
/**
 * 合并多个候选项数组
 * @param {IWordsData} pinyinMatchArr 拼音匹配的候选项
 * @param {IWordsData} splitMatchArr 拼音匹配的候选项
 * @return {IWordsData} 返回合并后的候选项列表
 */
function mergeMatchWordsArr(pinyinMatchArr, splitMatchArr) {
    var unDuplicate = __spreadArray(__spreadArray([], pinyinMatchArr, true), splitMatchArr, true);
    if (unDuplicate.length === 0)
        return unDuplicate;
    var results = [];
    unDuplicate.forEach(function (item) {
        var findDuplicateWords = results.filter(function (item2) {
            return item.unicodeCodePoint === item2.unicodeCodePoint;
        });
        if (findDuplicateWords.length === 0)
            results.push(item);
    });
    return results;
}
/**
 * 候选项排序，用户选择可能性高的候选项排在前面
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @param {string} filterKey 过滤依据的key值
 * @return {IWordsData} 返回符合要求并且排序好的候选项列表
 */
export function wordsSorter(wordsData, inputValue, filterKey) {
    if (filterKey === void 0) { filterKey = 'all'; }
    switch (filterKey) {
        case 'all':
            // 当输入值以字母开头使用拼音排序
            if (/^[a-zA-Z0-9]+$/.test(inputValue)) {
                return sortByPinyin(wordsData, inputValue);
            }
            return sortBySplitWord(wordsData, inputValue);
        case 'pinyin':
            return sortByPinyin(wordsData, inputValue);
        case 'split':
            return sortBySplitWord(wordsData, inputValue);
        default:
            return [];
            break;
    }
}
/**
 * 根据拼音给候选项排序
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function sortByPinyin(wordsData, inputValue) {
    if (wordsData === void 0) { wordsData = []; }
    if (inputValue === void 0) { inputValue = ''; }
    var arr = wordsData.slice();
    // 清除输入值中的数字
    var keyTranslate = clearNumberInStr(inputValue.toUpperCase());
    arr.forEach(function (item) {
        var sort = 0;
        var pinYinChars = (item.pinYinChars || []).map(function (pinyin) {
            return clearNumberInStr(pinyin.toUpperCase());
        });
        // 拼音完全匹配 + 10000
        if (pinYinChars.indexOf(keyTranslate) > -1)
            sort += 10000;
        // 拼音模糊匹配 + 5000
        if (pinYinChars.filter(function (splitKey) { return splitKey.indexOf(keyTranslate) === 0; })
            .length > 0) {
            sort += 5000;
        }
        // 加上当前字的权重
        sort += item.weight || 0;
        /* eslint-disable no-param-reassign */
        item.sort = sort;
    });
    // 根据最终排序值排序
    arr.sort(function (item1, item2) { return (item2.sort || 0) - (item1.sort || 0); });
    return arr;
}
/**
 * 根据拆字给候选项排序
 * @param {IWordsData} wordsData 字库数据
 * @param {string} inputValue 当前输入的值
 * @return {IWordsData} 返回符合要求并候选项列表
 */
function sortBySplitWord(wordsData, inputValue) {
    if (wordsData === void 0) { wordsData = []; }
    if (inputValue === void 0) { inputValue = ''; }
    var arr = wordsData.slice();
    arr.forEach(function (item) {
        var sort = 0;
        var p = item.splitChars || [];
        // 拆字完全匹配 + 10000
        if (p.indexOf(inputValue) > -1)
            sort += 10000;
        // 拆字模糊匹配 + 5000
        if (p.filter(function (splitKey) { return splitKey.indexOf(inputValue) === 0; }).length > 0) {
            sort += 5000;
        }
        // 加上当前字的权重
        sort += item.weight || 0;
        /* eslint-disable no-param-reassign */
        item.sort = sort;
    });
    // 根据最终排序值排序
    arr.sort(function (item1, item2) { return (item2.sort || 0) - (item1.sort || 0); });
    return arr;
}
/**
 * 加载远程字体
 */
export function loadFontFace() {
    return __awaiter(this, void 0, void 0, function () {
        var fontName;
        return __generator(this, function (_a) {
            fontName = "url(\"".concat(ZDATAS.fontUrl, "\")");
            return [2 /*return*/, loadFontFaceJSAPI({
                    family: 'rare-words-font',
                    source: fontName,
                })];
        });
    });
}
