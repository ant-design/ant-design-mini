import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form();
        this.form2 = new Form();
        if (this.formRefList) {
            this.formRefList.forEach((ref) => {
                this.form.addItem(ref);
            });
        }
        if (this.form2RefList) {
            this.form2RefList.forEach((ref) => {
                this.form2.addItem(ref);
            });
        }
    },
    handleRef(ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    handleRef2(ref) {
        if (!this.form2RefList) {
            this.form2RefList = [];
        }
        this.form2RefList.push(ref.detail);
    },
    reset() {
        this.form.reset();
    },
    reset2() {
        this.form2.reset();
    },
    async submit() {
        const values = await this.form.submit();
        console.log(values);
    },
    async submit2() {
        const values = await this.form2.submit();
        console.log(values);
    },
});
