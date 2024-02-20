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
import { useEvent, useRef } from 'functional-mini/component';
import '../_util/assert-component2';
import { mountComponent } from '../_util/component';
import { useComponentEvent } from '../_util/hooks/useComponentEvent';
import { useMixState } from '../_util/hooks/useMixState';
import { triggerRefEvent } from '../_util/hooks/useReportRef';
import { chooseImage } from '../_util/jsapi/choose-image';
import { UploaderFunctionalProps, } from './props';
import { useId } from 'functional-mini/compat';
/**
 * 获取一个内部使用的 uid
 * 每次获取时自增
 */
var useCounter = function () {
    var counterRef = useRef(0);
    // 使用 Date.now() 与 useId 作为前缀，防止每次前缀都相同
    var prefix = useId() + '-' + Date.now();
    return {
        getCount: function () {
            counterRef.current = counterRef.current + 1;
            return "".concat(prefix, "-").concat(counterRef.current);
        },
    };
};
var ImageUpload = function (props) {
    var getCount = useCounter().getCount;
    var _a = useMixState(props.defaultFileList, {
        value: props.fileList,
        postState: function (fileList) {
            return {
                valid: true,
                value: (fileList || []).map(function (item) {
                    var file = __assign({}, item);
                    if (typeof item.url === 'undefined') {
                        file.url = '';
                    }
                    if (typeof item.uid === 'undefined') {
                        file.uid = getCount();
                    }
                    if (typeof item.status === 'undefined') {
                        file.status = 'done';
                    }
                    return file;
                }),
            };
        },
    }), fileList = _a[0], _b = _a[1], isControlled = _b.isControlled, update = _b.update, triggerUpdater = _b.triggerUpdater;
    triggerRefEvent();
    var triggerEvent = useComponentEvent(props).triggerEvent;
    function uploadFile(localFile) {
        return __awaiter(this, void 0, void 0, function () {
            var onUpload, uid, url, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onUpload = props.onUpload;
                        uid = getCount();
                        triggerUpdater(function (oldFiles) {
                            var tempFileList = __spreadArray(__spreadArray([], oldFiles, true), [
                                {
                                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                    //@ts-expect-error
                                    path: localFile.path,
                                    size: localFile.size,
                                    uid: uid,
                                    status: 'uploading',
                                },
                            ], false);
                            triggerEvent('change', tempFileList);
                            return tempFileList;
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, onUpload(localFile)];
                    case 2:
                        url = _a.sent();
                        if (typeof url !== 'string' || !url) {
                            updateFile(uid, {
                                status: 'error',
                            });
                            return [2 /*return*/];
                        }
                        updateFile(uid, {
                            status: 'done',
                            url: url,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        updateFile(uid, {
                            status: 'error',
                        });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    function updateFile(uid, file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                triggerUpdater(function (old) {
                    var tempFileList = old.map(function (item) {
                        if (item.uid === uid) {
                            return __assign(__assign({}, item), file);
                        }
                        return item;
                    });
                    triggerEvent('change', tempFileList);
                    return tempFileList;
                });
                return [2 /*return*/];
            });
        });
    }
    useEvent('chooseImage', function () { return __awaiter(void 0, void 0, void 0, function () {
        var onBeforeUpload, onUpload, maxCount, sourceType, localFileList, chooseImageRes, err_2, beforeUploadRes, err_3, tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    onBeforeUpload = props.onBeforeUpload, onUpload = props.onUpload, maxCount = props.maxCount, sourceType = props.sourceType;
                    if (!onUpload || typeof onUpload !== 'function') {
                        throw new Error('need props onUpload');
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, chooseImage({
                            count: typeof maxCount === 'undefined'
                                ? Infinity
                                : maxCount - fileList.length,
                            sourceType: sourceType,
                        })];
                case 2:
                    chooseImageRes = _a.sent();
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
                    err_2 = _a.sent();
                    triggerEvent('chooseImageError', err_2);
                    return [2 /*return*/];
                case 4:
                    if (!(onBeforeUpload && typeof onBeforeUpload === 'function')) return [3 /*break*/, 8];
                    _a.label = 5;
                case 5:
                    _a.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, onBeforeUpload(localFileList)];
                case 6:
                    beforeUploadRes = _a.sent();
                    if (beforeUploadRes === false) {
                        return [2 /*return*/];
                    }
                    if (Array.isArray(beforeUploadRes)) {
                        localFileList = beforeUploadRes;
                    }
                    return [3 /*break*/, 8];
                case 7:
                    err_3 = _a.sent();
                    return [2 /*return*/];
                case 8:
                    tasks = localFileList.map(function (file) { return uploadFile(file); });
                    return [4 /*yield*/, Promise.all(tasks)];
                case 9:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    useEvent('onRemove', function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var uid, file, result, tempFileList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uid = e.currentTarget.dataset.uid;
                    file = fileList.find(function (item) { return item.uid === uid; });
                    if (!(props.onRemove && typeof props.onRemove === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, props.onRemove(file)];
                case 1:
                    result = _a.sent();
                    if (result === false) {
                        return [2 /*return*/];
                    }
                    _a.label = 2;
                case 2:
                    tempFileList = fileList.filter(function (item) { return item.uid !== uid; });
                    if (!isControlled) {
                        update(tempFileList);
                    }
                    triggerEvent('change', tempFileList);
                    return [2 /*return*/];
            }
        });
    }); });
    useEvent('onPreview', function (e) {
        var uid = e.currentTarget.dataset.uid;
        var file = fileList.find(function (item) { return item.uid === uid; });
        triggerEvent('preview', file);
    });
    useEvent('update', function (e) {
        if (isControlled) {
            return;
        }
        update(e);
    });
    return {
        mixin: {
            value: fileList,
        },
    };
};
mountComponent(ImageUpload, UploaderFunctionalProps);
