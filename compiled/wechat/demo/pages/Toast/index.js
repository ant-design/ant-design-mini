Page({
    data: {
        toast1Show: false,
        toast2Show: false,
        toast3Show: false,
        toast4Show: false,
        toast5Show: false,
        toast6Show: false,
        toast7Show: false,
        toast8Show: false,
        toast9Show: false,
    },
    handleShowToast: function (e) {
        var _a;
        var index = e.target.dataset.index;
        this.setData({
            toast1Show: false,
            toast2Show: false,
            toast3Show: false,
            toast4Show: false,
            toast5Show: false,
            toast6Show: false,
            toast7Show: false
        });
        this.setData((_a = {},
            _a["toast".concat(index, "Show")] = true,
            _a));
        console.log(this.data);
    },
    handleCloseToast: function (e) {
        var _a;
        var index = e.target.dataset.index;
        this.setData((_a = {},
            _a["toast".concat(index, "Show")] = false,
            _a));
    }
});
