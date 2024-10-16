Page({
    data: {
        progress1: 10,
        progress2: 50,
        progress3: 50,
        progress4: 50,
    },
    handleAdd() {
        const progress1 = this.data.progress1 + 20;
        this.setData({
            progress1: Math.max(Math.min(progress1, 100), 0)
        });
    },
    handleDelete() {
        const progress1 = this.data.progress1 - 20;
        this.setData({
            progress1: Math.max(Math.min(progress1, 100), 0)
        });
    },
    handleInputChange1(num) {
        this.setData({
            progress1: +num
        });
    },
    handleInputChange2(num) {
        this.setData({
            progress2: +num
        });
    },
    handleInputChange3(num) {
        this.setData({
            progress3: +num
        });
    },
    handleInputChange4(num) {
        this.setData({
            progress4: +num
        });
    }
});
