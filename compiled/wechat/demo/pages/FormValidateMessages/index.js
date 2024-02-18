import { Form } from '../../../src/Form/form';
var validateMessages = {
    required: '需要输入${label}',
    string: {
        min: '${label}最少${min}个字符',
    },
    pattern: {
        mismatch: '${label}需要满足${pattern}',
    },
};
Page({
    onLoad: function () {
        var _this = this;
        this.form = new Form({
            validateMessages: validateMessages,
            rules: {
                account: [
                    {
                        required: true,
                        min: 6,
                    },
                ],
                password: [
                    {
                        required: true,
                    },
                ],
                ip: [
                    {
                        required: true,
                        pattern: /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/,
                    },
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
});
