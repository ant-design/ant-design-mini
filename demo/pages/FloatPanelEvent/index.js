
Page({
    data: {
        isvList2: new Array(10).fill(0),
        pos1: '最小高度',
        showLoading: true
    },
    handleContentScrollToLower () {
        setTimeout(() => {
            this.setData({
                isvList2: new Array(20).fill(0),
                showLoading: false
            })
        }, 2000)
    },
    handleScrolllStatus (pos) {
        this.setData({ pos1: pos === 'MAX' ? '最大高度' : pos === 'MIDDLE' ? '次最大高度' : '最小高度' })
    },
    saveRef (ref) {
        this.panel = ref
    },
})