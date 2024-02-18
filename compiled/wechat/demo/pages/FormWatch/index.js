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
    data: {
        changedValuesText: '',
        allValuesText: '',
    },
    onReady: function () {
        var _this = this;
        this.form.onValuesChange(function (changedValues, allValues) {
            var changedValuesText = '';
            var allValuesText = '';
            Object.keys(changedValues).forEach(function (name) {
                var value = changedValues[name];
                changedValuesText += "".concat(name, ": ").concat(value, ";");
            });
            Object.keys(allValues).forEach(function (name) {
                var value = allValues[name];
                allValuesText += "".concat(name, ": ").concat(value, ";");
            });
            _this.setData({
                changedValuesText: changedValuesText,
                allValuesText: allValuesText,
            });
        });
    },
    handleRef: function (ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    reset: function () {
        this.form.reset();
        this.setData({
            changedValuesText: '',
            allValuesText: '',
        });
    },
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
});
