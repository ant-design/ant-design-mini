
Page({
    data: {
        isvList1: [
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
        withMask: true,
        button1Text: '关闭蒙层'
    },
    handleToggleMask () {
        this.setData({
            button1Text: !this.data.withMask ? '关闭蒙层' : '开启蒙层',
            withMask: !this.data.withMask
        })
    }
})