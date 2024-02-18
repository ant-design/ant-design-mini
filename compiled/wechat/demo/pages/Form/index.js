import { Form } from '../../../src/Form/form';
import cityList from './city';
Page({
    data: {
        onUpload: function (localFile) {
            return new Promise(function (resolve) {
                console.log('上传的图片为：', localFile);
                setTimeout(function () {
                    resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
                }, 2000);
            });
        },
        fruitList: ['苹果', '香蕉', '橘子', '西瓜'],
        cityList: cityList,
        radioGroupOptions: [
            { value: 'cat', label: '🐱' },
            { value: 'fox', label: '🦊' },
        ],
        checkboxGroupOptions: [
            { value: 'tomato', label: '🍅' },
            { value: 'potato', label: '🥔' },
            { value: 'eggplant', label: '🍆' },
        ],
        selectorOptions: [
            { value: 'basketball', text: '🏀' },
            { value: 'football', text: '⚽️' },
            { value: 'badminton', text: '🏸️' },
        ],
        toastShow: false,
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
    submit: function () {
        this.form.submit().then(function (values) {
            console.log(values);
        });
    },
    showToast: function () {
        this.setData({
            toastShow: true,
        });
    },
    handleCloseToast: function () {
        this.setData({
            toastShow: false,
        });
    },
});
