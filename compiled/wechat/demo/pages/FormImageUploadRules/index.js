import { Form } from '../../../src/Form/form';
Page({
    data: {
        onUpload: function (localFile) {
            return new Promise(function (resolve) {
                console.log('上传的图片为：', localFile);
                setTimeout(function () {
                    resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
                }, 2000);
            });
        },
    },
    onLoad: function () {
        var _this = this;
        this.form = new Form({
            rules: {
                imageList: [
                    {
                        required: true,
                        message: '需要上传图片',
                    },
                    function () { return ({
                        validator: function (_, fileList) {
                            if (fileList === void 0) { fileList = []; }
                            if (fileList.length !== 3) {
                                throw new Error('需要上传3张图片');
                            }
                            if (fileList.find(function (file) { return file.status !== 'done'; })) {
                                throw new Error('图片需要上传完成');
                            }
                        },
                    }); },
                ],
            },
        });
        if (this.formRefList) {
            this.formRefList.forEach(function (ref) {
                _this.form.addItem(ref);
            });
        }
    },
    handleRef: function (ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    reset: function () {
        this.form.reset();
    },
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
    onUpload: function (localFile) {
        return new Promise(function (resolve) {
            console.log('上传的图片为：', localFile);
            setTimeout(function () {
                resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
            }, 2000);
        });
    },
});
