Page({
    data: {
        pickerVisible: false,
        defaultValue: '上海',
        value: '上海',
        list: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
        formatTime: function (value, column) {
            return column.map(function (c) { return c && c.label; }).join('');
        },
        weekList: [
            {
                label: '周一',
                value: 'Mon',
            },
            {
                label: '周二',
                value: 'Tues',
            },
            {
                label: '周三',
                value: 'Wed',
            },
            {
                label: '周四',
                value: 'Thur',
            },
            {
                label: '周五',
                value: 'Fri',
            },
        ],
        columns: [
            [
                {
                    label: '周一',
                    value: 'Mon',
                },
                {
                    label: '周二',
                    value: 'Tues',
                },
                {
                    label: '周三',
                    value: 'Wed',
                },
                {
                    label: '周四',
                    value: 'Thur',
                },
                {
                    label: '周五',
                    value: 'Fri',
                },
            ],
            [
                {
                    label: '上午',
                    value: 'am',
                },
                {
                    label: '下午',
                    value: 'pm',
                },
            ],
        ],
    },
    handleDismissPicker: function (e) {
    },
    handleClearControlled: function () {
        this.setData({
            value: '',
        });
    },
    handleChangeControlled: function () {
        this.setData({
            value: '深圳',
        });
    },
    handleControlledOk: function (value) {
        this.setData({
            value: value,
        });
    },
    handleOk: function (value, column, e) {
        console.log('onOk value', value, 'onOk  column', column, e);
    },
    handleChange: function (value, column, e) {
        console.log('onChange value', value, 'onChange  column', column, e);
    },
    handleOnOk: function (value, column) {
        console.log('value', value, 'column', column);
    },
    handleTriggerPicker: function (visible, e) {
        console.log('onVisibleChange', visible, e);
    },
    handleTriggerControlledPicker: function (visible, e) {
        console.log('handleTriggerControlledPicker', visible);
        this.setData({
            pickerVisible: visible.detail,
        });
    },
    handleOpenPicker: function () {
        this.setData({
            pickerVisible: true,
        });
    },
});
