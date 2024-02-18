import { Form } from '../../../src/Form/form';
Page({
    onLoad: function () {
        var _this = this;
        this.form = new Form({
            rules: {
                password: [
                    {
                        required: true,
                        message: '需要输入密码',
                    },
                ],
                confirm: [
                    {
                        required: true,
                        message: '需要输入确认密码',
                    },
                    function (form) { return ({
                        validator: function (_, value) {
                            if (!value || form.getFieldValue('password') === value) {
                                return;
                            }
                            throw new Error('验证密码需要跟密码相同');
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
    fill: function () {
        this.form.setFieldValue('account', 'lily');
        this.form.setFieldValue('password', '1234');
        this.form.setFieldValue('confirm', '1234');
    },
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
});
