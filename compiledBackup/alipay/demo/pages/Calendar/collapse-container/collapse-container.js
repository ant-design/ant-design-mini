import { Component, getValueFromProps } from '../../../../src/_util/simply';
Component({
    hide: false,
    defaultCollapse: null,
    title: '',
}, {
    handleToggle() {
        const { collapse } = this.data;
        this.setData({
            collapse: !collapse,
        });
    },
}, {
    collapse: true,
    internalHide: false,
    containerTitle: '',
}, null, {
    onInit() {
        const [defaultCollapse, hide, title] = getValueFromProps(this, [
            'defaultCollapse',
            'hide',
            'title',
        ]);
        this.setData({
            collapse: defaultCollapse !== null && defaultCollapse !== void 0 ? defaultCollapse : true,
            internalHide: hide,
            containerTitle: title,
        });
    },
});
