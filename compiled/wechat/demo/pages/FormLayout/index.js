import { Form } from '../../../src/Form/form';
Page({
    data: {
        position: 'horizontal',
    },
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
    toggle: function () {
        this.setData({
            position: this.data.position === 'horizontal' ? 'vertical' : 'horizontal',
        });
    },
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
});
