
Page({
    data: {
        isvList1: new Array(20).fill(0),
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