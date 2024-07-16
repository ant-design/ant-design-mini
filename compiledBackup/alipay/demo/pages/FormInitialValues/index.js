import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form({
            initialValues: {
                account: 'lily',
                address: 'alipay',
                needDelivery: true,
                quantity: 1,
            },
        });
    },
    handleRef(ref) {
        this.form.addItem(ref);
    },
    reset() {
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
