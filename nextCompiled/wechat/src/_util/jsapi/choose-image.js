import { implJsapi } from './base';
export var chooseImage = implJsapi({
    wechat: function (instance, args) {
        return new Promise(function (resolve, reject) {
            /**
             * @see https://developers.weixin.qq.com/minigame/dev/api/media/video/wx.chooseMedia.html
             */
            instance.chooseMedia({
                mediaType: ['image'],
                count: args.count,
                sourceType: args.sourceType,
                success: function (res) {
                    var tempFiles = res.tempFiles.map(function (file) {
                        return {
                            size: file.size,
                            path: file.tempFilePath,
                        };
                    });
                    resolve({
                        tempFiles: tempFiles,
                    });
                },
                fail: function (err) {
                    reject(err);
                },
            });
        });
    },
    alipay: function (instance, args) {
        return new Promise(function (resolve, reject) {
            /**
             * @see https://opendocs.alipay.com/mini/api/media/image/my.chooseimage
             */
            instance.chooseImage({
                count: args.count,
                sourceType: args.sourceType,
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
