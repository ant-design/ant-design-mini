Page({
    data: {
        visible: false,
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false,
        visible5: false,
        visible6: false,
        visible7: false,
    },
    // 默认键盘
    onTap: function () {
        this.setData({ visible: !this.data.visible });
    },
    // 没有小数点
    onTap1: function () {
        this.setData({ visible1: !this.data.visible1 });
    },
    // 带确认按钮
    onTap2: function () {
        this.setData({ visible2: !this.data.visible2 });
    },
    // 带向下箭头
    onTap3: function () {
        this.setData({ visible3: !this.data.visible3 });
    },
    // 乱序键盘
    onTap4: function () {
        this.setData({ visible4: !this.data.visible4 });
    },
    // 带标题
    onTap5: function () {
        this.setData({ visible5: !this.data.visible5 });
    },
    // 自定义标题
    onTap6: function () {
        this.setData({ visible6: !this.data.visible6 });
    },
    // 自定义确认按钮
    onTap7: function () {
        this.setData({ visible7: !this.data.visible7 });
    },
});
