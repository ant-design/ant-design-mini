import { Form } from '../../../src/Form/form';
import cityList from './city';
Page({
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
        toastShow: false,
    },
    onLoad() {
        this.form = new Form();
    },
    handleRef(ref) {
        this.form.addItem(ref);
    },
    reset() {
        this.form.reset();
    },
    async submit() {
        const values = await this.form.submit();
        my.alert({
            title: '提交',
            content: JSON.stringify(values, null, 2),
        });
        console.log(values);
    },
    onUpload(localFile) {
        return new Promise((resolve) => {
            console.log('上传的图片为：', localFile);
            setTimeout(() => {
                resolve('https://gw.alipayobjects.com/mdn/rms_226d75/afts/img/A*5m0ZQYhxhjEAAAAAAAAAAAAAARQnAQ');
            }, 2000);
        });
    },
    showToast() {
        this.setData({
            toastShow: true,
        });
    },
    handleCloseToast() {
        this.setData({
            toastShow: false,
        });
    },
});
