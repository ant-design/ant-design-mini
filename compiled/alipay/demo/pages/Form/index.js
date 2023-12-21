import { __awaiter, __generator } from "tslib";
import { Form } from '../../../src/Form/form';
import cityList from './city';
Page({
    form: new Form(),
    data: {
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
    },
    handleRef: function (ref) {
        this.form.addItem(ref);
    },
    reset: function () {
        this.form.reset();
    },
    submit: function () {
        return __awaiter(this, void 0, void 0, function () {
            var values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.form.submit()];
                    case 1:
                        values = _a.sent();
                        my.alert({
                            title: '提交',
                            content: JSON.stringify(values, null, 2),
                        });
                        console.log(values);
                        return [2 /*return*/];
                }
            });
        });
    },
    onUpload: function (localFile) {
        return new Promise(function (resolve) {
            console.log('上传的图片为：', localFile);
            setTimeout(function () {
                resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
            }, 2000);
        });
    },
});
