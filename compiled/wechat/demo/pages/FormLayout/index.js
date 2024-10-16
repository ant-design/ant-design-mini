import { Form } from '../../../src/Form/form';
Page({
    data: {
        position: 'horizontal',
    },
    onLoad() {
        this.form = new Form();
        if (this.formRefList) {
            this.formRefList.forEach((ref) => {
                this.form.addItem(ref);
            });
        }
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
    toggle() {
        this.setData({
            position: this.data.position === 'horizontal' ? 'vertical' : 'horizontal',
        });
    },
    async submit() {
        const values = await this.form.submit();
        console.log(values);
    },
});
