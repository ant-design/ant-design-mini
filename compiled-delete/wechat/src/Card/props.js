export var CardDefaultProps = {
    className: '',
    config: {
        foldTapArea: 'btn',
    },
    title: '',
    operateText: '',
    needFold: false,
    foldStatus: false,
    headSticky: false,
    stickyTransparentTitle: false,
    stickyTop: '',
    onOperateClick: function () { },
    onFoldChange: function () { },
    onTitleSticky: function (status) { return status; },
};
