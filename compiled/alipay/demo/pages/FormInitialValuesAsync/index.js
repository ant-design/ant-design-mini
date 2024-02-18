import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form();
        my.showLoading({
            content: '表单加载中...',
        });
        setTimeout(() => {
            this.form.setInitialValues({
                account: 'lily',
                address: 'alipay',
                needDelivery: true,
                quantity: 1,
            });
            this.form.reset();
            my.hideLoading();
        }, 1000);
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
