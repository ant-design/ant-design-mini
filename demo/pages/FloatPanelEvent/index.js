
Page({
    data: {
        isvList2: [
            {
                name: '供应商1',
                price: 110
            },
            {
                name: '供应商1',
                price: 110
            },
            {
                name: '供应商1',
                price: 110
            },
            {
                name: '供应商1',
                price: 110
            },
            {
                name: '供应商1',
                price: 110
            },
            {
                name: '供应商1',
                price: 110
            },
            {
                name: '供应商1',
                price: 110
            },
            {
                name: '供应商1',
                price: 110
            },
        ],
        pos1: '最小高度',
    },
    handleContentScrollToLower () {
        setTimeout(() => {
            this.setData({
                isvList2: this.data.isvList2.concat(Array(10).fill(
                    {
                        name: '供应商1',
                        price: 110
                    }
                )),
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