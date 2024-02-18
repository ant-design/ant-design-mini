import { Form } from '../../../src/Form/form';
Page({
    onLoad: function () {
        var _this = this;
        this.form = new Form({
            initialValues: {
                account: 'lily',
                address: 'alipay',
                needDelivery: true,
                quantity: 1,
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
