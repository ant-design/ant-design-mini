var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Page({
    data: {
        current: 0,
        items: [
            {
                title: '步骤一',
                description: '描述信息',
            },
            {
                title: '步骤二',
                description: '描述信息',
            },
            {
                title: '步骤三',
                description: '描述信息',
            }
        ],
        iconList: [
            'SmileFill',
            '',
            'StarFill'
        ],
    },
    onNextTap: function () {
        if (this.data.current === this.data.items.length - 1) {
            my.alert({
                content: '完成',
            });
            return;
        }
        this.setData({
            current: this.data.current + 1,
        });
    },
    onPrevTap: function () {
        if (this.data.current === 0) {
            return;
        }
        this.setData({
            current: this.data.current - 1,
        });
    },
    onAddTap: function () {
        this.setData({
            items: __spreadArray(__spreadArray([], this.data.items, true), [
                {
                    title: '步骤' + this.data.items.length
                }
            ], false)
        });
    }
});
