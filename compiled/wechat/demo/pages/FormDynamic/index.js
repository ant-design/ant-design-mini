var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Form } from '../../../src/Form/form';
var account = 1;
Page({
    data: {
        list: [
            {
                id: "Account".concat(account++),
            },
            {
                id: "Account".concat(account++),
            },
        ],
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
        if (this.form) {
            this.form.addItem(ref.detail);
        }
        else {
            if (!this.formRefList) {
                this.formRefList = [];
            }
            this.formRefList.push(ref.detail);
        }
    },
    reset: function () {
        this.form.reset();
    },
    add: function () {
        this.setData({
            list: __spreadArray(__spreadArray([], this.data.list, true), [
                {
                    id: "Account".concat(account++),
                },
            ], false),
        });
    },
    minus: function (e) {
        var index = e.currentTarget.dataset.index;
        var list = __spreadArray([], this.data.list, true);
        list.splice(index, 1);
        this.setData({
            list: list,
        });
    },
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
});
