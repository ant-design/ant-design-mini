Page({
    handleTap(e) {
        console.log(e);
        console.log('detail', e.detail);
        console.log('e.currentTarget.dataset', e.currentTarget.dataset);
        console.log('e.target.dataset', e.target.dataset);
        console.log('e.target.targetDataset', e.target.targetDataset);
    },
});
