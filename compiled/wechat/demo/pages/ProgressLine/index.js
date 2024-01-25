Page({
    data: {
        progress1: 10,
        progress2: 50,
        progress3: 50,
        progress4: 50,
    },
    handleAdd: function () {
        var progress1 = this.data.progress1 + 20;
        this.setData({
            progress1: Math.max(Math.min(progress1, 100), 0)
        });
    },
    handleDelete: function () {
        var progress1 = this.data.progress1 - 20;
        this.setData({
            progress1: Math.max(Math.min(progress1, 100), 0)
        });
    },
    handleInputChange1: function (num) {
        this.setData({
            progress1: +num
        });
    },
    handleInputChange2: function (num) {
        this.setData({
            progress2: +num
        });
    },
    handleInputChange3: function (num) {
        this.setData({
            progress3: +num
        });
    },
    handleInputChange4: function (num) {
        this.setData({
            progress4: +num
        });
    }
});
