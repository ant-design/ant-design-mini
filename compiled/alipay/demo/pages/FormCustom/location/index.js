import { createForm } from '../../../../src/Form/form';
Component({
    mixins: [createForm()],
    data: {
        visible: false,
    },
    methods: {
        showPopup: function () {
            var _this = this;
            my.chooseLocation({
                success: function (res) {
                    _this.emit('onChange', res);
                },
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
