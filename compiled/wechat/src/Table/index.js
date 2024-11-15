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
import filter from 'lodash.filter';
import get from 'lodash.get';
import isEqual from 'lodash.isequal';
import reduce from 'lodash.reduce';
import { getSystemInfo } from '../_util/jsapi/get-system-info';
import { TableDefaultProps } from './props';
var rpx2px = function (rpx, windowWidth) {
    if (windowWidth === void 0) { windowWidth = 375; }
    var numRpx = rpx;
    if (typeof rpx === 'string' && rpx.slice(-3) === 'rpx') {
        numRpx = parseFloat(rpx.slice(0, -3));
    }
    var px = (numRpx / 750) * windowWidth;
    return px;
};
var defaultWidth = 150;
Component({
    sysInfo: Promise.resolve({}),
    data: {
        widthPx: 0,
        list: [],
        showFixedShadow: false,
    },
    props: TableDefaultProps,
    onInit: function () {
        this.init();
    },
    didUpdate: function (prevProps) {
        var prevDataSource = prevProps.dataSource, prevColumns = prevProps.columns;
        var _a = this.props, dataSource = _a.dataSource, columns = _a.columns;
        if (!isEqual(prevDataSource, dataSource) ||
            !isEqual(prevColumns, columns)) {
            this.init();
        }
    },
    methods: {
        init: function () {
            return __awaiter(this, void 0, void 0, function () {
                var _a, columns, dataSource, windowWidth, width, columnsData, rowsData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = this.props, columns = _a.columns, dataSource = _a.dataSource;
                            return [4 /*yield*/, this.getSysInfo()];
                        case 1:
                            windowWidth = (_b.sent()).windowWidth;
                            width = reduce(columns, function (sum, cur) {
                                return sum + cur.width;
                            }, 0);
                            columnsData = this.renderColumns(columns, windowWidth);
                            rowsData = this.renderRows(dataSource, windowWidth);
                            this.setData({
                                widthPx: rpx2px(width, windowWidth),
                                list: __spreadArray(__spreadArray([], columnsData, true), rowsData, true),
                            });
                            return [2 /*return*/];
                    }
                });
            });
        },
        renderColumns: function (columns, windowWidth, renderRule) {
            if (renderRule === void 0) { renderRule = {}; }
            var key = renderRule.key, sorterStatus = renderRule.sorterStatus;
            return [
                {
                    type: 'columns',
                    key: 'columns_0',
                    value: columns.map(function (v) { return (__assign(__assign({}, v), { sorterStatus: key === v.key ? sorterStatus : 'normal', widthPx: rpx2px(v.width || defaultWidth, windowWidth) })); }),
                },
            ];
        },
        renderRows: function (dataSource, windowWidth, renderRule) {
            if (renderRule === void 0) { renderRule = {}; }
            var columns = this.props.columns;
            var rowsData = dataSource.map(function (v, i) {
                return {
                    type: 'rows',
                    key: "rows_".concat(i),
                    value: columns.map(function (val) { return (__assign(__assign({}, val), { key: val.key, dataIndex: val.dataIndex, value: v[val.dataIndex], textAlignRight: v.textAlignRight || val.textAlignRight, rowsData: v, widthPx: rpx2px(val.width || defaultWidth, windowWidth), fixed: val.fixed })); }),
                };
            });
            var key = renderRule.key, sorter = renderRule.sorter, sorterStatus = renderRule.sorterStatus;
            // 排序返回
            if (sorter && sorterStatus !== 'normal') {
                return rowsData.sort(function (a, b) {
                    var aValue = filter(a.value, { key: key })[0].value;
                    var bValue = filter(b.value, { key: key })[0].value;
                    if (sorterStatus === 'forward') {
                        return aValue - bValue;
                    }
                    return bValue - aValue;
                });
            }
            // 默认返回
            return rowsData;
        },
        handleSort: function (e) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, columns, dataSource, _b, key, sorter, sorterStatus, filterData, onSort, windowWidth, type2status, renderRule, columnsData, rowsData, newDataSource;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = this.props, columns = _a.columns, dataSource = _a.dataSource;
                            _b = get(e, 'target.dataset.item'), key = _b.key, sorter = _b.sorter, sorterStatus = _b.sorterStatus;
                            filterData = filter(columns, { key: key });
                            onSort = filterData && filterData[0] && filterData[0].onSort;
                            return [4 /*yield*/, this.getSysInfo()];
                        case 1:
                            windowWidth = (_c.sent()).windowWidth;
                            type2status = {
                                // 默认时点击就正序
                                normal: 'forward',
                                // 正序时点击就倒序
                                forward: 'reverse',
                                // 倒序时点击就默认
                                reverse: 'normal',
                            };
                            renderRule = {
                                key: key,
                                sorter: sorter,
                                sorterStatus: type2status[sorterStatus],
                            };
                            columnsData = this.renderColumns(columns, windowWidth, renderRule);
                            rowsData = [];
                            if (!onSort) return [3 /*break*/, 3];
                            return [4 /*yield*/, onSort(renderRule.sorterStatus)];
                        case 2:
                            newDataSource = _c.sent();
                            rowsData = this.renderRows(newDataSource, windowWidth);
                            return [3 /*break*/, 4];
                        case 3:
                            rowsData = this.renderRows(dataSource, windowWidth, renderRule);
                            _c.label = 4;
                        case 4:
                            this.setData({
                                list: __spreadArray(__spreadArray([], columnsData, true), rowsData, true),
                            });
                            return [2 /*return*/];
                    }
                });
            });
        },
        handleTouchMove: function () {
            this.setData({
                showFixedShadow: true,
            });
        },
        handleScrollToUpper: function () {
            this.setData({
                showFixedShadow: false,
            });
        },
        getSysInfo: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.sysInfo)
                        return [2 /*return*/, this.sysInfo];
                    this.sysInfo = getSystemInfo();
                    return [2 /*return*/, this.sysInfo];
                });
            });
        },
    },
});
