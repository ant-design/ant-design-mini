/* eslint-disable @typescript-eslint/ban-ts-comment */
Page({
    data: {
        visible1: false,
        visible2: false,
        visible3: false,
        actions1: [
            {
                text: '复制',
                key: 'copy',
            },
            {
                text: '修改',
                key: 'modify',
            },
        ],
        actions2: [
            {
                text: '复制',
                key: 'copy',
                description: '请选择复制内容',
            },
            {
                text: '修改',
                key: 'modify',
                disabled: true,
            },
            {
                text: '删除',
                key: 'delete',
                danger: true,
            },
        ],
        actions3: [
            {
                text: '备份',
                key: 'backup',
                description: '请选择要备份的内容',
                icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*I0oNS4RCQzUAAAAAAAAAAAAAARQnAQ',
            },
            {
                text: '保存',
                key: 'save',
                icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*BNczQ7hmp2gAAAAAAAAAAAAAARQnAQ',
            },
            {
                text: '同步',
                key: 'sync',
                icon: 'https://gw.alipayobjects.com/mdn/rms_e7937b/afts/img/A*eRaVSrV56dIAAAAAAAAAAAAAARQnAQ',
            },
        ],
    },
    handleOpenBasic: function (e) {
        var _a;
        var index = e.currentTarget.dataset.index;
        this.setData((_a = {},
            _a["visible".concat(index)] = true,
            _a));
    },
    handleCloseBasic: function (e) {
        var _a;
        var index = e.currentTarget.dataset.index;
        this.setData((_a = {},
            _a["visible".concat(index)] = false,
            _a));
    },
    handleAction: function (item, index, e) {
        var _a = item.detail, clickItem = _a[0], clickIndex = _a[1];
        //@ts-ignore
        wx.showToast({
            title: "\u4F60\u70B9\u51FB\u4E86".concat(clickItem.key, "(").concat(clickIndex, ")"),
        });
    },
});
