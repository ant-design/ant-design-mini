import { Form } from '../../../src/Form/form';
Page({
    onLoad: function () {
        var _this = this;
        this.form = new Form();
        this.form2 = new Form();
        if (this.formRefList) {
            this.formRefList.forEach(function (ref) {
                _this.form.addItem(ref);
            });
        }
        if (this.form2RefList) {
            this.form2RefList.forEach(function (ref) {
                _this.form2.addItem(ref);
            });
        }
    },
    handleRef: function (ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    handleRef2: function (ref) {
        if (!this.form2RefList) {
            this.form2RefList = [];
        }
        this.form2RefList.push(ref.detail);
    },
    reset: function () {
        this.form.reset();
    },
    reset2: function () {
        this.form2.reset();
    },
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
    submit2: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
});
