Page({
    data: {
        value: '',
        visible: false,
    },
    onAmountFocus() {
        this.setData({ visible: true });
    },
    onChange(e) {
        e = e.detail;
        // 第一位输入0，第二位输入1，直接展示1
        if (e[0] === '0' && e[1] && e[1] !== '.') {
            this.setData({ value: e.slice(1, e.length) });
            return;
        }
        // 小数点补齐0.
        if (e === '.') {
            this.setData({ value: '0.' });
            return;
        }
        // 不允许多个小数点
        const onePoint = e && e[e.length - 1] === '.' && e.length - 1 !== e.indexOf('.');
        // 限制小数点后2位
        const precision2 = e && e.split('.').length > 1 && e.split('.')[1].length === 3;
        if (onePoint || precision2) {
            this.setData({ value: e.slice(0, e.length - 1) });
            return;
        }
        this.setData({ value: e });
    },
    onClose() {
        // 失去焦点时如果末尾是小数点，自动去掉
        if (this.data.value[this.data.value.length - 1] === '.') {
            this.setData({
                value: this.data.value.slice(0, this.data.value.length - 1),
            });
        }
        this.setData({ visible: false });
    },
});
