import { Form } from '../../../src/Form/form';
Page({
    data: {
        likeOptions: [
            { value: 'basketball', title: '🏀' },
            { value: 'football', title: '⚽️' },
            { value: 'badminton', title: '🏸️' },
        ],
        chooseOptions: [
            { value: '1', label: '1111' }
        ]
    },
    form: new Form(),
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
            content: JSON.stringify(values),
        });
    }
});
