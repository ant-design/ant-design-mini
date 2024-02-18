import { Form } from '../../../src/Form/form';
Page({
    onLoad() {
        this.form = new Form();
    },
    handleRef(ref) {
        this.form.addItem(ref);
    },
    reset() {
        this.form.reset();
    },
    submit() {
        this.form.submit().then(values => {
            my.alert({
                title: '提交',
                content: JSON.stringify(values),
            });
            console.log(values);
        });
    },
});
