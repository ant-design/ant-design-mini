var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { CardDefaultProps } from './props';
Component({
    props: CardDefaultProps,
    data: {
        finalFoldStatus: false,
    },
    onInit: function () {
        var _a = this.props, foldStatus = _a.foldStatus, config = _a.config;
        this.setData({
            finalFoldStatus: foldStatus,
            finalConfig: __assign(__assign({}, CardDefaultProps.config), config),
        });
    },
    didUpdate: function (prevProps) {
        var foldStatus = this.props.foldStatus;
        if (prevProps.foldStatus !== foldStatus) {
            this.setData({
                finalFoldStatus: foldStatus,
            });
        }
    },
    methods: {
        // 点击展开收起按钮
        handleTapFoldBtn: function () {
            var _a = this.data, _b = _a.finalConfig, finalConfig = _b === void 0 ? {} : _b, finalFoldStatus = _a.finalFoldStatus;
            if (finalConfig.foldTapArea === 'btn') {
                this.setData({
                    finalFoldStatus: !finalFoldStatus,
                });
                this.props.onFoldChange(!finalFoldStatus, this.props);
            }
        },
        // 点击标题整栏
        handleTapCardHeader: function () {
            var _a = this.data, _b = _a.finalConfig, finalConfig = _b === void 0 ? {} : _b, finalFoldStatus = _a.finalFoldStatus;
            if (finalConfig.foldTapArea === 'header' && this.props.needFold) {
                this.setData({
                    finalFoldStatus: !finalFoldStatus,
                });
                this.props.onFoldChange(!finalFoldStatus, this.props);
            }
        },
        // 点击更多
        handleTapLink: function (e) {
            var onOperateClick = this.props.onOperateClick;
            onOperateClick && onOperateClick(e);
        },
        // 处理title的sticky状态变化
        handleStickyChange: function (status) {
            var onTitleSticky = this.props.onTitleSticky;
            onTitleSticky && onTitleSticky(status);
        },
    },
});
