import { createForm } from '../../../../src/Form/form';
Component({
    mixins: [createForm()],
    data: {
        visible: false,
    },
    methods: {
        showPopup: function () {
            this.setData({
                visible: true,
            });
        },
        handlePopupClose: function () {
            this.setData({
                visible: false,
            });
        },
        onChange: function (value, e) {
            this.emit('onChange', value);
        },
    }
});
