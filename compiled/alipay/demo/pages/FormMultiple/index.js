import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form();
        this.form2 = new Form();
    },
    handleRef(ref) {
        this.form.addItem(ref);
    },
    handleRef2(ref) {
        this.form2.addItem(ref);
    },
    reset() {
        this.form.reset();
    },
    reset2() {
        this.form2.reset();
    },
    async submit() {
        const values = await this.form.submit();
        my.alert({
            title: '表单1提交',
            content: JSON.stringify(values, null, 2),
        });
        console.log(values);
    },
    async submit2() {
        const values = await this.form2.submit();
        my.alert({
            title: '表单2提交',
            content: JSON.stringify(values, null, 2),
        });
        console.log(values);
    },
});
