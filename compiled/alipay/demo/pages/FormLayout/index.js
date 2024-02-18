import { Form } from '../../../src/Form/form';
Page({
    data: {
        position: 'horizontal',
    },
    onLoad() {
        this.form = new Form();
    },
    handleRef(ref) {
        this.form.addItem(ref);
    },
    reset() {
        this.form.reset();
    },
    toggle() {
        this.setData({
            position: this.data.position === 'horizontal' ? 'vertical' : 'horizontal',
        });
    },
    submit() {
        this.form.submit().then(values => {
            console.log(values);
            my.alert({
                title: '提交',
                content: JSON.stringify(values),
            });
        });
    },
});
