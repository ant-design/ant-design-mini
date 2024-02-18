Page({
    data: {
        pickerVisible: false,
        defaultValue: '上海',
        value: '上海',
        list: ['北京', '上海', '深圳', '广州', '南京', '武汉', '无锡', '苏州'],
        formatTime: (value, column) => {
            return column.map((c) => c && c.label).join('');
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
    handleDismissPicker(e) {
    },
    handleClearControlled() {
        this.setData({
            value: '',
        });
    },
    handleChangeControlled() {
        this.setData({
            value: '深圳',
        });
    },
    handleControlledOk(value) {
        this.setData({
            value,
        });
    },
    handleOk(value, column, e) {
        console.log('onOk value', value, 'onOk  column', column, e);
    },
    handleChange(value, column, e) {
        console.log('onChange value', value, 'onChange  column', column, e);
    },
    handleOnOk(value, column) {
        console.log('value', value, 'column', column);
    },
    handleTriggerPicker(visible, e) {
        console.log('onVisibleChange', visible, e);
    },
    handleTriggerControlledPicker(visible, e) {
        console.log('handleTriggerControlledPicker', visible);
        this.setData({
            pickerVisible: visible.detail,
        });
    },
    handleOpenPicker() {
        this.setData({
            pickerVisible: true,
        });
    },
});
