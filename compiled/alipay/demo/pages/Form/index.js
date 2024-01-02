var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Form } from '../../../src/Form/form';
import cityList from './city';
Page({
    form: new Form(),
    data: {
        fruitList: ['苹果', '香蕉', '橘子', '西瓜'],
        cityList,
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
    handleRef(ref) {
        this.form.addItem(ref);
    },
    reset() {
        this.form.reset();
    },
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            const values = yield this.form.submit();
            my.alert({
                title: '提交',
                content: JSON.stringify(values, null, 2),
            });
            console.log(values);
        });
    },
    onUpload(localFile) {
        return new Promise((resolve) => {
            console.log('上传的图片为：', localFile);
            setTimeout(() => {
                resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
            }, 2000);
        });
    },
});
