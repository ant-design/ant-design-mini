import { Form } from '../../../src/Form/form';
Page({
    onLoad: function () {
        var _this = this;
        this.form = new Form();
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
    onReady: function () {
        var _this = this;
        setTimeout(function () {
            // 填入表单及校验
            _this.form.setFieldValue('fruit', '橘子');
            _this.form.setFieldValidatorStatus('fruit', {
                status: 'error',
                errors: ['后台服务返回: 橘子还在进货，请换一个'],
            });
        });
    },
    submit: function () {
        this.form.submit().then(function (values) {
        });
    },
});
