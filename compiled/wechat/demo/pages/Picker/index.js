import cityList from './city';
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
        cityList,
        cascaderValue: ['34', '330'],
        cascaderVisible: false,
    },
    handleDismiss(e) {
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
            value: value.detail[0],
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
    // 以下是级联选择的方法
    handleCascaderPickerChange(cascaderValue, selectedOption, e) {
        console.log('cityChange', cascaderValue, selectedOption, e);
    },
    handleCascaderOnOk(cascaderValue, selectedOption, e) {
        console.log('cityOk', cascaderValue, selectedOption, e);
    },
    handleCascaderControlledOk(cascaderValue, selectedOption, e) {
        this.setData({ cascaderValue: cascaderValue.detail[0] });
        console.log('cityOk', cascaderValue, selectedOption, e);
    },
    handleCascaderChangeControlled() {
        this.setData({ cascaderValue: ['31', '310'] });
    },
    handleCascaderClearControlled() {
        this.setData({ cascaderValue: [] });
    },
    handleCascaderTriggerControlledPicker(visible, e) {
        console.log('handleTriggerControlledPicker', visible);
        this.setData({
            cascaderVisible: visible.detail,
        });
    },
    handleCascaderOpenPicker() {
        this.setData({
            cascaderVisible: true,
        });
    },
});
