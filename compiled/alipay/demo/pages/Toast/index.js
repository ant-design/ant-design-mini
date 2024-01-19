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
    handleShowToast(e) {
        const { index } = e.target.dataset;
        this.setData({
            toast1Show: false,
            toast2Show: false,
            toast3Show: false,
            toast4Show: false,
            toast5Show: false,
            toast6Show: false,
            toast7Show: false
        });
        this.setData({
            [`toast${index}Show`]: true
        });
        console.log(this.data);
    },
    handleCloseToast(e) {
        const { index } = e.target.dataset;
        this.setData({
            [`toast${index}Show`]: false
        });
    }
});
