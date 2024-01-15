import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form();
    },
    handleRef(ref) {
        this.form.addItem(ref);
    },
    data: {
        needFruit: false,
    },
    onChange(value) {
        this.setData({
            needFruit: value,
        });
    },
    reset() {
        this.setData({
            needFruit: false,
        });
        this.form.reset();
    },
    async submit() {
        const values = await this.form.submit();
        console.log(values);
        my.alert({
            title: '提交',
            content: JSON.stringify(values),
        });
    },
});
