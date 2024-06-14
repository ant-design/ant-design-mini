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
import { UploaderDefaultProps } from './props';
import { chooseImage } from '../_util/jsapi/choose-image';
import createValue from '../mixins/value';
Component(UploaderDefaultProps, {
    chooseImage: function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, onBeforeUpload, onUpload, fileList, _b, maxCount, sourceType, localFileList, chooseImageRes, err_1, beforeUploadRes, err_2, tasks;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = getValueFromProps(this, [
                            'onBeforeUpload',
                            'onUpload',
                        ]), onBeforeUpload = _a[0], onUpload = _a[1];
                        if (!onUpload) {
                            throw new Error('need props onUpload');
                        }
                        fileList = this.getValue();
                        _b = getValueFromProps(this, [
                            'maxCount',
                            'sourceType',
                        ]), maxCount = _b[0], sourceType = _b[1];
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, chooseImage({
                                count: typeof maxCount === 'undefined'
                                    ? Infinity
                                    : maxCount - fileList.length,
                                sourceType: sourceType,
                            })];
                    case 2:
                        chooseImageRes = _c.sent();
                        localFileList = (chooseImageRes.tempFiles ||
                            chooseImageRes.tempFilePaths ||
                            chooseImageRes.apFilePaths ||
                            chooseImageRes.filePaths ||
                            [])
                            .map(function (item) {
                            if (typeof item === 'string') {
                                return {
                                    path: item,
                                };
                            }
                            if (item.path) {
                                return {
                                    path: item.path,
                                    size: item.size,
                                };
                            }
                        })
                            .filter(function (item) { return !!item; });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _c.sent();
                        triggerEvent(this, 'chooseImageError', err_1);
                        return [2 /*return*/];
                    case 4:
                        if (!onBeforeUpload) return [3 /*break*/, 8];
                        _c.label = 5;
                    case 5:
                        _c.trys.push([5, 7, , 8]);
                        return [4 /*yield*/, onBeforeUpload(localFileList)];
                    case 6:
                        beforeUploadRes = _c.sent();
                        if (beforeUploadRes === false) {
                            return [2 /*return*/];
                        }
                        if (Array.isArray(beforeUploadRes)) {
                            localFileList = beforeUploadRes;
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        err_2 = _c.sent();
                        return [2 /*return*/];
                    case 8:
                        tasks = localFileList.map(function (file) { return _this.uploadFile(file); });
                        return [4 /*yield*/, Promise.all(tasks)];
                    case 9:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    uploadFile: function (localFile) {
        return __awaiter(this, void 0, void 0, function () {
            var onUpload, uid, tempFileList, url, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onUpload = getValueFromProps(this, 'onUpload');
                        uid = this.getCount();
                        tempFileList = __spreadArray(__spreadArray([], this.getValue(), true), [
                            {
                                path: localFile.path,
                                size: localFile.size,
                                uid: uid,
                                status: 'uploading',
                            },
                        ], false);
                        if (!this.isControlled()) {
                            this.update(tempFileList);
                        }
                        triggerEvent(this, 'change', tempFileList);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, onUpload(localFile)];
                    case 2:
                        url = _a.sent();
                        if (typeof url !== 'string' || !url) {
                            this.updateFile(uid, {
                                status: 'error',
                            });
                            return [2 /*return*/];
                        }
                        this.updateFile(uid, {
                            status: 'done',
                            url: url,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        this.updateFile(uid, {
                            status: 'error',
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    },
    updateFile: function (uid, file) {
        var fileList = this.getValue();
        var tempFileList = fileList.map(function (item) {
            if (item.uid === uid) {
                return __assign(__assign({}, item), file);
            }
            return item;
        });
        if (!this.isControlled()) {
            this.update(tempFileList);
        }
        triggerEvent(this, 'change', tempFileList);
    },
    onRemove: function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var fileList, onRemove, uid, file, result, tempFileList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fileList = this.getValue();
                        onRemove = getValueFromProps(this, 'onRemove');
                        uid = e.currentTarget.dataset.uid;
                        file = fileList.find(function (item) { return item.uid === uid; });
                        if (!onRemove) return [3 /*break*/, 2];
                        return [4 /*yield*/, onRemove(file)];
                    case 1:
                        result = _a.sent();
                        if (result === false) {
                            return [2 /*return*/];
                        }
                        _a.label = 2;
                    case 2:
                        tempFileList = fileList.filter(function (item) { return item.uid !== uid; });
                        if (!this.isControlled()) {
                            this.update(tempFileList);
                        }
                        triggerEvent(this, 'change', tempFileList);
                        return [2 /*return*/];
                }
            });
        });
    },
    onPreview: function (e) {
        var uid = e.currentTarget.dataset.uid;
        var fileList = this.getValue();
        var file = fileList.find(function (item) { return item.uid === uid; });
        triggerEvent(this, 'preview', file);
    },
    updateShowUploadButton: function () {
        var maxCount = getValueFromProps(this, 'maxCount');
        this.setData({
            showUploadButton: !maxCount || this.getValue().length < maxCount,
        });
    },
    count: 0,
    getCount: function () {
        // 使用 Date.now() 与 useId 作为前缀，防止每次前缀都相同
        this.count = (this.count || 0) + 1;
        // 使用 Date.now() 与 useId 作为前缀，防止每次前缀都相同
        var id = this.id;
        var prefix = id + '-' + Date.now();
        return "".concat(prefix, "-").concat(this.count);
    },
}, null, [
    createValue({
        defaultValueKey: 'defaultFileList',
        valueKey: 'fileList',
        transformValue: function (fileList) {
            var _this = this;
            if (fileList === void 0) { fileList = []; }
            return {
                needUpdate: true,
                value: fileList.map(function (item) {
                    var file = __assign({}, item);
                    if (typeof item.url === 'undefined') {
                        file.url = '';
                    }
                    if (typeof item.uid === 'undefined') {
                        file.uid = _this.getCount();
                    }
                    if (typeof item.status === 'undefined') {
                        file.status = 'done';
                    }
                    return file;
                }),
            };
        },
    }),
], {
    attached: function () {
        this.triggerEvent('ref', this);
        this.updateShowUploadButton();
        this._prevData = this.data;
    },
    observers: {
        '**': function (data) {
            var prevData = this._prevData || this.data;
            this._prevData = __assign({}, data);
            if (!this.isEqualValue(prevData)) {
                this.updateShowUploadButton();
            }
        },
    },
});
