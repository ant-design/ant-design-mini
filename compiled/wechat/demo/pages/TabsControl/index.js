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
        items: [],
    },
    onLoad: function () {
        var items = new Array(3).fill(null).map(function (_, index) {
            return {
                title: "Tab ".concat(index),
                content: "Content of tab ".concat(index),
            };
        });
        this.setData({
            items: items,
        });
    },
    onChange: function (current) {
        current = current.detail;
        this.setData({
            current: current,
        });
    },
    onPrevTap: function () {
        if (this.data.items.length === 0) {
            return;
        }
        var current = this.data.current === 0
            ? this.data.items.length - 1
            : this.data.current - 1;
        this.setData({
            current: current,
        });
    },
    onNextTap: function () {
        if (this.data.items.length === 0) {
            return;
        }
        var current = this.data.current >= this.data.items.length - 1
            ? 0
            : this.data.current + 1;
        this.setData({
            current: current,
        });
    },
    onAddTap: function () {
        var items = __spreadArray([], this.data.items, true);
        items.push({
            title: "Tab ".concat(items.length),
            content: "Content of tab ".concat(items.length),
        });
        this.setData({
            items: items,
            current: items.length - 1,
        });
    },
    onMinusTap: function () {
        if (this.data.items.length === 1) {
            return;
        }
        var items = __spreadArray([], this.data.items, true);
        items.splice(items.length - 1, 1);
        this.setData({
            items: items,
            current: Math.min(this.data.current, items.length - 1),
        });
    },
});
