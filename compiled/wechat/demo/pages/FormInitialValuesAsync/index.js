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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        wx.showLoading({
            title: '加载中',
        });
        setTimeout(function () {
            _this.form.setInitialValues({
                account: 'lily',
                address: 'alipay',
                needDelivery: true,
                quantity: 1,
            });
            _this.form.reset();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            wx.hideLoading();
        }, 1000);
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
