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
    data: {
        changedValuesText: '',
        allValuesText: '',
    },
    onReady() {
        this.form.onValuesChange((changedValues, allValues) => {
            let changedValuesText = '';
            let allValuesText = '';
            Object.keys(changedValues).forEach((name) => {
                const value = changedValues[name];
                changedValuesText += `${name}: ${value};`;
            });
            Object.keys(allValues).forEach((name) => {
                const value = allValues[name];
                allValuesText += `${name}: ${value};`;
            });
            this.setData({
                changedValuesText,
                allValuesText,
            });
        });
    },
    handleRef(ref) {
        if (!this.formRefList) {
            this.formRefList = [];
        }
        this.formRefList.push(ref.detail);
    },
    reset() {
        this.form.reset();
        this.setData({
            changedValuesText: '',
            allValuesText: '',
        });
    },
    async submit() {
        const values = await this.form.submit();
        console.log(values);
    },
});
