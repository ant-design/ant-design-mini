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
