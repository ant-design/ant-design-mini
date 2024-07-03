import { implJsapi } from './base';
export var createCanvasContext = implJsapi({
    wechat: function (instance, args) {
        return new Promise(function (resolve) {
            var res = instance.createCanvasContext(args[0], args[1]);
            resolve(res);
        });
    },
    alipay: function (instance, args) {
        return new Promise(function (resolve) {
            var res = instance.createCanvasContext(args[0]);
            resolve(res);
        });
    },
});
