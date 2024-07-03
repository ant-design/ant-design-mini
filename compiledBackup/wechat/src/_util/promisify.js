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
/*
 *@Description: 把所有my.xx的方法变成promise
 */
function promisifyMy(name) {
    return function (options) {
        return new Promise(function (resolve, reject) {
            my[name](__assign(__assign({}, options), { success: resolve, fail: reject }));
        });
    };
}
export var chooseImage = promisifyMy('chooseImage');
export var chooseVideo = promisifyMy('chooseVideo');
export var chooseFileFromDisk = promisifyMy('chooseFileFromDisk');
export var uploadFile = promisifyMy('uploadFile');
export var getFileInfo = promisifyMy('getFileInfo');
export var previewImage = promisifyMy('previewImage');
export var downloadFile = promisifyMy('downloadFile');
