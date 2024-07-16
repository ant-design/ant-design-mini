import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form();
        if (this.formRefList) {
            this.formRefList.forEach((ref) => {
                this.form.addItem(ref);
            });
        }
    },
    handleRef(ref) {
        if (this.form) {
            this.form.addItem(ref.detail);
        }
        else if (!this.formRefList) {
            this.formRefList = [ref.detail];
        }
        else {
            this.formRefList.push(ref.detail);
        }
    },
    data: {
        needFruit: false,
    },
    onChange(value) {
        this.setData({
            needFruit: value.detail,
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
    },
});
