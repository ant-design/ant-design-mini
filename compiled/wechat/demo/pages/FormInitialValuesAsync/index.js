import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form();
        if (this.formRefList) {
            this.formRefList.forEach((ref) => {
                this.form.addItem(ref);
            });
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        wx.showLoading({
            title: '加载中',
        });
        setTimeout(() => {
            this.form.setInitialValues({
                account: 'lily',
                address: 'alipay',
                needDelivery: true,
                quantity: 1,
            });
            this.form.reset();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            wx.hideLoading();
        }, 1000);
    },
    handleRef(ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    reset() {
        this.form.reset();
    },
    async submit() {
        const values = await this.form.submit();
        console.log(values);
    },
});
