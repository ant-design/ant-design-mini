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
        if (this.form) {
            this.form.addItem(ref.detail);
        }
        else if (!this.formRefList) {
            this.formRefList = [ref.detail];
        }
        else {
            this.formRefList.push(ref.detail);
        }
    },
    data: {
        needFruit: false,
    },
    onChange: function (value) {
        this.setData({
            needFruit: value.detail,
        });
    },
    reset: function () {
        this.setData({
            needFruit: false,
        });
        this.form.reset();
    },
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
});
