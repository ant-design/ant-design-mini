import { implJsapi } from './base';
export var loadFontFace = implJsapi({
    wechat: function (instance, options) {
        return new Promise(function (resolve, reject) {
            instance.loadFontFace({
                family: options.family,
                source: options.source,
                success: function (res) {
                    resolve(res);
                },
                fail: function (err) {
                    reject(err);
                },
            });
        });
    },
    alipay: function (instance, options) {
        return new Promise(function (resolve, reject) {
            instance.loadFontFace({
                family: options.family,
                source: options.source,
                success: function (res) {
                    resolve(res);
                },
                fail: function (err) {
                    reject(err);
                },
            });
        });
    },
});
