import { implJsapi } from './base';
export var getSystemInfo = implJsapi({
    wechat: function (instance) {
        return new Promise(function (resolve, reject) {
            instance.getSystemInfo({
                success: function (res) {
                    resolve(res);
                },
                fail: function (err) {
                    reject(err);
                },
            });
        });
    },
    alipay: function (instance) {
        return new Promise(function (resolve, reject) {
            instance.getSystemInfo({
                success: function (res) {
                    resolve(res);
                },
                fail: function () {
                    reject();
                },
            });
        });
    },
});
